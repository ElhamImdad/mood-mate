import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from './types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          HomeNavigator: {
            screens: {
              TabOneScreen: 'home',
            },
          },
          Stats: {
            screens: {
              TabTwoScreen: 'stats',
            },
          },
          Settings: {
            screens: {
              TabThreeScreen: 'settings',
            },
          },
        },
      },
      Modal: 'modal',
    },
  },
};

export default linking;