// ============================================================================
// ไฟล์ตั้งค่าดีไซน์หน้ามินิเกม (Quiz UI): ดาวยูเรนัส (Uranus)
// ไฟล์: data/quiz-ui/uranus.js
// ============================================================================
// แก้ไขไฟล์นี้เพื่อปรับแต่งรูปลักษณ์ของหน้ามินิเกมเฉพาะ "ดาวยูเรนัส" ได้อย่างอิสระ
// โดยไม่ส่งผลกระทบต่อหน้ามินิเกมของดาวดวงอื่น และไม่กระทบกับการ์ดข้อมูลดาวใน data/planets/uranus.js
// ============================================================================

window.PLANET_QUIZ_UI = window.PLANET_QUIZ_UI || {};

window.PLANET_QUIZ_UI['uranus'] = {
  width: 1.82,
  height: 1.26,
  position: { x: 0, y: 0, z: 0 },
  distance: 1.8,
  rotation: { x: 0, y: 0, z: 0 },
  style: {
    fontFamily: '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif',
    fontSize: 38,
    panelBgColor: '#062028',
    panelBorderColor: '#5eead4',
    titleColor: '#99f6e4',
    subtitleColor: '#ccfbf1',
    textColor: '#ffffff',
    buttonColor: '#0f766e',
    buttonHoverColor: '#0d9488',
    closeButtonColor: '#1e3a44'
  },
  background: {
    color: '#062028',
    opacity: 0.96,
    outerGlow: true,
    outerGlowColor: '#2dd4bf',
    outerGlowOpacity: 0.16
  },
  border: {
    style: 'all',
    color: '#5eead4',
    thickness: 0.020
  },
  header: {
    show: true,
    titlePos: '0 0.49 0.02',
    subtitlePos: '0 0.37 0.02',
    showDivider: true,
    dividerY: 0.30,
    dividerColor: '#2dd4bf'
  },
  decorations: [],
  questionScreen: {
    titlePrefix: '',
    subtitleTemplate: 'คำถาม {current} / {total}',
    questionBox: { position: '0 0.20 0.03', width: 1.38, fontSize: 38, color: '#ffffff', align: 'center' },
    optionsLayout: {
      mode: 'vertical',
      startPos: { x: 0, y: 0.015, z: 0.035 },
      rowSpacing: 0.17,
      width: 1.43,
      height: 0.135,
      color: '#0f766e',
      hoverColor: '#0d9488',
      textColor: '#ffffff',
      fontSize: 36
    },
    exitButton: {
      enabled: true,
      label: 'ออกจากมินิเกม',
      position: '0 -0.53 0.035',
      width: 0.85,
      height: 0.12,
      color: '#1e3a44',
      hoverColor: '#2d5360',
      textColor: '#99f6e4',
      fontSize: 34
    }
  },
  feedbackScreen: {
    correctTitle: 'ตอบถูกต้อง',
    wrongTitle: 'คำตอบยังไม่ถูก',
    selectedText: { prefix: 'คำตอบของคุณ: ', position: '0 0.20 0.03', width: 1.38, fontSize: 38, color: '#ffffff' },
    correctAnswerText: { prefix: 'เฉลย: ', position: '0 0.06 0.03', width: 1.38, fontSize: 38, color: '#99f6e4' },
    explanationText: { position: '0 -0.10 0.03', width: 1.38, fontSize: 36, color: '#ccfbf1' },
    nextButton: {
      nextLabel: 'ไปข้อถัดไป',
      resultLabel: 'ดูผลคะแนน',
      position: '0 -0.43 0.035',
      width: 0.95,
      height: 0.17,
      color: '#0f766e',
      hoverColor: '#0d9488',
      textColor: '#ffffff',
      fontSize: 38
    }
  },
  resultsScreen: {
    title: 'ผลมินิเกม',
    subtitleTemplate: '{name} · คะแนน {score} / {total}',
    reviewText: { position: '0 0.06 0.03', width: 1.38, fontSize: 34, color: '#ffffff' },
    finishButton: {
      label: 'กลับสู่การ์ดข้อมูลดาว',
      action: 'card',
      position: '-0.38 -0.46 0.035',
      width: 0.72,
      height: 0.15,
      color: '#0f766e',
      hoverColor: '#0d9488',
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
      color: '#1e3a44',
      hoverColor: '#2d5360',
      textColor: '#99f6e4',
      fontSize: 34
    }
  }
};
