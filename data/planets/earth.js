// Solar Odyssey VR - Earth | Holographic multi-tab card inspired by Sun.
// Scope: Earth only; requires the existing SolarCardAPI in index.html.
window.PLANET_DATA = window.PLANET_DATA || [];
window.PLANET_DATA = window.PLANET_DATA.filter(p => p.id !== 'earth');
(function () {
  'use strict';
  const FONT = '"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif';
  const C = { bg:'#061827', blue:'#38bdf8', sea:'#075985', green:'#34d399', white:'#e0f2fe', muted:'#b9e5f7' };
  const PAGES = [
    { tab:'ภาพรวม',title:'ทำความรู้จักโลก', stat:['ดาวดวงที่ 3','นับจากดวงอาทิตย์'], body:[
      'โลกเป็นดาวเคราะห์หิน\nลำดับที่ 3 จากดวงอาทิตย์\nเป็นบ้านของสิ่งมีชีวิต\nเท่าที่เรารู้จัก',
      'โลกมีเส้นผ่านศูนย์กลาง\nประมาณ 12,742 กิโลเมตร\nและมีดวงจันทร์ 1 ดวง'], more:[
      'โลกก่อตัวเมื่อประมาณ\n4.54 พันล้านปีก่อน\nในช่วงกำเนิดระบบสุริยะ',
      'โลกอยู่ห่างดวงอาทิตย์\nเฉลี่ย 149.6 ล้านกิโลเมตร\nหรือ 1 หน่วยดาราศาสตร์'] },
    { tab:'มหาสมุทร',title:'ดาวเคราะห์สีน้ำเงิน',stat:['71%','พื้นผิวปกคลุมด้วยน้ำ'],body:[
      'น้ำปกคลุมผิวโลก\nประมาณ 71%\nที่เหลือเป็นแผ่นดินและเกาะ',
      'มหาสมุทรช่วยควบคุม\nอุณหภูมิของโลก\nและเป็นส่วนหนึ่งของวัฏจักรน้ำ'],more:[
      'น้ำส่วนใหญ่บนโลก\nเป็นน้ำเค็มในมหาสมุทร\nมีน้ำจืดเพียงส่วนน้อย',
      'วัฏจักรน้ำประกอบด้วย\nการระเหยและการควบแน่น\nก่อนตกลงมาเป็นฝน'] },
    { tab:'ชั้น\nบรรยากาศ',title:'เกราะปกป้องโลก',stat:['78%','ไนโตรเจนในอากาศ'],body:[
      'บรรยากาศโลกมีไนโตรเจน\nประมาณ 78% และออกซิเจน\nประมาณ 21%',
      'บรรยากาศช่วยรักษา\nอุณหภูมิให้เหมาะสม\nและกรองรังสี UV บางส่วน'],more:[
      'ชั้นโอโซนอยู่ใน\nชั้นสตราโตสเฟียร์เป็นหลัก\nช่วยดูดกลืนรังสี UV',
      'เมื่อระดับความสูงเพิ่มขึ้น\nอากาศจะเบาบางลง\nและมีออกซิเจนน้อยลง'] },
    { tab:'การโคจร',title:'กลางวัน กลางคืน และปี',stat:['24 ชม.','รอบวันโดยประมาณ'],body:[
      'โลกหมุนรอบตัวเอง\nใช้เวลาประมาณ 24 ชั่วโมง\nจึงเกิดกลางวันและกลางคืน',
      'โลกโคจรรอบดวงอาทิตย์\nประมาณ 365.25 วันต่อรอบ\nแกนโลกเอียงราว 23.4 องศา'],more:[
      'ฤดูกาลเกิดจากแกนโลกเอียง\nขณะโคจรรอบดวงอาทิตย์\nไม่ใช่เพราะระยะห่างเป็นหลัก',
      'ช่วงเวลากลางวันและกลางคืน\nเปลี่ยนไปตามฤดูกาล\nและตำแหน่งบนโลก'] },
    { tab:'ดวงจันทร์',title:'เพื่อนร่วมทางของโลก',stat:['1 ดวง','ดวงจันทร์ธรรมชาติ'],body:[
      'โลกมีดวงจันทร์ธรรมชาติ\nหนึ่งดวงที่โคจรรอบโลก',
      'แรงโน้มถ่วงของดวงจันทร์\nและดวงอาทิตย์ทำให้เกิด\nปรากฏการณ์น้ำขึ้นน้ำลง'],more:[
      'ดวงจันทร์ใช้เวลาประมาณ\n27.3 วันในการโคจรรอบโลก\nเทียบกับดาวฤกษ์ไกล',
      'ข้างขึ้นและข้างแรมเกิดจาก\nมุมที่เรามองเห็นส่วนสว่าง\nของดวงจันทร์เปลี่ยนไป'] },
    { tab:'สิ่งมีชีวิต',title:'บ้านของสิ่งมีชีวิต',stat:['3 ปัจจัย','น้ำ พลังงาน บรรยากาศ'],body:[
      'น้ำในสถานะของเหลว\nพลังงาน และสิ่งแวดล้อม\nที่เหมาะสมเอื้อต่อชีวิต',
      'ระบบนิเวศเชื่อมโยง\nสิ่งมีชีวิตกับดิน น้ำ อากาศ\nและสภาพภูมิอากาศ'],more:[
      'พืชและสาหร่ายจำนวนมาก\nสร้างอาหารจากพลังงานแสง\nด้วยการสังเคราะห์ด้วยแสง',
      'การดูแลทรัพยากรธรรมชาติ\nช่วยรักษาความหลากหลาย\nและสมดุลของระบบนิเวศ'] }
  ];
  function render(container,p,api) {
    const cfg=p.card,s=p.style;
    api.basePanel(p.name,p.en,s,container,cfg);
    api.renderCardDecorations(p,container,cfg);
    api.planetImage(p,container,cfg);
    const dyn=api.make('a-entity',{id:'earth-tab-content'},container);
    let page=0,more=false,bodyIndex=0,moreIndex=0;
    const style=(size,extra={})=>Object.assign({fontFamily:FONT,fontSize:size,lineHeight:1.23,minFontSize:26},extra);
    function draw(){
      while (dyn.firstChild) dyn.removeChild(dyn.firstChild);
      const item=PAGES[page];
      // 2 rows x 3 tabs: short one-line labels; keep within card's 2.65m width.
      const shortTabs=['ภาพรวม','มหาสมุทร','บรรยากาศ','การโคจร','ดวงจันทร์','ชีวิตบนโลก'];
      const tabW=.76, tabH=.14, tabGap=.07;
      PAGES.forEach((it,i)=>{
        const active=i===page;
        const x=-.83+(i%3)*(tabW+tabGap);
        const y=i<3?.525:.365;
        api.button(dyn,shortTabs[i],`${x.toFixed(3)} ${y.toFixed(3)} 0.055`,tabW,tabH,()=>{page=i;more=false;bodyIndex=0;moreIndex=0;draw();},
          active?'#0369a1':'#0c3150',active?'#0284c7':'#145277',
          style(84,{lineHeight:1.05,minFontSize:68,maxHeight:.12,textColor:active?'#ffffff':'#e0f2fe',borderColor:active?C.green:C.blue,borderThickness:.005,opacity:1}));
      });
      api.make('a-plane',{position:'-0.80 -0.575 0.025',width:.92,height:.18,
        material:'shader: flat; color: #073b53; opacity: .88; transparent: true; side: double'},dyn);
      api.txt(dyn,item.stat[0],'-0.80 -0.540 0.055',.88,C.green,'center',
        style(92,{lineHeight:1.06,maxHeight:.12,minFontSize:68}));
      api.txt(dyn,item.stat[1],'-0.80 -0.630 0.055',.88,C.muted,'center',
        style(63,{lineHeight:1.10,maxHeight:.08,minFontSize:45}));
      api.txt(dyn,more?'ข้อมูลเพิ่มเติม':item.title,'-0.22 0.163 0.060',1.42,C.blue,'left',
        style(72,{lineHeight:1.12,maxHeight:.11,minFontSize:56}));
      api.make('a-plane',{position:'0.48 0.084 0.025',width:1.40,height:.004,
        material:'shader: flat; color: '+C.blue+'; opacity: .7; side: double'},dyn);
      // One readable fact at a time; next/previous facts are available on the same tab.
      const lines=more?item.more:item.body;
      const factIndex=more?moreIndex:bodyIndex;
      const fact=lines[factIndex]||'';
      api.txt(dyn,fact,'-0.19 -0.22 0.060',1.37,C.white,'left',
        style(65,{lineHeight:1.34,maxHeight:.53,minFontSize:58}));
      api.txt(dyn,`${factIndex+1} / ${lines.length}`,'1.03 -0.54 0.060',.18,C.muted,'center',
        style(55,{lineHeight:1.0,maxHeight:.07,minFontSize:42}));
      if(lines.length>1){
        api.button(dyn,'◀','0.15 -0.545 0.060',.20,.14,()=>{if(more)moreIndex=(moreIndex+lines.length-1)%lines.length;else bodyIndex=(bodyIndex+lines.length-1)%lines.length;draw();},
          '#0c3150','#145277',style(88,{textColor:'#fff',maxHeight:.12,minFontSize:64,opacity:1}));
        api.button(dyn,'▶','0.49 -0.545 0.060',.20,.14,()=>{if(more)moreIndex=(moreIndex+1)%lines.length;else bodyIndex=(bodyIndex+1)%lines.length;draw();},
          '#0c3150','#145277',style(88,{textColor:'#fff',maxHeight:.12,minFontSize:64,opacity:1}));
      }
      function btn(label,x,cb,color){api.button(dyn,label,`${x} -0.745 0.060`,.62,.15,cb,color,'#0284c7',
        style(92,{lineHeight:1.08,maxHeight:.13,minFontSize:70,textColor:'#ffffff',borderColor:C.blue,borderThickness:.006,opacity:1}));}
      btn('ปิดการ์ด',-0.72,()=>api.closeUI(),'#334155');
      btn(more?'ย้อนกลับ':'รู้เพิ่มเติม',0,()=>{more=!more;moreIndex=0;bodyIndex=0;draw();},'#075985');
      btn('เริ่มมินิเกม',0.72,()=>api.startQuiz(p),'#0369a1');
      setTimeout(()=>{
        [document.querySelector('a-scene'),document.querySelector('#desktop-cursor'),document.getElementById('right-controller'),document.getElementById('left-controller')].forEach(el=>{
          const rc=el?.components?.raycaster;if(rc?.refreshObjects)rc.refreshObjects();
        });
      },0);
    }

    draw();
  }
  function safeRender(container,p,api){
    try {render(container,p,api);}
    catch(e){
      console.error('[Earth] Custom card fallback:',e);
      while(container.firstChild)container.removeChild(container.firstChild);
      api.basePanel(p.name,p.en,p.style,container,p.card);
      api.renderCardDecorations(p,container,p.card);
      const sphere=api.planetImage(p,container,p.card);
      api.renderCardContent(p,container,p.card);
      api.renderCardButtons(p,container,p.card,sphere);
    }
  }
  window.PLANET_DATA.push({
    id:'earth',name:'โลก',en:'Earth',
    info:'ดาวเคราะห์ลำดับที่ 3 จากดวงอาทิตย์ และเป็นบ้านของสิ่งมีชีวิตที่เรารู้จัก',
    facts:['พื้นผิวประมาณ 71% ปกคลุมด้วยน้ำ','หมุนรอบตัวเองประมาณ 24 ชั่วโมง','โคจรรอบดวงอาทิตย์ประมาณ 365.25 วัน','มีดวงจันทร์ธรรมชาติ 1 ดวง'],
    color:'#ffffff',radius:.25,image:'',texture:'assets/images/earth.jpg',
    style:{fontFamily:FONT,fontSize:44,panelBgColor:C.bg,panelBorderColor:C.blue,titleColor:C.white,subtitleColor:C.green,textColor:C.white,buttonColor:C.sea,buttonHoverColor:'#0284c7',closeButtonColor:'#334155',highlightColor:C.green},
    renderCard:safeRender,
    card:{width:2.65,height:1.80,scale:.76,position:'0 0.20 0.23',rotation:'0 0 0',distance:1.8,layout:'horizontal',
      background:{color:C.bg,opacity:.94,image:''},
      border:{style:'frame',color:C.blue,thickness:.012,cornerColor:C.green},
      header:{show:true,titlePos:'0 0.77 0.02',subtitlePos:'0 0.665 0.02',titleWidth:1.55,subtitleWidth:1.55,showDivider:true,dividerY:.605,dividerWidth:2.4,dividerColor:C.blue},
      media:{show:true,show3D:true,position:'-0.80 -0.13 0.035',modelRadius:.26,frameColor:C.green,showCaption:false},
      content:{position:'0.47 -0.05 0.03',width:1.38,maxHeight:.80,fontSize:42,minFontSize:28,lineHeight:1.3,align:'left',bullet:'• '},sections:[],
      decorations:[
        {type:'plane',position:'-0.80 -0.125 0.006',width:.92,height:1.04,color:'#0b3a53',opacity:.28},
        {type:'plane',position:'0.47 -0.11 0.006',width:1.50,height:.98,color:'#092941',opacity:.42},
        {type:'ring',position:'-0.80 -0.13 0.016',radiusInner:.350,radiusOuter:.354,color:C.blue,opacity:.60},
        {type:'circle',position:'-0.56 0.115 0.02',radius:.013,color:C.green,opacity:.95}
      ],buttonLayout:{mode:'custom'},buttons:[
        {id:'close',enabled:true,label:'ปิดการ์ด',action:'close',position:'-0.72 -0.745 0.035',width:.62,height:.15,color:'#334155',hoverColor:'#475569',textColor:C.white,fontSize:80},
        {id:'quiz',enabled:true,label:'เริ่มมินิเกม',action:'quiz',position:'0.72 -0.745 0.035',width:.62,height:.15,color:C.sea,hoverColor:'#0284c7',textColor:C.white,fontSize:80}
      ]}
  });
})();
