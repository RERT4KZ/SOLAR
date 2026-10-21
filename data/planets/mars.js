// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: ดาวอังคาร (Mars)
// ไฟล์: data/planets/mars.js
// ============================================================================
// [ค่าอ้างอิงเดิมของดาวอังคาร (นำไปวางในช่องด้านล่าง หรือปรับแต่งเองได้)]
//   id: 'mars'
//   name: 'ดาวอังคาร'
//   en: 'Mars'
//   color: '#c65b3d'
//   radius: 0.18
//   info: 'ดาวเคราะห์สีแดงจากเหล็กออกไซด์'
//   image: 'assets/images/mars.svg'
//
// [คู่มือการปรับแต่งการ์ดข้อมูลแยกอิสระ (หมวด card ด้านล่าง)]
//   1. ขนาดการ์ด         : ปรับที่ card.width (ความกว้าง) และ card.height (ความสูง)
//   2. ตำแหน่งและการหมุน : ปรับที่ card.position ('x y z'), card.distance (ระยะห่าง), card.rotation ('rx ry rz')
//   3. โครงสร้างและดีไซน์ : ปรับที่ card.layout ('horizontal' | 'vertical' | 'custom'),
//                          card.background, card.border, card.header, card.media, card.content, card.sections, card.decorations
//   4. ปุ่มกด (Buttons)  : เพิ่ม/ลบ/ย้ายตำแหน่ง/เปลี่ยนขนาดและสีปุ่มได้ที่อาเรย์ card.buttons
// ============================================================================

window.PLANET_DATA = window.PLANET_DATA || [];

window.PLANET_DATA.push({
  // --- 1. ข้อมูลพื้นฐานและเนื้อหาของดาว ---
  id: 'mars',
  name: 'ดาวอังคาร',
  en: 'Mars',
  info: 'ดาวเคราะห์สีแดงจากเหล็กออกไซด์',
  facts: [
    'เป็นดาวเคราะห์ลำดับที่ 4 จากดวงอาทิตย์',
    'มีสีแดงเพราะพื้นผิวเต็มไปด้วยเหล็กออกไซด์ (สนิมเหล็ก)',
    'มีดวงจันทร์ 2 ดวง คือ โฟบอส และ ดีมอส',
    'มี Olympus Mons ภูเขาไฟสูงสุดในระบบสุริยะ (21.9 กม.)',
    'เส้นผ่านศูนย์กลาง 6,779 กม. ขนาดราวครึ่งหนึ่งของโลก',
    '1 วัน (Sol) ยาว 24 ชม. 37 นาที',
    'โคจรรอบดวงอาทิตย์ใช้เวลา 687 วัน',
    'บรรยากาศส่วนใหญ่เป็น CO₂ ประมาณ 95%',
    'มี Valles Marineris หุบเขาใหญ่สุดในระบบสุริยะ ยาวกว่า 4,000 กม.',
    'แรงโน้มถ่วงประมาณ 38% ของโลก'
  ],

  // --- 2. ตั้งค่าโมเดล 3D และรูปภาพประกอบ ---
  color: '#c65b3d',
  radius: 0.34,
  image: '',
  texture: 'assets/images/mars.jpg',

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

  // --- 4. ตั้งค่าการ์ดข้อมูลแยกอิสระ (แก้ไขเฉพาะดาวดวงนี้ได้โดยไม่กระทบดาวดวงอื่น) ---
  // ดาวอังคารใช้ธีมสีแดงคริมสัน-อำพัน พร้อมแสงเรืองรองสีส้มแดง รองรับข้อมูล 10 รายการ
  card: {
    width: 2.02,
    height: 1.48,
    layout: 'horizontal',
    position: { x: 0, y: 0, z: 0 },
    distance: 0,
    rotation: { x: 0, y: 0, z: 0 },
    background: {
      color: '#1a0a06',
      opacity: 0.96,
      image: '',
      outerGlow: true,
      outerGlowColor: '#c2410c',
      outerGlowOpacity: 0.16
    },
    border: {
      style: 'corners',
      color: '#ea580c',
      thickness: 0.022,
      opacity: 0.9,
      cornerSize: 0.18,
      cornerColor: '#fb923c'
    },
    header: {
      titlePos: { x: 0, y: 0.58, z: 0.02 },
      subtitlePos: { x: 0, y: 0.47, z: 0.02 },
      titleWidth: 1.50,
      subtitleWidth: 1.30,
      titleFontSize: 46,
      subtitleFontSize: 38,
      titleColor: '#fed7aa',
      subtitleColor: '#fdba74',
      align: 'center',
      showDivider: true,
      dividerY: 0.40,
      dividerColor: '#ea580c'
    },
    media: {
      show: true,
      position: { x: -0.58, y: 0.0, z: 0.03 },
      show3D: true,
      modelRadius: 0.23,
      modelOffset: { x: 0, y: 0.08, z: 0.04 },
      frameColor: '#ea580c',
      showImage: true,
      imageWidth: 0.42,
      imageHeight: 0.26,
      imageOffset: { x: 0, y: -0.22, z: 0.01 },
      showCaption: true,
      captionColor: '#fdba74',
      captionPos: { x: 0, y: -0.38, z: 0.02 }
    },
    content: {
      position: { x: 0.22, y: -0.02, z: 0.02 },
      width: 1.04,
      maxHeight: 0.76,
      fontSize: 32,
      lineHeight: 40,
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
        position: { x: -0.24, y: -0.58, z: 0.03 },
        width: 0.68,
        height: 0.13,
        color: '#9a3412',
        hoverColor: '#ea580c',
        textColor: '#ffffff',
        fontSize: 38
      },
      {
        id: 'close',
        label: 'ปิดหน้าต่าง',
        action: 'close',
        position: { x: 0.40, y: -0.58, z: 0.03 },
        width: 0.44,
        height: 0.13,
        color: '#3b2013',
        hoverColor: '#5c3520',
        textColor: '#fed7aa',
        fontSize: 38
      }
    ]
  }
});
