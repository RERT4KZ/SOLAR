// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: ดาวศุกร์ (Venus)
// ไฟล์: data/planets/venus.js
// ============================================================================
// [ค่าอ้างอิงเดิมของดาวศุกร์]
//   id: 'venus' | name: 'ดาวศุกร์' | en: 'Venus'
//   color: '#e7bd7b' | radius: 0.38
//
// [มาตรฐานดีไซน์กลางที่ใช้เหมือนกันทั้งโปรเจกต์ (หากเว้นว่าง ระบบจะใช้ค่าเหล่านี้)]
//   - ฟอนต์หลัก (fontFamily)     : '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif'
//   - ขนาดแผงการ์ด UI            : กว้าง 1.78 เมตร x สูง 1.22 เมตร
//   - สีปุ่มมินิเกม / ปุ่มปิด / สีเรืองแสง ตามที่กำหนดใน style และ card.buttons
// ============================================================================
 
window.PLANET_DATA = window.PLANET_DATA || [];
 
window.PLANET_DATA.push({
  // --- 1. ข้อมูลพื้นฐานและเนื้อหาของดาว ---
  id: 'venus',
  name: 'ดาวศุกร์',
  en: 'Venus',
  info: 'ดาวเคราะห์ที่ร้อนที่สุดในระบบสุริยะ และสว่างที่สุดบนท้องฟ้ารองจากดวงจันทร์',
  facts: [
    'ฉายาฝาแฝดโลก ขนาดและมวลใกล้เคียงโลกมากที่สุด',
    'ผิวร้อนที่สุดในระบบสุริยะ อุณหภูมิสูงถึง 465°C',
    'หมุนรอบตัวเองกลับทิศ ดวงอาทิตย์ขึ้นทิศตะวันตก',
    'สว่างที่สุดบนท้องฟ้า รู้จักในชื่อดาวประกายพรึก'
  ],
 
  // --- 2. ตั้งค่าโมเดล 3D และรูปภาพประกอบ ---
  color: '#e7bd7b',
  radius: 0.38,
  image: '',
  texture: 'assets/images/venus.jpg',
 
  // --- 3. สไตล์เฉพาะของดาวดวงนี้ (ธีม Rose Gold) ---
  style: {
    fontFamily: '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif',
    fontSize: 40,                  // ขนาดมาตรฐาน อ่านสบาย ไม่ใหญ่เกินกรอบ
    badgeText: '✦ ดาวฝาแฝดของโลก · GODDESS OF BEAUTY ✦',
    panelBgColor: '#160812',
    panelBorderColor: '#fb7185',
    titleColor: '#fff1f2',
    subtitleColor: '#fecdd3',
    textColor: '#ffffff',
    buttonColor: '#be123c',        // ปุ่มสว่างตลอดเวลา เห็นข้อความโดยไม่ต้องชี้
    buttonHoverColor: '#e11d48',
    closeButtonColor: '#9f1239',   // ปุ่มปิดสว่างขึ้น เห็นชัดเจนตั้งแต่แรก
    highlightColor: '#fda4af'
  },
 
  // --- 4. การ์ดข้อมูลแยกอิสระ ---
  card: {
    width: 1.84,
    height: 1.28,
    layout: 'horizontal',
    position: { x: 0, y: 0, z: 0 },
    background: {
      color: '#160812',
      opacity: 1.0,
      outerGlow: true,
      outerGlowColor: '#fb7185',
      outerGlowOpacity: 0.35       // เพิ่มแสงเรืองรอบการ์ดให้เด่นขึ้น
    },
    border: {
      style: 'full',
      color: '#fda4af',
      thickness: 0.024,
      opacity: 1.0
    },
    header: {
      badgeText: '✦ ดาวฝาแฝดของโลก · GODDESS OF BEAUTY ✦',
      titleFontSize: 44,
      subtitleFontSize: 30,
      titleColor: '#fff1f2',
      subtitleColor: '#fecdd3',
      showDivider: true,
      dividerColor: '#fb7185'
    },
    media: {
      position: { x: -0.48, y: -0.01, z: 0.22 },
      modelRadius: 0.20,
      showCaption: true,
      caption: '✦ แบบจำลอง 3D ดาวศุกร์ ✦',
      captionColor: '#fecdd3'
    },
    content: {
      position: { x: -0.15, y: -0.01, z: 0.02 },
      width: 0.94,
      fontSize: 28,                // ขนาดปกติ อ่านง่าย ไม่ตกบรรทัด
      lineHeight: 46,
      align: 'left',
      bulletPrefix: '✦ '
    },
    buttons: [
      {
        id: 'quiz',
        label: '✦ ท้าทายควิซดาวศุกร์',
        action: 'quiz',
        position: { x: 0.32, y: -0.46, z: 0.035 },
        width: 0.68,
        height: 0.13,
        color: '#be123c',          // พื้นปุ่มสีแดงกุหลาบสด
        hoverColor: '#fb7185',
        textColor: '#ffffff',      // ตัวอักษรขาวสว่าง เห็นทันทีโดยไม่ต้องชี้
        fontSize: 32
      },
      {
        id: 'close',
        label: '✕ กลับสู่ระบบสุริยะ',
        action: 'close',
        position: { x: -0.50, y: -0.46, z: 0.035 },
        width: 0.46,
        height: 0.13,
        color: '#9f1239',          // ไวน์แดงสว่างขึ้น แยกจากพื้นหลังชัดเจน
        hoverColor: '#e11d48',
        textColor: '#ffffff',
        fontSize: 32
      }
    ]
  }
});
