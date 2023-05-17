import { Dimensions } from "react-native"; 

export const WIDTH = Dimensions.get('window').width
export const HEIGHT = Dimensions.get('window').height

export const INSPIRATION = [
  {
    id: 1,
    title: "musics",
    iconName: "music",
  },
  {
    id: 2,
    title: "videos",
    iconName: "play-circle-outline",
  },
  {
    id: 3,
    title: "books",
    iconName: "book-open-variant",
  },
  {
    id: 4,
    title: "favorite",
    iconName: "hand-heart-outline",
  },
];

export const MOOD_ENTRIES = [
  {
    id: 1,
    day: "01",
    month:"May",
    feelingName: "AWESOME",
    SpecifyFeeling: [
      {
        id: 1,
        name: 'Glad',
      },
      {
        id: 2,
        name: 'Grateful',
      },
    ],
    note: "Powerful",
    feelingIcon: "",
  },
  {
    id: 2,
    day: "02",
    month:"May",
    feelingName: "AWESOME",
    SpecifyFeeling: [
      {
        id: 1,
        name: 'Glad',
      },
      {
        id: 2,
        name: 'Grateful',
      },
    ],
    note: "",
    feelingIcon: "",
  },
  {
    id: 3,
    day: "03",
    month:"May",
    feelingName: "AWESOME",
    SpecifyFeeling: [
      {
        id: 1,
        name: 'Glad',
      },
      {
        id: 2,
        name: 'Grateful',
      },
    ],
    note: "",
    feelingIcon: "",
  },
  {
    id: 4,
    day: "04",
    month:"May",
    feelingName: "AWESOME",
    SpecifyFeeling: [
      {
        id: 1,
        name: 'Glad',
      },
      {
        id: 2,
        name: 'Grateful',
      },
    ],
    note: "Powerful",
    feelingIcon: "",
  },
  {
    id: 5,
    day: "05",
    month:"May",
    feelingName: "AWESOME",
    SpecifyFeeling: [
      {
        id: 1,
        name: 'Glad',
      },
      {
        id: 2,
        name: 'Grateful',
      },
    ],
    note: "Powerful",
    feelingIcon: "",
  },
  {
    id: 6,
    day: "06",
    month:"May",
    feelingName: "AWESOME",
    SpecifyFeeling: [
      {
        id: 1,
        name: 'Glad',
      },
      {
        id: 2,
        name: 'Grateful',
      },
    ],
    note: "Powerful",
    feelingIcon: "",
  },
];

export const FEELING = [
  {
    id: 1,
    emoji: require('../../assets/images/awesome.png'),
    feelingName: 'awesome',
    SpecifyFeeling: [
      {
        id: 1,
        name: 'Exited',
        selected: false,
      },
      {
        id: 2,
        name: 'Self-confidence',
        selected: false,
      },
      {
        id: 3,
        name: 'Powerful',
        selected: false,
      },
      {
        id: 4,
        name: 'Joyful',
        selected: false,
      },
    ]
  },
  {
    id: 2,
    emoji: require('../../assets/images/good.png'),
    feelingName: 'good',
    SpecifyFeeling: [
      {
        id: 5,
        name: 'Glad',
        selected: false,
      },
      {
        id: 6,
        name: 'Grateful',
        selected: false,
      },
      {
        id: 7,
        name: 'Delighted',
        selected: false,
      },
      {
        id: 8,
        name: 'Pleased',
        selected: false,
      },
      {
        id: 9,
        name: 'Optimistic',
        selected: false,
      }
    ]
  },
  {
    id: 3,
    emoji: require('../../assets/images/not_bad.png'),
    feelingName: 'not bad',
    SpecifyFeeling: [
      {
        id: 10,
        name: 'Glad',
        selected: false,
      },
      {
        id: 11,
        name: 'Grateful',
        selected: false,
      },
      {
        id: 12,
        name: 'Delighted',
        selected: false,
      },
    ]
  },
  {
    id: 4,
    emoji: require('../../assets/images/bad.png'),
    feelingName: 'bad',
    SpecifyFeeling: [
      {
        id: 13,
        name: 'Upset',
        selected: false,
      },
      {
        id: 14,
        name: 'Heavy',
        selected: false,
      },
      {
        id: 15,
        name: 'Sorrowful',
        selected: false,
      },
      {
        id: 16,
        name: 'Crushed',
        selected: false,
      },
      {
        id: 17,
        name: 'Disgusted',
        selected: false,
      }
    ]
  },
  {
    id: 5,
    emoji: require('../../assets/images/awful.png'),
    feelingName: 'awful',
    SpecifyFeeling: [
      {
        id: 18,
        name: 'Upset',
        selected: false,
      },
      {
        id: 19,
        name: 'Heavy',
        selected: false,
      },
      {
        id: 20,
        name: 'Sorrowful',
        selected: false,
      },
      {
        id: 21,
        name: 'Crushed',
        selected: false,
      },
      {
        id: 22,
        name: 'Disgusted',
        selected: false,
      }
    ]
  },
];
