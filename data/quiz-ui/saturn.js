// ============================================================================
// ไฟล์ตั้งค่าดีไซน์หน้ามินิเกม (Quiz UI): ดาวเสาร์ (Saturn) — "SATURN KNOWLEDGE CHALLENGE"
// ไฟล์: data/quiz-ui/saturn.js
// ============================================================================
// หน้าตาของมินิเกมดาวเสาร์ทั้ง 3 หน้าจอ (คำถาม / เฉลย / สรุปผล) วาดด้วยฟังก์ชันเฉพาะดวงนี้ในไฟล์นี้
// ผ่าน hook renderQuestion / renderFeedback / renderResults ที่ระบบรองรับอยู่แล้ว
// จึงไม่กระทบมินิเกมของดาวดวงอื่น และไม่ต้องแก้ index.html
//
// คุณสมบัติ: แถบความคืบหน้า (Progress) · ข้อที่ N / รวม · ปุ่มตัวเลือกใหญ่สำหรับเมาส์/Controller
//            เฉลยพร้อมสัญลักษณ์ ✔/✘ (ไม่พึ่งสีอย่างเดียว) · คำอธิบายหลังตอบ · ปุ่มเล่นใหม่ในหน้าสรุปผล
// ธีม: Ringed Gold × Deep Space — ทองนวลของดาวเสาร์ + ฟ้าโฮโลแกรม บนพื้นน้ำเงินม่วงเข้ม
//      มีไอคอนดาวเสาร์พร้อมดวงจันทร์ มุมซ้ายบน, ไอคอนวงโคจรมุมขวาบน และกลุ่มดาวประดับขอบหน้าต่าง
// ============================================================================

window.PLANET_QUIZ_UI = window.PLANET_QUIZ_UI || {};

(function () {
  const FONT = '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif';
  const TITLE = 'SATURN KNOWLEDGE CHALLENGE';
  const MISSION = 'ภารกิจสำรวจดาวเสาร์';
  const LETTERS = ['A', 'B', 'C', 'D'];

  // กลุ่มดาวประดับ [x, y, รัศมี, สี, ความทึบ] — วางเฉพาะขอบหน้าต่างและมุมว่าง ไม่ทับคำถามหรือปุ่ม
  const STARS = [
    [0.93, 0.45, 0.006, '#ffffff', 0.80], [-0.94, 0.40, 0.005, '#7deaff', 0.80],
    [0.94, -0.10, 0.005, '#fde68a', 0.75], [-0.95, -0.20, 0.006, '#ffffff', 0.80],
    [0.93, -0.50, 0.006, '#7deaff', 0.75], [-0.93, -0.55, 0.005, '#ffffff', 0.75],
    [0.70, -0.71, 0.005, '#fde68a', 0.75], [-0.70, -0.71, 0.005, '#ffffff', 0.75],
    [0.80, 0.62, 0.005, '#ffffff', 0.80], [0.93, 0.56, 0.004, '#7deaff', 0.75],
    [-0.80, 0.50, 0.004, '#fde68a', 0.70], [0.55, 0.745, 0.004, '#ffffff', 0.60],
    [-0.55, 0.745, 0.004, '#ffffff', 0.60], [0.86, -0.28, 0.004, '#ffffff', 0.65],
    [-0.87, -0.38, 0.004, '#7deaff', 0.65]
  ];
  const STAR_DECOR = STARS.map(s => ({
    type: 'circle', position: s[0] + ' ' + s[1] + ' 0.018', radius: s[2], color: s[3], opacity: s[4]
  }));

  function ts(extra) {
    return Object.assign({ fontFamily: FONT, lineHeight: 1.25 }, extra || {});
  }

  function optionLabel(q, i) {
    const opt = (q.options && q.options[i] !== undefined) ? q.options[i] : '';
    return LETTERS[i] + '. ' + opt;
  }

  // กรอบหน้าต่าง + หัวข้อ + ของตกแต่ง (ใช้ค่าจาก uiConfig ที่ระบบรวมให้แล้ว)
  function frame(api, container, ui, subtitle) {
    api.basePanel(TITLE, subtitle, ui.style, container, ui);
    api.renderCardDecorations({ style: ui.style }, container, ui);
  }

  // แถบความคืบหน้าแบบแบ่งช่องตามจำนวนข้อ (ข้อที่ผ่านแล้ว = ทอง, ข้อปัจจุบัน = สีที่ส่งมา, ข้อที่ยังไม่ถึง = น้ำเงินเข้ม)
  function progress(api, container, total, doneCount, currentIndex, currentColor) {
    const availW = 1.7, gap = 0.04;
    const segW = (availW - (total - 1) * gap) / total;
    const x0 = -availW / 2 + segW / 2;
    for (let i = 0; i < total; i++) {
      let color = '#262a55';
      if (i < doneCount) color = '#ca8a04';
      if (i === currentIndex) color = currentColor;
      api.make('a-plane', {
        position: (x0 + i * (segW + gap)).toFixed(3) + ' 0.455 0.025',
        width: segW.toFixed(3),
        height: 0.035,
        material: 'shader: flat; color: ' + color + '; opacity: 0.95; side: double'
      }, container);
    }
  }

  function panel(api, container, pos, w, h, color, opacity) {
    api.make('a-plane', {
      position: pos, width: w, height: h,
      material: 'shader: flat; color: ' + color + '; opacity: ' + opacity + '; transparent: true; side: double'
    }, container);
  }

  // ------------------------------------------------------------------ หน้าคำถาม
  function renderQuestion(ctx) {
    const { container, question: q, index, total, uiConfig: ui, answerQuestion, exitQuiz, api } = ctx;
    frame(api, container, ui, MISSION + ' · ข้อที่ ' + (index + 1) + ' / ' + total);
    progress(api, container, total, index, index, '#7deaff');

    panel(api, container, '0 0.25 0.02', 1.84, 0.33, '#17143a', 0.72);
    api.txt(container, q.q || ('รอเพิ่มคำถามข้อที่ ' + (index + 1)), '0 0.25 0.03', 1.8, '#fefce8', 'center',
      ts({ fontSize: 42, maxHeight: 0.30, minFontSize: 32, centerAnchor: true }));

    // ตัวเลือกคำตอบแบบ 2x2
    (q.options || []).forEach((opt, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      const x = (col - 0.5) * 0.96;
      const y = -0.10 - row * 0.33;
      api.button(container, optionLabel(q, i), x.toFixed(3) + ' ' + y.toFixed(3) + ' 0.035', 0.92, 0.30,
        () => answerQuestion(i), '#1e2358', '#ca8a04',
        ts({ fontSize: 56, maxHeight: 0.27, minFontSize: 38, textColor: '#f1f5ff', borderColor: '#7deaff', borderThickness: 0.006, opacity: 1 }));
    });

    api.button(container, 'ออกจากแบบทดสอบ', '0 -0.69 0.035', 0.9, 0.12, exitQuiz, '#14163a', '#2b3a7a',
      ts({ fontSize: 70, textColor: '#bff4ff', borderColor: '#7deaff', borderThickness: 0.005, opacity: 1 }));
  }

  // ------------------------------------------------------------------ หน้าเฉลย
  function renderFeedback(ctx) {
    const { container, question: q, answer: a, isCorrect: ok, index, total, uiConfig: ui, nextStep, api } = ctx;
    frame(api, container, ui, MISSION + ' · ข้อที่ ' + (index + 1) + ' / ' + total);
    progress(api, container, total, index, index, ok ? '#22c55e' : '#ef4444');

    // แบนเนอร์สถานะ: ใช้ทั้งสีและสัญลักษณ์ ✔/✘
    panel(api, container, '0 0.33 0.02', 1.84, 0.17, ok ? '#0f2a16' : '#2e0f0f', 0.92);
    api.txt(container, ok ? '✔ ตอบถูกต้อง!' : '✘ ยังไม่ถูกต้อง', '0 0.33 0.03', 1.7, ok ? '#86efac' : '#fca5a5', 'center',
      ts({ fontSize: 62, lineHeight: 1.1, centerAnchor: true }));

    api.txt(container, 'คุณเลือก ' + optionLabel(q, a.selected), '0 0.17 0.03', 1.8, ok ? '#bbf7d0' : '#fecaca', 'center',
      ts({ fontSize: 38, lineHeight: 1.1, maxHeight: 0.15, minFontSize: 24, centerAnchor: true }));

    if (!ok) {
      api.txt(container, 'เฉลย ' + optionLabel(q, q.correct), '0 0.03 0.03', 1.8, '#fde047', 'center',
        ts({ fontSize: 38, lineHeight: 1.1, maxHeight: 0.15, minFontSize: 24, centerAnchor: true }));
    } else if (q.topic) {
      api.txt(container, 'หัวข้อ: ' + q.topic, '0 0.03 0.03', 1.8, '#7deaff', 'center',
        ts({ fontSize: 38, lineHeight: 1.1, maxHeight: 0.15, minFontSize: 24, centerAnchor: true }));
    }

    panel(api, container, '0 -0.22 0.02', 1.82, 0.36, '#14123a', 0.78);
    api.txt(container, q.explanation || '', '0 -0.22 0.03', 1.74, '#eaf6ff', 'center',
      ts({ fontSize: 40, maxHeight: 0.32, minFontSize: 30, centerAnchor: true }));

    const isLast = index === total - 1;
    api.button(container, isLast ? 'ดูสรุปคะแนน' : 'ข้อถัดไป', '0 -0.58 0.035', 1.2, 0.17, nextStep, '#a16207', '#ca8a04',
      ts({ fontSize: 72, textColor: '#ffffff', borderColor: '#fde047', borderThickness: 0.006, opacity: 1 }));
  }

  // ------------------------------------------------------------------ หน้าสรุปผล
  function renderResults(ctx) {
    const { container, planet, score, total, answers, questions, uiConfig: ui, returnToCard, closeUI, api } = ctx;
    frame(api, container, ui, 'สรุปผล' + MISSION);

    api.txt(container, 'คะแนน ' + score + ' / ' + total, '0 0.385 0.03', 1.7, '#fde047', 'center',
      ts({ fontSize: 84, lineHeight: 1.1, centerAnchor: true }));

    const filled = Math.max(0, Math.min(5, Math.round((total > 0 ? score / total : 0) * 5)));
    api.txt(container, '★'.repeat(filled) + '☆'.repeat(5 - filled), '0 0.215 0.03', 1.0, '#fde047', 'center',
      ts({ fontSize: 70, lineHeight: 1.1, centerAnchor: true }));

    const ratio = total > 0 ? score / total : 0;
    const msg = ratio >= 0.8 ? 'ยอดเยี่ยม! คุณเข้าใจดาวเสาร์ได้ดีมาก'
      : ratio >= 0.5 ? 'ผ่านภารกิจ ลองทบทวนข้อที่พลาดแล้วเล่นอีกครั้ง'
      : 'ลองกลับไปอ่านการ์ดข้อมูลดาวเสาร์ แล้วเล่นอีกครั้ง';
    api.txt(container, msg, '0 0.10 0.03', 1.8, '#fef3c7', 'center',
      ts({ fontSize: 40, maxHeight: 0.12, minFontSize: 30, centerAnchor: true }));

    // ทบทวนรายข้อ: ✔/✘ พร้อมหัวข้อ
    (questions || []).forEach((q, i) => {
      const a = answers && answers[i];
      const good = a && a.selected === a.correct;
      const label = (good ? '✔' : '✘') + '  ' + (i + 1) + '. ' + (q.topic || ('ข้อที่ ' + (i + 1)));
      api.txt(container, label, '-0.8 ' + (0.0 - i * 0.11).toFixed(3) + ' 0.03', 1.6, good ? '#86efac' : '#fca5a5', 'left',
        ts({ fontSize: 44, lineHeight: 1.0 }));
    });

    const by = '-0.66', bw = 0.62, bh = 0.15;
    const bs = ts({ fontSize: 84, lineHeight: 1.2, opacity: 1, borderThickness: 0.006 });
    api.button(container, 'เล่นอีกครั้ง', '-0.66 ' + by + ' 0.035', bw, bh, () => api.startQuiz(planet),
      '#a16207', '#ca8a04', Object.assign({}, bs, { textColor: '#ffffff', borderColor: '#fde047' }));
    api.button(container, 'กลับสู่การ์ด', '0 ' + by + ' 0.035', bw, bh, returnToCard,
      '#1e2358', '#2b3a7a', Object.assign({}, bs, { textColor: '#e6fbff', borderColor: '#7deaff' }));
    api.button(container, 'กลับสู่ระบบสุริยะ', '0.66 ' + by + ' 0.035', bw, bh, closeUI,
      '#14163a', '#232a5c', Object.assign({}, bs, { textColor: '#bff4ff', borderColor: '#7deaff' }));
  }

  window.PLANET_QUIZ_UI['saturn'] = {
    // --- 1. ขนาด ตำแหน่ง และระยะห่างของหน้าต่างมินิเกม ---
    width: 2.0,
    height: 1.56,
    position: { x: 0, y: 0, z: 0 },
    distance: 1.6,
    rotation: { x: 0, y: 0, z: 0 },
    scale: 1,

    // --- 2. ฟอนต์และสีหลัก (ธีม Ringed Gold × Deep Space: ทองนวล + ฟ้าโฮโลแกรม บนพื้นน้ำเงินม่วงเข้ม) ---
    style: {
      fontFamily: FONT,
      fontSize: 40,
      panelBgColor: '#0a0a1f',
      panelBorderColor: '#fde047',
      titleColor: '#fde047',
      subtitleColor: '#7deaff',
      textColor: '#f1f5ff',
      buttonColor: '#1e2358',
      buttonHoverColor: '#ca8a04',
      closeButtonColor: '#14163a'
    },

    // --- 3. พื้นหลังและกรอบ ---
    background: {
      color: '#0a0a1f',
      opacity: 0.96,
      image: '',
      outerGlow: true,
      outerGlowColor: '#eab308',
      outerGlowOpacity: 0.24,
      outerGlowSpread: 0.08
    },
    border: {
      style: 'corners',
      color: '#fde047',
      thickness: 0.022,
      opacity: 0.98,
      cornerSize: 0.20,
      cornerColor: '#fde68a'
    },
    header: {
      show: true,
      titlePos: '0 0.69 0.02',
      subtitlePos: '0 0.585 0.02',
      titleWidth: 1.65,
      subtitleWidth: 1.7,
      align: 'center',
      showDivider: true,
      dividerY: 0.515,
      dividerWidth: 1.8,
      dividerColor: '#7deaff'
    },

    // --- 4. ของตกแต่ง: ไอคอนดาวเสาร์มุมซ้ายบน (ทรงกลม + วงแหวน + ดวงจันทร์) / ไอคอนวงโคจรมุมขวาบน / กลุ่มดาว ---
    decorations: [
      { type: 'sphere', position: '-0.88 0.66 0.04', radius: 0.05, color: '#ddc38e', opacity: 0.95 },
      { type: 'ring', position: '-0.88 0.66 0.035', radiusInner: 0.075, radiusOuter: 0.088, color: '#cdb98d', opacity: 0.85 },
      { type: 'circle', position: '-0.809 0.701 0.045', radius: 0.012, color: '#7deaff', opacity: 0.95 },

      { type: 'ring', position: '0.88 0.66 0.035', radiusInner: 0.058, radiusOuter: 0.062, color: '#7deaff', opacity: 0.6 },
      { type: 'ring', position: '0.88 0.66 0.035', radiusInner: 0.032, radiusOuter: 0.035, color: '#fde047', opacity: 0.4 },
      { type: 'circle', position: '0.88 0.66 0.04', radius: 0.012, color: '#fde68a', opacity: 0.95 },
      { type: 'circle', position: '0.926 0.704 0.045', radius: 0.008, color: '#ffffff', opacity: 0.9 }
    ].concat(STAR_DECOR),

    // --- 5. ฟังก์ชันวาดหน้าจอเฉพาะดาวเสาร์ ---
    renderQuestion: renderQuestion,
    renderFeedback: renderFeedback,
    renderResults: renderResults
  };
})();
