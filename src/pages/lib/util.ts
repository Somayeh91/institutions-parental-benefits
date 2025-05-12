export async function fetchData(url: string) {
  const response = await fetch(url);
  const text = await response.text();

  return text.split("\n").map((line) => line.split(","));
  // .map((cell) => cell.trim()));
}
