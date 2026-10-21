// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: ดาวพุธ (Mercury)
// ไฟล์: data/planets/mercury.js
// ============================================================================
// [ค่าอ้างอิงเดิมของดาวพุธ (นำไปวางในช่องด้านล่าง หรือปรับแต่งเองได้)]
//   id: 'mercury'
//   name: 'ดาวพุธ'
//   en: 'Mercury'
//   color: '#a7a5a1'
//   radius: 0.30
//   info: 'ดาวเคราะห์ที่อยู่ใกล้ดวงอาทิตย์ที่สุด'
//   image: 'assets/images/mercury.svg'
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
  id: 'mercury',
  name: 'ดาวพุธ',
  en: 'Mercury',
  info: 'ดาวเคราะห์ที่อยู่ใกล้ดวงอาทิตย์ที่สุดและมีขนาดเล็กที่สุดในระบบสุริยะ',
  facts: [
    'ฉายา "เตาไฟแช่แข็ง" กลางวันร้อนจัด กลางคืนหนาวจัด',
    'โคจรรอบดวงอาทิตย์เร็วที่สุด เพียง 88 วันของโลก',
    'ดาวเคราะห์หินขนาดเล็ก ไม่มีดวงจันทร์บริวาร'
  ],

  // --- 2. ตั้งค่าโมเดล 3D และรูปภาพประกอบ ---
  color: '#a7a5a1',
  radius: 0.30,
  image: '',
  texture: 'assets/images/mercury.jpg',

  // --- 3. ปรับแต่งสไตล์เฉพาะของดาวดวงนี้ (เว้นว่างไว้หากต้องการใช้ค่ามาตรฐานกลาง) ---
  style: {
    fontFamily: '',
    fontSize: 36,
    panelBgColor: '#0a0b0e',       // พื้นหลังสีดำออบซิเดียนลึกสนิท (Obsidian Black)
    panelBorderColor: '#f1f5f9',   // ขอบการ์ดสีเงินไทเทเนียมสว่างคมกริบ (Titanium Silver)
    titleColor: '#ffffff',         // หัวข้อชื่อดาวสีขาวบริสุทธิ์
    subtitleColor: '#94a3b8',      // ชื่อภาษาอังกฤษสีเงิน Slate
    textColor: '#ffffff',          // ข้อความเนื้อหาสีขาวคมชัด
    buttonColor: '#262930',        // ปุ่มมินิเกมสีเทาดำไทเทเนียมเข้ม
    buttonHoverColor: '#4b5563',   // สีปุ่มเมื่อชี้เมาส์สว่างเป็นเทาเงิน
    closeButtonColor: '#181a1f',   // ปุ่มปิดสีคาร์บอนดำ
    highlightColor: '#ffffff'      // แสงเรืองรองสีเงินขาวสว่างรอบดาว
  },

  // --- 4. ตั้งค่าการ์ดข้อมูลแยกอิสระ (แก้ไขเฉพาะดาวดวงนี้ได้โดยไม่กระทบดาวดวงอื่น) ---
  card: {
    width: 1.68,
    height: 1.16,
    position: '0 0 0',
    rotation: '0 0 0',
    distance: 1.8,
    layout: 'horizontal',
    background: { color: '#0a0b0e', opacity: 0.96, image: '' },
    border: { style: 'top-bottom', color: '#f1f5f9', thickness: 0.018 },
    header: { show: true, titlePos: '0 0.45 0.02', subtitlePos: '0 0.32 0.02', showDivider: false },
    media: { show: true, show3D: true, position: '-0.48 0.02 0.035', modelRadius: 0.22, showCaption: true },
    content: { position: '-0.10 0.06 0.03', width: 0.86, maxHeight: 0.50, fontSize: 36, lineHeight: 1.36, align: 'left', bullet: '• ' },
    sections: [],
    decorations: [],
    buttonLayout: { mode: 'custom', position: '0 -0.42 0.035', spacing: 0.06 },
    buttons: [
      { id: 'quiz', enabled: true, label: 'PLAY MINIGAME', action: 'quiz', position: '0.32 -0.37 0.035', width: 0.70, height: 0.18, color: '#262930', hoverColor: '#4b5563', textColor: '#ffffff', fontSize: 36 },
      { id: 'close', enabled: true, label: 'ปิดการ์ด', action: 'close', position: '-0.50 -0.46 0.035', width: 0.46, height: 0.14, color: '#181a1f', hoverColor: '#4b5563', textColor: '#ffffff', fontSize: 36 }
    ]
  }
});
