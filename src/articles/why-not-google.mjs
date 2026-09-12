export default {
  slug: 'why-not-google', service: 'seo',
  related: ['/seo', '/website-development', '/website-maintenance', '/blog/facebook-gverdi-tu-saiti'],
  published: '2026-09-05', updated: '2026-09-12',
  sources: [
    ['Google — SEO Starter Guide', 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide'],
    ['Google — Search Console Performance report', 'https://support.google.com/webmasters/answer/7576553'],
    ['Google — Creating helpful, reliable, people-first content', 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content']
  ],
  ka: {
    category: 'SEO',
    title: 'რატომ არ ჩანს ვებსაიტი Google-ში — მიზეზების პოვნა ნაბიჯ-ნაბიჯ',
    description: 'საიტი Google-ში არ ჩანს? ინდექსაცია, ტექნიკური დაბრკოლებები, კონტენტი, კონკურენცია და ავტორიტეტი — როგორ იპოვოთ რეალური მიზეზი Search Console-ით ნაბიჯ-ნაბიჯ.',
    intro: '„საიტი გვაქვს, მაგრამ Google-ში არ ჩანს" — ეს ფრაზა ხუთი სრულიად სხვადასხვა პრობლემის აღწერაა: შესაძლოა Google-მა საიტი საერთოდ არ იცის, იცის, მაგრამ არ აჩვენებს, აჩვენებს მე-5 გვერდზე, ან აჩვენებს მხოლოდ ბრენდის სახელზე. თითოეულს განსხვავებული გამოსავალი აქვს. ეს სტატია დიაგნოსტიკის თანმიმდევრობაა — მარტივიდან რთულისკენ.',
    sections: [
      ['ნაბიჯი 1: ჯერ ინდექსაცია შეამოწმეთ', [
        'Google-ის ძიებაში ჩაწერეთ `site:თქვენიდომენი.ge`. თუ შედეგები ცარიელია, საიტი ინდექსში არ არის — და ყველა დანარჩენი შემოწმება უაზროა. ყველაზე ხშირი მიზეზები:',
        {list: [
          'robots.txt ფაილში `Disallow: /` — საიტი შემთხვევით მთლიანად დახურულია (ხშირად დეველოპმენტის დროიდან დარჩენილი)',
          'გვერდებზე `noindex` მეტა-ტეგი',
          'საიტი ახალია და Google-მა მისი მისამართი ჯერ არ იცის',
          'canonical ტეგი სხვა მისამართზე მიუთითებს',
          'საიტი მხოლოდ JavaScript-ით ივსება და ტექსტი HTML-ში არ არის'
        ]},
        'Google Search Console-ში (უფასოა) URL Inspection ინსტრუმენტი ზუსტად გეტყვით, იცის თუ არა Google-მა კონკრეტული გვერდის შესახებ და რა შეუშალა ხელი. Search Console-ის დაკავშირება პირველი ნაბიჯია, რომელიც ყველა საიტს სჭირდება — თუ ჯერ არ გაქვთ, დღესვე გააკეთეთ.'
      ]],
      ['ნაბიჯი 2: შეადარეთ გვერდი ძიების მიზანს', [
        'ინდექსში ყოფნა გამოჩენას არ ნიშნავს. გვერდი უნდა პასუხობდეს იმავე კითხვას, რასაც მომხმარებელი ეძებს. ჩაწერეთ Google-ში ფრაზა, რომლითაც კლიენტი თქვენს მომსახურებას მოძებნიდა, და ნახეთ, რა ტიპის გვერდები ჩანს TOP-10-ში: სააგენტოების მთავარი გვერდები, დეტალური მომსახურების გვერდები, სტატიები თუ კატალოგები. თუ თქვენი გვერდი სხვა ტიპისაა (მაგალითად, ზოგადი მთავარი გვერდი, სადაც ეს მომსახურება ერთი წინადადებითაა ნახსენები), Google მას შესაბამისად არ ჩათვლის. ზოგადი მთავარი გვერდი ვერ ჩაანაცვლებს კონკრეტული მომსახურების სრულ აღწერას — თითოეულ მნიშვნელოვან თემას საკუთარი გვერდი სჭირდება.'
      ]],
      ['ნაბიჯი 3: გადაამოწმეთ ტექნიკური ხარისხი', [
        'საძიებო სისტემას უნდა შეეძლოს გვერდზე გადასვლა, მისი ტექსტის წაკითხვა და შიდა ბმულებით დაკავშირებული გვერდების აღმოჩენა. შეამოწმეთ:',
        {list: [
          '**მობილური ვერსია** — Google გვერდებს მობილური ვერსიით აფასებს; თუ ტელეფონზე ტექსტი პატარაა ან ელემენტები გადაფარულია, ეს პრობლემაა',
          '**სისწრაფე** — PageSpeed Insights-ის Core Web Vitals; ნელი საიტი ვიზიტორსაც კარგავს და პოზიციასაც',
          '**დუბლიკატები** — `/gverdi`, `/gverdi/`, `www` და `non-www`, `http` და `https` ერთ ვერსიაზე უნდა გადამისამართდებოდეს',
          '**შიდა ბმულები** — გვერდი, რომელზეც არცერთი სხვა გვერდი არ მიუთითებს, Google-ისთვის „ობოლია"',
          '**სათაურები** — თითოეულ გვერდს უნიკალური title და ერთი H1 უნდა ჰქონდეს, რომელიც გვერდის თემას აღწერს'
        ]}
      ]],
      ['ნაბიჯი 4: შეაფასეთ კონტენტის სისრულე და სანდოობა', [
        'Google-ის ოფიციალური რეკომენდაცია „people-first" კონტენტია: გვერდი უნდა იყოს სასარგებლო ადამიანისთვის, რომელიც მას ეძებს, და არა მხოლოდ საკვანძო სიტყვების კონტეინერი. 200-სიტყვიანი ზოგადი ტექსტი კონკურენტის დეტალურ გვერდს ვერ აჯობებს, რომელშიც ფასები, პროცესი, მაგალითები და კითხვებზე პასუხებია. ამავე დროს, ხელოვნური გამეორება და keyword-ების სია ზიანს აყენებს. გამოიყენეთ რეალური საკონტაქტო ინფორმაცია, მომსახურების კონკრეტული პირობები და ავტორისთვის ცნობილი დეტალები; დაუდასტურებელი შეფასებები და გადაჭარბებული დაპირებები ნდობას ამცირებს.'
      ]],
      ['ნაბიჯი 5: კონკურენცია და ავტორიტეტი', [
        'თუ ტექნიკურად ყველაფერი წესრიგშია და კონტენტიც კარგია, მაგრამ პოზიცია მაინც დაბალია, მიზეზი ხშირად ავტორიტეტია: Google უფრო მაღლა აყენებს საიტებს, რომლებზეც სხვა სანდო საიტები მიუთითებენ და რომლებსაც ისტორია აქვთ. ახალი დომენი კონკურენტულ ფრაზებზე თვეების განმავლობაში ვერ შეედრება 10-წლიან საიტს ასობით ბმულით — და ეს ნორმალურია. აქ გამოსავალი დროა და თანმიმდევრული სამუშაო: ნაკლებად კონკურენტული, კონკრეტული ფრაზებით დაწყება, სასარგებლო კონტენტი, რომელზეც სხვები ბუნებრივად მიუთითებენ, ლოკალური პროფილები (Google Business Profile) და რეალური კლიენტების შეფასებები. ნაყიდი ბმულები და „სწრაფი" მეთოდები საიტს რისკის ქვეშ აყენებს.'
      ]],
      ['ნაბიჯი 6: გაზომეთ სწორი შედეგი', [
        'Search Console-ის Performance ანგარიშში შეადარეთ ჩვენებები (impressions), დაწკაპებები, მოთხოვნები და გვერდები. თუ ჩვენებები იზრდება და დაწკაპებები არა — პრობლემა სათაურსა და აღწერაშია (SERP-ში არამიმზიდველია); თუ ჩვენებებიც არ არის — გვერდი თემას ვერ პასუხობს ან ავტორიტეტი აკლია. ბიზნესისთვის საბოლოო საზომი ხარისხიანი ზარი ან ფორმაა, ამიტომ ორგანული ვიზიტები ანალიტიკაში მოთხოვნებს დაუკავშირეთ. მხოლოდ ერთი სიტყვის პოზიცია სრულ სურათს არ იძლევა.'
      ]],
      ['მოემზადეთ დროში ცვლილებისთვის', [
        'Google თავად წყვეტს, როდის გადაამუშავებს გვერდს და როგორ დაალაგებს შედეგებს — ცვლილების ეფექტი კვირებში, ზოგჯერ თვეებში ჩანს. ტექნიკური გამართვა აუცილებელი საფუძველია, ხოლო ზრდა თანმიმდევრულ მუშაობას მოითხოვს კონტენტსა და ავტორიტეტზე. თუ ამ ნაბიჯების გავლის შემდეგაც უჭირთ მიზეზის პოვნა, [SEO აუდიტი](/seo) სწორედ ამ დიაგნოსტიკას აკეთებს მონაცემებით — და თუ საიტი ტექნიკურად მოძველებულია, ზოგჯერ [თავიდან აწყობა](/website-development) უფრო რაციონალურია, ვიდრე შეკეთება.'
      ]]
    ]
  },
  en: {
    category: 'SEO',
    title: 'Why a website does not appear in Google — finding the cause step by step',
    description: 'Your site is not showing in Google? Indexing, technical barriers, content, competition and authority — how to find the real cause with Search Console, step by step.',
    intro: '“We have a website but it does not show in Google” describes five different problems: Google may not know the site at all, know it but not show it, show it on page 5, or show it only for the brand name. Each has a different fix. This article is a diagnostic sequence — from simple to complex.',
    sections: [
      ['Step 1: check indexing first', [
        'Type `site:yourdomain.ge` into Google. If the results are empty, the site is not in the index — and every other check is pointless. The most common causes: `Disallow: /` in robots.txt (often left over from development), a `noindex` meta tag, a new site Google has not discovered yet, a canonical tag pointing elsewhere, or content rendered only by JavaScript. Google Search Console’s URL Inspection tool tells you exactly whether Google knows a page and what blocked it. Connecting Search Console is the first step every site needs — do it today if you have not.'
      ]],
      ['Step 2: match the page to search intent', [
        'Being indexed does not mean appearing. A page must answer the same question the user asks. Search the phrase a customer would use and look at what type of pages fill the top 10: agency home pages, detailed service pages, articles or catalogues. If your page is a different type (for example a general home page mentioning the service in one sentence), Google will not consider it relevant. A general home page cannot replace a full page for a specific service — each important topic needs its own page.'
      ]],
      ['Step 3: review technical quality', [
        {list: [
          '**Mobile version** — Google evaluates pages by their mobile version; tiny text or overlapping elements on a phone are a problem',
          '**Speed** — Core Web Vitals in PageSpeed Insights; a slow site loses both visitors and positions',
          '**Duplicates** — `/page`, `/page/`, www and non-www, http and https must redirect to one version',
          '**Internal links** — a page no other page links to is an “orphan” for Google',
          '**Titles** — every page needs a unique title and one H1 describing its topic'
        ]}
      ]],
      ['Step 4: assess content completeness and trust', [
        'Google’s official guidance is people-first content: useful to the person searching, not merely a container for keywords. A 200-word generic text will not beat a competitor’s detailed page with prices, process, examples and answers. At the same time, artificial repetition and keyword lists do harm. Use real contact details, specific service terms and first-hand knowledge; unverified reviews and exaggerated promises weaken trust.'
      ]],
      ['Step 5: competition and authority', [
        'If everything is technically sound and the content is good but positions stay low, the reason is often authority: Google ranks sites higher when other trusted sites link to them and they have history. A new domain cannot match a ten-year-old site with hundreds of links on competitive phrases for months — and that is normal. The way forward is time and consistent work: starting with less competitive, specific phrases, useful content others link to naturally, local profiles (Google Business Profile) and real customer reviews. Bought links and “fast” methods put a site at risk.'
      ]],
      ['Step 6: measure the right outcome', [
        'In Search Console’s Performance report compare impressions, clicks, queries and pages. If impressions grow but clicks do not, the problem is the title and description; if there are no impressions either, the page does not answer the topic or lacks authority. For a business the final measure is a quality call or form, so connect organic visits to enquiries in analytics. One keyword’s position is not the whole picture.'
      ]],
      ['Allow for processing time', [
        'Google decides when to process pages and how to rank results — effects appear in weeks, sometimes months. Technical fixes are a necessary foundation; growth needs consistent work on content and authority. If you still cannot find the cause after these steps, an [SEO audit](/seo) does exactly this diagnosis with data — and if the site is technically outdated, [rebuilding](/website-development) is sometimes more rational than repair.'
      ]]
    ]
  },
  ru: {
    category: 'SEO',
    title: 'Почему сайт не виден в Google — поиск причины шаг за шагом',
    description: 'Сайт не виден в Google? Индексация, технические барьеры, контент, конкуренция и авторитет — как найти реальную причину с помощью Search Console, шаг за шагом.',
    intro: '«Сайт у нас есть, но в Google его не видно» — это описание пяти разных проблем: Google может вообще не знать сайт, знать, но не показывать, показывать на 5-й странице или только по названию бренда. У каждой — своё решение. Эта статья — последовательность диагностики, от простого к сложному.',
    sections: [
      ['Шаг 1: сначала проверьте индексацию', [
        'Введите в Google `site:вашдомен.ge`. Если результаты пусты, сайта нет в индексе — и все остальные проверки бессмысленны. Самые частые причины: `Disallow: /` в robots.txt (часто остаётся со времён разработки), мета-тег `noindex`, новый сайт, который Google ещё не обнаружил, canonical, указывающий на другой адрес, или контент, который загружается только JavaScript. Инструмент URL Inspection в Google Search Console точно скажет, знает ли Google страницу и что помешало. Подключение Search Console — первый шаг, нужный каждому сайту; если его ещё нет, сделайте это сегодня.'
      ]],
      ['Шаг 2: сопоставьте страницу с целью поиска', [
        'Наличие в индексе не означает показ. Страница должна отвечать на тот же вопрос, который задаёт пользователь. Введите фразу, которой клиент искал бы вашу услугу, и посмотрите, какие типы страниц в топ-10: главные страницы агентств, подробные страницы услуг, статьи или каталоги. Если ваша страница другого типа (например, общая главная, где услуга упомянута одним предложением), Google не сочтёт её релевантной. Общая главная не заменяет полноценную страницу конкретной услуги — каждой важной теме нужна своя страница.'
      ]],
      ['Шаг 3: проверьте техническое качество', [
        {list: [
          '**Мобильная версия** — Google оценивает страницы по мобильной версии; мелкий текст или наложение элементов на телефоне — проблема',
          '**Скорость** — Core Web Vitals в PageSpeed Insights; медленный сайт теряет и посетителей, и позиции',
          '**Дубли** — `/stranica`, `/stranica/`, www и без www, http и https должны перенаправляться на одну версию',
          '**Внутренние ссылки** — страница, на которую не ссылается ни одна другая, для Google «сирота»',
          '**Заголовки** — у каждой страницы должен быть уникальный title и один H1, описывающий тему'
        ]}
      ]],
      ['Шаг 4: оцените полноту и надёжность контента', [
        'Официальная рекомендация Google — контент «people-first»: полезный человеку, который ищет, а не просто контейнер для ключевых слов. Общий текст на 200 слов не обойдёт подробную страницу конкурента с ценами, процессом, примерами и ответами. В то же время искусственные повторы и списки ключевых слов вредят. Используйте реальные контакты, конкретные условия и собственные знания; непроверенные отзывы и преувеличенные обещания снижают доверие.'
      ]],
      ['Шаг 5: конкуренция и авторитет', [
        'Если технически всё в порядке и контент хорош, но позиция всё равно низкая, причина часто в авторитете: Google выше ставит сайты, на которые ссылаются другие надёжные сайты и у которых есть история. Новый домен месяцами не сравнится по конкурентным фразам с десятилетним сайтом с сотнями ссылок — и это нормально. Выход — время и последовательная работа: начать с менее конкурентных, конкретных фраз, полезный контент, на который ссылаются естественно, локальные профили (Google Business Profile) и отзывы реальных клиентов. Купленные ссылки и «быстрые» методы ставят сайт под угрозу.'
      ]],
      ['Шаг 6: измеряйте правильный результат', [
        'В отчёте Performance в Search Console сравните показы, клики, запросы и страницы. Если показы растут, а клики нет — проблема в заголовке и описании; если нет и показов — страница не отвечает теме или не хватает авторитета. Для бизнеса итоговая мера — качественный звонок или форма, поэтому свяжите органические визиты с заявками в аналитике. Позиция по одному слову не даёт полной картины.'
      ]],
      ['Учитывайте время обработки', [
        'Google сам решает, когда обработать страницу и как ранжировать результаты — эффект изменений виден через недели, иногда месяцы. Технические исправления — необходимая основа, а рост требует последовательной работы над контентом и авторитетом. Если после этих шагов причину найти не удаётся, [SEO-аудит](/seo) делает именно эту диагностику по данным — а если сайт технически устарел, иногда [пересобрать](/website-development) рациональнее, чем чинить.'
      ]]
    ]
  }
};
