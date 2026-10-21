// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: ดาวพฤหัสบดี (Jupiter)
// ไฟล์: data/planets/jupiter.js
// ============================================================================
// [ค่าอ้างอิงเดิมของดาวพฤหัสบดี (นำไปวางในช่องด้านล่าง หรือปรับแต่งเองได้)]
//   id: 'jupiter'
//   name: 'ดาวพฤหัสบดี'
//   en: 'Jupiter'
//   color: '#d6a37c'
//   radius: 0.68
//   info: 'ดาวเคราะห์ที่ใหญ่ที่สุดในระบบสุริยะ'
//   image: 'assets/images/jupiter.svg'
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
  id: 'jupiter',
  name: 'ดาวพฤหัสบดี',
  en: 'Jupiter',
  info: 'ดาวเคราะห์ที่ใหญ่ที่สุดในระบบสุริยะ',
  facts: [
    // ใส่รายการข้อมูลเป็นบรรทัดๆ ได้ที่นี่ เช่น:
    // 'ข้อมูลบรรทัดที่ 1',
    // 'ข้อมูลบรรทัดที่ 2'
    'ดาวเคราะห์ลำดับที่ 5 จากดวงอาทิตย์',
    'ดาวก๊าซยักษ์ ส่วนใหญ่เป็นไฮโดรเจนและฮีเลียม',
    'จุดแดงใหญ่คือพายุมหึมาที่เกิดมานานหลายร้อยปี',
    'โคจรรอบดวงอาทิตย์ราว 12 ปี',
    'มีดวงจันทร์ใหญ่ 4 ดวง เช่น แกนีมีดและไอโอ'
  ],

  // --- 2. ตั้งค่าโมเดล 3D และรูปภาพประกอบ ---
  color: '#d6a37c',
  radius: 0.68,
  image: '', // ไฟล์ assets/images/jupiter.svg ไม่มีบนเว็บ (ทำให้เกิดกล่องดำ) จึงเว้นว่างไว้
  texture: 'assets/images/jupiter.jpg',

  // --- 3. ปรับแต่งสไตล์เฉพาะของดาวดวงนี้ (เว้นว่างไว้หากต้องการใช้ค่ามาตรฐานกลาง) ---
  // ค่าชุดนี้มีผลกับหน้ามินิเกมด้วย (fontSize 0 = ใช้ขนาดมาตรฐาน 42)
  style: {
    fontFamily: '',
    fontSize: 0,
    panelBgColor: '#1a120c',
    panelBorderColor: '#f59e0b',
    titleColor: '#fde68a',
    subtitleColor: '#fcd34d',
    textColor: '#ffffff',
    buttonColor: '#5c3512',
    buttonHoverColor: '#b45309',
    closeButtonColor: '#2e2218',
    highlightColor: '#fbbf24'
  },

  // --- 4. ตั้งค่าโครงสร้าง ขนาด ตำแหน่ง และปุ่มของการ์ดข้อมูลแยกอิสระ (Independent Card Config) ---
  card: {
    width: 1.94,
    height: 1.30,
    layout: 'horizontal',
    position: { x: 0, y: 0, z: 0 },
    distance: 0,
    rotation: { x: 0, y: 0, z: 0 },
    background: {
      color: '#150f0a',
      opacity: 0.96,
      image: '',
      outerGlow: true,
      outerGlowColor: '#d97706',
      outerGlowOpacity: 0.18
    },
    border: {
      style: 'frame',
      color: '#f59e0b',
      thickness: 0.022,
      opacity: 0.95,
      cornerSize: 0.14
    },
    header: {
      titlePos: { x: 0, y: 0.50, z: 0.02 },
      subtitlePos: { x: 0, y: 0.40, z: 0.02 },
      titleWidth: 1.5,
      subtitleWidth: 1.3,
      titleFontSize: 50,
      subtitleFontSize: 38,
      titleColor: '#fde68a',
      subtitleColor: '#fcd34d',
      align: 'center',
      showDivider: true,
      dividerY: 0.33,
      dividerWidth: 1.70,
      dividerColor: '#f59e0b'
    },
    media: {
      show: true,
      position: { x: -0.54, y: 0.0, z: 0.03 },
      show3D: true,
      modelRadius: 0.21,
      modelOffset: { x: 0, y: 0.03, z: 0.05 },
      showImage: false,
      imageWidth: 0.42,
      imageHeight: 0.26,
      imageOffset: { x: 0, y: -0.22, z: 0.01 },
      showCaption: true,
      captionPos: { x: 0, y: -0.26, z: 0.02 }
    },
    content: {
      position: { x: 0.26, y: 0.0, z: 0.02 },
      width: 1.00,
      maxHeight: 0.58,
      fontSize: 34,
      lineHeight: 46,
      align: 'left',
      bulletPrefix: '• ',
      includeInfo: true,
      includeFacts: true
    },
    // ตกแต่งการ์ด: แผงพื้นหลังฝั่งโมเดล/ฝั่งข้อความ และเส้นกรอบสีส้มทอง
    decorations: [
      // แผงพื้นหลังฝั่งโมเดล 3D
      { type: 'plane', position: '-0.54 0.0 0.012', width: 0.60, height: 0.62, color: '#0a0705', opacity: 0.85 },
      // แผงพื้นหลังกล่องข้อความ
      { type: 'plane', position: '0.26 0.0 0.012', width: 1.10, height: 0.62, color: '#2b1d10', opacity: 0.70 },
      // เส้นกรอบบน/ล่าง กล่องข้อความ
      { type: 'plane', position: '0.26 0.31 0.02', width: 1.10, height: 0.006, color: '#f59e0b', opacity: 0.85 },
      { type: 'plane', position: '0.26 -0.31 0.02', width: 1.10, height: 0.006, color: '#f59e0b', opacity: 0.85 },
      // เส้นแบ่งแนวตั้งระหว่างโมเดลกับข้อความ
      { type: 'plane', position: '-0.25 0.0 0.02', width: 0.006, height: 0.62, color: '#f59e0b', opacity: 0.85 },
      // เส้นกรอบบน/ล่าง แผงโมเดล
      { type: 'plane', position: '-0.54 0.31 0.02', width: 0.60, height: 0.006, color: '#f59e0b', opacity: 0.6 },
      { type: 'plane', position: '-0.54 -0.31 0.02', width: 0.60, height: 0.006, color: '#f59e0b', opacity: 0.6 }
    ],
    buttonLayout: 'custom',
    buttons: [
      {
        id: 'quiz',
        label: 'เริ่มมินิเกมคำถาม',
        action: 'quiz',
        position: { x: -0.24, y: -0.50, z: 0.03 },
        width: 0.72,
        height: 0.15,
        color: '#b45309',
        hoverColor: '#d97706',
        textColor: '#ffffff',
        fontSize: 32
      },
      {
        id: 'close',
        label: 'ปิดหน้าต่าง',
        action: 'close',
        position: { x: 0.42, y: -0.50, z: 0.03 },
        width: 0.48,
        height: 0.15,
        color: '#3f2e21',
        hoverColor: '#574130',
        textColor: '#fde68a',
        fontSize: 32
      }
    ]
  }
});
