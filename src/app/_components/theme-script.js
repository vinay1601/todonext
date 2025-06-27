export const themeInitializerScript = `
  (function () {
    try {
      const theme = localStorage.getItem('theme') || 'light';
      document.documentElement.classList.add(theme);
    } catch (e) {}
  })();
`;
