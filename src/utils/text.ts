export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export function removeHyphen(text: string) {
  const newText = text.split('-').join(' ')
  return newText
}

export function splitByNewLine(text: string){
  return text.length > 0 ? text.split('\n') : []
}

export function joinByNewLine(textList: string[]) {
  return textList.join('\n')
}
