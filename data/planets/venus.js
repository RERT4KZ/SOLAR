window.PLANET_QUIZ_UI = window.PLANET_QUIZ_UI || {};

window.PLANET_QUIZ_UI['venus'] = {
  width: 1.88,
  height: 1.30,
  position: { x: 0, y: 0, z: 0 },
  distance: 1.8,
  rotation: { x: 0, y: 0, z: 0 },

  style: {
    fontFamily: '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif',
    fontSize: 38,
    panelBgColor: '#1a0c13',
    panelBorderColor: '#fb7185',
    titleColor: '#ffe4e6',
    subtitleColor: '#fecdd3',
    textColor: '#ffffff',
    buttonColor: '#881337',
    buttonHoverColor: '#e11d48',
    closeButtonColor: '#3f1d28'
  },

  background: {
    color: '#1a0c13',
    opacity: 0.96,
    outerGlow: true,
    outerGlowColor: '#f43f5e',
    outerGlowOpacity: 0.20
  },

  border: {
    style: 'corners',
    color: '#fb7185',
    thickness: 0.020,
    cornerSize: 0.18,
    cornerColor: '#fda4af'
  },

  header: {
    show: true,
    titlePos: '0 0.51 0.02',
    subtitlePos: '0 0.39 0.02',
    showDivider: true,
    dividerY: 0.32,
    dividerColor: '#fb7185'
  },

  decorations: [],

  questionScreen: {
    titlePrefix: '✦ ',
    subtitleTemplate: 'คำถาม {current} / {total}',

    questionBox: {
      position: '0 0.20 0.03',
      width: 1.44,
      fontSize: 38,
      color: '#fff1f2',
      align: 'center'
    },

    optionsLayout: {
      mode: 'vertical',
      startPos: { x: 0, y: 0.015, z: 0.035 },
      rowSpacing: 0.17,
      width: 1.46,
      height: 0.135,
      color: '#881337',
      hoverColor: '#e11d48',
      textColor: '#ffffff',
      fontSize: 130,
      minFontSize: 100
    },

    exitButton: {
      enabled: true,
      label: 'ออกจากมินิเกม',
      position: '0 -0.53 0.035',
      width: 0.95,
      height: 0.15,
      color: '#3f1d28',
      hoverColor: '#881337',
      textColor: '#fecdd3',
      fontSize: 130,
      minFontSize: 100
    }
  },

  feedbackScreen: {
    correctTitle: 'ตอบถูกต้อง',
    wrongTitle: 'คำตอบยังไม่ถูก',

    selectedText: {
      prefix: 'คำตอบของคุณ: ',
      position: '0 0.20 0.03',
      width: 1.44,
      fontSize: 38,
      color: '#ffffff'
    },

    correctAnswerText: {
      prefix: 'เฉลย: ',
      position: '0 0.06 0.03',
      width: 1.44,
      fontSize: 38,
      color: '#fda4af'
    },

    explanationText: {
      position: '0 -0.10 0.03',
      width: 1.44,
      fontSize: 36,
      color: '#ffe4e6'
    },

    nextButton: {
      nextLabel: 'ไปข้อถัดไป',
      resultLabel: 'ดูผลคะแนน',
      position: '0 -0.43 0.035',
      width: 1.05,
      height: 0.19,
      color: '#9f1239',
      hoverColor: '#e11d48',
      textColor: '#ffffff',
      fontSize: 130,
      minFontSize: 100
    }
  },

  resultsScreen: {
    title: 'ผลมินิเกม',
    subtitleTemplate: '{name} · คะแนน {score} / {total}',

    reviewText: {
      position: '0 0.06 0.03',
      width: 1.44,
      fontSize: 34,
      color: '#ffffff'
    },

    finishButton: {
      label: 'กลับสู่การ์ดข้อมูลดาว',
      action: 'card',
      position: '-0.38 -0.46 0.035',
      width: 0.85,
      height: 0.18,
      color: '#9f1239',
      hoverColor: '#e11d48',
      textColor: '#ffffff',
      fontSize: 130,
      minFontSize: 100
    },

    closeSolarButton: {
      enabled: true,
      label: 'กลับสู่ระบบสุริยะ',
      action: 'solar',
      position: '0.40 -0.46 0.035',
      width: 0.85,
      height: 0.18,
      color: '#3f1d28',
      hoverColor: '#881337',
      textColor: '#fecdd3',
      fontSize: 130,
      minFontSize: 100
    }
  }
};
