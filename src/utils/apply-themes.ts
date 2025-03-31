function applyThemes(
  themes: Record<string, Record<string, string>>,
  styleTagId: string
) {
  let css = "";

  for (const themeName in themes) {
    css += `html[data-theme="${themeName}"] {`;
    for (const prop in themes[themeName]) {
      css += `--${prop}: ${themes[themeName][prop]};`;
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

export { applyThemes };
