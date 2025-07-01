// Multi-tab functionality
const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active classes and ARIA states
    tabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    contents.forEach(c => c.classList.remove('active'));

    // Activate clicked tab and content
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    const tabId = tab.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});

// Language data
const translations = {
  en: {
    name: "Azat Ruslan",
    subtitle: "Recent ELD Student at High School",
    "intro-title": "Introduction",
    "intro-text": "Hello! I'm Azat Ruslan, a recent ELD student at high school...",
    "coding-item1": "Completed Python projects including a calculator and a web scraper",
    "coding-item2": "Did 20+ problems on Leetcode using Python and C++",
    "coding-item3": "This website. This website is about me.",
    "electronics-title": "Electronics / Tinkercad",
    "electronics-item1": "Since my parents cannot afford expensive Arduino kits...",
    "electronics-item2": "Built basic Arduino projects with LCD and Digital Thermometer...",
    "electronics-item3": "Built Bluetooth controlled car on my Tinkercad.",
    "selfstudy-title": "Self-Studying",
    "selfstudy-item1": "I self studied C++, C#, Python, Kotlin, and Javascript...",
    "selfstudy-item2": "I self studied Calculus 1 through Calculus 3...",
    "selfstudy-item3": "Practiced coding challenges regularly",
    "selfstudy-item4": "I am currently self studying Machine Learning and its algorithms.",
    "work-title": "Work Experience",
    "work-item1": "I just do some DoorDash with my mom.",
    "club-title": "Club Activities",
    "club-item1": "Member of Robotics Club",
    "club-item2": "Participated in coding competitions and hackathons",
    "club-item3": "Organized tech workshops for fellow students",
    "club-item4": "Founded a club called 'Electric and Electronics Club'...",
    "lang-label": "Language:"
  },
  mn: {
    name: "Азат Руслан",
    subtitle: "Ахлах сургуульд суралцдаг ELD-ийн төгсөгч",
    "intro-title": "Танилцуулга",
    "intro-text": "Сайн байна уу! Би Азат Руслан...",
    "coding-title": "Програмчлалын Амжилтууд",
    "coding-item1": "Python хэлээр калькулятор, вэб скрэпер зэрэг төслүүд...",
    "coding-item2": "Python болон C++ ашиглан Leetcode дээр 20+ бодлого...",
    "coding-item3": "Энэ вэбсайт нь миний тухай бүтээл юм",
    "electronics-title": "Электроник / Tinkercad",
    "electronics-item1": "Манай гэр бүл үнэтэй Arduino иж бүрдэл авч чаддаггүй...",
    "electronics-item2": "LCD болон дижитал термометр ашигласан төслүүд...",
    "electronics-item3": "Tinkercad дээр Bluetooth удирдлагатай машин бүтээсэн",
    "selfstudy-title": "Өөрийгөө Судлах",
    "selfstudy-item1": "Би C++, C#, Python, Kotlin, Javascript хэлийг судалсан...",
    "selfstudy-item2": "Би тооны ухааны 1-ээс 3 хүртэлх курсүүдийг судалсан...",
    "selfstudy-item3": "Програмчлалын дасгалуудыг тогтмол хийдэг",
    "selfstudy-item4": "Би одоогоор машин сургалт судалж байна",
    "work-title": "Ажлын Туршлага",
    "work-item1": "Би ээжтэйгээ хамт DoorDash хийдэг",
    "club-title": "Клубын Үйл Ажиллагаа",
    "club-item1": "Роботын клубын гишүүн",
    "club-item2": "Програмчлалын тэмцээн, хакатон оролцсон",
    "club-item3": "Сургуулийнхаа TSA клубыг байгуулсан",
    "club-item4": "“Цахилгаан ба Электроникийн Клуб”-ыг үүсгэн байгуулсан",
    "lang-label": "Хэл:"
  },
  kk: {
    name: "Азат Руслан",
    subtitle: "Жақында ELD бағдарламасын бітірген оқушы",
    "intro-title": "Кіріспе",
    "intro-text": "Сәлем! Мен Азат Руслан...",
    "coding-title": "Бағдарламалау Жетістіктері",
    "coding-item1": "Python тілінде калькулятор және веб-скрепер жобаларын жасадым",
    "coding-item2": "Python және C++ арқылы LeetCode сайтында 20+ есеп шештім",
    "coding-item3": "Бұл веб-сайт — өзім жайлы жеке жобам",
    "electronics-title": "Электроника / Tinkercad",
    "electronics-item1": "Arduino жобаларын негізінен Tinkercad-та жасаймын",
    "electronics-item2": "Tinkercad-та LCD және термометрмен Arduino жобаларын жасадым",
    "electronics-item3": "Bluetooth арқылы басқарылатын көлік жобаладым",
    "selfstudy-title": "Өзіндік Оқу",
    "selfstudy-item1": "Мен C++, C#, Python, Kotlin және Javascript тілдерін үйрендім",
    "selfstudy-item2": "Calculus 1-ден 3-ке дейінгі курстарды оқыдым",
    "selfstudy-item3": "Бағдарламалау тапсырмаларын үнемі орындап отырамын",
    "selfstudy-item4": "Машиналық оқыту мен алгоритмдерін үйреніп жатырмын",
    "work-title": "Жұмыс Тәжірибесі",
    "work-item1": "Анаммен бірге DoorDash істеймін",
    "club-title": "Клуб Жұмыстары",
    "club-item1": "Робототехника клубының мүшесі",
    "club-item2": "Бағдарламалау жарыстарына қатыстым",
    "club-item3": "Мектепте TSA клубын құрдым",
    "club-item4": "«Электр және Электроника Клубын» ашып, сабақ беріп жүрмін",
    "lang-label": "Тілі:"
  }
};

const langSelect = document.getElementById('lang-select');

langSelect.addEventListener('change', () => {
  const selectedLang = langSelect.value;
  translatePage(selectedLang);
});

function translatePage(lang) {
  const langData = translations[lang];
  for (const key in langData) {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = langData[key];
    }
  }
}
