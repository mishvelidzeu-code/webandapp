export default {
  slug: 'aplikaciis-damzadebis-fasi', service: 'mobile-app-development',
  related: ['/mobile-app-development', '/prices', '/custom-software', '/blog/saitis-damzadebis-fasi'],
  published: '2026-09-12', updated: '2026-09-12',
  sources: [
    ['Apple Developer Program — membership', 'https://developer.apple.com/programs/'],
    ['Google Play Console — registration fee', 'https://support.google.com/googleplay/android-developer/answer/6112435']
  ],
  ka: {
    category: 'ფასები',
    title: 'რა ღირს მობილური აპლიკაციის შექმნა — რაზეა დამოკიდებული ფასი',
    description: 'აპლიკაციის დამზადების ფასი: რა განსაზღვრავს ღირებულებას, MVP თუ სრული ვერსია, iOS და Android ერთად თუ ცალკე, სერვერისა და მაღაზიების ხარჯები, ბიუჯეტი ეტაპობრივად.',
    intro: 'აპლიკაციის ფასზე კითხვა ხშირად ერთი ციფრით მთავრდება, რომელიც ან ძალიან დაბალია (და შემდეგ ორმაგდება), ან ძალიან მაღალია (და პროექტი არ იწყება). ეს სტატია ბიუჯეტს ნაწილებად შლის — რომ იცოდეთ, რაში იხდით, რისი გადადება შეიძლება და სად იმალება ხარჯები, რომლებზეც შეთავაზებაში იშვიათად წერენ.',
    sections: [
      ['საწყისი ფასი და რას ნიშნავს ის', [
        'webandapp-ში მობილური აპლიკაციის შექმნა 1 100 ₾-დან იწყება — ეს მარტივი პირველი ვერსიის (MVP) ღირებულებაა: რამდენიმე ეკრანი, ერთი მთავარი ფუნქცია, საბაზისო დიზაინი, ერთი კოდის ბაზა Android-ისა და iOS-ისთვის. ყველაფერი, რაც ამას ემატება — ავტორიზაცია და როლები, სერვერული ნაწილი, გადახდები, შეტყობინებები, ინტეგრაციები — ფასს ეტაპობრივად ზრდის. სწორედ ამიტომ აპლიკაციის ბიუჯეტი ფუნქციების სიით ითვლება და არა „აპლიკაციის" ერთი ფასით.'
      ]],
      ['რა ქმნის აპლიკაციის ღირებულებას', [
        {list: [
          '**ეკრანების რაოდენობა და სირთულე.** სია, დეტალის გვერდი და ფორმა — ერთი ღირებულებაა; რუკა რეალურ დროში, ჩატი ან კალენდარი დრეგ-ენდ-დროპით — სულ სხვა.',
          '**სერვერული ნაწილი (backend).** თუ აპლიკაცია მომხმარებლებს, შეკვეთებს ან შეტყობინებებს ინახავს, სჭირდება სერვერი, მონაცემთა ბაზა და API. ეს ხშირად ბიუჯეტის ნახევარია და ცალკე ჰოსტინგის ხარჯსაც ქმნის.',
          '**ავტორიზაცია და როლები.** სტუმრის რეჟიმი მარტივია; რეგისტრაცია ტელეფონით/ელფოსტით, სოციალური ლოგინი, ადმინისტრატორის და მომხმარებლის განსხვავებული უფლებები — დამატებითი სამუშაოა.',
          '**გადახდები.** ბანკის ან პროვაიდერის ინტეგრაცია, ხოლო ციფრული პროდუქტებისთვის — App Store-ისა და Google Play-ის შიდა გადახდა მათივე საკომისიოთი.',
          '**მოწყობილობის ფუნქციები.** კამერა, GPS, push-შეტყობინებები, ბიომეტრია, ოფლაინ რეჟიმი — თითოეული პლატფორმის მიხედვით ცალკე გამართვას საჭიროებს.',
          '**ინტეგრაციები.** CRM, ბუღალტერია, საწყობი, არსებული საიტი — მონაცემების გაცვლა ორივე მხარეს სამუშაოს მოითხოვს.',
          '**დიზაინი.** სტანდარტული კომპონენტები თუ ინდივიდუალური ინტერფეისი ანიმაციებით.',
          '**ადმინ-პანელი.** მომხმარებლების, კონტენტისა და შეკვეთების სამართავად ხშირად ცალკე ვებ-პანელია საჭირო, რომელსაც დამკვეთი ავიწყდება.'
        ]}
      ]],
      ['MVP თუ სრული ვერსია', [
        'MVP (minimum viable product) არის ვერსია, რომელიც მხოლოდ მთავარ ამოცანას წყვეტს. მისი უპირატესობა ფასზე მეტად რისკის შემცირებაა: სანამ სრულ პროდუქტში ჩადებთ ბიუჯეტს, რეალურ მომხმარებლებზე ამოწმებთ, სჭირდებათ თუ არა ის საერთოდ და რომელი ფუნქცია მართლა გამოიყენება. პრაქტიკაში მეორე ვერსიის ფუნქციების სია თითქმის ყოველთვის განსხვავდება იმისგან, რაც თავიდან ეგონათ — და MVP ამ განსხვავებას ბიუჯეტის დახარჯვამდე აჩვენებს.',
        'მარტივი წესი: თუ ფუნქციის გარეშე აპლიკაცია მაინც სასარგებლოა, ის MVP-ში არ შედის.'
      ]],
      ['iOS და Android: ერთად თუ ცალკე', [
        'ორი ცალკე ნატიური აპლიკაცია (Swift და Kotlin) ნიშნავს ორ კოდის ბაზას, ორმაგ ტესტირებას და ორმაგ განახლებებს. React Native-ის ან Flutter-ის ტიპის ტექნოლოგიები ორივე პლატფორმას ერთი კოდიდან აწყობს — ჩვეულებრივ ერთ ცალკე ნატიურ აპლიკაციაზე ცოტათი ძვირი, ორზე კი შესამჩნევად იაფი. ნატიური განვითარება მაშინ ამართლებს, როცა აპლიკაცია ერთი პლატფორმის სპეციფიკურ შესაძლებლობებზეა აგებული ან უკიდურესი წარმადობა სჭირდება. თუ ბიუჯეტი შეზღუდულია, ერთი პლატფორმით დაწყებაც ლოგიკურია — ჯერ იმით, სადაც თქვენი აუდიტორიის უმეტესობაა.'
      ]],
      ['ხარჯები, რომლებზეც შეთავაზებაში იშვიათად წერენ', [
        {list: [
          '**დეველოპერის ანგარიშები.** Apple Developer Program წლიური საფასურია (99 აშშ დოლარი წელიწადში ამ სტატიის დაწერისას), Google Play Console — ერთჯერადი რეგისტრაციის საფასური (25 აშშ დოლარი). მოქმედი ტარიფები პლატფორმების საიტებზეა; ორივე ბიზნესის სახელზე იხსნება.',
          '**სერვერი და მონაცემთა ბაზა.** ყოველთვიური ხარჯი, რომელიც მომხმარებლების რაოდენობასთან ერთად იზრდება.',
          '**გარე სერვისები.** SMS-ვერიფიკაცია, რუკები, push-შეტყობინებების სერვისი, ელფოსტის გაგზავნა — მოხმარების მიხედვით.',
          '**მაღაზიების საკომისიო.** ციფრული პროდუქტების შიდა გადახდისას პლატფორმები პროცენტს იკავებენ.',
          '**განახლებები.** iOS და Android ყოველწლიურად იცვლება; აპლიკაციას მინიმუმ წელიწადში ერთხელ ტექნიკური განახლება სჭირდება, რომ მაღაზიიდან არ ამოვარდეს.',
          '**ტესტური მოწყობილობები.** Android-ის მრავალფეროვნების გამო რამდენიმე რეალურ მოწყობილობაზე შემოწმებაა საჭირო.'
        ]}
      ]],
      ['როგორ დაგეგმოთ ბიუჯეტი ეტაპობრივად', [
        {steps: [
          '**ეტაპი 0 — პროტოტიპი (Figma).** ეკრანები და გადასვლები კოდის გარეშე. იაფია, აჩვენებს იდეას და ხშირად ცვლის ფუნქციების სიას პროგრამირებამდე.',
          '**ეტაპი 1 — MVP.** ერთი მთავარი ფუნქცია, საბაზისო სერვერი, ერთი კოდის ბაზა ორივე პლატფორმისთვის, გამოქვეყნება.',
          '**ეტაპი 2 — გამოხმაურების მიხედვით.** ის ფუნქციები, რომლებსაც რეალური მომხმარებლები ითხოვენ — არა ის, რაც თავიდან ეგონათ.',
          '**ეტაპი 3 — მასშტაბი.** ინტეგრაციები, ავტომატიზაცია, ადმინისტრირების გაფართოება, წარმადობა.'
        ]},
        'ასეთი დაყოფა ორ რამეს იძლევა: თითოეული ეტაპის ფასი კონკრეტულია, და ნებისმიერ ეტაპზე შეგიძლიათ შეჩერდეთ, თუ ბაზარი სხვას ამბობს.'
      ]],
      ['შესაძლოა, აპლიკაცია საერთოდ არ გჭირდებათ', [
        'ბევრი ამოცანა, რომლისთვისაც აპლიკაციას ითხოვენ, მობილურზე მორგებული საიტით წყდება — უფრო იაფად და მაღაზიების განხილვის გარეშე. აპლიკაცია ამართლებს, როცა მომხმარებელი მას რეგულარულად ხსნის, სჭირდება შეტყობინებები, ოფლაინ რეჟიმი ან მოწყობილობის ფუნქციები, ან ეს თანამშრომლების სამუშაო ინსტრუმენტია. თუ დარწმუნებული არ ხართ, [აღწერეთ ამოცანა](/contact) — პირველ შეხვედრაზე ხშირად სწორედ ეს ვარკვევთ. მომსახურების სრული აღწერა — [მობილური აპლიკაციის შექმნის](/mobile-app-development) გვერდზე, საწყისი ფასები — [ფასების გვერდზე](/prices).'
      ]]
    ]
  },
  en: {
    category: 'Pricing',
    title: 'How much does a mobile app cost — what determines the price',
    description: 'Mobile app development cost: what drives the price, MVP versus full version, iOS and Android together or apart, server and store costs, and staged budgeting.',
    intro: 'A question about app pricing often ends with one number that is either far too low (and then doubles) or far too high (and the project never starts). This article breaks the budget into parts — so you know what you pay for, what can be postponed and where the costs hide that proposals rarely mention.',
    sections: [
      ['The starting price and what it means', [
        'At webandapp mobile app development starts at GEL 1,100 — the cost of a simple first release (MVP): a few screens, one core function, basic design, one code base for Android and iOS. Everything added on top — login and roles, a backend, payments, notifications, integrations — raises the price in stages. That is why an app budget is calculated from a feature list, not from a single “app” price.'
      ]],
      ['What creates the cost', [
        {list: [
          '**Number and complexity of screens.** A list, a detail page and a form are one cost; a real-time map, chat or drag-and-drop calendar are another.',
          '**Backend.** If the app stores users, orders or messages, it needs a server, database and API — often half the budget, plus ongoing hosting.',
          '**Authentication and roles.** Guest mode is simple; phone/email registration, social login and different admin/user permissions are additional work.',
          '**Payments.** Bank or provider integration, or in-app purchases through the stores with their commission for digital goods.',
          '**Device features.** Camera, GPS, push notifications, biometrics, offline mode — each needs platform-specific configuration.',
          '**Integrations.** CRM, accounting, warehouse, an existing website — data exchange needs work on both sides.',
          '**Design.** Standard components or a custom interface with animations.',
          '**Admin panel.** Managing users, content and orders usually needs a separate web panel that clients forget about.'
        ]}
      ]],
      ['MVP or full version', [
        'An MVP solves only the core task. Its advantage is less about price than risk: before investing in a full product you test with real users whether they need it at all and which functions are actually used. In practice the second version’s feature list almost always differs from the initial assumption — and an MVP reveals that difference before the budget is spent. Simple rule: if the app is still useful without a function, it does not belong in the MVP.'
      ]],
      ['iOS and Android: together or separately', [
        'Two separate native apps (Swift and Kotlin) mean two code bases, double testing and double updates. React Native or Flutter build both platforms from one code base — usually a little more than one native app and noticeably less than two. Native development makes sense when an app relies on one platform’s specific capabilities or needs extreme performance. With a limited budget, starting with one platform — where most of your audience is — is also logical.'
      ]],
      ['Costs proposals rarely mention', [
        {list: [
          '**Developer accounts.** The Apple Developer Program is an annual fee (USD 99 per year at the time of writing); Google Play Console is a one-off registration fee (USD 25). Current rates are on the platforms’ sites; both accounts are opened in the business’s name.',
          '**Server and database.** A monthly cost that grows with the number of users.',
          '**External services.** SMS verification, maps, push notification services, email sending — by usage.',
          '**Store commission.** For in-app purchases of digital goods the platforms keep a percentage.',
          '**Updates.** iOS and Android change every year; an app needs a technical update at least annually to stay in the stores.',
          '**Test devices.** Android’s variety requires checks on several real devices.'
        ]}
      ]],
      ['Planning the budget in stages', [
        {steps: [
          '**Stage 0 — prototype (Figma).** Screens and transitions without code. Cheap, shows the idea and often changes the feature list before development.',
          '**Stage 1 — MVP.** One core function, a basic backend, one code base for both platforms, publication.',
          '**Stage 2 — by feedback.** The functions real users ask for — not the ones assumed at the start.',
          '**Stage 3 — scale.** Integrations, automation, extended administration, performance.'
        ]},
        'This split gives two things: each stage has a concrete price, and you can stop at any stage if the market says otherwise.'
      ]],
      ['You may not need an app at all', [
        'Many tasks people request an app for are solved by a mobile-ready website — cheaper and without store reviews. An app is justified when users open it regularly, need notifications, offline mode or device features, or when it is a tool for staff. If unsure, [describe the task](/contact) — that is often exactly what we work out at the first meeting. Full service description: [mobile app development](/mobile-app-development); starting prices: [pricing page](/prices).'
      ]]
    ]
  },
  ru: {
    category: 'Цены',
    title: 'Сколько стоит создание мобильного приложения — от чего зависит цена',
    description: 'Стоимость разработки приложения: что определяет цену, MVP или полная версия, iOS и Android вместе или отдельно, расходы на сервер и магазины, бюджет поэтапно.',
    intro: 'Вопрос о цене приложения часто заканчивается одной цифрой, которая либо слишком низкая (и потом удваивается), либо слишком высокая (и проект не начинается). Эта статья раскладывает бюджет на части — чтобы вы знали, за что платите, что можно отложить и где скрываются расходы, о которых в предложениях пишут редко.',
    sections: [
      ['Стартовая цена и что она означает', [
        'В webandapp разработка мобильного приложения начинается от 1 100 ₾ — это стоимость простой первой версии (MVP): несколько экранов, одна основная функция, базовый дизайн, одна кодовая база для Android и iOS. Всё, что добавляется сверх этого — авторизация и роли, серверная часть, оплата, уведомления, интеграции — поэтапно увеличивает цену. Поэтому бюджет приложения считается по списку функций, а не по одной цене «за приложение».'
      ]],
      ['Что формирует стоимость', [
        {list: [
          '**Количество и сложность экранов.** Список, страница деталей и форма — одна стоимость; карта в реальном времени, чат или календарь с drag-and-drop — совсем другая.',
          '**Серверная часть (backend).** Если приложение хранит пользователей, заказы или сообщения, нужны сервер, база данных и API — часто половина бюджета плюс постоянный хостинг.',
          '**Авторизация и роли.** Гостевой режим прост; регистрация по телефону/почте, вход через соцсети, разные права администратора и пользователя — дополнительная работа.',
          '**Оплата.** Интеграция с банком или провайдером, а для цифровых товаров — встроенные покупки через магазины с их комиссией.',
          '**Функции устройства.** Камера, GPS, push-уведомления, биометрия, офлайн-режим — каждая требует настройки под платформу.',
          '**Интеграции.** CRM, бухгалтерия, склад, существующий сайт — обмен данными требует работы с обеих сторон.',
          '**Дизайн.** Стандартные компоненты или индивидуальный интерфейс с анимациями.',
          '**Админ-панель.** Для управления пользователями, контентом и заказами обычно нужна отдельная веб-панель, о которой заказчики забывают.'
        ]}
      ]],
      ['MVP или полная версия', [
        'MVP решает только основную задачу. Его преимущество не столько в цене, сколько в снижении риска: прежде чем вложить бюджет в полный продукт, вы проверяете на реальных пользователях, нужен ли он вообще и какие функции действительно используются. На практике список функций второй версии почти всегда отличается от первоначальных предположений — и MVP показывает эту разницу до того, как бюджет потрачен. Простое правило: если без функции приложение всё равно полезно, в MVP она не входит.'
      ]],
      ['iOS и Android: вместе или отдельно', [
        'Два отдельных нативных приложения (Swift и Kotlin) означают две кодовые базы, двойное тестирование и двойные обновления. React Native или Flutter собирают обе платформы из одной кодовой базы — обычно немного дороже одного нативного приложения и заметно дешевле двух. Нативная разработка оправдана, когда приложение опирается на специфические возможности одной платформы или требует предельной производительности. При ограниченном бюджете логично начать с одной платформы — той, где большинство вашей аудитории.'
      ]],
      ['Расходы, о которых редко пишут в предложениях', [
        {list: [
          '**Аккаунты разработчика.** Apple Developer Program — годовая плата (99 долларов США в год на момент написания), Google Play Console — разовая регистрация (25 долларов США). Актуальные тарифы — на сайтах платформ; оба аккаунта открываются на имя бизнеса.',
          '**Сервер и база данных.** Ежемесячный расход, растущий вместе с числом пользователей.',
          '**Внешние сервисы.** SMS-верификация, карты, сервис push-уведомлений, отправка почты — по потреблению.',
          '**Комиссия магазинов.** При встроенных покупках цифровых товаров платформы удерживают процент.',
          '**Обновления.** iOS и Android меняются ежегодно; приложению нужно техническое обновление минимум раз в год, чтобы не выпасть из магазина.',
          '**Тестовые устройства.** Из-за разнообразия Android нужна проверка на нескольких реальных устройствах.'
        ]}
      ]],
      ['Как планировать бюджет поэтапно', [
        {steps: [
          '**Этап 0 — прототип (Figma).** Экраны и переходы без кода. Дёшево, показывает идею и часто меняет список функций до программирования.',
          '**Этап 1 — MVP.** Одна основная функция, базовый сервер, одна кодовая база для обеих платформ, публикация.',
          '**Этап 2 — по обратной связи.** Функции, которые просят реальные пользователи, — а не те, что предполагались вначале.',
          '**Этап 3 — масштаб.** Интеграции, автоматизация, расширение администрирования, производительность.'
        ]},
        'Такое деление даёт две вещи: цена каждого этапа конкретна, и на любом этапе можно остановиться, если рынок говорит иное.'
      ]],
      ['Возможно, приложение вам вообще не нужно', [
        'Многие задачи, для которых просят приложение, решаются адаптивным сайтом — дешевле и без проверки магазинами. Приложение оправдано, когда пользователь открывает его регулярно, нужны уведомления, офлайн-режим или функции устройства, либо это рабочий инструмент сотрудников. Если не уверены, [опишите задачу](/contact) — на первой встрече мы часто выясняем именно это. Полное описание услуги — на странице [разработка мобильных приложений](/mobile-app-development), стартовые цены — на [странице стоимости](/prices).'
      ]]
    ]
  }
};
