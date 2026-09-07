(() => {
 'use strict';
 const data=JSON.parse(document.getElementById('page-data').textContent), t=data.messages;
 const cfg=window.WEBANDAPP_CONFIG||{analytics:{}}, online=location.protocol!=='file:';
 const routeLink=(el,target)=>{el.dataset.route=target;if(online)el.setAttribute('href',target);else{const depth=data.route.replace(/^\//,'').split('/').filter(Boolean).length;const [pathname,query]=target.split('?');el.setAttribute('href','../'.repeat(depth)+pathname.replace(/^\//,'').replace(/\/$/,'')+(pathname==='/'?'index.html':'/index.html')+(query?'?'+query:''));}};
 if(online)document.querySelectorAll('a[data-route]').forEach(a=>a.setAttribute('href',a.dataset.route));
 const menu=document.querySelector('.menu-toggle'),nav=document.getElementById('main-nav');
 const closeMenu=()=>{menu?.setAttribute('aria-expanded','false');nav?.classList.remove('is-open');};
 menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open);});
 nav?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
 const prefix=data.lang==='ka'?'':'/'+data.lang;
 const languageAssetBase=document.currentScript?.src||location.href;
 const languageNav=document.querySelector('.languages');
 if(languageNav){
  const languageLinks=[...languageNav.querySelectorAll('a')];
  const languageFlags={ka:'flag-ka.svg?v=official-20260906',en:'flag-en.svg',ru:'flag-ru.svg'};
  const makeLanguageFlag=code=>{const file=languageFlags[code];if(!file)return null;const image=document.createElement('img');image.className='language-flag';image.src=new URL(file,languageAssetBase).href;image.alt='';image.width=27;image.height=18;image.setAttribute('aria-hidden','true');return image;};
  const currentLanguage=languageLinks.find(link=>link.hasAttribute('aria-current'))||languageLinks[0];
  languageLinks.forEach(link=>{const flagIcon=makeLanguageFlag(link.getAttribute('lang'));if(!flagIcon)return;link.textContent='';link.append(flagIcon);link.title=link.getAttribute('aria-label')||'';});
  const languageTrigger=document.createElement('button');
  languageTrigger.type='button';
  languageTrigger.className='language-trigger';
  languageTrigger.setAttribute('aria-label',languageNav.getAttribute('aria-label')||'Choose language');
  languageTrigger.setAttribute('aria-haspopup','true');
  languageTrigger.setAttribute('aria-expanded','false');
  const languageCode=makeLanguageFlag(currentLanguage?.getAttribute('lang'));
  const languageChevron=document.createElement('span');
  languageChevron.setAttribute('aria-hidden','true');
  languageChevron.textContent='⌄';
  if(languageCode)languageTrigger.append(languageCode);
  languageTrigger.append(languageChevron);
  const languageMenu=document.createElement('div');
  languageMenu.className='language-menu';
  languageLinks.forEach(link=>languageMenu.append(link));
  languageNav.replaceChildren(languageTrigger,languageMenu);
  const closeLanguages=()=>{languageNav.classList.remove('is-open');languageTrigger.setAttribute('aria-expanded','false');};
  languageTrigger.addEventListener('click',()=>{const open=!languageNav.classList.contains('is-open');languageNav.classList.toggle('is-open',open);languageTrigger.setAttribute('aria-expanded',String(open));});
  document.addEventListener('click',e=>{if(!languageNav.contains(e.target))closeLanguages();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeLanguages();languageTrigger.blur();}});
 }
 const pickerGraphic=document.querySelector('.picker-graphic');
 let pickerPrice;
 if(pickerGraphic&&t.pickerPrices){
  pickerGraphic.removeAttribute('aria-hidden');
  pickerGraphic.querySelectorAll('.ring,.amp,.graphic-label').forEach(el=>el.setAttribute('aria-hidden','true'));
  pickerPrice=document.createElement('span');
  pickerPrice.className='graphic-price';
  pickerPrice.id='picker-price';
  pickerPrice.setAttribute('aria-live','polite');
  pickerPrice.textContent=t.pickerPrices[0];
  pickerGraphic.append(pickerPrice);
 }
 const pickerCta=document.getElementById('picker-cta');
 if(pickerCta&&cfg.phone){
  const pickerActions=document.createElement('div');
  pickerActions.className='picker-actions';
  pickerCta.before(pickerActions);
  pickerActions.append(pickerCta);
  const pickerCall=document.createElement('a');
  pickerCall.className='picker-call';
  pickerCall.href='tel:'+cfg.phone;
  pickerCall.setAttribute('aria-label',t.call+' — '+(cfg.phoneDisplay||cfg.phone));
  pickerCall.title=t.call;
  pickerCall.dataset.event='phone_click';
  pickerCall.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.78 4.18 2 2 0 0 1 4.77 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8.67 9.73a16 16 0 0 0 5.6 5.6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/></svg>';
  pickerActions.append(pickerCall);
 }
 document.querySelectorAll('[data-pick]').forEach(b=>b.addEventListener('click',()=>{const n=Number(b.dataset.pick);document.querySelectorAll('[data-pick]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));document.getElementById('picker-result').textContent=t.pickerLabels[n];document.getElementById('picker-description').textContent=t.pickerDescriptions[n];if(pickerPrice)pickerPrice.textContent=t.pickerPrices[n];routeLink(document.getElementById('picker-cta'),prefix+'/contact?service='+['website-development','ecommerce-development','mobile-app-development'][n]);}));
 let consent=false,analyticsLoaded=false;
 const analytics=cfg.analytics||{};
 const enabled=online&&cfg.published&&(analytics.ga4||analytics.gtm||analytics.clarity);
 const cleanPath=()=>location.pathname;
 window.dataLayer=window.dataLayer||[];
 function gtag(){window.dataLayer.push(arguments);}
 window.gtag=gtag;
 gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
 function loadScript(src){const s=document.createElement('script');s.src=src;s.async=true;document.head.append(s);}
 function enableAnalytics(){if(!enabled||analyticsLoaded)return;analyticsLoaded=true;
  // Use GTM OR direct GA4, never both. No query strings or form values enter events.
  if(/^GTM-[A-Z0-9]+$/.test(analytics.gtm||'')){window.dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'});loadScript('https://www.googletagmanager.com/gtm.js?id='+analytics.gtm);}
  else if(/^G-[A-Z0-9]+$/.test(analytics.ga4||'')){loadScript('https://www.googletagmanager.com/gtag/js?id='+analytics.ga4);gtag('js',new Date());gtag('config',analytics.ga4,{send_page_view:false});gtag('event','page_view',{page_location:location.origin+cleanPath(),page_title:document.title});}
  if(/^[a-z0-9]+$/i.test(analytics.clarity||'')){window.clarity=window.clarity||function(){(window.clarity.q=window.clarity.q||[]).push(arguments);};window.clarity('consentv2',{ad_Storage:'denied',analytics_Storage:'granted'});loadScript('https://www.clarity.ms/tag/'+analytics.clarity);}
 }
 const allowedEvents=new Set(['generate_lead','phone_click','email_click','whatsapp_click','messenger_click','view_prices','portfolio_open','consultation_request','email_draft_open','contact_form_start','service_view','cta_click']);
 function track(event){if(!consent||!enabled||!allowedEvents.has(event))return;const payload={page_path:cleanPath(),language:data.lang};if(analytics.gtm)window.dataLayer.push({event,...payload});else if(analytics.ga4)gtag('event',event,payload);}
 document.addEventListener('click',e=>{const a=e.target.closest('[data-event]');if(a){track(a.dataset.event);if(a.dataset.cta==='true')track('cta_click');}});
 let priceSeen=false;function trackPrices(){if(!priceSeen&&consent){track('view_prices');priceSeen=true;}}
 if(data.route.endsWith('/prices'))trackPrices();
 const priceBlock=document.getElementById('pricing');if(priceBlock&&'IntersectionObserver' in window){const obs=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting))trackPrices();},{threshold:.15});obs.observe(priceBlock);}
 const panel=document.getElementById('cookie-panel'),settings=document.getElementById('cookie-settings');
 function preference(value){consent=value==='yes';gtag('consent','update',{analytics_storage:consent?'granted':'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});try{localStorage.setItem('webandapp-consent-v1',JSON.stringify({value,at:Date.now()}));}catch{}panel.hidden=true;
  if(consent){enableAnalytics();if(data.route.endsWith('/prices'))trackPrices();}
  else if(analyticsLoaded){window['ga-disable-'+analytics.ga4]=true;window.clarity?.('consentv2',{ad_Storage:'denied',analytics_Storage:'denied'});document.cookie.split(';').forEach(c=>{const name=c.split('=')[0].trim();if(/^(_ga|_gid|_clck|_clsk)/.test(name)){document.cookie=name+'=;Max-Age=0;path=/';document.cookie=name+'=;Max-Age=0;path=/;domain='+location.hostname;}});location.reload();}
 }
 if(enabled){settings.hidden=false;let stored;try{stored=JSON.parse(localStorage.getItem('webandapp-consent-v1'));}catch{}if(stored&&Date.now()-stored.at<180*864e5){consent=stored.value==='yes';if(consent){gtag('consent','update',{analytics_storage:'granted'});enableAnalytics();if(data.route.endsWith('/prices'))trackPrices();}}else panel.hidden=false;}
 settings?.addEventListener('click',()=>{panel.hidden=false;panel.querySelector('button').focus();});document.querySelectorAll('[data-consent]').forEach(b=>b.addEventListener('click',()=>preference(b.dataset.consent)));
 const form=document.getElementById('lead-form');if(!form)return;
 let formStarted=false;form.addEventListener('focusin',()=>{if(!formStarted){formStarted=true;track('contact_form_start');}});
 form.setAttribute('data-clarity-mask','true');
 const submit=document.getElementById('submit-lead'),status=document.getElementById('form-status'),draft=document.getElementById('email-draft'),note=document.getElementById('delivery-note');
 let delivery={ready:false,token:''},busy=false,requestId=crypto.randomUUID?crypto.randomUUID():String(Date.now())+'-'+Math.random().toString(36).slice(2);
 const selected=new URLSearchParams(location.search).get('service');if(selected&&[...form.service.options].some(o=>o.value===selected))form.service.value=selected;
 function setMode(){submit.textContent=delivery.ready?t.submit:t.draft;note.textContent=delivery.ready?t.serverNote:t.draftNote;submit.disabled=false;}
 async function prepare(){if(!online){setMode();return;}try{const r=await fetch('/api/form-config',{credentials:'same-origin',cache:'no-store',signal:AbortSignal.timeout(5000)});if(r.ok){const j=await r.json();delivery={ready:j.ready===true,token:j.token||''};}}catch{}setMode();}
 function makeDraft(v){let body=[`${t.name}: ${v.name}`,`${t.phone}: ${v.phone}`,`${t.mail}: ${v.email}`,`${t.service}: ${form.service.selectedOptions[0].text}`,`${t.budget}: ${form.budget.selectedOptions[0].text}`,`${t.deadline}: ${form.deadline.selectedOptions[0].text}`,'',v.message].join('\n');draft.href='mailto:'+data.email+'?subject='+encodeURIComponent('webandapp — '+form.service.selectedOptions[0].text)+'&body='+encodeURIComponent(body);draft.hidden=false;}
 function show(text,error=false){status.textContent=text;status.hidden=false;status.classList.toggle('error',error);status.focus();}
 form.addEventListener('submit',async e=>{e.preventDefault();if(busy)return;if(!form.reportValidity()){show(t.invalid,true);return;}const v=Object.fromEntries(new FormData(form));v.lang=data.lang;const digits=v.phone.replace(/\D/g,'');if(digits.length<7||digits.length>15){show(t.invalid,true);form.phone.focus();return;}makeDraft(v);
  if(!delivery.ready){show(t.draftReady);location.href=draft.href;return;}
  busy=true;submit.disabled=true;submit.textContent=t.sending;
  try{const r=await fetch('/api/leads',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json','X-CSRF-Token':delivery.token,'Idempotency-Key':requestId},body:JSON.stringify(v),signal:AbortSignal.timeout(20000)});const result=await r.json();if(!r.ok||result.ok!==true)throw Error('delivery');show(t.sent);draft.hidden=true;form.reset();track('generate_lead');requestId=crypto.randomUUID();}
  catch{show(t.error,true);}finally{busy=false;setMode();}
 });
 form.addEventListener('input',()=>{draft.hidden=true;status.hidden=true;});
 prepare();
})();
