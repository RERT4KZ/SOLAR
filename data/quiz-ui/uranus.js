// ============================================================================
// SOLAR ODYSSEY VR
// หน้ามินิเกม (Quiz UI): ดาวยูเรนัส (Uranus)
// ไฟล์: data/quiz-ui/uranus.js
// THEME: BLACK & WHITE SCI-FI — URANUS KNOWLEDGE CHALLENGE
// ============================================================================

window.PLANET_QUIZ_UI = window.PLANET_QUIZ_UI || {};

(function () {

  const FONT = '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif';
  const TITLE = 'URANUS KNOWLEDGE CHALLENGE';
  const LETTERS = ['A', 'B', 'C', 'D'];

  // ==========================================================================
  // 1. COLOR THEME
  // ==========================================================================

  const COLORS = {
    background: '#080b10',
    panel: '#15191f',
    panelDark: '#101318',

    white: '#ffffff',
    light: '#f8fafc',
    silver: '#e2e8f0',
    gray: '#94a3b8',

    border: '#ffffff',
    divider: '#cbd5e1',

    button: '#1f2937',
    buttonHover: '#475569',
    buttonDark: '#111827',

    correct: '#86efac',
    correctBg: '#0f2a16',
    correctBorder: '#22c55e',

    wrong: '#fca5a5',
    wrongBg: '#2e0f0f',
    wrongBorder: '#ef4444'
  };

  // ==========================================================================
  // 2. TEXT STYLE
  // ==========================================================================

  function ts(extra) {
    return Object.assign(
      {
        fontFamily: FONT,
        lineHeight: 1.25
      },
      extra || {}
    );
  }

  // ==========================================================================
  // 3. OPTION LABEL
  // ==========================================================================

  function optionLabel(q, i) {

    const opt =
      q.options && q.options[i] !== undefined
        ? q.options[i]
        : '';

    const letter = LETTERS[i] || String(i + 1);

    return letter + '. ' + opt;
  }

  // ==========================================================================
  // 4. MAIN FRAME
  // ==========================================================================

  function frame(api, container, ui, subtitle) {

    api.basePanel(
      TITLE,
      subtitle,
      ui.style,
      container,
      ui
    );

    api.renderCardDecorations(
      { style: ui.style },
      container,
      ui
    );
  }

  // ==========================================================================
  // 5. PROGRESS BAR
  // ==========================================================================

  function progress(
    api,
    container,
    total,
    doneCount,
    currentIndex,
    currentColor
  ) {

    if (!total || total <= 0) return;

    const availW = 1.7;
    const gap = 0.04;

    const segW =
      (availW - (total - 1) * gap) / total;

    const x0 =
      -availW / 2 + segW / 2;

    for (let i = 0; i < total; i++) {

      let color = COLORS.button;

      if (i < doneCount) {
        color = COLORS.white;
      }

      if (i === currentIndex) {
        color = currentColor;
      }

      api.make(
        'a-plane',
        {
          position:
            (x0 + i * (segW + gap)).toFixed(3) +
            ' 0.455 0.025',

          width: segW.toFixed(3),

          height: 0.035,

          material:
            'shader: flat; ' +
            'color: ' + color + '; ' +
            'opacity: 0.95; ' +
            'side: double'
        },
        container
      );
    }
  }

  // ==========================================================================
  // 6. BACKGROUND PANEL
  // ==========================================================================

  function panel(
    api,
    container,
    pos,
    w,
    h,
    color,
    opacity
  ) {

    api.make(
      'a-plane',
      {
        position: pos,

        width: w,

        height: h,

        material:
          'shader: flat; ' +
          'color: ' + color + '; ' +
          'opacity: ' + opacity + '; ' +
          'transparent: true; ' +
          'side: double'
      },
      container
    );
  }

  // ==========================================================================
  // 7. QUESTION SCREEN
  // หน้าคำถาม
  // ==========================================================================

  function renderQuestion(ctx) {

    const {
      container,
      question: q,
      index,
      total,
      uiConfig: ui,
      answerQuestion,
      exitQuiz,
      api
    } = ctx;

    // ------------------------------------------------------------------------
    // HEADER
    // ------------------------------------------------------------------------

    frame(
      api,
      container,
      ui,
      'ภารกิจสำรวจดาวยูเรนัส · ข้อที่ ' +
        (index + 1) +
        ' / ' +
        total
    );

    // ------------------------------------------------------------------------
    // PROGRESS
    // ------------------------------------------------------------------------

    progress(
      api,
      container,
      total,
      index,
      index,
      COLORS.white
    );

    // ------------------------------------------------------------------------
    // QUESTION BACKGROUND
    // ------------------------------------------------------------------------

    panel(
      api,
      container,
      '0 0.25 0.02',
      1.84,
      0.33,
      COLORS.panel,
      0.85
    );

    // ------------------------------------------------------------------------
    // QUESTION TEXT
    // ------------------------------------------------------------------------

    api.txt(
      container,

      q.q || ('รอเพิ่มคำถามข้อที่ ' + (index + 1)),

      '0 0.25 0.03',

      1.8,

      COLORS.white,

      'center',

      ts({
        fontSize: 42,
        maxHeight: 0.30,
        minFontSize: 32,
        centerAnchor: true
      })
    );

    // ------------------------------------------------------------------------
    // ANSWER OPTIONS 2 x 2
    // ------------------------------------------------------------------------

    (q.options || []).forEach(function (opt, i) {

      const col = i % 2;
      const row = Math.floor(i / 2);

      const x = (col - 0.5) * 0.96;
      const y = -0.10 - row * 0.33;

      api.button(
        container,

        optionLabel(q, i),

        x.toFixed(3) +
          ' ' +
          y.toFixed(3) +
          ' 0.035',

        0.92,

        0.30,

        function () {
          answerQuestion(i);
        },

        COLORS.button,

        COLORS.buttonHover,

        ts({
          fontSize: 56,
          maxHeight: 0.27,
          minFontSize: 38,
          textColor: COLORS.white,
          borderColor: COLORS.border,
          borderThickness: 0.006,
          opacity: 1
        })
      );
    });

    // ------------------------------------------------------------------------
    // EXIT BUTTON
    // ------------------------------------------------------------------------

    api.button(
      container,

      'ออกจากแบบทดสอบ',

      '0 -0.69 0.035',

      0.9,

      0.12,

      exitQuiz,

      COLORS.buttonDark,

      COLORS.buttonHover,

      ts({
        fontSize: 70,
        textColor: COLORS.white,
        borderColor: COLORS.border,
        borderThickness: 0.005,
        opacity: 1
      })
    );
  }

  // ==========================================================================
  // 8. FEEDBACK SCREEN
  // หน้าเฉลยคำตอบ
  // ==========================================================================

  function renderFeedback(ctx) {

    const {
      container,
      question: q,
      answer: a,
      isCorrect: ok,
      index,
      total,
      uiConfig: ui,
      nextStep,
      api
    } = ctx;

    // ------------------------------------------------------------------------
    // HEADER
    // ------------------------------------------------------------------------

    frame(
      api,
      container,
      ui,
      'ภารกิจสำรวจดาวยูเรนัส · ข้อที่ ' +
        (index + 1) +
        ' / ' +
        total
    );

    // ------------------------------------------------------------------------
    // PROGRESS
    // ------------------------------------------------------------------------

    progress(
      api,
      container,
      total,
      index,
      index,
      ok ? COLORS.correctBorder : COLORS.wrongBorder
    );

    // ------------------------------------------------------------------------
    // RESULT BANNER
    // ------------------------------------------------------------------------

    panel(
      api,
      container,
      '0 0.33 0.02',
      1.84,
      0.17,
      ok ? COLORS.correctBg : COLORS.wrongBg,
      0.92
    );

    api.txt(
      container,

      ok ? '✔ ตอบถูกต้อง!' : '✘ ยังไม่ถูกต้อง',

      '0 0.33 0.03',

      1.7,

      ok ? COLORS.correct : COLORS.wrong,

      'center',

      ts({
        fontSize: 62,
        lineHeight: 1.1,
        centerAnchor: true
      })
    );

    // ------------------------------------------------------------------------
    // SELECTED ANSWER
    // ------------------------------------------------------------------------

    api.txt(
      container,

      'คุณเลือก ' + optionLabel(q, a.selected),

      '0 0.17 0.03',

      1.8,

      ok ? COLORS.correct : COLORS.wrong,

      'center',

      ts({
        fontSize: 38,
        lineHeight: 1.1,
        maxHeight: 0.15,
        minFontSize: 24,
        centerAnchor: true
      })
    );

    // ------------------------------------------------------------------------
    // CORRECT ANSWER
    // ------------------------------------------------------------------------

    if (!ok) {

      api.txt(
        container,

        'เฉลย ' + optionLabel(q, q.correct),

        '0 0.03 0.03',

        1.8,

        COLORS.white,

        'center',

        ts({
          fontSize: 38,
          lineHeight: 1.1,
          maxHeight: 0.15,
          minFontSize: 24,
          centerAnchor: true
        })
      );

    } else if (q.topic) {

      api.txt(
        container,

        'หัวข้อ: ' + q.topic,

        '0 0.03 0.03',

        1.8,

        COLORS.silver,

        'center',

        ts({
          fontSize: 38,
          lineHeight: 1.1,
          maxHeight: 0.15,
          minFontSize: 24,
          centerAnchor: true
        })
      );
    }

    // ------------------------------------------------------------------------
    // EXPLANATION BACKGROUND
    // ------------------------------------------------------------------------

    panel(
      api,
      container,
      '0 -0.22 0.02',
      1.82,
      0.36,
      COLORS.panel,
      0.85
    );

    // ------------------------------------------------------------------------
    // EXPLANATION TEXT
    // ------------------------------------------------------------------------

    api.txt(
      container,

      q.explanation || '',

      '0 -0.22 0.03',

      1.74,

      COLORS.light,

      'center',

      ts({
        fontSize: 40,
        maxHeight: 0.32,
        minFontSize: 30,
        centerAnchor: true
      })
    );

    // ------------------------------------------------------------------------
    // NEXT BUTTON
    // ------------------------------------------------------------------------

    const isLast = index === total - 1;

    api.button(
      container,

      isLast ? 'ดูสรุปคะแนน' : 'ข้อถัดไป',

      '0 -0.58 0.035',

      1.2,

      0.17,

      nextStep,

      COLORS.button,

      COLORS.buttonHover,

      ts({
        fontSize: 72,
        textColor: COLORS.white,
        borderColor: COLORS.border,
        borderThickness: 0.006,
        opacity: 1
      })
    );
  }

  // ==========================================================================
  // 9. RESULTS SCREEN
  // หน้าสรุปผลคะแนน
  // ==========================================================================

  function renderResults(ctx) {

    const {
      container,
      planet,
      score,
      total,
      answers,
      questions,
      uiConfig: ui,
      returnToCard,
      closeUI,
      api
    } = ctx;

    // ------------------------------------------------------------------------
    // HEADER
    // ------------------------------------------------------------------------

    frame(
      api,
      container,
      ui,
      'สรุปผลภารกิจสำรวจดาวยูเรนัส'
    );

    // ------------------------------------------------------------------------
    // SCORE
    // ------------------------------------------------------------------------

    api.txt(
      container,

      'คะแนน ' + score + ' / ' + total,

      '0 0.385 0.03',

      1.7,

      COLORS.white,

      'center',

      ts({
        fontSize: 84,
        lineHeight: 1.1,
        centerAnchor: true
      })
    );

    // ------------------------------------------------------------------------
    // STAR RATING
    // ------------------------------------------------------------------------

    const filled = Math.max(
      0,
      Math.min(
        5,
        Math.round(
          (total > 0 ? score / total : 0) * 5
        )
      )
    );

    api.txt(
      container,

      '★'.repeat(filled) +
        '☆'.repeat(5 - filled),

      '0 0.215 0.03',

      1.0,

      COLORS.silver,

      'center',

      ts({
        fontSize: 70,
        lineHeight: 1.1,
        centerAnchor: true
      })
    );

    // ------------------------------------------------------------------------
    // RESULT MESSAGE
    // ------------------------------------------------------------------------

    const ratio = total > 0 ? score / total : 0;

    const msg =
      ratio >= 0.8
        ? 'ยอดเยี่ยม! คุณเข้าใจดาวยูเรนัสได้ดีมาก'
        : ratio >= 0.5
          ? 'ผ่านภารกิจ ลองทบทวนข้อที่พลาดแล้วเล่นอีกครั้ง'
          : 'ลองกลับไปอ่านการ์ดข้อมูลดาวยูเรนัส แล้วเล่นอีกครั้ง';

    api.txt(
      container,

      msg,

      '0 0.10 0.03',

      1.8,

      COLORS.light,

      'center',

      ts({
        fontSize: 40,
        maxHeight: 0.12,
        minFontSize: 30,
        centerAnchor: true
      })
    );

    // ------------------------------------------------------------------------
    // QUESTION REVIEW
    // ------------------------------------------------------------------------

    (questions || []).forEach(function (q, i) {

      const a = answers && answers[i];

      const good =
        a && a.selected === a.correct;

      const label =
        (good ? '✔' : '✘') +
        '  ' +
        (i + 1) +
        '. ' +
        (q.topic || ('ข้อที่ ' + (i + 1)));

      api.txt(
        container,

        label,

        '-0.8 ' +
          (0.0 - i * 0.11).toFixed(3) +
          ' 0.03',

        1.6,

        good ? COLORS.correct : COLORS.wrong,

        'left',

        ts({
          fontSize: 44,
          lineHeight: 1.0
        })
      );
    });

    // ------------------------------------------------------------------------
    // RESULT BUTTONS
    // ------------------------------------------------------------------------

    const by = '-0.66';
    const bw = 0.62;
    const bh = 0.15;

    const bs = ts({
      fontSize: 84,
      lineHeight: 1.2,
      opacity: 1,
      borderThickness: 0.006
    });

    // ------------------------------------------------------------------------
    // PLAY AGAIN
    // ------------------------------------------------------------------------

    api.button(
      container,

      'เล่นอีกครั้ง',

      '-0.66 ' + by + ' 0.035',

      bw,

      bh,

      function () {
        api.startQuiz(planet);
      },

      COLORS.button,

      COLORS.buttonHover,

      Object.assign(
        {},
        bs,
        {
          textColor: COLORS.white,
          borderColor: COLORS.border
        }
      )
    );

    // ------------------------------------------------------------------------
    // RETURN TO CARD
    // ------------------------------------------------------------------------

    api.button(
      container,

      'กลับสู่การ์ด',

      '0 ' + by + ' 0.035',

      bw,

      bh,

      returnToCard,

      COLORS.button,

      COLORS.buttonHover,

      Object.assign(
        {},
        bs,
        {
          textColor: COLORS.white,
          borderColor: COLORS.border
        }
      )
    );

    // ------------------------------------------------------------------------
    // RETURN TO SOLAR SYSTEM
    // ------------------------------------------------------------------------

    api.button(
      container,

      'กลับสู่ระบบสุริยะ',

      '0.66 ' + by + ' 0.035',

      bw,

      bh,

      closeUI,

      COLORS.buttonDark,

      COLORS.buttonHover,

      Object.assign(
        {},
        bs,
        {
          textColor: COLORS.white,
          borderColor: COLORS.border
        }
      )
    );
  }

  // ==========================================================================
  // 10. URANUS QUIZ UI CONFIGURATION
  // ==========================================================================

  window.PLANET_QUIZ_UI['uranus'] = {

    // ------------------------------------------------------------------------
    // SIZE AND POSITION
    // ------------------------------------------------------------------------

    width: 2.0,

    height: 1.56,

    position: {
      x: 0,
      y: 0,
      z: 0
    },

    distance: 1.6,

    rotation: {
      x: 0,
      y: 0,
      z: 0
    },

    scale: 1,

    // ------------------------------------------------------------------------
    // MAIN STYLE
    // ------------------------------------------------------------------------

    style: {

      fontFamily: FONT,

      fontSize: 40,

      panelBgColor: COLORS.background,

      panelBorderColor: COLORS.border,

      titleColor: COLORS.white,

      subtitleColor: COLORS.silver,

      textColor: COLORS.white,

      buttonColor: COLORS.button,

      buttonHoverColor: COLORS.buttonHover,

      closeButtonColor: COLORS.buttonDark,

      opacity: 1
    },

    // ------------------------------------------------------------------------
    // BACKGROUND
    // ------------------------------------------------------------------------

    background: {

      color: COLORS.background,

      opacity: 0.96,

      image: '',

      outerGlow: true,

      outerGlowColor: COLORS.white,

      outerGlowOpacity: 0.20,

      outerGlowSpread: 0.08
    },

    // ------------------------------------------------------------------------
    // BORDER
    // ------------------------------------------------------------------------

    border: {

      style: 'corners',

      color: COLORS.white,

      thickness: 0.022,

      opacity: 0.98,

      cornerSize: 0.20,

      cornerColor: COLORS.silver
    },

    // ------------------------------------------------------------------------
    // HEADER
    // ------------------------------------------------------------------------

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

      dividerColor: COLORS.silver
    },

    // ------------------------------------------------------------------------
    // DECORATIONS
    // ------------------------------------------------------------------------

    decorations: [

      // ดาวยูเรนัสจำลอง
      {
        type: 'sphere',

        position: '-0.88 0.66 0.04',

        radius: 0.06,

        color: COLORS.silver,

        opacity: 0.95
      },

      // วงแหวนรอบดาว
      {
        type: 'ring',

        position: '-0.88 0.66 0.035',

        radiusInner: 0.075,

        radiusOuter: 0.088,

        color: COLORS.white,

        opacity: 0.75
      }

    ],

    // ------------------------------------------------------------------------
    // CUSTOM RENDER FUNCTIONS
    // ------------------------------------------------------------------------

    renderQuestion: renderQuestion,

    renderFeedback: renderFeedback,

    renderResults: renderResults

  };

})();
