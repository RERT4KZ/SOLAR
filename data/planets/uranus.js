// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: ดาวยูเรนัส (Uranus)
// ไฟล์: data/planets/uranus.js
// ============================================================================
// [ค่าอ้างอิงเดิมของดาวยูเรนัส (นำไปวางในช่องด้านล่าง หรือปรับแต่งเองได้)]
//   id: 'uranus'
//   name: 'ดาวยูเรนัส'
//   en: 'Uranus'
//   color: '#81d3d9'
//   radius: 0.38
//   info: 'ดาวเคราะห์น้ำแข็งยักษ์ที่มีแกนหมุนเอียงมาก'
//   image: 'assets/images/uranus.svg'
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
  id: "uranus",
  name: "ดาวยูเรนัส",
  en: "Uranus",
  info: "ดาวเคราะห์ลำดับที่ 7 จากดวงอาทิตย์ เป็นดาวเคราะห์น้ำแข็งยักษ์ สีฟ้าอมเขียวจากมีเทนในบรรยากาศ และมีแกนหมุนเอียงเกือบตะแคง",
  facts: [
    "อยู่ลำดับที่ 7 จากดวงอาทิตย์",
    "แกนหมุนเอียงประมาณ 97.77 องศา",
    "โคจรรอบดวงอาทิตย์ใช้เวลาประมาณ 84 ปีโลก",
    "สีฟ้าอมเขียวเกิดจากก๊าซมีเทนในบรรยากาศ",
    "ค้นพบโดยวิลเลียม เฮอร์เชล ในปี ค.ศ. 1781"
  ],

  // --- 2. ตั้งค่าโมเดล 3D และรูปภาพประกอบ ---
  color: "#81d3d9",
  radius: 0.39,
  image: "",
  texture: 'assets/images/uranus.jpg',

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
  // ดาวยูเรนัสใช้โทนน้ำแข็งสีฟ้าอมเขียวและการจัดวางแบบมีกรอบเต็ม (all border)
  card: {
    width: 1.82,
    height: 1.28,
    layout: 'horizontal',
    position: { x: 0, y: 0, z: 0 },
    distance: 0,
    rotation: { x: 0, y: 0, z: 0 },
    background: {
      color: '#062028',
      opacity: 0.95,
      image: '',
      outerGlow: true,
      outerGlowColor: '#2dd4bf',
      outerGlowOpacity: 0.16
    },
    border: {
      style: 'all',
      color: '#5eead4',
      thickness: 0.02,
      opacity: 0.9
    },
    header: {
      titlePos: { x: 0, y: 0.49, z: 0.02 },
      subtitlePos: { x: 0, y: 0.39, z: 0.02 },
      titleWidth: 1.4,
      subtitleWidth: 1.25,
      titleFontSize: 46,
      subtitleFontSize: 38,
      titleColor: '#99f6e4',
      subtitleColor: '#ccfbf1',
      align: 'center',
      showDivider: true,
      dividerY: 0.32,
      dividerColor: '#2dd4bf'
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
      position: { x: 0.22, y: -0.01, z: 0.02 },
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
        color: '#0f766e',
        hoverColor: '#0d9488',
        textColor: '#ffffff',
        fontSize: 38
      },
      {
        id: 'close',
        label: 'ปิดหน้าต่าง',
        action: 'close',
        position: { x: 0.38, y: -0.49, z: 0.03 },
        width: 0.42,
        height: 0.13,
        color: '#1e3a44',
        hoverColor: '#2d5360',
        textColor: '#99f6e4',
        fontSize: 38
      }
    ]
  }
});
