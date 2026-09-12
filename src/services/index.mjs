// Editorial source. Each service owns a distinct search intent; the order here is the order of
// the service grid on the home page (the first six are cards, the rest are links).
import websiteDevelopment from './website-development.mjs';
import ecommerceDevelopment from './ecommerce-development.mjs';
import mobileAppDevelopment from './mobile-app-development.mjs';
import customSoftware from './custom-software.mjs';
import uiUxDesign from './ui-ux-design.mjs';
import seo from './seo.mjs';
import wordpressDevelopment from './wordpress-development.mjs';
import corporateWebsite from './corporate-website.mjs';
import landingPage from './landing-page.mjs';
import websiteMaintenance from './website-maintenance.mjs';

export const services = [
  websiteDevelopment, ecommerceDevelopment, mobileAppDevelopment, customSoftware, uiUxDesign, seo,
  wordpressDevelopment, corporateWebsite, landingPage, websiteMaintenance
];
export const featuredServices = services.slice(0, 6);
export const secondaryServices = services.slice(6);
export const serviceBySlug = slug => services.find(s => s.slug === slug);
