// ============================================================================
// หน้ามินิเกม (Quiz UI): ดาวอังคาร (Mars)
// ไฟล์: data/quiz-ui/mars.js
// ============================================================================

window.PLANET_QUIZ_UI = window.PLANET_QUIZ_UI || {};

window.PLANET_QUIZ_UI['mars'] = {
  width: 1.88,
  height: 1.30,
  position: { x: 0, y: 0, z: 0 },
  distance: 1.8,
  rotation: { x: 0, y: 0, z: 0 },
  style: {
    fontFamily: '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif',
    fontSize: 36,
    panelBgColor: '#140805',
    panelBorderColor: '#ea580c',
    titleColor: '#ffe4c7',
    subtitleColor: '#fdba74',
    textColor: '#ffffff',
    buttonColor: '#7c2d12',
    buttonHoverColor: '#c2410c',
    closeButtonColor: '#57534e',
    opacity: 1            // ปุ่มทึบ 100% ทุกหน้า เพื่อให้ข้อความบนปุ่มไม่ถูกบัง
  },
  background: {
    color: '#140805',
    opacity: 0.97,
    outerGlow: true,
    outerGlowColor: '#c2410c',
    outerGlowOpacity: 0.16
  },
  border: {
    style: 'frame',
    color: '#ea580c',
    thickness: 0.024,
    cornerSize: 0.16,
    cornerColor: '#fb923c'
  },
  header: {
    show: true,
    titlePos: '0 0.52 0.02',
    subtitlePos: '0 0.41 0.02',
    showDivider: true,
    dividerY: 0.33,
    dividerColor: '#ea580c'
  },
  decorations: [],
  questionScreen: {
    titlePrefix: '',
    subtitleTemplate: 'คำถามข้อ {current} จาก {total}',
    questionBox: { position: '0 0.23 0.03', width: 1.55, fontSize: 38, color: '#ffffff', align: 'center' },
    optionsLayout: {
      mode: 'vertical',
      startPos: { x: 0, y: 0.05, z: 0.035 },
      rowSpacing: 0.15,
      width: 1.55,
      height: 0.125,
      color: '#7c2d12',
      hoverColor: '#c2410c',
      textColor: '#ffffff',
      fontSize: 40,
      borderColor: '#ea580c',
      borderThickness: 0.005,
      opacity: 1
    },
    exitButton: {
      enabled: true,
      label: 'ออกจากมินิเกม',
      position: '0 -0.545 0.035',
      width: 0.85,
      height: 0.10,
      color: '#57534e',
      hoverColor: '#78716c',
      textColor: '#ffffff',
      fontSize: 64
    }
  },
  feedbackScreen: {
    correctTitle: 'ตอบถูกต้อง',
    wrongTitle: 'คำตอบยังไม่ถูก',
    subtitleTemplate: 'คำถามข้อ {current} จาก {total}',
    correctTitleColor: '#86efac',
    wrongTitleColor: '#fca5a5',
    correctBorderColor: '#22c55e',
    wrongBorderColor: '#ef4444',
    selectedText: {
      prefix: 'คำตอบของคุณ: ',
      position: '0 0.20 0.03',
      width: 1.55,
      fontSize: 34,
      color: '#ffffff',
      correctColor: '#86efac',
      wrongColor: '#fca5a5'
    },
    correctAnswerText: { prefix: 'เฉลย: ', position: '0 0.05 0.03', width: 1.55, fontSize: 34, color: '#fdba74' },
    explanationText: { position: '0 -0.14 0.03', width: 1.55, fontSize: 34, color: '#ffedd5' },
    nextButton: {
      nextLabel: 'ไปข้อถัดไป',
      resultLabel: 'ดูผลคะแนน',
      position: '0 -0.47 0.035',
      width: 0.95,
      height: 0.17,
      color: '#9a3412',
      hoverColor: '#ea580c',
      textColor: '#ffffff',
      fontSize: 72
    }
  },
  resultsScreen: {
    title: 'ผลมินิเกม',
    subtitleTemplate: '{name} · คะแนน {score} / {total}',
    reviewText: { position: '0 0.08 0.03', width: 1.55, fontSize: 36, color: '#ffffff' },
    finishButton: {
      label: 'กลับสู่การ์ดข้อมูล',
      action: 'card',
      position: '-0.45 -0.46 0.035',
      width: 0.82,
      height: 0.16,
      color: '#9a3412',
      hoverColor: '#ea580c',
      textColor: '#ffffff',
      fontSize: 60
    },
    closeSolarButton: {
      enabled: true,
      label: 'กลับสู่ระบบสุริยะ',
      action: 'solar',
      position: '0.45 -0.46 0.035',
      width: 0.82,
      height: 0.16,
      color: '#57534e',
      hoverColor: '#78716c',
      textColor: '#ffffff',
      fontSize: 60
    }
  }
};
