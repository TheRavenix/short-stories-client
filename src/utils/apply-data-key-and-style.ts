export function applyDataKeyAndStyle(
  key: string,
  data: Record<string, Record<string, string>>,
  styleTagId: string
) {
  let css = "";

  for (const dataItem in data) {
    css += `html[data-${key}="${dataItem}"] {`;
    for (const prop in data[dataItem]) {
      css += `--${prop}: ${data[dataItem][prop]};`;
    }
    css += `}`;
  }

  let styleTag = document.getElementById(styleTagId);

  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = styleTagId;
    document.head.appendChild(styleTag);
  }

  styleTag.textContent = css;
}
