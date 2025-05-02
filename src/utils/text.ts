function capitalize(text: string): string {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function removeHyphen(text: string): string {
  const newText = text.split("-").join(" ");
  return newText;
}

function splitByNewLine(text: string): string[] {
  return text.length > 0 ? text.split("\n") : [];
}

function joinByNewLine(textList: string[]): string {
  return textList.join("\n");
}

export { capitalize, removeHyphen, splitByNewLine, joinByNewLine };
