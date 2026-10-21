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
  radius: 0.68,
  image: '',
  texture: '',

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
  card: {
    width: 1.94,
    height: 1.30,
    layout: 'horizontal',
    position: { x: 0, y: 0, z: 0 },
    distance: 0,
    rotation: { x: 0, y: 0, z: 0 },
    background: {
      color: '#1c1410',
      opacity: 0.95,
      image: '',
      outerGlow: true,
      outerGlowColor: '#d97706',
      outerGlowOpacity: 0.14
    },
    border: {
      style: 'frame',
      color: '#f59e0b',
      thickness: 0.022,
      opacity: 0.9,
      cornerSize: 0.14
    },
    header: {
      titlePos: { x: 0, y: 0.50, z: 0.02 },
      subtitlePos: { x: 0, y: 0.40, z: 0.02 },
      titleWidth: 1.5,
      subtitleWidth: 1.3,
      titleFontSize: 46,
      subtitleFontSize: 38,
      titleColor: '#fde68a',
      subtitleColor: '#fcd34d',
      align: 'center',
      showDivider: true,
      dividerY: 0.33,
      dividerColor: '#f59e0b'
    },
    media: {
      show: true,
      position: { x: -0.54, y: 0.0, z: 0.03 },
      show3D: true,
      modelRadius: 0.24,
      modelOffset: { x: 0, y: 0.08, z: 0.05 },
      showImage: true,
      imageWidth: 0.42,
      imageHeight: 0.26,
      imageOffset: { x: 0, y: -0.22, z: 0.01 },
      showCaption: true,
      captionPos: { x: 0, y: -0.39, z: 0.02 }
    },
    content: {
      position: { x: 0.26, y: -0.01, z: 0.02 },
      width: 1.04,
      maxHeight: 0.62,
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
        position: { x: -0.24, y: -0.50, z: 0.03 },
        width: 0.66,
        height: 0.13,
        color: '#b45309',
        hoverColor: '#d97706',
        textColor: '#ffffff',
        fontSize: 38
      },
      {
        id: 'close',
        label: 'ปิดหน้าต่าง',
        action: 'close',
        position: { x: 0.40, y: -0.50, z: 0.03 },
        width: 0.44,
        height: 0.13,
        color: '#3f2e21',
        hoverColor: '#574130',
        textColor: '#fde68a',
        fontSize: 38
      }
    ]
  }
});
