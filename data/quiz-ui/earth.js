// ============================================================================
// ไฟล์ตั้งค่าดีไซน์หน้ามินิเกม (Quiz UI): โลก (Earth)
// ไฟล์: data/quiz-ui/earth.js
// ============================================================================
// แก้ไขไฟล์นี้เพื่อปรับแต่งรูปลักษณ์ของหน้ามินิเกมเฉพาะ "โลก" ได้อย่างอิสระ
// โดยไม่ส่งผลกระทบต่อหน้ามินิเกมของดาวดวงอื่น และไม่กระทบกับการ์ดข้อมูลดาวใน data/planets/earth.js
// ============================================================================

window.PLANET_QUIZ_UI = window.PLANET_QUIZ_UI || {};

window.PLANET_QUIZ_UI['earth'] = {
  width: 1.78,
  height: 1.22,
  position: { x: 0, y: 0, z: 0 },
  distance: 1.8,
  rotation: { x: 0, y: 0, z: 0 },
  style: {
    fontFamily: '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif',
    fontSize: 38,
    panelBgColor: '#061827',
    panelBorderColor: '#38bdf8',
    titleColor: '#e0f2fe',
    subtitleColor: '#7dd3fc',
    textColor: '#ffffff',
    buttonColor: '#0369a1',
    buttonHoverColor: '#0284c7',
    closeButtonColor: '#334155'
  },
  background: {
    color: '#061827',
    opacity: 0.96,
    outerGlow: false
  },
  border: {
    style: 'top-bottom',
    color: '#38bdf8',
    thickness: 0.018
  },
  header: {
    show: true,
    titlePos: '0 0.48 0.02',
    subtitlePos: '0 0.35 0.02',
    showDivider: false
  },
  decorations: [],
  questionScreen: {
    titlePrefix: '',
    subtitleTemplate: 'คำถาม {current} / {total}',
    questionBox: { position: '0 0.20 0.03', width: 1.35, fontSize: 38, color: '#ffffff', align: 'center' },
    optionsLayout: {
      mode: 'vertical',
      startPos: { x: 0, y: 0.015, z: 0.035 },
      rowSpacing: 0.17,
      width: 1.43,
      height: 0.135,
      color: '#0369a1',
      hoverColor: '#0284c7',
      textColor: '#ffffff',
      fontSize: 36
    },
    exitButton: {
      enabled: true,
      label: 'ออกจากมินิเกม',
      position: '0 -0.53 0.035',
      width: 0.85,
      height: 0.12,
      color: '#334155',
      hoverColor: '#0284c7',
      textColor: '#ffffff',
      fontSize: 34
    }
  },
  feedbackScreen: {
    correctTitle: 'ตอบถูกต้อง',
    wrongTitle: 'คำตอบยังไม่ถูก',
    selectedText: { prefix: 'คำตอบของคุณ: ', position: '0 0.20 0.03', width: 1.35, fontSize: 38, color: '#ffffff' },
    correctAnswerText: { prefix: 'เฉลย: ', position: '0 0.06 0.03', width: 1.35, fontSize: 38, color: '#67e8f9' },
    explanationText: { position: '0 -0.10 0.03', width: 1.35, fontSize: 36, color: '#dbeafe' },
    nextButton: {
      nextLabel: 'ไปข้อถัดไป',
      resultLabel: 'ดูผลคะแนน',
      position: '0 -0.43 0.035',
      width: 0.95,
      height: 0.17,
      color: '#0369a1',
      hoverColor: '#0284c7',
      textColor: '#ffffff',
      fontSize: 38
    }
  },
  resultsScreen: {
    title: 'ผลมินิเกม',
    subtitleTemplate: '{name} · คะแนน {score} / {total}',
    reviewText: { position: '0 0.06 0.03', width: 1.35, fontSize: 34, color: '#ffffff' },
    finishButton: {
      label: 'กลับสู่การ์ดข้อมูลดาว',
      action: 'card',
      position: '-0.38 -0.46 0.035',
      width: 0.72,
      height: 0.15,
      color: '#0369a1',
      hoverColor: '#0284c7',
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
      color: '#334155',
      hoverColor: '#475569',
      textColor: '#ffffff',
      fontSize: 34
    }
  }
};
