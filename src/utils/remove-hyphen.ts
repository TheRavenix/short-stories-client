function removeHyphen(text: string): string {
  const newText = text.split("-").join(" ");
  return newText;
}

export { removeHyphen };
