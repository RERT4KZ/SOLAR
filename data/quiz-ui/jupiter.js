// ============================================================================
// ไฟล์ตั้งค่าดีไซน์หน้ามินิเกม (Quiz UI): ดาวพฤหัสบดี (Jupiter)
// ไฟล์: data/quiz-ui/jupiter.js
// ============================================================================
// แก้ไขไฟล์นี้เพื่อปรับแต่งรูปลักษณ์ของหน้ามินิเกมเฉพาะ "ดาวพฤหัสบดี" ได้อย่างอิสระ
// โดยไม่ส่งผลกระทบต่อหน้ามินิเกมของดาวดวงอื่น และไม่กระทบกับการ์ดข้อมูลดาวใน data/planets/jupiter.js
// ============================================================================

window.PLANET_QUIZ_UI = window.PLANET_QUIZ_UI || {};

window.PLANET_QUIZ_UI['jupiter'] = {
  width: 1.90,
  height: 1.28,
  position: { x: 0, y: 0, z: 0 },
  distance: 1.8,
  rotation: { x: 0, y: 0, z: 0 },
  style: {
    fontFamily: '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif',
    fontSize: 38,
    panelBgColor: '#1a120c',
    panelBorderColor: '#f59e0b',
    titleColor: '#fde68a',
    subtitleColor: '#fcd34d',
    textColor: '#ffffff',
    buttonColor: '#5c3512',
    buttonHoverColor: '#b45309',
    closeButtonColor: '#2e2218'
  },
  background: {
    color: '#1a120c',
    opacity: 0.96,
    outerGlow: true,
    outerGlowColor: '#d97706',
    outerGlowOpacity: 0.16
  },
  border: {
    style: 'frame',
    color: '#f59e0b',
    thickness: 0.020,
    cornerSize: 0.14
  },
  header: {
    show: true,
    titlePos: '0 0.50 0.02',
    subtitlePos: '0 0.38 0.02',
    showDivider: true,
    dividerY: 0.31,
    dividerColor: '#f59e0b'
  },
  decorations: [],
  questionScreen: {
    titlePrefix: '',
    subtitleTemplate: 'คำถาม {current} / {total}',
    questionBox: { position: '0 0.20 0.03', width: 1.44, fontSize: 38, color: '#ffffff', align: 'center' },
    optionsLayout: {
      mode: 'vertical',
      startPos: { x: 0, y: 0.015, z: 0.035 },
      rowSpacing: 0.17,
      width: 1.46,
      height: 0.135,
      color: '#5c3512',
      hoverColor: '#b45309',
      textColor: '#ffffff',
      fontSize: 36
    },
    exitButton: {
      enabled: true,
      label: 'ออกจากมินิเกม',
      position: '0 -0.53 0.035',
      width: 0.85,
      height: 0.12,
      color: '#2e2218',
      hoverColor: '#5c3512',
      textColor: '#fde68a',
      fontSize: 34
    }
  },
  feedbackScreen: {
    correctTitle: 'ตอบถูกต้อง',
    wrongTitle: 'คำตอบยังไม่ถูก',
    selectedText: { prefix: 'คำตอบของคุณ: ', position: '0 0.20 0.03', width: 1.44, fontSize: 38, color: '#ffffff' },
    correctAnswerText: { prefix: 'เฉลย: ', position: '0 0.06 0.03', width: 1.44, fontSize: 38, color: '#fde68a' },
    explanationText: { position: '0 -0.10 0.03', width: 1.44, fontSize: 36, color: '#fef3c7' },
    nextButton: {
      nextLabel: 'ไปข้อถัดไป',
      resultLabel: 'ดูผลคะแนน',
      position: '0 -0.43 0.035',
      width: 0.95,
      height: 0.17,
      color: '#b45309',
      hoverColor: '#d97706',
      textColor: '#ffffff',
      fontSize: 38
    }
  },
  resultsScreen: {
    title: 'ผลมินิเกม',
    subtitleTemplate: '{name} · คะแนน {score} / {total}',
    reviewText: { position: '0 0.06 0.03', width: 1.44, fontSize: 34, color: '#ffffff' },
    finishButton: {
      label: 'กลับสู่การ์ดข้อมูลดาว',
      action: 'card',
      position: '-0.38 -0.46 0.035',
      width: 0.72,
      height: 0.15,
      color: '#b45309',
      hoverColor: '#d97706',
      textColor: '#ffffff',
      fontSize: 34
    },
    closeSolarButton: {
      enabled: true,
      label: 'กลับสู่ระบบสุริยะ',
      action: 'solar',
      position: '0.40 -0.46 0.035',
      width: 0.72,
      height: 0.15,
      color: '#2e2218',
      hoverColor: '#5c3512',
      textColor: '#fde68a',
      fontSize: 34
    }
  }
};
