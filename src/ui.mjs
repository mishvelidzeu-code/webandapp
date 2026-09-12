// Interface strings and page copy per language. Georgian (ka) is the primary market; en/ru are
// written as their own copy, not word-for-word translations of Georgian search phrases.
export const ui = {
ka: {
  home: 'მთავარი', services: 'მომსახურებები', prices: 'ფასები', portfolio: 'პორტფოლიო', about: 'ჩვენ შესახებ', blog: 'ბლოგი',
  faq: 'ხშირი კითხვები', contact: 'კონტაქტი', privacy: 'კონფიდენციალურობა', terms: 'გამოყენების პირობები',
  skip: 'შინაარსზე გადასვლა', menu: 'მენიუ', navigation: 'მთავარი ნავიგაცია', languages: 'ენის არჩევა',
  quote: 'პროექტის შეფასება', projectPrice: 'ფასები', consult: 'უფასო კონსულტაცია', order: 'მოითხოვეთ შეთავაზება',
  more: 'დეტალურად', all: 'ყველა მომსახურება', read: 'სტატიის წაკითხვა', call: 'დაგვირეკეთ', email: 'მოგვწერეთ', whatsapp: 'WhatsApp-ზე მოწერა',

  // Home hero
  tagline: 'ციფრული სტუდია · თბილისი, საქართველო',
  hero: ['საიტის დამზადება და', 'აპლიკაციების შექმნა', 'თქვენი ბიზნესისთვის.'],
  heroIntro: 'webandapp თბილისური ციფრული სტუდიაა: ვქმნით ვებსაიტებს, ონლაინ მაღაზიებსა და მობილურ აპლიკაციებს ბიზნესებისთვის მთელ საქართველოში. სამუშაოს მოცულობა, ფასი და ვადა წინასწარ, წერილობით თანხმდება — თქვენ ზუსტად იცით, რას მიიღებთ.',
  heroPrimary: 'მომიყევით პროექტის შესახებ', heroSecondary: 'ნახე მომსახურებები',
  micro: ['მობილურზე მორგებული', 'SEO-ს საფუძვლით', 'წერილობითი შეთანხმება'],
  picker: 'რით დავიწყოთ?', pickerLabels: ['ვებსაიტი', 'მაღაზია', 'აპლიკაცია'],
  pickerDescriptions: ['თქვენი მომსახურება, მკაფიოდ და ერთ სივრცეში.', 'პროდუქტიდან შეკვეთამდე — მარტივი გზა.', 'თქვენი პროდუქტი მომხმარებლის ტელეფონში.'],
  pickerPrices: ['250 ₾-დან', '600 ₾-დან', '1,100 ₾-დან'], pickerFoot: 'იდეის მოკლე აღწერა საკმარისია', techLabel: 'ტექნოლოგია ამოცანის მიხედვით',

  // Home sections
  serviceTitle: 'რა სჭირდება თქვენს ბიზნესს?',
  serviceText: 'აირჩიეთ მიმართულება. ერთად განვსაზღვრავთ ფუნქციებს, ვადასა და სამუშაოს მოცულობას.',
  serviceCta: 'განვიხილოთ თქვენი ამოცანა',
  benefitTitle: 'კარგი თანამშრომლობა დეტალებში ჩანს.',
  benefits: [
    ['გასაგები შეთანხმება', 'სამუშაოს მოცულობა, გადასაცემი მასალები და ეტაპები დაწყებამდე წერილობით განისაზღვრება.'],
    ['ბიზნესის საჭიროებიდან', 'ტექნოლოგიას ვარჩევთ ამოცანის, ბიუჯეტისა და შემდგომი მართვის მიხედვით — არა პირიქით.'],
    ['გაზომვადი მოქმედებები', 'საიტზე ზარები, WhatsApp-ზე მოწერა და ფორმები ცალკე იზომება, რომ რეალური შედეგი ჩანდეს.']
  ],
  processTitle: 'მკაფიო ნაბიჯები. შეთანხმებული შედეგი.',
  processText: 'პროექტის თითოეულ ეტაპზე გეცოდინებათ, რას ვაკეთებთ და რა გადაწყვეტილებაა მისაღები.',
  processCta: 'დავიწყოთ განხილვა',
  steps: [
    ['გაცნობა', 'ვაზუსტებთ მიზანს, აუდიტორიას და საჭირო ფუნქციებს.'],
    ['დიზაინი', 'ვათანხმებთ სტრუქტურას, ვიზუალურ სტილსა და მომხმარებლის გზას.'],
    ['შექმნა', 'ვაწყობთ და ვამოწმებთ პროექტის შეთანხმებულ ფუნქციებს.'],
    ['გაშვება', 'ვამზადებთ გამოქვეყნებას, წვდომებს და შემდგომი მოვლის გეგმას.']
  ],
  deliverablesKicker: 'რას მიიღებთ', deliverablesTitle: 'პროექტის ბოლოს თქვენს ხელშია',
  deliverables: [
    ['დომენი და წვდომები თქვენს სახელზე', 'დომენს, ჰოსტინგსა და პლატფორმის ანგარიშებს დამკვეთი ფლობს. სამუშაოსთვის საჭირო წვდომა ცალკე როლით გაიცემა.'],
    ['შეთანხმებული ფუნქციების სია', 'რა შედის პროექტში და რა არა — წერილობით, დაწყებამდე. ცვლილებები ცალკე თანხმდება.'],
    ['გამოქვეყნებული და შემოწმებული საიტი', 'ფორმები, ბმულები, მობილური ხედი და საძიებო სისტემისთვის საჭირო საფუძველი გაშვებამდე მოწმდება.'],
    ['შემდგომი მოვლის გეგმა', 'ვინ და როგორ განაახლებს საიტს გაშვების შემდეგ — ეს გადაწყვეტილება წინასწარ ფიქსირდება.']
  ],
  portfolioTitle: 'ნამუშევრები და მათი ისტორია', portfolioEmpty: 'პორტფოლიო მზადდება',
  portfolioText: 'პროექტების აღწერები დაემატება რეალური მასალებისა და კლიენტების გამოქვეყნების თანხმობის მიღების შემდეგ. ამ ეტაპზე ნამუშევრების ნახვა შესაძლებელია პირადი შეხვედრისას ან მოთხოვნით.',
  portfolioCta: 'განვიხილოთ თქვენი პროექტი',
  priceTitle: 'ფასი იწყება თქვენი ამოცანით.',
  priceText: 'აირჩიეთ ფორმატი. ზუსტი ღირებულება განისაზღვრება ფუნქციების, დიზაინისა და სამუშაოს მოცულობის შეთანხმების შემდეგ.',
  priceValue: 'ინდივიდუალური შეფასება',
  priceNote: 'მითითებული ფასები საწყისია. საბოლოო ღირებულება განისაზღვრება ფუნქციების, დიზაინისა და სამუშაოს მოცულობის შეთანხმების შემდეგ.',
  allPrices: 'სრული ფასები და რა შედის მათში',
  plans: [
    ['საწყისი ვებსაიტი', 'ერთი შეთავაზება ან მცირე ბიზნესის წარდგენა.', ['მიზნობრივი გვერდი', 'მობილური დიზაინი', 'საკონტაქტო მოქმედებები']],
    ['ბიზნესის ვებსაიტი', 'მომსახურებები, კატალოგი და კონტენტის მართვა.', ['მრავალგვერდიანი სტრუქტურა', 'მართვის სისტემის შერჩევა', 'ენები და ინტეგრაციები']],
    ['აპი ან ბიზნესსისტემა', 'პროდუქტი თქვენი სამუშაო პროცესის გარშემო.', ['ფუნქციების დაგეგმვა', 'მომხმარებლის როლები', 'განვითარების ეტაპები']]
  ],
  packagePrices: ['250 ₾-დან', '600 ₾-დან', '1 100 ₾-დან'],
  faqTitle: 'ჯერ კითხვები გაქვთ?', faqIntro: 'აქ არის პასუხები საკითხებზე, რომლებიც პროექტის დაწყებამდე დაგეხმარებათ.', allFaq: 'ყველა კითხვა და პასუხი',
  blogTitle: 'სანამ პროექტს დაიწყებთ', blogIntro: 'პრაქტიკული გზამკვლევები ფასებზე, ვადებსა და სწორ გადაწყვეტილებებზე.', allArticles: 'ყველა სტატია',
  finalKicker: 'შემდეგი ნაბიჯი', finalTitle: 'გაქვთ პროექტის იდეა?',
  finalText: 'მოგვწერეთ რას გეგმავთ — საჭირო ფუნქციებსა და რეალურ გზას ერთად განვიხილავთ.',
  finalCta: 'მომიყევით პროექტის შესახებ', finalCall: 'დაგვირეკეთ',
  contactTitle: 'მოგვიყევით თქვენს იდეაზე.',
  contactText: 'აღწერეთ, რას აკეთებს თქვენი ბიზნესი და რა გსურთ შექმნათ. საჭირო დეტალებს შემდეგ ერთად დავაზუსტებთ.',
  coverage: 'ვემსახურებით ბიზნესებს მთელი საქართველოს მასშტაბით — თბილისში, ბათუმში, ქუთაისსა და სხვა ქალაქებში დისტანციურად.',

  // Form
  name: 'სახელი', phone: 'ტელეფონი', mail: 'ელფოსტა', service: 'მომსახურება', choose: 'აირჩიეთ მიმართულება',
  message: 'პროექტის მოკლე აღწერა', budget: 'სასურველი ბიუჯეტი', deadline: 'სასურველი ვადა', undecided: 'ჯერ არ გადამიწყვეტია',
  budgets: ['2 000 ₾-მდე', '2 000–5 000 ₾', '5 000–10 000 ₾', '10 000 ₾-ზე მეტი'], deadlines: ['1 თვის განმავლობაში', '1–3 თვეში', '3 თვის შემდეგ'],
  messagePlaceholder: 'მაგალითად: გვჭირდება კომპანიის საიტი, მომსახურების გვერდებითა და შეკვეთის ფორმით.',
  consent: 'ვეთანხმები მოთხოვნის განსახილველად ჩემი მონაცემების დამუშავებას',
  submit: 'მოთხოვნის გაგზავნა', draft: 'წერილის მომზადება',
  draftNote: 'ღილაკზე დაჭერისას გაიხსნება თქვენი ელფოსტა მომზადებული წერილით. გაგზავნას თავად დაადასტურებთ.',
  serverNote: 'ფორმის გაგზავნით ითხოვთ შეთავაზებას. ეს შეკვეთის ან გადახდის დადასტურება არ არის.',
  draftReady: 'წერილი მომზადდა. თუ ელფოსტა ავტომატურად არ გაიხსნა, გამოიყენეთ ქვემოთ მოცემული ბმული.',
  openDraft: 'ელფოსტაში გახსნა', sending: 'იგზავნება…',
  sent: 'მოთხოვნა საფოსტო სერვისმა მიიღო გასაგზავნად. გმადლობთ! პასუხი მითითებულ კონტაქტზე მოგივათ.',
  error: 'გაგზავნა ვერ დადასტურდა. მონაცემები შენარჩუნებულია — სცადეთ ხელახლა ან გამოგვიგზავნეთ ელფოსტით.',
  invalid: 'გთხოვთ, სწორად შეავსოთ აუცილებელი ველები.',
  formHelp: 'აუცილებელი ველები მონიშნულია * ნიშნით. ფაილები შეგიძლიათ დაურთოთ ელფოსტით გაგზავნილ წერილს.',

  // Service page template
  problem: 'რა პრობლემას აგვარებს', audience: 'ვისთვის არის განკუთვნილი', features: 'რა შედის მომსახურებაში',
  process: 'მუშაობის ეტაპები', technologies: 'ტექნოლოგიის შერჩევა',
  techNote: 'საბოლოო ტექნოლოგიები შეირჩევა მოთხოვნების განხილვის შემდეგ. ქვემოთ მოცემულია შესაძლო მიმართულებები.',
  timing: 'რა მოქმედებს ვადაზე', cost: 'რა მოქმედებს ფასზე', priceFrom: 'საწყისი ფასი', support: 'მხარდაჭერა გაშვების შემდეგ',
  why: 'რატომ webandapp',
  whyText: 'ჩვენი მიდგომაა ამოცანის წერილობით ჩამოყალიბება, ეტაპობრივი შეთანხმება და გადასაცემი შედეგის წინასწარ აღწერა. თქვენ ხედავთ, რას მოიცავს სამუშაო და რა საჭიროებს ცალკე გადაწყვეტილებას.',
  related: 'დაკავშირებული მომსახურებები', reading: 'წასაკითხი პროექტის დაწყებამდე',
  sideTitle: 'მზად ხართ პირველი ნაბიჯისთვის?', sideText: 'მოგვწერეთ მიზანი და მთავარი ფუნქციები. ეს შეფასების მომზადებაში დაგვეხმარება.',

  // Footer, cookies, 404
  footerText: 'ვებსაიტები, აპლიკაციები და ბიზნესსისტემები. იდეის გააზრებიდან ტექნიკურ შესრულებამდე.',
  rights: 'ყველა უფლება დაცულია.',
  cookieTitle: 'ანალიტიკის არჩევანი',
  cookieText: 'სურვილის შემთხვევაში ანალიტიკა დაგვეხმარება საიტის გამოყენების გაგებაში. უარის შემთხვევაშიც საიტი მუშაობს.',
  accept: 'ანალიტიკის ჩართვა', decline: 'მხოლოდ აუცილებელი', cookieSettings: 'ქუქიების პარამეტრები',
  notFound: 'ეს გვერდი ვერ მოიძებნა',
  notFoundText: 'შესაძლოა მისამართი შეიცვალა ან არასწორადაა შეყვანილი. დაბრუნდით მთავარ გვერდზე ან დაგვიკავშირდით.',
  back: 'მთავარზე დაბრუნება',

  // Page titles / descriptions
  pageTitle: {
    home: 'საიტის დამზადება და აპლიკაციის შექმნა | webandapp',
    prices: 'საიტის დამზადების ფასი და აპლიკაციის ღირებულება {year} | webandapp',
    about: 'ჩვენ შესახებ — webandapp, ვებ სტუდია თბილისში',
    faq: 'ხშირი კითხვები საიტისა და აპლიკაციის შეკვეთაზე | webandapp',
    blog: 'ბლოგი — საიტები, აპლიკაციები, ფასები და ვადები | webandapp',
    contact: 'კონტაქტი — მოგვწერეთ ან დაგვირეკეთ | webandapp',
    portfolio: 'პორტფოლიო | webandapp'
  },
  pageDescription: {
    home: 'საიტის დამზადება, ონლაინ მაღაზიისა და მობილური აპლიკაციის შექმნა ქართული ბიზნესისთვის: წერილობითი შეთანხმება, მობილური დიზაინი და SEO საფუძველი. მოგვწერეთ.',
    prices: 'რა ღირს საიტის დამზადება და აპლიკაციის შექმნა: საწყისი ფასები, რა შედის ღირებულებაში, რა ზრდის ფასს და რა ინფორმაციაა საჭირო ზუსტი შეთავაზებისთვის.',
    about: 'webandapp — ვებ სტუდია თბილისში: საიტები, ონლაინ მაღაზიები და მობილური აპლიკაციები ბიზნესებისთვის მთელ საქართველოში. როგორ ვმუშაობთ და რაზე ვაგებთ პასუხს.',
    faq: 'პასუხები საიტისა და აპლიკაციის შეკვეთის კითხვებზე: ფასები, ვადები, დომენი და ჰოსტინგი, SEO, მხარდაჭერა და თანამშრომლობის პროცესი.',
    blog: 'პრაქტიკული სტატიები ბიზნესისთვის: რა ღირს საიტი და აპლიკაცია, რამდენ ხანში მზადდება, WordPress თუ ინდივიდუალური კოდი, დომენი და ჰოსტინგი საქართველოში.',
    contact: 'მოგვწერეთ პროექტის შესახებ ან დაგვირეკეთ: +995 599 30 84 14. ვემსახურებით ბიზნესებს მთელ საქართველოში — თბილისში, ბათუმში, ქუთაისში და დისტანციურად.',
    portfolio: 'webandapp-ის პროექტების აღწერები დაემატება კლიენტების თანხმობის შემდეგ. ნამუშევრების ნახვა შესაძლებელია მოთხოვნით.'
  },

  // Home FAQ — only the commercial questions; the full catalogue lives on /faq
  homeFaq: [
    ['რა ღირს საიტის დამზადება?', 'საწყისი ვებსაიტი 250 ₾-დან, მრავალგვერდიანი ბიზნეს საიტი 600 ₾-დან, მობილური აპლიკაცია 1 100 ₾-დან. ზუსტი თანხა შეთავაზებაში იწერება ფუნქციების, დიზაინისა და გვერდების რაოდენობის შეთანხმების შემდეგ.'],
    ['რამდენ ხანში იქნება საიტი მზად?', 'ვადა დამოკიდებულია გვერდების რაოდენობაზე, ტექსტებისა და ფოტოების მზადყოფნასა და დიზაინის შეთანხმების სისწრაფეზე. კონკრეტული ვადა და ეტაპები შეთავაზებაში ფიქსირდება.'],
    ['რა ინფორმაცია გჭირდებათ შეფასებისთვის?', 'რას აკეთებს თქვენი ბიზნესი, რა უნდა გააკეთოს მომხმარებელმა საიტზე (დარეკოს, შეავსოს ფორმა, შეიძინოს) და რა ფუნქციები გჭირდებათ. ლოგო და ტექსტები მოგვიანებითაც შეიძლება.'],
    ['დომენი და ჰოსტინგი ფასში შედის?', 'არა — ეს ცალკე, წლიური ხარჯია და შეთავაზებაში ცალკე სტრიქონად აღირიცხება. დომენი ყოველთვის დამკვეთის სახელზე რჩება.']
  ],

  // Prices page
  pricesH1: 'საიტის დამზადების ფასი და აპლიკაციის შექმნის ღირებულება',
  pricesIntro: 'ქვემოთ მოცემულია საწყისი ფასები მიმართულებების მიხედვით. საბოლოო ღირებულება განისაზღვრება ფუნქციების, დიზაინისა და სამუშაოს მოცულობის შეთანხმების შემდეგ და შეთავაზებაში წერილობით ფიქსირდება.',
  priceReferenceTitle: 'საწყისი ფასები მიმართულებების მიხედვით',
  priceService: 'მომსახურება', priceFormat: 'მიმართულება', priceAmount: 'ფასი',
  priceCatalog: [
    ['ვებსაიტის დამზადება', 'საიტი', '250 ₾-დან', 'website-development'],
    ['ონლაინ მაღაზიის შექმნა', 'მაღაზია', '600 ₾-დან', 'ecommerce-development'],
    ['მობილური აპლიკაციის შექმნა', 'აპლიკაცია', '1 100 ₾-დან', 'mobile-app-development'],
    ['ინდივიდუალური პროგრამირება', 'პროგრამა', 'ინდივიდუალური', 'custom-software'],
    ['UI/UX დიზაინი', 'დიზაინი', 'ინდივიდუალური', 'ui-ux-design'],
    ['საიტის SEO ოპტიმიზაცია', 'SEO', '50 ₾-დან — 3,500 ₾-მდე', 'seo']
  ],
  priceSections: [
    ['რა ღირს საიტის დამზადება', [
      'საიტის დამზადების ფასი მარტივი, ერთგვერდიანი საიტისთვის 250 ₾-დან იწყება, მრავალგვერდიანი ბიზნეს საიტისთვის კი 600 ₾-დან. ეს საწყისი თანხებია: ზუსტი ღირებულება იმაზეა დამოკიდებული, რამდენი გვერდი და ენა გჭირდებათ, სჭირდება თუ არა საიტს მართვის სისტემა და რომელ სერვისებთან უნდა იყოს დაკავშირებული.',
      'ფასების ფორმირების დეტალური ახსნა და ბაზრის ორიენტირები იხილეთ სტატიაში [რა ღირს საიტის დამზადება საქართველოში](/blog/saitis-damzadebis-fasi), ხოლო თავად მომსახურების აღწერა — გვერდზე [ვებ საიტის დამზადება](/website-development).'
    ]],
    ['რა ღირს აპლიკაციის შექმნა', [
      'მობილური აპლიკაციის შექმნა 1 100 ₾-დან იწყება მარტივი პირველი ვერსიისთვის. აპლიკაციის დამზადების ღირებულება იზრდება, თუ საჭიროა სერვერული ნაწილი, მომხმარებლის ავტორიზაცია და როლები, გადახდები ან გარე სისტემებთან ინტეგრაცია. Android და iOS ერთ პროექტში (React Native) ჩვეულებრივ უფრო იაფი ჯდება, ვიდრე ორი ცალკე აპლიკაცია.',
      'რა განსაზღვრავს აპლიკაციის ბიუჯეტს ეტაპობრივად — იხილეთ [აპლიკაციის დამზადების ფასი](/blog/aplikaciis-damzadebis-fasi) და [მობილური აპლიკაციის შექმნის](/mobile-app-development) გვერდი.'
    ]],
    ['რა შედის ფასში', [
      {list: [
        'გვერდების სტრუქტურისა და მომხმარებლის გზის დაგეგმვა',
        'დიზაინი მობილურისა და დესკტოპისთვის, შეთანხმებული სტილით',
        'ტექსტებისა და ფოტოების განლაგება (მასალას დამკვეთი აწვდის; ტექსტების მომზადება ცალკე თანხმდება)',
        'საკონტაქტო ფორმა, ზარისა და WhatsApp-ის ღილაკები, ანალიტიკის მოვლენები',
        'ტექნიკური SEO საფუძველი: სათაურები, აღწერები, სწრაფი ჩატვირთვა, sitemap, საძიებო სისტემისთვის წაკითხვადი HTML',
        'გამოქვეყნება თქვენს დომენსა და ჰოსტინგზე და გაშვებამდე შემოწმება'
      ]}
    ]],
    ['რა ზრდის ღირებულებას', [
      {list: [
        'გვერდებისა და ენების რაოდენობა — თითოეული ენა სრულ თარგმანსა და ცალკე მისამართებს საჭიროებს',
        'კონტენტის მართვის სისტემა (WordPress ან სხვა) და რედაქტორების როლები',
        'ონლაინ გადახდა, ჯავშნის სისტემა, კურიერის ან საწყობის ინტეგრაცია',
        'ინდივიდუალური ილუსტრაციები, ანიმაციები და უნიკალური კომპონენტები',
        'ძველი საიტიდან კონტენტის გადატანა და გადამისამართებების დაგეგმვა',
        'ტექსტების წერა, ფოტოგრაფია და პროდუქტების მონაცემების მომზადება'
      ]}
    ]]
  ],
  priceCompareTitle: 'საიტი, ონლაინ მაღაზია თუ აპლიკაცია — რომელი გჭირდებათ?',
  priceCompareText: 'სამივე ფორმატი განსხვავებულ ამოცანას წყვეტს და განსხვავებული ბიუჯეტიდან იწყება. ცხრილი დაგეხმარებათ, სწორი მიმართულება აირჩიოთ განხილვამდე.',
  priceCompare: {
    head: ['', 'ვებსაიტი', 'ონლაინ მაღაზია', 'მობილური აპლიკაცია'],
    rows: [
      ['რისთვის', 'მომსახურების წარდგენა და მოთხოვნების მიღება', 'პროდუქტების გაყიდვა შეკვეთით და გადახდით', 'განმეორებადი მოქმედებები: ჯავშანი, შეკვეთა, პირადი კაბინეტი'],
      ['საწყისი ფასი', '250 ₾-დან (ერთგვერდიანი), 600 ₾-დან (ბიზნეს საიტი)', '600 ₾-დან', '1 100 ₾-დან'],
      ['რა მოქმედებს ფასზე ყველაზე მეტად', 'გვერდები, ენები, მართვის სისტემა', 'კატალოგის სირთულე, გადახდა, მიწოდება', 'სერვერული ნაწილი, როლები, ინტეგრაციები'],
      ['მიმდინარე ხარჯი', 'დომენი და ჰოსტინგი', 'დომენი, ჰოსტინგი, გადახდის პროვაიდერის საკომისიო', 'სერვერი, დეველოპერის ანგარიშები (Apple/Google), განახლებები'],
      ['დეტალურად', '[ვებ საიტის დამზადება](/website-development)', '[ონლაინ მაღაზიის შექმნა](/ecommerce-development)', '[მობილური აპლიკაციის შექმნა](/mobile-app-development)']
    ]
  },
  priceQuoteTitle: 'რა ინფორმაციაა საჭირო ზუსტი შეთავაზებისთვის',
  priceQuoteText: 'რაც უფრო კონკრეტულია აღწერა, მით უფრო ზუსტია თანხა და ვადა. საკმარისია მოკლე პასუხები ამ კითხვებზე:',
  priceQuote: [
    'რას აკეთებს ბიზნესი და ვინ არის მისი მომხმარებელი',
    'რა უნდა გააკეთოს ვიზიტორმა საიტზე: დარეკოს, შეავსოს ფორმა, დაჯავშნოს თუ შეიძინოს',
    'რამდენი გვერდი ან განყოფილება წარმოგიდგენიათ და რომელ ენებზე',
    'გჭირდებათ თუ არა კონტენტის დამოუკიდებლად შეცვლა',
    'რომელ სისტემებთან უნდა იყოს კავშირი: გადახდა, კურიერი, CRM, ბუღალტერია',
    'გაქვთ თუ არა ლოგო, ტექსტები, ფოტოები და არსებული საიტი'
  ],
  priceFaq: [
    ['საიტის დამზადება ფასი — რაზეა დამოკიდებული?', 'გვერდების რაოდენობაზე, ენებზე, მართვის სისტემასა და იმაზე, გჭირდებათ თუ არა გადახდები, ჯავშნები ან სხვა სისტემებთან კავშირი. დიზაინის ინდივიდუალურობაც ცვლის სამუშაოს მოცულობას.'],
    ['საიტის შექმნა ფასი ერთჯერადია თუ ყოველთვიური?', 'დამზადება ერთჯერადი ღირებულებაა. ცალკე რჩება დომენისა და ჰოსტინგის წლიური გადასახადი, ხოლო მხარდაჭერა და განახლებები ცალკე თანხმდება.'],
    ['აპლიკაციის შექმნა ფასი ორივე პლატფორმაზე ორმაგდება?', 'არა. React Native-ით Android და iOS ერთი კოდის ბაზიდან იწყობა, ამიტომ ორივე პლატფორმა ერთად უფრო იაფი ჯდება, ვიდრე ორი ცალკე პროექტი.'],
    ['აპლიკაციის დამზადების ფასი როგორ ითვლება?', 'ფუნქციების სიით. ჯერ ვთანხმდებით პირველი ვერსიის შემადგენლობაზე, ვაფასებთ ეტაპებს და შემდეგ ვამატებთ სერვერულ ნაწილს, როლებსა და ინტეგრაციებს, თუ საჭიროა.'],
    ['ფასში დომენი და ჰოსტინგი შედის?', 'არა. დომენი და ჰოსტინგი ცალკე, წლიური ხარჯია და შეთავაზებაში ცალკე სტრიქონად აღირიცხება. დომენი თქვენს სახელზე რჩება.'],
    ['შესაძლებელია ეტაპობრივი გადახდა?', 'გადახდის ეტაპები პროექტის ეტაპებს მიჰყვება და შეთანხმებაში წერილობით ფიქსირდება. კონკრეტული პირობები შეთავაზებაში იწერება.'],
    ['რა ხდება, თუ პროექტის დროს ახალი ფუნქცია მჭირდება?', 'ახალი მოთხოვნა ცალკე ფასდება და ვადაზეც შეიძლება იმოქმედოს. ამიტომ საწყისი ფუნქციების სია რაც შეიძლება ზუსტად უნდა შევათანხმოთ.']
  ],

  // About page
  aboutH1: 'webandapp — ვებსაიტებისა და აპლიკაციების სტუდია თბილისში',
  aboutIntro: 'ვქმნით ვებსაიტებს, ონლაინ მაღაზიებს, მობილურ აპლიკაციებსა და ბიზნესსისტემებს კომპანიებისთვის მთელ საქართველოში. ვმუშაობთ დისტანციურად, ამიტომ ქალაქს მნიშვნელობა არ აქვს — მნიშვნელობა აქვს ამოცანას.',
  aboutSections: [
    ['ვინ არის webandapp', [
      'webandapp თბილისში დაფუძნებული ციფრული სტუდიაა, რომელიც ბიზნესებისთვის ვებსაიტებს, ონლაინ მაღაზიებს, მობილურ აპლიკაციებსა და ინდივიდუალურ პროგრამულ უზრუნველყოფას ქმნის. საიტი და კომუნიკაცია სამ ენაზეა — ქართულად, ინგლისურად და რუსულად — რომ თქვენს კლიენტებსაც იმავე ენაზე ვესაუბროთ.',
      'ჩვენი ამოცანა უბრალოდ „საიტის გაკეთება" არ არის. მიზანია, მომხმარებელმა თქვენი შეთავაზება მარტივად იპოვოს, გაიგოს და დაგიკავშირდეთ — ტელეფონით, ფორმით ან შეკვეთით.'
    ]],
    ['რას ვაკეთებთ', [
      {list: [
        '[ვებ საიტის დამზადება](/website-development) — მომსახურების, კომპანიისა და ბრენდის საიტები',
        '[ონლაინ მაღაზიის შექმნა](/ecommerce-development) — კატალოგი, კალათა, გადახდა და მიწოდება',
        '[მობილური აპლიკაციის შექმნა](/mobile-app-development) — iOS და Android ერთი კოდის ბაზიდან',
        '[ინდივიდუალური პროგრამული უზრუნველყოფა](/custom-software) — სამუშაო პროცესების სისტემები',
        '[UI/UX დიზაინი](/ui-ux-design), [SEO ოპტიმიზაცია](/seo) და [საიტის ტექნიკური მხარდაჭერა](/website-maintenance)'
      ]}
    ]],
    ['როგორ ვმუშაობთ', [
      'ყოველი პროექტი წერილობითი ამოცანით იწყება: რა უნდა გააკეთოს მომხმარებელმა, რომელი ფუნქციები შედის პირველ ვერსიაში და რა რჩება მომავლისთვის. ამის შემდეგ თანხმდება დიზაინი, იწყობა და მოწმდება ფუნქციები და მზადდება გაშვება. ეტაპებს შორის თქვენ ხედავთ შუალედურ შედეგს და იღებთ გადაწყვეტილებას — არა ბოლოს, როცა ცვლილება ძვირია.',
      'ფასი და ვადა შეთავაზებაში ფიქსირდება. ახალი მოთხოვნები ცალკე ფასდება, რომ თავიდანვე შეთანხმებული ბიუჯეტი მოულოდნელად არ შეიცვალოს.'
    ]],
    ['ტექნოლოგიური მიმართულებები', [
      'ტექნოლოგიას ამოცანის მიხედვით ვირჩევთ. კონტენტის რეგულარულად განახლებადი საიტებისთვის — WordPress; სწრაფი ინტერფეისებისა და ბიზნესსისტემებისთვის — JavaScript/React; მობილური აპლიკაციებისთვის — React Native, რომლითაც Android და iOS ერთი კოდის ბაზიდან იწყობა; დიზაინისთვის — Figma. მარტივი საიტები სუფთა HTML/CSS-ითაც შეიძლება, რაც სისწრაფესა და უსაფრთხოებაზე დადებითად მოქმედებს.'
    ]],
    ['ხარისხის პრინციპები', [
      {list: [
        'მობილური ხედი მეორეხარისხოვანი არ არის — უმეტესი ვიზიტორი ტელეფონიდან მოდის',
        'საძიებო სისტემისთვის წაკითხვადი HTML, სწორი სათაურები და სწრაფი ჩატვირთვა თითოეულ პროექტში',
        'წვდომები, დომენი და ანგარიშები დამკვეთის სახელზეა — თქვენ არაფერზე ხართ დამოკიდებული',
        'არ ვპირდებით Google-ში პირველ ადგილს და არ ვიყენებთ მეთოდებს, რომლებიც საიტს რისკის ქვეშ აყენებს',
        'ფორმები, ბმულები და მოქმედებები გაშვებამდე რეალურ მოწყობილობებზე მოწმდება'
      ]}
    ]],
    ['მხარდაჭერა გაშვების შემდეგ', [
      'გაშვება პროექტის დასასრული არ არის. სურვილის შემთხვევაში ვათანხმებთ [ტექნიკური მხარდაჭერის](/website-maintenance) ფორმატს: განახლებები, სარეზერვო ასლები, ფორმების შემოწმება და მცირე ცვლილებები. თუ საიტს თავად მართავთ, გაშვებისას ვაჩვენებთ, როგორ შეცვალოთ ტექსტები და ფოტოები.'
    ]],
    ['კონტაქტი', [
      'მოგვწერეთ პროექტის მოკლე აღწერა [საკონტაქტო გვერდზე](/contact), დაგვირეკეთ ან მოგვწერეთ WhatsApp-ზე. საორიენტაციო ფასები წინასწარ შეგიძლიათ ნახოთ [ფასების გვერდზე](/prices).'
    ]]
  ],

  // FAQ page
  faqPageH1: 'ხშირი კითხვები საიტისა და აპლიკაციის შეკვეთაზე',
  faqPageIntro: 'ყველაზე ხშირი კითხვები, რომლებსაც პროექტის დაწყებამდე გვისვამენ — ფასებზე, ვადებზე, დომენსა და ჰოსტინგზე, SEO-სა და მხარდაჭერაზე. თუ თქვენი კითხვა აქ არ არის, უბრალოდ მოგვწერეთ.',
  faqCatalog: [
    ['ვებსაიტები', [
      ['რით დავიწყო საიტის შეკვეთა?', 'მოგვწერეთ თქვენი საქმიანობა, მიზანი და მთავარი მომსახურებები. მიუთითეთ, რა უნდა გააკეთოს მომხმარებელმა საიტზე: დაგირეკოთ, შეავსოს ფორმა თუ შეიძინოს პროდუქტი. ლოგო და ტექსტები მოგვიანებითაც შეიძლება მოგვაწოდოთ.'],
      ['შეიძლება არსებული საიტის განახლება?', 'დიახ. ჯერ ვამოწმებთ არსებულ გვერდებს, ბმულებსა და ფუნქციებს. მისამართების შეცვლის შემთხვევაში ვგეგმავთ გადამისამართებებს, რომ Google-ში დაგროვილი პოზიციები არ დაიკარგოს.'],
      ['საიტი ტელეფონზეც იმუშავებს?', 'დიახ. დიზაინი პირველ რიგში მცირე ეკრანებზე იგეგმება: შეხებით მართვა, ადვილად შესავსები ფორმები და ერთი შეხებით დარეკვა.'],
      ['შევძლებ ტექსტების დამოუკიდებლად შეცვლას?', 'თუ პროექტში კონტენტის მართვის სისტემა შედის, ტექსტებსა და ფოტოებს თავად შეცვლით. ეს მოთხოვნა წინასწარ უნდა შევათანხმოთ, რადგან სისტემის არჩევანზე მოქმედებს.'],
      ['შეიძლება საიტი რამდენიმე ენაზე იყოს?', 'დიახ. ენობრივი ვერსიები იგეგმება ცალკე მისამართებითა და სრული თარგმანით. ენების რაოდენობა ფასსა და ვადაზე მოქმედებს.'],
      ['Facebook გვერდი მაქვს — საიტი მართლა მჭირდება?', 'თუ კლიენტები თქვენ Google-შიც გეძებენ, სოცქსელი საკმარისი არ არის. საიტი ერთ ადგილას აერთიანებს მომსახურებას, ფასებსა და კონტაქტს და თქვენი კონტროლის ქვეშაა. დეტალურად — სტატიაში [Facebook გვერდი თუ ვებსაიტი](/blog/facebook-gverdi-tu-saiti).']
    ]],
    ['აპლიკაციები', [
      ['Android და iOS ერთად უნდა შევქმნათ?', 'ეს აუდიტორიასა და ბიუჯეტზეა დამოკიდებული. React Native-ით ორივე პლატფორმა ერთი კოდის ბაზიდან იწყობა, ამიტომ ერთად უფრო იაფი ჯდება, ვიდრე ორი ცალკე პროექტი.'],
      ['რას ნიშნავს MVP?', 'პირველი ვერსია მხოლოდ იმ ფუნქციებით, რომლებიც მთავარი იდეის შესამოწმებლადაა საჭირო. ის ამცირებს საწყის ბიუჯეტს და შემდგომ გადაწყვეტილებებს რეალურ გამოხმაურებაზე აფუძნებს.'],
      ['App Store-სა და Google Play-ში გამოქვეყნება გარანტირებულია?', 'არა. მაღაზიები აპლიკაციას დამოუკიდებლად ამოწმებენ. ჩვენ წინასწარ ვამზადებთ საჭირო მასალასა და მოთხოვნებთან შესაბამისობას, რაც უარყოფის რისკს ამცირებს.'],
      ['ვინ უნდა ფლობდეს დეველოპერის ანგარიშებს?', 'დამკვეთი. Apple-ისა და Google-ის ანგარიშები ბიზნესის სახელზე იხსნება; სამუშაოსთვის წვდომა შესაბამისი როლით გაიცემა.']
    ]],
    ['ფასები', [
      ['რა ღირს საიტის ან აპლიკაციის შექმნა?', 'საწყისი საიტი 250 ₾-დან, ბიზნეს საიტი 600 ₾-დან, აპლიკაცია 1 100 ₾-დან. ზუსტი ფასი ფუნქციების, დიზაინის, ინტეგრაციებისა და კონტენტის მიხედვით განისაზღვრება — იხილეთ [ფასების გვერდი](/prices).'],
      ['ფასი ერთჯერადია თუ ყოველთვიური?', 'დამზადება ერთჯერადი ღირებულებაა. დომენი და ჰოსტინგი წლიური ხარჯია, მხარდაჭერა კი ცალკე თანხმდება — მხოლოდ თუ გჭირდებათ.'],
      ['რა ზრდის ფასს ყველაზე მეტად?', 'ენების რაოდენობა, ონლაინ გადახდა, ჯავშნისა და საწყობის ინტეგრაციები, ინდივიდუალური ილუსტრაციები და ძველი საიტიდან კონტენტის გადატანა.'],
      ['არსებობს ფარული ხარჯები?', 'შეთავაზებაში ცალკე სტრიქონად იწერება ყველაფერი, რაც ჩვენი სამუშაოს გარეთაა: დომენი, ჰოსტინგი, ფასიანი ლიცენზიები, გადახდის პროვაიდერის საკომისიო, დეველოპერის ანგარიშები.']
    ]],
    ['ვადები', [
      ['რამდენ ხანში იქნება პროექტი მზად?', 'ჯერ ვადგენთ სამუშაოს მოცულობასა და საჭირო მასალებს, შემდეგ ვათანხმებთ ეტაპებსა და ვადას. ორიენტირები ტიპების მიხედვით იხილეთ სტატიაში [რამდენ ხანში მზადდება საიტი](/blog/ramden-khanshi-mzaddeba-saiti).'],
      ['რა აჭიანურებს პროექტს ყველაზე ხშირად?', 'ტექსტებისა და ფოტოების დაგვიანება, დიზაინის შეთანხმების გახანგრძლივება და მესამე მხარის მოლოდინი — ბანკის დამტკიცება, დომენის გადაცემა, App Store-ის განხილვა.'],
      ['შემიძლია ეტაპობრივად გავუშვა?', 'დიახ. ხშირად უკეთესია ჯერ ძირითადი გვერდები გამოქვეყნდეს, ხოლო დამატებითი განყოფილებები და ენები მოგვიანებით დაემატოს.']
    ]],
    ['დომენი და ჰოსტინგი', [
      ['დომენი ვის სახელზე უნდა დარეგისტრირდეს?', 'დამკვეთის სახელზე, მისივე კონტროლირებადი ანგარიშით. სამუშაოსთვის საჭირო წვდომები ცალკე როლებით გაიცემა. ეს თქვენს დამოუკიდებლობას იცავს.'],
      ['რომელი ჰოსტინგი ჯობია?', 'დამოკიდებულია ტექნოლოგიაზე: სტატიკური და React საიტებისთვის — თანამედროვე CDN პლატფორმები, WordPress-ისთვის — PHP ჰოსტინგი. რეკომენდაციას პროექტის მიხედვით ვაძლევთ. დეტალურად — [დომენი და ჰოსტინგი საქართველოში](/blog/domeni-da-hostingi-saqartveloshi).'],
      ['SSL სერტიფიკატი შედის?', 'HTTPS ყველა პროექტში აუცილებელია. უმეტეს თანამედროვე ჰოსტინგზე სერტიფიკატი უფასოა და ავტომატურად ახლდება; გამონაკლისები შეთავაზებაში იწერება.']
    ]],
    ['SEO', [
      ['SEO პროექტშიც შედის?', 'ტექნიკური საფუძველი — სათაურები, აღწერები, სწრაფი ჩატვირთვა, sitemap, სწორი სტრუქტურა — საიტის შექმნის ნაწილია. კონტენტსტრატეგია და მიმდინარე SEO ცალკე მომსახურებაა: [SEO ოპტიმიზაცია](/seo).'],
      ['Google-ში გამოჩენა ავტომატურია?', 'ინდექსაციისთვის ტექნიკურ საფუძველს ვამზადებთ და Search Console-ს ვაერთებთ, თუმცა პოზიციას Google განსაზღვრავს. პირველი ადგილის გარანტია არ არსებობს — ვინც გპირდებათ, ფრთხილად იყავით.'],
      ['რატომ არ ჩანს ჩემი არსებული საიტი Google-ში?', 'ყველაზე ხშირი მიზეზები: დახურული ინდექსაცია, თხელი ან დუბლირებული კონტენტი, ნელი მობილური ვერსია და ავტორიტეტის ნაკლებობა. როგორ გავარკვიოთ — სტატიაში [რატომ არ ჩანს ვებსაიტი Google-ში](/blog/why-not-google).']
    ]],
    ['მხარდაჭერა', [
      ['რა ხდება გაშვების შემდეგ?', 'გაშვებისას ვაჩვენებთ, როგორ იმართება საიტი, და ვათანხმებთ, ვინ პასუხისმგებელია განახლებებზე. სურვილის შემთხვევაში [ტექნიკური მხარდაჭერა](/website-maintenance) ცალკე ფორმატით გრძელდება.'],
      ['სხვა დეველოპერის შექმნილ საიტსაც ემსახურებით?', 'შესაძლებლობა პირველადი შემოწმების შემდეგ განისაზღვრება. საჭიროა კოდის, ჰოსტინგისა და აუცილებელი ლიცენზიების წვდომა.'],
      ['24/7 მხარდაჭერა შედის?', 'არა ავტომატურად. რეაგირების საათები, არხები და ვადები კონკრეტული შეთანხმებით განისაზღვრება.']
    ]]
  ],

  // Blog
  published: 'გამოქვეყნდა', updated: 'განახლდა', sources: 'წყაროები', relatedPages: 'დაკავშირებული გვერდები', minutes: 'წთ წაკითხვა',
  contactCategory: 'დაკავშირება'
},

en: {
  home: 'Home', services: 'Services', prices: 'Pricing', portfolio: 'Portfolio', about: 'About', blog: 'Insights',
  faq: 'FAQ', contact: 'Contact', privacy: 'Privacy policy', terms: 'Terms of use',
  skip: 'Skip to content', menu: 'Menu', navigation: 'Main navigation', languages: 'Choose language',
  quote: 'Discuss a project', projectPrice: 'Pricing', consult: 'Free consultation', order: 'Request a quote',
  more: 'Explore service', all: 'All services', read: 'Read article', call: 'Call us', email: 'Email us', whatsapp: 'Message on WhatsApp',

  tagline: 'Digital studio · Tbilisi, Georgia',
  hero: ['Website and app development', 'for businesses', 'in Georgia.'],
  heroIntro: 'webandapp is a Tbilisi-based digital studio. We build websites, online stores and mobile apps for businesses across Georgia, with scope, price and timeline agreed in writing before work starts — so you know exactly what you get.',
  heroPrimary: 'Tell us about your project', heroSecondary: 'Explore services',
  micro: ['Mobile-ready', 'SEO foundations', 'Written agreement'],
  picker: 'Where shall we start?', pickerLabels: ['Website', 'Store', 'App'],
  pickerDescriptions: ['Your services, clearly presented in one place.', 'A simple journey from product to order.', 'Your product in your customer’s pocket.'],
  pickerPrices: ['From 250 GEL', 'From 600 GEL', 'From 1,100 GEL'], pickerFoot: 'A short description is enough to begin', techLabel: 'Technology follows the task',

  serviceTitle: 'What does your business need?',
  serviceText: 'Choose a direction. We will define the features, schedule and scope together.',
  serviceCta: 'Discuss your requirements',
  benefitTitle: 'Good collaboration is in the details.',
  benefits: [
    ['Clear scope', 'Deliverables, responsibilities and stages are agreed in writing before work starts.'],
    ['Business-led choices', 'Technology is selected around your task, budget and ongoing management — not the other way round.'],
    ['Meaningful measurement', 'Calls, WhatsApp messages and form enquiries are measured separately so real outcomes are visible.']
  ],
  processTitle: 'Clear steps. An agreed outcome.',
  processText: 'At each stage, you know what is being built and which decisions come next.',
  processCta: 'Start the conversation',
  steps: [
    ['Discover', 'Define the goal, audience and essential functions.'],
    ['Design', 'Agree on structure, visual direction and user journeys.'],
    ['Build', 'Develop and test the agreed functionality.'],
    ['Launch', 'Prepare publication, access and ongoing maintenance.']
  ],
  deliverablesKicker: 'What you receive', deliverablesTitle: 'At the end of the project you hold',
  deliverables: [
    ['Domain and accounts in your name', 'The client owns the domain, hosting and platform accounts. Working access is granted through separate roles.'],
    ['An agreed feature list', 'What is included and what is not — in writing, before work starts. Changes are agreed separately.'],
    ['A published, tested website', 'Forms, links, the mobile view and the technical basis for search engines are checked before launch.'],
    ['A maintenance plan', 'Who updates the site after launch, and how, is decided in advance.']
  ],
  portfolioTitle: 'Projects and their stories', portfolioEmpty: 'Portfolio in preparation',
  portfolioText: 'Project case studies will be added once real materials and client permission to publish are available. Until then, examples can be shown in a call or on request.',
  portfolioCta: 'Let’s discuss your project',
  priceTitle: 'Pricing starts with your task.',
  priceText: 'Choose a project format. A final quote follows agreement on functionality, design and scope.',
  priceValue: 'Individual estimate',
  priceNote: 'The listed prices are starting points. The final quote depends on the agreed functionality, design and scope.',
  allPrices: 'Full pricing and what is included',
  plans: [
    ['Starter website', 'One offer or a small business introduction.', ['Focused landing page', 'Responsive design', 'Contact actions']],
    ['Business website', 'Services, catalogue and content management.', ['Multi-page structure', 'CMS selection', 'Languages and integrations']],
    ['App or business system', 'A product built around your workflow.', ['Feature planning', 'User roles', 'Development stages']]
  ],
  packagePrices: ['From GEL 250', 'From GEL 600', 'From GEL 1,100'],
  faqTitle: 'Questions before we begin?', faqIntro: 'Answers to the practical questions that help you plan a project.', allFaq: 'All questions and answers',
  blogTitle: 'Before your project starts', blogIntro: 'Practical guides on prices, timelines and sound decisions.', allArticles: 'All articles',
  finalKicker: 'The next step', finalTitle: 'Have a project idea?',
  finalText: 'Tell us what you are planning and we will discuss the necessary features and a practical way forward.',
  finalCta: 'Tell us about your project', finalCall: 'Call us',
  contactTitle: 'Tell us about your idea.',
  contactText: 'Describe your business and what you would like to build. We can clarify the details together.',
  coverage: 'Working with businesses throughout Georgia — Tbilisi, Batumi, Kutaisi and elsewhere, remotely.',

  name: 'Name', phone: 'Phone', mail: 'Email', service: 'Service', choose: 'Choose a service',
  message: 'Brief project description', budget: 'Preferred budget', deadline: 'Preferred timeframe', undecided: 'Not decided yet',
  budgets: ['Under GEL 2,000', 'GEL 2,000–5,000', 'GEL 5,000–10,000', 'Over GEL 10,000'], deadlines: ['Within 1 month', 'In 1–3 months', 'After 3 months'],
  messagePlaceholder: 'For example: a company website with service pages and an enquiry form.',
  consent: 'I agree to the processing of my details to respond to this enquiry',
  submit: 'Send enquiry', draft: 'Prepare email',
  draftNote: 'The button opens your email app with a prepared message. You confirm sending it yourself.',
  serverNote: 'This form requests a quote. It does not confirm an order or payment.',
  draftReady: 'The email is ready. If your email app did not open automatically, use the link below.',
  openDraft: 'Open email draft', sending: 'Sending…',
  sent: 'The mail service accepted your enquiry for sending. Thank you. We will use the contact details you provided.',
  error: 'Delivery could not be confirmed. Your details are preserved. Please try again or send an email.',
  invalid: 'Please complete the required fields correctly.',
  formHelp: 'Required fields are marked *. You can attach files to an email sent from your mail app.',

  problem: 'The problem it solves', audience: 'Who it is for', features: 'What the service includes',
  process: 'How we work', technologies: 'Choosing the technology',
  techNote: 'The final technology is selected after reviewing your requirements. These are possible directions.',
  timing: 'What affects the timeline', cost: 'What affects the price', priceFrom: 'Starting price', support: 'Support after launch',
  why: 'Why webandapp',
  whyText: 'We document the task, agree on stages and define the deliverables before development. You can see what is included and what needs a separate decision.',
  related: 'Related services', reading: 'Useful reading before you start',
  sideTitle: 'Ready for the first step?', sideText: 'Send your goal and the main features. This helps us prepare a meaningful estimate.',

  footerText: 'Websites, apps and business systems. From understanding the idea to building it.',
  rights: 'All rights reserved.',
  cookieTitle: 'Your analytics preference',
  cookieText: 'Optional analytics help us understand site use. The site works if you decline.',
  accept: 'Allow analytics', decline: 'Essential only', cookieSettings: 'Cookie preferences',
  notFound: 'This page could not be found',
  notFoundText: 'The address may have changed or been entered incorrectly. Return home or contact us.',
  back: 'Back to home',

  pageTitle: {
    home: 'Website & app development in Georgia | webandapp',
    prices: 'Website development cost and app pricing {year} | webandapp',
    about: 'About webandapp — a web studio in Tbilisi, Georgia',
    faq: 'FAQ — ordering a website or app | webandapp',
    blog: 'Insights — websites, apps, prices and timelines | webandapp',
    contact: 'Contact — write or call us | webandapp',
    portfolio: 'Portfolio | webandapp'
  },
  pageDescription: {
    home: 'Website, online store and mobile app development for businesses in Georgia: written scope, mobile-first design and SEO foundations. Send a short brief for an estimate.',
    prices: 'How much a website or app costs: starting prices, what the price includes, what increases it and what we need to prepare an exact quote.',
    about: 'webandapp is a web studio in Tbilisi building websites, online stores and mobile apps for businesses across Georgia — how we work and what we stand behind.',
    faq: 'Answers about ordering a website or app: prices, timelines, domains and hosting, SEO, support and how the collaboration works.',
    blog: 'Practical articles for businesses: what a website or app costs, how long it takes, WordPress or custom code, domains and hosting in Georgia.',
    contact: 'Tell us about your project or call +995 599 30 84 14. We work with businesses across Georgia — Tbilisi, Batumi, Kutaisi and remotely.',
    portfolio: 'webandapp project case studies will be published with client permission. Examples are available on request.'
  },

  homeFaq: [
    ['How much does a website cost?', 'A starter website from GEL 250, a multi-page business website from GEL 600 and a mobile app from GEL 1,100. The exact amount is written into the proposal once features, design and page count are agreed.'],
    ['How long does it take?', 'It depends on the number of pages, how ready the text and photos are, and how quickly design decisions are made. The concrete timeline and stages are fixed in the proposal.'],
    ['What do you need for an estimate?', 'What your business does, what a visitor should do on the site (call, send a form, buy) and which features you need. Logo and copy can follow later.'],
    ['Are domain and hosting included?', 'No — they are a separate annual cost, listed on their own line in the proposal. The domain is always registered in your name.']
  ],

  pricesH1: 'Website development cost and app pricing',
  pricesIntro: 'Starting prices by direction are listed below. The final figure depends on the agreed features, design and scope and is fixed in writing in the proposal.',
  priceReferenceTitle: 'Starting prices by direction',
  priceService: 'Service', priceFormat: 'Direction', priceAmount: 'Price',
  priceCatalog: [
    ['Website development', 'Website', 'From GEL 250', 'website-development'],
    ['Online store', 'Store', 'From GEL 600', 'ecommerce-development'],
    ['Mobile app development', 'App', 'From GEL 1,100', 'mobile-app-development'],
    ['Custom software', 'Software', 'Individual', 'custom-software'],
    ['UI/UX design', 'Design', 'Individual', 'ui-ux-design'],
    ['SEO optimisation', 'SEO', 'From GEL 50 — up to GEL 3,500', 'seo']
  ],
  priceSections: [
    ['What a website costs', [
      'A simple single-page website starts at GEL 250 and a multi-page business website at GEL 600. These are starting points: the exact price depends on how many pages and languages you need, whether the site needs a content management system and which services it must connect to.',
      'For a detailed explanation of pricing see [how much a website costs in Georgia](/blog/saitis-damzadebis-fasi), and for the service itself, [website development](/website-development).'
    ]],
    ['What an app costs', [
      'A first mobile release starts at GEL 1,100. The cost grows with a backend, user accounts and roles, payments or integration with existing systems. Android and iOS in one React Native project usually cost less than two separate apps.',
      'See [what determines an app budget](/blog/aplikaciis-damzadebis-fasi) and the [mobile app development](/mobile-app-development) page.'
    ]],
    ['What the price includes', [
      {list: [
        'Planning the page structure and user journey',
        'Design for mobile and desktop in an agreed style',
        'Placing your text and photos (copywriting is scoped separately)',
        'Enquiry form, call and WhatsApp buttons, analytics events',
        'Technical SEO foundations: titles, descriptions, fast loading, sitemap, search-readable HTML',
        'Publishing on your domain and hosting, with checks before launch'
      ]}
    ]],
    ['What increases the cost', [
      {list: [
        'Number of pages and languages — each language needs full translations and separate addresses',
        'A content management system (WordPress or other) and editor roles',
        'Online payments, booking systems, courier or warehouse integrations',
        'Custom illustrations, animations and unique components',
        'Migrating content from an old site and planning redirects',
        'Copywriting, photography and product data preparation'
      ]}
    ]]
  ],
  priceCompareTitle: 'Website, online store or app — which do you need?',
  priceCompareText: 'Each format solves a different task and starts from a different budget. The table helps you pick a direction before we talk.',
  priceCompare: {
    head: ['', 'Website', 'Online store', 'Mobile app'],
    rows: [
      ['Purpose', 'Present services and receive enquiries', 'Sell products with checkout and payment', 'Repeat actions: bookings, orders, personal accounts'],
      ['Starting price', 'From GEL 250 (single page), from GEL 600 (business site)', 'From GEL 600', 'From GEL 1,100'],
      ['Biggest cost drivers', 'Pages, languages, CMS', 'Catalogue complexity, payments, delivery', 'Backend, roles, integrations'],
      ['Running costs', 'Domain and hosting', 'Domain, hosting, payment-provider fees', 'Server, developer accounts (Apple/Google), updates'],
      ['Details', '[Website development](/website-development)', '[Online store development](/ecommerce-development)', '[Mobile app development](/mobile-app-development)']
    ]
  },
  priceQuoteTitle: 'What we need for an exact quote',
  priceQuoteText: 'The more specific the description, the more accurate the price and timeline. Short answers to these questions are enough:',
  priceQuote: [
    'What the business does and who its customers are',
    'What a visitor should do on the site: call, send a form, book or buy',
    'How many pages or sections you expect, and in which languages',
    'Whether you need to edit content yourself',
    'Which systems must be connected: payments, couriers, CRM, accounting',
    'Whether you have a logo, copy, photos and an existing site'
  ],
  priceFaq: [
    ['What affects the price of a website?', 'Page count, languages, whether you need a content management system, and any payments, bookings or connections to other systems. A bespoke design also changes the scope.'],
    ['Is the price one-off or monthly?', 'Development is a one-off cost. Domain and hosting stay separate as an annual charge, and maintenance is agreed on its own.'],
    ['Does an app cost double for two platforms?', 'No. React Native builds Android and iOS from one code base, so both platforms together cost less than two separate projects.'],
    ['How is an app quoted?', 'From the feature list. We agree what belongs in the first release, price the stages, then add backend, roles and integrations if they are needed.'],
    ['Are domain and hosting included?', 'No. They are a separate annual cost and appear as their own line in the proposal. The domain stays in your name.'],
    ['Can I pay in stages?', 'Payment stages follow the project stages and are fixed in writing in the agreement. The concrete terms are stated in the proposal.'],
    ['What if I need a new feature mid-project?', 'New requests are priced separately and may affect the timeline, which is why the initial feature list should be as precise as possible.']
  ],

  aboutH1: 'webandapp — a website and app studio in Tbilisi',
  aboutIntro: 'We build websites, online stores, mobile apps and business systems for companies across Georgia. We work remotely, so the city does not matter — the task does.',
  aboutSections: [
    ['Who webandapp is', [
      'webandapp is a Tbilisi-based digital studio creating websites, online stores, mobile apps and custom software for businesses. The site and our communication are in three languages — Georgian, English and Russian — so we can speak to your customers in their language too.',
      'The goal is never just “a website”. It is for customers to find, understand and contact your business easily — by phone, form or order.'
    ]],
    ['What we do', [
      {list: [
        '[Website development](/website-development) — service, company and brand websites',
        '[Online store development](/ecommerce-development) — catalogue, cart, payment and delivery',
        '[Mobile app development](/mobile-app-development) — iOS and Android from one code base',
        '[Custom software](/custom-software) — systems around your workflow',
        '[UI/UX design](/ui-ux-design), [SEO](/seo) and [website maintenance](/website-maintenance)'
      ]}
    ]],
    ['How we work', [
      'Every project starts with a written task: what the visitor should do, which features are in the first release and what is left for later. Then the design is agreed, the functionality is built and tested, and launch is prepared. Between stages you see intermediate results and make decisions — not at the end, when changes are expensive.',
      'Price and timeline are fixed in the proposal. New requests are priced separately so the agreed budget does not change unexpectedly.'
    ]],
    ['Technology directions', [
      'We choose technology to fit the task. Regularly updated content sites — WordPress; fast interfaces and business systems — JavaScript/React; mobile apps — React Native, building Android and iOS from one code base; design — Figma. Simple sites can be plain HTML/CSS, which helps speed and security.'
    ]],
    ['Quality principles', [
      {list: [
        'The mobile view is not secondary — most visitors arrive from a phone',
        'Search-readable HTML, correct headings and fast loading in every project',
        'Access, domain and accounts are in the client’s name — you depend on nobody',
        'We do not promise first place in Google and do not use methods that put a site at risk',
        'Forms, links and actions are tested on real devices before launch'
      ]}
    ]],
    ['Support after launch', [
      'Launch is not the end. If you wish, we agree a [maintenance](/website-maintenance) format: updates, backups, form checks and small changes. If you manage the site yourself, we show you how to edit text and photos at handover.'
    ]],
    ['Contact', [
      'Send a short project description on the [contact page](/contact), call us or write on WhatsApp. Indicative prices are on the [pricing page](/prices).'
    ]]
  ],

  faqPageH1: 'Frequently asked questions about ordering a website or app',
  faqPageIntro: 'The questions we are asked most before a project starts — about prices, timelines, domains and hosting, SEO and support. If yours is not here, just ask.',
  faqCatalog: [
    ['Websites', [
      ['How do I start ordering a website?', 'Describe your business, goal and main services, and what a visitor should do on the site: call, send a form or buy. Logo and copy can follow later.'],
      ['Can my existing site be updated?', 'Yes. We first review existing pages, links and features, then plan redirects for any changed addresses so rankings are not lost.'],
      ['Will the site work on phones?', 'Yes. Design starts with small screens: touch controls, easy forms and one-tap calling.'],
      ['Can I edit the text myself?', 'If the project includes a content management system, you edit text and photos yourself. Agree this in advance, as it affects the choice of system.'],
      ['Can the website have several languages?', 'Yes. Each language needs its own addresses and complete translations. The number of languages affects cost and timing.'],
      ['I have a Facebook page — do I really need a website?', 'If customers also search for you on Google, social media alone is not enough. A website brings services, prices and contact together under your control. See [Facebook page or website](/blog/facebook-gverdi-tu-saiti).']
    ]],
    ['Apps', [
      ['Should we build Android and iOS together?', 'It depends on your audience and budget. React Native builds both from one code base, so together they cost less than two separate projects.'],
      ['What is an MVP?', 'A first version with only the functions needed to test the core idea. It lowers the initial budget and bases later decisions on real feedback.'],
      ['Is App Store or Google Play approval guaranteed?', 'No. Each store reviews submissions independently. We prepare the required materials and compliance checks, which lowers the risk of rejection.'],
      ['Who should own the developer accounts?', 'The client. Apple and Google accounts are opened in the business’s name; working access is granted by role.']
    ]],
    ['Pricing', [
      ['How much does a website or app cost?', 'A starter site from GEL 250, a business site from GEL 600, an app from GEL 1,100. The exact price depends on features, design, integrations and content — see the [pricing page](/prices).'],
      ['Is the price one-off or monthly?', 'Development is a one-off cost. Domain and hosting are annual, and maintenance is agreed separately — only if you need it.'],
      ['What raises the price most?', 'The number of languages, online payments, booking and warehouse integrations, custom illustrations and migrating content from an old site.'],
      ['Are there hidden costs?', 'Everything outside our work is listed separately in the proposal: domain, hosting, paid licences, payment-provider fees, developer accounts.']
    ]],
    ['Timelines', [
      ['How long will the project take?', 'We define scope and required materials first, then agree the stages and timeline. Orientation by type: [how long a website takes](/blog/ramden-khanshi-mzaddeba-saiti).'],
      ['What delays projects most often?', 'Late text and photos, drawn-out design approvals and waiting on third parties — bank approval, domain transfer, App Store review.'],
      ['Can we launch in stages?', 'Yes. It is often better to publish the core pages first and add further sections and languages later.']
    ]],
    ['Domain and hosting', [
      ['Who should own the domain?', 'The client, in their own account. Access for development is granted separately. This protects your independence.'],
      ['Which hosting is better?', 'It depends on the technology: modern CDN platforms for static and React sites, PHP hosting for WordPress. We recommend per project. Details: [domains and hosting in Georgia](/blog/domeni-da-hostingi-saqartveloshi).'],
      ['Is an SSL certificate included?', 'HTTPS is mandatory in every project. On most modern hosting the certificate is free and renews automatically; exceptions are stated in the proposal.']
    ]],
    ['SEO', [
      ['Does the project include SEO?', 'Technical foundations — titles, descriptions, fast loading, sitemap, sound structure — are part of building the site. Content strategy and ongoing SEO are a separate service: [SEO optimisation](/seo).'],
      ['Is appearing in Google automatic?', 'We prepare the technical basis for indexing and connect Search Console, but Google decides the position. There is no guarantee of first place — be careful with anyone who promises it.'],
      ['Why is my existing site not visible in Google?', 'The most common reasons: blocked indexing, thin or duplicate content, a slow mobile version and lack of authority. How to find out: [why a website does not appear in Google](/blog/why-not-google).']
    ]],
    ['Support', [
      ['What happens after launch?', 'At handover we show how the site is managed and agree who is responsible for updates. If you wish, [maintenance](/website-maintenance) continues as a separate format.'],
      ['Do you support sites built by other developers?', 'That is decided after an initial review. We need access to the code, hosting and required licences.'],
      ['Is 24/7 support included?', 'Not automatically. Service hours, channels and response times are agreed explicitly.']
    ]]
  ],

  published: 'Published', updated: 'Updated', sources: 'Sources', relatedPages: 'Related pages', minutes: 'min read',
  contactCategory: 'Contact'
},

ru: {
  home: 'Главная', services: 'Услуги', prices: 'Стоимость', portfolio: 'Портфолио', about: 'О нас', blog: 'Блог',
  faq: 'Вопросы', contact: 'Контакты', privacy: 'Конфиденциальность', terms: 'Условия использования',
  skip: 'Перейти к содержанию', menu: 'Меню', navigation: 'Основная навигация', languages: 'Выбор языка',
  quote: 'Обсудить проект', projectPrice: 'Стоимость', consult: 'Бесплатная консультация', order: 'Запросить предложение',
  more: 'Подробнее', all: 'Все услуги', read: 'Читать статью', call: 'Позвонить', email: 'Написать нам', whatsapp: 'Написать в WhatsApp',

  tagline: 'Цифровая студия · Тбилиси, Грузия',
  hero: ['Разработка сайтов и приложений', 'для вашего бизнеса', 'в Грузии.'],
  heroIntro: 'webandapp — цифровая студия в Тбилиси. Создаём сайты, интернет-магазины и мобильные приложения для бизнеса по всей Грузии. Объём работ, цена и сроки согласовываются письменно до начала — вы точно знаете, что получите.',
  heroPrimary: 'Расскажите о проекте', heroSecondary: 'Посмотреть услуги',
  micro: ['Для мобильных устройств', 'Основа для SEO', 'Письменное соглашение'],
  picker: 'С чего начнём?', pickerLabels: ['Сайт', 'Магазин', 'Приложение'],
  pickerDescriptions: ['Ваши услуги — понятно и в одном месте.', 'Простой путь от товара до заказа.', 'Ваш продукт в телефоне клиента.'],
  pickerPrices: ['От 250 ₾', 'От 600 ₾', 'От 1 100 ₾'], pickerFoot: 'Для начала хватит краткого описания', techLabel: 'Технология под задачу',

  serviceTitle: 'Что нужно вашему бизнесу?',
  serviceText: 'Выберите направление. Вместе определим функции, сроки и объём работ.',
  serviceCta: 'Обсудить задачу',
  benefitTitle: 'Сотрудничество начинается с деталей.',
  benefits: [
    ['Понятный объём', 'Результаты, обязанности и этапы согласовываем письменно до начала работ.'],
    ['От задач бизнеса', 'Технологию выбираем с учётом задачи, бюджета и дальнейшего управления — а не наоборот.'],
    ['Полезные измерения', 'Звонки, сообщения в WhatsApp и заявки учитываются отдельно, чтобы был виден реальный результат.']
  ],
  processTitle: 'Понятные этапы. Согласованный результат.',
  processText: 'На каждом этапе вы знаете, что создаётся и какие решения предстоит принять.',
  processCta: 'Начать обсуждение',
  steps: [
    ['Знакомство', 'Определяем цель, аудиторию и основные функции.'],
    ['Дизайн', 'Согласовываем структуру, стиль и путь пользователя.'],
    ['Разработка', 'Создаём и проверяем согласованные функции.'],
    ['Запуск', 'Готовим публикацию, доступы и план поддержки.']
  ],
  deliverablesKicker: 'Что вы получаете', deliverablesTitle: 'В конце проекта у вас на руках',
  deliverables: [
    ['Домен и доступы на ваше имя', 'Домен, хостинг и аккаунты платформ принадлежат заказчику. Рабочий доступ выдаётся отдельными ролями.'],
    ['Согласованный список функций', 'Что входит в проект, а что нет — письменно, до начала. Изменения согласовываются отдельно.'],
    ['Опубликованный и проверенный сайт', 'Формы, ссылки, мобильная версия и техническая основа для поисковых систем проверяются до запуска.'],
    ['План поддержки', 'Кто и как обновляет сайт после запуска — решается заранее.']
  ],
  portfolioTitle: 'Проекты и их истории', portfolioEmpty: 'Портфолио готовится',
  portfolioText: 'Описания проектов появятся после получения материалов и разрешения клиентов на публикацию. Пока примеры можно посмотреть на встрече или по запросу.',
  portfolioCta: 'Обсудим ваш проект',
  priceTitle: 'Стоимость начинается с задачи.',
  priceText: 'Выберите формат проекта. Точная цена определяется после согласования функций, дизайна и объёма работ.',
  priceValue: 'Индивидуальная оценка',
  priceNote: 'Указаны стартовые цены. Итоговая стоимость зависит от согласованных функций, дизайна и объёма работ.',
  allPrices: 'Все цены и что в них входит',
  plans: [
    ['Небольшой сайт', 'Одно предложение или презентация малого бизнеса.', ['Целевая страница', 'Адаптивный дизайн', 'Контактные действия']],
    ['Сайт компании', 'Услуги, каталог и управление контентом.', ['Многостраничная структура', 'Выбор CMS', 'Языки и интеграции']],
    ['Приложение или система', 'Продукт под ваши рабочие процессы.', ['Планирование функций', 'Роли пользователей', 'Этапы развития']]
  ],
  packagePrices: ['От 250 ₾', 'От 600 ₾', 'От 1 100 ₾'],
  faqTitle: 'Остались вопросы?', faqIntro: 'Ответы на практические вопросы перед началом проекта.', allFaq: 'Все вопросы и ответы',
  blogTitle: 'До начала разработки', blogIntro: 'Практические статьи о ценах, сроках и правильных решениях.', allArticles: 'Все статьи',
  finalKicker: 'Следующий шаг', finalTitle: 'Есть идея проекта?',
  finalText: 'Расскажите, что планируете, — вместе обсудим нужные функции и практичный путь реализации.',
  finalCta: 'Расскажите о проекте', finalCall: 'Позвонить',
  contactTitle: 'Расскажите о вашей идее.',
  contactText: 'Опишите ваш бизнес и то, что хотите создать. Остальные детали уточним вместе.',
  coverage: 'Работаем с бизнесом по всей Грузии — Тбилиси, Батуми, Кутаиси и другие города, удалённо.',

  name: 'Имя', phone: 'Телефон', mail: 'Эл. почта', service: 'Услуга', choose: 'Выберите направление',
  message: 'Краткое описание проекта', budget: 'Желаемый бюджет', deadline: 'Желаемый срок', undecided: 'Пока не определились',
  budgets: ['До 2 000 GEL', '2 000–5 000 GEL', '5 000–10 000 GEL', 'Более 10 000 GEL'], deadlines: ['В течение месяца', 'Через 1–3 месяца', 'Позже 3 месяцев'],
  messagePlaceholder: 'Например: сайт компании со страницами услуг и формой заявки.',
  consent: 'Соглашаюсь на обработку моих данных для ответа на запрос',
  submit: 'Отправить запрос', draft: 'Подготовить письмо',
  draftNote: 'Кнопка откроет вашу почту с подготовленным письмом. Отправку вы подтверждаете самостоятельно.',
  serverNote: 'Форма предназначена для запроса предложения. Она не подтверждает заказ или оплату.',
  draftReady: 'Письмо подготовлено. Если почта не открылась автоматически, используйте ссылку ниже.',
  openDraft: 'Открыть письмо', sending: 'Отправляем…',
  sent: 'Почтовый сервис принял запрос для отправки. Спасибо! Ответим по указанным контактам.',
  error: 'Отправку не удалось подтвердить. Данные сохранены в форме. Повторите попытку или отправьте письмо.',
  invalid: 'Пожалуйста, правильно заполните обязательные поля.',
  formHelp: 'Обязательные поля отмечены *. Файлы можно приложить к письму из вашей почты.',

  problem: 'Какую задачу решает', audience: 'Для кого', features: 'Что входит в услугу',
  process: 'Этапы работы', technologies: 'Выбор технологии',
  techNote: 'Окончательный выбор делаем после обсуждения требований. Ниже — возможные направления.',
  timing: 'Что влияет на срок', cost: 'Что влияет на стоимость', priceFrom: 'Стартовая цена', support: 'Поддержка после запуска',
  why: 'Почему webandapp',
  whyText: 'Фиксируем задачу, согласовываем этапы и определяем результат до начала разработки. Вы видите, что входит в работу и что нужно обсудить отдельно.',
  related: 'Связанные услуги', reading: 'Полезное перед началом проекта',
  sideTitle: 'Готовы сделать первый шаг?', sideText: 'Пришлите цель и основные функции. Это поможет подготовить оценку.',

  footerText: 'Сайты, приложения и бизнес-системы. От понимания идеи до технической реализации.',
  rights: 'Все права защищены.',
  cookieTitle: 'Настройки аналитики',
  cookieText: 'Необязательная аналитика помогает понять использование сайта. При отказе сайт продолжит работать.',
  accept: 'Разрешить аналитику', decline: 'Только необходимые', cookieSettings: 'Настройки cookies',
  notFound: 'Страница не найдена',
  notFoundText: 'Возможно, адрес изменился или введён неверно. Вернитесь на главную или свяжитесь с нами.',
  back: 'На главную',

  pageTitle: {
    home: 'Разработка сайтов и приложений в Грузии | webandapp',
    prices: 'Стоимость разработки сайта и приложения {year} | webandapp',
    about: 'О webandapp — веб-студия в Тбилиси',
    faq: 'Вопросы о заказе сайта и приложения | webandapp',
    blog: 'Блог — сайты, приложения, цены и сроки | webandapp',
    contact: 'Контакты — напишите или позвоните | webandapp',
    portfolio: 'Портфолио | webandapp'
  },
  pageDescription: {
    home: 'Разработка сайтов, интернет-магазинов и мобильных приложений для бизнеса в Грузии: письменное соглашение, мобильный дизайн и основа для SEO. Напишите нам.',
    prices: 'Сколько стоит сайт или приложение: стартовые цены, что входит в стоимость, что её увеличивает и какая информация нужна для точного предложения.',
    about: 'webandapp — веб-студия в Тбилиси. Создаём сайты, интернет-магазины и мобильные приложения для бизнеса по всей Грузии. Как мы работаем и за что отвечаем.',
    faq: 'Ответы на вопросы о заказе сайта и приложения: цены, сроки, домен и хостинг, SEO, поддержка и порядок сотрудничества.',
    blog: 'Практические статьи для бизнеса: сколько стоит сайт и приложение, сколько занимает разработка, WordPress или индивидуальный код, домен и хостинг в Грузии.',
    contact: 'Расскажите о проекте или позвоните: +995 599 30 84 14. Работаем с бизнесом по всей Грузии — Тбилиси, Батуми, Кутаиси и удалённо.',
    portfolio: 'Описания проектов webandapp появятся с разрешения клиентов. Примеры доступны по запросу.'
  },

  homeFaq: [
    ['Сколько стоит сайт?', 'Небольшой сайт — от 250 ₾, многостраничный сайт компании — от 600 ₾, мобильное приложение — от 1 100 ₾. Точная сумма указывается в предложении после согласования функций, дизайна и количества страниц.'],
    ['Сколько времени займёт разработка?', 'Зависит от количества страниц, готовности текстов и фотографий и скорости согласования дизайна. Конкретный срок и этапы фиксируются в предложении.'],
    ['Что нужно для оценки?', 'Чем занимается бизнес, что должен сделать посетитель на сайте (позвонить, отправить форму, купить) и какие функции нужны. Логотип и тексты можно прислать позже.'],
    ['Входят ли домен и хостинг в стоимость?', 'Нет — это отдельный годовой расход, он указывается отдельной строкой в предложении. Домен всегда регистрируется на ваше имя.']
  ],

  pricesH1: 'Стоимость разработки сайта и создания приложения',
  pricesIntro: 'Ниже — стартовые цены по направлениям. Итоговая стоимость определяется после согласования функций, дизайна и объёма работ и фиксируется письменно в предложении.',
  priceReferenceTitle: 'Стартовые цены по направлениям',
  priceService: 'Услуга', priceFormat: 'Направление', priceAmount: 'Цена',
  priceCatalog: [
    ['Разработка сайта', 'Сайт', 'От 250 ₾', 'website-development'],
    ['Интернет-магазин', 'Магазин', 'От 600 ₾', 'ecommerce-development'],
    ['Разработка мобильного приложения', 'Приложение', 'От 1 100 ₾', 'mobile-app-development'],
    ['Индивидуальное программирование', 'Система', 'Индивидуально', 'custom-software'],
    ['UI/UX дизайн', 'Дизайн', 'Индивидуально', 'ui-ux-design'],
    ['SEO оптимизация', 'SEO', 'От 50 ₾ — до 3 500 ₾', 'seo']
  ],
  priceSections: [
    ['Сколько стоит разработка сайта', [
      'Простой одностраничный сайт начинается от 250 ₾, многостраничный сайт компании — от 600 ₾. Это стартовые суммы: точная цена зависит от количества страниц и языков, необходимости системы управления и того, с какими сервисами сайт должен быть связан.',
      'Подробное объяснение ценообразования — в статье [сколько стоит разработка сайта в Грузии](/blog/saitis-damzadebis-fasi), описание услуги — на странице [разработка сайтов](/website-development).'
    ]],
    ['Сколько стоит создание приложения', [
      'Первая версия мобильного приложения начинается от 1 100 ₾. Стоимость растёт, если нужны серверная часть, авторизация и роли пользователей, оплата или интеграция с существующими системами. Android и iOS в одном проекте на React Native обычно дешевле двух отдельных приложений.',
      'Что определяет бюджет приложения — в статье [стоимость разработки приложения](/blog/aplikaciis-damzadebis-fasi) и на странице [разработка мобильных приложений](/mobile-app-development).'
    ]],
    ['Что входит в стоимость', [
      {list: [
        'Планирование структуры страниц и пути пользователя',
        'Дизайн для мобильных и настольных устройств в согласованном стиле',
        'Размещение ваших текстов и фотографий (написание текстов оценивается отдельно)',
        'Форма заявки, кнопки звонка и WhatsApp, события аналитики',
        'Техническая основа SEO: заголовки, описания, быстрая загрузка, sitemap, читаемый поисковыми системами HTML',
        'Публикация на вашем домене и хостинге и проверка перед запуском'
      ]}
    ]],
    ['Что увеличивает стоимость', [
      {list: [
        'Количество страниц и языков — каждому языку нужны полный перевод и отдельные адреса',
        'Система управления контентом (WordPress или другая) и роли редакторов',
        'Онлайн-оплата, бронирование, интеграция с курьером или складом',
        'Индивидуальные иллюстрации, анимации и уникальные компоненты',
        'Перенос контента со старого сайта и планирование перенаправлений',
        'Написание текстов, фотосъёмка и подготовка данных о товарах'
      ]}
    ]]
  ],
  priceCompareTitle: 'Сайт, интернет-магазин или приложение — что вам нужно?',
  priceCompareText: 'Каждый формат решает свою задачу и начинается с разного бюджета. Таблица поможет выбрать направление до обсуждения.',
  priceCompare: {
    head: ['', 'Сайт', 'Интернет-магазин', 'Мобильное приложение'],
    rows: [
      ['Для чего', 'Представить услуги и получать заявки', 'Продавать товары с оформлением и оплатой', 'Повторяющиеся действия: бронирование, заказ, личный кабинет'],
      ['Стартовая цена', 'От 250 ₾ (одна страница), от 600 ₾ (сайт компании)', 'От 600 ₾', 'От 1 100 ₾'],
      ['Что влияет на цену сильнее всего', 'Страницы, языки, CMS', 'Сложность каталога, оплата, доставка', 'Серверная часть, роли, интеграции'],
      ['Текущие расходы', 'Домен и хостинг', 'Домен, хостинг, комиссия платёжного провайдера', 'Сервер, аккаунты разработчика (Apple/Google), обновления'],
      ['Подробнее', '[Разработка сайтов](/website-development)', '[Создание интернет-магазина](/ecommerce-development)', '[Разработка мобильных приложений](/mobile-app-development)']
    ]
  },
  priceQuoteTitle: 'Какая информация нужна для точного предложения',
  priceQuoteText: 'Чем конкретнее описание, тем точнее сумма и срок. Достаточно коротких ответов на эти вопросы:',
  priceQuote: [
    'Чем занимается бизнес и кто его клиенты',
    'Что должен сделать посетитель на сайте: позвонить, отправить форму, забронировать или купить',
    'Сколько страниц или разделов вы планируете и на каких языках',
    'Нужно ли вам менять контент самостоятельно',
    'С какими системами нужна связь: оплата, курьер, CRM, бухгалтерия',
    'Есть ли у вас логотип, тексты, фотографии и действующий сайт'
  ],
  priceFaq: [
    ['От чего зависит стоимость сайта?', 'От количества страниц, языков, необходимости системы управления и от того, нужны ли оплата, бронирование или связь с другими системами. Индивидуальный дизайн тоже меняет объём работ.'],
    ['Оплата разовая или ежемесячная?', 'Разработка — разовая стоимость. Домен и хостинг остаются отдельным годовым расходом, поддержка согласуется отдельно.'],
    ['Приложение для двух платформ стоит вдвое дороже?', 'Нет. React Native собирает Android и iOS из одной кодовой базы, поэтому обе платформы вместе обходятся дешевле двух отдельных проектов.'],
    ['Как считается стоимость приложения?', 'По списку функций. Сначала согласуем состав первой версии, оцениваем этапы, затем добавляем серверную часть, роли и интеграции, если они нужны.'],
    ['Входят ли домен и хостинг в стоимость?', 'Нет. Это отдельный годовой расход, он указывается отдельной строкой в предложении. Домен остаётся оформленным на вас.'],
    ['Можно ли платить поэтапно?', 'Этапы оплаты следуют за этапами проекта и фиксируются письменно в соглашении. Конкретные условия указываются в предложении.'],
    ['Что, если в ходе проекта понадобится новая функция?', 'Новый запрос оценивается отдельно и может повлиять на срок. Поэтому исходный список функций стоит согласовать как можно точнее.']
  ],

  aboutH1: 'webandapp — студия сайтов и приложений в Тбилиси',
  aboutIntro: 'Создаём сайты, интернет-магазины, мобильные приложения и бизнес-системы для компаний по всей Грузии. Работаем удалённо, поэтому город не важен — важна задача.',
  aboutSections: [
    ['Кто такие webandapp', [
      'webandapp — цифровая студия в Тбилиси, которая создаёт для бизнеса сайты, интернет-магазины, мобильные приложения и индивидуальное программное обеспечение. Сайт и общение — на трёх языках: грузинском, английском и русском, чтобы говорить с вашими клиентами на их языке.',
      'Задача — не просто «сделать сайт». Цель в том, чтобы клиент легко нашёл, понял ваше предложение и связался с вами — по телефону, через форму или заказ.'
    ]],
    ['Что мы делаем', [
      {list: [
        '[Разработка сайтов](/website-development) — сайты услуг, компаний и брендов',
        '[Создание интернет-магазинов](/ecommerce-development) — каталог, корзина, оплата и доставка',
        '[Разработка мобильных приложений](/mobile-app-development) — iOS и Android из одной кодовой базы',
        '[Индивидуальное программное обеспечение](/custom-software) — системы под рабочие процессы',
        '[UI/UX дизайн](/ui-ux-design), [SEO](/seo) и [техническая поддержка сайтов](/website-maintenance)'
      ]}
    ]],
    ['Как мы работаем', [
      'Каждый проект начинается с письменной задачи: что должен сделать посетитель, какие функции входят в первую версию и что остаётся на потом. Затем согласовывается дизайн, создаются и проверяются функции, готовится запуск. Между этапами вы видите промежуточный результат и принимаете решения — а не в конце, когда изменения дороги.',
      'Цена и срок фиксируются в предложении. Новые запросы оцениваются отдельно, чтобы согласованный бюджет не менялся неожиданно.'
    ]],
    ['Технологические направления', [
      'Технологию выбираем под задачу. Для регулярно обновляемых сайтов — WordPress; для быстрых интерфейсов и бизнес-систем — JavaScript/React; для мобильных приложений — React Native, где Android и iOS собираются из одной кодовой базы; для дизайна — Figma. Простые сайты можно сделать на чистом HTML/CSS, что помогает скорости и безопасности.'
    ]],
    ['Принципы качества', [
      {list: [
        'Мобильная версия не второстепенна — большинство посетителей приходят с телефона',
        'Читаемый поисковыми системами HTML, правильные заголовки и быстрая загрузка в каждом проекте',
        'Доступы, домен и аккаунты — на имя заказчика; вы ни от кого не зависите',
        'Не обещаем первое место в Google и не используем методы, которые ставят сайт под угрозу',
        'Формы, ссылки и действия проверяются на реальных устройствах до запуска'
      ]}
    ]],
    ['Поддержка после запуска', [
      'Запуск — не конец проекта. При желании согласуем формат [технической поддержки](/website-maintenance): обновления, резервные копии, проверка форм и небольшие изменения. Если вы управляете сайтом сами, при передаче покажем, как менять тексты и фотографии.'
    ]],
    ['Контакты', [
      'Пришлите краткое описание проекта на [странице контактов](/contact), позвоните или напишите в WhatsApp. Ориентировочные цены — на [странице стоимости](/prices).'
    ]]
  ],

  faqPageH1: 'Частые вопросы о заказе сайта и приложения',
  faqPageIntro: 'Вопросы, которые нам задают чаще всего перед началом проекта — о ценах, сроках, домене и хостинге, SEO и поддержке. Если вашего вопроса здесь нет, просто напишите нам.',
  faqCatalog: [
    ['Сайты', [
      ['С чего начать заказ сайта?', 'Опишите бизнес, цель и основные услуги, а также что должен сделать посетитель: позвонить, отправить форму или купить. Логотип и тексты можно прислать позже.'],
      ['Можно обновить существующий сайт?', 'Да. Сначала проверяем страницы, ссылки и функции, затем планируем перенаправления для изменённых адресов, чтобы не потерять позиции.'],
      ['Сайт будет работать на телефоне?', 'Да. Дизайн начинается с маленьких экранов: управление касанием, удобные формы и звонок в одно нажатие.'],
      ['Смогу ли я сам менять тексты?', 'Если в проект входит система управления контентом, тексты и фотографии вы меняете сами. Это нужно согласовать заранее, так как влияет на выбор системы.'],
      ['Можно сделать несколько языков?', 'Да. Для каждого языка нужны отдельные адреса и полноценный перевод. Количество языков влияет на цену и сроки.'],
      ['У меня есть страница в Facebook — сайт действительно нужен?', 'Если клиенты ищут вас и в Google, одной соцсети недостаточно. Сайт объединяет услуги, цены и контакты под вашим контролем. Подробнее: [страница в Facebook или сайт](/blog/facebook-gverdi-tu-saiti).']
    ]],
    ['Приложения', [
      ['Делать Android и iOS вместе?', 'Зависит от аудитории и бюджета. React Native собирает обе платформы из одной кодовой базы, поэтому вместе они дешевле двух отдельных проектов.'],
      ['Что такое MVP?', 'Первая версия только с функциями, нужными для проверки основной идеи. Она снижает стартовый бюджет и опирает дальнейшие решения на реальную обратную связь.'],
      ['Публикация в App Store и Google Play гарантирована?', 'Нет. Магазины проверяют приложения самостоятельно. Мы заранее готовим материалы и проверяем соответствие требованиям, что снижает риск отказа.'],
      ['Кому должны принадлежать аккаунты разработчика?', 'Заказчику. Аккаунты Apple и Google открываются на имя бизнеса; рабочий доступ выдаётся по ролям.']
    ]],
    ['Стоимость', [
      ['Сколько стоит сайт или приложение?', 'Небольшой сайт — от 250 ₾, сайт компании — от 600 ₾, приложение — от 1 100 ₾. Точная цена зависит от функций, дизайна, интеграций и контента — см. [страницу стоимости](/prices).'],
      ['Оплата разовая или ежемесячная?', 'Разработка — разовая стоимость. Домен и хостинг — годовой расход, поддержка согласуется отдельно и только если нужна.'],
      ['Что сильнее всего увеличивает цену?', 'Количество языков, онлайн-оплата, интеграции бронирования и склада, индивидуальные иллюстрации и перенос контента со старого сайта.'],
      ['Есть ли скрытые расходы?', 'Всё, что находится за пределами нашей работы, указывается в предложении отдельной строкой: домен, хостинг, платные лицензии, комиссия платёжного провайдера, аккаунты разработчика.']
    ]],
    ['Сроки', [
      ['Сколько времени займёт проект?', 'Сначала определяем объём и необходимые материалы, затем согласовываем этапы и срок. Ориентиры по типам — в статье [сколько времени занимает разработка сайта](/blog/ramden-khanshi-mzaddeba-saiti).'],
      ['Что чаще всего задерживает проект?', 'Задержка текстов и фотографий, затянувшееся согласование дизайна и ожидание третьих сторон — одобрение банка, передача домена, проверка App Store.'],
      ['Можно запускаться поэтапно?', 'Да. Часто лучше сначала опубликовать основные страницы, а дополнительные разделы и языки добавить позже.']
    ]],
    ['Домен и хостинг', [
      ['На кого регистрировать домен?', 'На заказчика, в его собственном аккаунте. Доступ для разработки выдаётся отдельно. Это защищает вашу независимость.'],
      ['Какой хостинг лучше?', 'Зависит от технологии: для статических и React-сайтов — современные CDN-платформы, для WordPress — PHP-хостинг. Рекомендацию даём по проекту. Подробнее: [домен и хостинг в Грузии](/blog/domeni-da-hostingi-saqartveloshi).'],
      ['SSL-сертификат включён?', 'HTTPS обязателен в каждом проекте. На большинстве современных хостингов сертификат бесплатный и продлевается автоматически; исключения указываются в предложении.']
    ]],
    ['SEO', [
      ['Входит ли SEO в проект?', 'Техническая основа — заголовки, описания, быстрая загрузка, sitemap, правильная структура — часть создания сайта. Контент-стратегия и постоянное SEO — отдельная услуга: [SEO оптимизация](/seo).'],
      ['Появление в Google происходит автоматически?', 'Мы готовим техническую основу для индексации и подключаем Search Console, но позицию определяет Google. Гарантии первого места не существует — будьте осторожны с теми, кто её обещает.'],
      ['Почему мой сайт не виден в Google?', 'Самые частые причины: закрытая индексация, тонкий или дублированный контент, медленная мобильная версия и нехватка авторитета. Как выяснить — в статье [почему сайт не виден в Google](/blog/why-not-google).']
    ]],
    ['Поддержка', [
      ['Что происходит после запуска?', 'При передаче показываем, как управлять сайтом, и согласовываем, кто отвечает за обновления. При желании [техническая поддержка](/website-maintenance) продолжается в отдельном формате.'],
      ['Обслуживаете ли сайты, сделанные другими разработчиками?', 'Это решается после первичной проверки. Нужен доступ к коду, хостингу и необходимым лицензиям.'],
      ['Поддержка 24/7 включена?', 'Не автоматически. Часы работы, каналы связи и сроки реакции согласовываются отдельно.']
    ]]
  ],

  published: 'Опубликовано', updated: 'Обновлено', sources: 'Источники', relatedPages: 'Связанные страницы', minutes: 'мин чтения',
  contactCategory: 'Контакты'
}
};

// Legacy helper kept for service pages without their own FAQ (en/ru).
export function commonFaq(lang) {
  const t = ui[lang];
  return [...t.faqCatalog[0][1].slice(0, 3), ...t.faqCatalog[2][1].slice(0, 1), ...t.faqCatalog[5][1].slice(0, 1)];
}
