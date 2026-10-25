// ============================================================================
// ไฟล์ตั้งค่าดีไซน์หน้ามินิเกม (Quiz UI): ดาวเสาร์ (Saturn)
// ไฟล์: data/quiz-ui/saturn.js
// ============================================================================
// แก้ไขไฟล์นี้เพื่อปรับแต่งรูปลักษณ์ของหน้ามินิเกมเฉพาะ "ดาวเสาร์" ได้อย่างอิสระ
// โดยไม่ส่งผลกระทบต่อหน้ามินิเกมของดาวดวงอื่น และไม่กระทบกับการ์ดข้อมูลดาวใน data/planets/saturn.js
// ============================================================================

window.PLANET_QUIZ_UI = window.PLANET_QUIZ_UI || {};

window.PLANET_QUIZ_UI['saturn'] = {
  width: 1.94,
  height: 1.26,
  position: { x: 0, y: 0, z: 0 },
  distance: 1.8,
  rotation: { x: 0, y: 0, z: 0 },
  style: {
    fontFamily: '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif',
    fontSize: 38,
    panelBgColor: '#14110b',
    panelBorderColor: '#eab308',
    titleColor: '#fef08a',
    subtitleColor: '#fcd34d',
    textColor: '#ffffff',
    buttonColor: '#5a3d0a',
    buttonHoverColor: '#a16207',
    closeButtonColor: '#2a2414'
  },
  background: {
    color: '#14110b',
    opacity: 0.96,
    outerGlow: true,
    outerGlowColor: '#eab308',
    outerGlowOpacity: 0.16
  },
  border: {
    style: 'corners',
    color: '#fde047',
    thickness: 0.020,
    cornerSize: 0.16
  },
  header: {
    show: true,
    titlePos: '0 0.49 0.02',
    subtitlePos: '0 0.37 0.02',
    showDivider: true,
    dividerY: 0.30,
    dividerColor: '#eab308'
  },
  decorations: [],
  questionScreen: {
    titlePrefix: '',
    subtitleTemplate: 'คำถาม {current} / {total}',
    questionBox: { position: '0 0.20 0.03', width: 1.48, fontSize: 38, color: '#ffffff', align: 'center' },
    optionsLayout: {
      mode: 'vertical',
      startPos: { x: 0, y: 0.015, z: 0.035 },
      rowSpacing: 0.17,
      width: 1.48,
      height: 0.135,
      color: '#5a3d0a',
      hoverColor: '#a16207',
      textColor: '#ffffff',
      fontSize: 36
    },
    exitButton: {
      enabled: true,
      label: 'ออกจากมินิเกม',
      position: '0 -0.53 0.035',
      width: 0.85,
      height: 0.12,
      color: '#2a2414',
      hoverColor: '#5a3d0a',
      textColor: '#fef08a',
      fontSize: 34
    }
  },
  feedbackScreen: {
    correctTitle: 'ตอบถูกต้อง',
    wrongTitle: 'คำตอบยังไม่ถูก',
    selectedText: { prefix: 'คำตอบของคุณ: ', position: '0 0.20 0.03', width: 1.48, fontSize: 38, color: '#ffffff' },
    correctAnswerText: { prefix: 'เฉลย: ', position: '0 0.06 0.03', width: 1.48, fontSize: 38, color: '#fef08a' },
    explanationText: { position: '0 -0.10 0.03', width: 1.48, fontSize: 36, color: '#fef9c3' },
    nextButton: {
      nextLabel: 'ไปข้อถัดไป',
      resultLabel: 'ดูผลคะแนน',
      position: '0 -0.43 0.035',
      width: 0.95,
      height: 0.17,
      color: '#a16207',
      hoverColor: '#ca8a04',
      textColor: '#ffffff',
      fontSize: 38
    }
  },
  resultsScreen: {
    title: 'ผลมินิเกม',
    subtitleTemplate: '{name} · คะแนน {score} / {total}',
    reviewText: { position: '0 0.06 0.03', width: 1.48, fontSize: 34, color: '#ffffff' },
    finishButton: {
      label: 'กลับสู่การ์ดข้อมูลดาว',
      action: 'card',
      position: '-0.38 -0.46 0.035',
      width: 0.72,
      height: 0.15,
      color: '#a16207',
      hoverColor: '#ca8a04',
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
      color: '#2a2414',
      hoverColor: '#5a3d0a',
      textColor: '#fef08a',
      fontSize: 34
    }
  }
};
