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

  // --- 4. ตั้งค่าโครงสร้าง ขนาด ตำแหน่ง และปุ่มของการ์ดข้อมูลแยกอิสระ (Independent Card Config) ---
  // ดาวเนปจูนใช้ธีมสีน้ำเงินเข้มแห่งห้วงอวกาศลึก พร้อมกรอบเรืองแสงสีคราม
  card: {
    width: 1.84,
    height: 1.28,
    layout: 'horizontal',
    position: { x: 0, y: 0, z: 0 },
    distance: 0,
    rotation: { x: 0, y: 0, z: 0 },
    background: {
      color: '#07122b',
      opacity: 0.95,
      image: '',
      outerGlow: true,
      outerGlowColor: '#244e93',
      outerGlowOpacity: 0.18
    },
    border: {
      style: 'frame',
      color: '#4484d2',
      thickness: 0.022,
      opacity: 0.9,
      cornerSize: 0.15
    },
    header: {
      titlePos: { x: 0, y: 0.49, z: 0.02 },
      subtitlePos: { x: 0, y: 0.39, z: 0.02 },
      titleWidth: 1.4,
      subtitleWidth: 1.25,
      titleFontSize: 46,
      subtitleFontSize: 38,
      titleColor: '#6b3458',
      subtitleColor: '#0ec14f',
      align: 'center',
      showDivider: true,
      dividerY: 0.32,
      dividerColor: '#3b82f6'
    },
    media: {
      show: true,
      position: { x: -0.50, y: 0.0, z: 0.03 },
      show3D: true,
      modelRadius: 0.21,
      modelOffset: { x: 0, y: 0.08, z: 0.04 },
      showImage: true,
      imageWidth: 0.38,
      imageHeight: 0.24,
      imageOffset: { x: 0, y: -0.22, z: 0.01 },
      showCaption: true,
      captionPos: { x: 0, y: -0.38, z: 0.02 }
    },
    content: {
      position: { x: 0.23, y: -0.01, z: 0.02 },
      width: 0.98,
      maxHeight: 0.60,
      fontSize: 36,
      lineHeight: 46,
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
        position: { x: -0.22, y: -0.49, z: 0.03 },
        width: 0.64,
        height: 0.13,
        color: '#f74a00',
        hoverColor: '#32f30b',
        textColor: '#0a0909',
        fontSize: 78
      },
      {
        id: 'close',
        label: 'ปิดหน้าต่าง',
        action: 'close',
        position: { x: 0.38, y: -0.49, z: 0.03 },
        width: 0.42,
        height: 0.13,
        color: '#0cc935',
        hoverColor: '#287838',
        textColor: '#ff3c00',
        fontSize: 78
      }
    ]
  }
});
