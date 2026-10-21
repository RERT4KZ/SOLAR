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
    panelBgColor: '#1a0c13',       // พื้นหลังสีดำเหลือบกุหลาบเข้ม (Rose Obsidian)
    panelBorderColor: '#fb7185',   // ขอบการ์ดสีโรสโกลด์ / ชมพูพีชสว่าง (Rose Gold)
    titleColor: '#ffe4e6',         // หัวข้อสีขาวประกายชมพูโรส
    subtitleColor: '#fecdd3',      // ชื่อภาษาอังกฤษสีพีชพาสเทล
    textColor: '#ffffff',          // ข้อความเนื้อหาสีขาวคมชัด
    buttonColor: '#881337',        // ปุ่มมินิเกมสีแดงกุหลาบเข้มบรอนซ์ (Deep Rose Bronze)
    buttonHoverColor: '#e11d48',   // สีปุ่มเมื่อชี้เมาส์สว่างเป็นชมพูโรสสด
    closeButtonColor: '#3f1d28',   // ปุ่มปิดสีไวน์เข้ม
    highlightColor: '#fda4af'      // แสงเรืองรองสีชมพูโรสโกลด์รอบดาว
  },

  // --- 4. ตั้งค่าการ์ดข้อมูลแยกอิสระ (แก้ไขเฉพาะดาวดวงนี้ได้โดยไม่กระทบดาวดวงอื่น) ---
  // ดาวศุกร์ใช้ธีม Empress Rose Gold / Celestial Romance อัญมณีโรสโกลด์ นุ่มนวล เปล่งประกายแห่งเทพีวีนัส
  card: {
    width: 1.94,
    height: 1.38,
    layout: 'horizontal',
    position: { x: 0, y: 0, z: 0 },
    distance: 0,
    rotation: { x: 0, y: 0, z: 0 },
    background: {
      color: '#150810',
      opacity: 0.96,
      image: '',
      outerGlow: true,
      outerGlowColor: '#f43f5e',
      outerGlowOpacity: 0.24
    },
    border: {
      style: 'corners',
      color: '#fb7185',
      thickness: 0.024,
      opacity: 0.95,
      cornerSize: 0.22,
      cornerColor: '#fda4af'
    },
    header: {
      titlePos: { x: 0, y: 0.54, z: 0.02 },
      subtitlePos: { x: 0, y: 0.42, z: 0.02 },
      titleWidth: 1.50,
      subtitleWidth: 1.30,
      titleFontSize: 46,
      subtitleFontSize: 38,
      titleColor: '#fff1f2',
      subtitleColor: '#fecdd3',
      align: 'center',
      showDivider: true,
      dividerY: 0.35,
      dividerColor: '#fb7185'
    },
    media: {
      show: true,
      position: { x: -0.54, y: -0.02, z: 0.035 },
      show3D: true,
      modelRadius: 0.24,
      modelOffset: { x: 0, y: 0.06, z: 0.04 },
      frameColor: '#fb7185',
      showImage: false,
      showCaption: true,
      captionColor: '#fecdd3',
      captionPos: { x: 0, y: -0.34, z: 0.02 }
    },
    content: {
      position: { x: 0.18, y: -0.02, z: 0.02 },
      width: 0.98,
      maxHeight: 0.60,
      fontSize: 32,
      lineHeight: 40,
      align: 'left',
      bulletPrefix: '✦ ',
      includeInfo: true,
      includeFacts: true
    },
    buttonLayout: 'custom',
    buttons: [
      {
        id: 'quiz',
        label: 'ท้าทายควิซดาวศุกร์',
        action: 'quiz',
        position: { x: -0.22, y: -0.52, z: 0.035 },
        width: 0.66,
        height: 0.13,
        color: '#9f1239',
        hoverColor: '#e11d48',
        textColor: '#fff1f2',
        fontSize: 36
      },
      {
        id: 'close',
        label: 'กลับสู่ระบบสุริยะ',
        action: 'close',
        position: { x: 0.40, y: -0.52, z: 0.035 },
        width: 0.46,
        height: 0.13,
        color: '#2a0e1b',
        hoverColor: '#4c0519',
        textColor: '#fecdd3',
        fontSize: 36
      }
    ]
  }
});
