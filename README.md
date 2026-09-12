# webandapp.ge

ქართული ციფრული სააგენტოს მრავალგვერდიანი ვებსაიტი. მთავარი ენაა ქართული; დამატებულია ინგლისური და რუსული ვერსიები.

## ნახვა

სწრაფი სანახავად გახსენით `index.html`. სრული ფორმისა და redirect-ების შესამოწმებლად საჭიროა Node.js 22 ან ახალი:

```powershell
npm install
npm run dev
```

შემდეგ გახსენით `http://127.0.0.1:4173/`.

## გამოქვეყნება

`npm run build` სამ ნაბიჯს ასრულებს: გვერდების გენერაცია → `dist/`-ის შეფუთვა → `scripts/verify-deploy.mjs` (გამოქვეყნების კარიბჭე). თუ შემოწმება ვერ გაივლის (robots ბლოკავს საიტს, მთავარი გვერდი noindex-ია, canonical/sitemap გატეხილია, draft-ტექსტი ჩანს, asset-ები უვერსიოა), build ჩავარდება და Vercel deploy-ს არ გააკეთებს.

- Production (VERCEL_ENV=production) **ყოველთვის** published-ია — env var არ სჭირდება.
- Preview deploy-ები და `SITE_DRAFT=true` — noindex + `Disallow: /`.
- Deploy-ის შემდეგ: `npm run verify:live` (ან `VERIFY_ORIGIN=https://... npm run verify:live` preview-სთვის).
- სურათების ორიგინალები `images-src/`-შია; ვარიანტები (AVIF/WebP/OG) `npm run images`-ით გენერირდება და commit-დება `assets/`-ში.
- ყველა asset `?v=<hash>`-ით იტვირთება და CDN-ზე 1 წელი immutable კეშირდება; HTML — `max-age=0, must-revalidate`.
- URL სქემა: trailing slash არსად (გარდა `/`); ენების ფესვია `/en` და `/ru`.

მფლობელის შესავსები ფაქტები (იურიდიული პირი, მისამართი, პროფილები, პორტფოლიო) — `docs/owner-todo.md`.

## დოკუმენტაცია

- `docs/seo-strategy.md` — აუდიტი, კონკურენტები, keyword mapping, ტექნიკური SEO, ლოკალური და 12-თვიანი გეგმა.
- `docs/content-plan.csv` — 30 ბლოგის თემის გეგმა.
- `docs/page-seo.csv` — ყველა გვერდის Title, Meta Description, H1 და Schema.
- `docs/headings-and-links.md` — H1–H3 სტრუქტურა და შიდა ბმულები.
- `docs/georgian-copy.md` — ქართული გვერდების სრული ტექსტი.
- `docs/test-results.md` — ფუნქციური, ხელმისაწვდომობისა და Lighthouse შედეგები.
- `docs/owner-todo.md` — რაც კოდით ვერ კეთდება: GBP, პროფილები, იურიდიული ფაქტები, პორტფოლიო.
- `docs/page-lastmod.json` — თითოეული გვერდის კონტენტის hash და რეალური lastmod (sitemap-ისთვის; build ავტომატურად ანახლებს).

