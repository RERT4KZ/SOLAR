// ============================================================================
// ไฟล์ตั้งค่าดีไซน์หน้ามินิเกม (Quiz UI): ดาวเนปจูน (Neptune)
// ไฟล์: data/quiz-ui/neptune.js
// ============================================================================
// แก้ไขไฟล์นี้เพื่อปรับแต่งรูปลักษณ์ของหน้ามินิเกมเฉพาะ "ดาวเนปจูน" ได้อย่างอิสระ
// โดยไม่ส่งผลกระทบต่อหน้ามินิเกมของดาวดวงอื่น และไม่กระทบกับการ์ดข้อมูลดาวใน data/planets/neptune.js
// ============================================================================

window.PLANET_QUIZ_UI = window.PLANET_QUIZ_UI || {};

window.PLANET_QUIZ_UI['neptune'] = {
  width: 1.88,
  height: 1.28,
  position: { x: 0, y: 0, z: 0 },
  distance: 1.8,
  rotation: { x: 0, y: 0, z: 0 },
  style: {
    fontFamily: '"Kanit", "Sarabun", "Tahoma", sans-serif',
    fontSize: 38,
    panelBgColor: '#030B1E',
    panelBorderColor: '#00E5FF',
    titleColor: '#E0F7FF',
    subtitleColor: '#38BDF8',
    textColor: '#E2E8F0',
    buttonColor: '#075985',
    buttonHoverColor: '#0284C7',
    closeButtonColor: '#1E293B'
  },
  background: {
    color: '#030B1E',
    opacity: 0.96,
    outerGlow: true,
    outerGlowColor: '#00BFFF',
    outerGlowOpacity: 0.22
  },
  border: {
    style: 'frame',
    color: '#00E5FF',
    thickness: 0.018,
    cornerSize: 0.16
  },
  header: {
    show: true,
    titlePos: '0 0.50 0.02',
    subtitlePos: '0 0.38 0.02',
    showDivider: true,
    dividerY: 0.31,
    dividerColor: '#00E5FF'
  },
  decorations: [],
  questionScreen: {
    titlePrefix: '',
    subtitleTemplate: 'คำถาม {current} / {total}',
    questionBox: { position: '0 0.20 0.03', width: 1.42, fontSize: 38, color: '#E2E8F0', align: 'center' },
    optionsLayout: {
      mode: 'vertical',
      startPos: { x: 0, y: 0.015, z: 0.035 },
      rowSpacing: 0.17,
      width: 1.45,
      height: 0.135,
      color: '#075985',
      hoverColor: '#0284C7',
      textColor: '#FFFFFF',
      fontSize: 36
    },
    exitButton: {
      enabled: true,
      label: 'ออกจากมินิเกม',
      position: '0 -0.53 0.035',
      width: 0.85,
      height: 0.12,
      color: '#1E293B',
      hoverColor: '#EF4444',
      textColor: '#E2E8F0',
      fontSize: 34
    }
  },
  feedbackScreen: {
    correctTitle: 'ตอบถูกต้อง',
    wrongTitle: 'คำตอบยังไม่ถูก',
    selectedText: { prefix: 'คำตอบของคุณ: ', position: '0 0.20 0.03', width: 1.42, fontSize: 38, color: '#E2E8F0' },
    correctAnswerText: { prefix: 'เฉลย: ', position: '0 0.06 0.03', width: 1.42, fontSize: 38, color: '#38BDF8' },
    explanationText: { position: '0 -0.10 0.03', width: 1.42, fontSize: 36, color: '#E0F7FF' },
    nextButton: {
      nextLabel: 'ไปข้อถัดไป',
      resultLabel: 'ดูผลคะแนน',
      position: '0 -0.43 0.035',
      width: 0.95,
      height: 0.17,
      color: '#0369A1',
      hoverColor: '#00BFFF',
      textColor: '#FFFFFF',
      fontSize: 38
    }
  },
  resultsScreen: {
    title: 'ผลมินิเกม',
    subtitleTemplate: '{name} · คะแนน {score} / {total}',
    reviewText: { position: '0 0.06 0.03', width: 1.42, fontSize: 34, color: '#E2E8F0' },
    finishButton: {
      label: 'กลับสู่การ์ดข้อมูลดาว',
      action: 'card',
      position: '-0.38 -0.46 0.035',
      width: 0.72,
      height: 0.15,
      color: '#0369A1',
      hoverColor: '#00BFFF',
      textColor: '#FFFFFF',
      fontSize: 34
    },
    closeSolarButton: {
      enabled: true,
      label: 'กลับสู่ระบบสุริยะ',
      action: 'solar',
      position: '0.40 -0.46 0.035',
      width: 0.72,
      height: 0.15,
      color: '#1E293B',
      hoverColor: '#334155',
      textColor: '#E2E8F0',
      fontSize: 34
    }
  }
};
