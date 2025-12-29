import type { Question } from './types';

export const QUESTIONS: Question[] = [
    {
        id: 1,
        text: "주말에 갑자기 시간이 생겼다. 너는?",
        answers: [
            { text: "그냥 집에서 쉬면서 에너지 충전한다.", scores: { SOLO: 2 } },
            { text: "친구들한테 연락해서 뭐라도 한다.", scores: { SOLO_HELL: 2 } },
            { text: "카페나 산책처럼 조용한 루틴을 탄다.", scores: { HEART_SIGNAL: 2 } },
            { text: "당일치기든 뭐든, 그냥 밖으로 나간다.", scores: { '72_HOURS': 2 } },
        ],
    },
    {
        id: 2,
        text: "처음 보는 사람과 만날 때 가장 먼저 보는 건?",
        answers: [
            { text: "분위기랑 첫인상(어딘가 끌리는지).", scores: { SOLO_HELL: 2 } },
            { text: "대화가 편하게 이어지는지.", scores: { HEART_SIGNAL: 2 } },
            { text: "살아온 방식이나 가치관이 비슷한지.", scores: { SOLO: 2 } },
            { text: "묘하게 이야기(사연)가 있는 사람인지.", scores: { TRANSIT_LOVE: 2 } },
        ],
    },
    {
        id: 3,
        text: "연인이 이성 친구와 단둘이 술을 마셨다는 걸 알게 됐다. 너는?",
        answers: [
            { text: "나는 좀 불편해서, 다음부터는 선을 지켜줬으면 한다.", scores: { SOLO: 2 } },
            { text: "일단 상황을 들어보고 내 기분도 솔직히 말한다.", scores: { HEART_SIGNAL: 2 } },
            { text: "크게 신경 안 쓴다. 믿으면 믿는 거지.", scores: { NOONA: 2 } },
            { text: "괜찮은 척해도 혼자 상상하다가 감정이 복잡해진다.", scores: { TRANSIT_LOVE: 2 } },
        ],
    },
    {
        id: 4,
        text: "처음 만난 사람들 사이에서 너는 보통?",
        answers: [
            { text: "말수는 적은데 보면 다 보고 있다.", scores: { HEART_SIGNAL: 2 } },
            { text: "그냥 내가 편한 사람한테 바로 붙는다.", scores: { '72_HOURS': 2 } },
            { text: "분위기 띄우는 편이고 사람들한테 잘 섞인다.", scores: { SOLO_HELL: 2 } },
            { text: "굳이 억지로 안 섞고 거리 두는 편이다.", scores: { SOLO: 2 } },
        ],
    },
    {
        id: 5,
        text: "호감 있는 사람이 생기면 너는?",
        answers: [
            { text: "티 안 나게 조금씩 신호를 보낸다.", scores: { HEART_SIGNAL: 2 } },
            { text: "나부터 먼저 약속을 잡아본다.", scores: { '72_HOURS': 2 } },
            { text: "한 번 마음 먹으면 불도저처럼 간다.", scores: { SOLO: 2 } },
            { text: "마음은 있는데… 타이밍만 재다가 못 한다.", scores: { WANT_DATING: 2 } },
        ],
    },
    {
        id: 6,
        text: "연애할 때 연락 스타일은?",
        answers: [
            { text: "연락은 중요하지 않다. 필요할 때만 하면 된다.", scores: { SOLO: 2 } },
            { text: "자주 주고받는 게 좋다. 텐션이 유지돼야 한다.", scores: { SOLO_HELL: 2 } },
            { text: "너무 집착은 싫지만, 마음 확인은 하고 싶다.", scores: { HEART_SIGNAL: 2 } },
            { text: "답장 타이밍 잡는 게 어렵다… 괜히 부담된다.", scores: { WANT_DATING: 2 } },
        ],
    },
    {
        id: 7,
        text: "소개팅/첫 만남에서 데이트 코스를 정할 때 너는?",
        answers: [
            { text: "핫한 곳 가야지. 사진도 예쁘게 찍고.", scores: { SOLO_HELL: 2 } },
            { text: "조용히 이야기할 수 있는 곳이면 충분하다.", scores: { HEART_SIGNAL: 2 } },
            { text: "맛집 + 영화 같은 무난한 게 최고다.", scores: { NOONA: 2 } },
            { text: "그냥 오늘 가능한 거 바로 하고 싶다(즉흥).", scores: { '72_HOURS': 2 } },
        ],
    },
    {
        id: 8,
        text: "연애에서 가장 중요한 건 뭐라고 생각해?",
        answers: [
            { text: "설렘. 결국 끌려야 시작된다.", scores: { SOLO_HELL: 2 } },
            { text: "대화가 편하고 서로 배려되는 것.", scores: { HEART_SIGNAL: 2 } },
            { text: "현실적으로 같이 살기 괜찮은지(미래 포함).", scores: { SOLO: 2 } },
            { text: "서툴러도 같이 성장하는 관계.", scores: { WANT_DATING: 2 } },
        ],
    },
    {
        id: 9,
        text: "경쟁 구도가 생기면 너는?",
        answers: [
            { text: "그런 구도 자체가 피곤하다. 그냥 안정이 좋다.", scores: { NOONA: 2 } },
            { text: "이상하게 텐션 올라간다. 더 매력 어필한다.", scores: { SOLO_HELL: 2 } },
            { text: "굳이 경쟁보단 상황을 대화로 정리하려 한다.", scores: { HEART_SIGNAL: 2 } },
            { text: "빨리 결론 내고 나가고 싶다(시간 아까움).", scores: { '72_HOURS': 2 } },
        ],
    },
    {
        id: 10,
        text: "데이트 중 예상치 못한 돌발 상황이 생기면?",
        answers: [
            { text: "일단 대안 찾고 정리부터 한다.", scores: { SOLO: 2 } },
            { text: "‘이런 것도 추억이지’ 하고 즐긴다.", scores: { SOLO_HELL: 2 } },
            { text: "상대 반응을 보면서 맞춰서 움직인다.", scores: { HEART_SIGNAL: 2 } },
            { text: "감정이 흔들려서 표정에 다 티 날 듯하다.", scores: { TRANSIT_LOVE: 2 } },
        ],
    },
    {
        id: 11,
        text: "연인이 갑자기 차갑게 굴면 너는?",
        answers: [
            { text: "바로 물어본다. 오늘 안에 풀자.", scores: { '72_HOURS': 2 } },
            { text: "왜 그런지 추측하면서 혼자 생각이 많아진다.", scores: { TRANSIT_LOVE: 2 } },
            { text: "일단 나도 감정 상해서 거리 둔다.", scores: { SOLO: 2 } },
            { text: "너무 직진은 부담이라, 타이밍 보고 조심스레 묻는다.", scores: { HEART_SIGNAL: 2 } },
        ],
    },
    {
        id: 12,
        text: "연애에서 질투는?",
        answers: [
            { text: "질투는 사랑의 양념. 어느 정도는 있어야 한다.", scores: { BAD_ROMANCE: 2 } },
            { text: "질투할 시간에 내 할 거 한다.", scores: { SOLO: 2 } },
            { text: "질투는 하는데 티는 안 내려고 한다.", scores: { HEART_SIGNAL: 2 } },
            { text: "질투 자체가 서툴고 어렵다. 표현도 잘 못한다.", scores: { WANT_DATING: 2 } },
        ],
    },
    {
        id: 13,
        text: "만약 전 애인과 같은 공간에서 마주치게 된다면?",
        answers: [
            { text: "별 생각 없다. 인사하고 끝.", scores: { SOLO: 2 } },
            { text: "감정이 한 번에 올라온다. 생각이 많아진다.", scores: { TRANSIT_LOVE: 2 } },
            { text: "괜히 자존심 발동한다. 더 멋있어 보이고 싶다.", scores: { SOLO_HELL: 2 } },
            { text: "내가 나서기보단 흐름을 보고 행동한다.", scores: { HEART_SIGNAL: 2 } },
        ],
    },
    {
        id: 14,
        text: "연애 중 ‘스킨십/거리감’은?",
        answers: [
            { text: "분위기 좋으면 자연스럽게 빨라질 수도 있다.", scores: { SOLO_HELL: 2 } },
            { text: "확실히 관계가 정리되고 나서가 편하다.", scores: { SOLO: 1, NOONA: 1 } },
            { text: "상대가 편하면 따라가지만 내 속도도 중요하다.", scores: { WANT_DATING: 2 } },
            { text: "감정이 확 올라오면 한 번에 확 가는 편이다.", scores: { BAD_ROMANCE: 2 } },
        ],
    },
    {
        id: 15,
        text: "연애할 때 너의 ‘결정 속도’는?",
        answers: [
            { text: "빠른 편. 감 오면 바로 확정한다.", scores: { '72_HOURS': 2 } },
            { text: "천천히 알아가야 마음이 생긴다.", scores: { HEART_SIGNAL: 2 } },
            { text: "조건/상황까지 다 고려하고 결정한다.", scores: { SOLO: 2 } },
            { text: "마음은 가는데 확신이 없어서 계속 망설인다.", scores: { TRANSIT_LOVE: 1, WANT_DATING: 1 } },
        ],
    },
    {
        id: 16,
        text: "데이트 비용이나 현실적인 부분은?",
        answers: [
            { text: "각자 깔끔하게. 계산은 투명해야 편하다.", scores: { SOLO: 2 } },
            { text: "상황 따라 센스 있게 하면 된다.", scores: { NOONA: 2 } },
            { text: "내가 내고 싶은 날도 있고, 받는 날도 있다.", scores: { SOLO_HELL: 2 } },
            { text: "정답이 어렵다… 괜히 민망해서 조심한다.", scores: { WANT_DATING: 2 } },
        ],
    },
    {
        id: 17,
        text: "연애가 시작되면 너는 보통?",
        answers: [
            { text: "내 생활 리듬을 유지하면서 맞춘다.", scores: { SOLO: 2 } },
            { text: "초반에 텐션 확 올려서 몰입한다.", scores: { BAD_ROMANCE: 2 } },
            { text: "서로 신호 확인하면서 조금씩 가까워진다.", scores: { HEART_SIGNAL: 2 } },
            { text: "내가 잘하고 있는지 계속 걱정하고 고민한다.", scores: { TRANSIT_LOVE: 1, WANT_DATING: 1 } },
        ],
    },
    {
        id: 18,
        text: "연애 프로그램에 나가면 너는 어떤 캐릭터일 것 같아?",
        answers: [
            { text: "‘나랑 맞는 사람만’ 확실히 고르는 스타일.", scores: { SOLO: 2 } },
            { text: "분위기 메이커. 관심 받는 것도 나쁘지 않다.", scores: { SOLO_HELL: 2 } },
            { text: "겉으론 조용한데, 감정선이 깊은 스타일.", scores: { TRANSIT_LOVE: 2 } },
            { text: "서툴러도 진짜 연애를 배우고 싶은 사람.", scores: { WANT_DATING: 2 } },
        ],
    },
];
