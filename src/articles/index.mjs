// Blog articles, newest first. Each article renders only in the languages it has content for.
import saitisDamzadebisFasi from './saitis-damzadebis-fasi.mjs';
import ramdenKhanshiMzaddebaSaiti from './ramden-khanshi-mzaddeba-saiti.mjs';
import facebookGverdiTuSaiti from './facebook-gverdi-tu-saiti.mjs';
import aplikaciisDamzadebisFasi from './aplikaciis-damzadebis-fasi.mjs';
import wordpressTuIndividualuriSaiti from './wordpress-tu-individualuri-saiti.mjs';
import domeniDaHostingi from './domeni-da-hostingi-saqartveloshi.mjs';
import onlineMagaziisFasi from './online-magaziis-fasi.mjs';
import websiteBrief from './website-brief.mjs';
import onlineStoreChecklist from './online-store-checklist.mjs';
import whyNotGoogle from './why-not-google.mjs';

export const articles = [
  saitisDamzadebisFasi, ramdenKhanshiMzaddebaSaiti, facebookGverdiTuSaiti, aplikaciisDamzadebisFasi,
  wordpressTuIndividualuriSaiti, domeniDaHostingi, onlineMagaziisFasi, websiteBrief, onlineStoreChecklist, whyNotGoogle
];
export const articleBySlug = slug => articles.find(a => a.slug === slug);
export const articleLanguages = article => ['ka', 'en', 'ru'].filter(lang => article[lang]);
