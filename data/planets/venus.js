// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: ดาวศุกร์ (Venus)
// ไฟล์: data/planets/venus.js
// ============================================================================

window.PLANET_DATA = window.PLANET_DATA || [];
window.PLANET_DATA = window.PLANET_DATA.filter(p => p.id !== 'venus');

(function () {
  'use strict';
  const FONT = '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif';
  const C = {
    bg:      '#160812',
    rose:    '#fb7185',
    crimson: '#be123c',
    wine:    '#4c0519',
    white:   '#fff1f2',
    peach:   '#fecdd3',
    gold:    '#fda4af'
  };

  // style helper — lineHeight เป็นอัตราส่วน
  function style(size, extra = {}) {
    return Object.assign({ fontFamily: FONT, fontSize: size, lineHeight: 1.23 }, extra);
  }

  function render(container, p, api) {
    const cfg = p.card, s = p.style;

    // วาดพื้นหลัง กรอบ หัวการ์ด และตกแต่ง
    api.basePanel(p.name, p.en, s, container, cfg);
    api.renderCardDecorations(p, container, cfg);
    api.planetImage(p, container, cfg);

    // --- ข้อเท็จจริง (แสดงทีละ 1 ข้อ พร้อมปุ่มเลื่อน) ---
    const facts = Array.isArray(p.facts) && p.facts.length ? p.facts : [p.info || ''];
    let factIdx = 0;
    const dyn = api.make('a-entity', { id: 'venus-dyn' }, container);

    function draw() {
      while (dyn.firstChild) dyn.removeChild(dyn.firstChild);

      // --- ข้อความ fact ปัจจุบัน ---
      // left-align: position.x = ขอบซ้ายของข้อความ (txt() บวก width/2 ให้อัตโนมัติ)
      // ขอบซ้าย x = -0.06 (ชิดเส้นแบ่ง) width = 1.18 → ขอบขวา = -0.06+1.18 = 1.12 ✓ (ในการ์ด)
      api.txt(
        dyn,
        '✦ ' + facts[factIdx],
        '-0.06 0.05 0.055',
        1.18,
        C.white, 'left',
        style(50, { lineHeight: 1.38, minFontSize: 42 })
      );

      // ตัวเลข n/total ด้านขวาล่าง
      api.txt(
        dyn,
        `${factIdx + 1} / ${facts.length}`,
        '1.00 -0.52 0.055',
        0.22, C.peach, 'center',
        style(60, { lineHeight: 1.0, minFontSize: 46 })
      );

      // ปุ่ม ◀ / ▶ เลื่อน fact
      if (facts.length > 1) {
        api.button(
          dyn, '◀', '0.10 -0.540 0.060', 0.24, 0.16,
          () => { factIdx = (factIdx + facts.length - 1) % facts.length; draw(); },
          '#3b0a1a', '#9f1239',
          style(110, { textColor: C.white, minFontSize: 90, opacity: 1 })
        );
        api.button(
          dyn, '▶', '0.44 -0.540 0.060', 0.24, 0.16,
          () => { factIdx = (factIdx + 1) % facts.length; draw(); },
          '#3b0a1a', '#9f1239',
          style(110, { textColor: C.white, minFontSize: 90, opacity: 1 })
        );
      }

      // --- ปุ่มหลัก 2 ปุ่ม: ขนาดใหญ่ ฟอนต์ใหญ่ เห็นทันทีโดยไม่ต้องชี้เมาส์ ---
      api.button(
        dyn,
        'ปิดการ์ด',
        '-0.72 -0.755 0.055',
        0.78, 0.19,
        () => api.closeUI(),
        C.wine, '#9f1239',
        style(130, {
          textColor: C.white,
          maxHeight: 0.17,
          minFontSize: 100,
          borderColor: C.gold,
          borderThickness: 0.006,
          opacity: 1
        })
      );
      api.button(
        dyn,
        '✦ เริ่มมินิเกม',
        '0.72 -0.755 0.055',
        0.78, 0.19,
        () => api.startQuiz(p),
        C.crimson, '#e11d48',
        style(130, {
          textColor: '#ffffff',
          maxHeight: 0.17,
          minFontSize: 100,
          borderColor: C.peach,
          borderThickness: 0.006,
          opacity: 1
        })
      );

      // รีเฟรช raycaster
      setTimeout(() => {
        [
          document.querySelector('a-scene'),
          document.querySelector('#desktop-cursor'),
          document.getElementById('right-controller'),
          document.getElementById('left-controller')
        ].forEach(el => {
          const rc = el?.components?.raycaster;
          if (rc?.refreshObjects) rc.refreshObjects();
        });
      }, 0);
    }

    draw();
  }

  function safeRender(container, p, api) {
    try {
      render(container, p, api);
    } catch (e) {
      console.error('[Venus] Custom card fallback:', e);
      while (container.firstChild) container.removeChild(container.firstChild);
      api.basePanel(p.name, p.en, p.style, container, p.card);
      api.renderCardDecorations(p, container, p.card);
      const sphere = api.planetImage(p, container, p.card);
      api.renderCardContent(p, container, p.card);
      api.renderCardButtons(p, container, p.card, sphere);
    }
  }

  window.PLANET_DATA.push({
    id: 'venus',
    name: 'ดาวศุกร์',
    en: 'Venus',
    info: 'ดาวเคราะห์ที่ร้อนที่สุดในระบบสุริยะ และสว่างที่สุดบนท้องฟ้ารองจากดวงจันทร์',
    facts: [
      'ฉายาฝาแฝดโลก ขนาดและมวลใกล้เคียงโลกมากที่สุด',
      'ผิวร้อนที่สุดในระบบสุริยะ อุณหภูมิสูงถึง 465°C',
      'หมุนรอบตัวเองกลับทิศ ดวงอาทิตย์ขึ้นทิศตะวันตก',
      'สว่างที่สุดในบรรดาดาวบนท้องฟ้า รู้จักในชื่อดาวประกายพรึก'
    ],
    texture: 'assets/images/venus.jpg',
    color: '#e7bd7b',
    radius: 0.38,
    image: '',

    style: {
      fontFamily: FONT,
      fontSize: 44,
      panelBgColor: C.bg,
      panelBorderColor: C.rose,
      titleColor: C.white,
      subtitleColor: C.peach,
      textColor: '#ffffff',
      buttonColor: C.crimson,
      buttonHoverColor: '#e11d48',
      closeButtonColor: C.wine,
      highlightColor: C.rose
    },

    renderCard: safeRender,

    card: {
      width: 2.65,
      height: 1.80,
      position: '0 0 0',
      scale: 0.8,
      rotation: '0 0 0',
      distance: 1.8,
      layout: 'horizontal',

      background: { color: C.bg, opacity: 0.88, image: '' },

      border: {
        style: 'frame',
        color: C.rose,
        thickness: 0.012,
        cornerSize: 0.12,
        cornerColor: C.gold,
        glowColor: C.rose,
        glowOpacity: 0.18
      },

      header: {
        show: true,
        title: 'ดาวศุกร์',
        subtitle: 'V E N U S  ·  ดาวฝาแฝดของโลก',
        titlePos: '0 0.77 0.02',
        subtitlePos: '0 0.665 0.02',
        titleWidth: 1.55,
        subtitleWidth: 1.55,
        showDivider: true,
        dividerY: 0.605,
        dividerWidth: 2.4
      },

      media: {
        show: true,
        show3D: true,
        showCaption: true,
        caption: 'แบบจำลอง 3D ดาวศุกร์',
        captionColor: C.peach,
        position: '-0.80 0 0.035',
        modelRadius: 0.22,
        showImage: false,
        frameColor: C.gold
      },

      content: {
        position: '0.47 -0.05 0.03',
        width: 1.38,
        maxHeight: 0.80,
        fontSize: 44,
        minFontSize: 28,
        lineHeight: 1.3,
        align: 'left',
        bullet: '✦ '
      },

      sections: [],

      decorations: [
        // แผ่นกระจกจาง ๆ ด้านซ้าย (โมเดล) และด้านขวา (ความรู้)
        { type: 'plane', position: '-0.80 -0.125 0.006', width: 0.92, height: 1.04, color: '#3a1224', opacity: 0.55 },
        { type: 'plane', position: '0.47 -0.11 0.006',  width: 1.50, height: 0.98, color: '#2c0e1b', opacity: 0.55 },

        // แถบพื้นหลังด้านล่างรองรับปุ่ม
        { type: 'plane', position: '0 -0.755 0.008', width: 2.30, height: 0.27, color: '#3a1224', opacity: 0.45 },

        // เส้นกรอบบาง (hairline) ซ้อนด้านในกรอบนอก
        { type: 'plane', position: '0 0.835 0.012',   width: 2.46, height: 0.004, color: C.gold, opacity: 0.5 },
        { type: 'plane', position: '0 -0.835 0.012',  width: 2.46, height: 0.004, color: C.gold, opacity: 0.5 },
        { type: 'plane', position: '-1.23 0 0.012',   width: 0.004, height: 1.67, color: C.gold, opacity: 0.5 },
        { type: 'plane', position: '1.23 0 0.012',    width: 0.004, height: 1.67, color: C.gold, opacity: 0.5 },

        // เส้นประดับสองข้างบรรทัดชื่อภาษาอังกฤษ
        { type: 'plane', position: '-1.00 0.665 0.012', width: 0.38, height: 0.004, color: C.gold, opacity: 0.8 },
        { type: 'plane', position: '1.00 0.665 0.012',  width: 0.38, height: 0.004, color: C.gold, opacity: 0.8 },

        // เส้นเน้นใต้แผงโมเดลและบนแผงความรู้
        { type: 'plane', position: '-0.80 -0.65 0.012', width: 0.80, height: 0.004, color: C.gold, opacity: 0.7 },
        { type: 'plane', position: '0.47 0.385 0.012',  width: 1.40, height: 0.004, color: C.gold, opacity: 0.55 },

        // จุดดาวประดับ
        { type: 'circle', position: '-1.10 0.74 0.02',   radius: 0.014, color: C.peach, opacity: 0.9 },
        { type: 'circle', position: '1.10 0.74 0.02',    radius: 0.014, color: C.peach, opacity: 0.9 },
        { type: 'circle', position: '-0.565 0.336 0.02', radius: 0.012, color: C.peach, opacity: 0.9 },
        { type: 'circle', position: '-1.136 -0.235 0.02',radius: 0.010, color: C.gold,  opacity: 0.9 },
        { type: 'circle', position: '-0.45 -0.50 0.02',  radius: 0.008, color: C.peach, opacity: 0.8 },
        { type: 'circle', position: '1.12 -0.50 0.02',   radius: 0.010, color: C.gold,  opacity: 0.8 }
      ],

      buttonLayout: { mode: 'custom' },

      // Fallback buttons (ใช้เมื่อ renderCard ล้มเหลว)
      buttons: [
        {
          id: 'close', enabled: true, label: 'ปิดการ์ด', action: 'close',
          position: '-0.72 -0.755 0.035',
          width: 0.78, height: 0.19,
          color: C.wine, hoverColor: '#9f1239',
          textColor: C.white, fontSize: 130
        },
        {
          id: 'quiz', enabled: true, label: '✦ เริ่มมินิเกม', action: 'quiz',
          position: '0.72 -0.755 0.035',
          width: 0.78, height: 0.19,
          color: C.crimson, hoverColor: '#e11d48',
          textColor: '#ffffff', fontSize: 130
        }
      ]
    }
  });
})();
