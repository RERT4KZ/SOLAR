// ============================================================================
// ไฟล์ข้อมูลประจำดวงอาทิตย์ (Sun) — การ์ดข้อมูลแบบหลายหน้า (Holographic Futuristic)
// ไฟล์: data/planets/sun.js
// ============================================================================
// โครงสร้าง: การ์ดมี 6 แท็บ (ภาพรวม / โครงสร้าง / พลังงาน / กิจกรรมสุริยะ / ผลต่อโลก / ความเข้าใจผิด)
// แต่ละแท็บมี 3 ระดับ: (1) ตัวเลขเด่นด้านซ้าย (2) ย่อหน้าความรู้หลัก (3) ปุ่ม "รู้เพิ่มเติม" เปิดความรู้เสริม
// ข้อมูลทั้งหมดอยู่ในอาร์เรย์ SUN_PAGES ด้านล่าง แก้ข้อความได้ที่นั่นโดยไม่ต้องแตะโค้ดวาดการ์ด
//
// ความปลอดภัยต่อดาวดวงอื่น: ไฟล์นี้ลงทะเบียนเฉพาะ id 'sun' และไม่แก้ค่าส่วนกลางใด ๆ
// หากการวาดการ์ดแบบใหม่เกิดข้อผิดพลาด จะถอยกลับไปใช้ตัววาดการ์ดมาตรฐานของระบบ (fallback) โดยอัตโนมัติ
//
// แหล่งข้อมูลตัวเลข: NASA (science.nasa.gov/sun, NASA Sun fact sheet/lithograph), ESA, NOAA SWPC
// ============================================================================

window.PLANET_DATA = window.PLANET_DATA || [];

window.PLANET_DATA = window.PLANET_DATA.filter(
  p => p.id !== 'sun'
);

(function () {
  const FONT = '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif';
  // ตำแหน่งทรงกลมดวงอาทิตย์ในการ์ด (x y z) เทียบกับศูนย์กลางวงแหวน: เพิ่ม x = ขยับไปทางขวา, ลด x = ขยับไปทางซ้าย
  const MODEL_NUDGE = '0.032 0 0';

  // --------------------------------------------------------------------------
  // เนื้อหาความรู้ (แก้ไขข้อความที่นี่)
  //   tab   : ป้ายแท็บ (ขึ้นบรรทัดใหม่ด้วย \n ได้ 1 ครั้ง)
  //   title : หัวข้อของหน้า
  //   stat  : { big, label } ตัวเลขเด่นด้านซ้ายใต้โมเดล
  //   body  : ย่อหน้าความรู้หลัก (ระดับที่ 2)
  //   more  : ความรู้เพิ่มเติม (ระดับที่ 3 แสดงเมื่อกดปุ่ม "รู้เพิ่มเติม")
  // --------------------------------------------------------------------------
  const SUN_PAGES = [
    {
      tab: 'ภาพรวม',
      title: 'ทำความรู้จักดวงอาทิตย์',
      stat: { big: '109 เท่า', label: 'กว้างกว่าโลก (ราว 1.39 ล้าน กม.)' },
      body: [
        'ดวงอาทิตย์เป็นดาวฤกษ์ประเภทดาวแคระเหลือง (G2V) อายุราว 4.6 พันล้านปี เป็นก้อนพลาสมาร้อนที่ไม่มีพื้นผิวแข็ง ประกอบด้วยไฮโดรเจนราว 73% และฮีเลียมราว 25% โดยมวล',
        'มีมวลมากกว่าโลกราว 333,000 เท่า หรือราว 99.8% ของมวลทั้งระบบสุริยะ แรงโน้มถ่วงมหาศาลนี้จึงรั้งดาวเคราะห์ทุกดวงให้โคจรรอบมัน',
        'ห่างจากโลกโดยเฉลี่ย 149.6 ล้านกิโลเมตร ซึ่งนักดาราศาสตร์ใช้เป็นหน่วยวัดระยะ 1 หน่วยดาราศาสตร์ (AU)'
      ],
      more: [
        'ดวงอาทิตย์หมุนรอบตัวเองไม่เท่ากันทุกละติจูด บริเวณเส้นศูนย์สูตรหมุนครบรอบราว 25–27 วัน ขณะที่บริเวณใกล้ขั้วใช้เวลาราว 36 วัน เพราะเป็นก๊าซและพลาสมา ไม่ใช่วัตถุแข็ง',
        'ตอนนี้ดวงอาทิตย์อยู่ราวกึ่งกลางของช่วงชีวิตบนแถบลำดับหลัก (Main Sequence) อีกราว 5 พันล้านปี มันจะขยายเป็นดาวยักษ์แดง สลัดชั้นนอกออก และเหลือแกนกลางเป็นดาวแคระขาว (White Dwarf)',
        'ดวงอาทิตย์ไม่ระเบิดเป็นซูเปอร์โนวา เพราะมีมวลไม่มากพอ'
      ]
    },
    {
      tab: 'โครงสร้าง\nและบรรยากาศ',
      title: 'จากแกนกลางสู่โคโรนา',
      stat: { big: '15 ล้าน °C', label: 'อุณหภูมิที่แกนกลาง' },
      body: [
        'ภายในมี 3 ชั้น: แกนกลาง (Core) ที่เกิดฟิวชัน, เขตแผ่รังสี (Radiative Zone) ที่พลังงานเคลื่อนผ่านด้วยรังสี และเขตพาความร้อน (Convective Zone) ที่พลาสมาลอยขึ้นและจมลงเป็นเซลล์',
        'ส่วนบรรยากาศมี 3 ชั้น: โฟโตสเฟียร์ (Photosphere) คือผิวที่เรามองเห็น ราว 5,500 °C, โครโมสเฟียร์ (Chromosphere) และโคโรนา (Corona) ชั้นนอกสุดที่เห็นเป็นมงกุฎสีขาวตอนสุริยุปราคาเต็มดวง',
        'สิ่งที่น่าแปลกคือโคโรนาร้อนกว่าผิวมาก (เกิน 1 ล้าน °C) ทั้งที่อยู่ไกลจากแกนกลางกว่า'
      ],
      more: [
        'กลไกที่ทำให้โคโรนาร้อนยังเป็นปริศนาที่นักวิทยาศาสตร์กำลังวิจัยอยู่ แนวคิดหลักเกี่ยวข้องกับพลังงานจากคลื่นและการเชื่อมต่อใหม่ของสนามแม่เหล็ก (Magnetic Reconnection) แต่ยังไม่มีคำอธิบายเดียวที่ยืนยันเต็มที่',
        'ยาน Parker Solar Probe ของ NASA บินเข้าไปในบรรยากาศชั้นนอกของดวงอาทิตย์เพื่อเก็บข้อมูลโดยตรงมาหาคำตอบ',
        'ชั้นต่าง ๆ ไม่มีขอบแข็ง เพราะเป็นก๊าซร้อน การเปลี่ยนจากชั้นหนึ่งไปอีกชั้นเป็นไปอย่างค่อยเป็นค่อยไป'
      ]
    },
    {
      tab: 'พลังงาน\nฟิวชัน',
      title: 'พลังงานมาจากไหน',
      stat: { big: 'ราว 4 ล้านตัน', label: 'มวลที่กลายเป็นพลังงานต่อวินาที' },
      body: [
        'ที่แกนกลางซึ่งร้อนและหนาแน่นมาก นิวเคลียสของไฮโดรเจนถูกหลอมรวมเป็นฮีเลียมด้วยปฏิกิริยานิวเคลียร์ฟิวชัน (Nuclear Fusion) ไม่ใช่การเผาไหม้ทางเคมี',
        'ฮีเลียมที่ได้มีมวลน้อยกว่าไฮโดรเจนที่นำมารวมกันเล็กน้อย มวลส่วนที่หายไปเปลี่ยนเป็นพลังงานตามสมการ E = mc² ซึ่งให้พลังงานมหาศาลเพราะ c² เป็นค่าที่ใหญ่มาก',
        'นี่คือกระบวนการผลิตพลังงานที่แกนกลาง ส่วนการนำพลังงานออกมาสู่ผิวเป็นอีกกระบวนการหนึ่ง'
      ],
      more: [
        'พลังงานจากแกนกลางไม่ได้ออกมาถึงผิวทันที ต้องผ่านเขตแผ่รังสีที่แน่นมาก โฟตอนถูกดูดกลืนและปล่อยซ้ำนับไม่ถ้วน ใช้เวลาหลายหมื่นถึงกว่าแสนปี (NASA ระบุราว 170,000 ปี) จึงเดินทางผ่านชั้นนี้ไปได้',
        'จากนั้นเขตพาความร้อนพาพลังงานขึ้นสู่ผิว แล้วแผ่ออกสู่อวกาศเป็นแสง ซึ่งใช้เวลาอีกเพียงราว 8 นาทีกับ 20 วินาทีก็มาถึงโลก',
        'ตัวเลขราว 4 ล้านตันต่อวินาทีคำนวณได้จากกำลังส่องสว่างของดวงอาทิตย์หารด้วย c²'
      ]
    },
    {
      tab: 'กิจกรรม\nสุริยะ',
      title: 'กิจกรรมบนดวงอาทิตย์',
      stat: { big: 'ราว 11 ปี', label: 'วัฏจักรกิจกรรมสุริยะ' },
      body: [
        'ดวงอาทิตย์มีสนามแม่เหล็กที่ซับซ้อน จุดมืด (Sunspot) คือบริเวณที่สนามแม่เหล็กเข้มจนขัดขวางการพาความร้อน จึงเย็นกว่าบริเวณรอบข้างและดูคล้ำกว่า',
        'เปลวสุริยะ (Solar Flare) คือการปลดปล่อยพลังงานแสงและรังสีอย่างฉับพลัน ส่วน CME (Coronal Mass Ejection) คือการพ่นก้อนพลาสมาและสนามแม่เหล็กออกจากโคโรนา ทั้งสองมักเกิดด้วยกันแต่ไม่ใช่สิ่งเดียวกัน',
        'ลมสุริยะ (Solar Wind) คือกระแสอนุภาคมีประจุที่ไหลออกจากโคโรนาตลอดเวลา'
      ],
      more: [
        'แสงและรังสีจากเปลวสุริยะมาถึงโลกในราว 8 นาที ส่วน CME เดินทางช้ากว่ามาก ใช้เวลาราว 1–3 วัน',
        'ลมสุริยะมีความเร็วราว 300–800 กิโลเมตรต่อวินาที และพัดผ่านทุกดาวเคราะห์ในระบบสุริยะ',
        'จำนวนจุดมืดและกิจกรรมสุริยะขึ้นลงเป็นวัฏจักรราว 11 ปี และสนามแม่เหล็กของดวงอาทิตย์สลับขั้วทุกรอบ จึงครบวัฏจักรแม่เหล็กราว 22 ปี'
      ]
    },
    {
      tab: 'ดวงอาทิตย์\nกับโลก',
      title: 'ดวงอาทิตย์กับโลก',
      stat: { big: '8 นาที 20 วิ', label: 'เวลาที่แสงเดินทางถึงโลก' },
      body: [
        'พลังงานจากดวงอาทิตย์ขับเคลื่อนภูมิอากาศ วัฏจักรน้ำ และการสังเคราะห์ด้วยแสงของพืช ซึ่งเป็นฐานของห่วงโซ่อาหารเกือบทั้งหมดบนโลก',
        'สนามแม่เหล็กโลกเบี่ยงเบนอนุภาคมีประจุจากลมสุริยะส่วนใหญ่ บางส่วนถูกนำไปสู่บริเวณขั้วโลกและชนกับก๊าซในบรรยากาศ เกิดเป็นแสงออโรรา (Aurora)',
        'เมื่อเกิดพายุสุริยะรุนแรง อาจรบกวนดาวเทียม วิทยุสื่อสาร และระบบนำทางได้ นักวิทยาศาสตร์จึงติดตามและพยากรณ์สภาพอวกาศ (Space Weather) เพื่อเตรียมรับมือ'
      ],
      more: [
        'ปี 1989 พายุแม่เหล็กโลกจากกิจกรรมสุริยะทำให้ระบบไฟฟ้าในแคว้นควิเบกของแคนาดาดับราว 9 ชั่วโมง เหตุการณ์นี้ทำให้การเฝ้าระวังสภาพอวกาศมีความสำคัญมากขึ้น',
        'พายุรุนแรงระดับนั้นพบได้ไม่บ่อย และผู้คนบนพื้นโลกได้รับการปกป้องจากบรรยากาศและสนามแม่เหล็กโลก ผลกระทบหลักอยู่ที่ระบบเทคโนโลยี ไม่ใช่ตัวเรา',
        'ช่วงที่กิจกรรมสุริยะสูง แสงออโรรามักปรากฏในละติจูดที่ต่ำลงกว่าปกติ'
      ]
    },
    {
      tab: 'ความเข้าใจผิด\nที่พบบ่อย',
      title: 'ความเข้าใจผิดที่พบบ่อย',
      stat: { big: 'ไม่ใช่ไฟ', label: 'ฟิวชัน ไม่ใช่การเผาไหม้' },
      body: [
        'ไม่ใช่ก้อนเปลวไฟ: ไม่มีออกซิเจนให้เผาไหม้แบบเคมี พลังงานมาจากนิวเคลียร์ฟิวชันที่แกนกลาง',
        'ไม่มีพื้นผิวแข็ง: คำว่า "พื้นผิว" หมายถึงชั้นโฟโตสเฟียร์ ซึ่งเป็นก๊าซร้อนที่ปล่อยแสงที่เรามองเห็น',
        'ไม่ได้หมุนเป็นก้อนเดียวกัน: เส้นศูนย์สูตรหมุนเร็วกว่าบริเวณขั้ว',
        'สีที่เห็นไม่ใช่สีจริงเสมอไป: ภาพสีส้มหรือทองจากกล้องดาราศาสตร์มักผ่านฟิลเตอร์หรือแต่งสีเพื่อแสดงช่วงคลื่นแสง'
      ],
      more: [
        'ความร้อนของโคโรนายังเป็นหัวข้อวิจัยที่เปิดอยู่ ยังไม่มีคำอธิบายเดียวที่ได้รับการยืนยันเต็มที่',
        'คำว่า "ดาวแคระเหลือง" เป็นชื่อประเภทของดาว (G2V) ไม่ได้แปลว่าเล็ก ดวงอาทิตย์มีมวลมากกว่าโลกราว 333,000 เท่า',
        'ดวงอาทิตย์เป็นดาวขนาดกลาง ๆ ที่ธรรมดามากในหมู่ดาวฤกษ์ แต่สำหรับเราแล้วมันเป็นแหล่งพลังงานหลักของระบบสุริยะ'
      ]
    }
  ];

  // --------------------------------------------------------------------------
  // เครื่องมือช่วยวัดข้อความ: ใช้อัลกอริทึมตัดบรรทัดชุดเดียวกับ txt() ใน index.html
  // เพื่อคำนวณความสูงของย่อหน้าล่วงหน้า และเลือกขนาดตัวอักษรที่พอดีกับพื้นที่
  // --------------------------------------------------------------------------
  let measureCtx;
  function getMeasureCtx() {
    if (measureCtx === undefined) {
      try { measureCtx = document.createElement('canvas').getContext('2d') || null; }
      catch (e) { measureCtx = null; }
    }
    return measureCtx;
  }

  function countLines(text, size) {
    const maxWidth = 944; // ค่าเดียวกับ txt() ใน index.html
    const ctx = getMeasureCtx();
    let lines = 0;
    String(text).split('\n').forEach(raw => {
      if (!ctx) { lines += Math.max(1, Math.ceil(raw.length * size * 0.58 / maxWidth)); return; }
      ctx.font = 'bold ' + size + 'px ' + FONT;
      if (ctx.measureText(raw).width <= maxWidth) { lines += 1; return; }
      let current = '', count = 0;
      for (const ch of raw) {
        if (ctx.measureText(current + ch).width > maxWidth) { count++; current = ch; }
        else current += ch;
      }
      if (current) count++;
      lines += count;
    });
    return lines;
  }

  function paraHeight(text, size, width, ratio) {
    const h = Math.max(84, Math.ceil(countLines(text, size) * size * ratio + 32));
    return width * h / 1024;
  }

  function layoutBody(paras, width, available, gap) {
    let result = null;
    for (let size = 42; size >= 30; size -= 2) {
      const heights = paras.map(t => paraHeight(t, size, width, 1.3));
      const total = heights.reduce((a, b) => a + b, 0) + gap * (paras.length - 1);
      result = { size, heights };
      if (total <= available) break;
    }
    return result;
  }

  function refreshRays() {
    const targets = [
      document.querySelector('a-scene'),
      document.querySelector('#desktop-cursor'),
      document.getElementById('right-controller'),
      document.getElementById('left-controller')
    ];
    targets.forEach(el => {
      const rc = el && el.components && el.components.raycaster;
      if (rc && typeof rc.refreshObjects === 'function') rc.refreshObjects();
    });
  }

  function disposeTree(el) {
    try {
      const root = el && el.object3D;
      if (!root || !root.traverse) return;
      root.traverse(o => {
        if (o.material) {
          if (o.material.map && o.material.map.dispose) o.material.map.dispose();
        }
      });
    } catch (e) { /* ไม่ให้การเก็บกวาดทำให้การ์ดล้ม */ }
  }

  function hasSunQuiz() {
    const q = window.PLANET_QUIZ && window.PLANET_QUIZ.sun;
    return Array.isArray(q) && q.length > 0;
  }

  // --------------------------------------------------------------------------
  // ตัววาดการ์ดดวงอาทิตย์แบบหลายหน้า (เรียกจาก showInfo ผ่าน renderCard เฉพาะดวงอาทิตย์)
  // --------------------------------------------------------------------------
  function renderSunCard(container, p, api) {
    const cfg = p.card || {};
    const s = p.style || {};
    const state = { page: 0, more: false };

    api.basePanel(p.name, p.en, s, container, cfg);
    api.renderCardDecorations(p, container, cfg);
    const sphere = api.planetImage(p, container, cfg);
    // ทรงกลมยื่นเข้าหาผู้ชม ขณะที่วงแหวนแบนอยู่ด้านหลัง และโมเดลอยู่ทางซ้ายของแกนมอง ทำให้ทรงกลมดูเยื้องไปทางซ้ายเล็กน้อย
    // (parallax) จึงขยับเฉพาะทรงกลมของดวงอาทิตย์ไปทางขวาเพื่อให้อยู่กึ่งกลางวงแหวน ปรับค่าได้ที่ MODEL_NUDGE
    if (sphere && typeof sphere.setAttribute === 'function') sphere.setAttribute('position', MODEL_NUDGE);

    const dyn = api.make('a-entity', { id: 'sun-card-dynamic' }, container);

    function clearDyn() {
      while (dyn.firstChild) {
        disposeTree(dyn.firstChild);
        dyn.removeChild(dyn.firstChild);
      }
    }

    function go(page, more) {
      if (page === state.page && more === state.more) return;
      state.page = page;
      state.more = more;
      build();
    }

    function build() {
      clearDyn();
      const pg = SUN_PAGES[state.page];

      // --- แท็บ 6 หน้า ---
      const tabW = 0.372, tabH = 0.15, gap = 0.03;
      const x0 = -1.19 + tabW / 2;
      SUN_PAGES.forEach((t, i) => {
        const active = i === state.page;
        api.button(
          dyn, t.tab, (x0 + i * (tabW + gap)).toFixed(3) + ' 0.5 0.035', tabW, tabH,
          () => go(i, false),
          active ? '#c2410c' : '#0b2a4a',
          active ? '#ea580c' : '#134e7a',
          {
            fontSize: 150, lineHeight: 1.2, fontFamily: FONT, opacity: 1,
            textColor: active ? '#fff7ed' : '#bff4ff',
            borderColor: active ? '#ffb45e' : '#7deaff', borderThickness: 0.005
          }
        );
      });

      // --- ระดับที่ 1: ตัวเลขเด่นใต้โมเดล ---
      api.make('a-plane', {
        position: '-0.80 -0.525 0.03', width: 0.92, height: 0.21,
        material: 'shader: flat; color: #3b1405; opacity: 0.55; transparent: true; side: double'
      }, dyn);
      api.txt(dyn, pg.stat.big, '-0.80 -0.472 0.04', 0.86, '#ffd27d', 'center',
        { fontSize: 92, lineHeight: 1.15, fontFamily: FONT });
      api.txt(dyn, pg.stat.label, '-0.80 -0.578 0.04', 0.86, '#bff4ff', 'center',
        { fontSize: 52, lineHeight: 1.15, fontFamily: FONT });

      // --- หัวข้อของหน้า ---
      const accent = state.more ? '#7deaff' : '#ffb45e';
      const titleText = state.more ? pg.title + ' · รู้เพิ่มเติม' : pg.title;
      api.txt(dyn, titleText, '-0.22 0.335 0.04', 1.40, accent, 'left',
        { fontSize: 54, lineHeight: 1.1, fontFamily: FONT });
      api.make('a-plane', {
        position: '0.48 0.283 0.03', width: 1.40, height: 0.004,
        material: 'shader: flat; color: ' + accent + '; opacity: 0.55; side: double'
      }, dyn);

      // --- ระดับที่ 2 / 3: ย่อหน้าเนื้อหา (วางซ้อนต่อกันจากบนลงล่าง ตัวหน้าย่อหน้าเป็นสี่เหลี่ยมข้าง ๆ) ---
      const paras = state.more ? pg.more : pg.body;
      const bodyW = 1.40, top = 0.25, bottom = -0.60, pGap = 0.03;
      const lay = layoutBody(paras, bodyW, top - bottom, pGap);
      let cursor = top;
      paras.forEach((text, i) => {
        const h = lay.heights[i];
        const el = api.txt(dyn, text, '-0.20 ' + (cursor - h / 2).toFixed(3) + ' 0.04', bodyW, '#eaf6ff', 'left',
          { fontSize: lay.size, lineHeight: 1.3, fontFamily: FONT });
        if (el && typeof el.setAttribute === 'function') {
          el.setAttribute('position', (-0.20 + bodyW / 2).toFixed(3) + ' ' + (cursor - h / 2).toFixed(3) + ' 0.04');
        }
        api.make('a-plane', {
          position: '-0.245 ' + (cursor - 0.045).toFixed(3) + ' 0.04', width: 0.024, height: 0.024, rotation: '0 0 45',
          material: 'shader: flat; color: ' + accent + '; opacity: 0.95; side: double'
        }, dyn);
        cursor -= h + pGap;
      });

      // --- ปุ่มด้านล่าง ---
      const by = '-0.745', bw = 0.62, bh = 0.15;
      api.button(dyn, 'ปิดการ์ด', '-0.72 ' + by + ' 0.035', bw, bh, () => api.closeUI(),
        '#0b2a4a', '#134e7a',
        { fontSize: 100, lineHeight: 1.2, fontFamily: FONT, opacity: 1, textColor: '#bff4ff', borderColor: '#7deaff', borderThickness: 0.006 });
      api.button(dyn, state.more ? 'ย้อนกลับ' : 'รู้เพิ่มเติม', '0 ' + by + ' 0.035', bw, bh,
        () => go(state.page, !state.more),
        '#0f3a5f', '#165a8a',
        { fontSize: 100, lineHeight: 1.2, fontFamily: FONT, opacity: 1, textColor: '#e6fbff', borderColor: '#7deaff', borderThickness: 0.006 });
      if (hasSunQuiz()) {
        api.button(dyn, 'เริ่มมินิเกม', '0.72 ' + by + ' 0.035', bw, bh, () => api.startQuiz(p),
          '#c2410c', '#ea580c',
          { fontSize: 100, lineHeight: 1.2, fontFamily: FONT, opacity: 1, textColor: '#fff7ed', borderColor: '#ffb45e', borderThickness: 0.006 });
      }

      setTimeout(refreshRays, 0);
    }

    build();
  }

  // ถอยกลับไปใช้ตัววาดมาตรฐานของระบบหากตัววาดแบบใหม่ผิดพลาด (ใช้ค่าจาก card.* ด้านล่าง)
  function renderSunCardSafe(container, p, api) {
    try {
      renderSunCard(container, p, api);
    } catch (err) {
      if (window.console) console.error('[Sun card] ใช้ตัววาดมาตรฐานแทน เพราะเกิดข้อผิดพลาด:', err);
      while (container.firstChild) container.removeChild(container.firstChild);
      const cfg = p.card || {};
      api.basePanel(p.name, p.en, p.style || {}, container, cfg);
      api.renderCardDecorations(p, container, cfg);
      const preview = api.planetImage(p, container, cfg);
      api.renderCardContent(p, container, cfg);
      api.renderCardButtons(p, container, cfg, preview);
    }
  }

  window.PLANET_DATA.push({
    id: 'sun',
    name: 'ดวงอาทิตย์',
    en: 'Sun',
    info: 'ดาวฤกษ์ใจกลางระบบสุริยะ แหล่งพลังงานหลักของโลก',

    // ใช้เป็นข้อมูลสำรองเมื่อระบบตกกลับไปใช้ตัววาดการ์ดมาตรฐาน
    facts: [
      'ดาวฤกษ์ใจกลางระบบสุริยะ',
      'ประกอบด้วยไฮโดรเจนและฮีเลียมเป็นหลัก',
      'อุณหภูมิพื้นผิวประมาณ 5,500 °C',
      'สร้างพลังงานจากปฏิกิริยานิวเคลียร์ฟิวชัน',
      'แรงโน้มถ่วงของดวงอาทิตย์ยึดเหนี่ยวดาวเคราะห์ในระบบสุริยะ'
    ],

    texture: 'assets/images/sun.jpg',
    color: '#ff8a24',
    radius: 1.15,

    // การ์ดแบบ Holographic Futuristic: ซ้าย = ทรงกลมดวงอาทิตย์ 3D + ตัวเลขเด่น, ขวา = ความรู้แบบแท็บ, ล่าง = ปุ่มควบคุม
    style: {
      panelBgColor: '#06122a',
      panelBorderColor: '#ff9b42',
      titleColor: '#ffb45e',
      subtitleColor: '#7deaff',
      textColor: '#eaf6ff',
      buttonColor: '#0b2a4a',
      buttonHoverColor: '#134e7a',
      closeButtonColor: '#0b2a4a',
      highlightColor: '#7deaff',
      fontSize: 44
    },

    renderCard: renderSunCardSafe,

    card: {
      width: 2.65,
      height: 1.80,
      // กล้องอยู่สูง 3 ม. เหนือดวงอาทิตย์ในฉาก (ผิวดวงอาทิตย์ใกล้กล้องที่สุด ~1.15 ม.) จึงเลื่อนการ์ดเข้ามาอยู่ ~0.85 ม.
      // ให้อยู่หน้าผิวดวงอาทิตย์เสมอ แล้วย่อ scale ลงให้ขนาดที่มองเห็นเท่าเดิม
      position: '0 0 0.95',
      scale: 0.47,
      rotation: '0 0 0',
      distance: 1.8,
      layout: 'horizontal',

      // พื้นหลังทึบ (opacity 1) เพื่อไม่ให้ดาวดวงอื่นทะลุมารบกวนข้อความ
      background: {
        color: '#06122a',
        opacity: 0.70,
        image: ''
      },

      border: {
        style: 'frame',
        color: '#ff9b42',
        thickness: 0.012,
        cornerSize: 0.12,
        cornerColor: '#ff9b42',
        glowColor: '#ff7a18',
        glowOpacity: 0.10
      },

      header: {
        show: true,
        title: 'ดวงอาทิตย์',
        subtitle: 'S U N  ·  ศูนย์กลางแห่งระบบสุริยะ',
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
        showCaption: false,
        position: '-0.80 0 0.035',
        modelRadius: 0.30,
        frameColor: '#ffb45e'
      },

      // ใช้เฉพาะตอนตกกลับไปใช้ตัววาดมาตรฐาน
      content: {
        position: '0.47 -0.05 0.03',
        width: 1.38,
        maxHeight: 0.80,
        fontSize: 44,
        minFontSize: 28,
        lineHeight: 1.3,
        align: 'left',
        bullet: ''
      },

      sections: [],

      decorations: [
        // แผ่นกระจกจางๆ ด้านซ้าย (โมเดล) และด้านขวา (ความรู้)
        { type: 'plane', position: '-0.80 -0.125 0.006', width: 0.92, height: 1.04, color: '#0d2a52', opacity: 0.25 },
        { type: 'plane', position: '0.47 -0.11 0.006', width: 1.50, height: 0.98, color: '#0a2147', opacity: 0.32 },

        // เส้นกรอบบางสีฟ้า (hairline) ซ้อนด้านในกรอบสีส้ม
        { type: 'plane', position: '0 0.835 0.012', width: 2.46, height: 0.004, color: '#7deaff', opacity: 0.5 },
        { type: 'plane', position: '0 -0.835 0.012', width: 2.46, height: 0.004, color: '#7deaff', opacity: 0.5 },
        { type: 'plane', position: '-1.23 0 0.012', width: 0.004, height: 1.67, color: '#7deaff', opacity: 0.5 },
        { type: 'plane', position: '1.23 0 0.012', width: 0.004, height: 1.67, color: '#7deaff', opacity: 0.5 },

        // วงโคจรบางๆ รอบโมเดล พร้อมดาวบริวารจุดเล็ก (อยู่หลังทรงกลม ไม่บังผิวดวงอาทิตย์)
        { type: 'ring', position: '-0.80 0 0.016', radiusInner: 0.408, radiusOuter: 0.412, color: '#7deaff', opacity: 0.55 },
        { type: 'circle', position: '-0.565 0.336 0.02', radius: 0.014, color: '#7deaff', opacity: 0.9 },
        { type: 'circle', position: '-1.136 -0.235 0.02', radius: 0.010, color: '#ffb45e', opacity: 0.9 }
      ],

      buttonLayout: {
        mode: 'custom',
        position: '0 -0.745 0.035',
        spacing: 0.06
      },

      // ปุ่มสำหรับตัววาดมาตรฐาน (fallback) — มีปุ่มเริ่มมินิเกมด้วย
      buttons: [
        {
          id: 'close',
          enabled: true,
          label: 'ปิดการ์ด',
          action: 'close',
          position: '-0.72 -0.745 0.035',
          width: 0.62,
          height: 0.15,
          color: '#0b2a4a',
          hoverColor: '#134e7a',
          textColor: '#bff4ff',
          borderColor: '#7deaff',
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
          color: '#c2410c',
          hoverColor: '#ea580c',
          textColor: '#fff7ed',
          borderColor: '#ffb45e',
          borderThickness: 0.006,
          fontSize: 100,
          opacity: 1
        }
      ]
    }
  });
})();
