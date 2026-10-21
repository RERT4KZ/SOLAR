// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: ดาวศุกร์ (Venus)
// ไฟล์: data/planets/venus.js
// ============================================================================
// [ค่าอ้างอิงเดิมของดาวศุกร์ (นำไปวางในช่องด้านล่าง หรือปรับแต่งเองได้)]
//   id: 'venus'
//   name: 'ดาวศุกร์'
//   en: 'Venus'
//   color: '#e7bd7b'
//   radius: 0.38
//   info: 'ดาวเคราะห์ที่มีพื้นผิวร้อนที่สุด'
//   image: 'assets/images/venus.svg'
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
  id: 'venus',
  name: 'ดาวศุกร์',
  en: 'Venus',
  info: 'ดาวเคราะห์ที่ร้อนที่สุดในระบบสุริยะ และสว่างที่สุดบนท้องฟ้ารองจากดวงจันทร์',
  facts: [
    'ฉายา "ฝาแฝดของโลก" ขนาดและมวลใกล้เคียงกับโลก',
    'พื้นผิวร้อนที่สุดในระบบสุริยะ สูงถึงประมาณ 465°C',
    'หมุนรอบตัวเองกลับทิศ ดวงอาทิตย์ขึ้นทางทิศตะวันตก',
    'สว่างสดใส รู้จักในชื่อ "ดาวประจำเมือง" และ "ดาวประกายพรึก"'
  ],

  // --- 2. ตั้งค่าโมเดล 3D และรูปภาพประกอบ ---
  color: '#e7bd7b',
  radius: 0.38,
  image: '',
  texture: 'assets/images/venus.jpg',

  // --- 3. ปรับแต่งสไตล์เฉพาะของดาวดวงนี้ (เว้นว่างไว้หากต้องการใช้ค่ามาตรฐานกลาง) ---
  style: {
    fontFamily: '',
    fontSize: 36,
    panelBgColor: '#180e07',       // พื้นหลังสีน้ำตาลทองดำอบอุ่น
    panelBorderColor: '#f59e0b',   // ขอบการ์ดสีทองอำพันเรืองรอง
    titleColor: '#fef08a',         // หัวข้อสีทองอร่ามสว่างไสว
    subtitleColor: '#fed7aa',      // ชื่อภาษาอังกฤษสีแชมเปญทองอ่อน
    textColor: '#fffbeb',          // ข้อความเนื้อหาสีขาวครีมไอวอรี่
    buttonColor: '#854d0e',        // ปุ่มมินิเกมสีบรอนซ์ทองเข้ม
    buttonHoverColor: '#d97706',   // สีปุ่มเมื่อชี้เมาส์
    closeButtonColor: '#442312',   // ปุ่มปิดสีน้ำตาลไหม้
    highlightColor: '#fde047'      // แสงเรืองรองสีทองรอบดาว
  },

  // --- 4. ตั้งค่าการ์ดข้อมูลแยกอิสระ (แก้ไขเฉพาะดาวดวงนี้ได้โดยไม่กระทบดาวดวงอื่น) ---
  card: {
    width: 1.80,
    height: 1.24,
    position: '0 0 0',
    rotation: '0 0 0',
    distance: 1.8,
    layout: 'horizontal',
    background: { color: '#180e07', opacity: 0.95, image: '' },
    border: { style: 'frame', color: '#f59e0b', thickness: 0.016, cornerSize: 0.12, cornerColor: '#fef08a' },
    header: { show: true, titlePos: '0 0.48 0.02', subtitlePos: '0 0.35 0.02', showDivider: true, dividerColor: '#f59e0b', dividerY: 0.28 },
    media: { show: true, show3D: true, position: '-0.52 0.01 0.035', modelRadius: 0.25, showCaption: true },
    content: { position: '-0.10 0.06 0.03', width: 0.90, maxHeight: 0.52, fontSize: 36, lineHeight: 1.36, align: 'left', bullet: '• ' },
    sections: [],
    decorations: [],
    buttonLayout: { mode: 'custom', position: '0 -0.45 0.035', spacing: 0.06 },
    buttons: [
      { id: 'quiz', enabled: true, label: 'PLAY MINIGAME', action: 'quiz', position: '0.35 -0.39 0.035', width: 0.72, height: 0.19, color: '#854d0e', hoverColor: '#d97706', textColor: '#ffffff', fontSize: 36 },
      { id: 'close', enabled: true, label: 'ปิดการ์ด', action: 'close', position: '-0.56 -0.50 0.035', width: 0.48, height: 0.15, color: '#442312', hoverColor: '#d97706', textColor: '#ffffff', fontSize: 36 }
    ]
  }
});
