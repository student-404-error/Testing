import type { Question } from './types';

export const QUESTIONS: Question[] = [
    {
        id: 1,
        text: "주말에 갑자기 시간이 생겼다. 너는?",
        answers: [
            { text: "그냥 집에서 쉬면서 에너지를 충전한다.", scores: { SOLO: 2 } },
            { text: "친구들한테 연락해서 핫플레이스라도 간다.", scores: { SOLO_HELL: 2 } },
            { text: "카페나 산책처럼 나만의 조용한 루틴을 즐긴다.", scores: { HEART_SIGNAL: 2 } },
            { text: "단시간에 할 수 있는 액티비티나 여행을 바로 떠난다.", scores: { '72_HOURS': 2 } },
        ],
    },
    {
        id: 2, // 기존 2, 8번 통합
        text: "내가 연애 상대를 결정할 때 가장 중요하게 보는 포인트는?",
        answers: [
            { text: "비주얼과 아우라. 일단 첫눈에 확 끌려야 한다.", scores: { SOLO_HELL: 2 } },
            { text: "대화의 결이 맞는지, 그리고 나를 배려해 주는지.", scores: { HEART_SIGNAL: 2 } },
            { text: "가치관이나 직업 등 현실적으로 같이 갈 수 있는 사람인지.", scores: { SOLO: 2 } },
            { text: "말하지 않아도 느껴지는 본능적인 텐션과 이끌림.", scores: { BAD_ROMANCE: 2 } },
        ],
    },
    {
        id: 3, // 기존 4번
        text: "처음 만난 사람들 사이에서 너의 모습은?",
        answers: [
            { text: "말수는 적지만 전체적인 상황을 다 파악하고 있다.", scores: { HEART_SIGNAL: 2 } },
            { text: "마음에 드는 사람 한 명에게만 집중적으로 말을 건다.", scores: { '72_HOURS': 2 } },
            { text: "분위기를 주도하며 사람들과 금방 친해진다.", scores: { SOLO_HELL: 2 } },
            { text: "굳이 억지로 섞이지 않고 적당한 거리를 유지한다.", scores: { SOLO: 2 } },
        ],
    },
    {
        id: 4, // 기존 5번
        text: "호감 있는 사람이 생기면 너는?",
        answers: [
            { text: "티 안 나게 아주 조금씩 시그널을 보낸다.", scores: { HEART_SIGNAL: 2 } },
            { text: "내일 바로 만날 수 있는지 물어본다.", scores: { '72_HOURS': 2 } },
            { text: "눈치 보지 않고 확실하게 내 마음을 어필한다.", scores: { SOLO_HELL: 2 } },
            { text: "가까워지고 싶은 마음을 숨긴 채 주위를 맴돈다.", scores: { TRANSIT_LOVE: 2 } },
        ],
    },
    {
        id: 5, // 기존 6번
        text: "연애할 때 선호하는 연락 스타일은?",
        answers: [
            { text: "할 일은 해야지. 필요할 때만 효율적으로 하면 된다.", scores: { SOLO: 2 } },
            { text: "끊기지 않는 대화와 높은 텐션이 유지되어야 한다.", scores: { SOLO_HELL: 2 } },
            { text: "집착은 싫지만, 다정한 말투로 서로를 챙기고 싶다.", scores: { HEART_SIGNAL: 2 } },
            { text: "연락보다는 직접 만났을 때의 교감이 훨씬 중요하다.", scores: { BAD_ROMANCE: 2 } },
        ],
    },
    {
        id: 6, // 기존 7번
        text: "소개팅 첫 만남, 데이트 코스를 정할 때 너는?",
        answers: [
            { text: "화려하고 사진 잘 나오는 핫플레이스로 정한다.", scores: { SOLO_HELL: 2 } },
            { text: "서로에게 집중할 수 있는 조용한 곳을 선호한다.", scores: { HEART_SIGNAL: 2 } },
            { text: "이동 동선이 편하고 무난한 검증된 곳을 찾는다.", scores: { SOLO: 2 } },
            { text: "복잡하게 짜지 않고 발길 닿는 대로 움직인다.", scores: { '72_HOURS': 2 } },
        ],
    },
    {
        id: 7, // 기존 9번
        text: "내가 좋아하는 사람을 다른 사람도 좋아하고 있는 경쟁 상황이라면?",
        answers: [
            { text: "피곤한 구도는 딱 질색. 조용히 빠져준다.", scores: { TRANSIT_LOVE: 2 } },
            { text: "오히려 좋아. 내 매력을 보여줄 기회라고 생각한다.", scores: { SOLO_HELL: 2 } },
            { text: "불편하지만 내가 좋아하는 사람의 선택을 기다린다.", scores: { HEART_SIGNAL: 2 } },
            { text: "빠르게 승부를 보거나, 가망 없으면 바로 다른 사람 찾는다.", scores: { '72_HOURS': 2 } },
        ],
    },
    {
        id: 8, // 기존 10번
        text: "데이트 중 예상치 못한 상황(식당 휴무 등)이 생기면?",
        answers: [
            { text: "당황하지 않고 바로 근처 대안을 찾는다.", scores: { SOLO: 2 } },
            { text: "이런 것도 재미지! 근처 편의점이라도 가서 즐긴다.", scores: { SOLO_HELL: 2 } },
            { text: "상대가 실망하지 않았는지 기분을 살핀다.", scores: { HEART_SIGNAL: 2 } },
            { text: "시간 아까우니까 아무 곳이나 바로 들어간다.", scores: { '72_HOURS': 2 } },
        ],
    },
    {
        id: 9, // 기존 11번
        text: "연인이 갑자기 차갑게 굴면 너는?",
        answers: [
            { text: "오늘 안에 무슨 일인지 확실하게 물어본다.", scores: { '72_HOURS': 2 } },
            { text: "내가 뭘 잘못했나 혼자 고민하며 생각이 많아진다.", scores: { TRANSIT_LOVE: 2 } },
            { text: "나도 똑같이 거리 두면서 상대 반응을 본다.", scores: { SOLO: 2 } },
            { text: "분위기가 풀릴 때까지 조심스럽게 살핀다.", scores: { HEART_SIGNAL: 2 } },
        ],
    },
    {
        id: 10, // 기존 12번
        text: "연애할 때 '질투'라는 감정에 대해 어떻게 대처해?",
        answers: [
            { text: "애정의 척도라고 생각한다. 적당히 티를 내서 긴장감을 준다.", scores: { BAD_ROMANCE: 2 } },
            { text: "상대방과 대화를 통해 확실하게 선을 정하고 정리한다.", scores: { SOLO: 2 } },
            { text: "질투는 나지만 속으로 삭이며 쿨한 척 행동한다.", scores: { HEART_SIGNAL: 2 } },
            { text: "질투할 상황 자체를 만들지 않으려 하고, 생기면 상처받는다.", scores: { TRANSIT_LOVE: 2 } },
        ],
    },
    {
        id: 11, // 기존 13번
        text: "전 애인과 같은 공간에 있게 된다면?",
        answers: [
            { text: "이미 끝난 사이. 덤덤하게 인사하거나 신경 안 쓴다.", scores: { SOLO: 2 } },
            { text: "보란 듯이 잘 지내는 모습을 보여주고 싶다.", scores: { SOLO_HELL: 2 } },
            { text: "그 시절의 감정이 올라와서 마음이 복잡해진다.", scores: { TRANSIT_LOVE: 2 } },
            { text: "새로운 사람에게 집중하느라 전 애인은 보이지도 않는다.", scores: { '72_HOURS': 2 } },
        ],
    },
    {
        id: 12, // 기존 14번
        text: "연애 중 스킨십의 속도에 대한 생각은?",
        answers: [
            { text: "서로 이끌린다면 굳이 속도를 조절할 필요 없다.", scores: { BAD_ROMANCE: 2 } },
            { text: "어느 정도 기간을 두고 신뢰가 쌓였을 때 진행하고 싶다.", scores: { SOLO: 2 } },
            { text: "상대방의 속도에 맞추며 단계별 설렘을 즐긴다.", scores: { HEART_SIGNAL: 2 } },
            { text: "호감이 확실하다면 빠르게 가까워지는 게 좋다.", scores: { '72_HOURS': 2 } },
        ],
    },
    {
        id: 13, // 기존 15번
        text: "누군가에게 마음이 생기는 결정적인 타이밍은?",
        answers: [
            { text: "함께 있을 때 텐션이 폭발하고 즐거움이 느껴질 때.", scores: { SOLO_HELL: 2 } },
            { text: "깊은 대화를 통해 이 사람의 가치관이 멋지다고 느낄 때.", scores: { SOLO: 2 } },
            { text: "찰나의 눈맞춤이나 스침에서 묘한 설렘이 생길 때.", scores: { HEART_SIGNAL: 2 } },
            { text: "짧은 시간 몰입해서 대화했는데 말도 안 되게 잘 통할 때.", scores: { '72_HOURS': 2 } },
        ],
    },
    {
        id: 14, // 기존 16번
        text: "데이트 비용이나 돈에 관한 부분은?",
        answers: [
            { text: "정확하게 반반 혹은 각자 쓴 만큼 낸다.", scores: { SOLO: 2 } },
            { text: "내가 사고 싶을 때 사고, 상대가 살 땐 기분 좋게 받는다.", scores: { HEART_SIGNAL: 2 } },
            { text: "눈치 보며 계산하기보다 상황에 맞게 시원하게 낸다.", scores: { SOLO_HELL: 2 } },
            { text: "돈보다 지금 이 순간의 분위기와 즐거움이 훨씬 중요하다.", scores: { BAD_ROMANCE: 2 } },
        ],
    },
    {
        id: 15, // 기존 17번
        text: "본격적으로 연애가 시작되었을 때 너는?",
        answers: [
            { text: "연애도 중요하지만 내 일상의 균형을 지키려 노력한다.", scores: { SOLO: 2 } },
            { text: "주변의 시선을 의식하기보다 둘만의 세상에 몰입한다.", scores: { BAD_ROMANCE: 2 } },
            { text: "여기저기 자랑도 하고 핫한 데이트도 원 없이 한다.", scores: { SOLO_HELL: 2 } },
            { text: "상대에게 조금씩 스며들며 깊은 관계를 만들어간다.", scores: { HEART_SIGNAL: 2 } },
        ],
    },
    {
        id: 16, // 기존 18번
        text: "연애 프로그램 출연 목적을 하나만 고른다면?",
        answers: [
            { text: "정말 나랑 딱 맞는 인생의 동반자를 찾기 위해.", scores: { SOLO: 2 } },
            { text: "잊지 못할 핫한 여름과 설레는 경험을 만들려고.", scores: { SOLO_HELL: 2 } },
            { text: "은근한 썸과 간지러운 설렘을 느껴보고 싶어서.", scores: { HEART_SIGNAL: 2 } },
            { text: "본능과 감정에만 충실한 사랑을 해보고 싶어서.", scores: { BAD_ROMANCE: 2 } },
        ],
    },
];