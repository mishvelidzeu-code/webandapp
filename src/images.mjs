// Responsive image catalogue. Master files live in images-src/; variants are generated into assets/
// by `npm run images` (scripts/images.mjs) and committed. width/height are the master dimensions
// (aspect ratio for the <img> box), widths are the generated variant widths.
export const images = {
  'picker-website': {width: 1600, height: 900, widths: [480, 800, 1200], og: 'og-home'},
  'picker-shop': {width: 1600, height: 900, widths: [480, 800, 1200]},
  'picker-app': {width: 1600, height: 900, widths: [480, 800, 1200]},
  'website-development': {width: 1536, height: 1024, widths: [480, 800, 1200, 1536], og: 'og-website-development'},
  'ecommerce-development': {width: 1536, height: 1024, widths: [480, 800, 1200, 1536], og: 'og-ecommerce-development'},
  'mobile-app-development': {width: 1024, height: 1536, widths: [480, 800, 1024], og: 'og-mobile-app-development'},
  'custom-software': {width: 1536, height: 1024, widths: [480, 800, 1200, 1536], og: 'og-custom-software'},
  'ui-ux-design': {width: 1536, height: 1024, widths: [480, 800, 1200, 1536], og: 'og-ui-ux-design'},
  'seo': {width: 1536, height: 1024, widths: [480, 800, 1200, 1536], og: 'og-seo'}
};
export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;
