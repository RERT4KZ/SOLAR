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
// ธีม: Storm Amber — ส้มอำพันและน้ำตาลเข้ม ให้เข้ากับการ์ดข้อมูลดาวพฤหัสบดี (data/planets/jupiter.js)
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
      let color = '#2e2218';
      if (i < doneCount) color = '#b45309';
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
    progress(api, container, total, index, index, '#fbbf24');

    panel(api, container, '0 0.25 0.02', 1.84, 0.33, '#2b1405', 0.65);
    api.txt(container, q.q || ('รอเพิ่มคำถามข้อที่ ' + (index + 1)), '0 0.25 0.03', 1.8, '#fff7ed', 'center',
      ts({ fontSize: 42, maxHeight: 0.30, minFontSize: 32, centerAnchor: true }));

    // ตัวเลือกคำตอบแบบ 2x2
    (q.options || []).forEach((opt, i) => {
      const col = i % 2, row = Math.floor(i / 2);
      const x = (col - 0.5) * 0.96;
      const y = -0.10 - row * 0.33;
      api.button(container, optionLabel(q, i), x.toFixed(3) + ' ' + y.toFixed(3) + ' 0.035', 0.92, 0.30,
        () => answerQuestion(i), '#5c3512', '#b45309',
        ts({ fontSize: 56, maxHeight: 0.27, minFontSize: 38, textColor: '#fff7ed', borderColor: '#d6a37c', borderThickness: 0.006, opacity: 1 }));
    });

    api.button(container, 'ออกจากแบบทดสอบ', '0 -0.69 0.035', 0.9, 0.12, exitQuiz, '#2e2218', '#5c3512',
      ts({ fontSize: 70, textColor: '#fde8cc', borderColor: '#d6a37c', borderThickness: 0.005, opacity: 1 }));
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
      api.txt(container, 'หัวข้อ: ' + q.topic, '0 0.03 0.03', 1.8, '#e8c9a8', 'center',
        ts({ fontSize: 38, lineHeight: 1.1, maxHeight: 0.15, minFontSize: 24, centerAnchor: true }));
    }

    panel(api, container, '0 -0.22 0.02', 1.82, 0.36, '#241608', 0.7);
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
      '#5c3512', '#b45309', Object.assign({}, bs, { textColor: '#fff7ed', borderColor: '#d6a37c' }));
    api.button(container, 'กลับสู่ระบบสุริยะ', '0.66 ' + by + ' 0.035', bw, bh, closeUI,
      '#2e2218', '#5c3512', Object.assign({}, bs, { textColor: '#fde8cc', borderColor: '#d6a37c' }));
  }

  window.PLANET_QUIZ_UI['jupiter'] = {
    // --- 1. ขนาด ตำแหน่ง และระยะห่างของหน้าต่างมินิเกม ---
    width: 2.0,
    height: 1.56,
    position: { x: 0, y: 0, z: 0 },
    distance: 1.6,
    rotation: { x: 0, y: 0, z: 0 },
    scale: 1,

    // --- 2. ฟอนต์และสีหลัก (ธีม Storm Amber: ส้มอำพันบนพื้นน้ำตาลเข้ม ตรงกับการ์ดข้อมูลดาวพฤหัสบดี) ---
    style: {
      fontFamily: FONT,
      fontSize: 40,
      panelBgColor: '#150f0a',
      panelBorderColor: '#f59e0b',
      titleColor: '#fbbf24',
      subtitleColor: '#e8c9a8',
      textColor: '#fff7ed',
      buttonColor: '#5c3512',
      buttonHoverColor: '#b45309',
      closeButtonColor: '#2e2218'
    },

    // --- 3. พื้นหลังและกรอบ ---
    background: {
      color: '#150f0a',
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
      dividerColor: '#d6a37c'
    },

    // --- 4. ของตกแต่ง: ไอคอนดาวพฤหัสบดีมุมซ้ายบน ---
    decorations: [
      { type: 'sphere', position: '-0.88 0.66 0.04', radius: 0.06, color: '#d6a37c', opacity: 0.95 },
      { type: 'ring', position: '-0.88 0.66 0.035', radiusInner: 0.075, radiusOuter: 0.088, color: '#f59e0b', opacity: 0.75 }
    ],

    // --- 5. ฟังก์ชันวาดหน้าจอเฉพาะดาวพฤหัสบดี ---
    renderQuestion: renderQuestion,
    renderFeedback: renderFeedback,
    renderResults: renderResults
  };
})();
