// footprint check
$('calcBtn').addEventListener('click',()=>{
 const g=n=>document.querySelector(`input[name=${n}]:checked`);
 const out=$('calcOut');out.classList.remove('bad');
 if(!g('travel')||!g('food')||!g('energy')){out.classList.add('bad');out.textContent='Answer all three questions to see your score.';return}
 const s=+g('travel').value+ +g('food').value+ +g('energy').value;
 const band=s<=4?['Low','You’re already making low-impact choices. Share what works with friends.']:
  s<=7?['Medium','Small changes add up. Try one journey a week by bus, bike or on foot.']:
  ['High','Start with one change: for example, a meat-free day or switching off standby devices.'];
 out.innerHTML=`<strong>${band[0]} impact (score ${s} out of 9).</strong> ${band[1]}`;
});
// quiz
const Q=[
 {q:'Which gas is released in large amounts when fossil fuels are burned?',o:['Carbon dioxide','Oxygen','Nitrogen'],a:0},
 {q:'What does the greenhouse effect do?',o:['Blocks all sunlight','Traps heat in the atmosphere','Makes the atmosphere thinner'],a:1},
 {q:'Which is an example of adaptation?',o:['Installing solar panels','Building flood defences','Cycling to school'],a:1}];
$('quiz').innerHTML=Q.map((x,i)=>`<fieldset><legend>${i+1}. ${x.q}</legend>${x.o.map((t,j)=>`<label class="opt"><input type="radio" name="q${i}" value="${j}"> ${t}</label>`).join('')}</fieldset>`).join('');
$('quizBtn').addEventListener('click',()=>{
 const out=$('quizOut');let score=0,done=0;
 Q.forEach((x,i)=>{const c=document.querySelector(`input[name=q${i}]:checked`);if(c){done++;if(+c.value===x.a)score++}});
 out.classList.toggle('bad',done<Q.length);
 out.textContent=done<Q.length?'Answer every question, then check again.':`You got ${score} out of ${Q.length}. ${score===Q.length?'Full marks.':'Review the Learn topics and try again.'}`;
});
// contact form validation (no backend in prototype)
const f=$('form');
// Set FORM_ENDPOINT to a form service URL (e.g. Formspree) to send real messages.
const FORM_ENDPOINT='';
f.addEventListener('submit',async e=>{
 e.preventDefault();
 const chk=[['name',v=>v.trim().length>0],['email',v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)],['msg',v=>v.trim().length>0]];
 let first=null;
 chk.forEach(([id,ok])=>{const el=$(id),bad=!ok(el.value);$(id+'E').hidden=!bad;el.setAttribute('aria-invalid',bad);if(el.setAttribute('aria-describedby',id+'E'),bad&&!first)first=el});
 const out=$('formOut');out.classList.remove('bad');
 if(first){first.focus();return}
 if(!FORM_ENDPOINT){out.textContent='Thanks. Your message is ready to send. (No form endpoint is set, so nothing is sent in this prototype.)';f.reset();return}
 try{const r=await fetch(FORM_ENDPOINT,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}});
  if(!r.ok)throw 0;out.textContent='Thanks. Your message has been sent.';f.reset()}
 catch{out.classList.add('bad');out.textContent='Your message could not be sent. Check your connection and try again.'}
});
