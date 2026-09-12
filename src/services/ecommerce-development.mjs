export default {
  slug: 'ecommerce-development', icon: '↗', image: 'ecommerce-development',
  tech: ['WooCommerce', 'Custom storefront', 'Payment APIs'],
  related: ['website-development', 'custom-software', 'seo'],
  articles: ['online-magaziis-fasi', 'online-store-checklist', 'saitis-damzadebis-fasi'],
  priceFrom: 600,
  ka: {
    name: 'ონლაინ მაღაზიის შექმნა',
    title: 'ონლაინ მაღაზიის შექმნა — ინტერნეტ მაღაზიის დამზადება | webandapp',
    h1: 'ონლაინ მაღაზიის შექმნა',
    description: 'ონლაინ მაღაზიის შექმნა და ინტერნეტ მაღაზიის დამზადება საქართველოში: კატალოგი, კალათა, ქართული ბანკებით გადახდა, მიწოდება და შეკვეთების მართვა. 600 ₾-დან.',
    intro: 'ონლაინ მაღაზია გაყიდვის სრული პროცესია: პროდუქტის მოძიებიდან შეკვეთის მიღებამდე და მიწოდებამდე. ვგეგმავთ კატალოგს, შეკვეთის ნაბიჯებს, გადახდასა და ადმინისტრირებას თქვენი პროდუქტებისა და მომსახურების წესების მიხედვით.',
    problem: 'მესენჯერში მიღებული შეკვეთები ფასის, ნაშთისა და მიწოდების განმეორებით დაზუსტებას მოითხოვს, ხოლო სამუშაო საათების გარეთ საერთოდ იკარგება. გამართული ინტერნეტ მაღაზია ამ ინფორმაციას წინასწარ აჩვენებს, გადახდას ავტომატურად იღებს და შეკვეთებს ერთ სისტემაში აგროვებს — თქვენ მხოლოდ შესრულებაზე ზრუნავთ.',
    audience: 'ადგილობრივი მაღაზიები, მწარმოებლები, იმპორტიორები, ბრენდები და დისტრიბუტორები, რომლებსაც საქართველოში ონლაინ გაყიდვების დაწყება ან მესენჯერით მიღებული შეკვეთების მოწესრიგება სურთ.',
    sections: [
      ['რას მოიცავს ინტერნეტ მაღაზიის დამზადება', [
        {list: [
          '**კატალოგი** — კატეგორიები, ფილტრები, პროდუქტის ვარიანტები (ზომა, ფერი), ფასები, ფასდაკლებები და ნაშთები.',
          '**კალათა და შეკვეთის გაფორმება** — სტუმრის სტატუსით ან რეგისტრაციით, მიწოდების მისამართი და მინიმალური ველები.',
          '**გადახდა** — ქართული ბანკის ან გადახდის პროვაიდერის ინტეგრაცია, ასევე ნაღდი ანგარიშსწორება მიწოდებისას ან საბანკო გადარიცხვა.',
          '**მიწოდება** — ზონები, ტარიფები, უფასო მიწოდების ზღვარი, თვითგატანა, კურიერისთვის გადასაცემი მონაცემები.',
          '**შეკვეთების მართვა** — სტატუსები, შეტყობინებები მყიდველსა და ადმინისტრატორს, ინვოისები და ისტორია.',
          '**ადმინისტრირება** — პროდუქტების დამატება, Excel-იდან იმპორტი, ფასების მასობრივი შეცვლა, ანგარიშები.'
        ]}
      ]],
      ['გადახდა ქართულ ბანკებთან და პროვაიდერებთან', [
        'ონლაინ გადახდისთვის საჭიროა სავაჭრო ანგარიშის (merchant) გახსნა ბანკში ან გადახდის პროვაიდერთან — ეს ბიზნესის სახელზე ხდება და დამტკიცებას რამდენიმე დღიდან რამდენიმე კვირამდე შეიძლება მოითხოვდეს. ტექნიკურ ინტეგრაციას პროვაიდერის მოქმედი დოკუმენტაციით ვაკეთებთ და ვამოწმებთ წარმატებულ, გაუქმებულ და წარუმატებელ გადახდებს. განვადებისა და „გადაიხადე ნაწილებად" ტიპის სერვისების დამატება ცალკე ინტეგრაციაა.'
      ]],
      ['პლატფორმის არჩევა: WooCommerce თუ ინდივიდუალური მაღაზია', [
        'უმეტესი მაღაზიისთვის [WordPress + WooCommerce](/wordpress-development) საკმარისი და ეკონომიურია: მზა ადმინ-პანელი, მოდულების დიდი არჩევანი და მარტივი მართვა. ინდივიდუალური მაღაზია მაშინ ამართლებს, როცა კატალოგი ან ფასწარმოქმნა არასტანდარტულია, საჭიროა საწყობთან/ERP-თან ღრმა სინქრონიზაცია ან ძალიან დიდი ტრაფიკია. არჩევანს პროდუქტების რაოდენობის, ინტეგრაციებისა და შემდგომი მოვლის ხარჯის მიხედვით ვაკეთებთ.'
      ]],
      ['SEO ონლაინ მაღაზიისთვის', [
        'მაღაზიის გვერდები Google-ში ჩვეულებრივ საიტზე მეტ ყურადღებას მოითხოვს: კატეგორიებისა და პროდუქტების უნიკალური სათაურები და აღწერები, ფილტრების დუბლიკატი მისამართების კონტროლი, პროდუქტის სტრუქტურირებული მონაცემები (ფასი, ხელმისაწვდომობა) და სწრაფი ჩატვირთვა ბევრი სურათის მიუხედავად. ეს საფუძველი პროექტში შედის; კონკურენტულ კატეგორიებზე ზრდა — [SEO ოპტიმიზაციის](/seo) ცალკე სამუშაოა.'
      ]]
    ],
    features: [
      'კატალოგის სტრუქტურა: კატეგორიები, ფილტრები და პროდუქტის ვარიანტები',
      'კალათა და შეკვეთის გასაგები ნაბიჯები მობილურზეც',
      'გადახდის პროვაიდერთან ინტეგრაცია შეთანხმებული პირობებით',
      'მიწოდების ზონები, ტარიფები და შეკვეთის სტატუსები',
      'პროდუქტების იმპორტი Excel-იდან და ადმინ-პანელი',
      'შეტყობინებები ელფოსტით მყიდველსა და ადმინისტრატორს',
      'პროდუქტების სტრუქტურირებული მონაცემები და SEO საფუძველი',
      'გაშვებამდე სრული ტესტირება: კალათა, გადახდის ყველა შედეგი, სტატუსები'
    ],
    time: 'გრაფიკის ძირითადი ფაქტორებია კატალოგის მოწესრიგება (სახელები, ფოტოები, ფასები, ვარიანტები), ბანკთან სავაჭრო ანგარიშის დამტკიცება და სხვა სისტემებთან კავშირი. მაღაზიის ტექნიკური ნაწილი ხშირად უფრო სწრაფად მზადდება, ვიდრე პროდუქტების მონაცემები — ამიტომ კატალოგის მომზადებას პირველივე დღიდან ვიწყებთ. ორიენტირები — [რამდენ ხანში მზადდება საიტი](/blog/ramden-khanshi-mzaddeba-saiti).',
    cost: 'ონლაინ მაღაზიის შექმნა 600 ₾-დან იწყება. ფასზე გავლენას ახდენს კატალოგის სირთულე და პროდუქტების რაოდენობა, გადახდის მეთოდები, მიწოდების წესები, მონაცემების გადატანა და საწყობის სისტემასთან სინქრონიზაცია. მიმდინარე ხარჯებია დომენი, ჰოსტინგი და გადახდის პროვაიდერის საკომისიო. დეტალურად — [რა ღირს ონლაინ მაღაზიის შექმნა](/blog/online-magaziis-fasi).',
    support: 'გაშვების შემდეგ მაღაზიას განახლებები, სარეზერვო ასლები და გადახდის მოდულების თავსებადობის შემოწმება სჭირდება. ამას სურვილისამებრ [ტექნიკური მხარდაჭერის](/website-maintenance) ფარგლებში ვაკეთებთ; პროდუქტების ყოველდღიურ მართვას თქვენი გუნდი ადმინ-პანელიდან ახორციელებს.',
    faq: [
      ['შესაძლებელია ქართულ ბანკთან გადახდის დაკავშირება?', 'დიახ. ინტეგრაცია იგეგმება არჩეული ბანკის ან პროვაიდერის მოქმედი პირობების მიხედვით. საჭიროა სავაჭრო ანგარიშის დამტკიცება ბიზნესის სახელზე და ტექნიკური წვდომების მიღება.'],
      ['რა ღირს ონლაინ მაღაზიის შექმნა?', '600 ₾-დან. ზუსტი ფასი კატალოგის სირთულეს, გადახდის მეთოდებს, მიწოდების წესებსა და ინტეგრაციებზეა დამოკიდებული — იხილეთ [ფასების გვერდი](/prices).'],
      ['როგორ განისაზღვრება მიწოდების ფასი?', 'ზონის, შეკვეთის თანხის, წონის ან სხვა შეთანხმებული წესის მიხედვით. კურიერის სერვისთან ავტომატური ინტეგრაცია ცალკე ამოცანაა და პროვაიდერის შესაძლებლობებზეა დამოკიდებული.'],
      ['შეიძლება პროდუქციის Excel-იდან გადატანა?', 'დიახ, თუ ფაილს შეთანხმებული სტრუქტურა აქვს. ჯერ ვამოწმებთ კატეგორიებს, ფასებს, ვარიანტებსა და სურათების წყაროებს, შემდეგ ვაკეთებთ საცდელ იმპორტს.'],
      ['დამჭირდება მომხმარებლის რეგისტრაცია?', 'ყოველთვის არა. სტუმრის სტატუსით შეკვეთა ხშირად ზრდის დასრულებული შეკვეთების რაოდენობას. პირადი კაბინეტი ემატება, როცა განმეორებითი შეკვეთები ან შეკვეთის ისტორია მართლა სჭირდება მყიდველს.'],
      ['რას ამოწმებთ მაღაზიის გაშვებამდე?', 'კალათას, ფასებისა და ფასდაკლებების გამოთვლას, მიწოდების ტარიფებს, გადახდის წარმატებულ და წარუმატებელ შემთხვევებს, შეტყობინებებს, შეკვეთის სტატუსებსა და თანხის დაბრუნების პროცესს.'],
      ['რა იურიდიული ტექსტები სჭირდება მაღაზიას?', 'მიწოდების, დაბრუნების, გადახდისა და პერსონალური მონაცემების დამუშავების წესები — ისინი თქვენი ბიზნესის რეალურ პრაქტიკას უნდა აღწერდეს. გადახდის პროვაიდერები ამ გვერდების არსებობას ხშირად მოითხოვენ.']
    ]
  },
  en: {
    name: 'Online store development',
    title: 'Online store development in Georgia — ecommerce websites | webandapp',
    h1: 'Online store development',
    description: 'Online store development in Georgia: catalogue, cart, payment through Georgian banks, delivery rules and order management. From GEL 600.',
    intro: 'An online store is the whole sales process: from finding a product to receiving and delivering the order. We plan the catalogue, checkout, payment and administration around your products and service rules.',
    problem: 'Orders taken through messengers need repeated clarification of price, stock and delivery, and outside working hours they are simply lost. A proper store shows that information up front, takes payment automatically and collects orders in one system — you only handle fulfilment.',
    audience: 'Local retailers, producers, importers, brands and distributors that want to start selling online in Georgia or bring order to sales currently handled by messenger.',
    sections: [
      ['What building an online store includes', [
        {list: [
          '**Catalogue** — categories, filters, product variants (size, colour), prices, discounts and stock.',
          '**Cart and checkout** — guest or registered, delivery address and minimal fields.',
          '**Payment** — integration with a Georgian bank or payment provider, plus cash on delivery or bank transfer.',
          '**Delivery** — zones, rates, free-delivery threshold, pickup, data passed to couriers.',
          '**Order management** — statuses, notifications for buyer and admin, invoices and history.',
          '**Administration** — adding products, Excel import, bulk price changes, reports.'
        ]}
      ]],
      ['Payments with Georgian banks and providers', [
        'Online payment requires a merchant account with a bank or payment provider, opened in the business’s name; approval can take from days to weeks. We integrate against the provider’s current documentation and test successful, cancelled and failed payments. Instalment and “pay in parts” services are separate integrations.'
      ]],
      ['Choosing the platform: WooCommerce or a custom store', [
        'For most stores [WordPress + WooCommerce](/wordpress-development) is sufficient and economical: a ready admin panel, a large choice of plugins and simple management. A custom store makes sense when the catalogue or pricing is non-standard, deep synchronisation with a warehouse/ERP is required or traffic is very high. We decide based on product count, integrations and the cost of ongoing maintenance.'
      ]],
      ['SEO for an online store', [
        'Store pages need more attention in Google than a regular site: unique titles and descriptions for categories and products, control of duplicate filter URLs, product structured data (price, availability) and fast loading despite many images. That foundation is part of the project; growth in competitive categories is separate [SEO work](/seo).'
      ]]
    ],
    features: [
      'Catalogue structure: categories, filters and product variants',
      'Cart and a clear checkout, on mobile too',
      'Payment-provider integration on agreed terms',
      'Delivery zones, rates and order statuses',
      'Product import from Excel and an admin panel',
      'Email notifications for buyer and administrator',
      'Product structured data and SEO foundations',
      'Full pre-launch testing: cart, every payment outcome, statuses'
    ],
    time: 'The main schedule factors are catalogue preparation (names, photos, prices, variants), merchant approval by the bank and connections to other systems. The technical part is often ready before the product data, so we start on the catalogue from day one. Orientation: [how long a website takes](/blog/ramden-khanshi-mzaddeba-saiti).',
    cost: 'Online store development starts at GEL 600. The price depends on catalogue complexity and product count, payment methods, delivery rules, data migration and warehouse synchronisation. Running costs are the domain, hosting and payment-provider fees. Details: [how much an online store costs](/blog/online-magaziis-fasi).',
    support: 'After launch a store needs updates, backups and compatibility checks for payment modules. We can do this under [maintenance](/website-maintenance); day-to-day product management is done by your team from the admin panel.',
    faq: [
      ['Can I connect a Georgian bank?', 'Yes. Integration depends on the selected bank or provider’s current terms, a merchant account approved in the business’s name and technical access.'],
      ['How much does an online store cost?', 'From GEL 600. The exact price depends on catalogue complexity, payment methods, delivery rules and integrations — see the [pricing page](/prices).'],
      ['How is the delivery price defined?', 'By zone, order amount, weight or another agreed rule. Automatic courier integration is a separate task and depends on the provider.'],
      ['Can products be imported from Excel?', 'Yes, if the file has an agreed structure. We check categories, prices, variants and image sources first, then run a trial import.'],
      ['Do customers need to register?', 'Not always. Guest checkout often increases completed orders. A personal account is added when repeat orders or order history are genuinely useful to buyers.'],
      ['What do you test before launch?', 'Cart, price and discount calculation, delivery rates, successful and failed payments, notifications, order statuses and the refund process.']
    ]
  },
  ru: {
    name: 'Создание интернет-магазинов',
    title: 'Создание интернет-магазина в Грузии — разработка магазина | webandapp',
    h1: 'Создание интернет-магазина',
    description: 'Создание интернет-магазина в Грузии: каталог, корзина, оплата через грузинские банки, правила доставки и управление заказами. От 600 ₾.',
    intro: 'Интернет-магазин — это весь процесс продажи: от поиска товара до получения и доставки заказа. Планируем каталог, оформление, оплату и администрирование под ваши товары и правила обслуживания.',
    problem: 'Заказы в мессенджерах требуют повторных уточнений цены, наличия и доставки, а вне рабочих часов просто теряются. Настроенный магазин показывает эту информацию заранее, принимает оплату автоматически и собирает заказы в одной системе — вы занимаетесь только выполнением.',
    audience: 'Местные магазины, производители, импортёры, бренды и дистрибьюторы, которые хотят начать онлайн-продажи в Грузии или навести порядок в заказах из мессенджеров.',
    sections: [
      ['Что включает разработка интернет-магазина', [
        {list: [
          '**Каталог** — категории, фильтры, варианты товара (размер, цвет), цены, скидки и остатки.',
          '**Корзина и оформление** — без регистрации или с ней, адрес доставки и минимум полей.',
          '**Оплата** — интеграция с грузинским банком или платёжным провайдером, а также наличные при доставке или банковский перевод.',
          '**Доставка** — зоны, тарифы, порог бесплатной доставки, самовывоз, данные для курьера.',
          '**Управление заказами** — статусы, уведомления покупателю и администратору, счета и история.',
          '**Администрирование** — добавление товаров, импорт из Excel, массовое изменение цен, отчёты.'
        ]}
      ]],
      ['Оплата через грузинские банки и провайдеров', [
        'Для онлайн-оплаты нужен торговый (merchant) аккаунт в банке или у платёжного провайдера, открытый на имя бизнеса; одобрение может занять от нескольких дней до нескольких недель. Техническую интеграцию выполняем по действующей документации провайдера и проверяем успешные, отменённые и неудачные платежи. Рассрочка и сервисы «оплата частями» — отдельные интеграции.'
      ]],
      ['Выбор платформы: WooCommerce или индивидуальный магазин', [
        'Большинству магазинов достаточно и экономично [WordPress + WooCommerce](/wordpress-development): готовая админ-панель, большой выбор модулей и простое управление. Индивидуальный магазин оправдан, когда каталог или ценообразование нестандартны, нужна глубокая синхронизация со складом/ERP или очень высокий трафик. Решение принимаем по количеству товаров, интеграциям и стоимости дальнейшей поддержки.'
      ]],
      ['SEO для интернет-магазина', [
        'Страницы магазина требуют в Google больше внимания, чем обычный сайт: уникальные заголовки и описания категорий и товаров, контроль дублирующих адресов фильтров, структурированные данные товара (цена, наличие) и быстрая загрузка несмотря на множество изображений. Эта основа входит в проект; рост по конкурентным категориям — отдельная работа по [SEO](/seo).'
      ]]
    ],
    features: [
      'Структура каталога: категории, фильтры и варианты товаров',
      'Корзина и понятное оформление заказа, в том числе на телефоне',
      'Интеграция с платёжным провайдером на согласованных условиях',
      'Зоны доставки, тарифы и статусы заказов',
      'Импорт товаров из Excel и админ-панель',
      'Уведомления по почте покупателю и администратору',
      'Структурированные данные товаров и основа для SEO',
      'Полное тестирование перед запуском: корзина, все исходы оплаты, статусы'
    ],
    time: 'Основные факторы графика — подготовка каталога (названия, фото, цены, варианты), одобрение торгового аккаунта банком и связь с другими системами. Техническая часть часто готова раньше данных о товарах, поэтому подготовку каталога начинаем с первого дня. Ориентиры — [сколько времени занимает разработка сайта](/blog/ramden-khanshi-mzaddeba-saiti).',
    cost: 'Создание интернет-магазина начинается от 600 ₾. На цену влияют сложность каталога и количество товаров, способы оплаты, правила доставки, перенос данных и синхронизация со складом. Текущие расходы — домен, хостинг и комиссия платёжного провайдера. Подробнее — [сколько стоит интернет-магазин](/blog/online-magaziis-fasi).',
    support: 'После запуска магазину нужны обновления, резервные копии и проверка совместимости платёжных модулей. Это можно делать в рамках [технической поддержки](/website-maintenance); ежедневным управлением товарами занимается ваша команда через админ-панель.',
    faq: [
      ['Можно подключить грузинский банк?', 'Да. Интеграция зависит от действующих условий выбранного банка или провайдера, одобренного на имя бизнеса торгового аккаунта и технических доступов.'],
      ['Сколько стоит интернет-магазин?', 'От 600 ₾. Точная цена зависит от сложности каталога, способов оплаты, правил доставки и интеграций — см. [страницу стоимости](/prices).'],
      ['Как определяется стоимость доставки?', 'По зоне, сумме заказа, весу или другому согласованному правилу. Автоматическая интеграция с курьерской службой — отдельная задача, зависящая от провайдера.'],
      ['Можно перенести товары из Excel?', 'Да, если у файла согласованная структура. Сначала проверяем категории, цены, варианты и источники изображений, затем делаем пробный импорт.'],
      ['Нужна ли регистрация покупателей?', 'Не всегда. Заказ без регистрации часто увеличивает число завершённых покупок. Личный кабинет добавляется, когда покупателю действительно нужны повторные заказы или история.'],
      ['Что вы проверяете перед запуском?', 'Корзину, расчёт цен и скидок, тарифы доставки, успешные и неудачные платежи, уведомления, статусы заказов и процесс возврата средств.']
    ]
  }
};
