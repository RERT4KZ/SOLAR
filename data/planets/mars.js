// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: ดาวอังคาร (Mars)
// ไฟล์: data/planets/mars.js
// ============================================================================
// [ค่าอ้างอิงเดิมของดาวอังคาร (นำไปวางในช่องด้านล่าง หรือปรับแต่งเองได้)]
//   id: 'mars'
//   name: 'ดาวอังคาร'
//   en: 'Mars'
//   color: '#c65b3d'
//   radius: 0.18
//   info: 'ดาวเคราะห์สีแดงจากเหล็กออกไซด์'
//   image: 'assets/images/mars.svg'
//
// [คู่มือการปรับแต่งการ์ดข้อมูลแยกอิสระ (หมวด card ด้านล่าง)]
//   1. ขนาดการ์ด         : ปรับที่ card.width (ความกว้าง) และ card.height (ความสูง)
//   2. ตำแหน่งและการหมุน : ปรับที่ card.position ('x y z'), card.distance (ระยะห่าง), card.rotation ('rx ry rz')
//   3. โครงสร้างและดีไซน์ : ปรับที่ card.layout ('horizontal' | 'vertical' | 'custom'),
//                          card.background, card.border, card.header, card.media, card.content, card.sections, card.decorations
//   4. ปุ่มกด (Buttons)  : เพิ่ม/ลบ/ย้ายตำแหน่ง/เปลี่ยนขนาดและสีปุ่มได้ที่อาเรย์ card.buttons
//   5. ตกแต่งกรอบใหญ่     : กรอบใหญ่รอบนอก 4 ด้านมี 4 สีที่แตกต่างกันชัดเจน (แดง, เขียว, น้ำเงิน, เหลือง) สลับหมุนเวียนต่อเนื่อง
// ============================================================================

window.PLANET_DATA = window.PLANET_DATA || [];

(function () {
  // 4 สีที่แตกต่างกันอย่างสิ้นเชิง 4 ด้าน: 1. แดงนีออน, 2. เขียวนีออน, 3. น้ำเงินนีออน, 4. เหลืองนีออนสว่าง
  const RGB_LINE_PALETTE = ['#ff1744', '#00e676', '#2979ff', '#ffd600'];
  
  // ปรับความเร็วในการเปลี่ยนสีให้ช้าลงและนุ่มนวลสบายตา (850 มิลลิวินาทีต่อหนึ่งจังหวะสี)
  const RGB_INTERVAL_MS = 850;

  const marsPlanetData = {
    // --- 1. ข้อมูลพื้นฐานและเนื้อหาของดาว ---
    id: 'mars',
    name: 'ดาวอังคาร',
    en: 'Mars',
    info: 'ดาวเคราะห์สีแดงจากเหล็กออกไซด์',
    facts: [
      'เป็นดาวเคราะห์ลำดับที่ 4 จากดวงอาทิตย์',
      'มีสีแดงเพราะพื้นผิวเต็มไปด้วยเหล็กออกไซด์ (สนิมเหล็ก)',
      'มีดวงจันทร์ 2 ดวง คือ โฟบอส และ ดีมอส',
      'มี Olympus Mons ภูเขาไฟสูงสุดในระบบสุริยะ (21.9 กม.)',
      'เส้นผ่านศูนย์กลาง 6,779 กม. ขนาดราวครึ่งหนึ่งของโลก',
      '1 วัน (Sol) ยาว 24 ชม. 37 นาที',
      'โคจรรอบดวงอาทิตย์ใช้เวลา 687 วัน',
      'บรรยากาศส่วนใหญ่เป็น CO₂ ประมาณ 95%',
      'มี Valles Marineris หุบเขาใหญ่สุดในระบบสุริยะ ยาวกว่า 4,000 กม.',
      'แรงโน้มถ่วงประมาณ 38% ของโลก'
    ],

    // --- 2. ตั้งค่าโมเดล 3D และรูปภาพประกอบ ---
    color: '#c65b3d',
    radius: 0.34,
    image: '',
    texture: 'assets/images/mars.jpg',

    // --- 3. ปรับแต่งสไตล์เฉพาะของดาวดวงนี้ (เว้นว่างไว้หากต้องการใช้ค่ามาตรฐานกลาง) ---
    style: {
      fontFamily: '',
      fontSize: 26,
      panelBgColor: '#180a06',
      panelBorderColor: '#ff1744',
      titleColor: '#fed7aa',
      subtitleColor: '#fdba74',
      textColor: '#ffffff',
      buttonColor: '#9a3412',
      buttonHoverColor: '#ea580c',
      closeButtonColor: '#3b2013',
      highlightColor: '#fb923c'
    },

    // --- 4. ตั้งค่าการ์ดข้อมูลแยกอิสระ (แก้ไขเฉพาะดาวดวงนี้ได้โดยไม่กระทบดาวดวงอื่น) ---
    card: {
      width: 2.06,
      height: 1.48,
      position: '0 0 0',
      rotation: '0 0 0',
      distance: 1.8,
      layout: 'horizontal',
      background: { color: '#180a06', opacity: 0.96, image: '', outerGlow: true, outerGlowColor: '#ff1744', outerGlowOpacity: 0.25 },
      // กรอบใหญ่ข้างนอกรอบแผงการ์ดข้อมูล (Frame 4 ด้านแบบเต็ม) สำหรับไฟ RGB
      border: { style: 'frame', color: '#ff1744', thickness: 0.024, opacity: 1.0 },
      header: {
        show: true,
        titlePos: '0 0.58 0.02',
        subtitlePos: '0 0.47 0.02',
        titleColor: '#fed7aa',
        subtitleColor: '#fdba74',
        titleFontSize: 46,
        subtitleFontSize: 38,
        titleWidth: 1.60,
        subtitleWidth: 1.40,
        showDivider: true,
        dividerColor: '#ea580c',
        dividerY: 0.40,
        dividerWidth: 1.90
      },
      media: {
        show: true,
        show3D: true,
        position: '-0.60 0.03 0.035',
        modelRadius: 0.24,
        frameColor: '#ea580c',
        showCaption: true,
        captionColor: '#fdba74'
      },
      // กรอบข้อความ (Text Box): แสดงข้อมูลครบทั้ง 10 ข้อพร้อมคำอธิบายดาว
      content: {
        position: '-0.14 0.04 0.03',
        width: 1.04,
        maxHeight: 0.72,
        fontSize: 26,
        lineHeight: 1.28,
        align: 'left',
        bullet: '• ',
        showInfoSummary: true,
        color: '#ffffff'
      },
      sections: [],

      // ตกแต่งกล่องข้อความภายใน: ใช้แผงพื้นหลังและเส้นกรอบสีเรียบหรู เพื่อให้กรอบใหญ่รอบนอกที่เป็นสี RGB โดดเด่นที่สุด
      decorations: [
        // แผงพื้นหลังกล่องข้อความ
        { type: 'plane', position: '0.38 0.04 0.012', width: 1.08, height: 0.74, color: '#2b1008', opacity: 0.70 },
        // เส้นกรอบกล่องข้อความด้านใน
        { type: 'plane', position: '0.38 0.41 0.016', width: 1.08, height: 0.006, color: '#521d10', opacity: 0.80 },
        { type: 'plane', position: '0.38 -0.33 0.016', width: 1.08, height: 0.006, color: '#521d10', opacity: 0.80 },
        { type: 'plane', position: '-0.16 0.04 0.016', width: 0.006, height: 0.74, color: '#521d10', opacity: 0.80 },
        { type: 'plane', position: '0.92 0.04 0.016', width: 0.006, height: 0.74, color: '#521d10', opacity: 0.80 }
      ],

      buttonLayout: { mode: 'custom', position: '0 -0.56 0.035', spacing: 0.06 },
      buttons: [
        {
          id: 'quiz',
          enabled: true,
          label: 'PLAY MINIGAME',
          action: 'quiz',
          position: '0.38 -0.56 0.035',
          width: 0.72,
          height: 0.16,
          color: '#9a3412',
          hoverColor: '#ea580c',
          textColor: '#ffffff',
          fontSize: 34,
          onClick: function (p, api) {
            if (api && typeof api.startQuiz === 'function') {
              api.startQuiz(p);
            } else if (typeof window.startQuiz === 'function') {
              window.startQuiz(p);
            }
            setTimeout(repositionQuizButtons, 0);
            setTimeout(applyRGBColorsToFrames, 20);
          }
        },
        {
          id: 'close',
          enabled: true,
          label: 'ปิดการ์ด',
          action: 'close',
          position: '-0.50 -0.56 0.035',
          width: 0.48,
          height: 0.16,
          color: '#3b2013',
          hoverColor: '#5c3520',
          textColor: '#fed7aa',
          fontSize: 34
        }
      ]
    },

    // วาดการ์ดดาวอังคาร พร้อมเริ่มการทำงานของกรอบใหญ่ RGB
    renderCard: function (cardContainer, p, api) {
      const cardCfg = p.card || {};
      const s = p.style || {};

      api.basePanel(p.name, p.en, s, cardContainer, cardCfg);
      api.renderCardDecorations(p, cardContainer, cardCfg);
      const previewSphere = api.planetImage(p, cardContainer, cardCfg);
      api.renderCardContent(p, cardContainer, cardCfg);
      api.renderCardButtons(p, cardContainer, cardCfg, previewSphere);

      if (typeof api.refreshRaycasters === 'function') {
        setTimeout(api.refreshRaycasters, 0);
      } else if (typeof window.refreshRaycasters === 'function') {
        setTimeout(window.refreshRaycasters, 0);
      }

      applyRGBColorsToFrames();
    }
  };

  // --------------------------------------------------------------------------
  // ฟังก์ชันช่วยเหลือในการเปลี่ยนสี Three.js Material และ A-Frame Attribute
  // --------------------------------------------------------------------------
  function updateElementColor(el, hexColor) {
    if (!el) return;
    try {
      const mesh = el.getObject3D && el.getObject3D('mesh');
      if (mesh && mesh.material && mesh.material.color) {
        mesh.material.color.set(hexColor);
      }
      el.setAttribute('material', 'color', hexColor);
    } catch (e) {}
  }

  function getElementPos(el) {
    const p = el.getAttribute('position');
    if (typeof p === 'object' && p) return p;
    const parts = (p || '').split(/\s+/).map(Number);
    return { x: parts[0] || 0, y: parts[1] || 0, z: parts[2] || 0 };
  }

  function getElementDim(el) {
    const width = parseFloat(el.getAttribute('width') || '0');
    const height = parseFloat(el.getAttribute('height') || '0');
    return { width, height };
  }

  // --------------------------------------------------------------------------
  // ระบบแอนิเมชันไฟเส้น RGB หมุนสลับสีที่ "กรอบใหญ่ข้างนอก"
  // ทั้ง 4 ด้านมี 4 สีที่แตกต่างกันชัดเจน (แดง, เขียว, น้ำเงิน, เหลือง)
  // --------------------------------------------------------------------------
  let rgbStep = 0;

 function applyRGBColorsToFrames() {
    const uiRoot = document.querySelector('#ui-root');
    if (!uiRoot) return;

    // เช็คว่าในหน้าต่างนี้มีคำว่า Mars หรือ ดาวอังคาร หรือไม่ (เพื่อยืนยันว่าเป็น UI ของดาวอังคาร)
    // หากไม่ใช่ ให้ return หยุดการทำงานทันทีเพื่อไม่ให้ไปกวนดาวดวงอื่น
    if (!uiRoot.innerHTML.includes('mars') && !uiRoot.innerHTML.includes('ดาวอังคาร')) return;

    // ตรวจสอบว่าแผง UI กำลังเปิดแสดงอยู่หรือไม่
    const isVisible = uiRoot.getAttribute('visible') !== false && uiRoot.getAttribute('visible') !== 'false';
    if (!isVisible) return;

    // ========================================================================
    // 1. กรอบใหญ่รอบนอกของการ์ดข้อมูลดาวอังคาร (#planet-card-root)
    // ========================================================================
    if (cardRoot && cardRoot.isConnected) {
      const planes = Array.from(cardRoot.querySelectorAll('a-plane'));
      
      const topPlane = planes.find(p => {
        const dim = getElementDim(p);
        const pos = getElementPos(p);
        return dim.width > 1.8 && dim.height < 0.05 && pos.y > 0.5;
      });
      const bottomPlane = planes.find(p => {
        const dim = getElementDim(p);
        const pos = getElementPos(p);
        return dim.width > 1.8 && dim.height < 0.05 && pos.y < -0.5;
      });
      const leftPlane = planes.find(p => {
        const dim = getElementDim(p);
        const pos = getElementPos(p);
        return dim.height > 1.3 && dim.width < 0.05 && pos.x < -0.8;
      });
      const rightPlane = planes.find(p => {
        const dim = getElementDim(p);
        const pos = getElementPos(p);
        return dim.height > 1.3 && dim.width < 0.05 && pos.x > 0.8;
      });

      // ด้านบน, ขวา, ล่าง, ซ้าย ใช้คนละสีกัน 4 สีครบถ้วน
      if (topPlane) updateElementColor(topPlane, RGB_LINE_PALETTE[rgbStep % 4]);
      if (rightPlane) updateElementColor(rightPlane, RGB_LINE_PALETTE[(rgbStep + 1) % 4]);
      if (bottomPlane) updateElementColor(bottomPlane, RGB_LINE_PALETTE[(rgbStep + 2) % 4]);
      if (leftPlane) updateElementColor(leftPlane, RGB_LINE_PALETTE[(rgbStep + 3) % 4]);
    }

    // ========================================================================
    // 2. กรอบใหญ่รอบนอกตอนตอบคำถามมินิเกม (#ui-root ตอนที่ไม่มี cardRoot)
    // ========================================================================
    if (!cardRoot && uiRoot.children.length > 0) {
      const planes = Array.from(uiRoot.children).filter(el => {
        return el.tagName && el.tagName.toLowerCase() === 'a-plane' && !el.classList.contains('selectable');
      });

      const topPlane = planes.find(p => {
        const dim = getElementDim(p);
        const pos = getElementPos(p);
        return dim.width > 1.5 && dim.height < 0.05 && pos.y > 0.45;
      });
      const bottomPlane = planes.find(p => {
        const dim = getElementDim(p);
        const pos = getElementPos(p);
        return dim.width > 1.5 && dim.height < 0.05 && pos.y < -0.45;
      });

      let leftPlane = uiRoot.querySelector('.mars-quiz-border-left');
      let rightPlane = uiRoot.querySelector('.mars-quiz-border-right');

      if (!leftPlane) {
        leftPlane = document.createElement('a-plane');
        leftPlane.className = 'mars-quiz-border-left';
        leftPlane.setAttribute('width', '0.024');
        leftPlane.setAttribute('height', '1.22');
        leftPlane.setAttribute('position', '-0.88 0 0.012');
        leftPlane.setAttribute('material', `shader: flat; color: ${RGB_LINE_PALETTE[(rgbStep + 3) % 4]}; opacity: 1; transparent: true; side: double`);
        uiRoot.appendChild(leftPlane);
      }
      if (!rightPlane) {
        rightPlane = document.createElement('a-plane');
        rightPlane.className = 'mars-quiz-border-right';
        rightPlane.setAttribute('width', '0.024');
        rightPlane.setAttribute('height', '1.22');
        rightPlane.setAttribute('position', '0.88 0 0.012');
        rightPlane.setAttribute('material', `shader: flat; color: ${RGB_LINE_PALETTE[(rgbStep + 1) % 4]}; opacity: 1; transparent: true; side: double`);
        uiRoot.appendChild(rightPlane);
      }

      // ด้านบน, ขวา, ล่าง, ซ้าย ใช้คนละสีกัน 4 สีครบถ้วน
      if (topPlane) {
        topPlane.setAttribute('height', '0.024');
        updateElementColor(topPlane, RGB_LINE_PALETTE[rgbStep % 4]);
      }
      if (rightPlane) {
        updateElementColor(rightPlane, RGB_LINE_PALETTE[(rgbStep + 1) % 4]);
      }
      if (bottomPlane) {
        bottomPlane.setAttribute('height', '0.024');
        updateElementColor(bottomPlane, RGB_LINE_PALETTE[(rgbStep + 2) % 4]);
      }
      if (leftPlane) {
        updateElementColor(leftPlane, RGB_LINE_PALETTE[(rgbStep + 3) % 4]);
      }
    }
  }

  // เลื่อนจังหวะสีไป 1 ขั้นอย่างช้าๆ นุ่มนวล
  function advanceRGBStep() {
    rgbStep = (rgbStep + 1) % 4;
    applyRGBColorsToFrames();
  }

  // --------------------------------------------------------------------------
  // ปรับตำแหน่งข้อช้อยในข้อตอบคำถามมินิเกมให้เลื่อนขึ้นด้านบน ไม่ลงมาข้างล่างเกินไป
  // --------------------------------------------------------------------------
  function repositionQuizButtons() {
    const ui = document.querySelector('#ui-root');
    if (!ui) return;

    // เช็คเหมือนกันว่าใช่ควิซของดาวอังคารหรือไม่
    if (!ui.innerHTML.includes('mars') && !ui.innerHTML.includes('ดาวอังคาร')) return;

    const buttons = Array.from(ui.querySelectorAll('.selectable.ui-button'));
    if (buttons.length < 5) return;

    // หาปุ่มออกจากมินิเกม (ความกว้าง 0.85 หรือตำแหน่ง y = -0.53)
    const exitBtn = buttons.find(b => {
      const w = parseFloat(b.getAttribute('width') || '0');
      const pos = getElementPos(b);
      return Math.abs(w - 0.85) < 0.08 || Math.abs(pos.y - (-0.53)) < 0.05;
    }) || buttons[buttons.length - 1];

    const choiceButtons = buttons.filter(b => b !== exitBtn);
    if (choiceButtons.length >= 4) {
      choiceButtons.sort((a, b) => {
        return getElementPos(b).y - getElementPos(a).y;
      });

      // ปรับเลื่อนข้อช้อย 4 ข้อขึ้นด้านบนให้เห็นชัดเจนและไม่อยู่ข้างล่างเกินไป
      const targetYs = [0.110, -0.020, -0.150, -0.280];
      choiceButtons.slice(0, 4).forEach((btn, i) => {
        const ty = targetYs[i];
        btn.setAttribute('position', `0 ${ty} 0.035`);
        if (btn.object3D) {
          btn.object3D.position.set(0, ty, 0.035);
        }
      });

      // ปรับหัวข้อโจทย์คำถามขึ้นไปที่ y = 0.24 เพื่อให้ระยะห่างลงตัว
      const textEntities = Array.from(ui.querySelectorAll('a-entity')).filter(el => !el.closest('.selectable.ui-button'));
      textEntities.forEach(txtEl => {
        const pos = getElementPos(txtEl);
        if (Math.abs(pos.y - 0.20) < 0.04) {
          txtEl.setAttribute('position', '0 0.24 0.03');
          if (txtEl.object3D) {
            txtEl.object3D.position.set(0, 0.24, 0.03);
          }
        }
      });

      if (typeof window.refreshRaycasters === 'function') {
        setTimeout(window.refreshRaycasters, 0);
      }
    }
  }

  // เฝ้าสังเกตและปรับตำแหน่งปุ่มตัวเลือกอัตโนมัติเมื่อ DOM เปลี่ยน
  function setupChoicePositionObserver() {
    const observer = new MutationObserver(() => {
      repositionQuizButtons();
      applyRGBColorsToFrames();
    });

    const target = document.querySelector('#ui-root') || document.body;
    if (target) {
      observer.observe(target, { childList: true, subtree: true });
    }

    // 1. ตรวจสอบตำแหน่งปุ่มตัวเลือกเป็นระยะ
    setInterval(repositionQuizButtons, 250);

    // 2. หมุนสลับสีไฟกรอบใหญ่ RGB ตามจังหวะเวลาที่ช้าลงอย่างนุ่มนวล (850ms)
    setInterval(advanceRGBStep, RGB_INTERVAL_MS);
  }

  // เริ่มต้นทำงานเมื่อโหลดหน้า
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupChoicePositionObserver);
  } else {
    setupChoicePositionObserver();
  }

  window.addEventListener('load', setupChoicePositionObserver);

  // บันทึกข้อมูลดาวอังคารเข้าสู่ระบบ
  window.PLANET_DATA.push(marsPlanetData);
})();
