
(function () {
  "use strict";

  const SVG_ATTR =
    'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';

  const ICONS = {
    // Marca / sustentabilidade
    leaf: '<path d="M4 20c0-8 6-14 16-14 0 10-6 16-14 16-2 0-2 0-2-2z"/><path d="M4 20c4-4 7-7 12-10"/>',
    sprout: '<path d="M12 22V11"/><path d="M12 11c-3 0-6-2-6-6 3 0 6 2 6 6z"/><path d="M12 11c3 0 6-2 6-6-3 0-6 2-6 6z"/>',
    recycle: '<path d="M7 17l-3 3-2-3"/><path d="M4 20c-1-2-2-5 0-8l2-3"/><path d="M14 4l3-2 2 3"/><path d="M16 3c2 1 4 3 4 6v3"/><path d="M21 14l-1 4-4-1"/><path d="M20 18c-2 1-5 1-8-1l-3-2"/>',

    // Tecnologia / interface
    phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/>',
    chip: '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="2" x2="9" y2="5"/><line x1="15" y1="2" x2="15" y2="5"/><line x1="9" y1="19" x2="9" y2="22"/><line x1="15" y1="19" x2="15" y2="22"/><line x1="2" y1="9" x2="5" y2="9"/><line x1="2" y1="15" x2="5" y2="15"/><line x1="19" y1="9" x2="22" y2="9"/><line x1="19" y1="15" x2="22" y2="15"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>',

    // Premiação
    trophy: '<path d="M8 4h8v6a4 4 0 01-8 0V4z"/><path d="M8 6H5a2 2 0 002 4"/><path d="M16 6h3a2 2 0 01-2 4"/><path d="M10 16h4l1 4H9z"/>',
    gift: '<rect x="3" y="9" width="18" height="11" rx="1"/><line x1="12" y1="9" x2="12" y2="20"/><path d="M12 9c-2 0-4-1-4-3s2-3 4 0c2-3 4-2 4 0s-2 3-4 3z"/>',
    coin: '<circle cx="12" cy="12" r="9"/><path d="M14 9h-3a2 2 0 000 4h2a2 2 0 010 4H10"/><line x1="12" y1="7" x2="12" y2="9"/><line x1="12" y1="17" x2="12" y2="19"/>',
    medal: '<circle cx="12" cy="15" r="6"/><path d="M8 3l4 6 4-6"/><path d="M12 12v6"/>',

    // Alertas / ideias
    alert: '<path d="M12 3L2 20h20L12 3z"/><line x1="12" y1="10" x2="12" y2="14"/><circle cx="12" cy="17" r="0.6" fill="currentColor"/>',
    bulb: '<path d="M9 17h6"/><path d="M10 20h4"/><path d="M12 3a6 6 0 00-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 00-4-10z"/>',

    // Genéricos
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>',
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="3" x2="8" y2="7"/><line x1="16" y1="3" x2="16" y2="7"/>',
    search: '<circle cx="11" cy="11" r="6"/><line x1="20" y1="20" x2="15" y2="15"/>',
    balance: '<line x1="12" y1="3" x2="12" y2="21"/><path d="M5 8l-3 6h6z"/><path d="M19 8l-3 6h6z"/><path d="M5 8c2 0 5-1 7-2 2 1 5 2 7 2"/><line x1="6" y1="21" x2="18" y2="21"/>',

    // Ações sustentáveis (plataforma)
    bike: '<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-7h5l3 7"/><line x1="10" y1="10" x2="14" y2="10"/><circle cx="15" cy="6" r="1" fill="currentColor"/>',
    droplet: '<path d="M12 3s-6 7-6 12a6 6 0 0012 0c0-5-6-12-6-12z"/>',
    lightbulb: '<path d="M9 17h6"/><path d="M10 20h4"/><path d="M12 3a6 6 0 00-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 00-4-10z"/>',
    salad: '<path d="M3 11h18a9 9 0 01-18 0z"/><path d="M7 11c0-3 2-5 5-5"/><path d="M12 6c3 0 5 2 5 5"/><circle cx="9" cy="9" r="0.8" fill="currentColor"/><circle cx="15" cy="9" r="0.8" fill="currentColor"/>',
    bag: '<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6a3 3 0 016 0v2"/>',
    tree: '<path d="M12 3l-5 7h3l-4 6h12l-4-6h3z"/><line x1="12" y1="16" x2="12" y2="21"/>',

    // Contato
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    pin: '<path d="M12 22s-7-7-7-13a7 7 0 0114 0c0 6-7 13-7 13z"/><circle cx="12" cy="9" r="2.5"/>',
    school: '<path d="M3 9l9-5 9 5-9 5z"/><path d="M7 11v5c0 2 3 3 5 3s5-1 5-3v-5"/>',

    // Validador
    upload: '<path d="M12 3v12"/><path d="M7 8l5-5 5 5"/><path d="M5 21h14"/>',
    camera: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7l2-3h4l2 3"/><circle cx="12" cy="13" r="3.5"/>',
    robot: '<rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 8V4"/><circle cx="12" cy="3" r="1.2" fill="currentColor"/><circle cx="9.5" cy="13" r="1" fill="currentColor"/><circle cx="14.5" cy="13" r="1" fill="currentColor"/><path d="M9 17h6"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',
    check: '<path d="M5 12l5 5 9-11"/>',
    play: '<path d="M7 4l13 8-13 8z" fill="currentColor"/>',

    // Redes (logos reais, traçado oficial simplificado)
    github:
      '<path fill="currentColor" stroke="none" d="M12 2C6.48 2 2 6.58 2 12.25c0 4.54 2.87 8.38 6.84 9.74.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.36-3.37-1.36-.46-1.19-1.12-1.5-1.12-1.5-.91-.64.07-.62.07-.62 1.01.07 1.54 1.06 1.54 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.4 9.4 0 0112 6.84c.85 0 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.71 1.03 1.62 1.03 2.74 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.04 10.04 0 0022 12.25C22 6.58 17.52 2 12 2z"/>',
    linkedin:
      '<path fill="currentColor" stroke="none" d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.56v-6.6c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.52 1.71-2.52 3.48V22H7.72V8z"/>',
  };

  function svgFor(name) {
    const body = ICONS[name];
    if (!body) return "";
    return `<svg ${SVG_ATTR} class="icone">${body}</svg>`;
  }

  function inject() {
    document.querySelectorAll("[data-icon]").forEach((el) => {
      const name = el.getAttribute("data-icon");
      const svg = svgFor(name);
      if (svg) el.innerHTML = svg;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }

  window.SoulUpIcons = { svgFor, inject };
})();
