// Temperature timeline (climate-basics.html). Uses Chart.js (js/lib, MIT licence).
(function(){
  const box=document.getElementById('timeline');
  if(!box)return;
  const data=window.TEMPERATURE_DATA, src=window.TEMPERATURE_SOURCE||{};
  const status=document.getElementById('tlStatus');
  if(!Array.isArray(data)||!data.length||typeof Chart==='undefined'){
    status.textContent='The temperature data has not been added yet.';
    return;
  }
  box.hidden=false;
  const fmt=v=>(v>0?'+':'')+v.toFixed(2)+' °C';
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ctx=document.getElementById('tlChart');
  const chart=new Chart(ctx,{
    type:'line',
    data:{labels:[],datasets:[{label:'Temperature difference from the baseline (°C)',data:[],borderColor:'#0E6E6E',backgroundColor:'rgba(14,110,110,.12)',fill:'origin',pointRadius:0,pointHitRadius:8,borderWidth:2,tension:.2}]},
    options:{
      responsive:true,maintainAspectRatio:false,animation:reduce?false:{duration:600},
      interaction:{mode:'index',intersect:false},
      plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>fmt(c.parsed.y)}}},
      scales:{
        x:{ticks:{maxTicksLimit:8,color:'#1F2933'},grid:{display:false}},
        y:{title:{display:true,text:'°C',color:'#1F2933'},ticks:{color:'#1F2933'},grid:{color:'rgba(91,103,112,.2)'}}
      }
    }
  });
  const btns=box.querySelectorAll('[data-from]');
  function show(from){
    const rows=data.filter(r=>r[0]>=from);
    chart.data.labels=rows.map(r=>r[0]);
    chart.data.datasets[0].data=rows.map(r=>r[1]);
    chart.update();
    btns.forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.from===from)));
    const a=rows[0],z=rows[rows.length-1];
    status.textContent='Showing '+a[0]+' to '+z[0]+'. '+a[0]+': '+fmt(a[1])+'. '+z[0]+': '+fmt(z[1])+'.';
  }
  btns.forEach(b=>b.addEventListener('click',()=>show(+b.dataset.from)));
  // table for screen readers and anyone who prefers numbers
  const tb=document.getElementById('tlRows');
  tb.innerHTML=data.map(r=>'<tr><th scope="row">'+r[0]+'</th><td>'+fmt(r[1])+'</td></tr>').join('');
  const s=document.getElementById('tlSource');
  s.innerHTML='Source: NASA GISS Surface Temperature Analysis (GISTEMP v4), <a href="'+src.url+'">global annual means</a>'+(src.baseline?', compared with the '+src.baseline+' average':'')+(src.accessed?'. Accessed '+src.accessed+'.':'.');
  show(+btns[0].dataset.from);
})();
