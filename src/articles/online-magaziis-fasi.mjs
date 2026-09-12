export default {
  slug: 'online-magaziis-fasi', service: 'ecommerce-development',
  related: ['/ecommerce-development', '/prices', '/wordpress-development', '/blog/online-store-checklist'],
  published: '2026-09-12', updated: '2026-09-12',
  ka: {
    category: 'ფასები',
    title: 'რა ღირს ონლაინ მაღაზიის შექმნა საქართველოში',
    description: 'ონლაინ მაღაზიის შექმნის ფასი: რა განსაზღვრავს ღირებულებას, WooCommerce თუ ინდივიდუალური მაღაზია, ქართული ბანკებით გადახდა, მიწოდება, კატალოგი და მიმდინარე ხარჯები.',
    intro: 'ონლაინ მაღაზია ჩვეულებრივ საიტზე მეტი „მოძრავი ნაწილისგან" შედგება: კატალოგი, კალათა, გადახდა, მიწოდება, შეკვეთების მართვა, იურიდიული ტექსტები. ამიტომ მისი ფასიც უფრო ფართო დიაპაზონშია და უფრო მეტადაა დამოკიდებული იმაზე, რა გაქვთ უკვე მზად. ეს სტატია ღირებულებას კომპონენტებად შლის, რომ შეთავაზება რეალურად შეაფასოთ.',
    sections: [
      ['საწყისი ფასი და ბაზრის ორიენტირი', [
        'webandapp-ში ონლაინ მაღაზიის შექმნა 600 ₾-დან იწყება — ეს მარტივი მაღაზიის საწყისი ღირებულებაა: მოწესრიგებული კატალოგი, კალათა, შეკვეთის ფორმა და ერთი გადახდის მეთოდი. შედარებისთვის, 2026 წლის სექტემბერში ქართული სააგენტოების საჯარო შეთავაზებებში ონლაინ მაღაზია ხშირად 2 000–2 500 ლარიდან იწყება, ხოლო რთული, ინტეგრაციებით დატვირთული პროექტები რამდენიმე ათასი ლარი ღირს. სხვაობა ძირითადად კატალოგის მოცულობასა და ინტეგრაციებზეა — არა „მაღაზიის" ცნებაზე.'
      ]],
      ['რა ქმნის ონლაინ მაღაზიის ღირებულებას', [
        {list: [
          '**კატალოგის სირთულე.** 30 პროდუქტი ვარიანტების გარეშე და 3 000 პროდუქტი ზომებით, ფერებითა და ნაშთებით სხვადასხვა სამუშაოა. ფასს განსაზღვრავს არა რაოდენობა, არამედ სტრუქტურა: კატეგორიები, ფილტრები, ვარიანტები, პროდუქტის ტიპები.',
          '**გადახდის მეთოდები.** ქართულ ბანკთან ან გადახდის პროვაიდერთან ინტეგრაცია, განვადება, ნაღდი ანგარიშსწორება მიწოდებისას — თითოეული ცალკე კომპონენტია. ბანკს სავაჭრო ანგარიშის დამტკიცება სჭირდება, რაც დროშიც აისახება.',
          '**მიწოდების წესები.** მარტივი ფიქსირებული ტარიფი, ზონები ქალაქებისა და რეგიონების მიხედვით, წონაზე დამოკიდებული ფასი, თვითგატანა, კურიერის სერვისთან ავტომატური კავშირი — სირთულის ზრდასთან ერთად ფასიც იზრდება.',
          '**პლატფორმა.** WooCommerce (WordPress) მზა ადმინ-პანელითა და მოდულებით უფრო იაფია; ინდივიდუალური მაღაზია არასტანდარტული ლოგიკისთვის — ძვირი.',
          '**მონაცემების იმპორტი.** მზა Excel-ფაილიდან პროდუქტების გადატანა სწრაფია; მოუწესრიგებელი კატალოგის (სხვადასხვა ფორმატი, ფოტოების გარეშე) მოწესრიგება ცალკე დროა.',
          '**ინტეგრაციები.** საწყობის ან სააღრიცხვო პროგრამის სინქრონიზაცია, CRM, ელფოსტის მარკეტინგი, მარკეტპლეისები.',
          '**დიზაინი და ენები.** ინდივიდუალური დიზაინი და რამდენიმე ენა კატალოგის სრულ თარგმანსაც ნიშნავს.'
        ]}
      ]],
      ['გადახდა ქართულ ბანკებთან: რა უნდა იცოდეთ', [
        'ონლაინ გადახდისთვის საჭიროა სავაჭრო (merchant) ანგარიში ბანკში ან გადახდის პროვაიდერთან. ის ბიზნესის სახელზე იხსნება, დამტკიცებას რამდენიმე დღიდან რამდენიმე კვირამდე შეიძლება მოითხოვდეს და ხშირად საიტზე დაბრუნებისა და მიწოდების წესების არსებობას ითხოვს. ტექნიკური ინტეგრაცია პროვაიდერის დოკუმენტაციით კეთდება და მოწმდება წარმატებული, გაუქმებული და წარუმატებელი გადახდები. პროვაიდერი ტრანზაქციებიდან საკომისიოს იკავებს — ეს მიმდინარე ხარჯია, რომელიც შეთავაზებაში არ ჩანს, მაგრამ ფასწარმოქმნაში უნდა გაითვალისწინოთ. სწორედ ამიტომ ბანკთან პროცესი პროექტის პირველივე კვირას უნდა დაიწყოს.'
      ]],
      ['WooCommerce თუ ინდივიდუალური მაღაზია', [
        {table: {head: ['', 'WooCommerce (WordPress)', 'ინდივიდუალური მაღაზია'], rows: [
          ['საწყისი ფასი', 'დაბალი–საშუალო', 'საშუალო–მაღალი'],
          ['მართვა', 'მზა ადმინ-პანელი, თქვენი გუნდი დამოუკიდებლად', 'ისეთი, როგორიც დაგეგმეთ — ზუსტად თქვენი პროცესისთვის'],
          ['გადახდის მოდულები', 'ხშირად მზა ან ადვილად ინტეგრირებადი', 'ყოველი ინტეგრაცია ცალკე იწერება'],
          ['სისწრაფე დიდ კატალოგზე', 'მოითხოვს ოპტიმიზაციას', 'მაღალი'],
          ['მოვლა', 'რეგულარული განახლებები აუცილებელია', 'დეველოპერზე დამოკიდებული'],
          ['შესაფერისია', 'უმეტესი მაღაზიისთვის', 'არასტანდარტული ფასწარმოქმნა, ERP-სინქრონიზაცია, ძალიან დიდი ტრაფიკი']
        ]}},
        'უმეტესი ბიზნესისთვის WooCommerce სწორი და ეკონომიური საწყისი წერტილია. დეტალურად — [WordPress საიტის დამზადება](/wordpress-development) და [ონლაინ მაღაზიის შექმნა](/ecommerce-development).'
      ]],
      ['მიმდინარე ხარჯები, რომლებიც არ უნდა დაგავიწყდეთ', [
        {list: [
          'დომენი და ჰოსტინგი — მაღაზიას ჩვეულებრივ საიტზე მძლავრი ჰოსტინგი სჭირდება',
          'გადახდის პროვაიდერის საკომისიო თითოეული ტრანზაქციიდან',
          'ფასიანი მოდულებისა და თემის ლიცენზიები (WooCommerce-ის შემთხვევაში)',
          'მხარდაჭერა: განახლებები, სარეზერვო ასლები, გადახდის მოდულების თავსებადობის შემოწმება',
          'კონტენტი: ახალი პროდუქტების ფოტოები და აღწერები — თქვენი გუნდის დრო',
          'მარკეტინგი: მაღაზია გაყიდვას თავისთავად არ იწყებს — რეკლამა ან SEO ცალკე ბიუჯეტია'
        ]}
      ]],
      ['როგორ შევამციროთ ფასი ხარისხის დაკარგვის გარეშე', [
        {steps: [
          'მოაწესრიგეთ კატალოგი Excel-ში წინასწარ: სახელი, კატეგორია, ფასი, ვარიანტები, ფოტოს ფაილის სახელი. ეს ყველაზე დიდი დროის დამზოგველია.',
          'დაიწყეთ ერთი გადახდის მეთოდით და ერთი მიწოდების წესით; დანარჩენი გაშვების შემდეგ დაამატეთ.',
          'აირჩიეთ WooCommerce, თუ ლოგიკა სტანდარტულია — და მზა თემის ადაპტაცია ინდივიდუალური დიზაინის ნაცვლად.',
          'გადადეთ ინტეგრაციები (საწყობი, ბუღალტერია) მეორე ეტაპზე, სანამ შეკვეთების მოცულობა მათ არ გაამართლებს.',
          'მოამზადეთ იურიდიული ტექსტები (მიწოდება, დაბრუნება, კონფიდენციალურობა) თქვენი რეალური წესების მიხედვით — ბანკი მათ ითხოვს.'
        ]},
        'რა უნდა დაგეგმოთ ტექნიკური სამუშაოს დაწყებამდე — [ონლაინ მაღაზიის ჩამონათვალი](/blog/online-store-checklist). ზუსტი შეთავაზებისთვის [მოგვწერეთ](/contact) პროდუქტების რაოდენობა, გადახდისა და მიწოდების სასურველი მეთოდები და აქვს თუ არა კატალოგს ვარიანტები — საწყისი ფასები [ფასების გვერდზეა](/prices).'
      ]]
    ]
  },
  en: {
    category: 'Pricing',
    title: 'How much does an online store cost in Georgia?',
    description: 'Online store development cost: what sets the price, WooCommerce or a custom store, payments with Georgian banks, delivery, catalogue and running costs.',
    intro: 'An online store has more “moving parts” than a regular website: catalogue, cart, payment, delivery, order management, legal texts. Its price therefore spans a wider range and depends more on what you already have ready. This article breaks the cost into components so you can evaluate an offer realistically.',
    sections: [
      ['Starting price and market orientation', [
        'At webandapp online store development starts at GEL 600 — the starting cost of a simple store: an organised catalogue, a cart, an order form and one payment method. For comparison, in September 2026 public offers from Georgian agencies often start at GEL 2,000–2,500 for an online store, and complex, integration-heavy projects cost several thousand lari. The difference lies mainly in catalogue size and integrations — not in the notion of a “store”.'
      ]],
      ['What creates the cost', [
        {list: [
          '**Catalogue complexity.** 30 products without variants and 3,000 products with sizes, colours and stock are different work. Structure matters more than count: categories, filters, variants, product types.',
          '**Payment methods.** Integration with a Georgian bank or payment provider, instalments, cash on delivery — each is a separate component. The bank must approve a merchant account, which also affects timing.',
          '**Delivery rules.** A simple flat rate, zones by city and region, weight-based pricing, pickup, automatic courier integration — cost grows with complexity.',
          '**Platform.** WooCommerce (WordPress) with a ready admin panel and plugins is cheaper; a custom store for non-standard logic costs more.',
          '**Data import.** Moving products from a ready Excel file is fast; cleaning up a messy catalogue (mixed formats, no photos) is separate time.',
          '**Integrations.** Warehouse or accounting synchronisation, CRM, email marketing, marketplaces.',
          '**Design and languages.** Custom design and several languages also mean a fully translated catalogue.'
        ]}
      ]],
      ['Payments with Georgian banks: what to know', [
        'Online payment requires a merchant account with a bank or payment provider. It is opened in the business’s name, approval can take from days to weeks, and providers often require return and delivery policies on the site. Technical integration follows the provider’s documentation and is tested for successful, cancelled and failed payments. The provider keeps a commission on transactions — a running cost that does not appear in the proposal but must be included in your pricing. That is why the bank process should start in the project’s first week.'
      ]],
      ['WooCommerce or a custom store', [
        {table: {head: ['', 'WooCommerce (WordPress)', 'Custom store'], rows: [
          ['Starting price', 'Low–medium', 'Medium–high'],
          ['Management', 'Ready admin panel, your team independently', 'Exactly as planned for your process'],
          ['Payment modules', 'Often ready or easily integrated', 'Every integration written separately'],
          ['Speed on large catalogues', 'Needs optimisation', 'High'],
          ['Maintenance', 'Regular updates required', 'Depends on the developer'],
          ['Best for', 'Most stores', 'Non-standard pricing, ERP sync, very high traffic']
        ]}},
        'For most businesses WooCommerce is the right and economical starting point. Details: [WordPress development](/wordpress-development) and [online store development](/ecommerce-development).'
      ]],
      ['Running costs not to forget', [
        {list: [
          'Domain and hosting — a store needs stronger hosting than a regular site',
          'Payment-provider commission on every transaction',
          'Paid plugin and theme licences (for WooCommerce)',
          'Maintenance: updates, backups, compatibility checks of payment modules',
          'Content: photos and descriptions for new products — your team’s time',
          'Marketing: a store does not sell by itself — ads or SEO are a separate budget'
        ]}
      ]],
      ['How to lower the price without losing quality', [
        {steps: [
          'Organise the catalogue in Excel in advance: name, category, price, variants, photo file name. The biggest time saver.',
          'Start with one payment method and one delivery rule; add the rest after launch.',
          'Choose WooCommerce if the logic is standard — and adapt a ready theme instead of custom design.',
          'Postpone integrations (warehouse, accounting) to a second stage until order volume justifies them.',
          'Prepare legal texts (delivery, returns, privacy) according to your real rules — the bank asks for them.'
        ]},
        'What to plan before technical work starts: [online store checklist](/blog/online-store-checklist). For an exact quote, [tell us](/contact) the product count, preferred payment and delivery methods and whether the catalogue has variants — starting prices are on the [pricing page](/prices).'
      ]]
    ]
  },
  ru: {
    category: 'Цены',
    title: 'Сколько стоит создание интернет-магазина в Грузии',
    description: 'Стоимость интернет-магазина: что определяет цену, WooCommerce или индивидуальный магазин, оплата через грузинские банки, доставка, каталог и текущие расходы.',
    intro: 'В интернет-магазине больше «движущихся частей», чем в обычном сайте: каталог, корзина, оплата, доставка, управление заказами, юридические тексты. Поэтому и цена его в более широком диапазоне и сильнее зависит от того, что у вас уже готово. Эта статья раскладывает стоимость на компоненты, чтобы вы реально оценили предложение.',
    sections: [
      ['Стартовая цена и рыночный ориентир', [
        'В webandapp создание интернет-магазина начинается от 600 ₾ — это стартовая стоимость простого магазина: упорядоченный каталог, корзина, форма заказа и один способ оплаты. Для сравнения, в сентябре 2026 года в публичных предложениях грузинских агентств интернет-магазин часто начинается от 2 000–2 500 лари, а сложные проекты с интеграциями стоят несколько тысяч лари. Разница в основном в объёме каталога и интеграциях — а не в понятии «магазин».'
      ]],
      ['Что формирует стоимость', [
        {list: [
          '**Сложность каталога.** 30 товаров без вариантов и 3 000 товаров с размерами, цветами и остатками — разная работа. Цену определяет не количество, а структура: категории, фильтры, варианты, типы товаров.',
          '**Способы оплаты.** Интеграция с грузинским банком или платёжным провайдером, рассрочка, наличные при доставке — каждый является отдельным компонентом. Банку нужно одобрить торговый аккаунт, что отражается и на сроках.',
          '**Правила доставки.** Простой фиксированный тариф, зоны по городам и регионам, цена по весу, самовывоз, автоматическая связь с курьерской службой — с ростом сложности растёт и цена.',
          '**Платформа.** WooCommerce (WordPress) с готовой админ-панелью и модулями дешевле; индивидуальный магазин для нестандартной логики — дороже.',
          '**Импорт данных.** Перенос товаров из готового файла Excel быстрый; наведение порядка в хаотичном каталоге (разные форматы, без фото) — отдельное время.',
          '**Интеграции.** Синхронизация со складом или учётной программой, CRM, email-маркетинг, маркетплейсы.',
          '**Дизайн и языки.** Индивидуальный дизайн и несколько языков означают и полный перевод каталога.'
        ]}
      ]],
      ['Оплата через грузинские банки: что нужно знать', [
        'Для онлайн-оплаты нужен торговый (merchant) аккаунт в банке или у платёжного провайдера. Он открывается на имя бизнеса, одобрение может занять от нескольких дней до нескольких недель, и провайдеры часто требуют наличия на сайте правил возврата и доставки. Техническая интеграция выполняется по документации провайдера и проверяется на успешных, отменённых и неудачных платежах. Провайдер удерживает комиссию с транзакций — это текущий расход, которого нет в предложении, но который нужно учесть в ценообразовании. Поэтому процесс с банком стоит начать в первую неделю проекта.'
      ]],
      ['WooCommerce или индивидуальный магазин', [
        {table: {head: ['', 'WooCommerce (WordPress)', 'Индивидуальный магазин'], rows: [
          ['Стартовая цена', 'Низкая–средняя', 'Средняя–высокая'],
          ['Управление', 'Готовая админ-панель, ваша команда самостоятельно', 'Ровно так, как спланировано под ваш процесс'],
          ['Платёжные модули', 'Часто готовые или легко интегрируемые', 'Каждая интеграция пишется отдельно'],
          ['Скорость на большом каталоге', 'Требует оптимизации', 'Высокая'],
          ['Поддержка', 'Регулярные обновления обязательны', 'Зависит от разработчика'],
          ['Подходит для', 'Большинства магазинов', 'Нестандартное ценообразование, синхронизация с ERP, очень высокий трафик']
        ]}},
        'Для большинства бизнесов WooCommerce — правильная и экономичная отправная точка. Подробнее — [разработка сайтов на WordPress](/wordpress-development) и [создание интернет-магазина](/ecommerce-development).'
      ]],
      ['Текущие расходы, о которых нельзя забывать', [
        {list: [
          'Домен и хостинг — магазину нужен более мощный хостинг, чем обычному сайту',
          'Комиссия платёжного провайдера с каждой транзакции',
          'Лицензии платных модулей и темы (в случае WooCommerce)',
          'Поддержка: обновления, резервные копии, проверка совместимости платёжных модулей',
          'Контент: фотографии и описания новых товаров — время вашей команды',
          'Маркетинг: магазин не начинает продавать сам по себе — реклама или SEO — отдельный бюджет'
        ]}
      ]],
      ['Как снизить цену без потери качества', [
        {steps: [
          'Заранее упорядочьте каталог в Excel: название, категория, цена, варианты, имя файла фото. Это самая большая экономия времени.',
          'Начните с одного способа оплаты и одного правила доставки; остальное добавьте после запуска.',
          'Выберите WooCommerce, если логика стандартная, — и адаптацию готовой темы вместо индивидуального дизайна.',
          'Отложите интеграции (склад, бухгалтерия) на второй этап, пока объём заказов их не оправдает.',
          'Подготовьте юридические тексты (доставка, возврат, конфиденциальность) по вашим реальным правилам — банк их запросит.'
        ]},
        'Что спланировать до начала технической работы — [чек-лист интернет-магазина](/blog/online-store-checklist). Для точного предложения [сообщите](/contact) количество товаров, желаемые способы оплаты и доставки и есть ли в каталоге варианты — стартовые цены на [странице стоимости](/prices).'
      ]]
    ]
  }
};
