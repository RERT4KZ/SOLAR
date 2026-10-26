// ============================================================================
// SOLAR ODYSSEY VR
// PLANET: NEPTUNE (ดาวเนปจูน)
// THEME: DEEP BLUE SCI-FI GAMING HUD + RGB ANIMATED BORDER
// FILE: data/planets/neptune.js
// ============================================================================

window.PLANET_DATA = window.PLANET_DATA || [];

(function () {

  // ============================================================
  // 1. RGB ANIMATED BORDER
  // ============================================================

  // ชุดสี RGB สำหรับกรอบการ์ด
  const RGB_LINE_PALETTE = [
    '#ff1744', // แดง
    '#00e676', // เขียว
    '#2979ff', // น้ำเงิน
    '#ffd600'  // เหลือง
  ];

  // เปลี่ยนสีทุก 850 มิลลิวินาที
  const RGB_INTERVAL_MS = 850;

  // ============================================================
  // 2. NEPTUNE PLANET DATA
  // ============================================================

  const neptunePlanetData = {

    id: 'neptune',

    name: 'ดาวเนปจูน',

    en: 'Neptune',

    // คำอธิบายดาวเนปจูน
    info: 'ดาวเคราะห์ลำดับที่ 8 และอยู่ไกลดวงอาทิตย์ที่สุดในบรรดาดาวเคราะห์ เป็นดาวเคราะห์น้ำแข็งยักษ์ที่มีลมแรงมากและบรรยากาศมีมีเทน',

    // ข้อมูลดาวเนปจูนจากไฟล์เดิม
    facts: [
      'อยู่ลำดับที่ 8 และไกลดวงอาทิตย์ที่สุดในกลุ่มดาวเคราะห์',
      'โคจรรอบดวงอาทิตย์ใช้เวลาประมาณ 165 ปีโลก',
      'หมุนรอบตัวเองหนึ่งรอบใช้เวลาประมาณ 16 ชั่วโมง',
      'มีลมแรงได้มากกว่า 2,000 กิโลเมตรต่อชั่วโมง',
      'ดวงจันทร์บริวารที่ใหญ่ที่สุดชื่อไทรทัน'
    ],

    // ============================================================
    // 3. PLANET 3D MODEL
    // ============================================================

    color: '#3e67d5',

    radius: 0.39,

    image: '',
    texture: 'assets/images/neptune.jpg',
  

    // ============================================================
    // 4. PLANET STYLE
    // ============================================================

    style: {

      fontFamily: '',

      fontSize: 37,

      // พื้นหลังสีน้ำเงินดำ
      panelBgColor: '#061327',

      // กรอบสีฟ้านีออน
      panelBorderColor: '#00d9ff',

      // ชื่อดาว
      titleColor: '#dff8ff',

      // ชื่อภาษาอังกฤษ
      subtitleColor: '#7dd3fc',

      // สีข้อความ
      textColor: '#ffffff',

      // ปุ่มมินิเกม
      buttonColor: '#075985',

      // สีเมื่อชี้ปุ่ม
      buttonHoverColor: '#0284c7',

      // ปุ่มปิดการ์ด
      closeButtonColor: '#334155',

      // สีเน้นดาว
      highlightColor: '#38bdf8'

    },

    // ============================================================
    // 5. CARD CONFIGURATION
    // ============================================================

    card: {

      // ขนาดการ์ดเหมือนต้นแบบดาวอังคาร
      width: 2.06,

      height: 1.48,

      // ตำแหน่งการ์ด
      position: '0 0 0',

      rotation: '0 0 0',

      distance: 1.8,

      layout: 'horizontal',

      // ==========================================================
      // 6. BACKGROUND
      // ==========================================================

      background: {

        color: '#061327',

        opacity: 0.97,

        image: '',

        outerGlow: true,

        outerGlowColor: '#00d9ff',

        outerGlowOpacity: 0.25

      },

      // ==========================================================
      // 7. BORDER
      // ==========================================================

      border: {

        style: 'frame',

        color: '#00d9ff',

        thickness: 0.024,

        opacity: 1.0

      },

      // ==========================================================
      // 8. HEADER
      // ==========================================================

      header: {

        show: true,

        titlePos: '0 0.60 0.02',

        subtitlePos: '0 0.49 0.02',

        titleColor: '#dff8ff',

        subtitleColor: '#7dd3fc',

        titleFontSize: 52,

        subtitleFontSize: 38,

        titleWidth: 1.60,

        subtitleWidth: 1.40,

        showDivider: true,

        dividerColor: '#38bdf8',

        dividerY: 0.41,

        dividerWidth: 1.90

      },

      // ==========================================================
      // 9. PLANET MEDIA
      // ==========================================================

      media: {

        show: true,

        show3D: true,

        position: '-0.64 0.04 0.035',

        modelRadius: 0.26,

        frameColor: '#38bdf8',

        showCaption: true,

        captionColor: '#7dd3fc'

      },

      // ==========================================================
      // 10. INFORMATION CONTENT
      // ==========================================================

      content: {

        position: '0.30 0.03 0.03',

        width: 1.22,

        maxHeight: 0.78,

        fontSize: 31,

        lineHeight: 1.42,

        align: 'left',

        bullet: '• ',

        showInfoSummary: false,

        color: '#ffffff'

      },

      // ==========================================================
      // 11. CARD DECORATIONS
      // ==========================================================

      decorations: [

        // พื้นหลังของส่วนข้อมูล
        {
          type: 'plane',

          position: '0.30 0.03 0.012',

          width: 1.34,

          height: 0.84,

          color: '#0b2447',

          opacity: 0.75
        },

        // เส้นแบ่งระหว่างโมเดลดาวกับข้อมูล
        {
          type: 'plane',

          position: '-0.34 0.03 0.016',

          width: 0.006,

          height: 0.84,

          color: '#0284c7',

          opacity: 0.9
        }

      ]

    },

    // ============================================================
    // 12. CUSTOM CARD RENDERER
    // ============================================================

    // ใช้ระบบ renderCard เดิมจากโค้ดดาวอังคาร
    renderCard: function (cardContainer, p, api) {

      const cardCfg = p.card || {};

      const s = p.style || {};

      // ----------------------------------------------------------
      // สร้างพื้นหลังและกรอบการ์ด
      // ----------------------------------------------------------

      api.basePanel(
        p.name,
        p.en,
        s,
        cardContainer,
        cardCfg
      );

      // ----------------------------------------------------------
      // สร้างองค์ประกอบตกแต่ง
      // ----------------------------------------------------------

      api.renderCardDecorations(
        p,
        cardContainer,
        cardCfg
      );

      // ----------------------------------------------------------
      // แสดงโมเดลดาวเนปจูน 3D
      // ----------------------------------------------------------

      api.planetImage(
        p,
        cardContainer,
        cardCfg
      );

      // ----------------------------------------------------------
      // แสดงข้อมูลดาวเนปจูน
      // ----------------------------------------------------------

      api.renderCardContent(
        p,
        cardContainer,
        cardCfg
      );

      // ==========================================================
      // 13. BUTTON SETTINGS
      // ==========================================================

      const btnBase = {

        textColor: '#ffffff',

        borderColor: '#00d9ff',

        borderThickness: 0.008,

        opacity: 1

      };

      // ==========================================================
      // 14. CLOSE CARD BUTTON
      // ==========================================================

      api.button(

        cardContainer,

        'ปิดการ์ด',

        '-0.52 -0.58 0.035',

        0.66,

        0.20,

        function () {
          api.closeUI();
        },

        '#334155',

        '#475569',

        Object.assign(
          {},
          s,
          btnBase,
          {
            fontSize: 120
          }
        )

      );

      // ==========================================================
      // 15. PLAY MINIGAME BUTTON
      // ==========================================================

      api.button(

        cardContainer,

        'เล่นมินิเกม',

        '0.40 -0.58 0.035',

        0.96,

        0.20,

        function () {
          api.startQuiz(p);
        },

        '#075985',

        '#0284c7',

        Object.assign(
          {},
          s,
          btnBase,
          {
            fontSize: 84
          }
        )

      );

      // ==========================================================
      // 16. REFRESH VR RAYCASTERS
      // ==========================================================

      if (
        typeof window.refreshRaycasters === 'function'
      ) {

        setTimeout(
          window.refreshRaycasters,
          0
        );

      }

      // ==========================================================
      // 17. RGB ANIMATED BORDER
      // ==========================================================

      // กรอบเปลี่ยนสีอัตโนมัติ
      // และหยุดเมื่อปิดการ์ด

      let step = 0;

      const timer = setInterval(function () {

        // หากการ์ดถูกปิด ให้หยุด Timer
        if (!cardContainer.isConnected) {

          clearInterval(timer);

          return;

        }

        // เปลี่ยนสีตามลำดับ
        step = (
          step + 1
        ) % RGB_LINE_PALETTE.length;

        const color =
          RGB_LINE_PALETTE[step];

        // เปลี่ยนสีเฉพาะกรอบ outline
        cardContainer
          .querySelectorAll('[round-rect]')
          .forEach(function (el) {

            try {

              const cfg =
                el.getAttribute('round-rect');

              if (
                !cfg ||
                cfg.mode !== 'outline'
              ) {
                return;
              }

              const mesh =
                el.getObject3D('mesh');

              if (
                mesh &&
                mesh.material &&
                mesh.material.color
              ) {

                mesh.material.color.set(
                  color
                );

              }

            } catch (e) {

              // ไม่ให้ระบบหยุดเมื่อเกิดข้อผิดพลาด
            }

          });

      }, RGB_INTERVAL_MS);

    }

  };

  // ============================================================
  // 18. REGISTER NEPTUNE
  // ============================================================

  window.PLANET_DATA.push(
    neptunePlanetData
  );

})();
