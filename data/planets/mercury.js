// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: ดาวพุธ (Mercury)
// ไฟล์: data/planets/mercury.js
// ============================================================================
// หมายเหตุรูปแบบค่า (ยึดตามไฟล์ saturn.js ที่ใช้งานได้จริง)
//   - ตำแหน่งทุกชนิดเป็นสตริง 'x y z' เช่น '-0.80 0 0.035' (ห้ามใช้ { x, y, z })
//   - lineHeight เป็นอัตราส่วน เช่น 1.3 (ไม่ใช่พิกเซล)
//   - fontSize ของปุ่มอยู่บนสเกลแคนวาส 1024 (ใช้ราว 100–130)
//   - bullet = สัญลักษณ์หน้าหัวข้อย่อย, decorations ใช้ type 'plane' หรือ 'circle'
//
// [ปรับปรุงล่าสุด] ใช้หลักการเดียวกับ venus.js
//   - วาดการ์ดเองผ่าน renderCard: ข้อเท็จจริงครบ 4 ข้อในหน้าเดียว (ฟอนต์ 46, ระยะแถว 0.20)
//   - ปุ่มหลักขนาดใหญ่ 0.78 x 0.19 ฟอนต์ 130
//   - ถ้า renderCard ผิดพลาด จะกลับไปใช้ระบบมาตรฐาน (content + buttons ด้านล่าง) อัตโนมัติ
// ============================================================================

// ---- สวิตช์ทดสอบ: ถ้าตัวอักษรเบี้ยว ให้ลองเปลี่ยนทีละค่าเป็น false แล้วรีเฟรช เพื่อหาว่าตัวไหนทำให้เบี้ยว ----
const MERCURY_USE_BORDER = true;       // กรอบรอบการ์ด
const MERCURY_USE_GLOW = true;         // แสงเรืองรอบกรอบ
const MERCURY_USE_DECORATIONS = true;  // เส้น/แผ่น/จุดตกแต่ง
// ----------------------------------------------------------------------------------------------

window.PLANET_DATA = window.PLANET_DATA || [];
window.PLANET_DATA = window.PLANET_DATA.filter(p => p.id !== 'mercury');

(function () {
  'use strict';
  const FONT = '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif';
  const C = {
    bg:     '#07090e',
    silver: '#e2e8f0',
    slate:  '#1e293b',
    steel:  '#94a3b8',
    sky:    '#38bdf8',
    blue:   '#0369a1',
    white:  '#f8fafc'
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

    // --- ข้อเท็จจริง (แสดงครบทุกข้อในหน้าเดียว ไม่ต้องกดเลื่อน) ---
    const facts = Array.isArray(p.facts) && p.facts.length ? p.facts : [p.info || ''];
    const dyn = api.make('a-entity', { id: 'mercury-dyn' }, container);

    function draw() {
      while (dyn.firstChild) dyn.removeChild(dyn.firstChild);

      // left-align: position.x = ขอบซ้ายของข้อความ (txt() บวก width/2 ให้อัตโนมัติ)
      // ขอบซ้าย x = -0.06 width = 1.18 → ขอบขวา 1.12 (ในการ์ด)
      // ฟอนต์ 52 ระยะห่างแถว 0.17 จัดกลุ่มกลางแผง → y = 0.145, -0.025, -0.195, -0.365
      const FACT_TOP_Y = 0.145;
      const FACT_STEP = 0.17;
      facts.forEach((fact, i) => {
        api.txt(
          dyn,
          '• ' + fact,
          `-0.06 ${(FACT_TOP_Y - i * FACT_STEP).toFixed(3)} 0.055`,
          1.18,
          C.white, 'left',
          style(52, { lineHeight: 1.15, minFontSize: 40, maxHeight: 0.16 })
        );
      });

      // --- ปุ่มหลัก 2 ปุ่ม: ขนาดใหญ่ ฟอนต์ใหญ่ เห็นทันทีโดยไม่ต้องชี้เมาส์ ---
      api.button(
        dyn,
        'ปิดการ์ด',
        '-0.72 -0.755 0.055',
        0.78, 0.19,
        () => api.closeUI(),
        C.slate, '#475569',
        style(130, {
          textColor: '#f1f5f9',
          maxHeight: 0.17,
          minFontSize: 100,
          borderColor: C.steel,
          borderThickness: 0.006,
          opacity: 1
        })
      );
      api.button(
        dyn,
        'เริ่มมินิเกม',
        '0.72 -0.755 0.055',
        0.78, 0.19,
        () => api.startQuiz(p),
        C.blue, '#0ea5e9',
        style(130, {
          textColor: '#ffffff',
          maxHeight: 0.17,
          minFontSize: 100,
          borderColor: '#7dd3fc',
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
      console.error('[Mercury] Custom card fallback:', e);
      while (container.firstChild) container.removeChild(container.firstChild);
      api.basePanel(p.name, p.en, p.style, container, p.card);
      api.renderCardDecorations(p, container, p.card);
      const sphere = api.planetImage(p, container, p.card);
      api.renderCardContent(p, container, p.card);
      api.renderCardButtons(p, container, p.card, sphere);
    }
  }

  window.PLANET_DATA.push({
    // --- 1. ข้อมูลพื้นฐานและเนื้อหาของดาว ---
    id: 'mercury',
    name: 'ดาวพุธ',
    en: 'Mercury',
    info: 'ดาวเคราะห์ที่อยู่ใกล้ดวงอาทิตย์ที่สุดและมีขนาดเล็กที่สุดในระบบสุริยะ',
    facts: [
      'ฉายาเตาไฟแช่แข็ง กลางวันร้อนจัด กลางคืนหนาวจัด',
      'โคจรรอบดวงอาทิตย์เร็วที่สุด ครบรอบเพียง 88 วัน',
      'ดาวเคราะห์หินขนาดเล็ก ไม่มีดวงจันทร์บริวาร',
      'พื้นผิวเต็มไปด้วยหลุมอุกกาบาต คล้ายดวงจันทร์ของโลก'
    ],

    // --- 2. โมเดล 3D ---
    texture: 'assets/images/mercury.jpg',
    color: '#a7a5a1',
    radius: 0.30,
    image: '',

    // --- 3. สไตล์หลักของดาวดวงนี้ ---
    style: {
      fontFamily: FONT,
      fontSize: 44,
      panelBgColor: C.bg,
      panelBorderColor: C.silver,
      titleColor: '#ffffff',
      subtitleColor: '#cbd5e1',
      textColor: C.white,
      buttonColor: C.blue,
      buttonHoverColor: '#0ea5e9',
      closeButtonColor: C.slate,
      highlightColor: C.sky
    },

    renderCard: safeRender,

    // --- 4. การ์ดข้อมูล (ขนาดและตำแหน่งชุดเดียวกับดาวศุกร์/ดาวเสาร์) ---
    card: {
      width: 2.65,
      height: 1.80,
      position: '0 0 0',
      scale: 0.8,
      rotation: '0 0 0',
      distance: 1.8,
      layout: 'horizontal',

      background: { color: C.bg, opacity: 0.88, image: '' },

      // กรอบแบบมีมุม (frame) พร้อมแสงเรืองรอบการ์ด
      border: MERCURY_USE_BORDER ? {
        style: 'frame',
        color: C.silver,
        thickness: 0.012,
        cornerSize: 0.12,
        cornerColor: C.sky,
        glowColor: C.sky,
        glowOpacity: MERCURY_USE_GLOW ? 0.18 : 0
      } : { style: 'none', thickness: 0, cornerSize: 0, glowOpacity: 0 },

      header: {
        show: true,
        title: 'ดาวพุธ',
        subtitle: 'M E R C U R Y  ·  ดาวเคราะห์ชั้นใน',
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
        caption: 'แบบจำลอง 3D ดาวพุธ',
        captionColor: '#cbd5e1',
        position: '-0.80 0 0.035',
        modelRadius: 0.22,
        showImage: false,
        frameColor: C.sky
      },

      // ใช้เมื่อ renderCard ล้มเหลว (fallback)
      content: {
        position: '0.47 -0.05 0.03',
        width: 1.38,
        maxHeight: 0.80,
        fontSize: 44,
        minFontSize: 28,
        lineHeight: 1.3,
        align: 'left',
        bullet: '• '
      },

      sections: [],

      // --- ตกแต่งเพิ่มเติม ---
      decorations: !MERCURY_USE_DECORATIONS ? [] : [
        // แผ่นกระจกจาง ๆ ด้านซ้าย (โมเดล) และด้านขวา (ความรู้)
        { type: 'plane', position: '-0.80 -0.125 0.006', width: 0.92, height: 1.04, color: '#131b2c', opacity: 0.55 },
        { type: 'plane', position: '0.47 -0.11 0.006',  width: 1.50, height: 0.98, color: '#0e1524', opacity: 0.55 },

        // แถบพื้นหลังด้านล่างรองรับปุ่ม (ขนาดเดียวกับดาวศุกร์)
        { type: 'plane', position: '0 -0.755 0.008', width: 2.30, height: 0.27, color: '#131b2c', opacity: 0.45 },

        // เส้นกรอบบาง (hairline) ซ้อนด้านในกรอบนอก
        { type: 'plane', position: '0 0.835 0.012',  width: 2.46, height: 0.004, color: C.steel, opacity: 0.5 },
        { type: 'plane', position: '0 -0.835 0.012', width: 2.46, height: 0.004, color: C.steel, opacity: 0.5 },
        { type: 'plane', position: '-1.23 0 0.012',  width: 0.004, height: 1.67, color: C.steel, opacity: 0.5 },
        { type: 'plane', position: '1.23 0 0.012',   width: 0.004, height: 1.67, color: C.steel, opacity: 0.5 },

        // เส้นประดับสองข้างบรรทัดชื่อภาษาอังกฤษ
        { type: 'plane', position: '-1.00 0.665 0.012', width: 0.38, height: 0.004, color: C.sky, opacity: 0.8 },
        { type: 'plane', position: '1.00 0.665 0.012',  width: 0.38, height: 0.004, color: C.sky, opacity: 0.8 },

        // เส้นเน้นใต้แผงโมเดลและบนแผงความรู้
        { type: 'plane', position: '-0.80 -0.65 0.012', width: 0.80, height: 0.004, color: C.sky, opacity: 0.7 },
        { type: 'plane', position: '0.47 0.385 0.012',  width: 1.40, height: 0.004, color: C.sky, opacity: 0.55 },

        // จุดดาวประดับ
        { type: 'circle', position: '-1.10 0.74 0.02',    radius: 0.014, color: C.silver, opacity: 0.9 },
        { type: 'circle', position: '1.10 0.74 0.02',     radius: 0.014, color: C.silver, opacity: 0.9 },
        { type: 'circle', position: '-0.565 0.336 0.02',  radius: 0.012, color: C.silver, opacity: 0.9 },
        { type: 'circle', position: '-1.136 -0.235 0.02', radius: 0.010, color: C.sky,    opacity: 0.9 },
        { type: 'circle', position: '-0.45 -0.50 0.02',   radius: 0.008, color: C.silver, opacity: 0.8 },
        { type: 'circle', position: '1.12 -0.50 0.02',    radius: 0.010, color: C.sky,    opacity: 0.8 }
      ],

      buttonLayout: { mode: 'custom' },

      // Fallback buttons (ใช้เมื่อ renderCard ล้มเหลว)
      buttons: [
        {
          id: 'close', enabled: true, label: 'ปิดการ์ด', action: 'close',
          position: '-0.72 -0.755 0.035',
          width: 0.78, height: 0.19,
          color: C.slate, hoverColor: '#475569',
          textColor: '#f1f5f9', fontSize: 130
        },
        {
          id: 'quiz', enabled: true, label: 'เริ่มมินิเกม', action: 'quiz',
          position: '0.72 -0.755 0.035',
          width: 0.78, height: 0.19,
          color: C.blue, hoverColor: '#0ea5e9',
          textColor: '#ffffff', fontSize: 130
        }
      ]
    }
  });
})();
