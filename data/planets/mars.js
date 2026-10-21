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
    fontSize: 26,
    panelBgColor: '#180a06',
    panelBorderColor: '#ea580c',
    titleColor: '#fed7aa',
    subtitleColor: '#fdba74',
    textColor: '#ffffff',
    buttonColor: '#9a3412',
    buttonHoverColor: '#ea580c',
    closeButtonColor: '#3b2013',
    highlightColor: '#fb923c'
  },

  // --- 4. ตั้งค่าการ์ดข้อมูลแยกอิสระ (แก้ไขเฉพาะดาวดวงนี้ได้โดยไม่กระทบดาวดวงอื่น) ---
  card: {
    width: 2.06,
    height: 1.48,
    position: '0 0 0',
    rotation: '0 0 0',
    distance: 1.8,
    layout: 'horizontal',
    background: { color: '#180a06', opacity: 0.96, image: '' },
    border: { style: 'corners', color: '#ea580c', thickness: 0.018, cornerSize: 0.16, cornerColor: '#fb923c' },
    header: {
      show: true,
      titlePos: '0 0.58 0.02',
      subtitlePos: '0 0.47 0.02',
      titleColor: '#fed7aa',
      subtitleColor: '#fdba74',
      titleFontSize: 46,
      subtitleFontSize: 38,
      titleWidth: 1.60,
      subtitleWidth: 1.40,
      showDivider: true,
      dividerColor: '#ea580c',
      dividerY: 0.40,
      dividerWidth: 1.90
    },
    media: {
      show: true,
      show3D: true,
      position: '-0.60 0.03 0.035',
      modelRadius: 0.24,
      frameColor: '#ea580c',
      showCaption: true,
      captionColor: '#fdba74'
    },
    // กรอบข้อความ (Text Box): แสดงข้อมูลครบทั้ง 10 ข้อพร้อมคำอธิบายดาว
    content: {
      position: '-0.14 0.04 0.03',
      width: 1.04,
      maxHeight: 0.72,
      fontSize: 26,
      lineHeight: 1.28,
      align: 'left',
      bullet: '• ',
      showInfoSummary: true,
      color: '#ffffff'
    },
    sections: [],
    // ตกแต่งกรอบข้อความ (Text Box Frame): แผงพื้นหลังและเส้นกรอบล้อมรอบข้อความ
    decorations: [
      // แผงพื้นหลังกล่องข้อความ
      { type: 'plane', position: '0.38 0.04 0.012', width: 1.08, height: 0.74, color: '#2b1008', opacity: 0.65 },
      // เส้นกรอบบน
      { type: 'plane', position: '0.38 0.41 0.02', width: 1.08, height: 0.008, color: '#ea580c', opacity: 0.85 },
      // เส้นกรอบล่าง
      { type: 'plane', position: '0.38 -0.33 0.02', width: 1.08, height: 0.008, color: '#ea580c', opacity: 0.85 },
      // เส้นกรอบซ้าย
      { type: 'plane', position: '-0.16 0.04 0.02', width: 0.008, height: 0.74, color: '#ea580c', opacity: 0.85 },
      // เส้นกรอบขวา
      { type: 'plane', position: '0.92 0.04 0.02', width: 0.008, height: 0.74, color: '#ea580c', opacity: 0.85 }
    ],
    buttonLayout: { mode: 'custom', position: '0 -0.56 0.035', spacing: 0.06 },
    buttons: [
      { id: 'quiz', enabled: true, label: 'PLAY MINIGAME', action: 'quiz', position: '0.38 -0.56 0.035', width: 0.72, height: 0.16, color: '#9a3412', hoverColor: '#ea580c', textColor: '#ffffff', fontSize: 34 },
      { id: 'close', enabled: true, label: 'ปิดการ์ด', action: 'close', position: '-0.50 -0.56 0.035', width: 0.48, height: 0.16, color: '#3b2013', hoverColor: '#5c3520', textColor: '#fed7aa', fontSize: 34 }
    ]
  }
});
