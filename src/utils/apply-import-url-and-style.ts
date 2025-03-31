export function applyImportUrlAndStyle(data: string[], styleTagId: string) {
  let css = "";

  for (const dataItem of data) {
    css += `@import url("${dataItem}");`;
  }

  let styleTag = document.getElementById(styleTagId);

  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = styleTagId;
    document.head.appendChild(styleTag);
  }

  styleTag.textContent = css;
}
