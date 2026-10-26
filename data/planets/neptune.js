// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: ดาวเนปจูน (Neptune)
// ไฟล์: data/planets/neptune.js
// ============================================================================
// [ค่าอ้างอิงเดิมของดาวเนปจูน (นำไปวางในช่องด้านล่าง หรือปรับแต่งเองได้)]
//   id: 'neptune'
//   name: 'ดาวเนปจูน'
//   en: 'Neptune'
//   color: '#3e67d5'
//   radius: 0.36
//   info: 'ดาวเคราะห์ที่อยู่ไกลดวงอาทิตย์ที่สุด'
//   image: 'assets/images/neptune.svg'
//
// [มาตรฐานดีไซน์กลางที่ใช้เหมือนกันทั้งโปรเจกต์ (หากเว้นว่าง ระบบจะใช้ค่าเหล่านี้)]
//   - ฟอนต์หลัก (fontFamily)     : '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif'
//   - ขนาดฟอนต์ (fontSize)       : 42 (px บน Canvas 1024px)
//   - ขนาดแผงการ์ด UI            : กว้าง 1.78 เมตร x สูง 1.22 เมตร
//   - สีพื้นหลังการ์ด (panelBgColor): '#071827' (ความโปร่งใส opacity 0.94)
//   - สีเส้นขอบการ์ด (panelBorderColor): '#22d3ee'
//   - สีหัวข้อชื่อดาว (titleColor) : '#a5f3fc' (ขนาดกว้าง 1.35)
//   - สีชื่อภาษาอังกฤษ (subtitleColor): '#c8e9f3' (ขนาดกว้าง 1.25)
//   - สีข้อความเนื้อหา (textColor) : '#ffffff' (ขนาดกว้าง 0.90, จัดชิดซ้าย)
//   - สีปุ่มมินิเกม (buttonColor)  : '#0e7490' (เมื่อชี้เมาส์: '#0891b2')
//   - สีปุ่มปิดการ์ด (closeButtonColor): '#334155'
//   - สีเรืองแสงรอบดาว (highlightColor): '#6cd7ff'
// ============================================================================

window.PLANET_DATA = window.PLANET_DATA || [];

window.PLANET_DATA.push({
  // --- 1. ข้อมูลพื้นฐานและเนื้อหาของดาว ---
  id: "neptune",
  name: "ดาวเนปจูน",
  en: "Neptune",
  info: "ดาวเคราะห์ลำดับที่ 8 และอยู่ไกลดวงอาทิตย์ที่สุดในบรรดาดาวเคราะห์ เป็นดาวเคราะห์น้ำแข็งยักษ์ที่มีลมแรงมากและบรรยากาศมีมีเทน",
  facts: [
    "อยู่ลำดับที่ 8 และไกลดวงอาทิตย์ที่สุดในกลุ่มดาวเคราะห์",
    "โคจรรอบดวงอาทิตย์ใช้เวลาประมาณ 165 ปีโลก",
    "หมุนรอบตัวเองหนึ่งรอบใช้เวลาประมาณ 16 ชั่วโมง",
    "มีลมแรงได้มากกว่า 2,000 กิโลเมตรต่อชั่วโมง",
    "ดวงจันทร์บริวารที่ใหญ่ที่สุดชื่อไทรทัน"
  ],

  // --- 2. ตั้งค่าโมเดล 3D และรูปภาพประกอบ ---
  color: "#3e67d5",
  radius: 0.39,
  image: "",
  texture: 'assets/images/neptune.jpg',

  // --- 3. ปรับแต่งสไตล์เฉพาะของดาวดวงนี้ (เว้นว่างไว้หากต้องการใช้ค่ามาตรฐานกลาง) ---
  style: {
    fontFamily: '',
    fontSize: 0,
    panelBgColor: '',
    panelBorderColor: '',
    titleColor: '',
    subtitleColor: '',
    textColor: '',
    buttonColor: '',
    buttonHoverColor: '',
    closeButtonColor: '',
    highlightColor: ''
  },

  // ============================================================================
// 4. NEPTUNE CARD — LEGENDARY SPACE FANTASY RPG
// Theme: Cosmic Ocean • Celestial Crystal • Galactic Kingdom
// ============================================================================

card: {
  width: 2.65,
  height: 1.80,

  position: '0 0 0',
  rotation: '0 0 0',
  distance: 1.8,
  layout: 'horizontal',

  // พื้นหลังอวกาศ
  background: {
    color: '#041525',
    opacity: 0.96,
    image: '',
    outerGlow: true,
    outerGlowColor: '#64F5E7',
    outerGlowOpacity: 0.45
  },

  // กรอบคริสตัลน้ำแข็ง
  border: {
    style: 'frame',
    color: '#A5F3FC',
    thickness: 0.014,
    cornerSize: 0.16,
    cornerColor: '#D9FFFF',
    glowColor: '#43E8E0',
    glowOpacity: 0.35
  },

  // ชื่อดาว
  header: {
    show: true,
    title: 'ดาวยูเรนัส',
    subtitle: 'U R A N U S  ·  FROST CELESTIAL',
    titlePos: '0 0.77 0.02',
    subtitlePos: '0 0.665 0.02',
    titleWidth: 1.75,
    subtitleWidth: 1.85,
    titleFontSize: 54,
    subtitleFontSize: 36,
    titleColor: '#A5FFF3',
    subtitleColor: '#D9FFFF',
    showDivider: true,
    dividerY: 0.605,
    dividerWidth: 2.4,
    dividerColor: '#64F5E7'
  },

  // โมเดลดาวยูเรนัส
  media: {
    show: true,
    show3D: true,
    showCaption: false,
    position: '-0.80 0 0.035',
    modelRadius: 0.30,
    frameColor: '#73F5E9'
  },

  // ข้อมูลดาวเคราะห์
  content: {
    position: '0.47 -0.05 0.03',
    width: 1.38,
    maxHeight: 0.80,
    fontSize: 40,
    minFontSize: 28,
    lineHeight: 1.3,
    align: 'left',
    bullet: '❄ '
  },

  // ลวดลายตกแต่ง
  decorations: [
    // แผงด้านซ้าย
    {
      type: 'plane',
      position: '-0.80 -0.125 0.006',
      width: 0.92,
      height: 1.04,
      color: '#0B3446',
      opacity: 0.35
    },

    // แผงข้อมูลด้านขวา
    {
      type: 'plane',
      position: '0.47 -0.11 0.006',
      width: 1.50,
      height: 0.98,
      color: '#082638',
      opacity: 0.45
    },

    // เส้นกรอบด้านบน
    {
      type: 'plane',
      position: '0 0.835 0.012',
      width: 2.46,
      height: 0.004,
      color: '#A5F3FC',
      opacity: 0.85
    },

    // เส้นกรอบด้านล่าง
    {
      type: 'plane',
      position: '0 -0.835 0.012',
      width: 2.46,
      height: 0.004,
      color: '#A5F3FC',
      opacity: 0.85
    },

    // เส้นกรอบด้านซ้าย
    {
      type: 'plane',
      position: '-1.23 0 0.012',
      width: 0.004,
      height: 1.67,
      color: '#64F5E7',
      opacity: 0.65
    },

    // เส้นกรอบด้านขวา
    {
      type: 'plane',
      position: '1.23 0 0.012',
      width: 0.004,
      height: 1.67,
      color: '#64F5E7',
      opacity: 0.65
    },

    // วงแหวนพลังงานชั้นที่ 1
    {
      type: 'ring',
      position: '-0.80 0 0.016',
      radiusInner: 0.405,
      radiusOuter: 0.410,
      color: '#73F5E9',
      opacity: 0.75
    },

    // วงแหวนพลังงานชั้นที่ 2
    {
      type: 'ring',
      position: '-0.80 0 0.015',
      radiusInner: 0.445,
      radiusOuter: 0.449,
      color: '#B8F8FF',
      opacity: 0.40
    },

    // คริสตัลตกแต่ง
    {
      type: 'plane',
      position: '-1.15 0.65 0.025',
      width: 0.045,
      height: 0.045,
      rotation: '0 0 45',
      color: '#D9FFFF',
      opacity: 0.95
    },

    {
      type: 'plane',
      position: '1.15 -0.65 0.025',
      width: 0.045,
      height: 0.045,
      rotation: '0 0 45',
      color: '#73F5E9',
      opacity: 0.95
    }
  ],

  // การจัดวางปุ่ม
  buttonLayout: {
    mode: 'custom',
    position: '0 -0.745 0.035',
    spacing: 0.06
  },

  // ปุ่มควบคุม
  buttons: [
    {
      id: 'close',
      enabled: true,
      label: 'ปิดการ์ด',
      action: 'close',
      position: '-0.72 -0.745 0.035',
      width: 0.62,
      height: 0.15,
      color: '#123449',
      hoverColor: '#1C5670',
      textColor: '#D9FFFF',
      borderColor: '#73F5E9',
      borderThickness: 0.006,
      fontSize: 100,
      opacity: 1
    },

    {
      id: 'quiz',
      enabled: true,
      label: 'เริ่มมินิเกม',
      action: 'quiz',
      position: '0.72 -0.745 0.035',
      width: 0.62,
      height: 0.15,
      color: '#087F8C',
      hoverColor: '#20CFC9',
      textColor: '#FFFFFF',
      borderColor: '#B8F8FF',
      borderThickness: 0.006,
      fontSize: 100,
      opacity: 1
    }
  ]
}
