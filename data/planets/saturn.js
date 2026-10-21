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
  id: '',
  name: '',
  en: '',
  info: '',
  facts: [
    // ใส่รายการข้อมูลเป็นบรรทัดๆ ได้ที่นี่ เช่น:
    // 'ข้อมูลบรรทัดที่ 1',
    // 'ข้อมูลบรรทัดที่ 2'
  ],

  // --- 2. ตั้งค่าโมเดล 3D และรูปภาพประกอบ ---
  color: '',
  radius: 0.56,
  image: '',
  texture: '',
  ringColor: '', // เฉพาะดาวที่มีวงแหวน เช่น '#cdb98d'

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
      color: '#1b1811',
      opacity: 0.95,
      image: '',
      outerGlow: true,
      outerGlowColor: '#eab308',
      outerGlowOpacity: 0.14
    },
    border: {
      style: 'corners',
      color: '#fde047',
      thickness: 0.022,
      opacity: 0.9,
      cornerSize: 0.18
    },
    header: {
      titlePos: { x: 0, y: 0.48, z: 0.02 },
      subtitlePos: { x: 0, y: 0.38, z: 0.02 },
      titleWidth: 1.55,
      subtitleWidth: 1.35,
      titleFontSize: 46,
      subtitleFontSize: 38,
      titleColor: '#fef08a',
      subtitleColor: '#fde68a',
      align: 'center',
      showDivider: true,
      dividerY: 0.31,
      dividerColor: '#eab308'
    },
    media: {
      show: true,
      position: { x: -0.58, y: 0.0, z: 0.03 },
      show3D: true,
      modelRadius: 0.21,
      modelOffset: { x: 0, y: 0.10, z: 0.05 },
      ringRadius: 0.33,
      ringTube: 0.018,
      ringColor: '#cdb98d',
      showImage: true,
      imageWidth: 0.48,
      imageHeight: 0.28,
      imageOffset: { x: 0, y: -0.21, z: 0.01 },
      showCaption: true,
      captionPos: { x: 0, y: -0.39, z: 0.02 }
    },
    content: {
      position: { x: 0.28, y: -0.01, z: 0.02 },
      width: 1.08,
      maxHeight: 0.60,
      fontSize: 38,
      lineHeight: 50,
      align: 'left',
      bulletPrefix: '• ',
      includeInfo: true,
      includeFacts: true
    },
    buttonLayout: 'custom',
    buttons: [
      {
        id: 'quiz',
        label: 'เริ่มมินิเกมคำถาม',
        action: 'quiz',
        position: { x: -0.25, y: -0.48, z: 0.03 },
        width: 0.68,
        height: 0.13,
        color: '#a16207',
        hoverColor: '#ca8a04',
        textColor: '#ffffff',
        fontSize: 38
      },
      {
        id: 'close',
        label: 'ปิดหน้าต่าง',
        action: 'close',
        position: { x: 0.42, y: -0.48, z: 0.03 },
        width: 0.44,
        height: 0.13,
        color: '#3f3826',
        hoverColor: '#574e35',
        textColor: '#fef08a',
        fontSize: 38
      }
    ]
  }
});
