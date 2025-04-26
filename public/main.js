function applySavedTheme() {
  try {
    const storedThemeStore = localStorage.getItem("theme_store");

    if (storedThemeStore !== null) {
      const themeStore = JSON.parse(storedThemeStore);
      const theme = themeStore.state.theme;
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.setAttribute("data-theme", "system");
    }
  } catch (e) {}
}

function start() {
  applySavedTheme();
}

start();
