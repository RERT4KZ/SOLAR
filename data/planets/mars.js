window.PLANET_DATA = window.PLANET_DATA || [];

(function () {
  const RGB_LINE_PALETTE = ['#ff1744', '#00e676', '#2979ff', '#ffd600'];
  const RGB_INTERVAL_MS = 850;

  const marsPlanetData = {
    id: 'mars',
    name: 'ดาวอังคาร',
    en: 'Mars',
    info: 'ดาวเคราะห์สีแดงจากเหล็กออกไซด์',
    facts: [
      'ดาวเคราะห์ลำดับที่ 4 จากดวงอาทิตย์',
      'สีแดงเพราะพื้นผิวมีเหล็กออกไซด์ (สนิมเหล็ก)',
      'มีดวงจันทร์ 2 ดวง: โฟบอส และ ดีมอส',
      'โอลิมปัส มอนส์ ภูเขาไฟสูงสุดในระบบสุริยะ (21.9 กม.)',
      'เส้นผ่านศูนย์กลาง 6,779 กม. (ราวครึ่งหนึ่งของโลก)',
      '1 วัน ยาว 24 ชม. 37 นาที / 1 ปี ยาว 687 วัน',
      'บรรยากาศส่วนใหญ่เป็น CO₂ ประมาณ 95%'
    ],

    color: '#c65b3d',
    radius: 0.34,
    image: '',
    texture: 'assets/images/mars.jpg',

    style: {
      fontFamily: '',
      fontSize: 37,
      panelBgColor: '#140805',
      panelBorderColor: '#ff1744',
      titleColor: '#ffe4c7',
      subtitleColor: '#fdba74',
      textColor: '#ffffff',
      buttonColor: '#9a3412',
      buttonHoverColor: '#ea580c',
      closeButtonColor: '#57534e',
      highlightColor: '#fb923c'
    },

    card: {
      width: 2.06,
      height: 1.48,
      position: '0 0 0',
      rotation: '0 0 0',
      distance: 1.8,
      layout: 'horizontal',
      background: { color: '#140805', opacity: 0.97, image: '', outerGlow: true, outerGlowColor: '#ff1744', outerGlowOpacity: 0.25 },
      border: { style: 'frame', color: '#ff1744', thickness: 0.024, opacity: 1.0 },
      header: {
        show: true,
        titlePos: '0 0.60 0.02',
        subtitlePos: '0 0.49 0.02',
        titleColor: '#ffe4c7',
        subtitleColor: '#fdba74',
        titleFontSize: 52,
        subtitleFontSize: 38,
        titleWidth: 1.60,
        subtitleWidth: 1.40,
        showDivider: true,
        dividerColor: '#ea580c',
        dividerY: 0.41,
        dividerWidth: 1.90
      },
      media: {
        show: true,
        show3D: true,
        position: '-0.64 0.04 0.035',
        modelRadius: 0.26,
        frameColor: '#ea580c',
        showCaption: true,
        captionColor: '#fdba74'
      },
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
      sections: [],
      decorations: [
        { type: 'plane', position: '0.30 0.03 0.012', width: 1.34, height: 0.84, color: '#2b1008', opacity: 0.75 },
        { type: 'plane', position: '-0.34 0.03 0.016', width: 0.006, height: 0.84, color: '#7c2d12', opacity: 0.9 }
      ]
    },

    // วาดการ์ดเอง: ปุ่มทึบ 100% + ตัวหนังสือบนปุ่มใหญ่ ไม่ต้องชี้เมาส์ก็เห็น
    renderCard: function (cardContainer, p, api) {
      const cardCfg = p.card || {};
      const s = p.style || {};

      api.basePanel(p.name, p.en, s, cardContainer, cardCfg);
      api.renderCardDecorations(p, cardContainer, cardCfg);
      api.planetImage(p, cardContainer, cardCfg);
      api.renderCardContent(p, cardContainer, cardCfg);

      const btnBase = {
        textColor: '#ffffff',
        borderColor: '#ff1744',
        borderThickness: 0.008,
        opacity: 1
      };

      // ปุ่มปิดการ์ด (ปุ่มแคบกว่า จึงใช้เลขฟอนต์ใหญ่กว่าเพื่อให้ตัวหนังสือสูงเท่ากัน)
      api.button(
        cardContainer, 'ปิดการ์ด', '-0.52 -0.58 0.035', 0.66, 0.20,
        function () { api.closeUI(); },
        '#57534e', '#78716c',
        Object.assign({}, s, btnBase, { fontSize: 120 })
      );

      // ปุ่มเล่นมินิเกม
      api.button(
        cardContainer, 'เล่นมินิเกม', '0.40 -0.58 0.035', 0.96, 0.20,
        function () { api.startQuiz(p); },
        '#9a3412', '#ea580c',
        Object.assign({}, s, btnBase, { fontSize: 84 })
      );

      if (typeof window.refreshRaycasters === 'function') {
        setTimeout(window.refreshRaycasters, 0);
      }

      // กรอบการ์ดเปลี่ยนสี RGB วนเป็นจังหวะ (หยุดเองเมื่อการ์ดถูกปิด)
      let step = 0;
      const timer = setInterval(function () {
        if (!cardContainer.isConnected) { clearInterval(timer); return; }
        step = (step + 1) % RGB_LINE_PALETTE.length;
        const color = RGB_LINE_PALETTE[step];
        cardContainer.querySelectorAll('[round-rect]').forEach(function (el) {
          try {
            const cfg = el.getAttribute('round-rect');
            if (!cfg || cfg.mode !== 'outline') return;
            const mesh = el.getObject3D('mesh');
            if (mesh && mesh.material && mesh.material.color) mesh.material.color.set(color);
          } catch (e) {}
        });
      }, RGB_INTERVAL_MS);
    }
  };

  window.PLANET_DATA.push(marsPlanetData);
})();
