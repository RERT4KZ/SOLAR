// ============================================================================
// ไฟล์ตั้งค่าดีไซน์หน้ามินิเกม (Quiz UI): ดาวศุกร์ (Venus)
// ไฟล์: data/quiz-ui/venus.js
// ============================================================================
// แก้ไขไฟล์นี้เพื่อปรับแต่งรูปลักษณ์ของหน้ามินิเกมเฉพาะ "ดาวศุกร์" ได้อย่างอิสระ
// โดยไม่ส่งผลกระทบต่อหน้ามินิเกมของดาวดวงอื่น และไม่กระทบกับการ์ดข้อมูลดาวใน data/planets/venus.js
//
// [ปรับปรุงดีไซน์]
//   - แผงสูงขึ้น 1.30 → 1.62 ให้ปุ่มใหญ่ขึ้นได้โดยไม่ซ้อนทับกัน
//     (เดิมปุ่มตัวเลือกข้อ 4 อยู่ y -0.495 แต่ปุ่มออกอยู่ y -0.53 → ซ้อนกัน)
//   - fontSize ของปุ่มอยู่บนสเกลแคนวาส 1024 ตามความกว้างปุ่ม (ค่าเดิม 34–38 ทำให้ตัวอักษรบนปุ่มเล็กมาก)
//     จึงเพิ่มเป็น 46–80 ให้อ่านง่ายทันที
//   - เพิ่มเส้น/จุดตกแต่งโทนกุหลาบ ให้เข้าชุดกับการ์ดข้อมูลดาวศุกร์
//     (ถ้าการตกแต่งทำให้ตัวอักษรเบี้ยว ให้ตั้ง VENUS_QUIZ_USE_DECORATIONS = false)
// ============================================================================

const VENUS_QUIZ_USE_DECORATIONS = true;

window.PLANET_QUIZ_UI = window.PLANET_QUIZ_UI || {};

window.PLANET_QUIZ_UI['venus'] = {
  width: 1.88,
  height: 1.62,
  position: { x: 0, y: 0, z: 0 },
  distance: 2.0,                      // ถอยแผงออกเล็กน้อยให้เห็นครบทั้งแผง
  rotation: { x: 0, y: 0, z: 0 },

  style: {
    fontFamily: '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif',
    fontSize: 42,
    panelBgColor: '#160812',
    panelBorderColor: '#fb7185',
    titleColor: '#fff1f2',
    subtitleColor: '#fda4af',
    textColor: '#ffffff',
    buttonColor: '#5c0f27',
    buttonHoverColor: '#e11d48',
    closeButtonColor: '#3a1224'
  },

  background: {
    color: '#160812',
    opacity: 0.96,
    outerGlow: true,
    outerGlowColor: '#f43f5e',
    outerGlowOpacity: 0.26
  },

  border: {
    style: 'corners',
    color: '#fb7185',
    thickness: 0.022,
    cornerSize: 0.22,
    cornerColor: '#fecdd3'
  },

  header: {
    show: true,
    titlePos: '0 0.70 0.02',
    subtitlePos: '0 0.59 0.02',
    showDivider: true,
    dividerY: 0.52,
    dividerColor: '#be123c'
  },

  // ตกแต่งแบบเดียวกับการ์ดข้อมูลดาว (type 'plane' / 'circle', ตำแหน่งเป็นสตริง 'x y z')
  decorations: !VENUS_QUIZ_USE_DECORATIONS ? [] : [
    // เส้นกรอบบางด้านใน
    { type: 'plane', position: '0 0.785 0.012',  width: 1.80, height: 0.004, color: '#fda4af', opacity: 0.45 },
    { type: 'plane', position: '0 -0.785 0.012', width: 1.80, height: 0.004, color: '#fda4af', opacity: 0.45 },
    { type: 'plane', position: '-0.915 0 0.012', width: 0.004, height: 1.55, color: '#fda4af', opacity: 0.45 },
    { type: 'plane', position: '0.915 0 0.012',  width: 0.004, height: 1.55, color: '#fda4af', opacity: 0.45 },

    // เส้นประดับสองข้างบรรทัด "คำถาม x / y"
    { type: 'plane', position: '-0.62 0.59 0.012', width: 0.34, height: 0.004, color: '#fda4af', opacity: 0.8 },
    { type: 'plane', position: '0.62 0.59 0.012',  width: 0.34, height: 0.004, color: '#fda4af', opacity: 0.8 },

    // จุดดาวประดับ
    { type: 'circle', position: '-0.80 0.70 0.02', radius: 0.014, color: '#fecdd3', opacity: 0.9 },
    { type: 'circle', position: '0.80 0.70 0.02',  radius: 0.014, color: '#fecdd3', opacity: 0.9 },
    { type: 'circle', position: '-0.86 -0.72 0.02', radius: 0.010, color: '#fb7185', opacity: 0.8 },
    { type: 'circle', position: '0.86 -0.72 0.02',  radius: 0.010, color: '#fb7185', opacity: 0.8 }
  ],

  // ---------------------------------------------------------------------------
  // หน้าตอบคำถาม
  // ปุ่มตัวเลือก (จุดกึ่งกลาง): y 0.17 / -0.035 / -0.24 / -0.445 → ขอบล่างข้อ 4 = -0.53
  // ปุ่มออกอยู่ y -0.67 → เว้นช่องชัดเจน ไม่ซ้อนทับ
  // ---------------------------------------------------------------------------
  questionScreen: {
    titlePrefix: '✦ ',
    subtitleTemplate: 'คำถาม {current} / {total}',
    questionBox: { position: '0 0.40 0.03', width: 1.60, fontSize: 46, color: '#fff1f2', align: 'center' },
    optionsLayout: {
      mode: 'vertical',
      startPos: { x: 0, y: 0.17, z: 0.035 },
      rowSpacing: 0.205,
      width: 1.62,
      height: 0.17,
      color: '#5c0f27',
      hoverColor: '#e11d48',
      textColor: '#fff1f2',
      fontSize: 46
    },
    exitButton: {
      enabled: true,
      label: 'ออกจากมินิเกม',
      position: '0 -0.67 0.035',
      width: 1.05,
      height: 0.15,
      color: '#3a1224',
      hoverColor: '#881337',
      textColor: '#fecdd3',
      fontSize: 70
    }
  },

  // ---------------------------------------------------------------------------
  // หน้าเฉลยหลังตอบ
  // ---------------------------------------------------------------------------
  feedbackScreen: {
    correctTitle: '✓ ตอบถูกต้อง!',
    wrongTitle: '✗ คำตอบยังไม่ถูก',
    selectedText:      { prefix: 'คำตอบของคุณ: ', position: '0 0.38 0.03', width: 1.60, fontSize: 44, color: '#ffffff' },
    correctAnswerText: { prefix: 'เฉลย: ',        position: '0 0.22 0.03', width: 1.60, fontSize: 44, color: '#fda4af' },
    explanationText:   {                          position: '0 0.00 0.03', width: 1.60, fontSize: 42, color: '#ffe4e6' },
    nextButton: {
      nextLabel: 'ไปข้อถัดไป ›',
      resultLabel: 'ดูผลคะแนน ›',
      position: '0 -0.60 0.035',
      width: 1.10,
      height: 0.19,
      color: '#be123c',
      hoverColor: '#e11d48',
      textColor: '#ffffff',
      fontSize: 80
    }
  },

  // ---------------------------------------------------------------------------
  // หน้าสรุปผลคะแนน
  // ---------------------------------------------------------------------------
  resultsScreen: {
    title: '✦ ผลมินิเกม ✦',
    subtitleTemplate: '{name} · คะแนน {score} / {total}',
    reviewText: { position: '0 0.12 0.03', width: 1.60, fontSize: 40, color: '#ffffff' },
    finishButton: {
      label: 'กลับสู่การ์ดข้อมูลดาว',
      action: 'card',
      position: '-0.42 -0.62 0.035',
      width: 0.80,
      height: 0.17,
      color: '#be123c',
      hoverColor: '#e11d48',
      textColor: '#ffffff',
      fontSize: 64
    },
    closeSolarButton: {
      enabled: true,
      label: 'กลับสู่ระบบสุริยะ',
      action: 'solar',
      position: '0.42 -0.62 0.035',
      width: 0.80,
      height: 0.17,
      color: '#3a1224',
      hoverColor: '#881337',
      textColor: '#fecdd3',
      fontSize: 64
    }
  }
};
