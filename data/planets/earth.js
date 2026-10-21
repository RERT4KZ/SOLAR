// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: โลก (Earth)
// ไฟล์: data/planets/earth.js
// ============================================================================
// [ค่าอ้างอิงเดิมของโลก (นำไปวางในช่องด้านล่าง หรือปรับแต่งเองได้)]
//   id: 'earth'
//   name: 'โลก'
//   en: 'Earth'
//   color: '#327ed7'
//   radius: 0.25
//   info: 'ดาวเคราะห์ที่เป็นบ้านของเรา'
//   image: 'assets/images/earth.svg'
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
  radius: 0.25,
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

  // --- 4. ตั้งค่าการ์ดข้อมูลแยกอิสระ (แก้ไขเฉพาะดาวดวงนี้ได้โดยไม่กระทบดาวดวงอื่น) ---
  card: {
    width: 1.78,
    height: 1.22,
    position: '0 0 0',
    rotation: '0 0 0',
    distance: 1.8,
    layout: 'horizontal',
    background: { color: '', opacity: 0.94, image: '' },
    border: { style: 'top-bottom', color: '', thickness: 0.018 },
    header: { show: true, titlePos: '0 0.48 0.02', subtitlePos: '0 0.34 0.02', showDivider: false },
    media: { show: true, show3D: true, position: '-0.52 0.02 0.035', modelRadius: 0.25, showCaption: true },
    content: { position: '-0.10 0.08 0.03', width: 0.90, maxHeight: 0.54, fontSize: 0, lineHeight: 1.38, align: 'left', bullet: '• ' },
    sections: [],
    decorations: [],
    buttonLayout: { mode: 'custom', position: '0 -0.45 0.035', spacing: 0.06 },
    buttons: [
      { id: 'quiz', enabled: true, label: 'PLAY MINIGAME', action: 'quiz', position: '0.35 -0.39 0.035', width: 0.72, height: 0.19, color: '', hoverColor: '', textColor: '#ffffff', fontSize: 0 },
      { id: 'close', enabled: true, label: 'ปิดการ์ด', action: 'close', position: '-0.56 -0.51 0.035', width: 0.48, height: 0.15, color: '', hoverColor: '', textColor: '#ffffff', fontSize: 0 }
    ]
  }
});
