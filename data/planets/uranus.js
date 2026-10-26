// ============================================================================
// SOLAR ODYSSEY VR
// PLANET: URANUS (ดาวยูเรนัส)
// THEME: BLACK & WHITE SCI-FI GAMING HUD
// FILE: data/planets/uranus.js
// ============================================================================

window.PLANET_DATA = window.PLANET_DATA || [];

(function () {

  // ============================================================
  // 1. BLACK & WHITE ANIMATED BORDER
  // ============================================================

  // กรอบเปลี่ยนสีขาวและดำ
  const BW_LINE_PALETTE = [
    '#ffffff', // สีขาว
    '#000000'  // สีดำ
  ];

  // เปลี่ยนสีทุก 850 มิลลิวินาที
  const BW_INTERVAL_MS = 850;

  // ============================================================
  // 2. URANUS PLANET DATA
  // ============================================================

  const uranusPlanetData = {

    id: 'uranus',

    name: 'ดาวยูเรนัส',

    en: 'Uranus',

    // ข้อมูลดาวยูเรนัส
    info: 'ดาวยูเรนัสเป็นดาวเคราะห์ลำดับที่ 7 จากดวงอาทิตย์ เป็นดาวเคราะห์น้ำแข็งยักษ์ที่มีบรรยากาศประกอบด้วยไฮโดรเจน ฮีเลียม และมีเทน',

    facts: [
      'เป็นดาวเคราะห์ลำดับที่ 7 จากดวงอาทิตย์',
      'จัดเป็นดาวเคราะห์น้ำแข็งยักษ์ (Ice Giant)',
      'มีสีฟ้าอมเขียวเนื่องจากก๊าซมีเทนในบรรยากาศ',
      'แกนหมุนเอียงประมาณ 98 องศา ทำให้ดูเหมือนหมุนตะแคง',
      'โคจรรอบดวงอาทิตย์ใช้เวลาประมาณ 84 ปีโลก',
      'หมุนรอบตัวเองหนึ่งรอบใช้เวลาประมาณ 17 ชั่วโมง',
      'มีระบบวงแหวนล้อมรอบดาวเคราะห์'
    ],

    // ============================================================
    // 3. PLANET 3D MODEL
    // ============================================================

    color: '#9dd9df',

    radius: 0.38,

    image: 'assets/images/uranus.jpg',

    

    // ============================================================
    // 4. PLANET STYLE
    // ============================================================

    style: {

      fontFamily: '',

      fontSize: 37,

      // พื้นหลังสีดำ
      panelBgColor: '#080b10',

      // กรอบสีขาว
      panelBorderColor: '#ffffff',

      // ชื่อดาว
      titleColor: '#ffffff',

      // ชื่อภาษาอังกฤษ
      subtitleColor: '#cbd5e1',

      // สีข้อความ
      textColor: '#ffffff',

      // สีปุ่ม
      buttonColor: '#1f2937',

      // สีเมื่อชี้ปุ่ม
      buttonHoverColor: '#475569',

      // ปุ่มปิดการ์ด
      closeButtonColor: '#374151',

      // สีเน้น
      highlightColor: '#f8fafc'

    },

    // ============================================================
    // 5. CARD CONFIGURATION
    // ============================================================

    card: {

      width: 2.06,

      height: 1.48,

      position: '0 0 0',

      rotation: '0 0 0',

      distance: 1.8,

      layout: 'horizontal',

      // ==========================================================
      // 6. BACKGROUND
      // ==========================================================

      background: {

        color: '#080b10',

        opacity: 0.97,

        image: '',

        outerGlow: true,

        outerGlowColor: '#ffffff',

        outerGlowOpacity: 0.20

      },

      // ==========================================================
      // 7. BORDER
      // ==========================================================

      border: {

        style: 'frame',

        color: '#ffffff',

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

        titleColor: '#ffffff',

        subtitleColor: '#cbd5e1',

        titleFontSize: 52,

        subtitleFontSize: 38,

        titleWidth: 1.60,

        subtitleWidth: 1.40,

        showDivider: true,

        dividerColor: '#ffffff',

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

        frameColor: '#ffffff',

        showCaption: true,

        captionColor: '#e2e8f0'

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

        // พื้นหลังส่วนข้อมูล
        {
          type: 'plane',

          position: '0.30 0.03 0.012',

          width: 1.34,

          height: 0.84,

          color: '#15191f',

          opacity: 0.85
        },

        // เส้นแบ่งระหว่างดาวกับข้อมูล
        {
          type: 'plane',

          position: '-0.34 0.03 0.016',

          width: 0.006,

          height: 0.84,

          color: '#ffffff',

          opacity: 0.90
        }

      ]

    },

    // ============================================================
    // 12. CUSTOM CARD RENDERER
    // ============================================================

    renderCard: function (cardContainer, p, api) {

      const cardCfg = p.card || {};

      const s = p.style || {};

      // สร้างพื้นหลังและกรอบการ์ด
      api.basePanel(
        p.name,
        p.en,
        s,
        cardContainer,
        cardCfg
      );

      // สร้างองค์ประกอบตกแต่ง
      api.renderCardDecorations(
        p,
        cardContainer,
        cardCfg
      );

      // แสดงโมเดลดาวยูเรนัส 3D
      api.planetImage(
        p,
        cardContainer,
        cardCfg
      );

      // แสดงข้อมูลดาวยูเรนัส
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

        borderColor: '#ffffff',

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

        '#374151',

        '#4b5563',

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

        '#1f2937',

        '#475569',

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
      // 17. BLACK & WHITE ANIMATED BORDER
      // ==========================================================

      let step = 0;

      const timer = setInterval(function () {

        // หากการ์ดถูกปิด ให้หยุด Timer
        if (!cardContainer.isConnected) {

          clearInterval(timer);

          return;

        }

        // เปลี่ยนสีขาวและดำสลับกัน
        step = (
          step + 1
        ) % BW_LINE_PALETTE.length;

        const color = BW_LINE_PALETTE[step];

        // เปลี่ยนสีเฉพาะกรอบ outline
        cardContainer
          .querySelectorAll('[round-rect]')
          .forEach(function (el) {

            try {

              const cfg = el.getAttribute('round-rect');

              if (
                !cfg ||
                cfg.mode !== 'outline'
              ) {
                return;
              }

              const mesh = el.getObject3D('mesh');

              if (
                mesh &&
                mesh.material &&
                mesh.material.color
              ) {

                mesh.material.color.set(color);

              }

            } catch (e) {

              // ป้องกันข้อผิดพลาดไม่ให้ระบบหยุด
            }

          });

      }, BW_INTERVAL_MS);

    }

  };

  // ============================================================
  // 18. REGISTER URANUS
  // ============================================================

  window.PLANET_DATA.push(
    uranusPlanetData
  );

})();
