import { Dimensions, Platform } from "react-native"; 

export const WIDTH = Dimensions.get('window').width
export const HEIGHT = Dimensions.get('window').height
export const platform = Platform.OS

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
    specificFeeling: [
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
    specificFeeling: [
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
    specificFeeling: [
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
    specificFeeling: [
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
    specificFeeling: [
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
    specificFeeling: [
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
    specificFeeling: [
      {
        id: 1,
        name: 'Exited',
      },
      {
        id: 2,
        name: 'Self-confidence',
      },
      {
        id: 3,
        name: 'Powerful',
      },
      {
        id: 4,
        name: 'Joyful',
      },
    ]
  },
  {
    id: 2,
    emoji: require('../../assets/images/good.png'),
    feelingName: 'good',
    specificFeeling: [
      {
        id: 5,
        name: 'Glad',
      },
      {
        id: 6,
        name: 'Grateful',
      },
      {
        id: 7,
        name: 'Delighted',
      },
      {
        id: 8,
        name: 'Pleased',
      },
      {
        id: 9,
        name: 'Optimistic',
      }
    ]
  },
  {
    id: 3,
    emoji: require('../../assets/images/not_bad.png'),
    feelingName: 'not bad',
    specificFeeling: [
      {
        id: 10,
        name: 'Glad',
      },
      {
        id: 11,
        name: 'Grateful',
      },
      {
        id: 12,
        name: 'Delighted',
      },
    ]
  },
  {
    id: 4,
    emoji: require('../../assets/images/bad.png'),
    feelingName: 'bad',
    specificFeeling: [
      {
        id: 13,
        name: 'Upset',
      },
      {
        id: 14,
        name: 'Heavy',
      },
      {
        id: 15,
        name: 'Sorrowful',
      },
      {
        id: 16,
        name: 'Crushed',
      },
      {
        id: 17,
        name: 'Disgusted',
      }
    ]
  },
  {
    id: 5,
    emoji: require('../../assets/images/awful.png'),
    feelingName: 'awful',
    specificFeeling: [
      {
        id: 18,
        name: 'Upset',
      },
      {
        id: 19,
        name: 'Heavy',
      },
      {
        id: 20,
        name: 'Sorrowful',
      },
      {
        id: 21,
        name: 'Crushed',
      },
      {
        id: 22,
        name: 'Disgusted',
      }
    ]
  },
];
