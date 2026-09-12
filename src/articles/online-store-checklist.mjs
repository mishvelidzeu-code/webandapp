export default {
  slug: 'online-store-checklist', service: 'ecommerce-development',
  related: ['/ecommerce-development', '/blog/online-magaziis-fasi', '/wordpress-development', '/prices'],
  published: '2026-09-05', updated: '2026-09-12',
  sources: [
    ['Google — Ecommerce SEO', 'https://developers.google.com/search/docs/specialty/ecommerce'],
    ['OWASP — Web Security Testing Guide', 'https://owasp.org/www-project-web-security-testing-guide/']
  ],
  ka: {
    category: 'ონლაინ მაღაზია',
    title: 'რა უნდა დაგეგმოთ ონლაინ მაღაზიის შექმნამდე',
    description: 'ონლაინ მაღაზიის ჩამონათვალი: პროდუქტის მონაცემები, შეკვეთის გზა, გადახდა, მიწოდება, იურიდიული ტექსტები და ტესტირება — რაც მაღაზიის ფასსა და ვადას განსაზღვრავს.',
    intro: 'ონლაინ მაღაზიის ტექნიკური ნაწილი ხშირად უფრო სწრაფად მზადდება, ვიდრე ის გადაწყვეტილებები, რომლებიც მას სჭირდება: რა იყიდება, როგორ, რა ფასად მიეწოდება და რა ხდება დაბრუნებისას. ეს ჩამონათვალი ამ გადაწყვეტილებებს ერთად აგროვებს, რომ პროექტი დაწყებისთანავე არ შეჩერდეს.',
    sections: [
      ['მოაწესრიგეთ პროდუქტის მონაცემები', [
        'თითოეულ პროდუქტს სჭირდება სახელი, აღწერა, ფასი, ფოტო, კატეგორია და საჭიროების შემთხვევაში ზომის, ფერის ან სხვა ვარიანტები. ერთ Excel-ფაილში, ერთი სტრუქტურით — ეს იმპორტს რამდენიმე საათად აქცევს, სხვა შემთხვევაში კი კვირებად. წინასწარ გადაწყვიტეთ ნაშთის კონტროლის წყარო: მაღაზია თავად, საწყობის პროგრამა თუ ხელით განახლება.'
      ]],
      ['აღწერეთ შეკვეთის გზა', [
        'განსაზღვრეთ, იქნება თუ არა სტუმრის სტატუსით შეძენა (ჩვეულებრივ ზრდის დასრულებული შეკვეთების რაოდენობას), რა ინფორმაციას შეიყვანს მომხმარებელი და რა შეტყობინებას მიიღებს წარმატებული ან წარუმატებელი გადახდის შემდეგ. რაც ნაკლებია სავალდებულო ველი, მით მეტია დასრულებული შეკვეთა.'
      ]],
      ['აირჩიეთ გადახდის მეთოდები', [
        'ბანკის ან პროვაიდერის ტექნიკურ ინტეგრაციამდე საჭიროა მათი კომერციული პირობების მიღება და სავაჭრო ანგარიშის დამტკიცება — ეს დღეებიდან კვირებამდე გრძელდება, ამიტომ პროექტის პირველივე კვირას დაიწყეთ. ანგარიშები და წვდომები ბიზნესს უნდა ეკუთვნოდეს. გაითვალისწინეთ საკომისიოც: ის შეთავაზებაში არ ჩანს, მაგრამ ფასწარმოქმნაზე მოქმედებს. ნაღდი ანგარიშსწორება მიწოდებისას ბევრ ქართულ მაღაზიაში კვლავ მოთხოვნადი ვარიანტია.'
      ]],
      ['ჩამოაყალიბეთ მიწოდების წესები', [
        'ჩამოწერეთ მომსახურების ზონები (თბილისი, რეგიონები, საზღვარგარეთ), ტარიფები, უფასო მიწოდების ზღვარი, თვითგატანის შესაძლებლობა და კურიერისთვის გადასაცემი მონაცემები. რაც უფრო მარტივია წესი პირველ ვერსიაში, მით უფრო სწრაფად გაეშვება მაღაზია; რთული სქემები მოგვიანებით ემატება. მონაცემების კურიერისთვის გადაცემა კონფიდენციალურობის ტექსტშიც უნდა აისახოს.'
      ]],
      ['მოამზადეთ წესები', [
        'საიტს სჭირდება რეალური ინფორმაცია გადახდის, მიწოდების, დაბრუნებისა და მონაცემების დამუშავების შესახებ. ტექსტები ბიზნესის ფაქტობრივ წესებს უნდა აღწერდეს — არა შაბლონს, რომელსაც არ ასრულებთ. გადახდის პროვაიდერები ამ გვერდების არსებობას ხშირად მოითხოვენ, მყიდველისთვის კი ისინი ნდობის მთავარი წყაროა.'
      ]],
      ['დაგეგმეთ ტესტირება', [
        'გაშვებამდე შეამოწმეთ ფასები, ფასდაკლება, ნაშთი, კალათა, ყველა გადახდის შედეგი (წარმატებული, გაუქმებული, წარუმატებელი), წერილები მყიდველსა და ადმინისტრატორს, შეკვეთის სტატუსები და თანხის დაბრუნების პროცესი — რეალურ ტელეფონზეც. რა ქმნის მაღაზიის ფასს — [რა ღირს ონლაინ მაღაზიის შექმნა](/blog/online-magaziis-fasi); მომსახურების აღწერა — [ონლაინ მაღაზიის შექმნის](/ecommerce-development) გვერდზე.'
      ]]
    ]
  },
  en: {
    category: 'Ecommerce',
    title: 'What to plan before building an online store',
    description: 'Online store checklist: product data, order journey, payment methods, delivery rules, policies and testing — the decisions that set a store’s price and timeline.',
    intro: 'The technical part of an online store is often ready sooner than the decisions it needs: what is sold, how, at what delivery price and what happens on return. This checklist gathers those decisions so the project does not stall right after it starts.',
    sections: [
      ['Organise product data', [
        'Each product needs a name, description, price, image, category and any variants. In one spreadsheet with one structure — that turns import into hours instead of weeks. Decide in advance which system is the source of stock information: the store itself, a warehouse program or manual updates.'
      ]],
      ['Map the order journey', [
        'Decide whether guest checkout is available (it usually increases completed orders), which details customers enter and what they see after successful and failed payments. The fewer mandatory fields, the more completed orders.'
      ]],
      ['Choose payment methods', [
        'Commercial approval from the bank or provider and a merchant account are needed before technical integration — this takes days to weeks, so start in the project’s first week. The business should control the accounts and access. Account for the commission too: it is not in the proposal but affects your pricing. Cash on delivery remains a popular option in many Georgian stores.'
      ]],
      ['Define delivery rules', [
        'List service zones (Tbilisi, regions, abroad), rates, free-delivery thresholds, pickup and information shared with couriers. The simpler the rule in the first version, the sooner the store launches; complex schemes can be added later. Reflect data sharing with couriers in the privacy policy.'
      ]],
      ['Prepare policies', [
        'Publish accurate payment, delivery, returns and privacy information based on how the business actually operates — not a template you do not follow. Payment providers often require these pages, and for buyers they are the main source of trust.'
      ]],
      ['Plan testing', [
        'Before launch test prices, discounts, stock, cart, every payment outcome (successful, cancelled, failed), notifications to buyer and admin, order statuses and refund handling — on a real phone as well. What creates a store’s cost: [how much an online store costs](/blog/online-magaziis-fasi); the service itself: [online store development](/ecommerce-development).'
      ]]
    ]
  },
  ru: {
    category: 'Интернет-магазин',
    title: 'Что спланировать до создания интернет-магазина',
    description: 'Чек-лист интернет-магазина: данные товаров, оформление заказа, оплата, доставка, правила и тестирование — решения, определяющие цену и срок магазина.',
    intro: 'Техническая часть интернет-магазина часто готова раньше, чем решения, которые ей нужны: что продаётся, как, по какой цене доставляется и что происходит при возврате. Этот список собирает эти решения вместе, чтобы проект не остановился сразу после старта.',
    sections: [
      ['Подготовьте данные товаров', [
        'Каждому товару нужны название, описание, цена, фото, категория и варианты. В одном файле Excel, с одной структурой — это превращает импорт в часы вместо недель. Заранее определите источник информации об остатках: сам магазин, складская программа или ручное обновление.'
      ]],
      ['Опишите оформление заказа', [
        'Решите, доступна ли покупка без регистрации (обычно увеличивает число завершённых заказов), какие данные вводит клиент и что он увидит после успешной или неудачной оплаты. Чем меньше обязательных полей, тем больше завершённых заказов.'
      ]],
      ['Выберите способы оплаты', [
        'До технического подключения нужно получить коммерческое одобрение банка или провайдера и торговый аккаунт — это занимает от дней до недель, поэтому начните в первую неделю проекта. Аккаунты и доступы должны контролироваться бизнесом. Учтите и комиссию: её нет в предложении, но она влияет на ценообразование. Наличные при доставке остаются востребованным вариантом во многих грузинских магазинах.'
      ]],
      ['Определите доставку', [
        'Зафиксируйте зоны (Тбилиси, регионы, за рубеж), тарифы, порог бесплатной доставки, самовывоз и данные для курьера. Чем проще правило в первой версии, тем быстрее запуск; сложные схемы добавляются позже. Передачу данных курьеру нужно отразить в политике конфиденциальности.'
      ]],
      ['Подготовьте правила', [
        'Публикуйте достоверные условия оплаты, доставки, возврата и обработки данных, соответствующие реальной работе бизнеса, — а не шаблон, который вы не соблюдаете. Платёжные провайдеры часто требуют эти страницы, а для покупателя они — главный источник доверия.'
      ]],
      ['Запланируйте тестирование', [
        'До запуска проверьте цены, скидки, остатки, корзину, все исходы оплаты (успешная, отменённая, неудачная), письма покупателю и администратору, статусы заказов и возврат средств — в том числе на реальном телефоне. Что формирует цену магазина — [сколько стоит интернет-магазин](/blog/online-magaziis-fasi); описание услуги — [создание интернет-магазина](/ecommerce-development).'
      ]]
    ]
  }
};
