// ============================================================================
// ไฟล์ตั้งค่าดีไซน์หน้ามินิเกม (Quiz UI): ดาวอังคาร (Mars)
// ไฟล์: data/quiz-ui/mars.js
// ============================================================================
// แก้ไขไฟล์นี้เพื่อปรับแต่งรูปลักษณ์ของหน้ามินิเกมเฉพาะ "ดาวอังคาร" ได้อย่างอิสระ
// โดยไม่ส่งผลกระทบต่อหน้ามินิเกมของดาวดวงอื่น และไม่กระทบกับการ์ดข้อมูลดาวใน data/planets/mars.js
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
    fontSize: 38,
    panelBgColor: '#1a0a06',
    panelBorderColor: '#ea580c',
    titleColor: '#fed7aa',
    subtitleColor: '#fdba74',
    textColor: '#ffffff',
    buttonColor: '#9a3412',
    buttonHoverColor: '#ea580c',
    closeButtonColor: '#3b2013'
  },
  background: {
    color: '#1a0a06',
    opacity: 0.96,
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
    titlePos: '0 0.51 0.02',
    subtitlePos: '0 0.39 0.02',
    showDivider: true,
    dividerY: 0.32,
    dividerColor: '#ea580c'
  },
  decorations: [],
  questionScreen: {
    titlePrefix: '',
    subtitleTemplate: 'คำถาม {current} / {total}',
    questionBox: { position: '0 0.24 0.03', width: 1.44, fontSize: 38, color: '#ffffff', align: 'center' },
    optionsLayout: {
      mode: 'vertical',
      startPos: { x: 0, y: 0.110, z: 0.035 },
      rowSpacing: 0.13,
      width: 1.46,
      height: 0.12,
      color: '#9a3412',
      hoverColor: '#ea580c',
      textColor: '#ffffff',
      fontSize: 36
    },
    exitButton: {
      enabled: true,
      label: 'ออกจากมินิเกม',
      position: '0 -0.53 0.035',
      width: 0.85,
      height: 0.12,
      color: '#3b2013',
      hoverColor: '#5c3520',
      textColor: '#fed7aa',
      fontSize: 34
    }
  },
  feedbackScreen: {
    correctTitle: 'ตอบถูกต้อง',
    wrongTitle: 'คำตอบยังไม่ถูก',
    selectedText: { prefix: 'คำตอบของคุณ: ', position: '0 0.20 0.03', width: 1.44, fontSize: 38, color: '#ffffff' },
    correctAnswerText: { prefix: 'เฉลย: ', position: '0 0.06 0.03', width: 1.44, fontSize: 38, color: '#fdba74' },
    explanationText: { position: '0 -0.10 0.03', width: 1.44, fontSize: 36, color: '#ffedd5' },
    nextButton: {
      nextLabel: 'ไปข้อถัดไป',
      resultLabel: 'ดูผลคะแนน',
      position: '0 -0.43 0.035',
      width: 0.95,
      height: 0.17,
      color: '#9a3412',
      hoverColor: '#ea580c',
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
      color: '#9a3412',
      hoverColor: '#ea580c',
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
      color: '#3b2013',
      hoverColor: '#5c3520',
      textColor: '#fed7aa',
      fontSize: 34
    }
  }
};
