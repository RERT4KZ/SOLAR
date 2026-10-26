// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: ดาวพฤหัสบดี (Jupiter) — การ์ดข้อมูลแบบหลายหน้า (Holographic Futuristic)
// ไฟล์: data/planets/jupiter.js
// ============================================================================
// โครงสร้าง: การ์ดมี 6 แท็บ (ภาพรวม / โครงสร้าง / พายุจุดแดงใหญ่ / ดวงจันทร์ / ภารกิจสำรวจ / ความเข้าใจผิด)
// แต่ละแท็บมี 3 ระดับ: (1) ตัวเลขเด่นด้านซ้าย (2) ย่อหน้าความรู้หลัก (3) ปุ่ม "รู้เพิ่มเติม" เปิดความรู้เสริม
// ข้อมูลทั้งหมดอยู่ในอาร์เรย์ PAGES ด้านล่าง แก้ข้อความได้ที่นั่นโดยไม่ต้องแตะโค้ดวาดการ์ด
//
// ความปลอดภัยต่อดาวดวงอื่น: ไฟล์นี้ลงทะเบียนเฉพาะ id 'jupiter' และไม่แก้ค่าส่วนกลางใด ๆ
// หากการวาดการ์ดแบบใหม่เกิดข้อผิดพลาด จะถอยกลับไปใช้ตัววาดการ์ดมาตรฐานของระบบ (fallback) โดยอัตโนมัติ
//
// แหล่งข้อมูลตัวเลข: NASA (science.nasa.gov/jupiter), ESA, NASA/JPL
// ============================================================================

window.PLANET_DATA = window.PLANET_DATA || [];

window.PLANET_DATA = window.PLANET_DATA.filter(
  p => p.id !== 'jupiter'
);

(function () {
  const FONT = '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif';
  // ตำแหน่งทรงกลมของดาวในการ์ด (x y z): เพิ่ม x = ขยับไปทางขวา, ลด x = ขยับไปทางซ้าย
  const MODEL_NUDGE = '0 0 0';

  // --------------------------------------------------------------------------
  // เนื้อหาความรู้ (แก้ไขข้อความที่นี่)
  //   tab   : ป้ายแท็บ (ขึ้นบรรทัดใหม่ด้วย \n ได้ 1 ครั้ง)
  //   title : หัวข้อของหน้า
  //   stat  : { big, label } ตัวเลขเด่นด้านซ้ายใต้โมเดล
  //   body  : ย่อหน้าความรู้หลัก (ระดับที่ 2)
  //   more  : ความรู้เพิ่มเติม (ระดับที่ 3 แสดงเมื่อกดปุ่ม "รู้เพิ่มเติม")
  // --------------------------------------------------------------------------
  const PAGES = [
    {
      tab: 'ภาพรวม',
      title: 'ทำความรู้จักดาวพฤหัสบดี',
      stat: { big: 'ราว 11 เท่า', label: 'กว้างกว่าโลก (ราว 143,000 กม.)' },
      body: [
        'ดาวพฤหัสบดีเป็นดาวเคราะห์ลำดับที่ 5 จากดวงอาทิตย์ และใหญ่ที่สุดในระบบสุริยะ เป็นดาวก๊าซยักษ์ที่ประกอบด้วยไฮโดรเจนและฮีเลียมเป็นหลัก ไม่มีพื้นผิวแข็ง',
        'มีมวลมากกว่าดาวเคราะห์ดวงอื่นรวมกันทั้งหมดถึงกว่า 2 เท่า และมีปริมาตรมากพอจะบรรจุโลกได้ราว 1,300 ใบ',
        'ห่างจากดวงอาทิตย์โดยเฉลี่ยราว 778 ล้านกิโลเมตร (ราว 5.2 AU) ใช้เวลาโคจรรอบดวงอาทิตย์ครบหนึ่งรอบราว 12 ปีโลก'
      ],
      more: [
        'หมุนรอบตัวเองเร็วที่สุดในบรรดาดาวเคราะห์ หนึ่งวันยาวเพียงราว 10 ชั่วโมง ทำให้ดาวป่องออกที่เส้นศูนย์สูตรและแบนที่ขั้ว',
        'แกนหมุนเอียงเพียงราว 3 องศา จึงแทบไม่มีฤดูกาลเปลี่ยนแปลงเหมือนบนโลก',
        'มองเห็นด้วยตาเปล่าเป็นจุดสว่างบนท้องฟ้า มักสว่างเป็นอันดับ 3 รองจากดวงจันทร์และดาวศุกร์ และใช้กล้องส่องทางไกลก็เห็นดวงจันทร์ใหญ่ทั้ง 4 ดวงได้'
      ]
    },
    {
      tab: 'โครงสร้าง\nและบรรยากาศ',
      title: 'จากแกนกลางสู่ยอดเมฆ',
      stat: { big: '−108 °C', label: 'อุณหภูมิใกล้ยอดเมฆ (ที่ 1 บาร์)' },
      body: [
        'ภายในไม่มีพื้นผิวแข็ง ยิ่งลึกความดันยิ่งสูง จนไฮโดรเจนมีสภาพคล้ายของเหลว และลึกมากพอจะกลายเป็นไฮโดรเจนโลหะที่นำไฟฟ้าได้ ส่วนแกนกลางยังไม่แน่ชัดว่าเป็นอย่างไร',
        'บรรยากาศส่วนใหญ่เป็นไฮโดรเจนราว 90% และฮีเลียมราว 10% มีเมฆแอมโมเนียและสารอื่นเรียงเป็นแถบสีส้ม น้ำตาล และขาวขนานกับเส้นศูนย์สูตร',
        'แถบสว่าง (Zone) คืออากาศที่ลอยขึ้น ส่วนแถบมืด (Belt) คืออากาศที่จมลง ลมที่พัดสวนทางกันตามแนวแถบก่อให้เกิดกระแสวนและพายุ'
      ],
      more: [
        'ข้อมูลจากยานจูโนชี้ว่าแกนกลางอาจไม่ใช่ก้อนแข็งที่ชัดเจน แต่ค่อย ๆ ผสมกับชั้นไฮโดรเจนด้านบน เรื่องนี้ยังเป็นหัวข้อที่นักวิทยาศาสตร์ศึกษากันอยู่',
        'ดาวพฤหัสบดีมีสนามแม่เหล็กแรงที่สุดในบรรดาดาวเคราะห์ ทำให้เกิดแสงออโรราที่ขั้วทั้งสอง และบริเวณใกล้ดวงจันทร์ชั้นในมีรังสีรุนแรงมาก',
        'ดาวพฤหัสบดีมีวงแหวนเช่นกัน แต่จางมากและประกอบด้วยฝุ่นละเอียดเป็นหลัก ยานวอยเอเจอร์ 1 ตรวจพบในปี 1979'
      ]
    },
    {
      tab: 'พายุ\nจุดแดงใหญ่',
      title: 'จุดแดงใหญ่และพายุยักษ์',
      stat: { big: 'ราว 430 กม./ชม.', label: 'ความเร็วลมสูงสุดที่ขอบจุดแดงใหญ่' },
      body: [
        'จุดแดงใหญ่ (Great Red Spot) คือพายุหมุนขนาดมหึมาในซีกใต้ของดาว ปัจจุบันกว้างกว่าโลกเล็กน้อย และหมุนทวนเข็มนาฬิกาเมื่อมองจากด้านบน',
        'พายุนี้ถูกสังเกตอย่างต่อเนื่องอย่างน้อยตั้งแต่ปี 1831 และจากการวัดตลอดร้อยกว่าปีที่ผ่านมา ขนาดของมันหดตัวลงเรื่อย ๆ',
        'ดาวพฤหัสบดียังมีพายุอื่นอีกมาก เช่น พายุสีขาวรูปไข่ และกลุ่มพายุหมุนจำนวนมากรอบขั้ว ซึ่งยานจูโนถ่ายภาพไว้ได้'
      ],
      more: [
        'นักวิทยาศาสตร์เชื่อว่าพายุอยู่ได้นานเพราะดาวไม่มีพื้นผิวแข็งมาเสียดสีให้อ่อนกำลังลง ต่างจากพายุบนโลกที่สลายเมื่อขึ้นบก',
        'ยังไม่แน่ชัดว่าจุดแดงใหญ่ที่เห็นในปัจจุบันเป็นพายุเดียวกับจุดที่นักดาราศาสตร์บันทึกไว้ในศตวรรษที่ 17 หรือไม่ งานวิจัยบางชิ้นชี้ว่าอาจเป็นคนละพายุ',
        'สีแดงของพายุเกิดจากสารเคมีในบรรยากาศที่ยังอธิบายไม่ได้ทั้งหมด สีของแถบเมฆแต่ละแถบก็เช่นกัน'
      ]
    },
    {
      tab: 'ดวงจันทร์\nกาลิเลียน',
      title: 'ดวงจันทร์ของดาวพฤหัสบดี',
      stat: { big: 'กว่า 90 ดวง', label: 'ดวงจันทร์ที่ยืนยันแล้ว' },
      body: [
        'กาลิเลโอค้นพบดวงจันทร์ใหญ่ 4 ดวงในปี 1610 ได้แก่ ไอโอ ยูโรปา แกนีมีด และคัลลิสโต เรียกรวมกันว่าดวงจันทร์กาลิเลียน',
        'แกนีมีดเป็นดวงจันทร์ที่ใหญ่ที่สุดในระบบสุริยะ ใหญ่กว่าดาวพุธ และเป็นดวงจันทร์ดวงเดียวที่รู้ว่ามีสนามแม่เหล็กของตัวเอง',
        'ไอโอมีภูเขาไฟปะทุมากที่สุดในระบบสุริยะ ส่วนยูโรปามีมหาสมุทรน้ำเหลวใต้เปลือกน้ำแข็ง จึงเป็นเป้าหมายสำคัญในการค้นหาสิ่งมีชีวิตนอกโลก'
      ],
      more: [
        'แรงไทดัลจากดาวพฤหัสบดีและดวงจันทร์ดวงอื่นบีบนวดภายในไอโอ ทำให้เกิดความร้อนมหาศาลและภูเขาไฟปะทุอยู่ตลอด',
        'คัลลิสโตมีพื้นผิวเก่าแก่เต็มไปด้วยหลุมอุกกาบาต และแกนีมีดกับคัลลิสโตก็อาจมีมหาสมุทรซ่อนอยู่ใต้ผิวเช่นกัน',
        'ดวงจันทร์ส่วนใหญ่ที่เหลือมีขนาดเล็กมาก หลายดวงน่าจะเป็นวัตถุที่ถูกแรงโน้มถ่วงของดาวจับไว้ และจำนวนที่ยืนยันยังเพิ่มขึ้นเรื่อย ๆ'
      ]
    },
    {
      tab: 'ภารกิจ\nสำรวจ',
      title: 'ยานที่ไปเยือนดาวพฤหัสบดี',
      stat: { big: '2016', label: 'ปีที่ยานจูโนเข้าสู่วงโคจร' },
      body: [
        'ยานที่บินผ่านดาวพฤหัสบดี ได้แก่ ไพโอเนียร์ 10 (1973), ไพโอเนียร์ 11 (1974) และวอยเอเจอร์ 1 กับ 2 (1979)',
        'ยานกาลิเลโอของ NASA เป็นยานลำแรกที่โคจรรอบดาวพฤหัสบดี (1995–2003) และปล่อยหัววัดลงสู่บรรยากาศของดาว',
        'ยานจูโน (Juno) เข้าสู่วงโคจรในปี 2016 เพื่อศึกษาบรรยากาศ โครงสร้างภายใน และสนามแม่เหล็ก โดยบินผ่านใกล้ขั้วทั้งสองของดาว'
      ],
      more: [
        'ภารกิจกาลิเลโอจบลงในปี 2003 เมื่อยานถูกบังคับให้พุ่งเข้าสู่บรรยากาศดาวพฤหัสบดี เพื่อไม่ให้ปนเปื้อนดวงจันทร์ เช่น ยูโรปา',
        'ยานยูโรปาคลิปเปอร์ (Europa Clipper) ของ NASA ปล่อยตัวในปี 2024 เพื่อสำรวจยูโรปา และคาดว่าจะถึงระบบดาวพฤหัสบดีราวปี 2030',
        'ยานจูซ (JUICE) ขององค์การอวกาศยุโรป ปล่อยตัวในปี 2023 เพื่อสำรวจแกนีมีด คัลลิสโต และยูโรปา คาดว่าจะถึงราวปี 2031'
      ]
    },
    {
      tab: 'ความเข้าใจผิด\nที่พบบ่อย',
      title: 'ความเข้าใจผิดที่พบบ่อย',
      stat: { big: 'ไม่ใช่ดาวฤกษ์', label: 'มวลน้อยเกินกว่าจะเกิดฟิวชัน' },
      body: [
        'ไม่ใช่ "ดาวฤกษ์ที่ล้มเหลว": ดาวพฤหัสบดีมีมวลเพียงราว 1 ใน 1,000 ของดวงอาทิตย์ ต้องมีมวลมากกว่านี้ราว 80 เท่าจึงจะเกิดฟิวชันไฮโดรเจนเป็นดาวฤกษ์ได้',
        'ไม่มีพื้นผิวให้ยืน: เป็นก๊าซยักษ์ ถ้าดิ่งลงไปจะพบความดันและอุณหภูมิที่สูงขึ้นเรื่อย ๆ',
        'ไม่ใช่ดาวเคราะห์ดวงเดียวที่มีวงแหวน: ดาวพฤหัสบดีก็มีวงแหวนจาง ๆ เช่นกัน แต่มองเห็นยากกว่าวงแหวนของดาวเสาร์มาก'
      ],
      more: [
        'จุดแดงใหญ่ไม่ใช่ภูเขาหรือแผ่นดิน แต่เป็นพายุในชั้นบรรยากาศ',
        'คำว่า "ผู้พิทักษ์โลก" เป็นการพูดที่ง่ายเกินไป แรงโน้มถ่วงของดาวพฤหัสบดีอาจเบี่ยงดาวหางบางดวงออกไป แต่ก็อาจส่งบางดวงเข้าใกล้โลกได้เช่นกัน',
        'สีสันจัดจ้านในภาพถ่ายหลายภาพมักผ่านการปรับแต่งเพื่อเน้นรายละเอียด สีจริงของดาวเป็นแถบสีครีม ส้ม และน้ำตาล'
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

  function hasQuiz() {
    const q = window.PLANET_QUIZ && window.PLANET_QUIZ['jupiter'];
    return Array.isArray(q) && q.length > 0;
  }

  // --------------------------------------------------------------------------
  // ตัววาดการ์ดแบบหลายหน้า (เรียกจาก showInfo ผ่าน renderCard เฉพาะดาวดวงนี้)
  // --------------------------------------------------------------------------
  function renderPlanetCard(container, p, api) {
    const cfg = p.card || {};
    const s = p.style || {};
    const state = { page: 0, more: false };

    api.basePanel(p.name, p.en, s, container, cfg);
    api.renderCardDecorations(p, container, cfg);
    const sphere = api.planetImage(p, container, cfg);
    if (sphere && typeof sphere.setAttribute === 'function') sphere.setAttribute('position', MODEL_NUDGE);

    const dyn = api.make('a-entity', { id: 'jupiter-card-dynamic' }, container);

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
      const pg = PAGES[state.page];

      // --- แท็บ 6 หน้า ---
      const tabW = 0.372, tabH = 0.15, gap = 0.03;
      const x0 = -1.19 + tabW / 2;
      PAGES.forEach((t, i) => {
        const active = i === state.page;
        api.button(
          dyn, t.tab, (x0 + i * (tabW + gap)).toFixed(3) + ' 0.5 0.035', tabW, tabH,
          () => go(i, false),
          active ? '#b45309' : '#2e2218',
          active ? '#d97706' : '#5c3512',
          {
            fontSize: 112, lineHeight: 1.2, fontFamily: FONT, opacity: 1,
            textColor: active ? '#fff7ed' : '#fde8cc',
            borderColor: active ? '#fbbf24' : '#d6a37c', borderThickness: 0.005
          }
        );
      });

      // --- ระดับที่ 1: ตัวเลขเด่นใต้โมเดล ---
      api.make('a-plane', {
        position: '-0.80 -0.525 0.03', width: 0.92, height: 0.21,
        material: 'shader: flat; color: #2b1405; opacity: 0.55; transparent: true; side: double'
      }, dyn);
      api.txt(dyn, pg.stat.big, '-0.80 -0.472 0.04', 0.86, '#fbbf24', 'center',
        { fontSize: 92, lineHeight: 1.15, fontFamily: FONT });
      api.txt(dyn, pg.stat.label, '-0.80 -0.578 0.04', 0.86, '#fde8cc', 'center',
        { fontSize: 52, lineHeight: 1.15, fontFamily: FONT });

      // --- หัวข้อของหน้า ---
      const accent = state.more ? '#e8c9a8' : '#fbbf24';
      const titleText = state.more ? pg.title + ' · รู้เพิ่มเติม' : pg.title;
      api.txt(dyn, titleText, '-0.22 0.335 0.04', 1.40, accent, 'left',
        { fontSize: 54, lineHeight: 1.1, fontFamily: FONT });
      api.make('a-plane', {
        position: '0.48 0.283 0.03', width: 1.40, height: 0.004,
        material: 'shader: flat; color: ' + accent + '; opacity: 0.55; side: double'
      }, dyn);

      // --- ระดับที่ 2 / 3: ย่อหน้าเนื้อหา (วางซ้อนต่อกันจากบนลงล่าง มีสี่เหลี่ยมข้างหน้าย่อหน้า) ---
      const paras = state.more ? pg.more : pg.body;
      const bodyW = 1.40, top = 0.25, bottom = -0.60, pGap = 0.03;
      const lay = layoutBody(paras, bodyW, top - bottom, pGap);
      let cursor = top;
      paras.forEach((text, i) => {
        const h = lay.heights[i];
        const el = api.txt(dyn, text, '-0.20 ' + (cursor - h / 2).toFixed(3) + ' 0.04', bodyW, '#fff7ed', 'left',
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
        '#2e2218', '#5c3512',
        { fontSize: 100, lineHeight: 1.2, fontFamily: FONT, opacity: 1, textColor: '#fde8cc', borderColor: '#d6a37c', borderThickness: 0.006 });
      api.button(dyn, state.more ? 'ย้อนกลับ' : 'รู้เพิ่มเติม', '0 ' + by + ' 0.035', bw, bh,
        () => go(state.page, !state.more),
        '#3f2e21', '#574130',
        { fontSize: 100, lineHeight: 1.2, fontFamily: FONT, opacity: 1, textColor: '#fff7ed', borderColor: '#d6a37c', borderThickness: 0.006 });
      if (hasQuiz()) {
        api.button(dyn, 'เริ่มมินิเกม', '0.72 ' + by + ' 0.035', bw, bh, () => api.startQuiz(p),
          '#b45309', '#d97706',
          { fontSize: 100, lineHeight: 1.2, fontFamily: FONT, opacity: 1, textColor: '#fff7ed', borderColor: '#fbbf24', borderThickness: 0.006 });
      }

      setTimeout(refreshRays, 0);
    }

    build();
  }

  // ถอยกลับไปใช้ตัววาดมาตรฐานของระบบหากตัววาดแบบใหม่ผิดพลาด (ใช้ค่าจาก card.* ด้านล่าง)
  function renderPlanetCardSafe(container, p, api) {
    try {
      renderPlanetCard(container, p, api);
    } catch (err) {
      if (window.console) console.error('[Jupiter card] ใช้ตัววาดมาตรฐานแทน เพราะเกิดข้อผิดพลาด:', err);
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
    id: 'jupiter',
    name: 'ดาวพฤหัสบดี',
    en: 'Jupiter',
    info: 'ดาวเคราะห์ที่ใหญ่ที่สุดในระบบสุริยะ',

    // ใช้เป็นข้อมูลสำรองเมื่อระบบตกกลับไปใช้ตัววาดการ์ดมาตรฐาน
    facts: [
      'ดาวเคราะห์ลำดับที่ 5 และใหญ่ที่สุดในระบบสุริยะ',
      'ดาวก๊าซยักษ์ ส่วนใหญ่เป็นไฮโดรเจนและฮีเลียม',
      'จุดแดงใหญ่คือพายุมหึมาที่สังเกตพบมานานกว่าร้อยปี',
      'โคจรรอบดวงอาทิตย์ราว 12 ปี',
      'มีดวงจันทร์ที่ยืนยันแล้วกว่า 90 ดวง แกนีมีดใหญ่สุด'
    ],

    color: '#d6a37c',
    radius: 0.68,
    image: '', // ไฟล์ assets/images/jupiter.svg ไม่มีบนเว็บ (ทำให้เกิดกล่องดำ) จึงเว้นว่างไว้
    texture: 'assets/images/jupiter.jpg',

    // การ์ดแบบ Holographic Futuristic: ซ้าย = ทรงกลม 3D + ตัวเลขเด่น, ขวา = ความรู้แบบแท็บ, ล่าง = ปุ่มควบคุม
    style: {
      fontFamily: '',
      fontSize: 44,
      panelBgColor: '#150f0a',
      panelBorderColor: '#f59e0b',
      titleColor: '#fbbf24',
      subtitleColor: '#e8c9a8',
      textColor: '#fff7ed',
      buttonColor: '#2e2218',
      buttonHoverColor: '#5c3512',
      closeButtonColor: '#2e2218',
      highlightColor: '#fbbf24'
    },

    renderCard: renderPlanetCardSafe,

    card: {
      width: 2.65,
      height: 1.80,
      // ย่อการ์ดลงให้มีขนาดที่มองเห็นใกล้เคียงการ์ดเดิมของดาวดวงนี้ (กว้างเดิม 1.94 ≈ 2.65 × 0.75)
      // ปรับ scale ได้: ใหญ่ขึ้น = ค่ามากขึ้น
      position: '0 0 0',
      scale: 0.75,
      rotation: '0 0 0',
      distance: 1.8,
      layout: 'horizontal',

      background: {
        color: '#150f0a',
        opacity: 0.90,
        image: ''
      },

      border: {
        style: 'frame',
        color: '#f59e0b',
        thickness: 0.012,
        cornerSize: 0.12,
        cornerColor: '#f59e0b',
        glowColor: '#d97706',
        glowOpacity: 0.14
      },

      header: {
        show: true,
        title: 'ดาวพฤหัสบดี',
        subtitle: 'J U P I T E R  ·  ราชาแห่งดาวเคราะห์',
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
        showImage: false,
        frameColor: '#fbbf24'
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
        { type: 'plane', position: '-0.80 -0.125 0.006', width: 0.92, height: 1.04, color: '#2b1d10', opacity: 0.35 },
        { type: 'plane', position: '0.47 -0.11 0.006', width: 1.50, height: 0.98, color: '#241608', opacity: 0.40 },

        // เส้นกรอบบางๆ (hairline) ซ้อนด้านในกรอบนอก
        { type: 'plane', position: '0 0.835 0.012', width: 2.46, height: 0.004, color: '#d6a37c', opacity: 0.5 },
        { type: 'plane', position: '0 -0.835 0.012', width: 2.46, height: 0.004, color: '#d6a37c', opacity: 0.5 },
        { type: 'plane', position: '-1.23 0 0.012', width: 0.004, height: 1.67, color: '#d6a37c', opacity: 0.5 },
        { type: 'plane', position: '1.23 0 0.012', width: 0.004, height: 1.67, color: '#d6a37c', opacity: 0.5 },

        // วงโคจรบางๆ รอบโมเดล พร้อมดวงจันทร์จุดเล็ก (อยู่หลังทรงกลม ไม่บังผิวดาว)
        { type: 'ring', position: '-0.80 0 0.016', radiusInner: 0.408, radiusOuter: 0.412, color: '#fbbf24', opacity: 0.45 },
        { type: 'circle', position: '-0.565 0.336 0.02', radius: 0.014, color: '#fbbf24', opacity: 0.9 },
        { type: 'circle', position: '-1.136 -0.235 0.02', radius: 0.010, color: '#d6a37c', opacity: 0.9 }
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
          color: '#2e2218',
          hoverColor: '#5c3512',
          textColor: '#fde8cc',
          borderColor: '#d6a37c',
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
          color: '#b45309',
          hoverColor: '#d97706',
          textColor: '#fff7ed',
          borderColor: '#fbbf24',
          borderThickness: 0.006,
          fontSize: 100,
          opacity: 1
        }
      ]
    }
  });
})();
