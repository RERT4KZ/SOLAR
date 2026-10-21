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
  card: {
    width: 1.86,
    height: 1.40,
    position: '0 0 0',
    rotation: '0 0 0',
    distance: 1.8,
    layout: 'horizontal',
    background: { color: '#1a0b08', opacity: 0.95, image: '' },
    border: { style: 'corners', color: '#ea580c', thickness: 0.018, cornerSize: 0.15, cornerColor: '#fb923c' },
    header: { show: true, titlePos: '0 0.56 0.02', subtitlePos: '0 0.43 0.02', titleColor: '#fed7aa', subtitleColor: '#fdba74', showDivider: true, dividerColor: '#ea580c', dividerY: 0.36 },
    media: { show: true, show3D: true, position: '-0.55 0.02 0.035', modelRadius: 0.25, frameColor: '#ea580c', showCaption: true, captionColor: '#fdba74' },
    content: { position: '-0.16 0.04 0.03', width: 1.00, maxHeight: 0.64, fontSize: 32, lineHeight: 1.32, align: 'left', bullet: '• ' },
    sections: [],
    decorations: [],
    buttonLayout: { mode: 'custom', position: '0 -0.52 0.035', spacing: 0.06 },
    buttons: [
      { id: 'quiz', enabled: true, label: 'PLAY MINIGAME', action: 'quiz', position: '0.35 -0.52 0.035', width: 0.72, height: 0.18, color: '#9a3412', hoverColor: '#ea580c', textColor: '#ffffff', fontSize: 38 },
      { id: 'close', enabled: true, label: 'ปิดการ์ด', action: 'close', position: '-0.56 -0.54 0.035', width: 0.48, height: 0.15, color: '#334155', hoverColor: '#475569', textColor: '#ffffff', fontSize: 38 }
    ]
  }
});
