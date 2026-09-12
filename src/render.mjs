import config from '../site.config.mjs';
import {services, featuredServices, secondaryServices, serviceBySlug} from './services/index.mjs';
import {ui} from './ui.mjs';
import {articles, articleBySlug, articleLanguages} from './articles/index.mjs';
import {legalSections} from './legal.mjs';
import {versioned} from './assets.mjs';
import {images, OG_WIDTH, OG_HEIGHT} from './images.mjs';

export const LANGS = ['ka', 'en', 'ru'];
export const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));

// URL scheme: no trailing slashes anywhere except the site root. Language roots are /en and /ru.
export const routeFor = (slug = '', lang = 'ka') => (lang === 'ka' ? '' : '/' + lang) + (slug ? '/' + slug : (lang === 'ka' ? '/' : ''));
export const fileFor = route => (route === '/' ? 'index.html' : route.replace(/^\//, '') + '/index.html');
// Relative href so the generated tree also works when opened from the file system.
function portable(current, target) {
  const from = fileFor(current).split('/'); from.pop();
  const to = fileFor(target.split(/[?#]/)[0] || '/').split('/');
  while (from.length && to.length && from[0] === to[0]) { from.shift(); to.shift(); }
  return '../'.repeat(from.length) + to.join('/') + (target.match(/[?#].*$/)?.[0] || '');
}

const hasPortfolio = config.portfolio.length > 0;
const year = config.date.slice(0, 4);
const fill = text => String(text).replaceAll('{year}', year);
const languagesFor = slug => {
  const article = slug.startsWith('blog/') ? articleBySlug(slug.slice(5)) : null;
  return article ? articleLanguages(article) : LANGS;
};

export function renderPage(slug, lang = 'ka') {
  const t = ui[lang];
  const route = routeFor(slug, lang);
  const depth = fileFor(route).split('/').length - 1;
  const asset = '../'.repeat(depth) + 'assets/';
  const assetUrl = name => asset + versioned(name);

  // --- link and rich-text helpers -------------------------------------------------------------
  const a = (target, text, cls = '', attrs = '') => `<a href="${escape(portable(route, target))}" data-route="${escape(target)}"${cls ? ` class="${cls}"` : ''}${attrs ? ' ' + attrs : ''}>${text}</a>`;
  const link = (s, text, cls = '', attrs = '') => a(routeFor(s, lang), text, cls, attrs);
  // Internal links in copy are written as [label](/route) against Georgian routes; they are re-mapped to the page language.
  const localise = target => {
    if (!target.startsWith('/')) return target;
    const [path, suffix = ''] = target.split(/(?=[?#])/);
    const s = path === '/' ? '' : path.slice(1);
    if (s.startsWith('blog/') && !articleLanguages(articleBySlug(s.slice(5)) || {}).includes(lang)) return routeFor('blog', lang) + suffix;
    return routeFor(s, lang) + suffix;
  };
  const rich = text => String(text).split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g).map(part => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, target] = linkMatch;
      if (/^https?:/.test(target)) return `<a href="${escape(target)}" rel="noopener noreferrer">${escape(label)}</a>`;
      return a(localise(target), escape(label));
    }
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return `<strong>${escape(bold[1])}</strong>`;
    return escape(part);
  }).join('');
  const plain = text => String(text).replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '');
  const blocks = list => (Array.isArray(list) ? list : [list]).map(block => {
    if (typeof block === 'string') return `<p>${rich(block)}</p>`;
    if (block.list) return `<ul>${block.list.map(item => `<li>${rich(item)}</li>`).join('')}</ul>`;
    if (block.steps) return `<ol class="steps">${block.steps.map(item => `<li>${rich(item)}</li>`).join('')}</ol>`;
    if (block.note) return `<p class="notice">${rich(block.note)}</p>`;
    if (block.table) {
      const {head, rows} = block.table;
      return `<div class="table-wrap" tabindex="0" role="region" aria-label="${escape(plain(head[1] || head[0] || ""))}"><table class="content-table"><thead><tr>${head.map(h => `<th scope="col">${rich(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map((c, i) => i === 0 ? `<th scope="row">${rich(c)}</th>` : `<td>${rich(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    }
    return '';
  }).join('');
  const sections = list => (list || []).map(([head, content, options = {}]) => `<section${options.id ? ` id="${escape(options.id)}"` : ''}><h2>${rich(head)}</h2>${blocks(content)}</section>`).join('');

  // --- responsive images ------------------------------------------------------------------------
  const picture = (name, {alt = '', cls = '', sizes, loading, priority = false, extra = ''} = {}) => {
    const meta = images[name];
    const largest = meta.widths[meta.widths.length - 1];
    const srcset = ext => meta.widths.map(w => `${assetUrl(`${name}-${w}.${ext}`)} ${w}w`).join(', ');
    const fallback = meta.widths.includes(800) ? 800 : largest;
    return `<picture><source type="image/avif" srcset="${srcset('avif')}" sizes="${sizes}"><img${cls ? ` class="${cls}"` : ''} src="${assetUrl(`${name}-${fallback}.webp`)}" srcset="${srcset('webp')}" sizes="${sizes}" alt="${escape(alt)}" width="${meta.width}" height="${meta.height}" decoding="async"${loading ? ` loading="${loading}"` : ''}${priority ? ' fetchpriority="high"' : ''}${extra ? ' ' + extra : ''}></picture>`;
  };

  // --- shared components ------------------------------------------------------------------------
  const cta = (text = t.order, cls = 'btn', service = '', event = 'consultation_request') => {
    const target = text === t.projectPrice ? 'prices' : 'contact';
    return a(routeFor(target, lang) + (target === 'contact' && service ? '?service=' + encodeURIComponent(service) : ''), escape(text) + ' <span aria-hidden="true" class="arrow">↗</span>', cls, `data-event="${event}" data-cta="true"`);
  };
  const serviceCards = list => `<div class="service-grid">${list.map(s => `<article class="service-card"><div class="card-icon" aria-hidden="true">${escape(s.icon)}</div><h3>${link(s.slug, escape(s[lang].name), '', 'data-event="service_view"')}</h3><p>${escape(s[lang].intro)}</p><span class="card-link">${t.more}</span></article>`).join('')}</div>`;
  const sectionHead = (kicker, title, text = '') => `<div class="section-head"><div><p class="section-kicker">${kicker}</p><h2>${title}</h2></div>${text ? `<p>${text}</p>` : ''}</div>`;
  const faqBlock = items => `<div class="faq-list">${items.map(([q, v]) => `<details><summary>${escape(q)}</summary><p>${rich(v)}</p></details>`).join('')}</div>`;
  const process = () => `<div class="dark-section">${sectionHead('01 → 04', t.processTitle, t.processText)}<div class="process-grid">${t.steps.map(([title, text], i) => `<article class="step"><span class="num">0${i + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div><div class="section-action">${cta(t.processCta, 'btn lime')}</div></div>`;
  const deliverables = () => `<div class="section">${sectionHead(t.deliverablesKicker, t.deliverablesTitle)}<div class="benefits deliverables">${t.deliverables.map(([title, txt]) => `<article><h3>${escape(title)}</h3><p>${escape(txt)}</p></article>`).join('')}</div></div>`;
  const price = () => `<div class="pricing-grid">${t.plans.map(([title, desc, features], i) => `<article class="price-card ${i === 1 ? 'featured' : ''}"><span class="tag">0${i + 1} / ${['WEB', 'BUSINESS', 'PRODUCT'][i]}</span><h3>${title}</h3><p>${desc}</p><div class="price-value">${t.packagePrices[i]}</div><ul>${features.map(f => `<li>${f}</li>`).join('')}</ul>${cta(t.quote, i === 1 ? 'btn' : 'btn outline', ['website-development', 'corporate-website', 'mobile-app-development'][i])}</article>`).join('')}</div><p class="price-note">${t.priceNote}</p>`;
  const blogCards = items => `<div class="blog-grid">${items.map((art, i) => `<article class="blog-card"><div class="article-tag">0${i + 1} / ${escape(art[lang].category)}</div><h3>${link('blog/' + art.slug, escape(art[lang].title))}</h3><p>${escape(art[lang].description)}</p>${link('blog/' + art.slug, t.read + ' ↗', 'text-link')}</article>`).join('')}</div>`;
  const contactDetails = () => `<div class="contact-info">
<a href="tel:${config.phone}" class="phone" data-event="phone_click">${config.phoneDisplay}</a>
<a href="mailto:${config.email}" data-event="email_click">${config.email}</a>
<span>${config.city[lang]}</span>
${config.whatsapp ? `<a href="${escape(config.whatsapp)}" data-event="whatsapp_click" rel="noopener noreferrer">WhatsApp ↗</a>\n` : ''}${config.messenger ? `<a href="${escape(config.messenger)}" data-event="messenger_click" rel="noopener noreferrer">Messenger ↗</a>\n` : ''}</div>`;
  const form = () => `<form class="form-card" id="lead-form" method="post" data-lang="${lang}"><p class="help" style="margin:0 0 18px">${t.formHelp}</p><div class="hp" aria-hidden="true"><label for="company_website">Company website</label><input id="company_website" name="company_website" tabindex="-1" autocomplete="off"></div><div class="form-grid"><div class="field"><label for="name">${t.name} <span class="required">*</span></label><input id="name" name="name" required minlength="2" maxlength="80" autocomplete="name"></div><div class="field"><label for="phone">${t.phone} <span class="required">*</span></label><input id="phone" name="phone" required type="tel" inputmode="tel" autocomplete="tel" maxlength="30" pattern="[+0-9() .\\-]{7,30}" placeholder="599 30 84 14"></div><div class="field"><label for="email">${t.mail} <span class="required">*</span></label><input id="email" name="email" required type="email" autocomplete="email" maxlength="160" placeholder="name@example.com"></div><div class="field"><label for="service">${t.service} <span class="required">*</span></label><select name="service" id="service" required><option value="">${t.choose}</option>${services.map(s => `<option value="${s.slug}">${s[lang].name}</option>`).join('')}<option value="consultation">${t.consult}</option></select></div><div class="field"><label for="budget">${t.budget}</label><select name="budget" id="budget"><option value="">${t.undecided}</option>${t.budgets.map((b, i) => `<option value="${i}">${b}</option>`).join('')}</select></div><div class="field"><label for="deadline">${t.deadline}</label><select name="deadline" id="deadline"><option value="">${t.undecided}</option>${t.deadlines.map((d, i) => `<option value="${i}">${d}</option>`).join('')}</select></div><div class="field full"><label for="message">${t.message} <span class="required">*</span></label><textarea name="message" id="message" required minlength="15" maxlength="4000" placeholder="${t.messagePlaceholder}"></textarea></div></div><label class="consent"><input type="checkbox" required name="consent" value="yes"><span>${t.consent}. ${link('privacy-policy', t.privacy)} <span class="required">*</span></span></label><div class="form-actions">\n<button class="btn form-submit" type="submit" id="submit-lead" disabled>${t.draft}<span class="arrow" aria-hidden="true">↗</span></button>\n<a class="btn outline whatsapp-button" href="${escape(config.whatsapp)}" target="_blank" rel="noopener noreferrer" data-event="whatsapp_click">${t.whatsapp}<span class="arrow" aria-hidden="true">↗</span></a>\n</div><p class="form-note" id="delivery-note">${t.draftNote}</p><p class="form-status" id="form-status" role="status" tabindex="-1" hidden></p><a class="text-link" id="email-draft" hidden data-event="email_draft_open">${t.openDraft} ↗</a><p class="help">${t.email}: <a href="mailto:${config.email}">${config.email}</a></p></form>`;
  const contactSection = (isContactPage = false) => `<section class="section" id="contact"><div class="wrap contact-grid"><div><p class="section-kicker">${t.contact}</p>${isContactPage ? `<h1>${t.contactTitle}</h1>` : `<h2>${t.contactTitle}</h2>`}<p class="lead">${t.contactText}</p><p class="muted">${t.coverage}</p>${contactDetails()}</div>${form()}</div></section>`;
  const benefits = () => `<div class="benefits">${t.benefits.map(([title, txt]) => `<article><h3>${title}</h3><p>${txt}</p></article>`).join('')}</div>`;
  const finalCta = () => `<section class="section final-cta-section"><div class="wrap"><div class="final-cta"><div><p class="section-kicker">${t.finalKicker}</p><h2>${t.finalTitle}</h2><p>${t.finalText}</p></div><div class="final-cta-actions">\n${cta(t.finalCta, 'btn lime')}\n<a href="tel:${config.phone}" class="btn outline" data-event="phone_click">${t.finalCall}<span aria-hidden="true" class="arrow">↗</span></a></div></div></div></section>`;
  const portfolioSection = () => hasPortfolio ? '' : `<div class="portfolio-empty"><div><span class="placeholder-label">${t.portfolioEmpty}</span><h3>${t.portfolioTitle}</h3><p>${t.portfolioText}</p></div>${cta(t.portfolioCta, 'btn outline', '', 'portfolio_open')}</div>`;
  const articlesFor = slugs => (slugs || []).map(articleBySlug).filter(art => art && art[lang]);
  const readingList = slugs => {
    const list = articlesFor(slugs);
    return list.length ? `<section><h2>${t.reading}</h2><ul class="reading-list">${list.map(art => `<li>${link('blog/' + art.slug, escape(art[lang].title), 'text-link')}</li>`).join('')}</ul></section>` : '';
  };

  // --- page content -----------------------------------------------------------------------------
  let title = '', description = '', h1 = '', content = '', faqs = [], type = 'WebPage', noindex = !config.published, ogImage = 'og-home', breadcrumbTrail = [];
  const s = serviceBySlug(slug);
  const article = slug.startsWith('blog/') ? articleBySlug(slug.slice(5)) : null;
  const latestArticles = articles.filter(art => art[lang]);

  if (!slug) {
    title = t.pageTitle.home; description = t.pageDescription.home; h1 = t.hero.join(' '); faqs = t.homeFaq;
    const pickerImages = ['picker-website', 'picker-shop', 'picker-app'];
    const heroPicker = `<div class="project-picker"><div class="picker-top">\n<span>IDEA → DIGITAL</span>\n<span>WEB / APP</span>\n</div><div class="picker-window"><div class="window-bar"><span class="window-dots" aria-hidden="true"><i></i><i></i><i></i></span><span>webandapp / studio</span><span aria-hidden="true">↗</span></div><div class="picker-body"><p class="picker-label">${t.picker}</p><div class="picker-options" role="group" aria-label="${t.picker}">\n${t.pickerLabels.map((v, i) => `<button type="button" data-pick="${i}" aria-pressed="${i === 0}">${v}</button>`).join('\n')}\n</div><div class="picker-graphic">${pickerImages.map((img, i) => picture(img, {cls: 'graphic-img', sizes: '(max-width: 800px) calc(100vw - 58px), 520px', loading: i ? 'lazy' : undefined, priority: i === 0, extra: `aria-hidden="true"${i === 0 ? ' data-active' : ''}`})).join('')}<span class="graphic-label" aria-hidden="true">DESIGN. BUILD. GROW.</span><span class="graphic-price" id="picker-price" aria-live="polite">${t.pickerPrices[0]}</span></div><p class="picker-result" id="picker-result">${t.pickerLabels[0]}</p><p class="picker-description" id="picker-description">${t.pickerDescriptions[0]}</p><div class="picker-actions">${a(routeFor('contact', lang) + '?service=website-development', t.order + ' <span class="arrow" aria-hidden="true">↗</span>', 'btn lime', 'id="picker-cta" data-event="consultation_request" data-cta="true"')}<a class="picker-call" href="tel:${config.phone}" aria-label="${escape(t.call + ' — ' + config.phoneDisplay)}" title="${escape(t.call)}" data-event="phone_click"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.78 4.18 2 2 0 0 1 4.77 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8.67 9.73a16 16 0 0 0 5.6 5.6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/></svg></a></div></div></div><div class="picker-footer">\n<span>${t.pickerFoot}</span>\n<span aria-hidden="true">✳</span>\n</div></div>`;
    content = `<section class="hero"><div class="wrap"><div class="hero-grid"><div><p class="eyebrow"><span class="dot"></span>${t.tagline}</p><h1>${t.hero.map((part, i) => `<span${i === 1 ? ' class="highlight"' : ''}>${escape(part)}</span>`).join('\n')}</h1><p class="lead">${t.heroIntro}</p><div class="actions hero-actions">\n${cta(t.heroPrimary, 'btn lime')}\n${a(routeFor('', lang) + '#services', escape(t.heroSecondary), 'btn outline', 'data-event="service_view"')}\n${link('prices', escape(t.prices), 'btn', 'data-event="view_prices"')}\n</div><div class="micro">\n${t.micro.map(x => `<span>${x}</span>`).join('\n')}\n</div></div>${heroPicker}</div><div class="trust-strip">\n<span>${t.techLabel}</span>\n<div class="tech-list">\n<span>WordPress</span>\n<span>React</span>\n<span>React Native</span>\n<span>Figma</span>\n<span>HTML5</span>\n</div></div></div></section>` +
      `<section class="section" id="services"><div class="wrap">${sectionHead(t.services, t.serviceTitle, t.serviceText)}${serviceCards(featuredServices)}<div class="service-bottom">\n${secondaryServices.map(sv => link(sv.slug, escape(sv[lang].name) + ' ↗')).join('\n')}\n</div><div class="section-action service-action">${cta(t.serviceCta, 'btn outline')}</div>${sectionHead('webandapp', t.benefitTitle)}${benefits()}</div></section>` +
      `<section class="section"><div class="wrap">${process()}</div></section>` +
      (hasPortfolio ? '' : `<section class="section" id="deliverables"><div class="wrap">${deliverables()}</div></section>`) +
      `<section class="section" id="pricing"><div class="wrap">${sectionHead(t.prices, t.priceTitle, t.priceText)}${price()}<div class="section-action">${link('prices', t.allPrices + ' ↗', 'text-link', 'data-event="view_prices"')}</div></div></section>` +
      `<section class="section"><div class="wrap faq-layout"><div><p class="section-kicker">FAQ</p><h2>${t.faqTitle}</h2><p class="lead">${t.faqIntro}</p><div class="actions">${link('faq', t.allFaq + ' ↗', 'btn outline')}</div></div>${faqBlock(faqs)}</div></section>` +
      `<section class="section"><div class="wrap">${sectionHead(t.blog, t.blogTitle, t.blogIntro)}${blogCards(latestArticles.slice(0, 3))}<div class="section-action">${link('blog', t.allArticles + ' ↗', 'text-link')}</div></div></section>` +
      finalCta() + contactSection();
  } else if (s) {
    const d = s[lang]; h1 = d.h1 || d.name; title = d.title || d.name + ' | webandapp'; description = d.description || d.intro; faqs = d.faq || [];
    if (s.image) ogImage = images[s.image].og;
    const fmt = n => n.toLocaleString('en-US').replace(/,/g, ' ');
    const priceText = !s.priceFrom ? '' : s.priceTo ? {ka: `${fmt(s.priceFrom)}–${fmt(s.priceTo)} ₾`, en: `GEL ${fmt(s.priceFrom)}–${fmt(s.priceTo)}`, ru: `${fmt(s.priceFrom)}–${fmt(s.priceTo)} ₾`}[lang] : {ka: `${fmt(s.priceFrom)} ₾-დან`, en: `From GEL ${fmt(s.priceFrom)}`, ru: `От ${fmt(s.priceFrom)} ₾`}[lang];
    const priceLine = s.priceFrom ? `<p class="price-from"><strong>${t.priceFrom}:</strong> ${priceText}</p>` : '';
    content = `<section class="section"><div class="wrap page-grid"><div class="article-body">${s.image ? `<figure class="service-hero">${picture(s.image, {alt: d.name, sizes: '(max-width: 800px) calc(100vw - 32px), 850px', priority: true})}</figure>` : ''}<section><h2>${t.problem}</h2><p>${rich(d.problem)}</p></section><section><h2>${t.audience}</h2><p>${rich(d.audience)}</p></section>${sections(d.sections)}<section><h2>${t.features}</h2><ul>${d.features.map(f => `<li>${rich(f)}</li>`).join('')}</ul></section><section><h2>${t.process}</h2>${t.steps.map(([head, txt], i) => `<h3>${i + 1}. ${head}</h3><p>${txt}</p>`).join('')}</section><section><h2>${t.technologies}</h2><p>${t.techNote}</p><div class="chips">\n${s.tech.map(v => `<span class="chip">${escape(v)}</span>`).join('\n')}\n</div></section><section><h2>${t.timing}</h2><p>${rich(d.time)}</p></section><section><h2>${t.cost}</h2>${priceLine}<p>${rich(d.cost)}</p>${link('prices', t.prices + ' ↗', 'text-link', 'data-event="view_prices"')}</section>${d.support ? `<section><h2>${t.support}</h2><p>${rich(d.support)}</p></section>` : ''}<section><h2>${t.why}</h2><p>${t.whyText}</p></section>${faqs.length ? `<section><h2>${t.faq}</h2>${faqBlock(faqs)}</section>` : ''}<section><h2>${t.related}</h2><div class="related">\n${s.related.map(sl => link(sl, escape(serviceBySlug(sl)[lang].name) + ' ↗')).join('\n')}\n</div></section>${readingList(s.articles)}</div><aside class="side-card"><h2>${t.sideTitle}</h2><p>${t.sideText}</p>${cta(t.quote, 'btn', slug)}${contactDetails()}</aside></div></section>`;
  } else if (article) {
    const d = article[lang]; title = d.title + ' | webandapp'; description = d.description; h1 = d.title; type = 'BlogPosting';
    const relatedService = serviceBySlug(article.service);
    if (relatedService?.image) ogImage = images[relatedService.image].og;
    breadcrumbTrail = [[t.blog, routeFor('blog', lang)]];
    const relatedPages = (article.related || []).map(target => {
      const s2 = target.startsWith('/blog/') ? null : serviceBySlug(target.slice(1));
      const art2 = target.startsWith('/blog/') ? articleBySlug(target.slice(6)) : null;
      const label = s2 ? s2[lang].name : art2 ? art2[lang]?.title : (t[target.slice(1)] || null);
      return label && (!art2 || art2[lang]) ? a(localise(target), escape(label) + ' ↗') : '';
    }).filter(Boolean);
    const words = plain([d.intro, ...d.sections.flatMap(([h, b]) => [h, ...(Array.isArray(b) ? b : [b]).map(x => typeof x === 'string' ? x : JSON.stringify(x))])].join(' ')).split(/\s+/).length;
    const minutes = Math.max(2, Math.round(words / 180));
    content = `<section class="section"><div class="wrap page-grid"><article class="article-body"><p class="article-tag">${t.published}: <time datetime="${article.published}">${article.published}</time>${article.updated !== article.published ? ` · ${t.updated}: <time datetime="${article.updated}">${article.updated}</time>` : ''} · ${minutes} ${t.minutes}</p>${d.intro ? `<p class="lead">${rich(d.intro)}</p>` : ''}${sections(d.sections)}${relatedPages.length ? `<section><h2>${t.relatedPages}</h2><div class="related">\n${relatedPages.join('\n')}\n</div></section>` : ''}${article.sources ? `<section><h2>${t.sources}</h2>${article.sources.map(([label, url]) => `<p><a class="text-link" href="${escape(url)}" rel="noopener noreferrer">${escape(label)}</a></p>`).join('')}</section>` : ''}</article><aside class="side-card"><h2>${t.sideTitle}</h2><p>${t.sideText}</p>${cta()}${contactDetails()}</aside></div></section>`;
  } else {
    const key = {prices: 'prices', portfolio: 'portfolio', about: 'about', blog: 'blog', faq: 'faq', contact: 'contact', 'privacy-policy': 'privacy', terms: 'terms', 404: 'notFound'}[slug];
    if (!key) throw Error('Unknown route ' + slug);
    h1 = t[key]; title = t.pageTitle[slug] ? fill(t.pageTitle[slug]) : h1 + ' | webandapp';
    description = t.pageDescription[slug] || ({'privacy-policy': `${t.privacy} — webandapp. ${t.email}: ${config.email}`, terms: `${t.terms} — webandapp. ${t.serverNote}`, 404: t.notFoundText})[slug];
    if (slug === 'prices') {
      h1 = t.pricesH1; faqs = t.priceFaq;
      const table = `<div class="price-table-wrap"><table class="price-table"><caption class="sr-only">${t.priceReferenceTitle}</caption><thead><tr><th scope="col">${t.priceService}</th><th scope="col">${t.priceFormat}</th><th scope="col">${t.priceAmount}</th></tr></thead><tbody>${t.priceCatalog.map(([name, format, amount, serviceSlug]) => `<tr><th scope="row">${serviceSlug ? link(serviceSlug, escape(name)) : escape(name)}</th><td>${escape(format)}</td><td class="price-amount">${escape(amount)}</td></tr>`).join('')}</tbody></table></div>`;
      const compare = `<section class="section"><h2>${escape(t.priceCompareTitle)}</h2><p>${escape(t.priceCompareText)}</p>${blocks({table: t.priceCompare})}</section>`;
      const quoteInfo = `<section class="section"><h2>${escape(t.priceQuoteTitle)}</h2><p>${escape(t.priceQuoteText)}</p><ul>${t.priceQuote.map(x => `<li>${escape(x)}</li>`).join('')}</ul>${cta()}</section>`;
      content = `<section class="section"><div class="wrap"><section class="price-reference" aria-labelledby="price-reference-title"><div class="price-reference-head"><p class="section-kicker">${t.prices}</p><h1 id="price-reference-title">${escape(h1)}</h1><p>${escape(t.pricesIntro)}</p></div>${table}<div class="price-contact">\n<a href="tel:${config.phone}" class="btn" data-event="phone_click">☎ ${t.call} <span class="arrow" aria-hidden="true">↗</span></a>\n${config.whatsapp ? `<a href="${escape(config.whatsapp)}" class="btn lime" target="_blank" rel="noopener noreferrer" data-event="whatsapp_click" aria-label="${escape(t.whatsapp)}">💬 WhatsApp <span class="arrow" aria-hidden="true">↗</span></a>` : ''}\n</div></section>${price()}<div class="article-body prices-body">${sections(t.priceSections)}${compare}${quoteInfo}</div><div class="section">${sectionHead(t.quote, t.cost)}${benefits()}</div><div class="section">${sectionHead(t.faq, t.faqTitle)}${faqBlock(faqs)}</div></div></section>`;
    }
    if (slug === 'portfolio') { noindex = !hasPortfolio; content = `<section class="section"><div class="wrap">${portfolioSection()}</div></section>`; }
    if (slug === 'about') { h1 = t.aboutH1; content = `<section class="section"><div class="wrap page-grid"><div class="article-body">${sections(t.aboutSections)}</div><aside class="side-card"><h2>${t.sideTitle}</h2><p>${t.sideText}</p>${cta()}${contactDetails()}</aside></div><div class="wrap">${process()}</div></section>`; }
    if (slug === 'blog') content = `<section class="section"><div class="wrap">${blogCards(latestArticles)}</div></section>`;
    if (slug === 'faq') {
      h1 = t.faqPageH1; faqs = t.faqCatalog.flatMap(([, items]) => items);
      content = `<section class="section"><div class="wrap faq-page"><nav class="faq-nav" aria-label="${t.faq}">${t.faqCatalog.map(([cat], i) => `<a href="#faq-${i + 1}">${escape(cat)}</a>`).join('\n')}</nav>${t.faqCatalog.map(([cat, items], i) => `<section class="faq-group" id="faq-${i + 1}"><h2>${escape(cat)}</h2>${faqBlock(items)}</section>`).join('')}<div class="actions">${cta()}</div></div></section>`;
    }
    if (slug === 'contact') content = contactSection(true);
    if (['privacy-policy', 'terms'].includes(slug)) { noindex = true; content = `<section class="section"><div class="wrap article-body" style="max-width:850px">${legalSections(slug, lang).map(([head, txt]) => `<section><h2>${escape(head)}</h2><p>${escape(txt)}</p></section>`).join('')}${link('contact', t.contact + ' ↗', 'text-link')}</div></section>`; }
    if (slug === '404') { noindex = true; content = `<section class="not-found wrap"><div class="code" aria-hidden="true">404</div><p>${t.notFoundText}</p>${link('', t.back, 'btn')}</section>`; }
  }

  // --- chrome -----------------------------------------------------------------------------------
  const logo = `<span class="logo-mark" aria-hidden="true">w/</span>\n<span>webandapp</span>`;
  const navPages = ['prices', 'about', 'blog', ...(hasPortfolio ? ['portfolio'] : [])];
  const flags = {ka: 'flag-ka.svg', en: 'flag-en.svg', ru: 'flag-ru.svg'};
  const flagImg = l => `<img class="language-flag" src="${assetUrl(flags[l])}" alt="" width="27" height="18" aria-hidden="true">`;
  const languageNav = `<nav class="languages" aria-label="${t.languages}"><button class="language-trigger" type="button" aria-label="${t.languages}" aria-haspopup="true" aria-expanded="false">${flagImg(lang)}</button><div class="language-menu">\n${languagesFor(slug).map(l => a(routeFor(slug, l), flagImg(l), '', `lang="${l}" hreflang="${l}" aria-label="${{ka: 'ქართული', en: 'English', ru: 'Русский'}[l]}" title="${{ka: 'ქართული', en: 'English', ru: 'Русский'}[l]}"${l === lang ? ' aria-current="page"' : ''}`)).join('\n')}\n</div></nav>`;
  const nav = `<header class="header"><div class="wrap nav">${link('', logo, 'logo', 'aria-label="webandapp"')}<nav class="navlinks" id="main-nav" aria-label="${t.navigation}">\n${a(routeFor('', lang) + '#services', t.services)}\n${navPages.map(sl => link(sl, t[sl], sl === 'prices' ? 'nav-prices' : '', slug === sl ? 'aria-current="page"' : '')).join('\n')}\n</nav><div class="navtools">${languageNav}${cta(t.projectPrice, 'btn small lime')}<button class="menu-toggle" type="button" aria-controls="main-nav" aria-expanded="false" aria-label="${t.menu}">☰</button></div></div></header>`;
  const footer = `<footer class="footer"><div class="wrap"><div class="footer-grid"><div>${link('', logo, 'logo', 'aria-label="webandapp"')}<p>${t.footerText}</p><p>${config.city[lang]}<br><a href="tel:${config.phone}" data-event="phone_click">${config.phoneDisplay}</a><br><a href="mailto:${config.email}" data-event="email_click">${config.email}</a></p></div><div><h2>${t.services}</h2><div class="footer-links">\n${services.map(sv => link(sv.slug, escape(sv[lang].name))).join('\n')}\n</div></div><div><h2>webandapp</h2><div class="footer-links">\n${['about', 'prices', ...(hasPortfolio ? ['portfolio'] : []), 'blog', 'faq', 'contact'].map(sl => link(sl, t[sl])).join('\n')}\n</div></div></div><div class="footer-bottom"><span>© ${year} webandapp. ${t.rights}</span><div>\n${link('privacy-policy', t.privacy)}\n${link('terms', t.terms)}\n<button type="button" id="cookie-settings" hidden>${t.cookieSettings}</button>\n</div></div></div></footer><section class="cookie-panel" id="cookie-panel" aria-label="${t.cookieTitle}" hidden><h2 style="font-size:18px">${t.cookieTitle}</h2><p>${t.cookieText}</p><div class="actions">\n<button class="btn lime" type="button" data-consent="yes">${t.accept}</button>\n<button class="btn outline" type="button" data-consent="no">${t.decline}</button>\n</div></section>`;
  const mobileContact = `<nav class="mobile-contact-bar" aria-label="${t.contact}">
<a href="tel:${config.phone}" data-event="phone_click">☎ ${t.call}</a>
${config.whatsapp ? `<a href="${escape(config.whatsapp)}" target="_blank" rel="noopener noreferrer" data-event="whatsapp_click" aria-label="${escape(t.whatsapp)}">💬 WhatsApp</a>` : a(routeFor('contact', lang), '✉ ' + escape(t.email), '', 'data-event="consultation_request" data-cta="true"')}
${link('prices', '₾ ' + escape(t.prices), 'bar-prices', slug === 'prices' ? 'aria-current="page"' : '')}
</nav>`;

  const crumbs = [[t.home, routeFor('', lang)], ...breadcrumbTrail, [h1, route]];
  const breadcrumb = slug && slug !== 'contact' ? `<div class="wrap"><nav class="breadcrumb" aria-label="Breadcrumb">\n${crumbs.slice(0, -1).map(([label, target]) => a(target, escape(label))).join('\n<span aria-hidden="true">/</span>\n')}\n<span aria-hidden="true">/</span>\n<span aria-current="page">${escape(h1)}</span>\n</nav></div>` : '';
  const top = slug && !['contact', 'prices'].includes(slug) ? `${breadcrumb}<div class="wrap"><section class="page-hero"><p class="section-kicker">webandapp / ${s ? t.services : article ? t.blog : t.home}</p><h1>${escape(h1)}</h1><p class="lead">${escape(s ? s[lang].intro : slug === 'about' ? t.aboutIntro : slug === 'faq' ? t.faqPageIntro : article ? article[lang].description : description)}</p>${s ? `<div class="actions">\n${cta(t.quote, 'btn', slug)}\n${link('prices', t.prices, 'btn outline', 'data-event="view_prices"')}\n</div>` : ''}</section></div>` : slug === 'prices' ? breadcrumb : '';

  // --- head: metadata and structured data -------------------------------------------------------
  const canonical = config.origin + route;
  const alternates = languagesFor(slug);
  const shareImage = `${config.origin}/assets/${versioned(`${ogImage}.jpg`)}`;
  const orgId = config.origin + '/#organization';
  const org = {'@type': ['ProfessionalService', 'Organization'], '@id': orgId, name: config.name, url: config.origin + '/', logo: {'@type': 'ImageObject', url: config.origin + '/assets/' + versioned(config.logo.split('/').pop())}, image: shareImage, email: config.email, telephone: config.phone, description: t.pageDescription.home, address: {'@type': 'PostalAddress', ...(config.streetAddress ? {streetAddress: config.streetAddress} : {}), addressLocality: 'Tbilisi', addressCountry: 'GE'}, areaServed: {'@type': 'Country', name: 'Georgia'}, knowsLanguage: LANGS, ...(config.openingHours.length ? {openingHours: config.openingHours} : {}), ...(config.sameAs.length ? {sameAs: config.sameAs} : {})};
  const website = {'@type': 'WebSite', '@id': config.origin + '/#website', url: config.origin + '/', name: config.name, inLanguage: LANGS, publisher: {'@id': orgId}};
  const webpage = {'@type': 'WebPage', '@id': canonical + '#webpage', url: canonical, name: title, description, inLanguage: lang, isPartOf: {'@id': website['@id']}, primaryImageOfPage: {'@type': 'ImageObject', url: shareImage, width: OG_WIDTH, height: OG_HEIGHT}, dateModified: '__LASTMOD__'};
  const graph = [org, website, webpage];
  if (slug) graph.push({'@type': 'BreadcrumbList', '@id': canonical + '#breadcrumb', itemListElement: crumbs.map(([name, target], i) => ({'@type': 'ListItem', position: i + 1, name, item: config.origin + target}))});
  if (s) {
    const offer = s.priceFrom ? {offers: {'@type': 'Offer', url: config.origin + routeFor('prices', lang), priceCurrency: 'GEL', availability: 'https://schema.org/InStock', priceSpecification: {'@type': 'PriceSpecification', priceCurrency: 'GEL', minPrice: s.priceFrom, ...(s.priceTo ? {maxPrice: s.priceTo} : {})}}} : {};
    graph.push({'@type': 'Service', '@id': canonical + '#service', name: s[lang].name, serviceType: s[lang].name, description, provider: {'@id': orgId}, areaServed: {'@type': 'Country', name: 'Georgia'}, url: canonical, ...offer});
  }
  if (slug === 'prices') graph.push({'@type': 'OfferCatalog', '@id': canonical + '#catalog', name: h1, itemListElement: services.filter(sv => sv.priceFrom).map(sv => ({'@type': 'Offer', itemOffered: {'@type': 'Service', name: sv[lang].name, url: config.origin + routeFor(sv.slug, lang)}, priceCurrency: 'GEL', priceSpecification: {'@type': 'PriceSpecification', priceCurrency: 'GEL', minPrice: sv.priceFrom, ...(sv.priceTo ? {maxPrice: sv.priceTo} : {})}}))});
  if (faqs.length) graph.push({'@type': 'FAQPage', '@id': canonical + '#faq', mainEntity: faqs.map(([q, ans]) => ({'@type': 'Question', name: q, acceptedAnswer: {'@type': 'Answer', text: plain(ans)}}))});
  if (article) graph.push({'@type': 'BlogPosting', '@id': canonical + '#article', headline: article[lang].title, description, image: shareImage, datePublished: article.published + 'T12:00:00+04:00', dateModified: article.updated + 'T12:00:00+04:00', author: {'@id': orgId}, publisher: {'@id': orgId}, mainEntityOfPage: {'@id': webpage['@id']}, inLanguage: lang});
  const json = x => JSON.stringify(x).replace(/</g, '\\u003c');
  const messages = Object.fromEntries(['submit', 'draft', 'draftNote', 'serverNote', 'draftReady', 'openDraft', 'sending', 'sent', 'error', 'invalid', 'pickerLabels', 'pickerDescriptions', 'pickerPrices', 'call', 'name', 'phone', 'mail', 'service', 'budget', 'deadline', 'message', 'undecided'].map(k => [k, t[k]]));

  const head = `<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)}</title><meta name="description" content="${escape(description)}"><meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}"><link rel="canonical" href="${canonical}">${alternates.map(l => `<link rel="alternate" hreflang="${l}" href="${config.origin + routeFor(slug, l)}">`).join('')}<link rel="alternate" hreflang="x-default" href="${config.origin + routeFor(slug, 'ka')}"><meta name="theme-color" content="#171b19"><meta property="og:type" content="${article ? 'article' : 'website'}"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${canonical}"><meta property="og:site_name" content="webandapp"><meta property="og:locale" content="${{ka: 'ka_GE', en: 'en_US', ru: 'ru_RU'}[lang]}">${alternates.filter(l => l !== lang).map(l => `<meta property="og:locale:alternate" content="${{ka: 'ka_GE', en: 'en_US', ru: 'ru_RU'}[l]}">`).join('')}<meta property="og:image" content="${shareImage}"><meta property="og:image:type" content="image/jpeg"><meta property="og:image:width" content="${OG_WIDTH}"><meta property="og:image:height" content="${OG_HEIGHT}"><meta property="og:image:alt" content="${escape(h1)}">${article ? `<meta property="article:published_time" content="${article.published}"><meta property="article:modified_time" content="${article.updated}">` : ''}<meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${shareImage}"><meta name="twitter:title" content="${escape(title)}"><meta name="twitter:description" content="${escape(description)}">${config.analytics.searchConsole ? `<meta name="google-site-verification" content="${escape(config.analytics.searchConsole)}">` : ''}<link rel="icon" href="${assetUrl('favicon.ico')}" sizes="16x16 32x32 48x48"><link rel="icon" type="image/png" href="${assetUrl('icon-192.png')}" sizes="192x192"><link rel="icon" type="image/svg+xml" href="${assetUrl('favicon.svg')}" sizes="any"><link rel="apple-touch-icon" href="${assetUrl('icon-192.png')}"><link rel="manifest" href="${assetUrl('site.webmanifest')}">${lang === 'ka' ? `<link rel="preload" href="${assetUrl('georgian.woff2')}" as="font" type="font/woff2" crossorigin>` : ''}<link rel="stylesheet" href="${assetUrl('styles.css')}"><script type="application/ld+json">${json({'@context': 'https://schema.org', '@graph': graph})}</script><script id="page-data" type="application/json">${json({route, lang, email: config.email, messages})}</script><script src="${assetUrl('public-config.js')}" defer></script><script src="${assetUrl('app.js')}" defer></script>`;
  const html = `<!doctype html><html lang="${lang}"><head>${head}</head><body><a class="skip" href="#main">${t.skip}</a>${nav}<main id="main">${top}${content}</main>${footer}${mobileContact}</body></html>`;
  return {route, file: fileFor(route), title, description, h1, lang, slug, noindex, html, schemas: graph.map(x => [].concat(x['@type'])[0]), languages: alternates};
}

export const pageSlugs = () => ['', ...services.map(x => x.slug), 'portfolio', 'prices', 'about', 'blog', 'faq', 'contact', 'privacy-policy', 'terms', ...articles.map(a => 'blog/' + a.slug), '404'];
export const pageExists = (slug, lang) => languagesFor(slug).includes(lang);
