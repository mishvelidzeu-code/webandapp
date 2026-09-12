// Publishing is fail-safe: a production build can never be noindex.
// - Vercel production (VERCEL_ENV=production) is always published.
// - Vercel preview/development builds are drafts (noindex + robots Disallow), so preview URLs stay out of Google.
// - Anywhere else the site is published unless SITE_DRAFT=true (or the legacy SITE_PUBLISHED=false) is set explicitly.
const vercelEnv = process.env.VERCEL_ENV || '';
const explicitDraft = process.env.SITE_DRAFT === 'true' || process.env.SITE_PUBLISHED === 'false';
const published = vercelEnv === 'production' ? true : !(explicitDraft || vercelEnv === 'preview' || vercelEnv === 'development');

export default {
  name: 'webandapp',
  origin: 'https://webandapp.ge',
  published,
  phone: '+995599308414',
  phoneDisplay: '+995 599 30 84 14',
  email: 'mishvelidze.u@gmail.com',
  city: { ka: 'თბილისი, საქართველო', en: 'Tbilisi, Georgia', ru: 'Тбилиси, Грузия' },
  whatsapp: 'https://wa.me/995599308414',
  messenger: '',
  // Only confirmed facts are rendered. Leave empty until they are real — see docs/owner-todo.md.
  legalName: '',            // registered legal entity name (shown in privacy/terms when set)
  streetAddress: '',        // street address for LocalBusiness schema and Google Business Profile
  openingHours: [],         // e.g. ['Mo-Fr 10:00-19:00'] once agreed
  sameAs: [],               // real social/business profile URLs (Facebook, LinkedIn, GBP, Clutch...)
  logo: '/assets/icon-512.png',
  analytics: { ga4: 'G-MFV3MXWP3W', gtm: '', clarity: '', searchConsole: 'qYmedw0C4_Elbs1_Bd9SgO_aas2TGBZDgnJmCIMZNio' },
  portfolio: [],            // real case studies only: {slug, ka:{title,...}} — the portfolio section renders only when this is non-empty
  date: '2026-09-12'
};
