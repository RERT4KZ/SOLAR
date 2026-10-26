// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: ดาวพุธ (Mercury)
// ไฟล์: data/planets/mercury.js
// ============================================================================
// [ค่าอ้างอิงเดิมของดาวพุธ]
//   id: 'mercury' | name: 'ดาวพุธ' | en: 'Mercury'
//   color: '#a7a5a1' | radius: 0.30
//
// [คู่มือการปรับแต่งการ์ดข้อมูลแยกอิสระ (หมวด card ด้านล่าง)]
//   1. ขนาดการ์ด         : card.width (ความกว้าง) และ card.height (ความสูง)
//   2. ตำแหน่งและการหมุน : card.position ('x y z'), card.distance, card.rotation ('rx ry rz')
//   3. โครงสร้างและดีไซน์ : card.layout ('horizontal' | 'vertical' | 'custom'),
//                          card.background, card.border, card.header, card.media, card.content
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
 
  // --- 3. สไตล์เฉพาะของดาวดวงนี้ (ธีม Titanium Silver) ---
  style: {
    fontFamily: '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif',
    fontSize: 40,
    badgeText: '◈ ดาวเคราะห์หินชั้นใน · MERCURY RECON ◈',
    panelBgColor: '#07090e',
    panelBorderColor: '#e2e8f0',
    titleColor: '#ffffff',
    subtitleColor: '#cbd5e1',      // สว่างขึ้นจากเดิม อ่านง่ายบนพื้นดำ
    textColor: '#f8fafc',
    buttonColor: '#0284c7',        // เดิมเป็นเทาดำจนมองไม่เห็น เปลี่ยนเป็นฟ้าสว่าง
    buttonHoverColor: '#38bdf8',
    closeButtonColor: '#475569',   // เทาสเลทสว่างพอให้เห็นปุ่มและตัวอักษร
    highlightColor: '#f8fafc'
  },
 
  // --- 4. การ์ดข้อมูลแยกอิสระ (โครงสร้างเดียวกับดาวศุกร์เพื่อความสม่ำเสมอ) ---
  card: {
    width: 1.84,
    height: 1.28,
    layout: 'horizontal',
    position: { x: 0, y: 0, z: 0 },
    background: {
      color: '#07090e',
      opacity: 1.0,
      outerGlow: true,
      outerGlowColor: '#e2e8f0',
      outerGlowOpacity: 0.30
    },
    border: {
      style: 'full',
      color: '#e2e8f0',
      thickness: 0.024,
      opacity: 1.0
    },
    header: {
      badgeText: '◈ ดาวเคราะห์หินชั้นใน · MERCURY RECON ◈',
      titleFontSize: 44,
      subtitleFontSize: 30,
      titleColor: '#ffffff',
      subtitleColor: '#cbd5e1',
      showDivider: true,
      dividerColor: '#38bdf8'      // เส้นคั่นสีฟ้าคอสมิกเป็นจุดเด่น
    },
    media: {
      position: { x: -0.48, y: -0.01, z: 0.22 },
      modelRadius: 0.20,
      showCaption: true,
      caption: '◈ แบบจำลอง 3D ดาวพุธ ◈',
      captionColor: '#cbd5e1'
    },
    content: {
      position: { x: -0.15, y: -0.01, z: 0.02 },
      width: 0.94,
      fontSize: 28,
      lineHeight: 46,
      align: 'left',
      bulletPrefix: '◈ '
    },
    buttons: [
      {
        id: 'quiz',
        label: '◈ ท้าทายควิซดาวพุธ',
        action: 'quiz',
        position: { x: 0.32, y: -0.46, z: 0.035 },
        width: 0.68,
        height: 0.13,
        color: '#0284c7',          // ฟ้าสว่าง เห็นตัวอักษรทันทีโดยไม่ต้องชี้
        hoverColor: '#38bdf8',
        textColor: '#ffffff',
        fontSize: 32
      },
      {
        id: 'close',
        label: '✕ กลับสู่ระบบสุริยะ',
        action: 'close',
        position: { x: -0.50, y: -0.46, z: 0.035 },
        width: 0.46,
        height: 0.13,
        color: '#475569',
        hoverColor: '#64748b',
        textColor: '#ffffff',
        fontSize: 32
      }
    ]
  }
});
