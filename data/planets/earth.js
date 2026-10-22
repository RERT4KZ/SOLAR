// Solar Odyssey VR — Earth planet data
// Only Earth-specific data. Compatible with index.html card configuration.
window.PLANET_DATA = window.PLANET_DATA || [];
window.PLANET_DATA.push({
  id: 'earth',
  name: 'โลก',
  en: 'Earth',
  info: 'ดาวเคราะห์ลำดับที่ 3 จากดวงอาทิตย์ และเป็นบ้านของสิ่งมีชีวิตที่เรารู้จัก',
  facts: [
    'อยู่ลำดับที่ 3 จากดวงอาทิตย์',
    'พื้นผิวประมาณ 71% ปกคลุมด้วยน้ำ',
    'หมุนรอบตัวเองประมาณ 24 ชั่วโมง',
    'โคจรรอบดวงอาทิตย์ประมาณ 365.25 วัน',
    'มีดวงจันทร์บริวารตามธรรมชาติ 1 ดวง'
  ],
  color: '#327ed7',
  radius: 0.25,
  image: '',
  texture: 'assets/images/earth.jpg',
  style: {
    fontFamily: '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif',
    fontSize: 36,
    panelBgColor: '#061827',
    panelBorderColor: '#38bdf8',
    titleColor: '#e0f2fe',
    subtitleColor: '#7dd3fc',
    textColor: '#ffffff',
    buttonColor: '#0369a1',
    buttonHoverColor: '#0284c7',
    closeButtonColor: '#334155',
    highlightColor: '#34d399'
  },
  card: {
    width: 1.78,
    height: 1.22,
    position: '0 0 0',
    rotation: '0 0 0',
    distance: 1.8,
    layout: 'horizontal',
    background: { color: '#061827', opacity: 0.96, image: '' },
    border: { style: 'top-bottom', color: '#38bdf8', thickness: 0.018 },
    header: { show: true, titlePos: '0 0.48 0.02', subtitlePos: '0 0.34 0.02', showDivider: false },
    media: { show: true, show3D: true, position: '-0.52 0.02 0.035', modelRadius: 0.25, showCaption: true },
    content: { position: '-0.10 0.08 0.03', width: 0.90, maxHeight: 0.54, fontSize: 34, lineHeight: 1.3, align: 'left', bullet: '• ' },
    sections: [],
    decorations: [],
    buttonLayout: { mode: 'custom', position: '0 -0.45 0.035', spacing: 0.06 },
    buttons: [
      { id: 'quiz', enabled: true, label: 'เริ่มมินิเกม', action: 'quiz', position: '0.35 -0.39 0.035', width: 0.72, height: 0.19, color: '#0369a1', hoverColor: '#0284c7', textColor: '#ffffff', fontSize: 34 },
      { id: 'close', enabled: true, label: 'ปิดการ์ด', action: 'close', position: '-0.56 -0.51 0.035', width: 0.48, height: 0.15, color: '#334155', hoverColor: '#475569', textColor: '#ffffff', fontSize: 34 }
    ]
  }
});
