/* =========================================================
   한국사이상현상연구원 · 연구원 포털
   ---------------------------------------------------------
   사이트의 모든 내용은 아래 "설정" 부분에서 고칠 수 있습니다.
   도서 정보, 서점 링크, 연구원, 테스트 링크, 플레이리스트 주소,
   지침서 이미지를 실제 내용으로 바꿔 사용하세요.
   ========================================================= */

/* ---------------------------------------------------------
   1. 설정: 도서 정보
      cover: 표지 jpg 파일을 index.html과 같은 위치에 올리고 파일 이름을 적어 주세요.
             파일을 찾지 못하면 기존에 그려진 표지가 대신 표시됩니다.
   --------------------------------------------------------- */
const BOOK = {
  title: "한국사 이상현상 연구원",
  cover: "cover.jpg",
  description:
    "국가가 '사적'이라는 이름으로 보존한 장소에서, 정작 역사에 남지 못한 사람들의 목소리가 들려오기 시작한다. 궁궐과 고분, 사찰과 종갓집에서 발생하는 이상현상을 추적하는 비밀 기관 '한국사 이상현상 연구원'의 첫 번째 탐사 기록",
};

/* 서점 링크: url을 실제 상품 페이지 주소로 바꾸면 더 좋습니다.
   지금은 도서 제목으로 검색한 결과 페이지로 연결됩니다. */
const q = encodeURIComponent(BOOK.title);
const STORES = [
  { name: "기록 열람", url: `https://product.kyobobook.co.kr/detail/S000220693844` },
];

/* ---------------------------------------------------------
   1-1. 설정: 연구원 연혁 (첫 화면에 항상 표시되는 설명문)
      따옴표 하나가 문단 하나입니다. 문단 끝에는 쉼표(,)를 붙여 주세요.
      문단을 늘리려면 한 줄을 복사해 붙여 넣으면 됩니다.
      문장 안에 큰따옴표(")를 쓰려면 \" 처럼 앞에 역슬래시를 붙이거나 “ ” 를 쓰세요.
   --------------------------------------------------------- */
const HISTORY = [
  "본 연구원은 2024년 2월 '이상현상 처리부'라는 명칭으로 설립되었습니다. 당시에는 위험성을 고려하여 군인 및 특수요원이 탐사에 투입되고, 역사 연구자들은 자문을 맡는 형태였습니다. 그러나 이상현상 및 그 개체들이 실제 역사와의 관련도가 높은 바, 역사적 지식이 풍부한 자가 파훼법을 찾아내 생환할 가능성이 높은 것으로 확인되었습니다.",
  "이후 2024년 10월부터 역사 연구자들이 탐사를, 군인 및 특수요원 출신들이 탐사 전후 처리와 현장 관리를 맡는 '한국사 이상현상 연구원'으로 개편되었습니다. 연구원 초기에는 전문성을 고려해 대학원생 이상의 학력자들로 탐사팀을 구성했습니다. 그러나 학구열이 지나친 이들이 이상 개체를 실제 역사적 인물로 착각, 무리하게 접촉하다 사망하는 일이 다수 발생했습니다. 현재는 역사학과 학부생 중에서도 그 지적 소양이 인정되는 경우 채용해오고 있으며, 현장과 학술이 균형을 이루는 차세대 탐사 인재를 선발·육성하고 있습니다.",
];

/* ---------------------------------------------------------
   1-2. 설정: 조직도 (첫 화면에 항상 표시)
      top은 맨 위 칸에 들어갈 기관 이름입니다.
      부서마다 name(부서 이름), desc(설명)를 적고,
      하위 팀이 있으면 teams에 { name: "팀 이름", desc: "설명" } 형식으로 넣어 주세요.
      하위 팀이 없으면 teams 줄은 지워도 됩니다.
   --------------------------------------------------------- */
const ORG = {
  top: "한국사 이상현상 연구원",
  departments: [
    {
      name: "탐사본부",
      desc: "이상 현장에 직접 투입되어 정보 수집과 지침서 작성, 실종자 구출을 담당합니다.",
    },
    {
      name: "관리본부",
      desc: "이상 현장으로 진입 가능한 지역 일대를 순찰·관리합니다. 주로 탐사원들의 이상 현장 진입을 돕고, 귀환 시 필요에 따라 의료 기관으로의 즉각적인 이송 및 실종자 신변 인계를 담당합니다.",
    },
    {
      name: "연구본부",
      desc: "이상현상에서 수집한 정보들을 연구합니다.",
      teams: [
        { name: "사료연구팀", desc: "실제 역사적 사실 중 이상현상과 관련 있는 부분을 연구합니다." },
        { name: "현상연구팀", desc: "이상현상 자체를 연구하며, 탐사 도중 특이 사항을 분석합니다." },
      ],
    },
  ],
};

/* ---------------------------------------------------------
   2. 설정: 메인 메뉴 항목과 아이콘
      icon 값을 아래 7번 아이콘 모음의 이름(book, eye, key 등)으로 바꾸면 아이콘이 바뀝니다.
   --------------------------------------------------------- */
const MENU = [
  { id: "book", name: "기록 열람", desc: "한국사 이상현상 연구원의 첫 번째 탐사 기록을 열람합니다.", href: "#book", icon: "book" },
  { id: "researchers", name: "탐사원 프로필", desc: "주요 탐사원들의 프로필을 열람합니다.", href: "#researchers", icon: "idcard" },
  { id: "test", name: "탐사원 적성 평가", desc: "입사를 희망하시는 분은 먼저 평가를 진행해 주세요.", href: "#test", icon: "checklist" },
  { id: "playlist", name: "오디오 아카이브실", desc: "탐사 시 청취를 권장합니다.", href: "#playlist", icon: "headphones" },
  { id: "preview", name: "지침서 (※일부 공개)", desc: "생존을 위해 지침서 정독을 권장합니다.", href: "#preview", icon: "document" },
];

/* ---------------------------------------------------------
   3. 설정: 탐사원 프로필(캐릭터)
      인물을 추가하려면 { ... }, 한 덩어리를 복사해 붙여 넣고 내용을 바꾸세요.
      id는 인물마다 서로 다른 영문이어야 합니다.
      fields는 [항목 이름, 내용] 형식으로 원하는 만큼 넣을 수 있습니다.
      secret: "..." 을 넣으면 '비고' 칸이 검열 막대로 가려진 채 표시됩니다.
   --------------------------------------------------------- */
const RESEARCHERS = [
  {
    id: "seohee",
    name: "최서희",
    role: "탐사본부, 탐사본부장",
    code: "AR-07-001",
    fields: [
      ["나이", "53세"],
      ["좋아하는 것", "탐사원들, 지철과의 밤, 음주"],
      ["싫어하는 것", "뭣도 없이 깝치는 놈, 맨스플레인"],
      ["꿈", "탐사원들이 안전하게 탐사를 나갈 수 있게 지키는 것"],
    ],
    quote: "무엇보다 우리에겐 아직 남은 사람들이 있고, 지켜야 할 게 있으니까.",
    type: {
      title: "기록형 연구원",
      summary: "혼란 속에서도 순서를 세우는 사람",
      body: [
        "당신은 위기일수록 차분해집니다. 무엇이 일어났는지, 다음에 무엇을 해야 하는지 정리하는 능력이 뛰어나 팀이 흔들릴 때 기준점이 되어 줍니다.",
        "다만 모든 것을 절차 안에 넣으려다 스스로를 몰아붙이기 쉽습니다. 가끔은 기록을 잠시 내려놓아도 괜찮습니다.",
      ],
      traits: ["침착함", "책임감", "꼼꼼한 기록", "원칙"],
    },
  },
  {
    id: "jeechul",
    name: "강지철",
    role: "관리본부, 관리본부장",
    code: "AR-07-014",
    fields: [
      ["나이", "49세"],
      ["좋아하는 것", "일, 아버지가 주신 지포라이터, 뉴스 시청"],
      ["싫어하는 것", "부조리한 윗선, 탐욕, 무책임, 자제력을 잃는 것"],
      ["꿈", "관리본부장의 소임을 다하는 것, 자기 사람들을 끝까지 책임지고 지키는 것"],
    ],
    quote: "날 죽여요. 1초도 망설이지 말고. 알았죠?",
    type: {
      title: "돌파형 연구원",
      summary: "망설이는 동안 먼저 문을 여는 사람",
      body: [
        "당신은 상황을 오래 재기보다 직접 부딪혀 해결합니다. 위험한 순간에 누구보다 빨리 움직이고, 동료를 혼자 두지 않는 것을 가장 중요하게 생각합니다.",
        "빠른 판단이 강점이지만, 가끔은 한 걸음 물러서서 전체를 보는 시간이 당신을 더 멀리 데려다줄 거예요.",
      ],
      traits: ["행동력", "용기", "동료애", "직감"],
    },
  },
  {
    id: "jeeyul",
    name: "신지율",
    role: "탐사1팀, 탐사원",
    code: "AR-07-022",
    fields: [
      ["나이", "28세"],
      ["좋아하는 것", "독서, 사극 감상, 퇴근 후 1팀 동료들과 밥 먹기"],
      ["싫어하는 것", "잠드는 것, 상처 소독, 고증 말아먹은 사극"],
      ["꿈", "더이상 누군가를 눈앞에서 잃지 않는 것"]
    ],
    quote: "저는 갈 거예요. 저 자신을 위해서요. 그리고 연구원을 위해서요.",
    type: {
      title: "분석형 연구원",
      summary: "모두가 두려워할 때 숫자를 세는 사람",
      body: [
        "당신은 이해되지 않는 것을 그대로 두지 못합니다. 흩어진 단서에서 규칙을 찾아내고, 감정보다 근거로 판단하려 합니다.",
        "의심은 좋은 연구의 출발점입니다. 하지만 아직 설명할 수 없는 것도 존재할 수 있다는 여지를 남겨 두면, 더 많은 것이 보일지도 모릅니다.",
      ],
      traits: ["논리", "호기심", "신중함", "집요함"],
    },
  },
  {
    id: "yena",
    name: "서예나",
    role: "탐사1팀, 신규 탐사원",
    code: "AR-07-031",
    fields: [
      ["나이", "23세"],
      ["좋아하는 것", "엄마, 박물관 굿즈샵 쇼핑, 유적지 방문"],
      ["싫어하는 것", "딱히 없음"],
      ["꿈", "엄마를 다시 찾는 것, 지율 언니를 비롯한 탐사1팀 사람들과 지금처럼 함께하는 것"],
    ],
    quote: "전 꼭 엄마를 구할 거예요.",
    type: {
      title: "교감형 연구원",
      summary: "낯선 존재에게도 먼저 말을 거는 사람",
      body: [
        "당신은 상대가 무엇을 느끼는지 잘 알아차립니다. 사람이든 현상이든, 겉으로 드러난 것 너머의 이유를 궁금해하고 이해하려 합니다.",
        "그 다정함은 팀에 없던 길을 열어 줍니다. 다만 다른 존재의 감정에 너무 깊이 잠기지 않도록, 스스로를 지키는 선도 함께 그어 두세요.",
      ],
      traits: ["공감", "관찰력", "용기 있는 다정함", "직관"],
    },
  },
  {
    id: "taesung",
    name: "지태성",
    role: "탐사 1팀, 팀장",
    code: "AR-07-040",
    fields: [
      ["나이", "30세"],
      ["좋아하는 것", "가족, 부모님의 연락, 탐사1팀 사람들, 운동"],
      ["싫어하는 것", "빚 독촉, 부모님 연락이 오래 끊기는 것, 태오가 탐사에서 위험한 짓 하는 것"],
      ["꿈", "다시 가족들이 다 함께 행복하게 사는 것"],
    ],
    quote: "그래요, 엄마. 제가... 태오 꼭 지킬 테니까, 걱정 마세요. 무슨 일이 있어도.",
  },
  {
    id: "taeo",
    name: "지태오",
    role: "탐사 1팀, 탐사원",
    code: "AR-07-041",
    fields: [
      ["나이", "24세"],
      ["좋아하는 것", "가족, 형 놀리기, 탐사1팀 사람들한테 까불거리기"],
      ["싫어하는 것", "빚 독촉, 밤에 문 크게 두드리는 소리"],
      ["꿈", "형과 같음"],
    ],
    quote: "저기 근데요, 친애하는 형님, 지금이라도 이 미친 짓 그만두지 않으시겠어요?",
  },
];

/* ---------------------------------------------------------
   4. 설정: 탐사원 적성 평가 (외부 테스트 링크)
      url에 테스트 주소를 넣으면 '평가 시작하기' 버튼이 활성화됩니다.
      예: url: "https://example.com/my-test",
   --------------------------------------------------------- */
const TEST = {
  url: "https://smore.im/quiz/qGpEe5z6OJ",
  intro: "입사를 희망하시는 분은 먼저 적성 평가를 진행해 주세요. 평가 결과에 따라 배정될 부서가 결정됩니다.",
  button: "평가 시작하기",
};

/* ---------------------------------------------------------
   5. 설정: 플레이리스트
      url에 실제 플레이리스트 주소를 넣으면 버튼이 활성화됩니다.
   --------------------------------------------------------- */
const PLAYLISTS = [
  {
    time: "탐사 전 필수 청취",
    name: "오디오 아카이브",
    desc: "(이어폰 착용 권장) 탐사원들이 탐사 시 유용하게 사용한 오디오 플레이리스트입니다.",
    links: [
      { platform: "YouTube Music", url: "https://youtube.com/playlist?list=PLP4PFc0hKG-4&si=g7LLlKf3wD5hP83O" },

    ],
  },
];

/* ---------------------------------------------------------
   6. 설정: 지침서 (※일부 공개) 이미지
      jpg 파일을 index.html과 같은 위치에 올리고, 보여 줄 순서대로 파일 이름을 적어 주세요.
      파일 이름은 대소문자와 확장자까지 똑같아야 합니다. (guide-2.jpg ≠ Guide-2.JPG)
      장수를 늘리려면 한 줄을 복사해 붙여 넣고 파일 이름만 바꾸세요.
      아직 올리지 않은 파일은 자동으로 건너뛰므로, 미리 적어 두어도 괜찮습니다.
      2장 이상이 표시되면 '이전 쪽/다음 쪽' 버튼이 나타납니다.
   --------------------------------------------------------- */
const GUIDE_IMAGES = [
  { src: "guide.JPG" },
  { src: "guide-2.JPG" },
  { src: "guide-3.JPG" },
  { src: "guide-4.JPG" },
  { src: "guide-5.JPG" },
  { src: "guide-6.JPG" },
];

/* ---------------------------------------------------------
   7. 아이콘 모음 (선택 창에 표시되는 목록)
   --------------------------------------------------------- */
const ICONS = {
  book: { label: "책", svg: '<path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z"/><path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z"/>' },
  cart: { label: "장바구니", svg: '<path d="M2.5 4h2.3l2.4 11h11.1l2-8H6"/><circle cx="9" cy="19.5" r="1.3"/><circle cx="17" cy="19.5" r="1.3"/>' },
  bag: { label: "쇼핑백", svg: '<path d="M5 8h14l-1 13H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>' },
  idcard: { label: "신분증", svg: '<rect x="3" y="5" width="18" height="14"/><circle cx="9" cy="11" r="2.2"/><path d="M5.5 16.5c.8-1.8 2-2.5 3.5-2.5s2.7.7 3.5 2.5M15 10h3M15 13h3"/>' },
  users: { label: "인물", svg: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c.8-3.6 3-5.5 6-5.5s5.2 1.9 6 5.5M16 5a3 3 0 0 1 0 6M18 14.8c1.7.7 2.7 2.4 3 5.2"/>' },
  eye: { label: "관측", svg: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>' },
  checklist: { label: "평가지", svg: '<rect x="5" y="3" width="14" height="18"/><path d="M8 8l1.5 1.5L12 7M8 14l1.5 1.5L12 13M14.5 8.5h2M14.5 14.5h2"/>' },
  question: { label: "질문", svg: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7v.5M12 17.2v.6"/>' },
  flask: { label: "실험", svg: '<path d="M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3M7 15h10"/>' },
  radar: { label: "탐지", svg: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12l6-6"/>' },
  music: { label: "음표", svg: '<path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>' },
  headphones: { label: "헤드폰", svg: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="7"/><rect x="17" y="14" width="4" height="7"/>' },
  wave: { label: "음파", svg: '<path d="M3 11v2M7 8v8M11 4v16M15 7v10M19 10v4"/>' },
  document: { label: "문서", svg: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4M9 12h7M9 16h7"/>' },
  classified: { label: "기밀", svg: '<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4"/><rect x="9.5" y="13" width="6" height="5"/><path d="M11 13v-1.5a1.5 1.5 0 0 1 3 0V13"/>' },
  alert: { label: "경고", svg: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 17.3v.6"/>' },
  compass: { label: "나침반", svg: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>' },
  key: { label: "열쇠", svg: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14.5 8.5l2 2"/>' },
  flashlight: { label: "손전등", svg: '<path d="M8 3h8v5l-2 3v10h-4V11L8 8z"/><path d="M12 14v2"/>' },
  door: { label: "출입문", svg: '<path d="M5 21V3h11v18M3 21h18"/><path d="M13 12h.01"/>' },
};

function iconSvg(key) {
  const icon = ICONS[key] || ICONS.document;
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true">${icon.svg}</svg>`;
}

const ARROW_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>';

/* =========================================================
   이하 동작 코드
   ========================================================= */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ---------- 알림 ---------- */
let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

/* ---------- 모바일 메뉴 ---------- */
function initNav() {
  const toggle = $(".nav-toggle");
  const nav = $("#site-nav");
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
  $$("a", nav).forEach((a) =>
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    })
  );
}

/* ---------- 검열 막대 ---------- */
function bindRedactions(root = document) {
  $$(".redact:not([data-bound])", root).forEach((el) => {
    el.dataset.bound = "true";
    el.addEventListener("click", () => {
      if (el.classList.contains("is-revealed")) return;
      el.classList.add("is-revealed");
      el.setAttribute("aria-label", `공개된 내용: ${el.dataset.reveal}`);
    });
  });
}

/* ---------- 메인 메뉴 ---------- */
function renderMenu() {
  $("#menu-list").innerHTML = MENU.map(
    (item) => `
      <li class="menu-item">
        <span class="menu-icon" data-icon-slot="${item.id}"></span>
        <a class="menu-link" href="${item.href}">
          <span class="menu-name">${item.name}</span>
          <span class="menu-desc">${item.desc}</span>
        </a>
      </li>`
  ).join("");
  applyIcons();
}

function applyIcons() {
  $$("[data-icon-slot]").forEach((slot) => {
    const item = MENU.find((m) => m.id === slot.dataset.iconSlot);
    slot.innerHTML = iconSvg(item && item.icon);
  });
}

/* ---------- 연구원 연혁 ---------- */
function renderHistory() {
  $("#history-body").innerHTML = HISTORY.map((text) => `<p>${text}</p>`).join("");
}

/* ---------- 조직도 ---------- */
function renderOrg() {
  const depts = ORG.departments
    .map(
      (d) => `
      <article class="org-dept">
        <h3 class="org-name">${d.name}</h3>
        <p class="org-desc">${d.desc}</p>
        ${
          d.teams && d.teams.length
            ? `<ul class="org-teams">${d.teams
                .map((t) => `<li><span class="org-team-name">${t.name}</span><span class="org-team-desc">${t.desc}</span></li>`)
                .join("")}</ul>`
            : ""
        }
      </article>`
    )
    .join("");
  $("#org-chart").innerHTML = `
    <div class="org-top">${ORG.top}</div>
    <div class="org-depts" style="--org-cols:${ORG.departments.length}">${depts}</div>`;
}

/* ---------- 도서 ---------- */
function renderBook() {
  $("#cover-title").textContent = BOOK.title;
  $("#cover-author").textContent = BOOK.author || "";
  $("#book-name").textContent = BOOK.author ? `『${BOOK.title}』 ${BOOK.author} 지음` : `『${BOOK.title}』`;
  $("#book-desc").textContent = BOOK.description;
  $("#book-meta").innerHTML = (BOOK.meta || []).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("");
  renderCoverImage();
  $("#store-list").innerHTML = STORES.map(
    (s) => `
      <li><a class="store-link" href="${s.url}" target="_blank" rel="noopener noreferrer">
        ${s.name}${ARROW_SVG}<span class="sr-only">(새 창에서 열림)</span>
      </a></li>`
  ).join("");
}

/* 실제 표지 이미지: 불러오기에 성공했을 때만 그려진 표지와 바꿉니다 */
function renderCoverImage() {
  if (!BOOK.cover) return;
  const cover = $(".book-cover");
  const img = new Image();
  img.className = "cover-img";
  img.alt = `『${BOOK.title}』 표지`;
  img.onload = () => {
    cover.replaceChildren(img);
    cover.classList.add("has-image");
    cover.removeAttribute("aria-hidden");
  };
  img.onerror = () => {
    console.warn(`표지 이미지를 불러오지 못했습니다: ${BOOK.cover} (파일 이름과 위치를 확인하세요)`);
  };
  img.src = BOOK.cover;
}

/* ---------- 연구원 명부 ---------- */
const PORTRAIT_SVG = `
  <svg viewBox="0 0 120 160" aria-hidden="true">
    <defs>
      <pattern id="scan" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect width="4" height="2" fill="currentColor" opacity=".25"/>
      </pattern>
    </defs>
    <circle cx="60" cy="62" r="24" fill="currentColor"/>
    <path d="M18 160c4-36 20-54 42-54s38 18 42 54z" fill="currentColor"/>
    <rect width="120" height="160" fill="url(#scan)"/>
  </svg>`;

function renderRoster() {
  const tabs = $("#roster-tabs");
  tabs.innerHTML = RESEARCHERS.map(
    (r, i) => `
      <button class="roster-tab" type="button" role="tab" id="tab-${r.id}"
        aria-selected="${i === 0}" aria-controls="dossier" tabindex="${i === 0 ? 0 : -1}" data-id="${r.id}">
        <span class="tab-name">${r.name}</span>
        <span class="tab-role">${r.role.split(",")[0]}</span>
      </button>`
  ).join("");

  tabs.addEventListener("click", (e) => {
    const tab = e.target.closest(".roster-tab");
    if (tab) selectResearcher(tab.dataset.id);
  });

  // 방향키로 탭 이동
  tabs.addEventListener("keydown", (e) => {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const list = $$(".roster-tab", tabs);
    const idx = list.indexOf(document.activeElement);
    const step = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
    const next = list[(idx + step + list.length) % list.length];
    selectResearcher(next.dataset.id);
    next.focus();
  });

  selectResearcher(RESEARCHERS[0].id);
}

function selectResearcher(id) {
  const r = RESEARCHERS.find((x) => x.id === id);
  $$(".roster-tab").forEach((tab) => {
    const on = tab.dataset.id === id;
    tab.setAttribute("aria-selected", String(on));
    tab.tabIndex = on ? 0 : -1;
  });

  const dossier = $("#dossier");
  dossier.setAttribute("aria-labelledby", `tab-${id}`);
  dossier.innerHTML = `
    <div class="portrait">${PORTRAIT_SVG}<span class="portrait-label">사진 비공개</span></div>
    <div>
      <p class="dossier-id">식별 번호 ${r.code}</p>
      <h3 class="dossier-name">${r.name}</h3>
      <p class="dossier-role">${r.role}</p>
      <dl class="dossier-fields">
        ${r.fields.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}
        ${r.secret ? `<dt>비고</dt>
        <dd><button class="redact" type="button" data-reveal="${r.secret}" aria-label="가려진 기록 보기">${r.secret}</button></dd>` : ""}
      </dl>
    </div>
    <blockquote class="dossier-quote">${r.quote}</blockquote>`;
  bindRedactions(dossier);
}

/* ---------- 탐사원 적성 평가 (외부 링크) ---------- */
function renderTest() {
  const box = $("#test-box");
  const action = TEST.url
    ? `<a class="btn btn-red test-start" href="${TEST.url}" target="_blank" rel="noopener noreferrer">
         ${TEST.button}${ARROW_SVG}<span class="sr-only">(새 창에서 열림)</span>
       </a>
       <p class="test-note">평가는 새 창에서 열립니다.</p>`
    : `<button class="btn btn-red test-start" type="button" disabled>평가 링크 준비 중</button>
       <p class="test-note">script.js의 TEST.url에 테스트 주소를 넣으면 버튼이 활성화됩니다.</p>`;

  box.innerHTML = `<p class="test-intro">${TEST.intro}</p>${action}`;
}

/* ---------- 플레이리스트 ---------- */
function renderPlaylists() {
  // 음파 막대 높이는 목록마다 고정된 모양이 되도록 이름으로 계산합니다
  const waveBars = (seed) =>
    Array.from({ length: 28 }, (_, i) => {
      const h = 20 + Math.abs(Math.sin((i + 1) * (seed.length + 3) * 0.7)) * 80;
      return `<span style="height:${h.toFixed(0)}%"></span>`;
    }).join("");

  $("#playlists").innerHTML = PLAYLISTS.map(
    (p) => `
      <article class="playlist">
        <div class="wave" aria-hidden="true">${waveBars(p.name)}</div>
        <p class="playlist-time">${p.time}</p>
        <h3 class="playlist-name">${p.name}</h3>
        <p class="playlist-desc">${p.desc}</p>
        <div class="playlist-links">
          ${p.links
            .map((l) =>
              l.url
                ? `<a class="btn btn-line" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label || "오디오 기록 청취하기"}${ARROW_SVG}<span class="sr-only">(새 창에서 열림)</span></a>`
                : `<button class="btn btn-line" type="button" disabled>${l.platform} 링크 준비 중</button>`
            )
            .join("")}
        </div>
      </article>`
  ).join("");
}

/* ---------- 지침서 (※일부 공개) 이미지 ---------- */
const guide = { index: 0, list: [], loaded: false };
const guideImages = () => guide.list;
const guideEntries = () => GUIDE_IMAGES.filter((g) => g && g.src);

// 설정에 적힌 이미지 중 실제로 불러올 수 있는 것만 순서대로 남깁니다
function checkImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}
async function loadGuideList() {
  const entries = guideEntries();
  const ok = await Promise.all(entries.map((g) => checkImage(g.src)));
  entries.forEach((g, i) => {
    if (!ok[i]) console.warn(`지침서 이미지를 찾지 못해 건너뜁니다: ${g.src}`);
  });
  guide.list = entries.filter((_, i) => ok[i]);
  guide.loaded = true;
}

// 넓은 화면에서는 두 장씩, 좁은 화면(휴대폰)에서는 한 장씩 보여 줍니다
const guideStep = () => (window.matchMedia("(min-width: 641px)").matches ? 2 : 1);

function renderGuide(animate = false) {
  const frame = $("#guide-frame");
  const controls = $("#guide-controls");
  const images = guideImages();

  if (!guide.loaded) {
    frame.innerHTML = `<p class="guide-empty">지침서를 불러오는 중입니다.</p>`;
    controls.hidden = true;
    return;
  }

  if (images.length === 0) {
    const names = guideEntries().map((g) => g.src).join(", ");
    frame.innerHTML = names
      ? `<p class="guide-empty">지침서 이미지를 불러오지 못했습니다.<br><b>${names}</b> 파일이 index.html과 같은 위치에 있는지, 파일 이름의 대소문자와 확장자가 정확한지 확인해 주세요.</p>`
      : `<p class="guide-empty">지침서 이미지가 아직 등록되지 않았습니다.<br>script.js의 GUIDE_IMAGES에 이미지 파일 이름을 적어 주세요.</p>`;
    controls.hidden = true;
    return;
  }

  const step = guideStep();
  guide.index = Math.min(Math.max(0, guide.index), images.length - 1);
  guide.index -= guide.index % step; // 두 장씩 볼 때는 항상 홀수 쪽부터 시작
  const shown = images.slice(guide.index, guide.index + step);

  frame.innerHTML = `
    <div class="guide-spread" style="--guide-cols:${step}">
      ${shown
        .map((img, i) => {
          const alt = img.alt || `지침서 ${guide.index + i + 1}쪽`;
          return `
          <figure class="guide-figure">
            <a class="guide-link" href="${img.src}" target="_blank" rel="noopener">
              <img class="guide-img" src="${img.src}" alt="${alt}">
            </a>
            <figcaption class="guide-caption">
              <a href="${img.src}" target="_blank" rel="noopener">원본 크기로 보기<span class="sr-only">(${alt}, 새 창에서 열림)</span></a>
            </figcaption>
          </figure>`;
        })
        .join("")}
    </div>`;

  if (animate) {
    frame.classList.remove("is-turning");
    void frame.offsetWidth;
    frame.classList.add("is-turning");
  }

  const first = guide.index + 1;
  const last = guide.index + shown.length;
  controls.hidden = images.length <= step;
  $("#page-count").textContent = first === last ? `${first} / ${images.length}쪽` : `${first}–${last} / ${images.length}쪽`;
  $("#page-prev").disabled = guide.index === 0;
  $("#page-next").disabled = guide.index + step >= images.length;

  // 다음 장 이미지를 미리 불러와 넘길 때 깜빡임을 줄입니다
  images.slice(guide.index + step, guide.index + step * 2).forEach((g) => (new Image().src = g.src));
}

function turnGuide(dir) {
  const step = guideStep();
  const next = guide.index + dir * step;
  if (next < 0 || next >= guideImages().length) return;
  guide.index = next;
  renderGuide(true);
}

function initGuide() {
  $("#page-prev").addEventListener("click", () => turnGuide(-1));
  $("#page-next").addEventListener("click", () => turnGuide(1));

  // 지침서가 화면에 보일 때만 방향키로 넘기기
  let visible = false;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      (entries) => entries.forEach((en) => (visible = en.isIntersecting)),
      { threshold: 0.3 }
    ).observe($("#guide-frame"));
  }
  document.addEventListener("keydown", (e) => {
    if (!visible || guideImages().length <= guideStep() || $("#warn-dialog")?.open) return;
    if (document.activeElement.closest?.(".roster-tabs")) return;
    if (e.key === "ArrowRight") turnGuide(1);
    if (e.key === "ArrowLeft") turnGuide(-1);
  });

  // 화면 폭이 바뀌어 한 번에 보이는 장수가 달라지면 다시 그립니다
  let lastStep = guideStep();
  window.addEventListener("resize", () => {
    if (guideStep() !== lastStep) {
      lastStep = guideStep();
      renderGuide();
    }
  });

  renderGuide();
  loadGuideList().then(() => renderGuide());
}

/* ---------- 입사 지원 안내 ---------- */
function initApply() {
  const opener = $("#apply-open");
  const dialog = $("#apply-dialog");
  if (!opener || !dialog) return;
  opener.addEventListener("click", () => {
    if (typeof dialog.showModal === "function") dialog.showModal();
    else alert("[안내] 현재는 채용 공고 기간이 아닙니다.");
  });
  $("#apply-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
}

/* ---------- 지침서 열람 전 경고문 ---------- */
function initWarning() {
  const opener = $("#guide-open");
  const dialog = $("#warn-dialog");
  if (!opener || !dialog || typeof dialog.showModal !== "function") return; // 지원하지 않으면 바로 이동

  const goToGuide = () => {
    if (location.hash === "#preview") $("#preview").scrollIntoView();
    else location.hash = "preview";
  };

  opener.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.showModal();
  });
  $("#warn-confirm").addEventListener("click", () => {
    dialog.close();
    goToGuide();
  });
  $("#warn-cancel").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => opener.blur());
}

/* ---------- 시작 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  renderHistory();
  renderOrg();
  renderMenu();
  applyIcons();
  bindRedactions();
  renderBook();
  renderRoster();
  renderTest();
  renderPlaylists();
  initGuide();
  initWarning();
  initApply();
});
