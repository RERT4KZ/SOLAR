// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: ดวงอาทิตย์ (Sun)
// ไฟล์: data/planets/sun.js
// ============================================================================
// [ค่าอ้างอิงเดิมของดวงอาทิตย์ (นำไปวางในช่องด้านล่าง หรือปรับแต่งเองได้)]
//   id: 'sun'
//   name: 'ดวงอาทิตย์'
//   en: 'Sun'
//   color: '#ffbe32'
//   radius: 1.15
//   info: 'ดาวฤกษ์ที่เป็นศูนย์กลางของระบบสุริยะ'
//   image: 'assets/images/sun.svg'
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
  id: 'sun',
  name: 'ดวงอาทิตย์',
  en: 'Sun',
  info: 'ดาวฤกษ์ที่เป็นศูนย์กลางของระบบสุริยะ',
  facts: [
    'เป็นดาวฤกษ์ประเภท G2V (ดาวแคระเหลือง)',
    'มีอายุประมาณ 4,600 ล้านปี',
    'มีเส้นผ่านศูนย์กลางประมาณ 1.39 ล้าน กม. ใหญ่กว่าโลกราว 109 เท่า',
    'อุณหภูมิพื้นผิวประมาณ 5,500 องศาเซลเซียส',
    'อุณหภูมิแกนกลางสูงถึงประมาณ 15 ล้านองศาเซลเซียส',
    'องค์ประกอบหลักคือไฮโดรเจน (~73%) และฮีเลียม (~25%)',
    'ผลิตพลังงานจากปฏิกิริยานิวเคลียร์ฟิวชัน หลอมไฮโดรเจนเป็นฮีเลียม',
    'แสงจากดวงอาทิตย์ใช้เวลาเดินทางมาถึงโลกประมาณ 8 นาที 20 วินาที',
    'มีมวลคิดเป็น 99.86% ของมวลทั้งหมดในระบบสุริยะ',
    'มีวัฏจักรจุดมืด (Sunspot Cycle) ทุก ๆ ประมาณ 11 ปี'
  ],

  // --- 2. ตั้งค่าโมเดล 3D และรูปภาพประกอบ ---
  color: '#ffbe32',
  radius: 1.15,
  image: '',
  texture: 'assets/images/sun.jpg',

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
    width: 1.92,
    height: 1.38,
    position: '0 0 0',
    rotation: '0 0 0',
    distance: 1.8,
    layout: 'horizontal',
    background: { color: '#140c04', opacity: 0.95, image: '' },
    border: { style: 'corners', color: '#f59e0b', thickness: 0.018, cornerSize: 0.16, cornerColor: '#fde047', glowColor: '#f59e0b', glowOpacity: 0.14 },
    header: { show: true, titlePos: '0 0.56 0.02', subtitlePos: '0 0.43 0.02', showDivider: true, dividerColor: '#f59e0b', dividerY: 0.36 },
    media: { show: true, show3D: true, position: '-0.58 0.02 0.035', modelRadius: 0.27, frameColor: '#fbbf24', showCaption: true, caption: 'ดาวฤกษ์ศูนย์กลางระบบสุริยะ' },
    content: { position: '-0.18 0.04 0.03', width: 1.04, maxHeight: 0.62, fontSize: 32, lineHeight: 1.32, align: 'left', bullet: '• ' },
    sections: [],
    decorations: [],
    buttonLayout: { mode: 'custom', position: '0 -0.52 0.035', spacing: 0.06 },
    buttons: [
      { id: 'quiz', enabled: true, label: 'PLAY MINIGAME', action: 'quiz', position: '0.36 -0.51 0.035', width: 0.72, height: 0.17, color: '#b45309', hoverColor: '#d97706', textColor: '#ffffff', fontSize: 38 },
      { id: 'close', enabled: true, label: 'ปิดการ์ด', action: 'close', position: '-0.58 -0.53 0.035', width: 0.48, height: 0.15, color: '#334155', hoverColor: '#475569', textColor: '#ffffff', fontSize: 38 }
    ]
  }
});
