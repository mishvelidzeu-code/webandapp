# მფლობელის TODO — რაც კოდით ვერ კეთდება

ეს სია იმ საკითხებს აერთიანებს, რომლებიც საიტის კოდში განზრახ **არ** არის გამოგონილი და მხოლოდ თქვენგან შეიძლება მოვიდეს. თითოეულის შევსების ადგილი მითითებულია.

## 1. ფაქტები, რომლებიც site.config.mjs-ში უნდა ჩაიწეროს (როცა რეალურია)

| ველი | რას ცვლის | სად ჩნდება |
|---|---|---|
| `legalName` | რეგისტრირებული იურიდიული პირის სახელი (ინდ. მეწარმე / შპს) | კონფიდენციალურობა, პირობები |
| `streetAddress` | ოფისის მისამართი (თუ ფიზიკური ოფისი გაქვთ) | LocalBusiness schema, Google Business Profile-თან თანხვედრა |
| `openingHours` | სამუშაო საათები, მაგ. `['Mo-Fr 10:00-19:00']` | schema; GBP-სთან უნდა ემთხვეოდეს |
| `sameAs` | რეალური პროფილების URL-ები: Facebook, Instagram, LinkedIn, GBP, Clutch | Organization schema (`sameAs`) |
| `email` | ბიზნეს-ელფოსტა `info@webandapp.ge` gmail-ის ნაცვლად (ჯერ დომენზე უნდა გაიხსნას) | ყველგან |
| `portfolio` | რეალური პროექტები კლიენტის თანხმობით — სანამ ცარიელია, პორტფოლიოს ბმულები საიტზე არ ჩანს | nav, footer, მთავარი გვერდი, /portfolio |

## 2. About გვერდი — შესავსები ფაქტები (src/ui.mjs → aboutSections)

- ვინ დგას webandapp-ის უკან: სახელი, როლი, გამოცდილების წლები, ფოტო (მხოლოდ თანხმობით).
- გუნდის ზომა / პარტნიორები, თუ არიან.
- სერტიფიკატები, თუ არსებობს.

## 3. Google Business Profile (GBP)

1. შექმენით/დაადასტურეთ პროფილი: business.google.com — კატეგორია „Website designer" (+ „Software company"), service-area: საქართველო (ან მისამართი, თუ ოფისი გაქვთ).
2. სახელი ზუსტად `webandapp`, ტელეფონი `+995 599 30 84 14`, საიტი `https://webandapp.ge/` — იგივე, რაც საიტზეა (NAP consistency).
3. მომსახურებების სია GBP-ში = საიტის 10 სერვისი, აღწერით და ბმულით შესაბამის გვერდზე.
4. პირველი 5 რეალური შეფასება კლიენტებისგან (არასდროს გამოგონილი).
5. პროფილის URL ჩაწერეთ `sameAs`-ში.

## 4. Search Console და Bing

- Search Console უკვე ვერიფიცირებულია (მეტა-ტეგი). Deploy-ის შემდეგ: Sitemaps → `https://webandapp.ge/sitemap.xml` ხელახლა გაგზავნეთ; URL Inspection → „Request indexing" მთავარ გვერდზე, /website-development, /prices და ახალ სტატიებზე.
- Bing Webmaster Tools: bing.com/webmasters → საიტის დამატება Search Console-ის იმპორტით (ერთი ღილაკი). ეს Bing-ს, DuckDuckGo-სა და ChatGPT-search-ს ფარავს.
- Google Analytics 4-ში კონვერსიებად მონიშნეთ: `phone_click`, `whatsapp_click`, `generate_lead`, `email_draft_open`.

## 5. Off-site (backlinks, პროფილები)

იხილეთ საბოლოო ანგარიშის OFF-SITE SEO PLAN ნაწილი. მოკლედ, თანმიმდევრობით:
1. Facebook Page, Instagram, LinkedIn Company Page — იდენტური სახელით/ტელეფონით/ბმულით.
2. Clutch.co და GoodFirms პროფილი.
3. ქართული ბიზნეს-კატალოგები (მხოლოდ რეალური, მოდერირებული).
4. კლიენტების საიტების footer-ბმული „საიტი შექმნა webandapp" — მხოლოდ თანხმობით.
5. 1 სტუმარი სტატია თვეში ქართულ ბიზნეს/მარკეტინგ მედიაში (ფასების/ვადების თემებზე).

## 6. იურიდიული

- კონფიდენციალურობის გვერდზე შენახვის ვადა ახლა ასეა: „იმ ვადით, რაც პასუხისთვის, შეთავაზებისა და თანამშრომლობისთვისაა საჭირო". თუ კონკრეტული ვადა გსურთ (მაგ. 24 თვე), ჩაწერეთ `src/legal.mjs`-ში.
- SMTP პროვაიდერი (თუ პირდაპირი გაგზავნა ჩართულია) — შეიძლება დაემატოს „როგორ იგზავნება" სექციაში.

## 7. Deploy და შემოწმება

- Vercel-ში env var `SITE_PUBLISHED` აღარ არის საჭირო (production ყოველთვის published-ია). Preview deploy-ები ავტომატურად noindex-ია.
- Deploy-ის შემდეგ: `npm run verify:live` — ამოწმებს robots, sitemap, canonical, 200-ებს, redirect-ებს და 404-ს ლაივზე.
