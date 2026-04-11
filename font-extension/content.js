// StudyFont — auto-apply on page load
chrome.storage.sync.get(["sfSettings"], (res) => {
  const S = res.sfSettings;
  if (!S || !S.enabled) return;

  let el = document.getElementById("studyfont-style");
  if (!el) {
    el = document.createElement("style");
    el.id = "studyfont-style";
    document.head.appendChild(el);
  }

  el.textContent = `
    body, p, div, span, li, td, th,
    h1, h2, h3, h4, h5, h6,
    a, label, article, section, main {
      font-family: ${S.font} !important;
      font-size: ${S.size}px !important;
      line-height: ${S.lh} !important;
    }
    code, pre, kbd, samp {
      font-family: 'Courier New', Courier, monospace !important;
      font-size: ${Math.max(12, S.size - 1)}px !important;
    }
  `;
});
