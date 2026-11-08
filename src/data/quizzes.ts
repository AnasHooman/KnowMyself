export type Locale = "ko" | "en" | "ja" | "zh";

/** Localized text. Quiz content is written in ko/en; ja/zh fall back to en. */
export type L = { ko: string; en: string; ja?: string; zh?: string };

export function tr(text: L, locale: string): string {
  return text[locale as Locale] ?? text.en;
}

export type ResultType = {
  id: string;
  emoji: string;
  name: L;
  tagline: L;
  description: L;
  strengths: L[];
  tips: L[];
  match: string;
};

export type Question = {
  text: L;
  options: { text: L; type: string }[];
};

export type Quiz = {
  id: string;
  emoji: string;
  gradient: string;
  minutes: number;
  title: L;
  description: L;
  questions: Question[];
  results: ResultType[];
};

export const quizzes: Quiz[] = [
  {
    id: "energy",
    emoji: "🔋",
    gradient: "from-violet-500 to-fuchsia-500",
    minutes: 2,
    title: { ko: "나의 에너지 충전 방식", en: "How Do You Recharge?" },
    description: {
      ko: "지친 하루 끝, 당신을 다시 채워주는 것은 무엇일까요? 나만의 회복 패턴을 알아보세요.",
      en: "At the end of a long day, what fills you back up? Discover your recovery pattern.",
    },
    questions: [
      {
        text: { ko: "드디어 금요일 저녁! 가장 끌리는 계획은?", en: "Friday night at last! What sounds best?" },
        options: [
          { text: { ko: "집에서 혼자 영화나 책과 함께", en: "A movie or book, alone at home" }, type: "forest" },
          { text: { ko: "친구들을 잔뜩 모아 신나는 파티", en: "A big, lively get-together with friends" }, type: "spark" },
          { text: { ko: "가보지 않은 동네로 즉흥 나들이", en: "A spontaneous trip somewhere new" }, type: "wind" },
          { text: { ko: "가장 친한 한두 명과 조용한 저녁", en: "A quiet dinner with one or two close friends" }, type: "lamp" },
        ],
      },
      {
        text: { ko: "스트레스가 극에 달했을 때 나는?", en: "When stress peaks, you…" },
        options: [
          { text: { ko: "연락을 끊고 나만의 동굴로 들어간다", en: "Go off the grid and retreat to your cave" }, type: "forest" },
          { text: { ko: "사람들을 만나 수다로 털어낸다", en: "Meet people and talk it all out" }, type: "spark" },
          { text: { ko: "운동이나 새로운 활동으로 몸을 움직인다", en: "Move — exercise or try something new" }, type: "wind" },
          { text: { ko: "믿는 사람에게 조용히 털어놓는다", en: "Quietly confide in someone you trust" }, type: "lamp" },
        ],
      },
      {
        text: { ko: "여행 스타일을 고른다면?", en: "Pick your travel style." },
        options: [
          { text: { ko: "한적한 숲속 오두막에서 푹 쉬기", en: "Resting in a quiet cabin in the woods" }, type: "forest" },
          { text: { ko: "축제와 핫플이 가득한 대도시", en: "A big city full of festivals and hot spots" }, type: "spark" },
          { text: { ko: "일정 없이 발길 닿는 대로 배낭여행", en: "Backpacking with no fixed plan" }, type: "wind" },
          { text: { ko: "가족이나 연인과 익숙한 단골 여행지", en: "A familiar favorite spot with family or a partner" }, type: "lamp" },
        ],
      },
      {
        text: { ko: "가장 행복했던 순간과 가까운 것은?", en: "Which feels closest to your happiest moments?" },
        options: [
          { text: { ko: "아무 방해 없이 무언가에 몰입했을 때", en: "Being fully absorbed in something, undisturbed" }, type: "forest" },
          { text: { ko: "많은 사람들과 함께 환호했을 때", en: "Cheering together with a crowd" }, type: "spark" },
          { text: { ko: "처음 해보는 일에 도전했을 때", en: "Trying something for the very first time" }, type: "wind" },
          { text: { ko: "소중한 사람과 깊은 대화를 나눴을 때", en: "A deep talk with someone dear to you" }, type: "lamp" },
        ],
      },
      {
        text: { ko: "갑자기 하루 휴가가 생겼다!", en: "You suddenly get a day off!" },
        options: [
          { text: { ko: "늦잠, 그리고 아무것도 안 하기", en: "Sleep in and do absolutely nothing" }, type: "forest" },
          { text: { ko: "단톡방에 '오늘 놀 사람?' 올리기", en: "Post \"Who's free today?\" in the group chat" }, type: "spark" },
          { text: { ko: "평소 미뤄둔 원데이 클래스 신청", en: "Sign up for that one-day class you've been eyeing" }, type: "wind" },
          { text: { ko: "부모님이나 오랜 친구 만나러 가기", en: "Visit your parents or an old friend" }, type: "lamp" },
        ],
      },
      {
        text: { ko: "나에게 가장 편안한 공간은?", en: "Where do you feel most at ease?" },
        options: [
          { text: { ko: "조명이 은은한 내 방 침대 위", en: "My bed, under soft lighting" }, type: "forest" },
          { text: { ko: "음악과 사람들로 북적이는 카페", en: "A buzzing café full of music and people" }, type: "spark" },
          { text: { ko: "탁 트인 바닷가나 산 정상", en: "An open beach or a mountain top" }, type: "wind" },
          { text: { ko: "가족이 모여 있는 거실", en: "The living room with my family around" }, type: "lamp" },
        ],
      },
      {
        text: { ko: "친구가 나를 한 단어로 표현한다면?", en: "Your friends would describe you as…" },
        options: [
          { text: { ko: "차분한", en: "Calm" }, type: "forest" },
          { text: { ko: "에너지 넘치는", en: "Energetic" }, type: "spark" },
          { text: { ko: "호기심 많은", en: "Curious" }, type: "wind" },
          { text: { ko: "따뜻한", en: "Warm" }, type: "lamp" },
        ],
      },
    ],
    results: [
      {
        id: "forest",
        emoji: "🌲",
        name: { ko: "고요한 숲", en: "The Quiet Forest" },
        tagline: { ko: "혼자만의 시간이 곧 나의 충전기", en: "Solitude is my charger" },
        description: {
          ko: "당신은 고요함 속에서 에너지를 되찾는 사람입니다. 외부 자극이 줄어들 때 생각이 정리되고, 깊이 있는 몰입을 통해 다시 단단해집니다. 혼자 있는 시간은 도망이 아니라 당신에게 꼭 필요한 회복의 의식이에요.",
          en: "You regain energy in stillness. When outside noise fades, your thoughts settle and deep focus makes you whole again. Time alone isn't an escape — it's your essential ritual of recovery.",
        },
        strengths: [
          { ko: "깊은 집중력과 몰입", en: "Deep focus and immersion" },
          { ko: "차분한 판단력", en: "Calm judgment" },
          { ko: "스스로를 돌보는 힘", en: "Strong self-care instincts" },
        ],
        tips: [
          { ko: "일정표에 '나만의 시간'을 미리 적어두세요", en: "Block out 'me time' on your calendar in advance" },
          { ko: "가끔은 믿는 사람에게 마음을 열어보세요", en: "Now and then, open up to someone you trust" },
        ],
        match: "lamp",
      },
      {
        id: "spark",
        emoji: "🎆",
        name: { ko: "축제의 불꽃", en: "The Festival Spark" },
        tagline: { ko: "사람들 속에서 빛나는 에너지", en: "I shine brightest among people" },
        description: {
          ko: "당신은 사람들과 어울릴 때 살아나는 사람입니다. 웃음과 대화가 오가는 자리에서 에너지가 차오르고, 그 에너지를 다시 주변에 나눠줍니다. 당신이 있는 곳은 자연스럽게 분위기가 밝아져요.",
          en: "You come alive around people. Laughter and conversation fill your tank, and you pass that energy right back to everyone nearby. Wherever you are, the mood naturally lifts.",
        },
        strengths: [
          { ko: "분위기를 띄우는 친화력", en: "Charisma that lifts the room" },
          { ko: "넓은 인간관계", en: "A wide social circle" },
          { ko: "빠른 회복 탄력성", en: "Quick emotional bounce-back" },
        ],
        tips: [
          { ko: "에너지가 떨어질 땐 짧은 혼자만의 휴식도 효과적이에요", en: "When drained, even a short solo break can help" },
          { ko: "약속 사이에 여유 시간을 두세요", en: "Leave breathing room between plans" },
        ],
        match: "wind",
      },
      {
        id: "wind",
        emoji: "🍃",
        name: { ko: "탐험가의 바람", en: "The Explorer's Wind" },
        tagline: { ko: "새로움이 나를 다시 뛰게 한다", en: "Newness keeps me going" },
        description: {
          ko: "당신은 새로운 경험에서 힘을 얻는 사람입니다. 익숙한 일상이 반복되면 쉽게 지치지만, 낯선 길과 첫 도전 앞에서는 눈이 반짝입니다. 움직이고 배우는 것 자체가 당신의 휴식이에요.",
          en: "You draw strength from new experiences. Repetitive routines wear you down, but unfamiliar roads and first attempts make your eyes light up. Moving and learning are your way of resting.",
        },
        strengths: [
          { ko: "뛰어난 적응력", en: "Excellent adaptability" },
          { ko: "넘치는 호기심", en: "Boundless curiosity" },
          { ko: "실행력과 도전 정신", en: "Bias for action" },
        ],
        tips: [
          { ko: "일상 속 작은 변화(새 산책로, 새 메뉴)를 시도해보세요", en: "Add small changes to routine — a new route, a new dish" },
          { ko: "가끔은 멈춰서 지나온 길을 돌아보세요", en: "Pause sometimes to look back on how far you've come" },
        ],
        match: "spark",
      },
      {
        id: "lamp",
        emoji: "🕯️",
        name: { ko: "아늑한 등불", en: "The Cozy Lamp" },
        tagline: { ko: "소중한 사람 곁이 나의 쉼터", en: "My safe place is beside loved ones" },
        description: {
          ko: "당신은 깊은 관계 속에서 안정을 찾는 사람입니다. 많은 사람보다 마음이 통하는 소수와의 시간이 진짜 충전이 됩니다. 당신의 따뜻함은 주변 사람들에게도 든든한 쉼터가 되어줘요.",
          en: "You find stability in deep relationships. Time with a few kindred spirits recharges you far more than a crowd. Your warmth becomes a safe harbor for the people around you, too.",
        },
        strengths: [
          { ko: "깊은 공감 능력", en: "Deep empathy" },
          { ko: "신뢰를 주는 꾸준함", en: "Trustworthy consistency" },
          { ko: "관계를 가꾸는 섬세함", en: "Care for nurturing relationships" },
        ],
        tips: [
          { ko: "소중한 사람과의 정기적인 만남을 루틴으로 만드세요", en: "Make regular time with loved ones part of your routine" },
          { ko: "남을 챙기는 만큼 나 자신도 챙겨주세요", en: "Care for yourself as much as you care for others" },
        ],
        match: "forest",
      },
    ],
  },
  {
    id: "role",
    emoji: "🧩",
    gradient: "from-sky-500 to-indigo-500",
    minutes: 2,
    title: { ko: "관계 속 나의 역할", en: "Your Role in a Group" },
    description: {
      ko: "팀이나 친구 모임에서 나는 어떤 역할을 맡고 있을까요? 함께할 때 드러나는 나의 모습을 확인해보세요.",
      en: "In a team or friend group, which role do you naturally take? See who you become when you're with others.",
    },
    questions: [
      {
        text: { ko: "팀 프로젝트 첫 회의, 나는?", en: "First team meeting — you…" },
        options: [
          { text: { ko: "먼저 목표와 역할 분담을 제안한다", en: "Propose goals and divide up roles" }, type: "leader" },
          { text: { ko: "모두의 의견이 나오도록 분위기를 만든다", en: "Make sure everyone's voice gets heard" }, type: "mediator" },
          { text: { ko: "아이디어가 나올 때마다 리액션으로 힘을 준다", en: "Hype up every idea that's shared" }, type: "cheer" },
          { text: { ko: "일단 듣고, 놓친 부분이 없는지 살핀다", en: "Listen first and look for what's been missed" }, type: "observer" },
        ],
      },
      {
        text: { ko: "친구 둘이 다퉜다. 나는?", en: "Two friends are fighting. You…" },
        options: [
          { text: { ko: "해결책을 정리해서 제시한다", en: "Lay out a clear solution" }, type: "leader" },
          { text: { ko: "양쪽 이야기를 따로 들어준다", en: "Hear each side out separately" }, type: "mediator" },
          { text: { ko: "맛있는 걸 사주며 기분을 풀어준다", en: "Treat them to something tasty to lift the mood" }, type: "cheer" },
          { text: { ko: "상황을 지켜보며 원인을 파악한다", en: "Watch closely and figure out the root cause" }, type: "observer" },
        ],
      },
      {
        text: { ko: "모임 장소를 정해야 할 때 나는?", en: "When the group needs to pick a place…" },
        options: [
          { text: { ko: "\"여기로 하자!\" 바로 결정한다", en: "\"Let's go here!\" — you decide" }, type: "leader" },
          { text: { ko: "다들 괜찮은 곳인지 하나하나 물어본다", en: "Check that it works for everyone" }, type: "mediator" },
          { text: { ko: "어디든 좋아! 가서 재밌게 놀면 되지", en: "Anywhere's fine — it'll be fun either way!" }, type: "cheer" },
          { text: { ko: "리뷰와 동선을 꼼꼼히 비교해 공유한다", en: "Compare reviews and routes, then share" }, type: "observer" },
        ],
      },
      {
        text: { ko: "사람들이 나에게 자주 하는 말은?", en: "What do people often tell you?" },
        options: [
          { text: { ko: "\"너 있으니까 든든하다\"", en: "\"I feel safe with you in charge\"" }, type: "leader" },
          { text: { ko: "\"너랑 얘기하면 마음이 편해\"", en: "\"Talking to you puts me at ease\"" }, type: "mediator" },
          { text: { ko: "\"너 때문에 웃는다\"", en: "\"You always make me laugh\"" }, type: "cheer" },
          { text: { ko: "\"어떻게 그걸 알아챘어?\"", en: "\"How did you even notice that?\"" }, type: "observer" },
        ],
      },
      {
        text: { ko: "일이 계획대로 안 풀릴 때 나는?", en: "When things don't go to plan…" },
        options: [
          { text: { ko: "플랜 B를 빠르게 세운다", en: "Quickly set up a plan B" }, type: "leader" },
          { text: { ko: "다들 지치지 않았는지 먼저 살핀다", en: "Check whether everyone's okay" }, type: "mediator" },
          { text: { ko: "\"괜찮아, 이것도 추억이야!\" 분위기를 살린다", en: "\"It's fine, it'll be a story!\" — you keep spirits up" }, type: "cheer" },
          { text: { ko: "무엇이 잘못됐는지 차분히 분석한다", en: "Calmly analyze what went wrong" }, type: "observer" },
        ],
      },
      {
        text: { ko: "단체 사진을 찍을 때 나의 위치는?", en: "Your spot in a group photo?" },
        options: [
          { text: { ko: "\"자 다들 모여!\" 외치는 사람", en: "The one yelling \"Everyone, gather up!\"" }, type: "leader" },
          { text: { ko: "빠진 사람 없는지 챙기는 사람", en: "Making sure no one's left out" }, type: "mediator" },
          { text: { ko: "가운데서 제일 웃긴 포즈", en: "Center, with the silliest pose" }, type: "cheer" },
          { text: { ko: "사진을 찍어주는 사람", en: "Behind the camera" }, type: "observer" },
        ],
      },
      {
        text: { ko: "내가 가장 뿌듯한 순간은?", en: "When do you feel proudest?" },
        options: [
          { text: { ko: "내가 이끈 일이 성공했을 때", en: "When something I led succeeds" }, type: "leader" },
          { text: { ko: "어색했던 사이가 가까워졌을 때", en: "When awkward relationships grow closer" }, type: "mediator" },
          { text: { ko: "모두가 즐거워하는 걸 볼 때", en: "When I see everyone having fun" }, type: "cheer" },
          { text: { ko: "내 분석이 문제를 미리 막았을 때", en: "When my insight prevents a problem" }, type: "observer" },
        ],
      },
    ],
    results: [
      {
        id: "leader",
        emoji: "🧭",
        name: { ko: "길을 여는 나침반", en: "The Compass" },
        tagline: { ko: "방향을 제시하고 모두를 이끄는 리더", en: "Sets the direction and leads the way" },
        description: {
          ko: "당신은 모호한 상황에서도 방향을 잡아주는 사람입니다. 결정이 필요한 순간 주저하지 않고, 사람들은 그런 당신에게 자연스럽게 의지합니다. 책임감이 강해 끝까지 일을 완수해냅니다.",
          en: "You give direction even when things are unclear. You don't hesitate when a decision is needed, and people naturally lean on you. Your strong sense of responsibility carries tasks to the finish line.",
        },
        strengths: [
          { ko: "빠른 결단력", en: "Decisiveness" },
          { ko: "강한 책임감", en: "Strong ownership" },
          { ko: "목표 지향적 추진력", en: "Goal-driven momentum" },
        ],
        tips: [
          { ko: "결정 전에 조용한 사람의 의견도 한 번 물어보세요", en: "Ask the quiet ones before you decide" },
          { ko: "모든 짐을 혼자 지지 말고 위임해보세요", en: "Delegate — you don't have to carry it all" },
        ],
        match: "observer",
      },
      {
        id: "mediator",
        emoji: "🤝",
        name: { ko: "마음을 잇는 다리", en: "The Bridge" },
        tagline: { ko: "모두의 목소리를 연결하는 중재자", en: "Connects every voice in the room" },
        description: {
          ko: "당신은 사람과 사람 사이를 이어주는 사람입니다. 갈등의 신호를 누구보다 먼저 알아차리고, 모두가 존중받는다고 느끼도록 섬세하게 조율합니다. 당신 덕분에 팀은 하나가 됩니다.",
          en: "You connect people. You sense conflict before anyone else and carefully balance things so everyone feels respected. Thanks to you, the team becomes one.",
        },
        strengths: [
          { ko: "뛰어난 경청 능력", en: "Exceptional listening" },
          { ko: "갈등 조율력", en: "Conflict resolution" },
          { ko: "포용적인 태도", en: "An inclusive attitude" },
        ],
        tips: [
          { ko: "모두를 만족시키려다 내 의견을 잃지 마세요", en: "Don't lose your own voice trying to please everyone" },
          { ko: "때로는 '아니요'라고 말해도 괜찮아요", en: "It's okay to say no sometimes" },
        ],
        match: "cheer",
      },
      {
        id: "cheer",
        emoji: "🎉",
        name: { ko: "웃음 발전소", en: "The Joy Generator" },
        tagline: { ko: "분위기를 살리는 팀의 비타민", en: "The team's daily vitamin" },
        description: {
          ko: "당신은 모임에 활력을 불어넣는 사람입니다. 힘든 순간에도 웃음을 찾아내고, 사람들이 서로 편하게 다가갈 수 있도록 만들어줍니다. 당신이 있으면 어떤 일도 덜 힘들게 느껴져요.",
          en: "You bring life to any group. You find laughter even in hard moments and make it easy for people to connect. With you around, any task feels lighter.",
        },
        strengths: [
          { ko: "긍정 에너지", en: "Positive energy" },
          { ko: "뛰어난 친화력", en: "Easygoing friendliness" },
          { ko: "위기 속 유머 감각", en: "Humor under pressure" },
        ],
        tips: [
          { ko: "힘들 땐 괜찮은 척하지 말고 솔직해져도 돼요", en: "When it's hard, you don't have to pretend you're fine" },
          { ko: "아이디어를 끝까지 실행으로 연결해보세요", en: "Try following your ideas all the way through" },
        ],
        match: "mediator",
      },
      {
        id: "observer",
        emoji: "🔭",
        name: { ko: "숨은 전략가", en: "The Hidden Strategist" },
        tagline: { ko: "한발 물러서서 전체를 보는 눈", en: "Steps back to see the whole picture" },
        description: {
          ko: "당신은 조용히 전체 그림을 읽는 사람입니다. 다른 사람들이 놓친 디테일과 위험을 정확히 짚어내고, 꼭 필요한 순간에 핵심을 말합니다. 팀의 실수를 줄이는 든든한 안전장치예요.",
          en: "You quietly read the whole picture. You spot details and risks others miss, and you speak up with the key point exactly when it matters. You're the team's reliable safety net.",
        },
        strengths: [
          { ko: "날카로운 분석력", en: "Sharp analysis" },
          { ko: "디테일을 보는 눈", en: "An eye for detail" },
          { ko: "신중한 판단", en: "Careful judgment" },
        ],
        tips: [
          { ko: "생각을 조금 더 일찍, 자주 공유해보세요", en: "Share your thoughts earlier and more often" },
          { ko: "완벽하지 않아도 먼저 시작해봐도 괜찮아요", en: "It's okay to start before everything is perfect" },
        ],
        match: "leader",
      },
    ],
  },
  {
    id: "values",
    emoji: "💎",
    gradient: "from-amber-400 to-rose-500",
    minutes: 2,
    title: { ko: "나를 움직이는 핵심 가치", en: "Your Core Value" },
    description: {
      ko: "선택의 순간마다 나를 이끄는 가장 중요한 가치는 무엇일까요? 삶의 나침반을 찾아보세요.",
      en: "What value guides you at every crossroads? Find the compass of your life.",
    },
    questions: [
      {
        text: { ko: "두 개의 회사에서 합격 연락이 왔다. 나의 선택 기준은?", en: "Two job offers arrive. What decides it?" },
        options: [
          { text: { ko: "더 많이 배우고 성장할 수 있는 곳", en: "Where I'll learn and grow the most" }, type: "growth" },
          { text: { ko: "연봉과 고용이 안정적인 곳", en: "Better pay and job security" }, type: "stability" },
          { text: { ko: "근무 시간과 장소가 자유로운 곳", en: "Flexible hours and location" }, type: "freedom" },
          { text: { ko: "함께 일할 사람들이 좋은 곳", en: "Great people to work with" }, type: "connection" },
        ],
      },
      {
        text: { ko: "10년 후 나의 모습으로 가장 바라는 것은?", en: "Your ideal self in 10 years?" },
        options: [
          { text: { ko: "내 분야의 전문가", en: "An expert in my field" }, type: "growth" },
          { text: { ko: "걱정 없는 안정된 삶", en: "A stable, worry-free life" }, type: "stability" },
          { text: { ko: "원하는 곳에서 원하는 일을 하는 삶", en: "Doing what I want, wherever I want" }, type: "freedom" },
          { text: { ko: "사랑하는 사람들과 함께하는 삶", en: "A life surrounded by people I love" }, type: "connection" },
        ],
      },
      {
        text: { ko: "예상치 못한 보너스 100만 원이 생겼다!", en: "You get an unexpected bonus!" },
        options: [
          { text: { ko: "듣고 싶던 강의나 자격증에 투자", en: "Invest in a course or certification" }, type: "growth" },
          { text: { ko: "일단 저축 통장으로", en: "Straight into savings" }, type: "stability" },
          { text: { ko: "훌쩍 떠나는 여행 경비로", en: "Fund a spontaneous trip" }, type: "freedom" },
          { text: { ko: "가족·친구에게 선물하기", en: "Gifts for family and friends" }, type: "connection" },
        ],
      },
      {
        text: { ko: "가장 견디기 힘든 상황은?", en: "What's hardest for you to endure?" },
        options: [
          { text: { ko: "몇 년째 제자리걸음인 느낌", en: "Feeling stuck in place for years" }, type: "growth" },
          { text: { ko: "내일이 어떻게 될지 모르는 불확실함", en: "Not knowing what tomorrow brings" }, type: "stability" },
          { text: { ko: "누군가 내 일정을 모두 통제할 때", en: "Someone controlling my every move" }, type: "freedom" },
          { text: { ko: "마음 터놓을 사람이 없을 때", en: "Having no one to open up to" }, type: "connection" },
        ],
      },
      {
        text: { ko: "나에게 '좋은 하루'란?", en: "To you, a good day is…" },
        options: [
          { text: { ko: "어제보다 조금 더 나아진 하루", en: "A day I got a little better than yesterday" }, type: "growth" },
          { text: { ko: "계획한 일이 차질 없이 끝난 하루", en: "A day everything went as planned" }, type: "stability" },
          { text: { ko: "하고 싶은 걸 마음껏 한 하루", en: "A day I did exactly what I wanted" }, type: "freedom" },
          { text: { ko: "누군가와 진심을 나눈 하루", en: "A day I shared something real with someone" }, type: "connection" },
        ],
      },
      {
        text: { ko: "존경하는 사람의 공통점은?", en: "The people you admire tend to be…" },
        options: [
          { text: { ko: "끊임없이 도전하고 발전한다", en: "Always challenging and improving themselves" }, type: "growth" },
          { text: { ko: "묵묵히 자기 자리를 지킨다", en: "Steady and dependable" }, type: "stability" },
          { text: { ko: "남의 시선에 얽매이지 않는다", en: "Unbothered by others' expectations" }, type: "freedom" },
          { text: { ko: "주변 사람을 진심으로 아낀다", en: "Truly caring toward those around them" }, type: "connection" },
        ],
      },
      {
        text: { ko: "인생을 한 문장으로 표현한다면?", en: "Sum up life in one line." },
        options: [
          { text: { ko: "\"오늘의 나는 어제의 나보다 낫다\"", en: "\"Today I'm better than yesterday\"" }, type: "growth" },
          { text: { ko: "\"천천히, 그러나 확실하게\"", en: "\"Slow and steady\"" }, type: "stability" },
          { text: { ko: "\"내 인생의 주인공은 나\"", en: "\"I'm the author of my own story\"" }, type: "freedom" },
          { text: { ko: "\"함께라서 행복하다\"", en: "\"Happier together\"" }, type: "connection" },
        ],
      },
    ],
    results: [
      {
        id: "growth",
        emoji: "🌱",
        name: { ko: "성장하는 새싹", en: "The Sprout" },
        tagline: { ko: "어제보다 나은 내일을 향해", en: "Always reaching for a better tomorrow" },
        description: {
          ko: "당신을 움직이는 힘은 '성장'입니다. 배우고, 도전하고, 한 단계씩 나아가는 과정에서 살아있음을 느낍니다. 정체된 상태를 가장 경계하며, 어려움도 성장의 기회로 바꿔내는 사람이에요.",
          en: "Growth is what drives you. You feel most alive while learning, challenging yourself, and moving forward step by step. You guard against standing still and turn hardship into opportunity.",
        },
        strengths: [
          { ko: "끈기 있는 학습력", en: "Persistent learning" },
          { ko: "도전을 즐기는 태도", en: "Loves a challenge" },
          { ko: "높은 자기 동기부여", en: "Strong self-motivation" },
        ],
        tips: [
          { ko: "결과뿐 아니라 지금까지의 과정도 칭찬해주세요", en: "Celebrate the journey, not just the results" },
          { ko: "쉬는 것도 성장의 일부라는 걸 기억하세요", en: "Remember: rest is part of growth" },
        ],
        match: "freedom",
      },
      {
        id: "stability",
        emoji: "🏡",
        name: { ko: "단단한 뿌리", en: "The Deep Roots" },
        tagline: { ko: "흔들리지 않는 일상의 힘", en: "The power of a steady life" },
        description: {
          ko: "당신에게 가장 중요한 가치는 '안정'입니다. 예측 가능한 일상과 탄탄한 기반 위에서 비로소 마음껏 꿈꿀 수 있다고 믿습니다. 신중하고 성실한 당신은 주변 사람들에게도 든든한 버팀목이에요.",
          en: "Stability matters most to you. You believe that a predictable routine and a solid foundation are what let you dream freely. Careful and dependable, you're a pillar for those around you.",
        },
        strengths: [
          { ko: "성실함과 꾸준함", en: "Diligence and consistency" },
          { ko: "현실적인 계획력", en: "Practical planning" },
          { ko: "위험 관리 능력", en: "Risk awareness" },
        ],
        tips: [
          { ko: "작은 변화부터 시도하며 새로운 경험을 쌓아보세요", en: "Collect new experiences, starting small" },
          { ko: "완벽한 준비가 없어도 괜찮은 일도 있어요", en: "Some things don't need perfect preparation" },
        ],
        match: "connection",
      },
      {
        id: "freedom",
        emoji: "🕊️",
        name: { ko: "자유로운 날개", en: "The Free Wings" },
        tagline: { ko: "나답게, 내 방식대로", en: "My life, my way" },
        description: {
          ko: "당신을 움직이는 가치는 '자유'입니다. 스스로 선택하고 결정할 때 가장 큰 행복을 느끼며, 틀에 갇히는 것을 무엇보다 싫어합니다. 독창적인 시선으로 남들이 가지 않는 길을 만들어가는 사람이에요.",
          en: "Freedom drives you. You're happiest when you choose for yourself, and nothing bothers you more than being boxed in. With an original eye, you blaze paths others haven't taken.",
        },
        strengths: [
          { ko: "독립성과 주체성", en: "Independence" },
          { ko: "창의적인 발상", en: "Creative thinking" },
          { ko: "변화에 대한 유연함", en: "Flexibility with change" },
        ],
        tips: [
          { ko: "자유를 지키기 위한 최소한의 루틴을 만들어보세요", en: "Build a minimal routine that protects your freedom" },
          { ko: "중요한 사람들과 나의 계획을 공유해보세요", en: "Share your plans with the people who matter" },
        ],
        match: "growth",
      },
      {
        id: "connection",
        emoji: "💞",
        name: { ko: "따뜻한 연결", en: "The Warm Connection" },
        tagline: { ko: "함께일 때 더 빛나는 삶", en: "Life shines brighter together" },
        description: {
          ko: "당신에게 가장 소중한 가치는 '관계'입니다. 성공도 행복도 함께 나눌 사람이 있을 때 의미가 있다고 믿습니다. 사람을 진심으로 대하는 당신 곁에는 늘 좋은 사람들이 모여요.",
          en: "Connection is your most precious value. You believe success and happiness only mean something when shared. Because you treat people sincerely, good people always gather around you.",
        },
        strengths: [
          { ko: "진심 어린 배려", en: "Genuine consideration" },
          { ko: "공감과 소통 능력", en: "Empathy and communication" },
          { ko: "오래가는 신뢰 관계", en: "Long-lasting trust" },
        ],
        tips: [
          { ko: "다른 사람의 기대보다 내 마음을 먼저 살펴보세요", en: "Check in with your own heart before others' expectations" },
          { ko: "혼자 보내는 시간도 관계를 건강하게 해줘요", en: "Time alone keeps relationships healthy, too" },
        ],
        match: "stability",
      },
    ],
  },
];

export function getQuiz(id: string): Quiz | undefined {
  return quizzes.find((q) => q.id === id);
}
