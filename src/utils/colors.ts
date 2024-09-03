const colorMap: { [key: string]: string } = {
  black: "bg-black",
  orange: "bg-orange-600",
  green: "bg-green-500",
};

export function getColorClass(color: string): string {
  return colorMap[color] || "bg-gray-200";
}
