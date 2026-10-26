// ============================================================================
// ไฟล์ตั้งค่าดีไซน์หน้ามินิเกม (Quiz UI): ดาวพฤหัสบดี (Jupiter) — "JUPITER KNOWLEDGE CHALLENGE"
// ไฟล์: data/quiz-ui/jupiter.js
// ============================================================================
// หน้าตาของมินิเกมดาวพฤหัสบดีทั้ง 3 หน้าจอ (คำถาม / เฉลย / สรุปผล) วาดด้วยฟังก์ชันเฉพาะดวงนี้ในไฟล์นี้
// ผ่าน hook renderQuestion / renderFeedback / renderResults ที่ระบบรองรับอยู่แล้ว
// จึงไม่กระทบมินิเกมของดาวดวงอื่น และไม่ต้องแก้ index.html
//
// คุณสมบัติ: แถบความคืบหน้า (Progress) · ข้อที่ N / รวม · ปุ่มตัวเลือกใหญ่สำหรับเมาส์/Controller
//            เฉลยพร้อมสัญลักษณ์ ✔/✘ (ไม่พึ่งสีอย่างเดียว) · คำอธิบายหลังตอบ · ปุ่มเล่นใหม่ในหน้าสรุปผล
// ธีม: Storm Amber Hologram — พื้นอวกาศน้ำเงินอมม่วงเข้ม + ส้มอำพัน + เส้นฟ้าโฮโลแกรม
//      ตรงกับการ์ดข้อมูลดาวพฤหัสบดี (data/planets/jupiter.js) และชุดเดียวกับการ์ดดวงอาทิตย์
// ============================================================================

window.PLANET_QUIZ_UI = window.PLANET_QUIZ_UI || {};

(function () {
  const FONT = '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif';
  const TITLE = 'JUPITER KNOWLEDGE CHALLENGE';
  const MISSION = 'ภารกิจสำรวจดาวพฤหัสบดี';
  const LETTERS = ['A', 'B', 'C', 'D'];

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

  // แถบความคืบหน้าแบบแบ่งช่องตามจำนวนข้อ
  function progress(api, container, total, doneCount, currentIndex, currentColor) {
    const availW = 1.7, gap = 0.04;
    const segW = (availW - (total - 1) * gap) / total;
    const x0 = -availW / 2 + segW / 2;
    for (let i = 0; i < total; i++) {
      let color = '#241a40';
      if (i < doneCount) color = '#d97706';
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

    panel(api, container, '0 0.25 0.02', 1.84, 0.33, '#1a1238', 0.70);
    api.txt(container, q.q || ('รอเพิ่มคำถามข้อที่ ' + (index + 1)), '0 0.25 0.03', 1.8, '#fff7ed', 'center',
      ts({ fontSize: 42, maxHeight: 0.30, minFontSize: 32, centerAnchor: true }));

    // ตัวเลือกคำตอบแบบ 2x2
    (q.options || []).forEach((opt, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      const x = (col - 0.5) * 0.96;
      const y = -0.10 - row * 0.33;
      api.button(container, optionLabel(q, i), x.toFixed(3) + ' ' + y.toFixed(3) + ' 0.035', 0.92, 0.30,
        () => answerQuestion(i), '#2a1f45', '#b45309',
        ts({ fontSize: 56, maxHeight: 0.27, minFontSize: 38, textColor: '#fff7ed', borderColor: '#d6a37c', borderThickness: 0.006, opacity: 1 }));
    });

    api.button(container, 'ออกจากแบบทดสอบ', '0 -0.69 0.035', 0.9, 0.12, exitQuiz, '#1a1530', '#33264f',
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
      api.txt(container, 'หัวข้อ: ' + q.topic, '0 0.03 0.03', 1.8, '#bff4ff', 'center',
        ts({ fontSize: 38, lineHeight: 1.1, maxHeight: 0.15, minFontSize: 24, centerAnchor: true }));
    }

    panel(api, container, '0 -0.22 0.02', 1.82, 0.36, '#150f2e', 0.75);
    api.txt(container, q.explanation || '', '0 -0.22 0.03', 1.74, '#fef3c7', 'center',
      ts({ fontSize: 40, maxHeight: 0.32, minFontSize: 30, centerAnchor: true }));

    const isLast = index === total - 1;
    api.button(container, isLast ? 'ดูสรุปคะแนน' : 'ข้อถัดไป', '0 -0.58 0.035', 1.2, 0.17, nextStep, '#b45309', '#d97706',
      ts({ fontSize: 72, textColor: '#ffffff', borderColor: '#fbbf24', borderThickness: 0.006, opacity: 1 }));
  }

  // ------------------------------------------------------------------ หน้าสรุปผล
  function renderResults(ctx) {
    const { container, planet, score, total, answers, questions, uiConfig: ui, returnToCard, closeUI, api } = ctx;
    frame(api, container, ui, 'สรุปผล' + MISSION);

    api.txt(container, 'คะแนน ' + score + ' / ' + total, '0 0.385 0.03', 1.7, '#fbbf24', 'center',
      ts({ fontSize: 84, lineHeight: 1.1, centerAnchor: true }));

    const filled = Math.max(0, Math.min(5, Math.round((total > 0 ? score / total : 0) * 5)));
    api.txt(container, '★'.repeat(filled) + '☆'.repeat(5 - filled), '0 0.215 0.03', 1.0, '#fbbf24', 'center',
      ts({ fontSize: 70, lineHeight: 1.1, centerAnchor: true }));

    const ratio = total > 0 ? score / total : 0;
    const msg = ratio >= 0.8 ? 'ยอดเยี่ยม! คุณเข้าใจดาวพฤหัสบดีได้ดีมาก'
      : ratio >= 0.5 ? 'ผ่านภารกิจ ลองทบทวนข้อที่พลาดแล้วเล่นอีกครั้ง'
      : 'ลองกลับไปอ่านการ์ดข้อมูลดาวพฤหัสบดี แล้วเล่นอีกครั้ง';
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
      '#b45309', '#d97706', Object.assign({}, bs, { textColor: '#ffffff', borderColor: '#fbbf24' }));
    api.button(container, 'กลับสู่การ์ด', '0 ' + by + ' 0.035', bw, bh, returnToCard,
      '#241a40', '#3a2b63', Object.assign({}, bs, { textColor: '#e6fbff', borderColor: '#7deaff' }));
    api.button(container, 'กลับสู่ระบบสุริยะ', '0.66 ' + by + ' 0.035', bw, bh, closeUI,
      '#1a1530', '#33264f', Object.assign({}, bs, { textColor: '#bff4ff', borderColor: '#7deaff' }));
  }

  window.PLANET_QUIZ_UI['jupiter'] = {
    // --- 1. ขนาด ตำแหน่ง และระยะห่างของหน้าต่างมินิเกม ---
    width: 2.0,
    height: 1.56,
    position: { x: 0, y: 0, z: 0 },
    distance: 1.6,
    rotation: { x: 0, y: 0, z: 0 },
    scale: 1,

    // --- 2. ฟอนต์และสีหลัก (ธีม Storm Amber Hologram) ---
    style: {
      fontFamily: FONT,
      fontSize: 40,
      panelBgColor: '#0b0a1a',
      panelBorderColor: '#f59e0b',
      titleColor: '#fbbf24',
      subtitleColor: '#7deaff',
      textColor: '#fff7ed',
      buttonColor: '#2a1f45',
      buttonHoverColor: '#b45309',
      closeButtonColor: '#1a1530'
    },

    // --- 3. พื้นหลังและกรอบ ---
    background: {
      color: '#0b0a1a',
      opacity: 0.96,
      image: '',
      outerGlow: true,
      outerGlowColor: '#d97706',
      outerGlowOpacity: 0.22,
      outerGlowSpread: 0.08
    },
    border: {
      style: 'corners',
      color: '#f59e0b',
      thickness: 0.022,
      opacity: 0.98,
      cornerSize: 0.20,
      cornerColor: '#fbbf24'
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

    // --- 4. ของตกแต่ง: ดาวพฤหัสบดีพร้อมจุดแดงมุมซ้ายบน / วงโคจรไอโอมุมขวาบน / ดาวพื้นหลัง ---
    decorations: [
      // ไอคอนดาวพฤหัสบดี (ซ้าย): ทรงกลม + วงแหวนอำพัน + จุดแดงใหญ่
      { type: 'sphere', position: '-0.88 0.66 0.04', radius: 0.06, color: '#d6a37c', opacity: 0.95 },
      { type: 'circle', position: '-0.865 0.642 0.102', radius: 0.012, color: '#b9462d', opacity: 0.95 },
      { type: 'ring', position: '-0.88 0.66 0.035', radiusInner: 0.075, radiusOuter: 0.088, color: '#f59e0b', opacity: 0.75 },

      // วงโคจรพร้อมดวงจันทร์ไอโอ (ขวา) ให้หัวหน้าต่างสมดุลสองฝั่ง
      { type: 'ring', position: '0.88 0.66 0.035', radiusInner: 0.075, radiusOuter: 0.078, color: '#7deaff', opacity: 0.55 },
      { type: 'circle', position: '0.934 0.713 0.04', radius: 0.012, color: '#fde047', opacity: 0.95 },
      { type: 'circle', position: '0.88 0.66 0.04', radius: 0.008, color: '#e8c9a8', opacity: 0.8 },

      // ดาวพื้นหลัง (อยู่ขอบหน้าต่าง ไม่ทับข้อความและปุ่ม)
      { type: 'circle', position: '-0.93 0.50 0.01', radius: 0.004, color: '#ffffff', opacity: 0.8 },
      { type: 'circle', position: '0.93 0.52 0.01', radius: 0.003, color: '#bff4ff', opacity: 0.7 },
      { type: 'circle', position: '-0.70 0.73 0.01', radius: 0.003, color: '#fde8cc', opacity: 0.7 },
      { type: 'circle', position: '0.66 0.74 0.01', radius: 0.004, color: '#ffffff', opacity: 0.75 },
      { type: 'circle', position: '-0.92 -0.70 0.01', radius: 0.004, color: '#ffffff', opacity: 0.75 },
      { type: 'circle', position: '-0.80 -0.74 0.01', radius: 0.003, color: '#bff4ff', opacity: 0.65 },
      { type: 'circle', position: '0.92 -0.72 0.01', radius: 0.004, color: '#ffffff', opacity: 0.75 },
      { type: 'circle', position: '0.78 -0.75 0.01', radius: 0.003, color: '#fde8cc', opacity: 0.65 }
    ],

    // --- 5. ฟังก์ชันวาดหน้าจอเฉพาะดาวพฤหัสบดี ---
    renderQuestion: renderQuestion,
    renderFeedback: renderFeedback,
    renderResults: renderResults
  };
})();
