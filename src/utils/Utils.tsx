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

  // convert month number to name...
  export function getMonthName(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', { month: 'short' });
  }

  // Filter array based on month and year...
  export function filterMonthAndYear(array, month, year) {
    return array.map((item) => {
      if (Number.parseInt(item.month) === month && Number.parseInt(item.year) === year)
      return item;
    })
  }

export function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}