/* Lumina Dental: centralized, easily editable template data */
const clinic = {
  name: 'Lumina Dental',
  phone: '(212) 555–0187',
  email: 'hello@luminadental.com',
  address: '28 W 23rd Street, New York, NY 10010'
};

const treatments = [
  { id:'cosmetic', no:'01', icon:'✦', name:'Cosmetic Dentistry', short:'Thoughtful enhancements for a smile that still feels completely you.', intro:'A thoughtful, artistic approach to the smile you’ve always imagined.', expectation:'A relaxed consultation, smile assessment, and a clear plan tailored to you.', meta:'Typically 1–3 visits', heading:'A smile that feels like <i>you.</i>', description:'Cosmetic dentistry at Lumina is never about chasing perfection. It is about bringing harmony to what is already uniquely yours. After listening to what you would love to change, we combine artistry, precise planning, and exquisite materials to make it possible.', ideal:['Chips, wear, or uneven edges','Small gaps or proportion concerns','Discoloration that does not respond to whitening'], approach:['Natural smile design preview','Conservative, enamel-preserving options','Premium porcelain & composite materials'] },
  { id:'implants', no:'02', icon:'◒', name:'Dental Implants', short:'A lasting, natural-looking way to replace missing teeth with confidence.', intro:'A stable, beautifully integrated foundation for your next chapter of smiling.', expectation:'A detailed 3D assessment, an expert-led plan, and attentive support throughout.', meta:'Plan tailored to your timeline', heading:'A foundation for <i>confidence.</i>', description:'Dental implants are the closest thing to a natural tooth. Our team takes a carefully planned, collaborative approach to restore the way your smile looks, feels, and functions—so you can get back to eating, speaking, and laughing freely.', ideal:['One or more missing teeth','A loose or uncomfortable denture','A long-lasting tooth replacement'], approach:['3D guided treatment planning','Specialist restorative coordination','Natural, custom-crafted final teeth'] },
  { id:'whitening', no:'03', icon:'☼', name:'Teeth Whitening', short:'Professional brightening with results that look fresh, luminous, and natural.', intro:'A brighter smile, calibrated with the subtlety and care you deserve.', expectation:'A quick assessment and a whitening plan built around your sensitivity and goals.', meta:'In-office & take-home options', heading:'Bright, never <i>overdone.</i>', description:'A brighter smile can make a remarkable difference, especially when it still looks like your own. We use professional-grade systems that are safe, effective, and tailored to the shade and sensitivity of your teeth.', ideal:['Everyday coffee or tea staining','A special event or milestone','A simple confidence refresh'], approach:['Sensitivity-aware formulations','Shade guidance for natural results','Options to suit your pace'] },
  { id:'orthodontics', no:'04', icon:'⌁', name:'Orthodontics', short:'Clear, considered alignment for teens and adults at every stage.', intro:'A gentler, clearer way to bring your smile beautifully into alignment.', expectation:'Digital scans, a visual treatment preview, and check-ins that fit your life.', meta:'Clear aligner consultations available', heading:'Move toward a smile you <i>love.</i>', description:'Alignment is about more than straight teeth: it can make daily hygiene easier and your bite more comfortable. We offer discreet, thoughtfully planned orthodontic care for adults and teens who want a healthier, more balanced smile.', ideal:['Crowding or spaced teeth','A bite that feels out of balance','Adults seeking discreet alignment'], approach:['Digital scans—no messy impressions','Clear treatment visualizations','Flexible, supportive progress visits'] },
  { id:'emergency', no:'05', icon:'+', name:'Emergency Dentistry', short:'Prompt, reassuring care when the unexpected happens. Same-day care whenever possible.', intro:'When you need calm, capable care quickly, we make room for you.', expectation:'A kind, prompt assessment, pain relief where possible, and a clear next step.', meta:'Same-day appointments prioritized', heading:'Here when you need <i>us most.</i>', description:'A toothache, broken tooth, or sudden swelling can be unsettling. When something feels urgent, please call us. We reserve time each day for dental emergencies so that you can get answers, relief, and a plan without delay.', ideal:['Toothache or sudden sensitivity','A chipped, cracked, or lost tooth','Swelling, injury, or broken restoration'], approach:['Same-day time reserved','Comfort-focused urgent treatment','Clear aftercare & follow-up plan'] },
  { id:'preventive', no:'06', icon:'◌', name:'Preventive Care', short:'Gentle, proactive care to keep your smile healthy for all the moments ahead.', intro:'The most valuable dentistry is often the kind that helps you need less of it.', expectation:'Gentle cleaning, thoughtful screening, and practical guidance for your healthiest smile.', meta:'New patient visits available', heading:'Healthy smiles start with <i>small things.</i>', description:'Consistent preventive care protects more than your teeth—it helps us spot small changes early, before they become bigger concerns. Our hygiene visits are thorough but gentle, tailored to your needs and your long-term health.', ideal:['Routine cleanings and exams','Gum health and hygiene support','Families seeking ongoing care'], approach:['Comfort-first hygiene care','Digital diagnostics when helpful','Personalized prevention plan'] }
];

const doctors = [
  {id:'elena', name:'Dr. Elena Marlowe', specialty:'Cosmetic & Restorative Dentistry', experience:'16 years of experience', credentials:'DDS, FAGD · NYU College of Dentistry', languages:'English, Spanish', bio:'Known for her calm presence and discerning eye, Dr. Marlowe creates naturally beautiful results while making every patient feel heard.', image:'assets/doctor-elena.png'},
  {id:'daniel', name:'Dr. Daniel Hart', specialty:'Implant & Restorative Dentistry', experience:'14 years of experience', credentials:'DMD · Columbia University', languages:'English, French', bio:'Dr. Hart pairs advanced implant expertise with a warm, steady approach that helps patients feel confident at every step.', image:'assets/doctor-daniel.png'}
];

const smileStories = [
  {id:'case-cosmetic', treatment:'Cosmetic Dentistry', label:'Porcelain veneers', title:'A brighter, balanced smile', note:'A conservative veneer plan refined shape, tone, and symmetry over two unhurried visits.', image:'assets/smile-results.png', alt:'Natural cosmetic dentistry before and after result'},
  {id:'case-implants', treatment:'Dental Implants', label:'Single tooth implant', title:'A seamless return to smiling', note:'A custom implant restoration replaced a missing tooth with a result designed to blend naturally.', image:'assets/smile-implant.png', alt:'Single tooth implant before and after result'},
  {id:'case-ortho', treatment:'Orthodontics', label:'Clear aligner care', title:'A more relaxed alignment', note:'A thoughtfully planned clear-aligner journey brought gentle balance to this patient’s smile.', image:'assets/smile-align.png', alt:'Clear aligner before and after result'}
];

const testimonials = [
  {quote:'I have never felt more comfortable at a dental appointment. Every detail, from the welcome to the follow-up, made me feel genuinely cared for.', name:'Sarah M.', role:'Smile makeover patient'},
  {quote:'The team made an implant feel far less intimidating than I expected. I always knew what was happening and I love the result.', name:'Marcus T.', role:'Dental implant patient'},
  {quote:'Lumina has completely changed how I feel about going to the dentist. It is calm, thoughtful, and exceptionally good care.', name:'Nina C.', role:'Preventive care patient'}
];

const faqs = [
  {q:'What should I expect at my first appointment?', a:'Your first visit begins with an unhurried conversation about your health, comfort, and goals. We will then take any necessary digital images, complete a thorough exam, and walk you through clear recommendations. There is always time for your questions.'},
  {q:'Do you accept dental insurance?', a:'Yes. We work with most PPO dental plans and are happy to help you understand your benefits. Before beginning treatment, we provide a clear estimate and explain your options.'},
  {q:'Do you offer payment plans?', a:'We believe excellent care should be accessible. In addition to insurance and HSA/FSA payments, we offer flexible monthly financing options for qualifying patients.'},
  {q:'What if I have a dental emergency?', a:'Please call us right away at (212) 555–0187. We reserve time in our schedule for urgent needs and will do our best to see you promptly, often the same day.'},
  {q:'Do you see children?', a:'We welcome patients of all ages and take special care to make young visitors feel safe, involved, and at ease during every visit.'}
];

function serviceCard(treatment) {
  return `<article class="service-card"><div class="service-icon">${treatment.icon}</div><h3>${treatment.name}</h3><p>${treatment.short}</p><button aria-label="Learn about ${treatment.name}" data-treatment="${treatment.id}">→</button></article>`;
}
function renderFAQ(target, limit) {
  const root = document.getElementById(target); if (!root) return;
  root.innerHTML = faqs.slice(0, limit || faqs.length).map((item, index) => `<div class="faq-item ${index === 0 ? 'open' : ''}"><button class="faq-question" aria-expanded="${index === 0}">${item.q}<span>+</span></button><div class="faq-answer"><p>${item.a}</p></div></div>`).join('');
}
function renderDoctorCard(doc) {
 return `<article class="doctor-card"><img src="${doc.image}" loading="lazy" alt="Portrait of ${doc.name}"><div class="doctor-card-info"><span class="doctor-role">${doc.specialty}</span><h2>${doc.name}</h2><p>${doc.bio}</p><div class="doctor-meta"><div><span>Experience</span><strong>${doc.experience}</strong></div><div><span>Credentials</span><strong>${doc.credentials}</strong></div><div><span>Languages</span><strong>${doc.languages}</strong></div></div></div></article>`;
}
function renderGallery(filter = 'all') {
  const gallery = document.getElementById('resultsGallery'); if (!gallery) return;
  const visible = smileStories.filter(story => filter === 'all' || story.treatment === filter);
  document.getElementById('galleryCount').textContent = String(visible.length).padStart(2,'0');
  gallery.innerHTML = visible.map(story => `<article class="gallery-card"><div class="gallery-image"><span class="gallery-tag">${story.label}</span><img src="${story.image}" loading="lazy" alt="${story.alt}"></div><div class="gallery-card-copy"><span>${story.treatment}</span><h3>${story.title}</h3><p>${story.note}</p></div></article>`).join('') || `<p class="gallery-empty">No patient stories in this selection yet.</p>`;
}

function initContent() {
  document.getElementById('homeServices').innerHTML = treatments.slice(0, 6).map(serviceCard).join('');
  document.getElementById('treatmentsList').innerHTML = treatments.map(t => `<button class="treatment-row" data-treatment="${t.id}" aria-label="Learn more about ${t.name}"><span class="treatment-number">${t.no}</span><h2>${t.name}</h2><p>${t.short}</p><span class="round-arrow">↗</span></button>`).join('');
  document.getElementById('teamPreview').innerHTML = doctors.map(doc => `<article class="person-mini"><img src="${doc.image}" loading="lazy" alt="${doc.name}"><div><h3>${doc.name}</h3><p>${doc.specialty}</p><a href="#doctors" data-nav="doctors">View profile →</a></div></article>`).join('');
  document.getElementById('doctorDirectory').innerHTML = doctors.map(renderDoctorCard).join('');
  renderGallery();
  document.getElementById('treatmentOptions').innerHTML = treatments.map((t,index) => `<label class="treatment-choice ${index===0?'selected':''}"><input type="radio" name="treatment" value="${t.name}" ${index===0?'checked':''}><span>${t.icon}</span><strong>${t.name}</strong></label>`).join('');
  document.getElementById('formDoctor').innerHTML = `<option value="">No preference</option>` + doctors.map(d=>`<option>${d.name}</option>`).join('');
  renderFAQ('homeFaq', 4); renderFAQ('infoFaq');
}

function updateDetail(id) {
  const t = treatments.find(item => item.id === id) || treatments[0];
  document.getElementById('detailNumber').textContent = t.no;
  // Keep treatment headings elegant while allowing the source data to stay simple.
  if (t.name.includes(' ')) { const words=t.name.split(' '); document.getElementById('detailTitle').innerHTML = `${words.slice(0,-1).join(' ')}<br><i>${words[words.length-1]}</i>`; }
  else document.getElementById('detailTitle').innerHTML = `<i>${t.name}</i>`;
  document.getElementById('detailIntro').textContent = t.intro;
  document.getElementById('detailIcon').textContent = t.icon;
  document.getElementById('detailExpectation').textContent = t.expectation;
  document.getElementById('detailMeta').textContent = t.meta;
  document.getElementById('detailHeading').innerHTML = t.heading;
  document.getElementById('detailDescription').textContent = t.description;
  document.getElementById('detailIdeal').innerHTML = t.ideal.map(x => `<li><span>✓</span>${x}</li>`).join('');
  document.getElementById('detailApproach').innerHTML = t.approach.map(x => `<li><span>✓</span>${x}</li>`).join('');
  document.querySelectorAll('.detail-body aside a').forEach(a => a.classList.toggle('active', a.dataset.treatment === t.id));
  document.title = `${t.name} — Lumina Dental`;
}

function setupRouting() {
 const pages = [...document.querySelectorAll('.page')];
 const navLinks = [...document.querySelectorAll('[data-nav]')];
 function navigate(page, push=true) {
   const available = pages.some(p=>p.dataset.page === page);
   const target = available ? page : 'home';
   pages.forEach(p=>p.classList.toggle('active',p.dataset.page === target));
   navLinks.forEach(a=>a.classList.toggle('active',a.dataset.nav === target));
   if (push && location.hash !== '#'+target) history.pushState(null,'','#'+target);
   if (target === 'home') document.title = 'Lumina Dental — Confident smiles start here';
   else if (target !== 'treatment-detail') document.title = `${target.replaceAll('-',' ').replace(/\b\w/g, l=>l.toUpperCase())} — Lumina Dental`;
   window.scrollTo({top:0, behavior:'instant'});
   closeMobile();
 }
 document.addEventListener('click', e => {
   const link = e.target.closest('[data-nav]');
   if (link) { e.preventDefault(); navigate(link.dataset.nav); }
   const treatment = e.target.closest('[data-treatment]');
   if (treatment) { e.preventDefault(); updateDetail(treatment.dataset.treatment); navigate('treatment-detail'); }
 });
 window.addEventListener('hashchange', () => { const page = location.hash.slice(1); navigate(page, false); });
 navigate(location.hash.slice(1) || 'home', false);
}

function setupGallery() {
  document.querySelectorAll('[data-gallery-filter]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-gallery-filter]').forEach(item => item.classList.toggle('active', item === button));
    renderGallery(button.dataset.galleryFilter);
  }));
}

function setupFaqs() {
 document.addEventListener('click', e => {
   const trigger = e.target.closest('.faq-question'); if (!trigger) return;
   const item = trigger.parentElement; const open = item.classList.contains('open');
   item.parentElement.querySelectorAll('.faq-item').forEach(x=>{x.classList.remove('open');x.querySelector('.faq-question').setAttribute('aria-expanded','false')});
   if (!open) { item.classList.add('open'); trigger.setAttribute('aria-expanded','true'); }
 });
}
function setupTestimonials() {
 let current=0;
 const quote=document.getElementById('featuredQuote'), author=document.getElementById('featuredAuthor'), count=document.getElementById('testimonialCount');
 function paint() { const t=testimonials[current]; quote.textContent=t.quote; author.innerHTML=`<strong>${t.name}</strong><span>${t.role}</span><span class="stars">★★★★★</span>`; count.textContent=`0${current+1} / 0${testimonials.length}`; }
 document.getElementById('nextTestimonial').addEventListener('click',()=>{current=(current+1)%testimonials.length;paint()});
 document.getElementById('prevTestimonial').addEventListener('click',()=>{current=(current+testimonials.length-1)%testimonials.length;paint()});
}
function setupMobile() {
 const button=document.querySelector('.menu-toggle'), menu=document.getElementById('mobileNav');
 button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));menu.hidden=open;});
 window.closeMobile=()=>{button.setAttribute('aria-expanded','false');menu.hidden=true};
}
function setupInsuranceChecker() {
 const panel=document.getElementById('insurancePanel'), backdrop=document.getElementById('insuranceBackdrop'), form=document.getElementById('insuranceForm'), success=document.getElementById('insuranceSuccess');
 let step=1;
 function setStep(next) { step=next; document.querySelectorAll('.insurance-step').forEach(item=>item.classList.toggle('active', Number(item.dataset.insuranceStep)===step)); document.querySelectorAll('.insurance-steps span').forEach((item,index)=>item.classList.toggle('active',index<step)); }
 function open() { panel.hidden=false;backdrop.hidden=false;document.body.style.overflow='hidden';panel.querySelector('.close-button').focus(); }
 function close() { panel.hidden=true;backdrop.hidden=true;document.body.style.overflow='';form.hidden=false;success.hidden=true;document.querySelector('.insurance-steps').style.display='flex';setStep(1); }
 document.querySelectorAll('[data-open-insurance]').forEach(button=>button.addEventListener('click',open));
 document.querySelectorAll('[data-close-insurance]').forEach(button=>button.addEventListener('click',close));
 backdrop.addEventListener('click',close);
 document.querySelector('[data-next-insurance]').addEventListener('click',()=>{ const provider=form.elements.provider, birthdate=form.elements.birthdate; if (!provider.value || !birthdate.value) { (!provider.value ? provider : birthdate).focus(); return; } setStep(2); });
 document.querySelector('[data-prev-insurance]').addEventListener('click',()=>setStep(1));
 form.addEventListener('submit', event=>{event.preventDefault();if(!form.checkValidity()){form.reportValidity();return;}const data=new FormData(form);document.getElementById('insuranceName').textContent=(data.get('fullName')||'friend').split(' ')[0];document.getElementById('insuranceProvider').textContent=data.get('provider');form.hidden=true;success.hidden=false;document.querySelector('.insurance-steps').style.display='none';});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!panel.hidden)close()});
}
function setupBooking() {
 const panel=document.getElementById('bookingPanel'), back=document.getElementById('bookingBackdrop'), form=document.getElementById('appointmentForm'), success=document.getElementById('bookingSuccess');
 let current=1;
 function setStep(num) { current=num; document.querySelectorAll('.booking-step').forEach(s=>s.classList.toggle('active',Number(s.dataset.step)===num)); document.querySelectorAll('.booking-progress span').forEach((s,i)=>s.classList.toggle('active',i<num)); }
 function open() { panel.hidden=false;back.hidden=false;document.body.style.overflow='hidden';panel.querySelector('.close-button').focus(); }
 function close() {panel.hidden=true;back.hidden=true;document.body.style.overflow=''; form.hidden=false;success.hidden=true;document.querySelector('.booking-progress').style.display='flex'; setStep(1);}
 document.querySelectorAll('[data-open-booking]').forEach(b=>b.addEventListener('click',open));document.querySelectorAll('[data-close-booking]').forEach(b=>b.addEventListener('click',close));back.addEventListener('click',close);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden)close()});
 document.querySelectorAll('[data-next-step]').forEach(b=>b.addEventListener('click',()=>{
   if (current===2) { const date=form.elements.date, time=form.elements.time; if(!date.value || !time.value){ if(!date.value) date.focus(); else time.focus(); return;} }
   setStep(current+1);
 }));
 document.querySelectorAll('[data-prev-step]').forEach(b=>b.addEventListener('click',()=>setStep(current-1)));
 document.getElementById('treatmentOptions').addEventListener('change',e=>{document.querySelectorAll('.treatment-choice').forEach(x=>x.classList.toggle('selected',x.contains(e.target)&&e.target.checked))});
 form.addEventListener('submit',e=>{e.preventDefault();if(!form.checkValidity()){form.reportValidity();return;} const data=new FormData(form);const selection=data.get('treatment'), date=new Date(data.get('date')+'T12:00:00').toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'});document.getElementById('confirmedName').textContent=data.get('name').split(' ')[0]||'friend';document.getElementById('confirmationDetail').innerHTML=`<strong>${selection}</strong><br>${date} · ${data.get('time')}<br>${data.get('doctor')||'First available Lumina doctor'}`;form.hidden=true;success.hidden=false;document.querySelector('.booking-progress').style.display='none';});
 const inputDate=document.getElementById('formDate'); const min=new Date(); min.setDate(min.getDate()+1); inputDate.min=min.toISOString().split('T')[0]; const preferred=new Date();preferred.setDate(preferred.getDate()+4);inputDate.value=preferred.toISOString().split('T')[0];
}
function setupHeader() { const header=document.getElementById('siteHeader'); const update=()=>header.classList.toggle('scrolled',window.scrollY>10);update();window.addEventListener('scroll',update,{passive:true});}

initContent();setupMobile();setupRouting();setupGallery();setupFaqs();setupTestimonials();setupInsuranceChecker();setupBooking();setupHeader();
