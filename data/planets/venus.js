// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: ดาวศุกร์ (Venus)
// ไฟล์: data/planets/venus.js
// ============================================================================
// หมายเหตุรูปแบบค่า (ยึดตามไฟล์ mercury.js / saturn.js ที่ใช้งานได้จริง)
//   - ตำแหน่งทุกชนิดเป็นสตริง 'x y z' เช่น '-0.80 0 0.035' (ห้ามใช้ { x, y, z })
//   - lineHeight เป็นอัตราส่วน เช่น 1.3 (ไม่ใช่พิกเซล)
//   - fontSize ของปุ่มอยู่บนสเกลแคนวาส 1024 (ใช้ราว 100)
//   - bullet = สัญลักษณ์หน้าหัวข้อย่อย, decorations ใช้ type 'plane' หรือ 'circle'
//
// [ปรับปรุงล่าสุด]
//   - เลิกใช้ renderCard แบบกำหนดเอง (ที่แสดงข้อเท็จจริงทีละ 1 ข้อ + ปุ่ม ◀ ▶)
//   - เปลี่ยนมาใช้ระบบ content มาตรฐานเหมือน mercury.js → แสดงข้อเท็จจริงครบทั้ง 4 ข้อพร้อมกัน
// ============================================================================

// ---- สวิตช์ทดสอบ: ถ้าตัวอักษรเบี้ยว ให้ลองเปลี่ยนทีละค่าเป็น false แล้วรีเฟรช เพื่อหาว่าตัวไหนทำให้เบี้ยว ----
const VENUS_USE_BORDER = true;       // กรอบรอบการ์ด
const VENUS_USE_GLOW = true;         // แสงเรืองรอบกรอบ
const VENUS_USE_DECORATIONS = true;  // เส้น/แผ่น/จุดตกแต่ง
// ----------------------------------------------------------------------------------------------

window.PLANET_DATA = window.PLANET_DATA || [];

window.PLANET_DATA = window.PLANET_DATA.filter(
  p => p.id !== 'venus'
);

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
    'สว่างที่สุดในบรรดาดาวบนท้องฟ้า รู้จักในชื่อดาวประกายพรึก'
  ],

  // --- 2. โมเดล 3D ---
  texture: 'assets/images/venus.jpg',
  color: '#e7bd7b',
  radius: 0.38,
  image: '',

  // --- 3. สไตล์หลักของดาวดวงนี้ ---
  style: {
    fontFamily: '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif',
    fontSize: 44,
    panelBgColor: '#160812',
    panelBorderColor: '#fb7185',
    titleColor: '#fff1f2',
    subtitleColor: '#fecdd3',
    textColor: '#ffffff',
    buttonColor: '#be123c',
    buttonHoverColor: '#e11d48',
    closeButtonColor: '#4c0519',
    highlightColor: '#fb7185'
  },

  // --- 4. การ์ดข้อมูล (ขนาดและตำแหน่งชุดเดียวกับดาวพุธ/ดาวเสาร์) ---
  card: {
    width: 2.65,
    height: 1.80,
    position: '0 0 0',
    scale: 0.8,
    rotation: '0 0 0',
    distance: 1.8,
    layout: 'horizontal',

    background: {
      color: '#160812',
      opacity: 0.88,
      image: ''
    },

    // กรอบแบบมีมุม (frame) พร้อมแสงเรืองรอบการ์ด
    border: VENUS_USE_BORDER ? {
      style: 'frame',
      color: '#fb7185',
      thickness: 0.012,
      cornerSize: 0.12,
      cornerColor: '#fda4af',
      glowColor: '#fb7185',
      glowOpacity: VENUS_USE_GLOW ? 0.18 : 0
    } : { style: 'none', thickness: 0, cornerSize: 0, glowOpacity: 0 },

    header: {
      show: true,
      title: 'ดาวศุกร์',
      subtitle: 'V E N U S  ·  ดาวฝาแฝดของโลก',
      titlePos: '0 0.77 0.02',
      subtitlePos: '0 0.665 0.02',
      titleWidth: 1.55,
      subtitleWidth: 1.55,
      showDivider: true,
      dividerY: 0.605,
      dividerWidth: 2.4
    },

    media: {
      show: true,
      show3D: true,
      showCaption: true,
      caption: 'แบบจำลอง 3D ดาวศุกร์',
      captionColor: '#fecdd3',
      position: '-0.80 0 0.035',
      modelRadius: 0.22,
      showImage: false,
      frameColor: '#fda4af'
    },

    // แสดงข้อเท็จจริงครบทุกข้อ (ระบบจะย่อฟอนต์อัตโนมัติไม่ต่ำกว่า minFontSize ถ้าข้อความยาวเกิน)
    content: {
      position: '0.47 -0.05 0.03',
      width: 1.38,
      maxHeight: 0.80,
      fontSize: 44,
      minFontSize: 28,
      lineHeight: 1.3,
      align: 'left',
      bullet: '✦ '
    },

    sections: [],

    // --- ตกแต่งเพิ่มเติม ---
    decorations: !VENUS_USE_DECORATIONS ? [] : [
      // แผ่นกระจกจาง ๆ ด้านซ้าย (โมเดล) และด้านขวา (ความรู้)
      { type: 'plane', position: '-0.80 -0.125 0.006', width: 0.92, height: 1.04, color: '#3a1224', opacity: 0.55 },
      { type: 'plane', position: '0.47 -0.11 0.006', width: 1.50, height: 0.98, color: '#2c0e1b', opacity: 0.55 },

      // แถบพื้นหลังด้านล่างรองรับปุ่ม
      { type: 'plane', position: '0 -0.73 0.008', width: 2.30, height: 0.25, color: '#3a1224', opacity: 0.45 },

      // เส้นกรอบบาง (hairline) ซ้อนด้านในกรอบนอก
      { type: 'plane', position: '0 0.835 0.012', width: 2.46, height: 0.004, color: '#fda4af', opacity: 0.5 },
      { type: 'plane', position: '0 -0.835 0.012', width: 2.46, height: 0.004, color: '#fda4af', opacity: 0.5 },
      { type: 'plane', position: '-1.23 0 0.012', width: 0.004, height: 1.67, color: '#fda4af', opacity: 0.5 },
      { type: 'plane', position: '1.23 0 0.012', width: 0.004, height: 1.67, color: '#fda4af', opacity: 0.5 },

      // เส้นประดับสองข้างบรรทัดชื่อภาษาอังกฤษ
      { type: 'plane', position: '-1.00 0.665 0.012', width: 0.38, height: 0.004, color: '#fda4af', opacity: 0.8 },
      { type: 'plane', position: '1.00 0.665 0.012', width: 0.38, height: 0.004, color: '#fda4af', opacity: 0.8 },

      // เส้นเน้นใต้แผงโมเดลและบนแผงความรู้
      { type: 'plane', position: '-0.80 -0.65 0.012', width: 0.80, height: 0.004, color: '#fda4af', opacity: 0.7 },
      { type: 'plane', position: '0.47 0.385 0.012', width: 1.40, height: 0.004, color: '#fda4af', opacity: 0.55 },

      // จุดดาวประดับ
      { type: 'circle', position: '-1.10 0.74 0.02', radius: 0.014, color: '#fecdd3', opacity: 0.9 },
      { type: 'circle', position: '1.10 0.74 0.02', radius: 0.014, color: '#fecdd3', opacity: 0.9 },
      { type: 'circle', position: '-0.565 0.336 0.02', radius: 0.012, color: '#fecdd3', opacity: 0.9 },
      { type: 'circle', position: '-1.136 -0.235 0.02', radius: 0.010, color: '#fda4af', opacity: 0.9 },
      { type: 'circle', position: '-0.45 -0.50 0.02', radius: 0.008, color: '#fecdd3', opacity: 0.8 },
      { type: 'circle', position: '1.12 -0.50 0.02', radius: 0.010, color: '#fda4af', opacity: 0.8 }
    ],

    buttonLayout: {
      mode: 'custom',
      position: '0 -0.73 0.035',
      spacing: 0.06
    },

    // ปุ่มขนาดใหญ่ (0.80 x 0.19, ฟอนต์ 130) เห็นข้อความชัดทันทีโดยไม่ต้องชี้
    // ขอบล่างปุ่ม = -0.73 - 0.095 = -0.825 → ยังอยู่เหนือเส้นกรอบล่าง (-0.835)
    buttons: [
      {
        id: 'close',
        enabled: true,
        label: 'ปิดการ์ด',
        action: 'close',
        position: '-0.70 -0.73 0.035',
        width: 0.80,
        height: 0.19,
        color: '#4c0519',
        hoverColor: '#9f1239',
        textColor: '#fff1f2',
        borderColor: '#fda4af',
        borderThickness: 0.006,
        fontSize: 130,
        minFontSize: 100,
        maxHeight: 0.17,
        opacity: 1
      },
      {
        id: 'quiz',
        enabled: true,
        label: '✦ เริ่มมินิเกม',
        action: 'quiz',
        position: '0.70 -0.73 0.035',
        width: 0.80,
        height: 0.19,
        color: '#be123c',
        hoverColor: '#e11d48',
        textColor: '#ffffff',
        borderColor: '#fecdd3',
        borderThickness: 0.006,
        fontSize: 130,
        minFontSize: 100,
        maxHeight: 0.17,
        opacity: 1
      }
    ]
  }
});
