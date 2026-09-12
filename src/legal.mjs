// Privacy policy and terms of use. Facts come from site.config.mjs; nothing here is a placeholder.
// Owner action items (registered legal entity, retention period) are tracked in docs/owner-todo.md
// and rendered only once config.legalName is filled in.
import config from '../site.config.mjs';

const operator = lang => {
  const name = config.legalName ? `${config.legalName} (webandapp)` : 'webandapp';
  return {ka: `${name}, ${config.city.ka}`, en: `${name}, ${config.city.en}`, ru: `${name}, ${config.city.ru}`}[lang];
};

export function legalSections(slug, lang) {
  const contact = `${config.email}; ${config.phoneDisplay}`;
  if (slug === 'privacy-policy') return {
    ka: [
      ['ვინ იღებს თქვენს მოთხოვნას', `მოთხოვნის მიმღებია ${operator('ka')}. საკონტაქტო ელფოსტა და ტელეფონი: ${contact}. ეს გვერდი აღწერს, რა მონაცემებს გვაწვდით საკონტაქტო ფორმით და როგორ ვიყენებთ მათ.`],
      ['რა მონაცემებს გვაწვდით', 'ფორმა ითხოვს სახელს, ტელეფონს, ელფოსტას, მომსახურების ტიპსა და პროექტის აღწერას. ბიუჯეტისა და სასურველი ვადის მითითება ნებაყოფლობითია. პროექტის აღწერაში არ შეიტანოთ პაროლები, საბანკო მონაცემები ან სხვა პირების კონფიდენციალური ინფორმაცია.'],
      ['როგორ იგზავნება ინფორმაცია', 'თუ პირდაპირი გაგზავნა ჩართულია, ფორმა მონაცემებს გადასცემს ჩვენს სერვერს და დაკავშირებულ საფოსტო სერვისს, საიდანაც წერილი ჩვენს ელფოსტაზე მოდის. სხვა შემთხვევაში მზადდება წერილი თქვენს საფოსტო პროგრამაში და თქვენ თავად აგზავნით მას. ფორმის ტექსტი ბრაუზერის მუდმივ საცავში არ ინახება.'],
      ['რა მიზნით გამოიყენება', 'მონაცემები გამოიყენება მხოლოდ თქვენს კითხვაზე პასუხისთვის, საჭიროებების დაზუსტებისა და შეთავაზების მომზადებისთვის. ფორმაში მონიშნული თანხმობა სარეკლამო შეტყობინებების გამოწერა არ არის, და მონაცემებს მესამე პირებს მარკეტინგული მიზნით არ გადავცემთ.'],
      ['რამდენ ხანს ინახება', 'მოთხოვნის წერილები ინახება იმ ვადით, რაც პასუხისთვის, შეთავაზების მომზადებისა და შემდგომი თანამშრომლობისთვისაა საჭირო. ნებისმიერ დროს შეგიძლიათ მოითხოვოთ თქვენი მოთხოვნის წაშლა მითითებულ ელფოსტაზე მოწერით.'],
      ['ანალიტიკა და ქუქიები', 'ანალიტიკის სერვისები (Google Analytics) იტვირთება მხოლოდ თქვენი თანხმობის შემდეგ, რომელსაც საიტზე გამოჩენილი პანელით აძლევთ; არჩევანი თქვენს ბრაუზერში ინახება და ნებისმიერ დროს შეგიძლიათ შეცვალოთ გვერდის ბოლოს „ქუქიების პარამეტრების" ღილაკით. ანალიტიკურ მოვლენებს არ გადაეცემა სახელი, ტელეფონი, ელფოსტა ან პროექტის აღწერა. უარის შემთხვევაშიც საიტი სრულად მუშაობს.'],
      ['მონაცემებზე დაკავშირება', 'თქვენს მონაცემებთან დაკავშირებული კითხვებისთვის, ცვლილების ან წაშლის მოთხოვნისთვის მოგვწერეთ მითითებულ ელფოსტაზე. მოთხოვნის დამუშავებისას შესაძლოა საჭირო გახდეს განმცხადებლის ვინაობის დადასტურება.']
    ],
    en: [
      ['Who receives your enquiry', `The recipient is ${operator('en')}. Contact email and phone: ${contact}. This page describes which details you provide through the contact form and how we use them.`],
      ['Information you provide', 'The form requests your name, phone, email, service and project description. Budget and timing are optional. Do not include passwords, banking details or confidential information about other people.'],
      ['How information is sent', 'When direct delivery is enabled, the form sends the information to our server and the configured mail provider, which delivers it to our inbox. Otherwise it prepares an email in your mail app that you send yourself. Form text is not saved in persistent browser storage.'],
      ['Purpose', 'We use the information only to answer your request, clarify requirements and prepare a quote. Form consent does not subscribe you to marketing messages, and we do not pass your details to third parties for marketing.'],
      ['Retention', 'Enquiry emails are kept for as long as needed to respond, prepare a quote and support any subsequent collaboration. You can request deletion of your enquiry at any time by writing to the email above.'],
      ['Analytics and cookies', 'Analytics (Google Analytics) loads only after you consent through the panel shown on the site; your choice is stored in your browser and can be changed at any time with the “Cookie preferences” button in the footer. Names, phone numbers, email addresses and project text are never sent as analytics events. The site works fully if you decline.'],
      ['Contact about your data', 'Email us for questions or requests to correct or delete your information. We may need to verify your identity to process a request.']
    ],
    ru: [
      ['Кто получает запрос', `Получатель — ${operator('ru')}. Контактная почта и телефон: ${contact}. Эта страница описывает, какие данные вы предоставляете через форму и как мы их используем.`],
      ['Какие данные вы предоставляете', 'Форма запрашивает имя, телефон, почту, услугу и описание проекта. Бюджет и срок необязательны. Не указывайте пароли, банковские сведения и конфиденциальные данные других людей.'],
      ['Как передаются сведения', 'При включённой прямой отправке данные поступают на наш сервер и подключённому почтовому провайдеру, который доставляет письмо на нашу почту. Иначе готовится письмо в вашей почтовой программе, которое вы отправляете сами. Текст формы не сохраняется в постоянном хранилище браузера.'],
      ['Цель обработки', 'Данные используются только для ответа, уточнения задачи и подготовки предложения. Согласие в форме не является подпиской на рекламу, и мы не передаём данные третьим лицам в маркетинговых целях.'],
      ['Срок хранения', 'Письма с запросами хранятся столько, сколько нужно для ответа, подготовки предложения и последующего сотрудничества. Вы можете в любой момент запросить удаление запроса, написав на указанную почту.'],
      ['Аналитика и cookies', 'Аналитика (Google Analytics) загружается только после вашего согласия через панель на сайте; выбор хранится в браузере и его можно изменить в любой момент кнопкой «Настройки cookies» внизу страницы. Имена, телефоны, почта и текст проекта не передаются в события аналитики. При отказе сайт работает полностью.'],
      ['Обращения о данных', 'По вопросам исправления или удаления данных напишите на указанную почту. Для обработки запроса может потребоваться подтверждение личности.']
    ]
  }[lang];
  return {
    ka: [
      ['საიტის დანიშნულება', 'საიტი წარმოადგენს webandapp-ის მომსახურების ინფორმაციასა და შეთავაზების მოთხოვნის საშუალებას. გამოქვეყნებული აღწერები და საწყისი ფასები საორიენტაციოა და ინდივიდუალური ხელშეკრულება არ არის.'],
      ['პროექტის შეთანხმება', 'ფუნქციები, ფასი, ვადები, გადახდის ეტაპები, ცვლილებების წესი და გადასაცემი მასალები წერილობით თანხმდება სამუშაოს დაწყებამდე. ფორმის გაგზავნა შეკვეთას ან გადახდის ვალდებულებას არ ქმნის.'],
      ['გარე სერვისები და წვდომები', 'დომენი, ჰოსტინგი, ლიცენზიები და პლატფორმის ანგარიშები (მათ შორის App Store, Google Play, გადახდის პროვაიდერები) შესაბამისი პროვაიდერების პირობებით გამოიყენება. მათი მფლობელობა, საფასური და წვდომები პროექტის შეთანხმებაში განისაზღვრება; რეკომენდებულია, ისინი დამკვეთის სახელზე იყოს.'],
      ['ინტელექტუალური საკუთრება', 'დამკვეთი უნდა ფლობდეს მის მიერ მოწოდებული ტექსტის, ფოტოსა და სხვა მასალის გამოყენების უფლებას. კოდის, დიზაინისა და სხვა შედეგების გადაცემის პირობები ინდივიდუალურად, წერილობით თანხმდება.'],
      ['SEO და მესამე მხარის გადაწყვეტილებები', 'Google-ის პოზიცია, აპლიკაციების მაღაზიების გადაწყვეტილება, ბანკების დამტკიცება და გარე პროვაიდერების უწყვეტობა webandapp-ის კონტროლს არ ექვემდებარება. შეთანხმება აღწერს სამუშაოს რეალურ ფარგლებს და არა ამ მხარეების შედეგებს.'],
      ['პასუხისმგებლობა და კონტაქტი', `საიტზე ინფორმაცია რეგულარულად ახლდება, თუმცა უზუსტობის აღმოჩენისას მოგვწერეთ: ${config.email}. მოქმედი შეთავაზების პირობები ყოველთვის წერილობით შეთანხმებულ დოკუმენტში იწერება.`]
    ],
    en: [
      ['Purpose', 'This website presents webandapp services and allows requests for a quote. Published descriptions and starting prices are indicative and do not constitute an individual service contract.'],
      ['Project agreement', 'Features, pricing, timing, payment stages, change rules and deliverables are agreed in writing before work begins. Submitting a form does not create an order or a payment obligation.'],
      ['External services and access', 'Domains, hosting, licences and platform accounts (including App Store, Google Play and payment providers) follow their respective terms. Ownership, costs and access are defined in the project agreement; we recommend they are held in the client’s name.'],
      ['Intellectual property', 'The client must have permission to use supplied text, images and other materials. Transfer of code, design and other deliverables is agreed individually and in writing.'],
      ['SEO and third-party decisions', 'Google rankings, app-store decisions, bank approvals and the continuity of external providers are outside webandapp’s control. The agreement describes the actual scope of work, not the outcomes of those parties.'],
      ['Liability and contact', `Information on this site is updated regularly; if you notice an inaccuracy, write to ${config.email}. The terms of a concrete offer are always stated in a written, agreed document.`]
    ],
    ru: [
      ['Назначение сайта', 'Сайт представляет услуги webandapp и позволяет запросить предложение. Опубликованные описания и стартовые цены ориентировочны и не являются индивидуальным договором.'],
      ['Соглашение о проекте', 'Функции, цена, сроки, этапы оплаты, порядок изменений и передаваемые материалы согласовываются письменно до начала работ. Отправка формы не создаёт заказа или обязательства оплаты.'],
      ['Внешние сервисы и доступы', 'Домен, хостинг, лицензии и аккаунты платформ (включая App Store, Google Play и платёжных провайдеров) используются на условиях соответствующих провайдеров. Их владение, стоимость и доступы определяются в соглашении о проекте; рекомендуем оформлять их на имя заказчика.'],
      ['Интеллектуальная собственность', 'Заказчик должен обладать правом на использование предоставленных текстов, изображений и других материалов. Условия передачи кода, дизайна и других результатов согласовываются индивидуально и письменно.'],
      ['SEO и решения третьих сторон', 'Позиции в Google, решения магазинов приложений, одобрение банков и непрерывность работы внешних провайдеров не контролируются webandapp. Соглашение описывает реальный объём работ, а не результаты этих сторон.'],
      ['Ответственность и контакты', `Информация на сайте регулярно обновляется; если вы заметили неточность, напишите на ${config.email}. Условия конкретного предложения всегда фиксируются в письменно согласованном документе.`]
    ]
  }[lang];
}
