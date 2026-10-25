// ============================================================================
// ไฟล์ตั้งค่าดีไซน์หน้ามินิเกม (Quiz UI): ดาวพุธ (Mercury)
// ไฟล์: data/quiz-ui/mercury.js
// ============================================================================
// แก้ไขไฟล์นี้เพื่อปรับแต่งรูปลักษณ์ของหน้ามินิเกมเฉพาะ "ดาวพุธ" ได้อย่างอิสระ
// โดยไม่ส่งผลกระทบต่อหน้ามินิเกมของดาวดวงอื่น และไม่กระทบกับการ์ดข้อมูลดาวใน data/planets/mercury.js
// ============================================================================

window.PLANET_QUIZ_UI = window.PLANET_QUIZ_UI || {};

window.PLANET_QUIZ_UI['mercury'] = {
  width: 1.80,
  height: 1.26,
  position: { x: 0, y: 0, z: 0 },
  distance: 1.8,
  rotation: { x: 0, y: 0, z: 0 },
  style: {
    fontFamily: '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif',
    fontSize: 38,
    panelBgColor: '#090b10',
    panelBorderColor: '#cbd5e1',
    titleColor: '#f8fafc',
    subtitleColor: '#94a3b8',
    textColor: '#ffffff',
    buttonColor: '#1e293b',
    buttonHoverColor: '#475569',
    closeButtonColor: '#0f172a'
  },
  background: {
    color: '#090b10',
    opacity: 0.96,
    outerGlow: true,
    outerGlowColor: '#cbd5e1',
    outerGlowOpacity: 0.14
  },
  border: {
    style: 'full',
    color: '#cbd5e1',
    thickness: 0.016,
    opacity: 0.95
  },
  header: {
    show: true,
    titlePos: '0 0.49 0.02',
    subtitlePos: '0 0.37 0.02',
    showDivider: true,
    dividerY: 0.30,
    dividerColor: '#475569'
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
      color: '#1e293b',
      hoverColor: '#475569',
      textColor: '#ffffff',
      fontSize: 36
    },
    exitButton: {
      enabled: true,
      label: 'ออกจากมินิเกม',
      position: '0 -0.53 0.035',
      width: 0.85,
      height: 0.12,
      color: '#0f172a',
      hoverColor: '#334155',
      textColor: '#e2e8f0',
      fontSize: 34
    }
  },
  feedbackScreen: {
    correctTitle: 'ตอบถูกต้อง',
    wrongTitle: 'คำตอบยังไม่ถูก',
    selectedText: { prefix: 'คำตอบของคุณ: ', position: '0 0.20 0.03', width: 1.38, fontSize: 38, color: '#ffffff' },
    correctAnswerText: { prefix: 'เฉลย: ', position: '0 0.06 0.03', width: 1.38, fontSize: 38, color: '#cbd5e1' },
    explanationText: { position: '0 -0.10 0.03', width: 1.38, fontSize: 36, color: '#e2e8f0' },
    nextButton: {
      nextLabel: 'ไปข้อถัดไป',
      resultLabel: 'ดูผลคะแนน',
      position: '0 -0.43 0.035',
      width: 0.95,
      height: 0.17,
      color: '#334155',
      hoverColor: '#475569',
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
      color: '#334155',
      hoverColor: '#475569',
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
      color: '#0f172a',
      hoverColor: '#334155',
      textColor: '#cbd5e1',
      fontSize: 34
    }
  }
};
