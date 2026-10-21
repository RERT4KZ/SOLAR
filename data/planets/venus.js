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
  card: {
    width: 1.68,
    height: 1.16,
    position: '0 0 0',
    rotation: '0 0 0',
    distance: 1.8,
    layout: 'horizontal',
    background: { color: '#1a0c13', opacity: 0.96, image: '' },
    border: { style: 'top-bottom', color: '#fb7185', thickness: 0.018 },
    header: { show: true, titlePos: '0 0.45 0.02', subtitlePos: '0 0.32 0.02', showDivider: false },
    media: { show: true, show3D: true, position: '-0.48 0.02 0.035', modelRadius: 0.23, showCaption: true },
    content: { position: '-0.10 0.06 0.03', width: 0.86, maxHeight: 0.50, fontSize: 36, lineHeight: 1.36, align: 'left', bullet: '• ' },
    sections: [],
    decorations: [],
    buttonLayout: { mode: 'custom', position: '0 -0.42 0.035', spacing: 0.06 },
    buttons: [
      { id: 'quiz', enabled: true, label: 'PLAY MINIGAME', action: 'quiz', position: '0.32 -0.37 0.035', width: 0.70, height: 0.18, color: '#881337', hoverColor: '#e11d48', textColor: '#ffffff', fontSize: 36 },
      { id: 'close', enabled: true, label: 'ปิดการ์ด', action: 'close', position: '-0.50 -0.46 0.035', width: 0.46, height: 0.14, color: '#3f1d28', hoverColor: '#e11d48', textColor: '#ffffff', fontSize: 36 }
    ]
  }
});
