/* ============================================================
   Journal Admin — Vanilla JS
   ============================================================ */

/* ---------- MOCK DATA ---------- */
const MEMBERS = [
  {id:1,name:'Aarav Sharma',email:'aarav@journal.com',phone:'+91 98765 43210',role:'Author',field:'Computer Science',joined:'2024-03-12',status:'Active',photo:'',bio:'Researcher in ML & NLP.'},
  {id:2,name:'Priya Iyer',email:'priya.iyer@univ.edu',phone:'+91 90000 22221',role:'Reviewer',field:'Biotechnology',joined:'2024-05-08',status:'Active',photo:'',bio:'Peer reviewer for 3 years.'},
  {id:3,name:'Marcus Chen',email:'mchen@tech.io',phone:'+1 415 555 0144',role:'Editor',field:'Physics',joined:'2023-11-30',status:'Active',photo:'',bio:'Senior editor.'},
  {id:4,name:'Sara Ahmed',email:'sara.a@research.org',phone:'+971 50 123 4567',role:'Author',field:'Medicine',joined:'2025-01-18',status:'Pending',photo:'',bio:'PhD candidate.'},
  {id:5,name:'Leon Park',email:'leon.park@kaist.kr',phone:'+82 10 9999 1111',role:'Reader',field:'Engineering',joined:'2024-09-21',status:'Active',photo:'',bio:''},
  {id:6,name:'Maya Rodriguez',email:'maya.r@ibero.mx',phone:'+52 55 4422 1100',role:'Author',field:'Economics',joined:'2025-02-04',status:'Suspended',photo:'',bio:''},
  {id:7,name:'David Kumar',email:'d.kumar@nitt.in',phone:'+91 99887 76655',role:'Reviewer',field:'Mathematics',joined:'2024-07-14',status:'Active',photo:'',bio:''},
  {id:8,name:'Elena Petrova',email:'elena.p@msu.ru',phone:'+7 916 555 2233',role:'Editor',field:'Chemistry',joined:'2024-04-02',status:'Active',photo:'',bio:''},
  {id:9,name:'Hiroshi Tanaka',email:'h.tanaka@u-tokyo.jp',phone:'+81 90 1122 3344',role:'Author',field:'Robotics',joined:'2025-03-19',status:'Pending',photo:'',bio:''},
  {id:10,name:'Fatima Hassan',email:'f.hassan@cairo.eg',phone:'+20 100 333 4455',role:'Reader',field:'Sociology',joined:'2024-12-01',status:'Active',photo:'',bio:''},
  {id:11,name:'Oliver Brown',email:'o.brown@ox.ac.uk',phone:'+44 7700 900111',role:'Reviewer',field:'Philosophy',joined:'2024-08-23',status:'Active',photo:'',bio:''},
  {id:12,name:'Anika Mehta',email:'anika.m@iitb.ac.in',phone:'+91 98111 22334',role:'Author',field:'Data Science',joined:'2025-04-10',status:'Active',photo:'',bio:''},
];

const CERTIFICATES = [
  {id:'CERT-2025-001',recipient:'Aarav Sharma',template:'Achievement Gold',date:'2025-08-12'},
  {id:'CERT-2025-002',recipient:'Priya Iyer',template:'Reviewer Excellence',date:'2025-08-09'},
  {id:'CERT-2025-003',recipient:'Marcus Chen',template:'Editorial Service',date:'2025-08-05'},
  {id:'CERT-2025-004',recipient:'Sara Ahmed',template:'Participation Basic',date:'2025-07-30'},
];

const TEMPLATES = [
  {id:1,name:'Achievement Gold',category:'Achievement',modified:'2025-08-01',used:24,title:'Certificate of Achievement',recipientLabel:'This is awarded to',body:'In recognition of outstanding contribution to academic research and scholarly excellence.',signatory:'Dr. Elena Petrova',signTitle:'Editor-in-Chief',border:'classic',primary:'#1A1A2E',secondary:'#E94560',pattern:'none'},
  {id:2,name:'Reviewer Excellence',category:'Excellence',modified:'2025-07-21',used:18,title:'Certificate of Excellence',recipientLabel:'Presented to',body:'For exceptional peer-review contributions throughout the publication year.',signatory:'Marcus Chen',signTitle:'Review Director',border:'modern',primary:'#0F172A',secondary:'#8B5CF6',pattern:'dots'},
  {id:3,name:'Participation Basic',category:'Participation',modified:'2025-06-15',used:42,title:'Certificate of Participation',recipientLabel:'Awarded to',body:'For active participation in the annual journal conference and proceedings.',signatory:'Dr. Aarav Sharma',signTitle:'Program Chair',border:'minimal',primary:'#1E293B',secondary:'#10B981',pattern:'grid'},
  {id:4,name:'Publication Honor',category:'Publication',modified:'2025-08-15',used:31,title:'Certificate of Publication',recipientLabel:'This certifies that',body:'The above-named author has successfully published a peer-reviewed article in our journal.',signatory:'Dr. Sara Ahmed',signTitle:'Managing Editor',border:'decorative',primary:'#7C3AED',secondary:'#E94560',pattern:'lines'},
  {id:5,name:'Editorial Service',category:'Achievement',modified:'2025-05-30',used:9,title:'Certificate of Service',recipientLabel:'In appreciation of',body:'Dedicated editorial service to the international journal community.',signatory:'Dr. Priya Iyer',signTitle:'Chief Editor',border:'classic',primary:'#1A1A2E',secondary:'#F59E0B',pattern:'none'},
  {id:6,name:'Distinguished Author',category:'Excellence',modified:'2025-04-22',used:6,title:'Distinguished Author Award',recipientLabel:'Conferred upon',body:'For sustained scholarly contribution and significant impact within the field.',signatory:'Editorial Board',signTitle:'Board of Editors',border:'decorative',primary:'#16213E',secondary:'#E94560',pattern:'dots'},
];

const NOTIFS = [
  {id:1,type:'member',title:'New member registration',desc:'Anika Mehta joined as Author',time:'2 minutes ago',unread:true},
  {id:2,type:'certificate',title:'Certificate issued',desc:'CERT-2025-004 sent to Sara Ahmed',time:'1 hour ago',unread:true},
  {id:3,type:'journal',title:'New submission received',desc:'Manuscript "Deep Learning in Genomics"',time:'3 hours ago',unread:true},
  {id:4,type:'system',title:'System maintenance scheduled',desc:'Planned downtime on Sunday 02:00 UTC',time:'1 day ago',unread:false},
  {id:5,type:'member',title:'Profile updated',desc:'Marcus Chen updated their profile',time:'2 days ago',unread:false},
  {id:6,type:'journal',title:'Issue published',desc:'Vol. 12 Issue 4 is now live',time:'3 days ago',unread:false},
  {id:7,type:'certificate',title:'Bulk certificates generated',desc:'15 participation certificates created',time:'4 days ago',unread:false},
];

/* ---------- HELPERS ---------- */
function initials(name){return name.split(/\s+/).slice(0,2).map(p=>p[0]||'').join('').toUpperCase()}
function $(s,r=document){return r.querySelector(s)}
function $$(s,r=document){return [...r.querySelectorAll(s)]}

/* ---------- DARK MODE ---------- */
(function darkInit(){
  if(localStorage.getItem('admin.darkMode')==='1')document.body.classList.add('dark-mode');
})();
function toggleDark(on){
  document.body.classList.toggle('dark-mode',on);
  localStorage.setItem('admin.darkMode',on?'1':'0');
}

/* ---------- SIDEBAR + ACTIVE NAV ---------- */
function initShell(){
  const cur=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  $$('.sidebar nav a').forEach(a=>{
    if((a.getAttribute('href')||'').toLowerCase()===cur)a.classList.add('active');
  });
  const ham=$('.ham');
  if(ham)ham.onclick=()=>$('.sidebar').classList.toggle('open');
  document.addEventListener('click',e=>{
    if(window.innerWidth<=768){
      const sb=$('.sidebar');
      if(sb&&!sb.contains(e.target)&&!e.target.closest('.ham'))sb.classList.remove('open');
    }
  });
  // user menu
  const um=$('.user-menu');
  if(um){
    um.querySelector('.av').onclick=e=>{e.stopPropagation();um.classList.toggle('open')};
    document.addEventListener('click',()=>um.classList.remove('open'));
  }
}

/* ---------- MODAL ---------- */
function openModal(id){
  const m=document.getElementById(id);if(!m)return;
  m.classList.add('show');document.body.style.overflow='hidden';
}
function closeModal(id){
  const m=document.getElementById(id);if(!m)return;
  m.classList.remove('show');document.body.style.overflow='';
}
document.addEventListener('click',e=>{
  if(e.target.classList.contains('modal'))closeModal(e.target.id);
  const x=e.target.closest('[data-close]');
  if(x){const m=x.closest('.modal,.drawer');if(m){m.classList.remove('show');document.body.style.overflow=''}}
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    $$('.modal.show,.drawer.show').forEach(m=>m.classList.remove('show'));
    document.body.style.overflow='';
  }
});
function openDrawer(id){const d=document.getElementById(id);if(d){d.classList.add('show');document.body.style.overflow='hidden'}}

/* ---------- TOAST ---------- */
function showToast(msg,type='info'){
  let wrap=$('.toast-wrap');
  if(!wrap){wrap=document.createElement('div');wrap.className='toast-wrap';document.body.appendChild(wrap)}
  const icons={success:'check-circle',error:'circle-xmark',warning:'triangle-exclamation',info:'circle-info'};
  const t=document.createElement('div');
  t.className='toast '+type;
  t.innerHTML=`<i class="fa-solid fa-${icons[type]}"></i><span>${msg}</span>`;
  wrap.appendChild(t);
  setTimeout(()=>{t.classList.add('hide');setTimeout(()=>t.remove(),300)},3000);
}

/* ---------- DASHBOARD ---------- */
function initDashboard(){
  // members table
  const tb=$('#dash-members tbody');
  if(tb){
    MEMBERS.slice(0,5).forEach(m=>{
      tb.insertAdjacentHTML('beforeend',`<tr>
        <td><div class="nm-cell"><span class="av-sm">${initials(m.name)}</span>${m.name}</div></td>
        <td>${m.email}</td>
        <td><span class="badge ${roleBadge(m.role)}">${m.role}</span></td>
        <td>${m.joined}</td>
        <td>${statusBadge(m.status)}</td>
      </tr>`);
    });
  }
  const tc=$('#dash-certs tbody');
  if(tc){
    CERTIFICATES.forEach(c=>{
      tc.insertAdjacentHTML('beforeend',`<tr>
        <td><code>${c.id}</code></td>
        <td>${c.recipient}</td>
        <td>${c.template}</td>
        <td>${c.date}</td>
        <td><div class="act-btns">
          <button aria-label="View"><i class="fa-regular fa-eye"></i></button>
          <button aria-label="Download"><i class="fa-solid fa-download"></i></button>
        </div></td>
      </tr>`);
    });
  }
  // Lightweight DataTables on dashboard previews
  if(window.jQuery && jQuery.fn.DataTable){
    if($('#dash-members')) jQuery('#dash-members').DataTable({paging:false,info:false,searching:false,ordering:true,order:[[3,'desc']]});
    if($('#dash-certs'))   jQuery('#dash-certs').DataTable({paging:false,info:false,searching:false,ordering:true,order:[[3,'desc']],columnDefs:[{orderable:false,targets:[4]}]});
  }
  // charts

  if(window.Chart){
    const lc=document.getElementById('chartLine');
    if(lc)new Chart(lc,{type:'line',data:{
      labels:['Mar','Apr','May','Jun','Jul','Aug'],
      datasets:[{label:'Submissions',data:[42,55,48,71,66,89],borderColor:'#E94560',backgroundColor:'rgba(233,69,96,.12)',tension:.35,fill:true,pointRadius:4,pointBackgroundColor:'#E94560'}]
    },options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,grid:{color:'rgba(148,163,184,.15)'}},x:{grid:{display:false}}}}});
    const dc=document.getElementById('chartDoughnut');
    if(dc)new Chart(dc,{type:'doughnut',data:{
      labels:['Authors','Reviewers','Editors','Readers'],
      datasets:[{data:[58,22,12,38],backgroundColor:['#3B82F6','#8B5CF6','#1A1A2E','#64748B'],borderWidth:0}]
    },options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom'}},cutout:'65%'}});
  }
}
function roleBadge(r){return {Author:'badge-info',Reviewer:'badge-purple',Editor:'badge-navy',Reader:'badge-gray'}[r]||'badge-gray'}
function statusBadge(s){
  const c={Active:'badge-success',Pending:'badge-warning',Suspended:'badge-danger'}[s]||'badge-gray';
  const d={Active:'var(--success)',Pending:'var(--warning)',Suspended:'var(--danger)'}[s];
  return `<span class="badge ${c}"><span class="dot" style="background:${d}"></span>${s}</span>`;
}

/* ---------- USERS PAGE ---------- */
let usersState={data:[...MEMBERS],page:1,perPage:10,search:'',role:'',status:'',editId:null};
function initUsers(){
  if(!$('#users-table'))return;
/* ---------- USERS PAGE (DataTables-powered) ---------- */
let usersState={data:[...MEMBERS],editId:null};
let usersDT=null;
function initUsers(){
  if(!$('#users-table'))return;
  // External filter for role + status (registered once)
  if(window.jQuery && jQuery.fn.DataTable && !jQuery.fn.dataTable.ext.search.__usersFilter){
    const fn=(settings, _data, _idx, rowData, rowIdx)=>{
      if(settings.nTable.id!=='users-table') return true;
      const role=document.getElementById('u-role')?.value||'';
      const status=document.getElementById('u-status')?.value||'';
      const tr=settings.aoData[rowIdx].nTr;
      if(!tr) return true;
      if(role && tr.getAttribute('data-role')!==role) return false;
      if(status && tr.getAttribute('data-status')!==status) return false;
      return true;
    };
    fn.__usersFilter=true;
    jQuery.fn.dataTable.ext.search.push(fn);
    jQuery.fn.dataTable.ext.search.__usersFilter=true;
  }
  $('#u-search').oninput=e=>{ if(usersDT) usersDT.search(e.target.value).draw(); };
  $('#u-role').onchange=()=>usersDT&&usersDT.draw();
  $('#u-status').onchange=()=>usersDT&&usersDT.draw();
  $('#u-add').onclick=()=>openUserModal(null);
  $('#u-export').onclick=exportCSV;
  $('#u-form').onsubmit=saveUser;
  $('#u-checkall').onchange=e=>{
    $$('#users-table tbody .row-chk').forEach(c=>c.checked=e.target.checked);
    updateBulk();
  };
  $('#bulk-suspend').onclick=()=>bulkAction('suspend');
  $('#bulk-delete').onclick=()=>bulkAction('delete');
  // hide legacy custom pagination — DataTables now owns paging
  const p=$('#u-pag'); if(p) p.style.display='none';
  renderUsers();
}
function renderUsers(){
  const tb=$('#users-table tbody');
  if(usersDT){ usersDT.destroy(); usersDT=null; }
  tb.innerHTML='';
  usersState.data.forEach((m,i)=>{
    tb.insertAdjacentHTML('beforeend',`<tr data-id="${m.id}" data-role="${m.role}" data-status="${m.status}">
      <td><input type="checkbox" class="row-chk" aria-label="Select row"></td>
      <td>${i+1}</td>
      <td><div class="nm-cell"><span class="av-sm">${initials(m.name)}</span>${m.name}</div></td>
      <td>${m.email}</td>
      <td><span class="badge ${roleBadge(m.role)}">${m.role}</span></td>
      <td>${m.field}</td>
      <td>${m.joined}</td>
      <td>${statusBadge(m.status)}</td>
      <td><div class="act-btns">
        <button aria-label="View" onclick="viewUser(${m.id})"><i class="fa-regular fa-eye"></i></button>
        <button aria-label="Edit" onclick="openUserModal(${m.id})"><i class="fa-regular fa-pen-to-square"></i></button>
        <button aria-label="Delete" onclick="confirmDeleteUser(${m.id})"><i class="fa-regular fa-trash-can"></i></button>
      </div></td>
    </tr>`);
  });
  $$('.row-chk').forEach(c=>c.onchange=updateBulk);
  if(window.jQuery && jQuery.fn.DataTable){
    usersDT = jQuery('#users-table').DataTable({
      pageLength:10,
      lengthMenu:[[10,25,50,100,-1],[10,25,50,100,'All']],
      order:[[6,'desc']],
      columnDefs:[
        {orderable:false, targets:[0,8]},
        {searchable:false, targets:[0,1,8]}
      ],
      dom:'<"dt-top"l>rt<"dt-bot"ip>',
      language:{lengthMenu:'Show _MENU_ entries',info:'Showing _START_–_END_ of _TOTAL_ members',infoEmpty:'No members',infoFiltered:'(filtered from _MAX_)',paginate:{previous:'‹',next:'›'},zeroRecords:'No members match the filters'},
      responsive:true,
      drawCallback:()=>{ const all=$('#u-checkall'); if(all) all.checked=false; updateBulk(); }
    });
    const s=$('#u-search'); if(s && s.value) usersDT.search(s.value).draw();
  }
}
function goPage(p){ if(usersDT) usersDT.page(p-1).draw('page'); }

function updateBulk(){
  const sel=$$('#users-table .row-chk:checked').length;
  const bar=$('#bulk-bar');
  bar.classList.toggle('show',sel>0);
  if(sel>0)$('.bulk-bar .ct').textContent=`${sel} selected`;
}
function selectedIds(){return $$('#users-table .row-chk:checked').map(c=>+c.closest('tr').dataset.id)}
function bulkAction(act){
  const ids=selectedIds();if(!ids.length)return;
  if(act==='delete'){
    usersState.data=usersState.data.filter(m=>!ids.includes(m.id));
    showToast(`${ids.length} member(s) deleted`,'success');
  }else{
    usersState.data.forEach(m=>{if(ids.includes(m.id))m.status='Suspended'});
    showToast(`${ids.length} member(s) suspended`,'warning');
  }
  $('#u-checkall').checked=false;updateBulk();renderUsers();
}
function openUserModal(id){
  usersState.editId=id;
  const f=$('#u-form');f.reset();
  $('#u-modal-title').textContent=id?'Edit Member':'Add New Member';
  if(id){
    const m=usersState.data.find(x=>x.id===id);
    f.name.value=m.name;f.email.value=m.email;f.phone.value=m.phone;
    f.role.value=m.role;f.field.value=m.field;f.photo.value=m.photo||'';
    f.bio.value=m.bio||'';f.activeStatus.checked=m.status==='Active';
  }else f.activeStatus.checked=true;
  openModal('u-modal');
}
function saveUser(e){
  e.preventDefault();
  const f=e.target,data={
    name:f.name.value.trim(),email:f.email.value.trim(),phone:f.phone.value.trim(),
    role:f.role.value,field:f.field.value.trim(),photo:f.photo.value.trim(),
    bio:f.bio.value.trim(),status:f.activeStatus.checked?'Active':'Pending'
  };
  if(!data.name||!data.email){showToast('Please fill required fields','error');return}
  if(usersState.editId){
    Object.assign(usersState.data.find(m=>m.id===usersState.editId),data);
    showToast('Member updated','success');
  }else{
    data.id=Math.max(...usersState.data.map(m=>m.id))+1;
    data.joined=new Date().toISOString().slice(0,10);
    usersState.data.unshift(data);
    showToast('Member added','success');
  }
  closeModal('u-modal');renderUsers();
}
function viewUser(id){
  const m=usersState.data.find(x=>x.id===id);if(!m)return;
  $('#dr-av').textContent=initials(m.name);
  $('#dr-name').textContent=m.name;
  $('#dr-role').innerHTML=`<span class="badge ${roleBadge(m.role)}">${m.role}</span>`;
  $('#dr-body').innerHTML=`
    <div class="detail-row"><span class="lbl">Email</span><span>${m.email}</span></div>
    <div class="detail-row"><span class="lbl">Phone</span><span>${m.phone||'—'}</span></div>
    <div class="detail-row"><span class="lbl">Field</span><span>${m.field||'—'}</span></div>
    <div class="detail-row"><span class="lbl">Joined</span><span>${m.joined}</span></div>
    <div class="detail-row"><span class="lbl">Status</span><span>${statusBadge(m.status)}</span></div>
    <h4 style="margin:20px 0 10px;font-size:14px">Activity Summary</h4>
    <div class="stats" style="grid-template-columns:repeat(3,1fr);gap:8px;margin:0">
      <div class="stat" style="padding:12px;flex-direction:column;text-align:center"><div class="num" style="font-size:20px">${Math.floor(Math.random()*15)+1}</div><div class="lb" style="font-size:11px">Journals</div></div>
      <div class="stat" style="padding:12px;flex-direction:column;text-align:center"><div class="num" style="font-size:20px">${Math.floor(Math.random()*30)+1}</div><div class="lb" style="font-size:11px">Reviews</div></div>
      <div class="stat" style="padding:12px;flex-direction:column;text-align:center"><div class="num" style="font-size:20px">${Math.floor(Math.random()*8)}</div><div class="lb" style="font-size:11px">Certificates</div></div>
    </div>
    ${m.bio?`<h4 style="margin:20px 0 10px;font-size:14px">Bio</h4><p style="font-size:13px;color:var(--text-secondary);line-height:1.6">${m.bio}</p>`:''}`;
  openDrawer('view-drawer');
}
function confirmDeleteUser(id){
  const m=usersState.data.find(x=>x.id===id);if(!m)return;
  $('#del-name').textContent=m.name;
  $('#del-confirm').onclick=()=>{
    const row=document.querySelector(`#users-table tr[data-id="${id}"]`);
    if(row){row.classList.add('fading');setTimeout(()=>{
      usersState.data=usersState.data.filter(x=>x.id!==id);
      renderUsers();showToast(`${m.name} removed`,'success');
    },300)}
    closeModal('del-modal');
  };
  openModal('del-modal');
}
function exportCSV(){
  const list=filteredUsers();
  const headers=['ID','Name','Email','Phone','Role','Field','Joined','Status'];
  const rows=list.map(m=>[m.id,m.name,m.email,m.phone,m.role,m.field,m.joined,m.status]
    .map(v=>`"${(v??'').toString().replace(/"/g,'""')}"`).join(','));
  const csv=[headers.join(','),...rows].join('\n');
  const blob=new Blob([csv],{type:'text/csv'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);a.download='members.csv';a.click();
  showToast('CSV exported','success');
}

/* ---------- CERTIFICATES PAGE ---------- */
let certState={view:'grid',search:'',category:'',editId:null};
function initCertificates(){
  if(!$('#cert-area'))return;
  $('#c-search').oninput=e=>{certState.search=e.target.value.toLowerCase();renderCerts()};
  $('#c-cat').onchange=e=>{certState.category=e.target.value;renderCerts()};
  $('#c-add').onclick=()=>openCertModal(null);
  $$('.view-toggle button').forEach(b=>b.onclick=()=>{
    $$('.view-toggle button').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');certState.view=b.dataset.view;renderCerts();
  });
  // Live preview
  const f=$('#c-form');
  if(f){
    ['name','category','title','recipientLabel','body','signatory','signTitle','dateFormat','border','primary','secondary','logo','pattern'].forEach(k=>{
      if(f[k])f[k].addEventListener('input',updateCertPreview);
    });
    f.onsubmit=saveCert;
  }
  renderCerts();
}
function filteredCerts(){
  return TEMPLATES.filter(t=>{
    if(certState.search&&!t.name.toLowerCase().includes(certState.search))return false;
    if(certState.category&&t.category!==certState.category)return false;
    return true;
  });
}
function renderCerts(){
  const area=$('#cert-area');area.innerHTML='';
  const list=filteredCerts();
  if(!list.length){area.innerHTML='<div class="empty"><i class="fa-regular fa-folder-open"></i><h3>No templates found</h3></div>';return}
  if(certState.view==='grid'){
    const wrap=document.createElement('div');wrap.className='cert-grid';
    list.forEach(t=>wrap.insertAdjacentHTML('beforeend',`
      <div class="cert-card">
        <div class="cert-thumb" style="border-color:${t.secondary}">
          <span class="ribbon" style="background:${t.secondary}">${t.category}</span>
          <div class="ttl"><div class="nm">${t.title}</div><div class="sub">${t.signatory}</div></div>
        </div>
        <div class="cert-body">
          <h4>${t.name}</h4>
          <div class="meta">Modified ${t.modified} · Used ${t.used} times</div>
        </div>
        <div class="cert-actions">
          <span class="badge badge-info">${t.category}</span>
          <div class="act-btns">
            <button aria-label="Preview" onclick="previewCert(${t.id})"><i class="fa-regular fa-eye"></i></button>
            <button aria-label="Edit" onclick="openCertModal(${t.id})"><i class="fa-regular fa-pen-to-square"></i></button>
            <button aria-label="Duplicate" onclick="duplicateCert(${t.id})"><i class="fa-regular fa-clone"></i></button>
            <button aria-label="Delete" onclick="confirmDeleteCert(${t.id})"><i class="fa-regular fa-trash-can"></i></button>
          </div>
        </div>
      </div>`));
    area.appendChild(wrap);
  }else{
    const card=document.createElement('div');card.className='table-card';
    card.innerHTML=`<div class="table-wrap"><table class="tbl"><thead><tr>
      <th>#</th><th>Preview</th><th>Name</th><th>Category</th><th>Created</th><th>Used</th><th>Actions</th>
    </tr></thead><tbody></tbody></table></div>`;
    const tb=card.querySelector('tbody');
    list.forEach((t,i)=>tb.insertAdjacentHTML('beforeend',`<tr>
      <td>${i+1}</td>
      <td><div style="width:60px;height:38px;background:linear-gradient(135deg,${t.primary},${t.secondary});border-radius:4px"></div></td>
      <td><strong>${t.name}</strong></td>
      <td><span class="badge badge-info">${t.category}</span></td>
      <td>${t.modified}</td><td>${t.used}</td>
      <td><div class="act-btns">
        <button aria-label="Preview" onclick="previewCert(${t.id})"><i class="fa-regular fa-eye"></i></button>
        <button aria-label="Edit" onclick="openCertModal(${t.id})"><i class="fa-regular fa-pen-to-square"></i></button>
        <button aria-label="Duplicate" onclick="duplicateCert(${t.id})"><i class="fa-regular fa-clone"></i></button>
        <button aria-label="Delete" onclick="confirmDeleteCert(${t.id})"><i class="fa-regular fa-trash-can"></i></button>
      </div></td>
    </tr>`));
    area.appendChild(card);
  }
}
function openCertModal(id){
  certState.editId=id;
  const f=$('#c-form');f.reset();
  $('#c-modal-title').textContent=id?'Edit Template':'Create New Template';
  const t=id?TEMPLATES.find(x=>x.id===id):{name:'',category:'Achievement',title:'Certificate of Achievement',recipientLabel:'This is awarded to',body:'In recognition of outstanding contribution.',signatory:'',signTitle:'',dateFormat:'DD/MM/YYYY',border:'classic',primary:'#1A1A2E',secondary:'#E94560',logo:'',pattern:'none'};
  Object.keys(t).forEach(k=>{if(f[k])f[k].value=t[k]});
  updateCertPreview();
  openModal('c-modal');
}
function updateCertPreview(){
  const f=$('#c-form');if(!f)return;
  const p=$('#c-preview');
  p.className='cert-preview b-'+(f.border.value||'classic')+(f.pattern.value&&f.pattern.value!=='none'?' pat-'+f.pattern.value:'');
  p.style.setProperty('--p',f.primary.value);
  p.style.setProperty('--s',f.secondary.value);
  p.innerHTML=`
    ${f.logo.value?`<img src="${f.logo.value}" alt="" style="width:48px;height:48px;object-fit:contain;margin-bottom:8px" onerror="this.style.display='none'">`:'<div class="lg">J</div>'}
    <div class="ct">${f.title.value||'Certificate Title'}</div>
    <div class="rl">${f.recipientLabel.value||'Awarded to'}</div>
    <div class="nm">Recipient Name</div>
    <div class="bd">${f.body.value||'Certificate body text appears here.'}</div>
    <div class="sig">${f.signatory.value||'Signatory Name'}<small>${f.signTitle.value||'Title'}</small></div>`;
}
function saveCert(e){
  e.preventDefault();
  const f=e.target,data={};
  ['name','category','title','recipientLabel','body','signatory','signTitle','dateFormat','border','primary','secondary','logo','pattern'].forEach(k=>data[k]=f[k].value);
  if(!data.name){showToast('Template name required','error');return}
  if(certState.editId){
    Object.assign(TEMPLATES.find(t=>t.id===certState.editId),data,{modified:new Date().toISOString().slice(0,10)});
    showToast('Template updated','success');
  }else{
    TEMPLATES.unshift({...data,id:Math.max(...TEMPLATES.map(t=>t.id))+1,modified:new Date().toISOString().slice(0,10),used:0});
    showToast('Template created','success');
  }
  closeModal('c-modal');renderCerts();
}
function duplicateCert(id){
  const t=TEMPLATES.find(x=>x.id===id);if(!t)return;
  TEMPLATES.unshift({...t,id:Math.max(...TEMPLATES.map(x=>x.id))+1,name:t.name+' (Copy)',modified:new Date().toISOString().slice(0,10),used:0});
  showToast('Template duplicated','success');renderCerts();
}
function confirmDeleteCert(id){
  const t=TEMPLATES.find(x=>x.id===id);if(!t)return;
  $('#cdel-name').textContent=t.name;
  $('#cdel-count').textContent=t.used;
  $('#cdel-confirm').onclick=()=>{
    const idx=TEMPLATES.findIndex(x=>x.id===id);TEMPLATES.splice(idx,1);
    showToast('Template deleted','success');renderCerts();closeModal('cdel-modal');
  };
  openModal('cdel-modal');
}
function previewCert(id){openCertModal(id)}

/* ---------- NOTIFICATIONS ---------- */
let notifState={filter:'all',data:[...NOTIFS]};
function initNotifications(){
  if(!$('#notif-list'))return;
  $$('.tab-pills button').forEach(b=>b.onclick=()=>{
    $$('.tab-pills button').forEach(x=>x.classList.remove('active'));b.classList.add('active');
    notifState.filter=b.dataset.filter;renderNotifs();
  });
  $('#n-readall').onclick=()=>{notifState.data.forEach(n=>n.unread=false);renderNotifs();showToast('All marked as read','success')};
  $('#n-clearall').onclick=()=>{notifState.data=[];renderNotifs();showToast('All cleared','info')};
  $$('.collapsible-head').forEach(h=>h.onclick=()=>h.parentElement.classList.toggle('open'));
  renderNotifs();
}
function renderNotifs(){
  const list=$('#notif-list');list.innerHTML='';
  let arr=notifState.data;
  if(notifState.filter==='unread')arr=arr.filter(n=>n.unread);
  else if(notifState.filter!=='all')arr=arr.filter(n=>n.type===notifState.filter);
  if(!arr.length){
    list.innerHTML=`<div class="empty"><i class="fa-regular fa-bell"></i><h3>You're all caught up!</h3><p>No notifications here.</p></div>`;
  }else{
    const colors={journal:'var(--info)',member:'var(--success)',certificate:'var(--warning)',system:'var(--text-secondary)'};
    const icons={journal:'file-lines',member:'user-plus',certificate:'award',system:'gear'};
    arr.forEach(n=>{
      const el=document.createElement('div');
      el.className='notif '+(n.unread?'unread':'');
      el.dataset.id=n.id;
      el.innerHTML=`
        <div class="ic" style="background:${colors[n.type]}"><i class="fa-solid fa-${icons[n.type]}"></i></div>
        <div class="body"><div class="ti">${n.title}</div><div class="dc">${n.desc}</div><div class="ts">${n.time}</div></div>
        <div class="meta">${n.unread?'<span class="udot"></span>':''}<button class="btn-ghost" aria-label="Dismiss" data-act="dismiss"><i class="fa-solid fa-xmark"></i></button></div>`;
      el.onclick=e=>{
        if(e.target.closest('[data-act="dismiss"]')){
          el.classList.add('dismissing');
          setTimeout(()=>{notifState.data=notifState.data.filter(x=>x.id!==n.id);renderNotifs();updateBellBadge()},300);
          return;
        }
        n.unread=false;el.classList.remove('unread');el.querySelector('.udot')?.remove();updateBellBadge();
      };
      list.appendChild(el);
    });
  }
  updateBellBadge();
}
function updateBellBadge(){
  const c=notifState.data.filter(n=>n.unread).length;
  $$('.bell .badge').forEach(b=>{b.textContent=c;b.style.display=c?'':'none'});
}

/* ---------- PROFILE ---------- */
function initProfile(){
  if(!$('.profile-grid'))return;
  $$('.tabs button').forEach(b=>b.onclick=()=>{
    $$('.tabs button').forEach(x=>x.classList.remove('active'));b.classList.add('active');
    $$('.tab-panel').forEach(p=>p.classList.remove('active'));
    $('#tab-'+b.dataset.tab).classList.add('active');
  });
  const pw=$('#pw-new');
  if(pw)pw.oninput=()=>{
    const v=pw.value;let s=0;
    if(v.length>=8)s+=25;if(/[A-Z]/.test(v))s+=25;if(/\d/.test(v))s+=25;if(/[^A-Za-z0-9]/.test(v))s+=25;
    const bar=$('.pw-meter .bar');bar.style.width=s+'%';
    bar.style.background=s<50?'var(--danger)':s<75?'var(--warning)':'var(--success)';
  };
  $$('form[data-form]').forEach(f=>f.onsubmit=e=>{
    e.preventDefault();showToast(f.dataset.form+' saved','success');
  });
  const ph=$('#p-photo');
  if(ph)ph.oninput=()=>{const pv=$('#p-photo-prev');if(pv){pv.src=ph.value;pv.style.display=ph.value?'block':'none'}};
  // dark mode toggle
  const dm=$('#tgl-dark');
  if(dm){dm.checked=document.body.classList.contains('dark-mode');dm.onchange=e=>toggleDark(e.target.checked)}
  // revoke
  $$('[data-revoke]').forEach(b=>b.onclick=e=>{e.target.closest('.session').remove();showToast('Session revoked','warning')});
}

/* ---------- LOGIN ---------- */
function initLogin(){
  const f=$('#login-form');if(!f)return;
  $('.eye').onclick=()=>{
    const i=$('#l-pw');const show=i.type==='password';
    i.type=show?'text':'password';
    $('.eye i').className=show?'fa-regular fa-eye-slash':'fa-regular fa-eye';
  };
  f.onsubmit=e=>{
    e.preventDefault();let ok=true;
    ['l-email','l-pw'].forEach(id=>{
      const el=document.getElementById(id);const wrap=el.closest('.field');
      if(!el.value.trim()){wrap.classList.add('has-err');el.classList.add('error');ok=false}
      else{wrap.classList.remove('has-err');el.classList.remove('error')}
    });
    if(ok){showToast('Welcome back!','success');setTimeout(()=>location.href='index.html',600)}
  };
  ['l-email','l-pw'].forEach(id=>{
    document.getElementById(id).oninput=e=>{
      e.target.classList.remove('error');e.target.closest('.field').classList.remove('has-err');
    };
  });
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded',()=>{
  initShell();initDashboard();initUsers();initCertificates();initNotifications();initProfile();initLogin();
  updateBellBadge();
});
