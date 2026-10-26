// ============================================================================
// ไฟล์ข้อมูลประจำดวงดาว: ดาวเสาร์ (Saturn) — การ์ดข้อมูลแบบหลายหน้า (Holographic Futuristic)
// ไฟล์: data/planets/saturn.js
// ============================================================================
// โครงสร้าง: การ์ดมี 6 แท็บ (ภาพรวม / โครงสร้าง / วงแหวน / ดวงจันทร์ / ภารกิจสำรวจ / ความเข้าใจผิด)
// แต่ละแท็บมี 3 ระดับ: (1) ตัวเลขเด่นด้านซ้าย (2) ย่อหน้าความรู้หลัก (3) ปุ่ม "รู้เพิ่มเติม" เปิดความรู้เสริม
// ข้อมูลทั้งหมดอยู่ในอาร์เรย์ PAGES ด้านล่าง แก้ข้อความได้ที่นั่นโดยไม่ต้องแตะโค้ดวาดการ์ด
//
// ธีม: Ringed Gold × Deep Space — ทองนวลของดาวเสาร์ + ฟ้าโฮโลแกรม บนพื้นน้ำเงินม่วงเข้มแบบอวกาศ
//      มีวงโคจร ดาวบริวาร (ไททัน/เอนเซลาดัส) และกลุ่มดาวประดับ
//
// ความปลอดภัยต่อดาวดวงอื่น: ไฟล์นี้ลงทะเบียนเฉพาะ id 'saturn' และไม่แก้ค่าส่วนกลางใด ๆ
// หากการวาดการ์ดแบบใหม่เกิดข้อผิดพลาด จะถอยกลับไปใช้ตัววาดการ์ดมาตรฐานของระบบ (fallback) โดยอัตโนมัติ
//
// แหล่งข้อมูลตัวเลข: NASA (science.nasa.gov), ESA, NASA/JPL
// ============================================================================

window.PLANET_DATA = window.PLANET_DATA || [];

window.PLANET_DATA = window.PLANET_DATA.filter(
  p => p.id !== 'saturn'
);

(function () {
  const FONT = '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif';
  // ตำแหน่งทรงกลมของดาวในการ์ด (x y z): เพิ่ม x = ขยับไปทางขวา, ลด x = ขยับไปทางซ้าย
  // (ดวงอาทิตย์ใช้ '0.032 0 0' เพื่อชดเชย parallax — หากเห็นว่าดาวเสาร์เยื้องซ้ายในกล้อง ให้ลองค่า '0.02 0 0')
  const MODEL_NUDGE = '0 0 0';

  // กลุ่มดาวประดับ [x, y, รัศมี, สี, ความทึบ] — วางเฉพาะพื้นที่ว่าง (หัวการ์ด / มุมแผงโมเดล) ไม่ทับข้อความ
  const STARS = [
    // หัวการ์ด ซ้าย-ขวา
    [-1.10, 0.76, 0.008, '#ffffff', 0.85], [-0.95, 0.69, 0.005, '#7deaff', 0.80], [-1.18, 0.66, 0.006, '#fde68a', 0.75],
    [1.05, 0.74, 0.007, '#ffffff', 0.85], [0.92, 0.66, 0.005, '#fde68a', 0.80], [1.17, 0.70, 0.005, '#7deaff', 0.75],
    [1.20, 0.78, 0.006, '#ffffff', 0.70],
    // มุมแผงโมเดล (อยู่นอกวงโคจรรอบดาว)
    [-1.20, 0.30, 0.006, '#ffffff', 0.80], [-0.42, 0.30, 0.005, '#7deaff', 0.80], [-1.24, 0.05, 0.005, '#fde68a', 0.70],
    [-0.37, -0.20, 0.006, '#ffffff', 0.75], [-1.18, -0.28, 0.005, '#7deaff', 0.75], [-0.52, 0.38, 0.004, '#ffffff', 0.65],
    // แถบล่าง ระหว่างปุ่ม
    [-1.15, -0.80, 0.005, '#ffffff', 0.70], [1.15, -0.80, 0.005, '#fde68a', 0.70]
  ];
  const STAR_DECOR = STARS.map(s => ({
    type: 'circle', position: s[0] + ' ' + s[1] + ' 0.018', radius: s[2], color: s[3], opacity: s[4]
  }));

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
      "tab": "ภาพรวม",
      "title": "ทำความรู้จักดาวเสาร์",
      "stat": {
        "big": "ราว 9 เท่า",
        "label": "กว้างกว่าโลก (ราว 116,000 กม.)"
      },
      "body": [
        "ดาวเสาร์เป็นดาวเคราะห์ลำดับที่ 6 จากดวงอาทิตย์ และใหญ่เป็นอันดับ 2 ในระบบสุริยะ รองจากดาวพฤหัสบดี เป็นดาวก๊าซยักษ์ที่ประกอบด้วยไฮโดรเจนและฮีเลียมเป็นหลัก",
        "ห่างจากดวงอาทิตย์โดยเฉลี่ยราว 1,430 ล้านกิโลเมตร (ราว 9.5 AU) ใช้เวลาโคจรรอบดวงอาทิตย์ครบหนึ่งรอบราว 29.5 ปีโลก",
        "มองเห็นดาวเสาร์เป็นจุดสว่างสีเหลืองนวลได้ด้วยตาเปล่า แต่ต้องใช้กล้องโทรทรรศน์จึงจะเห็นวงแหวน"
      ],
      "more": [
        "ดาวเสาร์มีความหนาแน่นเฉลี่ยราว 0.69 g/cm³ ซึ่งน้อยกว่าน้ำ ในทางทฤษฎี ถ้ามีอ่างน้ำที่ใหญ่พอ ดาวเสาร์จะลอยน้ำได้",
        "หมุนรอบตัวเองเร็วมาก หนึ่งวันยาวราว 10.7 ชั่วโมง ทำให้ดาวป่องออกที่เส้นศูนย์สูตรและแบนที่ขั้ว",
        "ที่ขั้วเหนือมีลมหมุนรูปหกเหลี่ยมขนาดใหญ่ ซึ่งยานวอยเอเจอร์พบก่อน และยานแคสสินีศึกษาต่อในภายหลัง"
      ]
    },
    {
      "tab": "โครงสร้าง\nและบรรยากาศ",
      "title": "จากแกนกลางสู่ยอดเมฆ",
      "stat": {
        "big": "−178 °C",
        "label": "อุณหภูมิที่ระดับยอดเมฆ"
      },
      "body": [
        "ดาวเสาร์ไม่มีพื้นผิวแข็ง ภายในเชื่อว่ามีแกนกลางที่เป็นหินและน้ำแข็ง ห่อหุ้มด้วยชั้นไฮโดรเจนโลหะเหลว และชั้นไฮโดรเจนโมเลกุลที่ค่อย ๆ เปลี่ยนเป็นบรรยากาศ",
        "บรรยากาศส่วนใหญ่เป็นไฮโดรเจนราว 96% และฮีเลียมราว 3% มีเมฆเป็นแถบสีเหลืองอ่อน",
        "แถบเมฆของดาวเสาร์ดูจางกว่าของดาวพฤหัสบดี เพราะมีชั้นหมอกด้านบนปกคลุมอยู่"
      ],
      "more": [
        "ลมแถบเส้นศูนย์สูตรของดาวเสาร์แรงได้ถึงราว 1,800 กิโลเมตรต่อชั่วโมง",
        "ดาวเสาร์แผ่ความร้อนออกมามากกว่าที่ได้รับจากดวงอาทิตย์ มีสมมติฐานว่าส่วนหนึ่งมาจากฮีเลียมที่ค่อย ๆ จมลงสู่ภายในดาว",
        "ชั้นต่าง ๆ ไม่มีขอบแข็ง เพราะเป็นก๊าซและของไหล การเปลี่ยนจากชั้นหนึ่งไปอีกชั้นเป็นไปอย่างค่อยเป็นค่อยไป"
      ]
    },
    {
      "tab": "ระบบ\nวงแหวน",
      "title": "วงแหวนแห่งน้ำแข็ง",
      "stat": {
        "big": "282,000 กม.",
        "label": "ระยะที่วงแหวนแผ่ออกจากดาว"
      },
      "body": [
        "วงแหวนประกอบด้วยน้ำแข็งเป็นส่วนใหญ่ ผสมเศษหินและฝุ่น มีขนาดตั้งแต่เม็ดฝุ่นเล็ก ๆ ไปจนถึงก้อนใหญ่เท่าบ้าน โดยแต่ละชิ้นโคจรรอบดาวเสาร์แยกกันเป็นอิสระ",
        "วงแหวนหลักตั้งชื่อเป็นตัวอักษร เช่น วง A, B และ C ช่องว่างที่เห็นชัดที่สุดคือช่องแคสสินี (Cassini Division)",
        "แม้กว้างมาก แต่วงแหวนบางมาก ส่วนใหญ่หนาเพียงราว 10 เมตร"
      ],
      "more": [
        "กาลิเลโอเห็นวงแหวนครั้งแรกในปี 1610 แต่กล้องของเขาไม่ชัดพอ จึงเห็นเป็นเหมือนหูสองข้างของดาว ต่อมาคริสเตียน ฮอยเกนส์จึงอธิบายว่าเป็นวงแหวน",
        "อายุของวงแหวนยังเป็นหัวข้อที่นักวิทยาศาสตร์ถกเถียงกัน ผลการศึกษาบางงานชี้ว่าอาจค่อนข้างอายุน้อย แต่บางงานเห็นว่าอาจเก่าแก่กว่านั้น",
        "เมื่อมองจากโลก วงแหวนจะเอียงเปลี่ยนไปตามเวลา และทุก ๆ ราว 13–15 ปีจะหันขอบมาทางเรา ทำให้ดูบางจนเกือบหายไป"
      ]
    },
    {
      "tab": "ดวงจันทร์\nบริวาร",
      "title": "ดวงจันทร์ของดาวเสาร์",
      "stat": {
        "big": "ราว 290 ดวง",
        "label": "ดวงจันทร์ที่ยืนยันแล้ว"
      },
      "body": [
        "ไททัน (Titan) เป็นดวงจันทร์ที่ใหญ่ที่สุดของดาวเสาร์ และใหญ่เป็นอันดับ 2 ในระบบสุริยะ รองจากแกนีมีดของดาวพฤหัสบดี ใหญ่กว่าดาวพุธเสียอีก",
        "ไททันมีบรรยากาศหนาแน่นที่ส่วนใหญ่เป็นไนโตรเจน และมีทะเลสาบกับทะเลของไฮโดรคาร์บอนเหลว เช่น มีเทน อยู่บนพื้นผิว",
        "เอนเซลาดัส (Enceladus) มีไอพ่นน้ำแข็งพุ่งออกจากบริเวณขั้วใต้ บ่งชี้ว่ามีมหาสมุทรน้ำเหลวซ่อนอยู่ใต้เปลือกน้ำแข็ง"
      ],
      "more": [
        "ยานฮอยเกนส์ลงจอดบนไททันในปี 2005 เป็นการลงจอดครั้งแรกบนวัตถุในระบบสุริยะชั้นนอก",
        "ดวงจันทร์บางดวงทำหน้าที่เป็นดวงจันทร์เลี้ยงแกะ (Shepherd Moons) คอยรักษาขอบวงแหวนให้คมชัด เช่น พรอมีเทียสและแพนโดรา",
        "ดวงจันทร์ส่วนใหญ่ที่ค้นพบใหม่มีขนาดเล็กมาก กว้างเพียงไม่กี่กิโลเมตร และจำนวนที่ยืนยันยังเพิ่มขึ้นเรื่อย ๆ"
      ]
    },
    {
      "tab": "ภารกิจ\nสำรวจ",
      "title": "ยานที่ไปเยือนดาวเสาร์",
      "stat": {
        "big": "13 ปี",
        "label": "ที่ยานแคสสินีโคจรสำรวจ"
      },
      "body": [
        "ยานที่เคยไปเยือนดาวเสาร์ ได้แก่ ไพโอเนียร์ 11 (1979), วอยเอเจอร์ 1 (1980), วอยเอเจอร์ 2 (1981) และแคสสินี–ฮอยเกนส์",
        "แคสสินี–ฮอยเกนส์ เป็นภารกิจร่วมของ NASA, ESA และองค์การอวกาศอิตาลี เข้าสู่วงโคจรดาวเสาร์ในปี 2004",
        "ภารกิจจบลงในปี 2017 เมื่อยานถูกบังคับให้พุ่งเข้าสู่บรรยากาศดาวเสาร์ เพื่อไม่ให้ปนเปื้อนดวงจันทร์ที่อาจมีสภาพเหมาะต่อสิ่งมีชีวิต เช่น เอนเซลาดัส"
      ],
      "more": [
        "ในช่วงท้ายภารกิจ (Grand Finale) ยานบินลอดช่องว่างระหว่างดาวเสาร์กับวงแหวนรวม 22 ครั้ง",
        "ข้อมูลของแคสสินียังถูกนำมาวิเคราะห์ต่อเนื่อง และเปลี่ยนความเข้าใจเรื่องวงแหวนและดวงจันทร์หลายอย่าง",
        "NASA มีแผนส่งยานโดรนดราก้อนฟลาย (Dragonfly) ไปสำรวจไททัน ตามแผนปัจจุบันปล่อยตัวราวปี 2028 และถึงไททันราวปี 2034"
      ]
    },
    {
      "tab": "ความเข้าใจผิด\nที่พบบ่อย",
      "title": "ความเข้าใจผิดที่พบบ่อย",
      "stat": {
        "big": "ไม่ใช่แผ่นแข็ง",
        "label": "วงแหวนคือเศษน้ำแข็งและหิน"
      },
      "body": [
        "วงแหวนไม่ใช่แผ่นแข็งชิ้นเดียว แต่เป็นอนุภาคน้ำแข็งและหินจำนวนมหาศาลที่โคจรแยกกัน",
        "ดาวเสาร์ไม่ใช่ดาวเคราะห์ดวงเดียวที่มีวงแหวน ดาวพฤหัสบดี ดาวยูเรนัส และดาวเนปจูนก็มีวงแหวนเช่นกัน เพียงแต่จางและมองเห็นยากกว่ามาก",
        "ดาวเสาร์ไม่มีพื้นผิวให้ยืน เพราะเป็นก๊าซยักษ์ ถ้าดิ่งลงไปจะพบความดันและอุณหภูมิที่สูงขึ้นเรื่อย ๆ"
      ],
      "more": [
        "คำว่า \"ลอยน้ำได้\" เป็นเพียงการเปรียบเทียบความหนาแน่น ในธรรมชาติไม่มีอ่างน้ำที่ใหญ่ขนาดนั้น",
        "ชื่อวง A, B, C ตั้งตามลำดับการค้นพบ ไม่ได้เรียงตามตำแหน่งจากตัวดาว",
        "สีสันจัดจ้านในภาพถ่ายหลายภาพมักผ่านการปรับแต่งเพื่อเน้นรายละเอียด สีจริงของดาวเสาร์ออกเหลืองนวลซีด"
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
    const q = window.PLANET_QUIZ && window.PLANET_QUIZ['saturn'];
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

    const dyn = api.make('a-entity', { id: 'saturn-card-dynamic' }, container);

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

      // --- แท็บ 6 หน้า (ขนาดตัวอักษร 150 เท่าดวงอาทิตย์ อ่านง่ายขึ้นบนปุ่มแคบ) ---
      const tabW = 0.372, tabH = 0.15, gap = 0.03;
      const x0 = -1.19 + tabW / 2;
      PAGES.forEach((t, i) => {
        const active = i === state.page;
        api.button(
          dyn, t.tab, (x0 + i * (tabW + gap)).toFixed(3) + ' 0.5 0.035', tabW, tabH,
          () => go(i, false),
          active ? '#a16207' : '#14163a',
          active ? '#ca8a04' : '#232a5c',
          {
            fontSize: 150, lineHeight: 1.2, fontFamily: FONT, opacity: 1,
            textColor: active ? '#fffbeb' : '#d9f6ff',
            borderColor: active ? '#fde047' : '#7deaff', borderThickness: 0.005
          }
        );
      });

      // --- ระดับที่ 1: ตัวเลขเด่นใต้โมเดล ---
      api.make('a-plane', {
        position: '-0.80 -0.525 0.03', width: 0.92, height: 0.21,
        material: 'shader: flat; color: #2a1f06; opacity: 0.55; transparent: true; side: double'
      }, dyn);
      api.txt(dyn, pg.stat.big, '-0.80 -0.472 0.04', 0.86, '#fde047', 'center',
        { fontSize: 92, lineHeight: 1.15, fontFamily: FONT });
      api.txt(dyn, pg.stat.label, '-0.80 -0.578 0.04', 0.86, '#bff4ff', 'center',
        { fontSize: 52, lineHeight: 1.15, fontFamily: FONT });

      // --- หัวข้อของหน้า ---
      const accent = state.more ? '#7deaff' : '#fde047';
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
        const el = api.txt(dyn, text, '-0.20 ' + (cursor - h / 2).toFixed(3) + ' 0.04', bodyW, '#f1f5ff', 'left',
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
        '#14163a', '#232a5c',
        { fontSize: 100, lineHeight: 1.2, fontFamily: FONT, opacity: 1, textColor: '#bff4ff', borderColor: '#7deaff', borderThickness: 0.006 });
      api.button(dyn, state.more ? 'ย้อนกลับ' : 'รู้เพิ่มเติม', '0 ' + by + ' 0.035', bw, bh,
        () => go(state.page, !state.more),
        '#1b2150', '#2b3a7a',
        { fontSize: 100, lineHeight: 1.2, fontFamily: FONT, opacity: 1, textColor: '#e6fbff', borderColor: '#7deaff', borderThickness: 0.006 });
      if (hasQuiz()) {
        api.button(dyn, 'เริ่มมินิเกม', '0.72 ' + by + ' 0.035', bw, bh, () => api.startQuiz(p),
          '#a16207', '#ca8a04',
          { fontSize: 100, lineHeight: 1.2, fontFamily: FONT, opacity: 1, textColor: '#fffbeb', borderColor: '#fde047', borderThickness: 0.006 });
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
      if (window.console) console.error('[Saturn card] ใช้ตัววาดมาตรฐานแทน เพราะเกิดข้อผิดพลาด:', err);
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
    id: 'saturn',
    name: 'ดาวเสาร์',
    en: 'Saturn',
    info: 'ดาวเคราะห์ที่มีระบบวงแหวนเด่นชัด',

    // ใช้เป็นข้อมูลสำรองเมื่อระบบตกกลับไปใช้ตัววาดการ์ดมาตรฐาน
    facts: [
      "ดาวเคราะห์ลำดับที่ 6 ใหญ่เป็นอันดับ 2 ในระบบสุริยะ",
      "ดาวก๊าซยักษ์ ส่วนใหญ่เป็นไฮโดรเจนและฮีเลียม",
      "วงแหวนเกิดจากน้ำแข็งและเศษหินจำนวนมหาศาล",
      "โคจรรอบดวงอาทิตย์ราว 29.5 ปี",
      "มีดวงจันทร์ที่ยืนยันแล้วราว 290 ดวง ไททันใหญ่สุด"
    ],

    texture: 'assets/images/saturn.jpg',
    color: '#ddc38e',
    radius: 0.56,
    ringColor: '#cdb98d',

    // การ์ดแบบ Holographic Futuristic: ซ้าย = ทรงกลม 3D + ตัวเลขเด่น, ขวา = ความรู้แบบแท็บ, ล่าง = ปุ่มควบคุม
    style: {
      panelBgColor: '#0a0a1f',
      panelBorderColor: '#fde047',
      titleColor: '#fde047',
      subtitleColor: '#7deaff',
      textColor: '#f1f5ff',
      buttonColor: '#14163a',
      buttonHoverColor: '#232a5c',
      closeButtonColor: '#14163a',
      highlightColor: '#7deaff',
      fontSize: 44
    },

    renderCard: renderPlanetCardSafe,

    card: {
      width: 2.65,
      height: 1.80,
      // เหมือนดวงอาทิตย์: กล้องอยู่สูง 3 ม. เหนือดาวในฉาก ผิวดาวเสาร์ (รัศมี 0.56) และวงแหวนที่เอียงอาจยื่นเข้าหากล้อง
      // จึงเลื่อนการ์ดเข้ามาหน้าดาว 0.85 ม. แล้วย่อ scale ลงให้ขนาดที่มองเห็นใกล้เคียงเดิม (0.8 × 2.15/3 ≈ 0.57)
      // ถ้าการ์ดดูเล็ก/ใหญ่ไป ปรับ scale ได้ (ใหญ่ขึ้น = ค่ามากขึ้น) หากยังมีวงแหวนทะลุการ์ด ให้เพิ่ม z ของ position
      position: '0 0 0.85',
      scale: 0.57,
      rotation: '0 0 0',
      distance: 1.8,
      layout: 'horizontal',

      background: {
        color: '#0a0a1f',
        opacity: 0.85,
        image: ''
      },

      border: {
        style: 'frame',
        color: '#fde047',
        thickness: 0.012,
        cornerSize: 0.12,
        cornerColor: '#fde047',
        glowColor: '#eab308',
        glowOpacity: 0.14
      },

      header: {
        show: true,
        title: 'ดาวเสาร์',
        subtitle: 'S A T U R N  ·  เจ้าแห่งวงแหวน',
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
        modelRadius: 0.22,
        ringRadius: 0.31,
        ringTube: 0.018,
        ringColor: '#cdb98d',
        showImage: false,
        frameColor: '#fde047'
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
        // แผ่นกระจกจางๆ ด้านซ้าย (โมเดล) และด้านขวา (ความรู้) โทนน้ำเงินม่วงอวกาศ
        { type: 'plane', position: '-0.80 -0.125 0.006', width: 0.92, height: 1.04, color: '#1a1744', opacity: 0.35 },
        { type: 'plane', position: '0.47 -0.11 0.006', width: 1.50, height: 0.98, color: '#12123a', opacity: 0.42 },

        // เส้นกรอบบางสีฟ้า (hairline) ซ้อนด้านในกรอบสีทอง
        { type: 'plane', position: '0 0.835 0.012', width: 2.46, height: 0.004, color: '#7deaff', opacity: 0.5 },
        { type: 'plane', position: '0 -0.835 0.012', width: 2.46, height: 0.004, color: '#7deaff', opacity: 0.5 },
        { type: 'plane', position: '-1.23 0 0.012', width: 0.004, height: 1.67, color: '#7deaff', opacity: 0.5 },
        { type: 'plane', position: '1.23 0 0.012', width: 0.004, height: 1.67, color: '#7deaff', opacity: 0.5 },

        // วงโคจรรอบโมเดล: วงฟ้าบาง + วงทองจาง (คล้ายช่องแคสสินี) พร้อมดวงจันทร์บริวาร (ไททัน = ทอง, เอนเซลาดัส = ฟ้า)
        { type: 'ring', position: '-0.80 0 0.016', radiusInner: 0.408, radiusOuter: 0.412, color: '#7deaff', opacity: 0.55 },
        { type: 'ring', position: '-0.80 0 0.016', radiusInner: 0.368, radiusOuter: 0.371, color: '#fde047', opacity: 0.28 },
        { type: 'circle', position: '-0.565 0.336 0.02', radius: 0.016, color: '#fde68a', opacity: 0.95 },
        { type: 'circle', position: '-1.136 -0.235 0.02', radius: 0.011, color: '#7deaff', opacity: 0.95 },
        { type: 'circle', position: '-0.595 -0.355 0.02', radius: 0.008, color: '#ffffff', opacity: 0.85 }
      ].concat(STAR_DECOR),

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
          color: '#14163a',
          hoverColor: '#232a5c',
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
          color: '#a16207',
          hoverColor: '#ca8a04',
          textColor: '#fffbeb',
          borderColor: '#fde047',
          borderThickness: 0.006,
          fontSize: 100,
          opacity: 1
        }
      ]
    }
  });
})();
