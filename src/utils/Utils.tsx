import { MaterialCommunityIcons } from '@expo/vector-icons';

export function Icon(props: {
    name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
    color: string;
  }) {
    return <MaterialCommunityIcons size={30} style={{ padding: 0 }} {...props} />;
  }

export function TabBarIcon(props: {
    name: React.ComponentProps<typeof MaterialCommunityIcons>['name'];
    color: string;
  }) {
    return <MaterialCommunityIcons size={25} style={{ marginBottom: -3 }} {...props} />;
  }

  // To substring the first 3 litters
export function SubstringFirstLetters(text: string, count: number) {
  return text.substring(0, count)
}