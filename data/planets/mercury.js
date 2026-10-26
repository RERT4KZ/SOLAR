// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: ดาวพุธ (Mercury)
// ไฟล์: data/planets/mercury.js
// ============================================================================
// หมายเหตุรูปแบบค่า (ยึดตามไฟล์ saturn.js ที่ใช้งานได้จริง)
//   - ตำแหน่งทุกชนิดเป็นสตริง 'x y z' เช่น '-0.80 0 0.035' (ห้ามใช้ { x, y, z })
//   - lineHeight เป็นอัตราส่วน เช่น 1.3 (ไม่ใช่พิกเซล)
//   - fontSize ของปุ่มอยู่บนสเกลแคนวาส 1024 (ใช้ราว 100)
//   - bullet = สัญลักษณ์หน้าหัวข้อย่อย, decorations ใช้ type 'plane' หรือ 'circle'
// ============================================================================

window.PLANET_DATA = window.PLANET_DATA || [];

window.PLANET_DATA = window.PLANET_DATA.filter(
  p => p.id !== 'mercury'
);

window.PLANET_DATA.push({
  // --- 1. ข้อมูลพื้นฐานและเนื้อหาของดาว ---
  id: 'mercury',
  name: 'ดาวพุธ',
  en: 'Mercury',
  info: 'ดาวเคราะห์ที่อยู่ใกล้ดวงอาทิตย์ที่สุดและมีขนาดเล็กที่สุดในระบบสุริยะ',
  facts: [
    'ฉายาเตาไฟแช่แข็ง กลางวันร้อนจัด กลางคืนหนาวจัด',
    'โคจรรอบดวงอาทิตย์เร็วที่สุด ครบรอบเพียง 88 วัน',
    'ดาวเคราะห์หินขนาดเล็ก ไม่มีดวงจันทร์บริวาร',
    'พื้นผิวเต็มไปด้วยหลุมอุกกาบาต คล้ายดวงจันทร์ของโลก'
  ],

  // --- 2. โมเดล 3D ---
  texture: 'assets/images/mercury.jpg',
  color: '#a7a5a1',
  radius: 0.30,
  image: '',

  // --- 3. สไตล์หลักของดาวดวงนี้ ---
  style: {
    fontFamily: '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif',
    fontSize: 44,
    panelBgColor: '#07090e',
    panelBorderColor: '#e2e8f0',
    titleColor: '#ffffff',
    subtitleColor: '#cbd5e1',
    textColor: '#f8fafc',
    buttonColor: '#0369a1',
    buttonHoverColor: '#0ea5e9',
    closeButtonColor: '#1e293b',
    highlightColor: '#38bdf8'
  },

  // --- 4. การ์ดข้อมูล (ขนาดและตำแหน่งชุดเดียวกับดาวเสาร์) ---
  card: {
    width: 2.65,
    height: 1.80,
    position: '0 0 0',
    scale: 0.8,
    rotation: '0 0 0',
    distance: 1.8,
    layout: 'horizontal',

    background: {
      color: '#07090e',
      opacity: 0.88,
      image: ''
    },

    // กรอบแบบมีมุม (frame) พร้อมแสงเรืองรอบการ์ด
    border: {
      style: 'frame',
      color: '#e2e8f0',
      thickness: 0.012,
      cornerSize: 0.12,
      cornerColor: '#38bdf8',
      glowColor: '#38bdf8',
      glowOpacity: 0.18
    },

    header: {
      show: true,
      title: 'ดาวพุธ',
      subtitle: 'M E R C U R Y  ·  ดาวเคราะห์ชั้นใน',
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
      caption: 'แบบจำลอง 3D ดาวพุธ',
      captionColor: '#cbd5e1',
      position: '-0.80 0 0.035',
      modelRadius: 0.22,
      showImage: false,
      frameColor: '#38bdf8'
    },

    content: {
      position: '0.47 -0.05 0.03',
      width: 1.38,
      maxHeight: 0.80,
      fontSize: 44,
      minFontSize: 28,
      lineHeight: 1.3,
      align: 'left',
      bullet: '• '
    },

    sections: [],

    // --- ตกแต่งเพิ่มเติม ---
    decorations: [
      // แผ่นกระจกจาง ๆ ด้านซ้าย (โมเดล) และด้านขวา (ความรู้)
      { type: 'plane', position: '-0.80 -0.125 0.006', width: 0.92, height: 1.04, color: '#131b2c', opacity: 0.55 },
      { type: 'plane', position: '0.47 -0.11 0.006', width: 1.50, height: 0.98, color: '#0e1524', opacity: 0.55 },

      // แถบพื้นหลังด้านล่างรองรับปุ่ม
      { type: 'plane', position: '0 -0.745 0.008', width: 2.30, height: 0.21, color: '#131b2c', opacity: 0.45 },

      // เส้นกรอบบาง (hairline) ซ้อนด้านในกรอบนอก
      { type: 'plane', position: '0 0.835 0.012', width: 2.46, height: 0.004, color: '#94a3b8', opacity: 0.5 },
      { type: 'plane', position: '0 -0.835 0.012', width: 2.46, height: 0.004, color: '#94a3b8', opacity: 0.5 },
      { type: 'plane', position: '-1.23 0 0.012', width: 0.004, height: 1.67, color: '#94a3b8', opacity: 0.5 },
      { type: 'plane', position: '1.23 0 0.012', width: 0.004, height: 1.67, color: '#94a3b8', opacity: 0.5 },

      // เส้นประดับสองข้างบรรทัดชื่อภาษาอังกฤษ
      { type: 'plane', position: '-1.00 0.665 0.012', width: 0.38, height: 0.004, color: '#38bdf8', opacity: 0.8 },
      { type: 'plane', position: '1.00 0.665 0.012', width: 0.38, height: 0.004, color: '#38bdf8', opacity: 0.8 },

      // เส้นเน้นใต้แผงโมเดลและบนแผงความรู้
      { type: 'plane', position: '-0.80 -0.65 0.012', width: 0.80, height: 0.004, color: '#38bdf8', opacity: 0.7 },
      { type: 'plane', position: '0.47 0.385 0.012', width: 1.40, height: 0.004, color: '#38bdf8', opacity: 0.55 },

      // จุดดาวประดับ
      { type: 'circle', position: '-1.10 0.74 0.02', radius: 0.014, color: '#e2e8f0', opacity: 0.9 },
      { type: 'circle', position: '1.10 0.74 0.02', radius: 0.014, color: '#e2e8f0', opacity: 0.9 },
      { type: 'circle', position: '-0.565 0.336 0.02', radius: 0.012, color: '#e2e8f0', opacity: 0.9 },
      { type: 'circle', position: '-1.136 -0.235 0.02', radius: 0.010, color: '#38bdf8', opacity: 0.9 },
      { type: 'circle', position: '-0.45 -0.50 0.02', radius: 0.008, color: '#e2e8f0', opacity: 0.8 },
      { type: 'circle', position: '1.12 -0.50 0.02', radius: 0.010, color: '#38bdf8', opacity: 0.8 }
    ],

    buttonLayout: {
      mode: 'custom',
      position: '0 -0.745 0.035',
      spacing: 0.06
    },

    // ปุ่ม: สีพื้นสว่าง ตัวอักษรขาว มีขอบ มองเห็นข้อความได้ทันทีโดยไม่ต้องชี้
    buttons: [
      {
        id: 'close',
        enabled: true,
        label: 'ปิดการ์ด',
        action: 'close',
        position: '-0.72 -0.745 0.035',
        width: 0.62,
        height: 0.15,
        color: '#1e293b',
        hoverColor: '#475569',
        textColor: '#f1f5f9',
        borderColor: '#94a3b8',
        borderThickness: 0.006,
        fontSize: 100,
        opacity: 1
      },
      {
        id: 'quiz',
        enabled: true,
        label: 'เริ่มมินิเกม',
        action: 'quiz',
        position: '0.72 -0.745 0.035',
        width: 0.62,
        height: 0.15,
        color: '#0369a1',
        hoverColor: '#0ea5e9',
        textColor: '#ffffff',
        borderColor: '#7dd3fc',
        borderThickness: 0.006,
        fontSize: 100,
        opacity: 1
      }
    ]
  }
});
