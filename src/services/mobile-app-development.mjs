export default {
  slug: 'mobile-app-development', icon: '▯', image: 'mobile-app-development',
  tech: ['React Native', 'Flutter', 'Swift / Kotlin'],
  related: ['custom-software', 'ui-ux-design', 'website-maintenance'],
  articles: ['aplikaciis-damzadebis-fasi', 'wordpress-tu-individualuri-saiti'],
  priceFrom: 1100,
  anchors: {ios: 'ios', android: 'android'},
  ka: {
    name: 'მობილური აპლიკაციის შექმნა',
    title: 'მობილური აპლიკაციის შექმნა — აპლიკაციის დამზადება iOS და Android | webandapp',
    h1: 'მობილური აპლიკაციის შექმნა და დამზადება',
    description: 'მობილური აპლიკაციის შექმნა iOS და Android პლატფორმებისთვის: MVP, დიზაინი, სერვერული ნაწილი და მაღაზიებში გამოქვეყნება. აპლიკაციის დამზადება 1 100 ₾-დან.',
    intro: 'მობილური აპლიკაცია გამოსადეგია განმეორებადი მოქმედებებისთვის: ჯავშნისთვის, შეკვეთისთვის, პირადი ანგარიშისთვის ან სამუშაო პროცესის სამართავად. პირველ ვერსიაში ვაერთიანებთ იმ ფუნქციებს, რომლებიც მთავარი იდეის პრაქტიკულად შემოწმებას ემსახურება.',
    problem: 'აპლიკაციის საჭიროება მხოლოდ მობილური ეკრანით არ განისაზღვრება — ბევრი ამოცანა მობილურზე მორგებული საიტითაც წყდება. ჯერ ვარკვევთ, რატომ უნდა დააინსტალიროს მომხმარებელმა აპლიკაცია და გამოიყენოს განმეორებით: შეტყობინებები, ოფლაინ რეჟიმი, კამერა და მდებარეობა, პირადი კაბინეტი თუ სწრაფი განმეორებითი შეკვეთა. ასე თავიდან ავიცილებთ ძვირი პროდუქტის შექმნას, რომელსაც არავინ ხსნის.',
    audience: 'სტარტაპები და მოქმედი ბიზნესი, რომლებსაც სჭირდებათ მომხმარებლის პირადი სივრცე, ხშირი ჯავშნები და შეკვეთები, საველე თანამშრომლების სამუშაო ინსტრუმენტი ან მოწყობილობის შესაძლებლობებთან (კამერა, GPS, შეტყობინებები) კავშირი.',
    sections: [
      ['მობილური აპლიკაციის დამზადება — რას მოიცავს პროცესი', [
        'აპლიკაციის დამზადება ეკრანებისა და მომხმარებლის გზის დაგეგმვით იწყება, შემდეგ მოდის დიზაინი, პროგრამირება, სერვერული ნაწილი, ტესტირება რეალურ მოწყობილობებზე და მაღაზიებში გამოქვეყნება. მუშაობა ეტაპობრივია: ჯერ მინიმალური სამუშაო ვერსია (MVP), შემდეგ თანდათანობითი გაფართოება მომხმარებლების რეალური გამოხმაურების მიხედვით — არა ერთდროულად ყველა ფუნქცია, რომელიც შესაძლოა არ დასჭირდეთ.'
      ]],
      ['ბიზნეს აპლიკაციები შიდა პროცესებისთვის', [
        'ბიზნეს აპლიკაცია ხშირად კლიენტისთვის კი არა, თანამშრომლებისთვისაა: შეკვეთების აღრიცხვა, კურიერების ან საველე ბრიგადების მართვა, საწყობის ინვენტარიზაცია, ვიზიტების ჩანაწერები. ასეთ დროს მთავარი ამოცანა არსებულ სისტემებთან — ბუღალტერიასთან, CRM-თან, საწყობთან — ინტეგრაციაა, ამიტომ წინასწარ ვამოწმებთ, რა მონაცემები უნდა გაცვალოს აპლიკაციამ და ვის რა უფლება აქვს. ხშირად ასეთი პროექტი [ინდივიდუალურ პროგრამულ სისტემასთან](/custom-software) ერთად იგეგმება.'
      ]],
      ['Android და iOS ერთ პროექტში', [
        'React Native საშუალებას იძლევა, Android და iOS აპლიკაცია ერთი კოდის ბაზიდან აიწყოს — ეს ამცირებს ვადასა და ხარჯს და ორივე პლატფორმის ერთდროულ განახლებას ამარტივებს. ზოგიერთი ფუნქცია — push-შეტყობინებები, კამერა, გადახდები, ბიომეტრია — პლატფორმის მიხედვით ცალკე გამართვას საჭიროებს. თუ აპლიკაცია ერთი პლატფორმის სპეციფიკურ შესაძლებლობებზეა აგებული, ვიხილავთ Swift/Kotlin-ით ნატიურ განვითარებასაც.'
      ]],
      ['iOS აპლიკაციის შექმნა', [
        'iPhone-ისთვის ვგეგმავთ ეკრანების ქცევას Apple-ის ინტერფეისის წესების მიხედვით, ნებართვებს (კამერა, მდებარეობა, შეტყობინებები) და App Store-ში წარსადგენ მასალას. საჭიროა Apple Developer ანგარიში ბიზნესის სახელზე, ტესტირება რეალურ iPhone-ებზე TestFlight-ით და კონფიდენციალურობის დეკლარაციის მომზადება — ეს ნაბიჯები პროექტის განუყოფელი ნაწილია.'
      ], {id: 'ios'}],
      ['Android აპლიკაციის შექმნა', [
        'Android-ისთვის მნიშვნელოვანია ეკრანების მრავალფეროვანი ზომების, ოპერაციული სისტემის სხვადასხვა ვერსიისა და მოწყობილობის ნებართვების გათვალისწინება. Google Play-ში გამოქვეყნებას წინ უძღვის შიდა და დახურული ტესტირება; სატესტო მოწყობილობებსა და გამოქვეყნების ნაბიჯებს მოთხოვნების მიხედვით ვირჩევთ.'
      ], {id: 'android'}],
      ['აპლიკაციის დიზაინი', [
        'აპლიკაციის დიზაინი მხოლოდ გარეგნობა არ არის: ის განსაზღვრავს, რამდენად სწრაფად პოულობს მომხმარებელი საჭირო ფუნქციას და ბრუნდება თუ არა აპლიკაციაში. ვითვალისწინებთ შეხებით მართვას, ეკრანების ზომებს, პლატფორმის ჩვეულ ქცევას (iOS და Android-ის ნავიგაციის ნიმუშები) და ხელმისაწვდომობას. პროტოტიპს Figma-ში ვამზადებთ და პროგრამირებამდე ვათანხმებთ — დეტალურად [UI/UX დიზაინის](/ui-ux-design) გვერდზე.'
      ]],
      ['გამოქვეყნება App Store-სა და Google Play-ში', [
        'გამოქვეყნებისთვის საჭიროა დეველოპერის ანგარიშები Apple-სა და Google-ში — ისინი ბიზნესის სახელზე იხსნება და საფასურს პლატფორმები ადგენენ. ვამზადებთ აღწერებს, სკრინშოტებს, კონფიდენციალურობის დეკლარაციებსა და ტესტურ ვერსიებს (TestFlight, შიდა ტესტირება), ვამოწმებთ მაღაზიების მოთხოვნებთან შესაბამისობას და ვაგზავნით განსახილველად. განხილვის ვადას მაღაზიები აკონტროლებენ; უარყოფის შემთხვევაში შენიშვნებს ვასწორებთ და ხელახლა ვაგზავნით.'
      ]]
    ],
    features: [
      'ეკრანების რუკა, მომხმარებლის გზა და MVP-ის ფუნქციების სია',
      'დიზაინი iOS და Android-ისთვის, Figma-ს ინტერაქტიული პროტოტიპი',
      'ავტორიზაცია, პროფილი და შეთანხმებული ბიზნესფუნქციები',
      'სერვერული ნაწილი (API), მონაცემთა ბაზა და ადმინისტრირების პანელი',
      'Push-შეტყობინებები, გადახდები და მოწყობილობის ფუნქციები საჭიროებისამებრ',
      'ტესტირება რეალურ მოწყობილობებზე და სატესტო ვერსიების გავრცელება',
      'App Store-სა და Google Play-ში წარდგენის მასალები და გამოქვეყნება',
      'ანალიტიკა და შეცდომების მონიტორინგი გაშვების შემდეგ'
    ],
    time: 'ვადაზე მოქმედებს ეკრანების რაოდენობა, სერვერული ლოგიკა, მოწყობილობის ფუნქციები, ინტეგრაციები და მაღაზიების განხილვის პროცესი, რომლის ხანგრძლივობას დეველოპერი ვერ აკონტროლებს. MVP-ის მკაფიო საზღვრები ვადას ყველაზე მეტად ამოკლებს.',
    cost: 'მობილური აპლიკაციის შექმნა 1 100 ₾-დან იწყება მარტივი პირველი ვერსიისთვის. ფასს განსაზღვრავს ფუნქციების სია, სერვერული ნაწილი, მომხმარებლის როლები, გადახდები და ინტეგრაციები. დეველოპერის ანგარიშების, სერვერისა და გარე სერვისების საფასური ცალკე გასათვალისწინებელია. ბიუჯეტის ეტაპობრივი დაგეგმვა — სტატიაში [აპლიკაციის დამზადების ფასი](/blog/aplikaciis-damzadebis-fasi).',
    support: 'ოპერაციული სისტემების განახლებები და მაღაზიების ახალი მოთხოვნები აპლიკაციის პერიოდულ განახლებას მოითხოვს. გაშვების შემდეგ ვათანხმებთ, ვინ აკვირდება შეცდომებს, როგორ ქვეყნდება განახლებები და რა ვადებში — ეს [მხარდაჭერის](/website-maintenance) ცალკე ფორმატია.',
    faq: [
      ['Android და iOS ერთად უნდა შევქმნათ?', 'ეს აუდიტორიასა და ბიუჯეტზეა დამოკიდებული. React Native-ით ორივე ერთი კოდის ბაზიდან იწყობა, ამიტომ ერთად უფრო იაფი ჯდება, ვიდრე ორი ცალკე პროექტი. შესაძლებელია ერთით დაწყებაც.'],
      ['რა ღირს აპლიკაციის დამზადება?', '1 100 ₾-დან მარტივი პირველი ვერსიისთვის. სერვერული ნაწილი, როლები, გადახდები და ინტეგრაციები ფასს ზრდის — იხილეთ [ფასების გვერდი](/prices).'],
      ['რას ნიშნავს MVP?', 'პირველი ვერსია მხოლოდ იმ ფუნქციებით, რომლებიც მთავარი იდეის შესამოწმებლადაა საჭირო. ის ამცირებს საწყის ბიუჯეტს და შემდგომ გადაწყვეტილებებს რეალურ გამოხმაურებაზე აფუძნებს.'],
      ['გამოქვეყნება გარანტირებულია?', 'არა. App Store და Google Play აპლიკაციას დამოუკიდებლად ამოწმებენ. წინასწარ ვამზადებთ საჭირო მასალასა და მოთხოვნებთან შესაბამისობის შემოწმებას, უარყოფის შემთხვევაში კი შენიშვნებს ვასწორებთ.'],
      ['ვინ უნდა ფლობდეს მაღაზიის ანგარიშს?', 'დამკვეთი. Apple-ისა და Google-ის დეველოპერის ანგარიშები ბიზნესის სახელზე იხსნება; სამუშაოსთვის წვდომა შესაბამისი როლით გაიცემა.'],
      ['მუშაობს აპლიკაცია ინტერნეტის გარეშე?', 'თუ ეს აუცილებელია, ცალკე ვგეგმავთ ლოკალურ მონაცემებს, სინქრონიზაციასა და კონფლიქტების დამუშავებას. ყველა ფუნქცია ავტომატურად ოფლაინ არ მუშაობს.'],
      ['აპლიკაციას სერვერი სჭირდება?', 'უმეტესად დიახ — მომხმარებლების, შეკვეთებისა და შეტყობინებებისთვის. სერვერის ღირებულება და ჰოსტინგი ცალკე სტრიქონია და ფუნქციების მოცულობაზეა დამოკიდებული.']
    ]
  },
  en: {
    name: 'Mobile app development',
    title: 'Mobile app development — iOS and Android apps in Georgia | webandapp',
    h1: 'Mobile app development for iOS and Android',
    description: 'Mobile app development for iOS and Android: MVP, design, backend and store publication. App development from GEL 1,100.',
    intro: 'A mobile app suits repeat actions: bookings, orders, personal accounts or managing a work process. The first version contains the functions needed to test the core idea in practice.',
    problem: 'The need for an app is not defined by a mobile screen alone — many tasks are solved by a mobile-ready website. We first establish why a user would install the app and return to it: notifications, offline mode, camera and location, a personal account or fast repeat ordering. That avoids building an expensive product nobody opens.',
    audience: 'Startups and operating businesses that need a customer’s personal space, frequent bookings and orders, a tool for field staff or a connection to device capabilities (camera, GPS, notifications).',
    sections: [
      ['What the app development process includes', [
        'App development starts by planning screens and the user journey, followed by design, programming, the backend, testing on real devices and publication in the stores. Work is staged: first a minimum working version (MVP), then gradual expansion based on real user feedback — not every possible function at once.'
      ]],
      ['Business apps for internal processes', [
        'A business app is often for staff rather than customers: order tracking, managing couriers or field teams, stock counts, visit records. There the main task is integration with existing systems — accounting, CRM, warehouse — so we check in advance which data the app exchanges and who is allowed to do what. Such projects are often planned together with [custom software](/custom-software).'
      ]],
      ['Android and iOS in one project', [
        'React Native builds Android and iOS from one code base, which shortens the timeline, lowers cost and simplifies updating both platforms at once. Some functions — push notifications, camera, payments, biometrics — need platform-specific configuration. If an app relies on one platform’s specific capabilities, we also consider native development in Swift/Kotlin.'
      ]],
      ['iOS app development', [
        'For iPhone we plan screen behaviour according to Apple’s interface guidelines, permissions (camera, location, notifications) and App Store submission materials. An Apple Developer account in the business’s name, testing on real iPhones via TestFlight and a privacy declaration are integral parts of the project.'
      ], {id: 'ios'}],
      ['Android app development', [
        'Android needs attention to the variety of screen sizes, operating-system versions and device permissions. Publication on Google Play is preceded by internal and closed testing; test devices and release steps are chosen around the requirements.'
      ], {id: 'android'}],
      ['App design', [
        'App design is not only appearance: it determines how quickly a user finds the function they need and whether they come back. We account for touch controls, screen sizes, platform conventions (iOS and Android navigation patterns) and accessibility. The prototype is prepared in Figma and agreed before programming — see [UI/UX design](/ui-ux-design).'
      ]],
      ['Publishing on the App Store and Google Play', [
        'Publication requires developer accounts with Apple and Google, opened in the business’s name with fees set by the platforms. We prepare descriptions, screenshots, privacy declarations and test builds (TestFlight, internal testing), check compliance with store requirements and submit for review. Review time is controlled by the stores; if rejected, we address the notes and resubmit.'
      ]]
    ],
    features: [
      'Screen map, user journey and MVP feature list',
      'Design for iOS and Android with an interactive Figma prototype',
      'Authentication, profile and agreed business functions',
      'Backend (API), database and an administration panel',
      'Push notifications, payments and device features as needed',
      'Testing on real devices and distribution of test builds',
      'Store submission materials and publication',
      'Analytics and error monitoring after launch'
    ],
    time: 'Screens, backend logic, device features, integrations and the stores’ review process — whose duration a developer cannot control — affect timing. Clear MVP boundaries shorten the timeline most.',
    cost: 'Mobile app development starts at GEL 1,100 for a simple first release. The feature list, backend, user roles, payments and integrations define the budget; developer accounts, server and external services are separate. Staged budget planning: [app development cost](/blog/aplikaciis-damzadebis-fasi).',
    support: 'Operating-system updates and new store requirements mean an app needs periodic updates. After launch we agree who monitors errors, how updates are published and within what timeframes — a separate [support](/website-maintenance) format.',
    faq: [
      ['Should we build Android and iOS together?', 'It depends on your audience and budget. React Native builds both from one code base, so together they cost less than two separate projects. Starting with one is also possible.'],
      ['How much does an app cost?', 'From GEL 1,100 for a simple first release. A backend, roles, payments and integrations raise the price — see the [pricing page](/prices).'],
      ['What is an MVP?', 'A first version with only the functions needed to test the core idea. It lowers the initial budget and bases later decisions on real feedback.'],
      ['Is store approval guaranteed?', 'No. Each store reviews submissions independently. We prepare the required materials and compliance checks in advance and fix any notes if rejected.'],
      ['Who should own the store accounts?', 'The client. Apple and Google developer accounts are opened in the business’s name; working access is granted by role.'],
      ['Does the app work offline?', 'When required, we plan local data, synchronisation and conflict handling separately. Not every function works offline automatically.']
    ]
  },
  ru: {
    name: 'Разработка мобильных приложений',
    title: 'Разработка мобильных приложений — iOS и Android в Грузии | webandapp',
    h1: 'Разработка мобильных приложений для iOS и Android',
    description: 'Разработка мобильных приложений для iOS и Android: MVP, дизайн, серверная часть и публикация в магазинах. Создание приложения от 1 100 ₾.',
    intro: 'Мобильное приложение подходит для повторяющихся действий: бронирования, заказов, личного кабинета или управления рабочим процессом. В первую версию включаем функции, необходимые для проверки основной идеи на практике.',
    problem: 'Необходимость приложения не определяется одним лишь мобильным экраном — многие задачи решает адаптивный сайт. Сначала выясняем, зачем пользователю устанавливать приложение и возвращаться в него: уведомления, офлайн-режим, камера и геолокация, личный кабинет или быстрый повторный заказ. Так мы избегаем дорогого продукта, который никто не открывает.',
    audience: 'Стартапы и действующий бизнес, которым нужны личное пространство клиента, частые бронирования и заказы, инструмент для выездных сотрудников или связь с возможностями устройства (камера, GPS, уведомления).',
    sections: [
      ['Что включает процесс разработки приложения', [
        'Разработка начинается с планирования экранов и пути пользователя, затем следуют дизайн, программирование, серверная часть, тестирование на реальных устройствах и публикация в магазинах. Работа поэтапна: сначала минимальная рабочая версия (MVP), затем постепенное расширение по реальной обратной связи — а не все возможные функции сразу.'
      ]],
      ['Бизнес-приложения для внутренних процессов', [
        'Бизнес-приложение часто нужно не клиентам, а сотрудникам: учёт заказов, управление курьерами или выездными бригадами, инвентаризация склада, записи визитов. Здесь главная задача — интеграция с существующими системами: бухгалтерией, CRM, складом, поэтому заранее проверяем, какими данными обменивается приложение и у кого какие права. Такие проекты часто планируются вместе с [индивидуальной программной системой](/custom-software).'
      ]],
      ['Android и iOS в одном проекте', [
        'React Native позволяет собрать приложение для Android и iOS из одной кодовой базы — это сокращает срок и стоимость и упрощает одновременное обновление обеих платформ. Некоторые функции — push-уведомления, камера, оплата, биометрия — требуют настройки под платформу. Если приложение опирается на специфические возможности одной платформы, рассматриваем и нативную разработку на Swift/Kotlin.'
      ]],
      ['Разработка приложения для iOS', [
        'Для iPhone планируем поведение экранов по правилам интерфейса Apple, разрешения (камера, геолокация, уведомления) и материалы для App Store. Аккаунт Apple Developer на имя бизнеса, тестирование на реальных iPhone через TestFlight и декларация конфиденциальности — неотъемлемые части проекта.'
      ], {id: 'ios'}],
      ['Разработка приложения для Android', [
        'Для Android важно учитывать разнообразие размеров экранов, версии операционной системы и разрешения устройства. Публикации в Google Play предшествует внутреннее и закрытое тестирование; тестовые устройства и шаги релиза выбираем по требованиям.'
      ], {id: 'android'}],
      ['Дизайн приложения', [
        'Дизайн приложения — не только внешний вид: он определяет, как быстро пользователь находит нужную функцию и возвращается ли он. Учитываем управление касанием, размеры экранов, привычное поведение платформы (паттерны навигации iOS и Android) и доступность. Прототип готовим в Figma и согласовываем до программирования — подробнее на странице [UI/UX дизайн](/ui-ux-design).'
      ]],
      ['Публикация в App Store и Google Play', [
        'Для публикации нужны аккаунты разработчика у Apple и Google — они открываются на имя бизнеса, стоимость устанавливают платформы. Готовим описания, скриншоты, декларации конфиденциальности и тестовые сборки (TestFlight, внутреннее тестирование), проверяем соответствие требованиям магазинов и отправляем на проверку. Срок проверки контролируют магазины; при отказе исправляем замечания и отправляем повторно.'
      ]]
    ],
    features: [
      'Карта экранов, путь пользователя и список функций MVP',
      'Дизайн для iOS и Android с интерактивным прототипом в Figma',
      'Авторизация, профиль и согласованные бизнес-функции',
      'Серверная часть (API), база данных и панель администрирования',
      'Push-уведомления, оплата и функции устройства по необходимости',
      'Тестирование на реальных устройствах и распространение тестовых сборок',
      'Материалы для магазинов и публикация',
      'Аналитика и мониторинг ошибок после запуска'
    ],
    time: 'На срок влияют количество экранов, серверная логика, функции устройства, интеграции и процесс проверки магазинами, длительность которого разработчик не контролирует. Чёткие границы MVP сокращают срок сильнее всего.',
    cost: 'Разработка мобильного приложения начинается от 1 100 ₾ для простой первой версии. Бюджет определяют список функций, серверная часть, роли пользователей, оплата и интеграции; аккаунты разработчика, сервер и внешние сервисы оплачиваются отдельно. Поэтапное планирование бюджета — в статье [стоимость разработки приложения](/blog/aplikaciis-damzadebis-fasi).',
    support: 'Обновления операционных систем и новые требования магазинов означают, что приложение нужно периодически обновлять. После запуска согласуем, кто следит за ошибками, как публикуются обновления и в какие сроки — это отдельный формат [поддержки](/website-maintenance).',
    faq: [
      ['Делать Android и iOS вместе?', 'Зависит от аудитории и бюджета. React Native собирает обе платформы из одной кодовой базы, поэтому вместе они дешевле двух отдельных проектов. Можно начать и с одной.'],
      ['Сколько стоит приложение?', 'От 1 100 ₾ за простую первую версию. Серверная часть, роли, оплата и интеграции увеличивают цену — см. [страницу стоимости](/prices).'],
      ['Что такое MVP?', 'Первая версия только с функциями, нужными для проверки основной идеи. Она снижает стартовый бюджет и опирает дальнейшие решения на реальную обратную связь.'],
      ['Публикация гарантирована?', 'Нет. Магазины проверяют приложения самостоятельно. Мы заранее готовим материалы и проверку соответствия требованиям, а при отказе исправляем замечания.'],
      ['Кому должны принадлежать аккаунты магазинов?', 'Заказчику. Аккаунты разработчика Apple и Google открываются на имя бизнеса; рабочий доступ выдаётся по ролям.'],
      ['Работает ли приложение без интернета?', 'Если это необходимо, отдельно планируем локальные данные, синхронизацию и обработку конфликтов. Не все функции работают офлайн автоматически.']
    ]
  }
};
