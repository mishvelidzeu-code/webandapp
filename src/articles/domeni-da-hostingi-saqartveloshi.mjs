export default {
  slug: 'domeni-da-hostingi-saqartveloshi', service: 'website-maintenance',
  related: ['/website-maintenance', '/website-development', '/wordpress-development', '/blog/saitis-damzadebis-fasi'],
  published: '2026-09-12', updated: '2026-09-12',
  sources: [
    ['NIC.GE — .ge დომენის რეგულაციები', 'https://nic.ge/en/administrator/the-ge-domain-regulations'],
    ['NIC.GE — აკრედიტებული რეგისტრატორები', 'https://nic.ge/en/registrars/registrar-companies']
  ],
  ka: {
    category: 'ტექნიკური',
    title: 'დომენი და ჰოსტინგი საქართველოში — რა უნდა იცოდეთ საიტის შეკვეთამდე',
    description: 'დომენის რეგისტრაცია (.ge, .com) და ჰოსტინგის არჩევა საქართველოში: ვის სახელზე უნდა იყოს, რომელი ჰოსტინგი ერგება რომელ საიტს, SSL, DNS, ელფოსტა და წლიური ხარჯები.',
    intro: 'დომენი და ჰოსტინგი საიტის „მისამართი" და „ბინაა". ორივე იაფია საიტის ფასთან შედარებით, მაგრამ ორივეზე კეთდება ყველაზე ძვირი შეცდომები: დომენი სხვის სახელზეა და ვერ იბრუნებთ, ჰოსტინგი საიტის ტიპს არ ერგება და ნელია, ან სერტიფიკატს ვადა გაუვიდა და ბრაუზერი „საშიშ საიტს" აჩვენებს. ეს სტატია იმისთვისაა, რომ ეს შეცდომები არ გაიმეოროთ.',
    sections: [
      ['დომენი: .ge თუ .com', [
        '.ge საქართველოს ეროვნული დომენია. NIC.GE-ს რეგულაციების მიხედვით, მისი რეგისტრაცია ღიაა ნებისმიერი ფიზიკური და იურიდიული პირისთვის, მოქალაქეობისა და რეზიდენტობის შეზღუდვის გარეშე, და ხდება რეესტრის (Caucasus Online) მიერ აკრედიტებული რეგისტრატორების მეშვეობით — თავად რეესტრი დომენებს აღარ ყიდის. არსებობს მეორე დონის ზონებიც: .com.ge (კომერციული), .edu.ge (საგანმანათლებლო), .org.ge და სხვა.',
        'რომელი ავირჩიოთ? თუ კლიენტები საქართველოში არიან, **.ge** ლოგიკური არჩევანია — ის ლოკალურობის სიგნალია მომხმარებლისთვისაც და Google-ისთვისაც. **.com** უნივერსალურია და საერთაშორისო აუდიტორიისთვის ჯობია; ხშირად ორივეს არეგისტრირებენ და ერთს მეორეზე გადამისამართებას უკეთებენ, რომ ბრენდი კონკურენტმა არ დაიკავოს. სახელი მოკლე, გამოსათქმელი და ლათინურად ადვილად დასაწერი უნდა იყოს — ქართული სიტყვების ტრანსლიტერაცია (მაგალითად, „saitebi") ხშირად რამდენიმენაირად იწერება, ეს გაითვალისწინეთ.'
      ]],
      ['ყველაზე მნიშვნელოვანი წესი: დომენი თქვენს სახელზე', [
        'დომენი ბიზნესის აქტივია, როგორც სახელწოდება ან ტელეფონის ნომერი. ის უნდა იყოს დარეგისტრირებული **თქვენს** (კომპანიის ან მფლობელის) სახელზე, **თქვენს** ანგარიშში რეგისტრატორთან, **თქვენს** ელფოსტაზე მიბმული. დეველოპერს, სააგენტოს ან ჰოსტინგ-კომპანიას სამუშაოსთვის საჭირო წვდომა ცალკე ეძლევა. წინააღმდეგ შემთხვევაში თანამშრომლობის შეწყვეტისას, დავის დროს ან უბრალოდ კონტაქტის დაკარგვისას საიტის მისამართი სხვის ხელში რჩება.',
        {list: [
          'შეამოწმეთ, ვინ არის დომენის რეგისტრანტი და რომელი ელფოსტაა მიბმული — განახლების შეტყობინებები სწორედ იქ მოვა.',
          'ჩართეთ ავტომატური განახლება ან ჩაინიშნეთ ვადა: ვადაგასული დომენი რამდენიმე კვირაში თავისუფალი ხდება და შეიძლება სხვამ დაიკავოს.',
          'რეგისტრატორის ანგარიშს ძლიერი პაროლი და ორფაქტორიანი დაცვა დაუყენეთ.'
        ]}
      ]],
      ['ჰოსტინგის ტიპები და რომელი რომელ საიტს ერგება', [
        {table: {head: ['ტიპი', 'რისთვის', 'რა უნდა იცოდეთ'], rows: [
          ['სტატიკური ჰოსტინგი / CDN პლატფორმა', 'ლენდინგი, სავიზიტო საიტი, კომპანიის საიტი კოდზე აწყობილი', 'ძალიან სწრაფი და უსაფრთხო; ზოგ პლატფორმას უფასო გეგმაც აქვს (კომერციული გამოყენების პირობები გადასამოწმებელია); PHP/მონაცემთა ბაზა არ არის'],
          ['ზიარი (shared) ჰოსტინგი', 'WordPress, მცირე მაღაზია', 'იაფი, ერთ სერვერზე ბევრი საიტია; სისწრაფე პროვაიდერზეა დამოკიდებული'],
          ['VPS / ვირტუალური სერვერი', 'დატვირთული WordPress, WooCommerce, ბიზნესსისტემა', 'საკუთარი რესურსები, მაგრამ ადმინისტრირება (განახლებები, უსაფრთხოება) თქვენი ან სპეციალისტის საქმეა'],
          ['მართული WordPress ჰოსტინგი', 'WordPress-ის მფლობელები, რომლებსაც ადმინისტრირება არ უნდათ', 'განახლებები, კეშირება, სარეზერვო ასლები პროვაიდერისგან; უფრო ძვირია'],
          ['კლაუდ-სერვერი / აპლიკაციის პლატფორმა', 'აპლიკაციის სერვერული ნაწილი, ინდივიდუალური სისტემა', 'მოხმარების მიხედვით იხდით; მასშტაბირება მარტივია']
        ]}},
        'ქართული თუ უცხოური ჰოსტინგი? ორივე შესაძლებელია. სერვერის მდებარეობა საიტის ჩატვირთვაზე მოქმედებს, მაგრამ CDN-ის გამოყენებისას ეს განსხვავება პრაქტიკულად ქრება. უფრო მნიშვნელოვანია მხარდაჭერის ხარისხი, სარეზერვო ასლები და ის, რომ ანგარიში თქვენს სახელზეა.'
      ]],
      ['SSL, DNS და ელფოსტა', [
        '**SSL/HTTPS** სავალდებულოა: მის გარეშე ბრაუზერი გაფრთხილებას აჩვენებს, Google კი ასეთ საიტს დაბლა აყენებს. თანამედროვე ჰოსტინგის უმეტესობა უფასო სერტიფიკატს ავტომატურად გასცემს და ანახლებს; თუ პროვაიდერი ფასიან სერტიფიკატს გთავაზობთ, ჰკითხეთ, რატომ.',
        '**DNS** არის ჩანაწერები, რომლებიც დომენს სერვერს უკავშირებს. მათ ჩვეულებრივ დეველოპერი ან ჰოსტინგი აწყობს; დომენის გადატანა ერთი ჰოსტინგიდან მეორეზე DNS-ის ცვლილებაა და საიტის ხელახლა შექმნას არ ნიშნავს.',
        '**ბიზნეს-ელფოსტა** (info@თქვენიდომენი.ge) ცალკე სერვისია — ჰოსტინგის პაკეტში შემავალი ან გარე პროვაიდერის (მაგალითად, Google Workspace-ის ტიპის). უფასო ელფოსტა ბიზნესისთვის ნდობას ამცირებს, საკუთარი დომენის ელფოსტა კი მარტივად ეწყობა.'
      ]],
      ['რა ხარჯებია წლიურად', [
        'დომენი და ჰოსტინგი მიმდინარე ხარჯია და საიტის დამზადების ფასში არ შედის — შეთავაზებაში ცალკე სტრიქონად უნდა იწერებოდეს. კონკრეტული თანხები რეგისტრატორისა და პროვაიდერის მიხედვით განსხვავდება, ამიტომ მათ ამ სტატიაში არ ვასახელებთ — შეამოწმეთ მოქმედი ტარიფები აკრედიტებული რეგისტრატორებისა და ჰოსტინგ-კომპანიების საიტებზე. ზოგადი ორიენტირი: მარტივი საიტისთვის წლიური ხარჯი (დომენი + ჰოსტინგი) დამზადების ერთჯერად ფასზე რამდენჯერმე ნაკლებია; მაღაზიასა და ბიზნესსისტემას სერვერი და მოვლა მეტი უჯდება. დეტალურად ფასის სტრუქტურაზე — [რა ღირს საიტის დამზადება](/blog/saitis-damzadebis-fasi).'
      ]],
      ['შეკვეთამდე შესამოწმებელი სია', [
        {list: [
          'დომენი ჩემს სახელზეა და რეგისტრატორის ანგარიშზე წვდომა მაქვს?',
          'ვიცი, როდის იწურება დომენი და ჰოსტინგი და ჩართულია თუ არა ავტომატური განახლება?',
          'ჰოსტინგის ტიპი საიტის ტექნოლოგიას ერგება (სტატიკური / WordPress / სერვერული)?',
          'SSL სერტიფიკატი ავტომატურად ახლდება?',
          'ვინ აკეთებს სარეზერვო ასლებს და სად ინახება?',
          'გვაქვს ბიზნეს-ელფოსტა საკუთარ დომენზე?',
          'შეთავაზებაში დომენი და ჰოსტინგი ცალკე სტრიქონადაა?'
        ]},
        'თუ არსებულ საიტს გადმოიტანთ ან ახალს იწყებთ და ამ სიაში კითხვები გაქვთ, [მოგვწერეთ](/contact) — რეგისტრაციაში, DNS-სა და ჰოსტინგის შერჩევაში ვეხმარებით პროექტის ფარგლებში, ხოლო შემდგომ მოვლას [ტექნიკური მხარდაჭერა](/website-maintenance) ფარავს.'
      ]]
    ]
  },
  en: {
    category: 'Technical',
    title: 'Domains and hosting in Georgia — what to know before ordering a website',
    description: 'Registering a domain (.ge, .com) and choosing hosting in Georgia: whose name it should be in, which hosting fits which site, SSL, DNS, email and annual costs.',
    intro: 'A domain and hosting are a website’s “address” and “home”. Both are cheap compared with the site itself, but both attract the most expensive mistakes: the domain is in someone else’s name and cannot be recovered, the hosting does not fit the site type and is slow, or the certificate expired and browsers show a “dangerous site” warning. This article exists so you do not repeat them.',
    sections: [
      ['Domain: .ge or .com', [
        '.ge is Georgia’s country domain. Under the NIC.GE regulations it is open to any individual or company worldwide, with no citizenship or residence restriction, and is registered through registrars accredited by the registry (Caucasus Online) — the registry itself no longer sells domains. Second-level zones also exist: .com.ge (commercial), .edu.ge (education), .org.ge and others.',
        'Which to choose? If your customers are in Georgia, **.ge** is the logical choice — a local signal for users and for Google. **.com** is universal and better for an international audience; many register both and redirect one to the other so a competitor cannot take the brand. Keep the name short, pronounceable and easy to type in Latin letters — transliterated Georgian words are often spelled several ways.'
      ]],
      ['The most important rule: the domain in your name', [
        'A domain is a business asset, like a name or a phone number. It must be registered in **your** name (company or owner), in **your** registrar account, linked to **your** email. A developer, agency or hosting company is given working access separately. Otherwise, when the collaboration ends, in a dispute or simply after losing contact, your site’s address stays in someone else’s hands.',
        {list: [
          'Check who the registrant is and which email is linked — renewal notices go there.',
          'Enable auto-renewal or note the expiry: an expired domain becomes free within weeks and can be taken by someone else.',
          'Protect the registrar account with a strong password and two-factor authentication.'
        ]}
      ]],
      ['Hosting types and which fits which site', [
        {table: {head: ['Type', 'For', 'What to know'], rows: [
          ['Static hosting / CDN platform', 'Landing pages, business-card sites, code-built company sites', 'Very fast and secure; some platforms have free plans (check commercial-use terms); no PHP/database'],
          ['Shared hosting', 'WordPress, small stores', 'Cheap; many sites on one server; speed depends on the provider'],
          ['VPS / virtual server', 'Busy WordPress, WooCommerce, business systems', 'Own resources, but administration (updates, security) is your or a specialist’s job'],
          ['Managed WordPress hosting', 'WordPress owners who do not want administration', 'Updates, caching, backups by the provider; more expensive'],
          ['Cloud server / app platform', 'App backends, custom systems', 'Pay by usage; easy to scale']
        ]}},
        'Georgian or foreign hosting? Both work. Server location affects loading time, but with a CDN the difference practically disappears. Support quality, backups and having the account in your name matter more.'
      ]],
      ['SSL, DNS and email', [
        '**SSL/HTTPS** is mandatory: without it browsers show a warning and Google ranks the site lower. Most modern hosting issues and renews a free certificate automatically; if a provider offers a paid one, ask why.',
        '**DNS** records connect the domain to the server. They are usually set up by the developer or host; moving a domain between hosts is a DNS change, not a rebuild.',
        '**Business email** (info@yourdomain.ge) is a separate service — included in a hosting package or from an external provider. Free webmail lowers trust for a business; email on your own domain is easy to set up.'
      ]],
      ['Annual costs', [
        'Domain and hosting are running costs and are not part of the website development price — they should appear as a separate line in the proposal. Exact amounts vary by registrar and provider, so we do not quote them here — check current rates on accredited registrars’ and hosting companies’ sites. As a general orientation, the annual cost (domain + hosting) for a simple site is several times lower than the one-off build price; a store or business system needs more for server and maintenance. More on price structure: [how much a website costs](/blog/saitis-damzadebis-fasi).'
      ]],
      ['Checklist before ordering', [
        {list: [
          'Is the domain in my name and do I have access to the registrar account?',
          'Do I know when the domain and hosting expire and is auto-renewal on?',
          'Does the hosting type fit the site technology (static / WordPress / server)?',
          'Does the SSL certificate renew automatically?',
          'Who makes backups and where are they stored?',
          'Do we have business email on our own domain?',
          'Are domain and hosting listed separately in the proposal?'
        ]},
        'If you are moving an existing site or starting a new one and have questions on this list, [write to us](/contact) — we help with registration, DNS and hosting choice within the project, and [maintenance](/website-maintenance) covers what follows.'
      ]]
    ]
  },
  ru: {
    category: 'Техническое',
    title: 'Домен и хостинг в Грузии — что нужно знать до заказа сайта',
    description: 'Регистрация домена (.ge, .com) и выбор хостинга в Грузии: на чьё имя оформлять, какой хостинг подходит какому сайту, SSL, DNS, почта и годовые расходы.',
    intro: 'Домен и хостинг — «адрес» и «дом» сайта. Оба дёшевы по сравнению с самим сайтом, но именно с ними связаны самые дорогие ошибки: домен на чужом имени и его не вернуть, хостинг не подходит типу сайта и тормозит, или сертификат истёк и браузер показывает «опасный сайт». Эта статья — чтобы вы этих ошибок не повторили.',
    sections: [
      ['Домен: .ge или .com', [
        '.ge — национальный домен Грузии. Согласно регламенту NIC.GE, его регистрация открыта для любого физического или юридического лица без ограничений по гражданству и резидентству и осуществляется через регистраторов, аккредитованных реестром (Caucasus Online), — сам реестр домены больше не продаёт. Существуют и зоны второго уровня: .com.ge (коммерческие), .edu.ge (образовательные), .org.ge и другие.',
        'Что выбрать? Если клиенты в Грузии, **.ge** — логичный выбор: сигнал локальности и для пользователя, и для Google. **.com** универсален и лучше для международной аудитории; часто регистрируют оба и перенаправляют один на другой, чтобы бренд не занял конкурент. Название должно быть коротким, произносимым и легко набираемым латиницей — транслитерация грузинских слов часто пишется по-разному.'
      ]],
      ['Самое важное правило: домен на ваше имя', [
        'Домен — актив бизнеса, как название или номер телефона. Он должен быть зарегистрирован на **ваше** имя (компании или владельца), в **вашем** аккаунте у регистратора, привязан к **вашей** почте. Разработчику, агентству или хостинг-компании рабочий доступ выдаётся отдельно. Иначе при прекращении сотрудничества, споре или просто потере контакта адрес сайта остаётся в чужих руках.',
        {list: [
          'Проверьте, кто указан регистрантом и какая почта привязана — уведомления о продлении придут туда.',
          'Включите автопродление или запишите срок: истёкший домен через несколько недель освобождается, и его может занять другой.',
          'Защитите аккаунт регистратора надёжным паролем и двухфакторной аутентификацией.'
        ]}
      ]],
      ['Типы хостинга и какой подходит какому сайту', [
        {table: {head: ['Тип', 'Для чего', 'Что нужно знать'], rows: [
          ['Статический хостинг / CDN-платформа', 'Лендинг, сайт-визитка, сайт компании на коде', 'Очень быстро и безопасно; у некоторых платформ есть бесплатный план (условия коммерческого использования нужно проверить); нет PHP/базы данных'],
          ['Виртуальный (shared) хостинг', 'WordPress, небольшой магазин', 'Дёшево; много сайтов на одном сервере; скорость зависит от провайдера'],
          ['VPS / виртуальный сервер', 'Нагруженный WordPress, WooCommerce, бизнес-система', 'Собственные ресурсы, но администрирование (обновления, безопасность) — ваша задача или специалиста'],
          ['Управляемый WordPress-хостинг', 'Владельцы WordPress, не желающие администрировать', 'Обновления, кеширование, резервные копии от провайдера; дороже'],
          ['Облачный сервер / платформа приложений', 'Серверная часть приложения, индивидуальная система', 'Оплата по потреблению; простое масштабирование']
        ]}},
        'Грузинский или зарубежный хостинг? Возможны оба. Расположение сервера влияет на загрузку, но при использовании CDN эта разница практически исчезает. Важнее качество поддержки, резервные копии и то, что аккаунт оформлен на ваше имя.'
      ]],
      ['SSL, DNS и почта', [
        '**SSL/HTTPS** обязателен: без него браузер показывает предупреждение, а Google понижает такой сайт. Большинство современных хостингов выдаёт и продлевает бесплатный сертификат автоматически; если провайдер предлагает платный, спросите почему.',
        '**DNS** — записи, связывающие домен с сервером. Их обычно настраивает разработчик или хостинг; перенос домена с одного хостинга на другой — это изменение DNS, а не пересоздание сайта.',
        '**Бизнес-почта** (info@вашдомен.ge) — отдельный сервис, входящий в пакет хостинга или от внешнего провайдера. Бесплатная почта снижает доверие к бизнесу, а почта на собственном домене настраивается просто.'
      ]],
      ['Годовые расходы', [
        'Домен и хостинг — текущие расходы, они не входят в стоимость разработки и должны указываться в предложении отдельной строкой. Конкретные суммы отличаются у регистраторов и провайдеров, поэтому в этой статье мы их не называем — проверьте действующие тарифы на сайтах аккредитованных регистраторов и хостинг-компаний. Общий ориентир: для простого сайта годовой расход (домен + хостинг) в несколько раз меньше разовой цены разработки; магазину и бизнес-системе сервер и поддержка обходятся дороже. Подробнее о структуре цены — [сколько стоит разработка сайта](/blog/saitis-damzadebis-fasi).'
      ]],
      ['Чек-лист перед заказом', [
        {list: [
          'Домен на моё имя, и у меня есть доступ к аккаунту регистратора?',
          'Знаю ли я, когда истекают домен и хостинг, и включено ли автопродление?',
          'Тип хостинга соответствует технологии сайта (статический / WordPress / серверный)?',
          'SSL-сертификат продлевается автоматически?',
          'Кто делает резервные копии и где они хранятся?',
          'Есть ли у нас бизнес-почта на собственном домене?',
          'Домен и хостинг указаны в предложении отдельной строкой?'
        ]},
        'Если вы переносите существующий сайт или начинаете новый и у вас есть вопросы по этому списку, [напишите нам](/contact) — с регистрацией, DNS и выбором хостинга помогаем в рамках проекта, а дальнейшее обслуживание покрывает [техническая поддержка](/website-maintenance).'
      ]]
    ]
  }
};
