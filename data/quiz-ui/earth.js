// Solar Odyssey VR - Earth Quiz UI inspired by the Sun's custom 3-screen hooks.
window.PLANET_QUIZ_UI = window.PLANET_QUIZ_UI || {};
(function () {
 'use strict';
 const FONT='"Sarabun", "Kanit", "Tahoma", system-ui, sans-serif';
 const B='#061827',CYAN='#38bdf8',GREEN='#34d399',LIGHT='#e0f2fe';
 const st=(x={})=>Object.assign({fontFamily:FONT,lineHeight:1.25},x);
 const label=(q,i)=>'ABCD'[i]+'. '+((q.options||[])[i]||'');
 function panel(api,c,pos,w,h,color,opacity=1){api.make('a-plane',{position:pos,width:w,height:h,material:`shader: flat; color: ${color}; opacity: ${opacity}; transparent: true; side: double`},c);}
 function frame(api,c,ui,subtitle){api.basePanel('EARTH KNOWLEDGE CHALLENGE',subtitle,ui.style,c,ui);api.renderCardDecorations({style:ui.style},c,ui);}
 function progress(api,c,total,done,current,color){const gap=.04,w=1.7,seg=(w-(total-1)*gap)/total;for(let i=0;i<total;i++)panel(api,c,`${(-w/2+seg/2+i*(seg+gap)).toFixed(3)} 0.455 0.025`,seg,.035,i===current?color:i<done?GREEN:'#16425e',.96);}
 function renderQuestion(ctx){
   const {container:c,question:q,index,total,uiConfig:ui,answerQuestion,exitQuiz,api}=ctx;
   frame(api,c,ui,`ภารกิจสำรวจโลก · ข้อที่ ${index+1} / ${total}`);
   progress(api,c,total,index,index,CYAN);
   panel(api,c,'0 0.25 0.02',1.84,.33,'#08354b',.9);
   api.txt(c,q.q||'รอเพิ่มคำถาม','0 0.25 0.03',1.80,LIGHT,'center',st({fontSize:42,maxHeight:.30,minFontSize:30,centerAnchor:true}));
   (q.options||[]).forEach((opt,i)=>{
      const x=(i%2-.5)*.96,y=-.10-Math.floor(i/2)*.33;
      api.button(c,label(q,i),`${x.toFixed(3)} ${y.toFixed(3)} 0.035`,.92,.30,()=>answerQuestion(i),'#075985','#0284c7',st({fontSize:54,minFontSize:34,maxHeight:.27,textColor:'#ffffff',borderColor:CYAN,borderThickness:.006,opacity:1}));
   });
   api.button(c,'ออกจากแบบทดสอบ','0 -0.69 0.035',.9,.12,exitQuiz,'#334155','#475569',st({fontSize:65,textColor:'#ffffff',borderColor:CYAN,borderThickness:.005,opacity:1}));
 }
 function renderFeedback(ctx){
   const {container:c,question:q,answer:a,isCorrect:ok,index,total,uiConfig:ui,nextStep,api}=ctx;
   frame(api,c,ui,`ภารกิจสำรวจโลก · ข้อที่ ${index+1} / ${total}`);
   progress(api,c,total,index,index,ok?'#22c55e':'#ef4444');
   panel(api,c,'0 0.33 0.02',1.84,.17,ok?'#073c2c':'#3f1724',.96);
   api.txt(c,ok?'✔ ตอบถูกต้อง!':'✘ ยังไม่ถูกต้อง','0 0.33 0.03',1.7,ok?'#86efac':'#fca5a5','center',st({fontSize:62,centerAnchor:true}));
   api.txt(c,'คุณเลือก '+label(q,a.selected),'0 0.17 0.03',1.8,ok?'#bbf7d0':'#fecaca','center',st({fontSize:38,maxHeight:.15,minFontSize:26,centerAnchor:true}));
   if(!ok)api.txt(c,'เฉลย '+label(q,q.correct),'0 0.03 0.03',1.8,CYAN,'center',st({fontSize:38,maxHeight:.15,minFontSize:26,centerAnchor:true}));
   panel(api,c,'0 -0.22 0.02',1.82,.36,'#0a3044',.80);
   api.txt(c,q.explanation||'','0 -0.22 0.03',1.74,LIGHT,'center',st({fontSize:40,maxHeight:.32,minFontSize:28,centerAnchor:true}));
   api.button(c,index===total-1?'ดูสรุปคะแนน':'ข้อถัดไป','0 -0.58 0.035',1.2,.17,nextStep,'#0369a1','#0284c7',st({fontSize:70,textColor:'#ffffff',borderColor:CYAN,borderThickness:.006,opacity:1}));
 }
 function renderResults(ctx){
   const {container:c,planet,score,total,answers,questions,uiConfig:ui,returnToCard,closeUI,api}=ctx;
   frame(api,c,ui,'สรุปผลภารกิจสำรวจโลก');
   api.txt(c,`คะแนน ${score} / ${total}`,'0 0.385 0.03',1.7,GREEN,'center',st({fontSize:84,centerAnchor:true}));
   const stars=Math.max(0,Math.min(5,Math.round((total?score/total:0)*5)));
   api.txt(c,'★'.repeat(stars)+'☆'.repeat(5-stars),'0 0.215 0.03',1.0,CYAN,'center',st({fontSize:70,centerAnchor:true}));
   const ratio=total?score/total:0;
   const msg=ratio>=.8?'ยอดเยี่ยม! คุณรู้จักโลกดีมาก':ratio>=.5?'ทำได้ดี! ทบทวนข้อที่พลาดแล้วลองอีกครั้ง':'ลองอ่านข้อมูลโลก แล้วกลับมาทำแบบทดสอบอีกครั้ง';
   api.txt(c,msg,'0 0.10 0.03',1.8,LIGHT,'center',st({fontSize:39,maxHeight:.12,minFontSize:28,centerAnchor:true}));
   (questions||[]).forEach((q,i)=>{
      const a=answers?.[i],good=!!a&&a.selected===q.correct;
      api.txt(c,(good?'✔':'✘')+'  '+(i+1)+'. '+(q.topic||'ข้อที่ '+(i+1)),`-0.8 ${(0.0-i*.11).toFixed(3)} 0.03`,1.6,good?'#86efac':'#fca5a5','left',st({fontSize:44,lineHeight:1.0}));
   });
   const bst=st({fontSize:80,opacity:1,borderThickness:.006,textColor:'#ffffff',borderColor:CYAN});
   api.button(c,'เล่นอีกครั้ง','-0.66 -0.66 0.035',.62,.15,()=>api.startQuiz(planet),'#0369a1','#0284c7',bst);
   api.button(c,'กลับสู่การ์ด','0 -0.66 0.035',.62,.15,returnToCard,'#075985','#0284c7',bst);
   api.button(c,'กลับสู่ระบบสุริยะ','0.66 -0.66 0.035',.62,.15,closeUI,'#334155','#475569',bst);
 }
 window.PLANET_QUIZ_UI.earth={width:2.0,height:1.56,position:{x:0,y:0,z:0},distance:1.6,rotation:{x:0,y:0,z:0},scale:1,
   style:{fontFamily:FONT,fontSize:40,panelBgColor:B,panelBorderColor:CYAN,titleColor:LIGHT,subtitleColor:GREEN,textColor:'#ffffff',buttonColor:'#075985',buttonHoverColor:'#0284c7',closeButtonColor:'#334155'},
   background:{color:B,opacity:.97,image:'',outerGlow:true,outerGlowColor:CYAN,outerGlowOpacity:.20},
   border:{style:'corners',color:CYAN,thickness:.022,cornerSize:.20,cornerColor:GREEN},
   header:{show:true,titlePos:'0 0.69 0.02',subtitlePos:'0 0.585 0.02',titleWidth:1.82,subtitleWidth:1.7,align:'center',showDivider:true,dividerY:.515,dividerWidth:1.8,dividerColor:CYAN},
   decorations:[{type:'sphere',position:'-0.88 0.66 0.04',radius:.06,color:GREEN,opacity:.95},{type:'ring',position:'-0.88 0.66 0.035',radiusInner:.075,radiusOuter:.088,color:CYAN,opacity:.80}],
   renderQuestion,renderFeedback,renderResults};
})();
