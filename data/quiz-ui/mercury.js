// ============================================================================
// ไฟล์ตั้งค่าดีไซน์หน้ามินิเกม (Quiz UI): ดาวพุธ (Mercury)
// ไฟล์: data/quiz-ui/mercury.js
// ============================================================================
// แก้ไขไฟล์นี้เพื่อปรับแต่งรูปลักษณ์ของหน้ามินิเกมเฉพาะ "ดาวพุธ" ได้อย่างอิสระ
// โดยไม่ส่งผลกระทบต่อหน้ามินิเกมของดาวดวงอื่น และไม่กระทบกับการ์ดข้อมูลดาวใน data/planets/mercury.js
//
// [ปรับปรุงดีไซน์ — หลักการเดียวกับ data/quiz-ui/venus.js]
//   - แผงสูงขึ้น 1.26 → 1.62 ให้ปุ่มใหญ่ขึ้นได้โดยไม่ซ้อนทับกัน
//     (เดิมปุ่มตัวเลือกข้อ 4 อยู่ y -0.495 แต่ปุ่มออกอยู่ y -0.53 → ซ้อนกัน)
//   - fontSize ของปุ่มอยู่บนสเกลแคนวาส 1024 ตามความกว้างปุ่ม จึงเพิ่มเป็น 46–80 ให้อ่านง่าย
//   - ปุ่มพื้นทึบสว่าง + ขอบสีอ่อน + ตัวอักษรขาว + opacity 1 → เห็นข้อความทันทีโดยไม่ต้องชี้
//   - เพิ่มเส้น/จุดตกแต่งโทนเงิน-ฟ้า ให้เข้าชุดกับการ์ดข้อมูลดาวพุธ
//     (ถ้าการตกแต่งทำให้ตัวอักษรเบี้ยว ให้ตั้ง MERCURY_QUIZ_USE_DECORATIONS = false)
// ============================================================================

const MERCURY_QUIZ_USE_DECORATIONS = true;

window.PLANET_QUIZ_UI = window.PLANET_QUIZ_UI || {};

window.PLANET_QUIZ_UI['mercury'] = {
  width: 1.88,
  height: 1.62,
  position: { x: 0, y: 0, z: 0 },
  distance: 2.0,                      // ถอยแผงออกเล็กน้อยให้เห็นครบทั้งแผง
  rotation: { x: 0, y: 0, z: 0 },

  style: {
    fontFamily: '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif',
    fontSize: 42,
    panelBgColor: '#07090e',
    panelBorderColor: '#e2e8f0',
    titleColor: '#ffffff',
    subtitleColor: '#7dd3fc',
    textColor: '#ffffff',
    buttonColor: '#334155',
    buttonHoverColor: '#0284c7',
    closeButtonColor: '#1f2937'
  },

  background: {
    color: '#07090e',
    opacity: 0.96,
    outerGlow: true,
    outerGlowColor: '#38bdf8',
    outerGlowOpacity: 0.20
  },

  border: {
    style: 'full',
    color: '#e2e8f0',
    thickness: 0.018,
    opacity: 0.95
  },

  header: {
    show: true,
    titlePos: '0 0.70 0.02',
    subtitlePos: '0 0.59 0.02',
    showDivider: true,
    dividerY: 0.52,
    dividerColor: '#38bdf8'
  },

  // ตกแต่งแบบเดียวกับการ์ดข้อมูลดาว (type 'plane' / 'circle', ตำแหน่งเป็นสตริง 'x y z')
  decorations: !MERCURY_QUIZ_USE_DECORATIONS ? [] : [
    // เส้นกรอบบางด้านใน
    { type: 'plane', position: '0 0.785 0.012',  width: 1.80, height: 0.004, color: '#94a3b8', opacity: 0.45 },
    { type: 'plane', position: '0 -0.785 0.012', width: 1.80, height: 0.004, color: '#94a3b8', opacity: 0.45 },
    { type: 'plane', position: '-0.915 0 0.012', width: 0.004, height: 1.55, color: '#94a3b8', opacity: 0.45 },
    { type: 'plane', position: '0.915 0 0.012',  width: 0.004, height: 1.55, color: '#94a3b8', opacity: 0.45 },

    // เส้นประดับสองข้างบรรทัด "คำถาม x / y"
    { type: 'plane', position: '-0.62 0.59 0.012', width: 0.34, height: 0.004, color: '#38bdf8', opacity: 0.8 },
    { type: 'plane', position: '0.62 0.59 0.012',  width: 0.34, height: 0.004, color: '#38bdf8', opacity: 0.8 },

    // จุดดาวประดับ
    { type: 'circle', position: '-0.80 0.70 0.02',  radius: 0.014, color: '#e2e8f0', opacity: 0.9 },
    { type: 'circle', position: '0.80 0.70 0.02',   radius: 0.014, color: '#e2e8f0', opacity: 0.9 },
    { type: 'circle', position: '-0.86 -0.72 0.02', radius: 0.010, color: '#38bdf8', opacity: 0.8 },
    { type: 'circle', position: '0.86 -0.72 0.02',  radius: 0.010, color: '#38bdf8', opacity: 0.8 }
  ],

  // ---------------------------------------------------------------------------
  // หน้าตอบคำถาม
  // ปุ่มตัวเลือก (จุดกึ่งกลาง): y 0.17 / -0.035 / -0.24 / -0.445 → ขอบล่างข้อ 4 = -0.53
  // ปุ่มออกอยู่ y -0.67 → เว้นช่องชัดเจน ไม่ซ้อนทับ
  // ---------------------------------------------------------------------------
  questionScreen: {
    titlePrefix: '◆ ',
    subtitleTemplate: 'คำถาม {current} / {total}',
    questionBox: { position: '0 0.40 0.03', width: 1.60, fontSize: 46, color: '#ffffff', align: 'center' },
    optionsLayout: {
      mode: 'vertical',
      startPos: { x: 0, y: 0.17, z: 0.035 },
      rowSpacing: 0.205,
      width: 1.62,
      height: 0.17,
      // ปุ่มพื้นทึบสว่าง + ขอบสีอ่อน + ตัวอักษรขาว → เห็นคำตอบทันทีโดยไม่ต้องชี้
      color: '#334155',
      hoverColor: '#0284c7',
      textColor: '#ffffff',
      borderColor: '#94a3b8',
      borderThickness: 0.006,
      opacity: 1,
      fontSize: 46
    },
    exitButton: {
      enabled: true,
      label: 'ออกจากมินิเกม',
      position: '0 -0.67 0.035',
      width: 1.05,
      height: 0.15,
      color: '#1f2937',
      hoverColor: '#475569',
      textColor: '#ffffff',
      borderColor: '#94a3b8',
      borderThickness: 0.006,
      opacity: 1,
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
    correctAnswerText: { prefix: 'เฉลย: ',        position: '0 0.22 0.03', width: 1.60, fontSize: 44, color: '#7dd3fc' },
    explanationText:   {                          position: '0 0.00 0.03', width: 1.60, fontSize: 42, color: '#e2e8f0' },
    nextButton: {
      nextLabel: 'ไปข้อถัดไป ›',
      resultLabel: 'ดูผลคะแนน ›',
      position: '0 -0.60 0.035',
      width: 1.10,
      height: 0.19,
      color: '#0369a1',
      hoverColor: '#0ea5e9',
      textColor: '#ffffff',
      borderColor: '#7dd3fc',
      borderThickness: 0.006,
      opacity: 1,
      fontSize: 80
    }
  },

  // ---------------------------------------------------------------------------
  // หน้าสรุปผลคะแนน
  // ---------------------------------------------------------------------------
  resultsScreen: {
    title: '◆ ผลมินิเกม ◆',
    subtitleTemplate: '{name} · คะแนน {score} / {total}',
    reviewText: { position: '0 0.12 0.03', width: 1.60, fontSize: 40, color: '#ffffff' },
    finishButton: {
      label: 'กลับสู่การ์ดข้อมูลดาว',
      action: 'card',
      position: '-0.42 -0.62 0.035',
      width: 0.80,
      height: 0.17,
      color: '#0369a1',
      hoverColor: '#0ea5e9',
      textColor: '#ffffff',
      borderColor: '#7dd3fc',
      borderThickness: 0.006,
      opacity: 1,
      fontSize: 64
    },
    closeSolarButton: {
      enabled: true,
      label: 'กลับสู่ระบบสุริยะ',
      action: 'solar',
      position: '0.42 -0.62 0.035',
      width: 0.80,
      height: 0.17,
      color: '#1f2937',
      hoverColor: '#475569',
      textColor: '#ffffff',
      borderColor: '#94a3b8',
      borderThickness: 0.006,
      opacity: 1,
      fontSize: 64
    }
  }
};
