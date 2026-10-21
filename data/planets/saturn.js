// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: ดาวเสาร์ (Saturn)
// ไฟล์: data/planets/saturn.js
// ============================================================================
// [ค่าอ้างอิงเดิมของดาวเสาร์ (นำไปวางในช่องด้านล่าง หรือปรับแต่งเองได้)]
//   id: 'saturn'
//   name: 'ดาวเสาร์'
//   en: 'Saturn'
//   color: '#ddc38e'
//   radius: 0.56
//   info: 'ดาวเคราะห์ที่มีระบบวงแหวนเด่นชัด'
//   image: 'assets/images/saturn.svg'
//   ringColor: '#cdb98d' (สีวงแหวนดาวเสาร์)
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
  id: 'saturn',
  name: 'ดาวเสาร์',
  en: 'Saturn',
  info: 'ดาวเคราะห์ที่มีระบบวงแหวนเด่นชัด',
  facts: [
    // ใส่รายการข้อมูลเป็นบรรทัดๆ ได้ที่นี่ เช่น:
    // 'ข้อมูลบรรทัดที่ 1',
    // 'ข้อมูลบรรทัดที่ 2'
    'ดาวเคราะห์ลำดับที่ 6 ใหญ่เป็นอันดับ 2 ในระบบสุริยะ',
    'ดาวก๊าซยักษ์ ส่วนใหญ่เป็นไฮโดรเจนและฮีเลียม',
    'วงแหวนเกิดจากน้ำแข็งและเศษหินจำนวนมหาศาล',
    'โคจรรอบดวงอาทิตย์ราว 29.5 ปี',
    'มีดวงจันทร์มากกว่า 140 ดวง ไททันใหญ่สุด'
  ],

  // --- 2. ตั้งค่าโมเดล 3D และรูปภาพประกอบ ---
  color: '#ddc38e',
  radius: 0.56,
  image: '', // ไฟล์ assets/images/saturn.svg ไม่มีบนเว็บ (ทำให้เกิดกล่องดำ) จึงเว้นว่างไว้
  texture: 'assets/images/saturn.jpg',
  ringColor: '#cdb98d', // เฉพาะดาวที่มีวงแหวน เช่น '#cdb98d'

  // --- 3. ปรับแต่งสไตล์เฉพาะของดาวดวงนี้ (เว้นว่างไว้หากต้องการใช้ค่ามาตรฐานกลาง) ---
  // ค่าชุดนี้มีผลกับหน้ามินิเกมด้วย: fontSize 26 ทำให้โจทย์/ตัวเลือกไม่ล้นกรอบ (ดาวอังคารใช้ค่าเดียวกัน)
  style: {
    fontFamily: '',
    fontSize: 26,
    panelBgColor: '#14110b',
    panelBorderColor: '#eab308',
    titleColor: '#fef08a',
    subtitleColor: '#fcd34d',
    textColor: '#ffffff',
    buttonColor: '#854d0e',
    buttonHoverColor: '#ca8a04',
    closeButtonColor: '#3f3826',
    highlightColor: '#fde047'
  },

  // --- 4. ตั้งค่าโครงสร้าง ขนาด ตำแหน่ง และปุ่มของการ์ดข้อมูลแยกอิสระ (Independent Card Config) ---
  // ดาวเสาร์ใช้การ์ดแนวกว้างพิเศษ (Wide Card) เพื่อรองรับการแสดงผลวงแหวนและภาพขนาดใหญ่
  card: {
    width: 2.06,
    height: 1.26,
    layout: 'horizontal',
    position: { x: 0, y: 0, z: 0 },
    distance: 0,
    rotation: { x: 0, y: 0, z: 0 },
    background: {
      color: '#14110b',
      opacity: 0.96,
      image: '',
      outerGlow: true,
      outerGlowColor: '#eab308',
      outerGlowOpacity: 0.18
    },
    border: {
      style: 'corners',
      color: '#fde047',
      thickness: 0.022,
      opacity: 0.95,
      cornerSize: 0.18
    },
    header: {
      titlePos: { x: 0, y: 0.48, z: 0.02 },
      subtitlePos: { x: 0, y: 0.38, z: 0.02 },
      titleWidth: 1.55,
      subtitleWidth: 1.35,
      titleFontSize: 50,
      subtitleFontSize: 38,
      titleColor: '#fef08a',
      subtitleColor: '#fcd34d',
      align: 'center',
      showDivider: true,
      dividerY: 0.31,
      dividerWidth: 1.80,
      dividerColor: '#eab308'
    },
    media: {
      show: true,
      position: { x: -0.58, y: 0.0, z: 0.03 },
      show3D: true,
      modelRadius: 0.18,
      modelOffset: { x: 0, y: 0.03, z: 0.05 },
      ringRadius: 0.24,
      ringTube: 0.016,
      ringColor: '#cdb98d',
      showImage: false,
      imageWidth: 0.48,
      imageHeight: 0.28,
      imageOffset: { x: 0, y: -0.21, z: 0.01 },
      showCaption: true,
      captionPos: { x: 0, y: -0.27, z: 0.02 }
    },
    content: {
      position: { x: 0.28, y: -0.01, z: 0.02 },
      width: 1.06,
      maxHeight: 0.62,
      fontSize: 34,
      lineHeight: 46,
      align: 'left',
      bulletPrefix: '• ',
      includeInfo: true,
      includeFacts: true
    },
    // ตกแต่งการ์ด: แผงพื้นหลังฝั่งโมเดล/ฝั่งข้อความ และเส้นกรอบสีทอง
    decorations: [
      // แผงพื้นหลังฝั่งโมเดล 3D
      { type: 'plane', position: '-0.58 -0.01 0.012', width: 0.64, height: 0.66, color: '#0b0905', opacity: 0.85 },
      // แผงพื้นหลังกล่องข้อความ
      { type: 'plane', position: '0.28 -0.01 0.012', width: 1.14, height: 0.66, color: '#2a2314', opacity: 0.70 },
      // เส้นกรอบบน/ล่าง กล่องข้อความ
      { type: 'plane', position: '0.28 0.32 0.02', width: 1.14, height: 0.006, color: '#eab308', opacity: 0.85 },
      { type: 'plane', position: '0.28 -0.34 0.02', width: 1.14, height: 0.006, color: '#eab308', opacity: 0.85 },
      // เส้นแบ่งแนวตั้งระหว่างโมเดลกับข้อความ
      { type: 'plane', position: '-0.27 -0.01 0.02', width: 0.006, height: 0.66, color: '#eab308', opacity: 0.85 },
      // เส้นกรอบบน/ล่าง แผงโมเดล
      { type: 'plane', position: '-0.58 0.32 0.02', width: 0.64, height: 0.006, color: '#eab308', opacity: 0.6 },
      { type: 'plane', position: '-0.58 -0.34 0.02', width: 0.64, height: 0.006, color: '#eab308', opacity: 0.6 }
    ],
    buttonLayout: 'custom',
    buttons: [
      {
        id: 'quiz',
        label: 'เริ่มมินิเกมคำถาม',
        action: 'quiz',
        position: { x: -0.25, y: -0.50, z: 0.03 },
        width: 0.74,
        height: 0.15,
        color: '#a16207',
        hoverColor: '#ca8a04',
        textColor: '#ffffff',
        fontSize: 32
      },
      {
        id: 'close',
        label: 'ปิดหน้าต่าง',
        action: 'close',
        position: { x: 0.44, y: -0.50, z: 0.03 },
        width: 0.48,
        height: 0.15,
        color: '#3f3826',
        hoverColor: '#574e35',
        textColor: '#fef08a',
        fontSize: 32
      }
    ]
  }
});
