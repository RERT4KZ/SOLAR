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
    'ฉายาเตาไฟแช่แข็ง กลางวันร้อนจัด กลางคืนหนาวจัด',
    'โคจรรอบดวงอาทิตย์เร็วที่สุด เพียง 88 วัน',
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
  // ดาวพุธใช้ธีม Cyber-Titanium โทนเงินไทเทเนียม คมกริบ เรียบหรู
  card: {
    width: 1.84,
    height: 1.28,
    layout: 'horizontal',
    position: { x: 0, y: 0, z: 0 },
    distance: 0,
    rotation: { x: 0, y: 0, z: 0 },
    background: {
      color: '#07080a',
      opacity: 1.0,
      image: '',
      outerGlow: true,
      outerGlowColor: '#e2e8f0',
      outerGlowOpacity: 0.22
    },
    border: {
      style: 'corners',
      color: '#ffffff',
      thickness: 0.026,
      opacity: 1.0,
      cornerSize: 0.22,
      cornerColor: '#ffffff'
    },
    header: {
      titlePos: { x: 0, y: 0.46, z: 0.02 },
      subtitlePos: { x: 0, y: 0.35, z: 0.02 },
      titleWidth: 1.45,
      subtitleWidth: 1.25,
      titleFontSize: 44,
      subtitleFontSize: 36,
      titleColor: '#ffffff',
      subtitleColor: '#cbd5e1',
      align: 'center',
      showDivider: true,
      dividerY: 0.28,
      dividerColor: '#64748b'
    },
    media: {
      show: true,
      position: { x: -0.48, y: -0.01, z: 0.22 },
      show3D: true,
      modelRadius: 0.20,
      modelOffset: { x: 0, y: 0, z: 0 },
      frameColor: '#64748b',
      showImage: false,
      showCaption: true,
      caption: 'แบบจำลอง 3D ดาวพุธ',
      captionColor: '#cbd5e1',
      captionPos: { x: 0, y: -0.28, z: 0.02 }
    },
    content: {
      position: { x: -0.15, y: -0.01, z: 0.02 },
      width: 0.94,
      maxHeight: 0.52,
      fontSize: 28,
      lineHeight: 44,
      align: 'left',
      bulletPrefix: '◈ ',
      includeInfo: true,
      includeFacts: true
    },
    buttonLayout: 'custom',
    buttons: [
      {
        id: 'quiz',
        label: 'ภารกิจสำรวจดาวพุธ',
        action: 'quiz',
        position: { x: 0.32, y: -0.46, z: 0.035 },
        width: 0.68,
        height: 0.13,
        color: '#1e2229',
        hoverColor: '#475569',
        textColor: '#ffffff',
        fontSize: 36
      },
      {
        id: 'close',
        label: 'ปิดระบบ',
        action: 'close',
        position: { x: -0.50, y: -0.46, z: 0.035 },
        width: 0.46,
        height: 0.13,
        color: '#121316',
        hoverColor: '#334155',
        textColor: '#cbd5e1',
        fontSize: 36
      }
    ]
  }
});
