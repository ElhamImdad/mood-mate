import { EntriesFeelingModel } from "../models/FeelingModel";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function Icon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
}) {
  return <MaterialCommunityIcons size={30} style={{ padding: 0 }} {...props} />;
}

export function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
}) {
  return (
    <MaterialCommunityIcons size={25} style={{ marginBottom: -3 }} {...props} />
  );
}

// To convert month number to name...
export function getMonthName(monthNumber: number) {
  const date = new Date();
  date.setMonth(monthNumber - 1);

  return date.toLocaleString("en-US", { month: "short" });
}

// To sort the dates in descending order...
export function sortDates(data) {
  let sortedData = data.sort(
    (a: EntriesFeelingModel, b: EntriesFeelingModel) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  );
  return sortedData;
}

// To return number of day from the desired month...
export function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
