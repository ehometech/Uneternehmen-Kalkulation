const groups=["Einzelkosten","lohngebundene GK","Lohnnebenkosten","lohnunabhängige GK"];
const defaultPayroll={paidDays:261,dailyHours:8,holidays:10,vacationDays:24,specialLeaveDays:2,sickDays:16,holidayPayPct:0,christmasPayPct:0,pensionPct:18.6,healthPct:14.6,unemploymentPct:2.6,carePct:3.4,accidentPct:2.4,efgUmlagePct:2.9,efgRefundPct:70,otherLegalPct:1.5,companyAddonPct:2,nonBillablePct:10};
let employees=[
 {id:1,type:"journey",name:"Installateur",count:1,hourly:15,productivity:100,paidDays:261,dailyHours:8,holidays:10,vacationDays:24,specialLeaveDays:2,sickDays:16,holidayPayPct:0,christmasPayPct:0,pensionPct:18.6,healthPct:14.6,unemploymentPct:2.6,carePct:3.4,accidentPct:2.4,efgUmlagePct:2.9,efgRefundPct:70,otherLegalPct:1.5,companyAddonPct:2,nonBillablePct:10},
 {id:2,type:"journey",name:"Geschäftsführer",count:1,hourly:0,productivity:20,paidDays:261,dailyHours:8,holidays:10,vacationDays:24,specialLeaveDays:2,sickDays:8,holidayPayPct:0,christmasPayPct:0,pensionPct:0,healthPct:0,unemploymentPct:0,carePct:0,accidentPct:0,efgUmlagePct:0,efgRefundPct:0,otherLegalPct:0,companyAddonPct:0,nonBillablePct:80},
 {id:3,type:"apprentice",name:"Lehrling 1. Lehrjahr",count:1,monthlyPay:950,vmwl:12,year:1,dailyHours:8,paidDays:261,holidays:10,vacationDays:30,specialLeaveDays:2,sickDays:7,holidayPayPct:0,christmasPayPct:10,pensionPct:18.6,healthPct:14.6,unemploymentPct:2.6,carePct:3.4,accidentPct:2.85,efgUmlagePct:2.9,efgRefundPct:70,generalApprenticePct:25,trainerHourlyCost:20,trainerHours:100,externalTrainingHours:150,vocationalSchoolHours:450,internalTrainingHours:300}
 ];
let calcPositions=[
 {id:1,pos:1,kfe:'',name:'Leistung aus KFE',qty:1,unit:'m',matEk:0,minutes:0,cuPct:0,wastePct:0,machMin:0}
];
let costRows=[
 {id:1,auto:"productivePayroll",group:"Einzelkosten",name:"Fertigungskosten produktive Mitarbeiter",amount:107003.02,calc:"automatisch aus Personal",installation:100,verwaltung:0,material:0},
 {id:21,auto:"productiveApprentice",group:"Einzelkosten",name:"Fertigungskosten produktive Lehrlinge",amount:16800,calc:"automatisch aus Lehrlingen",installation:100,verwaltung:0,material:0},
 {id:19,auto:"unproductivePayroll",group:"lohnunabhängige GK",name:"kalkulatorische unprod. Mitarbeiterkosten",amount:18000,calc:"automatisch aus Personal",installation:70,verwaltung:30,material:0},
 {id:20,auto:"unproductiveApprentice",group:"lohnunabhängige GK",name:"kalkulatorische unprod. Lehrlingskosten",amount:6000,calc:"automatisch aus Lehrlingen",installation:70,verwaltung:30,material:0},
 {id:1001,group:"Einzelkosten",name:"Fremdleistungen / Subunternehmer",amount:1296.14,calc:"aus CSV 2025: Fremdleistungen §13b, Fremdleistungen §13b Drittland, Subunternehmer",installation:100,verwaltung:0,material:0},
 {id:1002,group:"Einzelkosten",name:"Lohn/Gehalt aus Buchhaltung - prüfen",amount:1475.34,calc:"aus CSV 2025: Verrechnung Lohn/Gehalt",installation:100,verwaltung:0,material:0},
 {id:1003,group:"Einzelkosten",name:"Materialverbrauch / Materialverkauf",amount:57616.58,calc:"aus CSV 2025: Innergemeinschaftlicher Erwerb, Material/Waren, Materialeinkauf",installation:0,verwaltung:0,material:100},
 {id:1004,group:"Lohnnebenkosten",name:"Sozialversicherung Beiträge",amount:1504.27,calc:"aus CSV 2025: Sozialversicherungsbeiträge",installation:100,verwaltung:0,material:0},
 {id:1005,group:"lohnunabhängige GK",name:"Anschaffungen / Abschreibung prüfen",amount:888.06,calc:"aus CSV 2025: Anschaffungen",installation:50,verwaltung:30,material:20},
 {id:1006,group:"lohnunabhängige GK",name:"Bankgebühren",amount:92.0,calc:"aus CSV 2025: Nebenkosten des Geldverkehrs",installation:0,verwaltung:100,material:0},
 {id:1007,group:"lohnunabhängige GK",name:"Beiträge / Kammer / Verband",amount:506.0,calc:"aus CSV 2025: Beiträge",installation:10,verwaltung:90,material:0},
 {id:1008,group:"lohnunabhängige GK",name:"Bewirtung / Kundengewinnung",amount:635.34,calc:"aus CSV 2025: Bewirtungskosten (mit Geschäftspartnern)",installation:20,verwaltung:70,material:10},
 {id:1009,group:"lohnunabhängige GK",name:"Bewirtung nicht abziehbar - prüfen",amount:681.02,calc:"aus CSV 2025: Bewirtungskosten (nicht abziehbar)",installation:20,verwaltung:70,material:10},
 {id:1010,group:"lohnunabhängige GK",name:"Bürobedarf / Verwaltung",amount:2001.42,calc:"aus CSV 2025: Bürobedarf",installation:10,verwaltung:80,material:10},
 {id:1011,group:"lohnunabhängige GK",name:"Fachliteratur",amount:596.96,calc:"aus CSV 2025: Zeitschriften/Bücher",installation:20,verwaltung:70,material:10},
 {id:1012,auto:"vehicleCosts",group:"lohnunabhängige GK",name:"Fahrzeugkosten automatisch aus Fahrzeugmodul",amount:0,calc:"automatisch aus Fahrzeugmodul",installation:70,verwaltung:10,material:20},
 {id:1013,group:"lohnunabhängige GK",name:"Maschinen / Anlagen - Abschreibung prüfen",amount:12716.6,calc:"aus CSV 2025: Anlagen und Maschinen, Technische Anlagen und Maschinen",installation:50,verwaltung:30,material:20},
 {id:1014,group:"lohnunabhängige GK",name:"Porto",amount:37.53,calc:"aus CSV 2025: Porto",installation:10,verwaltung:80,material:10},
 {id:1015,group:"lohnunabhängige GK",name:"Raumkosten",amount:2.52,calc:"aus CSV 2025: Raumkosten",installation:20,verwaltung:70,material:10},
 {id:1016,group:"lohnunabhängige GK",name:"Rechtsberatung",amount:527.0,calc:"aus CSV 2025: Rechtsanwalt",installation:0,verwaltung:100,material:0},
 {id:1017,group:"lohnunabhängige GK",name:"Reisekosten / Übernachtung",amount:145.41,calc:"aus CSV 2025: Übernachtung MA, Übernachtungskosten",installation:80,verwaltung:20,material:0},
 {id:1018,group:"lohnunabhängige GK",name:"Software",amount:19.2,calc:"aus CSV 2025: Software",installation:20,verwaltung:70,material:10},
 {id:1019,group:"lohnunabhängige GK",name:"Software / Lizenzen",amount:922.04,calc:"aus CSV 2025: Lizenzen und Konzessionen",installation:20,verwaltung:70,material:10},
 {id:1020,group:"lohnunabhängige GK",name:"Sonstige Betriebsausgaben",amount:204.85,calc:"aus CSV 2025: Sonstige Ausgaben",installation:30,verwaltung:60,material:10},
 {id:1021,group:"lohnunabhängige GK",name:"Telefon / Internet",amount:209.44,calc:"aus CSV 2025: Telekommunikation",installation:20,verwaltung:70,material:10},
 {id:1022,group:"lohnunabhängige GK",name:"Weiterbildung / Schulung",amount:43.69,calc:"aus CSV 2025: Seminar/Weiterbildung",installation:60,verwaltung:40,material:0},
 {id:1023,group:"lohnunabhängige GK",name:"Werbung / Marketing",amount:473.71,calc:"aus CSV 2025: Werbung, Werbung §13b, Werbung §13b Drittland",installation:40,verwaltung:40,material:20},
 {id:1024,group:"lohnunabhängige GK",name:"Werkzeug / Kleingeräte",amount:1567.32,calc:"aus CSV 2025: Werkzeuge und Kleingeräte",installation:70,verwaltung:10,material:20}
];
const eur=v=>new Intl.NumberFormat("de-DE",{style:"currency",currency:"EUR"}).format(Number(v||0));
const pct=v=>Number(v||0).toLocaleString("de-DE",{minimumFractionDigits:2,maximumFractionDigits:2})+" %";
const n=id=>num(document.getElementById(id)?.value||0);
function num(v){
 if(v===null||v===undefined||v==='') return 0;
 if(typeof v==='number') return Number.isFinite(v)?v:0;
 let s=String(v).trim().replace(/\s/g,'');
 // Deutsch: 1.234,56  | Englisch/App: 1234.56 | Deutsch einfach: 1234,56
 if(s.includes(',') && s.includes('.')) s=s.replace(/\./g,'').replace(',','.');
 else s=s.replace(',','.');
 const n=Number(s);
 return Number.isFinite(n)?n:0;
}
function safeCalc(x){const c=String(x||"").replaceAll(",",".").replaceAll(" ","");if(!/^[0-9+\-*/().]+$/.test(c))return 0;try{let v=Function('"use strict";return('+c+')')();return Number.isFinite(v)?v:0}catch{return 0}}
function calcEmployeeCost(e){
 const d={...defaultPayroll,...e}; const grossWage=num(e.hourly)*num(d.dailyHours)*num(d.paidDays)*num(e.count||1);
 const vmwl=12*num(d.vmwl||0)*num(e.count||1); const vacationBonus=grossWage*num(d.vacationDays)*num(d.holidayPayPct)/(num(d.paidDays)||1)/100;
 const christmas=grossWage*num(d.christmasPayPct)/100; const gross=grossWage+vmwl+vacationBonus+christmas;
 // SV: Eingabe = Gesamtbeitragssatz (AN+AG), daher ÷200 = AG-Hälfte korrekt
 const social=gross*(num(d.pensionPct)+num(d.healthPct)+num(d.unemploymentPct)+num(d.carePct))/200;
 // EFG-Erstattung: korrekt auf Brutto-Tageslohnbasis (nicht nur hourly)
 const sickWage=gross/Math.max(num(d.paidDays),1)*num(d.sickDays); const legalExtra=gross*num(d.accidentPct)/100+gross*num(d.efgUmlagePct)/100-sickWage*num(d.efgRefundPct)/100+gross*num(d.otherLegalPct)/100;
 const company=gross*num(d.companyAddonPct)/100; const total=gross+social+legalExtra+company;
 const attendanceHours=Math.max(0,(num(d.paidDays)-num(d.holidays)-num(d.vacationDays)-num(d.specialLeaveDays)-num(d.sickDays))*num(d.dailyHours)*num(e.count||1));
 const productiveHours=Math.max(0,attendanceHours*(1-num(d.nonBillablePct)/100)*num(e.productivity||100)/100);
 const absentWage=num(e.hourly)*num(d.dailyHours)*(num(d.holidays)+num(d.vacationDays)+num(d.specialLeaveDays)+num(d.sickDays))*num(e.count||1);
 const productiveCost=attendanceHours?total*Math.min(productiveHours/attendanceHours,1):0;
 const unproductiveCost=Math.max(0,total-productiveCost);
 return {gross,total,attendanceHours,productiveHours,productiveCost,unproductiveCost,costPerAttendance:attendanceHours?total/attendanceHours:0,costPerProductive:productiveHours?total/productiveHours:0,addonPct:num(e.hourly)?((productiveHours?total/productiveHours:0)-num(e.hourly))*100/num(e.hourly):0,absentWage,nonProductiveCost:unproductiveCost};
}
function calcApprenticeCost(e){
 const payYear=num(e.monthlyPay)*12*num(e.count||1); const vmwl=num(e.vmwl)*12*num(e.count||1); const vacBonus=payYear*num(e.vacationDays)*num(e.holidayPayPct)/(num(e.paidDays)||1)/100; const christmas=num(e.monthlyPay)*num(e.christmasPayPct)/100*num(e.count||1);
 const gross=payYear+vmwl+vacBonus+christmas;
 // SV: Gesamtbeitragssatz ÷200 = AG-Anteil korrekt
 const social=gross*(num(e.pensionPct)+num(e.healthPct)+num(e.unemploymentPct)+num(e.carePct))/200;
 // EFG-Erstattung: auf Brutto-Tageslohnbasis
 const sickPay=gross/Math.max(num(e.paidDays),1)*num(e.sickDays); const extras=gross*num(e.accidentPct)/100+gross*num(e.efgUmlagePct)/100-sickPay*num(e.efgRefundPct)/100;
 const trainingCost=gross*num(e.generalApprenticePct)/100+num(e.trainerHourlyCost)*num(e.trainerHours)*num(e.count||1);
 const total=gross+social+extras+trainingCost;
 const paidHours=num(e.dailyHours)*num(e.paidDays)*num(e.count||1); const absenceHours=(num(e.holidays)+num(e.vacationDays)+num(e.specialLeaveDays)+num(e.sickDays))*num(e.dailyHours)*num(e.count||1);
 const trainingHours=(num(e.externalTrainingHours)+num(e.vocationalSchoolHours)+num(e.internalTrainingHours))*num(e.count||1); const productiveHours=Math.max(0,paidHours-absenceHours-trainingHours);
 const attendanceHours=paidHours-absenceHours;
 const productiveCost=attendanceHours?total*Math.min(productiveHours/attendanceHours,1):0;
 const unproductiveCost=Math.max(0,total-productiveCost);
 return {gross,total,attendanceHours,productiveHours,productiveCost,unproductiveCost,costPerAttendance:attendanceHours?total/attendanceHours:0,costPerProductive:productiveHours?total/productiveHours:0,trainingHours,trainingCost};
}
function empField(e,k,label,type="text"){return `<div><label>${label}</label><input type="${type}" inputmode="decimal" value="${e[k]??''}" oninput="updEmp(${e.id},'${k}',this.value)" onblur="renderEmployees()"></div>`}
function renderEmployees(){document.getElementById("employees").innerHTML=employees.map(e=>{const r=e.type==="apprentice"?calcApprenticeCost(e):calcEmployeeCost(e);return `<div class="card emp-card"><div class="grid"><div><label>Name</label><input value="${e.name}" oninput="updEmp(${e.id},'name',this.value)"></div><div><label>Typ</label><select onchange="updEmp(${e.id},'type',this.value)"><option value="journey" ${e.type!=="apprentice"?"selected":""}>Geselle/Mitarbeiter</option><option value="apprentice" ${e.type==="apprentice"?"selected":""}>Lehrling</option></select></div>${empField(e,'count','Anzahl')}</div><div class="grid">${e.type==="apprentice"?`${empField(e,'monthlyPay','Monatsvergütung €')}${empField(e,'vmwl','VWL €/Monat')}${empField(e,'dailyHours','Std./Tag')}${empField(e,'paidDays','Bezahlte Arbeitstage')}${empField(e,'vacationDays','Urlaubstage')}${empField(e,'holidays','Feiertage')}${empField(e,'sickDays','Krankheitstage')}${empField(e,'specialLeaveDays','Sonderurlaub')}${empField(e,'christmasPayPct','Sonderzahlung %')}${empField(e,'externalTrainingHours','Überbetr. Ausbildung h')}${empField(e,'vocationalSchoolHours','Berufsschule h')}${empField(e,'internalTrainingHours','Betriebl. Schulung h')}${empField(e,'generalApprenticePct','Allg. Lehrlingskosten %')}${empField(e,'trainerHourlyCost','Ausbilderkosten €/h')}${empField(e,'trainerHours','Ausbilderstunden')}`:`${empField(e,'hourly','Stundenlohn €')}${empField(e,'dailyHours','Std./Tag')}${empField(e,'paidDays','Bezahlte Arbeitstage')}${empField(e,'vacationDays','Urlaubstage')}${empField(e,'holidays','Feiertage')}${empField(e,'sickDays','Krankheitstage')}${empField(e,'specialLeaveDays','Sonderurlaub')}${empField(e,'holidayPayPct','Urlaubsgeld %')}${empField(e,'christmasPayPct','Weihnachtsgeld %')}${empField(e,'nonBillablePct','Nicht verrechenbar %')}${empField(e,'productivity','Produktivität %')}`}</div><details><summary>Sozialversicherung / Umlagen wie Perko</summary><div class="grid">${empField(e,'pensionPct','Rentenversicherung %')}${empField(e,'healthPct','Krankenversicherung %')}${empField(e,'unemploymentPct','Arbeitslosenvers. %')}${empField(e,'carePct','Pflegeversicherung %')}${empField(e,'accidentPct','Unfallversicherung %')}${empField(e,'efgUmlagePct','EFG-Umlage %')}${empField(e,'efgRefundPct','EFG-Erstattung %')}${e.type!=="apprentice"?empField(e,'otherLegalPct','Sonstige gesetzl. %')+empField(e,'companyAddonPct','Betriebl. Zusatzkosten %'):''}</div></details><div class="grid result-row"><div><span class="muted">Jahres-Brutto</span><b>${eur(r.gross)}</b></div><div><span class="muted">Personalkosten/Jahr</span><b>${eur(r.total)}</b></div><div><span class="muted">Produktive Std.</span><b>${r.productiveHours.toLocaleString('de-DE',{maximumFractionDigits:1})} h</b></div><div><span class="muted">Kosten/prod. Std.</span><b>${eur(r.costPerProductive)}/h</b></div></div><button class="danger" onclick="employees=employees.filter(x=>x.id!==${e.id});renderEmployees();calcAll()">Löschen</button></div>`}).join("")}
function updEmp(id,k,v){let r=employees.find(x=>x.id===id);r[k]=k==='name'||k==='type'?v:num(v); if(k==='type'&&v==='apprentice'){Object.assign(r,{monthlyPay:r.monthlyPay||950,vmwl:r.vmwl||12,generalApprenticePct:r.generalApprenticePct||25,trainerHourlyCost:r.trainerHourlyCost||20,trainerHours:r.trainerHours||100,externalTrainingHours:r.externalTrainingHours||150,vocationalSchoolHours:r.vocationalSchoolHours||450,internalTrainingHours:r.internalTrainingHours||300})} if(k==='type') renderEmployees();calcAll();autoSave()}
function addEmployee(){employees.push({id:Date.now(),type:"journey",name:"Mitarbeiter",count:1,hourly:18,productivity:100,...defaultPayroll});renderEmployees();calcAll();autoSave()}
function addApprentice(){employees.push({id:Date.now(),type:"apprentice",name:"Lehrling",count:1,monthlyPay:950,vmwl:12,dailyHours:8,paidDays:261,holidays:10,vacationDays:30,specialLeaveDays:2,sickDays:7,holidayPayPct:0,christmasPayPct:10,pensionPct:18.6,healthPct:14.6,unemploymentPct:2.6,carePct:3.4,accidentPct:2.85,efgUmlagePct:2.9,efgRefundPct:70,generalApprenticePct:25,trainerHourlyCost:20,trainerHours:100,externalTrainingHours:150,vocationalSchoolHours:450,internalTrainingHours:300});renderEmployees();calcAll();autoSave()}
let babSortField='group',babSortAsc=true;
function sortBAB(field){
 if(babSortField===field)babSortAsc=!babSortAsc;
 else{babSortField=field;babSortAsc=true;}
 renderCostRows();
}
function renderCostRows(){
 const groupOrder={"Einzelkosten":0,"lohngebundene GK":1,"Lohnnebenkosten":2,"lohnunabhängige GK":3};
 const sorted=[...costRows].sort((a,b)=>{
  let av=a[babSortField]??'', bv=b[babSortField]??'';
  if(babSortField==='group'){av=groupOrder[av]??99;bv=groupOrder[bv]??99;}
  if(babSortField==='amount'){av=num(av);bv=num(bv);}
  const dir=babSortAsc?1:-1;
  return av<bv?-dir:av>bv?dir:0;
 });
 const arrow=f=>babSortField===f?(babSortAsc?' ↑':' ↓'):'';
 document.getElementById("babSortRow").innerHTML=
  `<th onclick="sortBAB('group')" style="cursor:pointer">Gruppe${arrow('group')}</th>`+
  `<th onclick="sortBAB('name')" style="cursor:pointer">Kostenart${arrow('name')}</th>`+
  `<th onclick="sortBAB('amount')" style="cursor:pointer;min-width:120px">Betrag / Jahr €${arrow('amount')}</th>`+
  `<th style="min-width:160px">Formelrechner</th>`+
  `<th onclick="sortBAB('installation')" style="cursor:pointer">Inst. %${arrow('installation')}</th>`+
  `<th onclick="sortBAB('verwaltung')" style="cursor:pointer">Verw. %${arrow('verwaltung')}</th>`+
  `<th onclick="sortBAB('material')" style="cursor:pointer">Mat. %${arrow('material')}</th>`+
  `<th>∑</th><th></th>`;
 document.getElementById("costRows").innerHTML=sorted.map(r=>{
  const sum=Math.round((num(r.installation)+num(r.verwaltung)+num(r.material))*100)/100;
  const ok=sum===100;
  // Auto-Rest: beim Ändern von 2 Feldern füllt das 3. automatisch auf 100% auf
  // Installation geändert → Verwaltung bleibt, Material passt sich an
  // Verwaltung geändert → Installation bleibt, Material passt sich an
  // Material geändert → Installation bleibt, Verwaltung passt sich an
  const instInput=r.auto?
   `<input class="right" type="text" inputmode="decimal" value="${r.installation}" readonly style="background:var(--surface2);color:var(--muted)">`:
   `<input class="right" type="text" inputmode="decimal" value="${r.installation}" onchange="updRow(${r.id},'installation',this.value,'material');renderCostRows()">`;
  const verwInput=r.auto?
   `<input class="right" type="text" inputmode="decimal" value="${r.verwaltung}" readonly style="background:var(--surface2);color:var(--muted)">`:
   `<input class="right" type="text" inputmode="decimal" value="${r.verwaltung}" onchange="updRow(${r.id},'verwaltung',this.value,'material');renderCostRows()">`;
  const matInput=r.auto?
   `<input class="right" type="text" inputmode="decimal" value="${r.material}" readonly style="background:var(--surface2);color:var(--muted)">`:
   `<input class="right" type="text" inputmode="decimal" value="${r.material}" onchange="updRow(${r.id},'material',this.value,'installation');renderCostRows()">`;
  return `<tr class="${r.auto?'auto-row':''}">
   <td><select ${r.auto?'disabled':''} onchange="updRow(${r.id},'group',this.value)">${groups.map(g=>`<option ${g===r.group?"selected":""}>${g}</option>`).join("")}</select></td>
   <td><input value="${r.name.replace(/"/g,'&quot;')}" ${r.auto?'readonly':''} oninput="updRow(${r.id},'name',this.value)">${r.auto?'<div class="small muted">🔒 Auto</div>':''}</td>
   <td><input id="rowAmount_${r.id}" class="right" type="text" inputmode="decimal" value="${round2(r.amount)}" ${r.auto?'readonly':''} oninput="updRow(${r.id},'amount',this.value)"></td>
   <td><div style="display:flex;gap:4px"><input value="${(r.calc||'').replace(/"/g,'&quot;')}" ${r.auto?'readonly':''} placeholder="z.B. (950+450)*12" oninput="updRow(${r.id},'calc',this.value)">${r.auto?'':`<button onclick="calcRow(${r.id})">=</button>`}</div></td>
   <td>${instInput}</td>
   <td>${verwInput}</td>
   <td style="background:${!ok?'var(--amber-bg)':''};">${matInput}</td>
   <td><span style="font-size:12px;font-weight:600;color:${ok?'var(--green)':'var(--amber)'}">${ok?'✓':'⚠ '+sum+'%'}</span>${r.auto?'':` <button class="danger btn-sm" onclick="costRows=costRows.filter(x=>x.id!==${r.id});renderCostRows();calcAll()">✕</button>`}</td>
  </tr>`;
 }).join("");
}
function updRow(id,k,v,autoFill=null){
 let r=costRows.find(x=>x.id===id);
 if(!r)return;
 if(r.auto&&['group','name','amount','calc'].includes(k))return;
 r[k]=['amount','installation','verwaltung','material'].includes(k)?num(v):v;
 // Auto-Rest-Berechnung: wenn Installation oder Verwaltung oder Material geändert
 // und autoFill gesetzt ist → das dritte Feld automatisch auffüllen
 if(['installation','verwaltung','material'].includes(k) && autoFill){
  const fields=['installation','verwaltung','material'];
  const other=fields.filter(f=>f!==k&&f!==autoFill);
  const sum=num(r[k])+(other.length?num(r[other[0]]):0);
  r[autoFill]=Math.max(0,Math.round((100-sum)*100)/100);
  renderCostRows();
 }
 calcAll();autoSave();
}
function calcRow(id){let r=costRows.find(x=>x.id===id);r.amount=Math.round(safeCalc(r.calc)*100)/100;renderCostRows();calcAll();autoSave()}
function addCostRow(){costRows.push({id:Date.now(),group:"lohnunabhängige GK",name:"Neue Kostenart",amount:0,calc:"",installation:100,verwaltung:0,material:0});renderCostRows();calcAll();autoSave()}

function round2(v){return Math.round(num(v)*100)/100}
function calcLohngebunden(e){
 // Berechnet lohngebundene Kosten (SV + gesetzliche Nebenkosten) separat
 const d={...defaultPayroll,...e};
 const grossWage = e.type==="apprentice"
  ? num(e.monthlyPay)*12*num(e.count||1)
  : num(e.hourly)*num(d.dailyHours)*num(d.paidDays)*num(e.count||1);
 const vmwl = 12*num(d.vmwl||0)*num(e.count||1);
 const vacBonus = grossWage*num(d.vacationDays)*num(d.holidayPayPct)/(num(d.paidDays)||1)/100;
 const christmas = e.type==="apprentice"
  ? num(e.monthlyPay)*num(d.christmasPayPct)/100*num(e.count||1)
  : grossWage*num(d.christmasPayPct)/100;
 const gross = grossWage+vmwl+vacBonus+christmas;
 const social=gross*(num(d.pensionPct)+num(d.healthPct)+num(d.unemploymentPct)+num(d.carePct))/200;
 const sickWage=gross/Math.max(num(d.paidDays),1)*num(d.sickDays);
 const accident=gross*num(d.accidentPct)/100;
 const efg=gross*num(d.efgUmlagePct)/100-sickWage*num(d.efgRefundPct)/100;
 const otherLegal=e.type!=="apprentice"?gross*num(d.otherLegalPct)/100:0;
 const company=e.type!=="apprentice"?gross*num(d.companyAddonPct)/100:0;
 return {gross, social, accident, efg, otherLegal, company};
}
function payrollBABSplit(){
 const staff=employees.filter(e=>e.type!=="apprentice");
 const app=employees.filter(e=>e.type==="apprentice");
 const staffCosts=staff.map(calcEmployeeCost);
 const appCosts=app.map(calcApprenticeCost);
 const staffLG=staff.map(calcLohngebunden);
 const appLG=app.map(calcLohngebunden);
 const sum=(arr,k)=>arr.reduce((s,r)=>s+num(r[k]),0);
 // Fertigungslohn (Brutto-Anteil produktiv) = gross * productiveHours/attendanceHours
 const productiveStaffGross=staffCosts.reduce((s,r,i)=>{
  const lg=staffLG[i];
  const ratio=r.attendanceHours?Math.min(r.productiveHours/r.attendanceHours,1):0;
  return s+lg.gross*ratio;
 },0);
 const productiveAppGross=appCosts.reduce((s,r,i)=>{
  const lg=appLG[i];
  const ratio=r.attendanceHours?Math.min(r.productiveHours/r.attendanceHours,1):0;
  return s+lg.gross*ratio;
 },0);
 const unproductiveStaffGross=staffCosts.reduce((s,r,i)=>{
  const lg=staffLG[i];
  const ratio=r.attendanceHours?Math.min(r.productiveHours/r.attendanceHours,1):0;
  return s+lg.gross*(1-ratio);
 },0);
 const unproductiveAppGross=appCosts.reduce((s,r,i)=>{
  const lg=appLG[i];
  const ratio=r.attendanceHours?Math.min(r.productiveHours/r.attendanceHours,1):0;
  return s+lg.gross*(1-ratio);
 },0);
 // lohngebundene GK gesamt (nicht aufgeteilt produktiv/unproduktiv – klassischer BAB)
 const lgSV=sum(staffLG,'social')+sum(appLG,'social');
 const lgAccident=sum(staffLG,'accident')+sum(appLG,'accident');
 const lgEFG=sum(staffLG,'efg')+sum(appLG,'efg');
 const lgOther=sum(staffLG,'otherLegal')+sum(appLG,'otherLegal');
 const lgCompany=sum(staffLG,'company')+sum(appLG,'company');
 return {
  productiveStaff:productiveStaffGross,
  productiveApprentice:productiveAppGross,
  unproductiveStaff:unproductiveStaffGross,
  unproductiveApprentice:unproductiveAppGross,
  productiveHours:sum(staffCosts,'productiveHours')+sum(appCosts,'productiveHours'),
  totalPayroll:sum(staffCosts,'total')+sum(appCosts,'total'),
  lgSV, lgAccident, lgEFG, lgOther, lgCompany
 };
}
function setAutoBABRow(auto,group,name,amount,installation=70,verwaltung=30,material=0){
 let r=costRows.find(x=>x.auto===auto);
 if(!r){r={id:Date.now()+Math.floor(Math.random()*1000),auto,group,name,amount:0,calc:'automatisch aus Personal',installation,verwaltung,material}; costRows.unshift(r);}
 r.group=group; r.name=name; r.amount=round2(amount); r.calc='automatisch aus Personal';
 const el=document.getElementById('rowAmount_'+r.id); if(el && document.activeElement!==el) el.value=round2(r.amount);
 return r;
}
function calcGFRate(){
 const monthlyWage=n("gfMonthlyWage")||5000;
 const workDays=n("gfWorkDays")||220;
 const dailyHours=n("gfDailyHours")||8;
 const productivePct=n("gfProductivePct")||20;
 const overheadPct=n("gfOverheadPct")||15;
 const profitPct=n("gfProfitPct")||0;
 const yearTotal=monthlyWage*12;
 const totalHours=workDays*dailyHours;
 const productiveHours=totalHours*(productivePct/100);
 const costRate=productiveHours?yearTotal/productiveHours:0;
 const sellRate=costRate*(1+overheadPct/100)*(1+profitPct/100);
 const minRate=sellRate/60;
 setText("gfYearTotal",eur(yearTotal));
 setText("gfProductiveHours",productiveHours.toLocaleString('de-DE',{maximumFractionDigits:1})+" h");
 setText("gfCostRate",eur(costRate)+"/h");
 setText("gfSellRate",eur(sellRate)+"/h");
 setText("gfMinRate",eur(minRate)+"/min");
}

function syncPayrollToBABAuto(updateProductiveHours=true){
 const s=payrollBABSplit();
 // Einzelkosten – produktive Lohnkosten
 setAutoBABRow('productivePayroll','Einzelkosten','Fertigungslohn (Brutto) produktive Mitarbeiter',s.productiveStaff,100,0,0);
 setAutoBABRow('productiveApprentice','Einzelkosten','Fertigungslohn (Brutto) produktive Lehrlinge',s.productiveApprentice,100,0,0);
 // lohngebundene GK – Sozialversicherung & Nebenkosten (automatisch aus Personal)
  setAutoBABRow('lgSV','lohngebundene GK','SV AG-Anteil (RV+KV+AV+PV) alle MA+Azubi',s.lgSV,100,0,0);
 setAutoBABRow('lgAccident','lohngebundene GK','Berufsgenossenschaft / Unfallversicherung alle MA+Azubi',s.lgAccident,100,0,0);
 setAutoBABRow('lgEFG','lohngebundene GK','EFG-Umlage abzgl. Erstattung alle MA+Azubi',s.lgEFG,100,0,0);
 setAutoBABRow('lgOther','lohngebundene GK','Sonstige gesetzl. Lohnnebenkosten (MA)',s.lgOther,100,0,0);
 setAutoBABRow('lgCompany','lohngebundene GK','Betriebliche Zusatzkosten MA (bAV etc.)',s.lgCompany,100,0,0);
 // lohnunabhängige GK – unproduktive Anteile
 setAutoBABRow('unproductivePayroll','lohnunabhängige GK','Bruttolohn unproduktive Mitarbeiteranteile',s.unproductiveStaff,70,30,0);
 setAutoBABRow('unproductiveApprentice','lohnunabhängige GK','Bruttolohn unproduktive Lehrlingsanteile',s.unproductiveApprentice,70,30,0);
 const ph=document.getElementById('productiveHours'); if(updateProductiveHours && ph && document.activeElement!==ph) ph.value=round2(s.productiveHours);
 return s;
}
function syncPayrollToBAB(){syncPayrollToBABAuto(true); renderCostRows(); calcAll();}



function setText(id,value){const el=document.getElementById(id); if(el) el.textContent=value;}
function calcVehicleCosts(){
 const dep=((n("vehPurchase")+n("vehInflation"))-n("vehRest"))/(n("vehYears")||1);
 const shelf=n("shelfCost")/(n("shelfYears")||1);
 const fixed=dep+shelf+n("vehFin")+n("vehIns")+n("vehLiab")+n("vehTax");
 const kmYear=n("kmDay")*n("vehDays");
 const fixedKm=kmYear?fixed/kmYear:0;
 const fuelKm=n("fuel100")/100*n("fuelPrice");
 const varKm=fuelKm+n("maintKm")+n("repairKm")+n("serviceKm")+n("tireKm")+n("oilKm");
 const variableYear=varKm*kmYear;
 const totalYear=fixed+variableYear;
 const fullKm=fixedKm+varKm;
 const dayCost=n("vehDays")?totalYear/n("vehDays"):0;
 const hourCost=n("dailyVehicleHours")?dayCost/n("dailyVehicleHours"):0;
 return {dep,shelf,fixed,kmYear,fixedKm,fuelKm,varKm,variableYear,totalYear,fullKm,dayCost,hourCost};
}
function syncVehicleToBAB(){
 // Fahrzeug NICHT in BAB – wird separat pro Auftrag abgerechnet
 const r=costRows.find(x=>x.auto==='vehicleCosts');
 if(r){r.amount=0;r.name='Fahrzeugkosten (separat – nicht im BAB)';r.calc='Separat pro Auftrag';}
 return calcVehicleCosts();
}
function calcVehicleQuote(){
 const v=calcVehicleCosts();
 const km=n("qVehKm")||0;
 const days=n("qVehDays")||0;
 const profitPct=n("qVehProfitPct")||0;
 const costKm=v.fullKm*km;
 const costDay=v.dayCost*days;
 const costTotal=(costKm+costDay)*(1+profitPct/100);
 return {costKm,costDay,costTotal,fullKm:v.fullKm,dayCost:v.dayCost};
}



// KFE Custom DB – in memory, wird mit Hauptdaten gespeichert
let _kfeCustomDb=[];
function readCustomKFE(){ return _kfeCustomDb||[]; }
function saveCustomKFE(rows){ _kfeCustomDb=rows||[]; }
function kfeDb(){
 const base=Array.isArray(window.KFE_CABLE_DB)?window.KFE_CABLE_DB:[];
 const custom=readCustomKFE();
 const map=new Map();
 base.forEach(x=>map.set(String(x.kfe||''),x));
 custom.forEach(x=>map.set(String(x.kfe||''),x));
 return Array.from(map.values()).filter(x=>x && x.kfe);
}
function kfeLabel(x){
 const mat=(x.material_ek!==undefined && x.material_ek!==null && x.material_ek!=='')?` | EK ${eur(x.material_ek)}/${x.unit||'Einh.'}`:'';
 return `${x.kfe} | ${x.leistung||''} | ${x.text||''} | ${x.minutes||0} min/${x.unit||'Einh.'}${mat}`;
}
function normSearch(v){
 return String(v||'').toLowerCase()
  .replace(/²/g,'2').replace(/³/g,'3')
  .replace(/mm2/g,'mm')
  .replace(/[\s\-_/.,()]+/g,'')
  .trim();
}
function renderKFESearch(){
 const sel=document.getElementById('kfeSelect'); if(!sel) return;
 const raw=(document.getElementById('kfeSearch')?.value||'').trim();
 const q=normSearch(raw);
 const db=kfeDb();
 const custom=readCustomKFE();
 const res=db.filter(x=>{
   if(!q) return true;
   const hay=normSearch(`${x.kfe} ${x.section||''} ${x.leistung||''} ${x.text||''}`);
   return hay.includes(q);
 }).slice(0,120);
 sel.innerHTML=res.length?res.map(x=>`<option value="${x.kfe}">${kfeLabel(x)}</option>`).join(''):'<option value="">Keine passende KFE-Position gefunden</option>';
 const count=document.getElementById('kfeCount');
 if(count) count.textContent=db.length?`${res.length} von ${db.length} Positionen angezeigt (${custom.length} eigene CSV)`:'KFE-Datenbank wurde nicht geladen – bitte kfe-db.js mit öffnen oder CSV importieren.';
 const info=document.getElementById('kfeImportInfo');
 if(info) info.textContent=custom.length?`Eigene CSV aktiv: ${custom.length} Positionen gespeichert.`:'Keine eigene CSV gespeichert.';
}
function addKFEPosition(){
 const sel=document.getElementById('kfeSelect'); if(!sel) return;
 const kfe=sel.value;
 const item=kfeDb().find(x=>String(x.kfe)===String(kfe)); if(!item) return alert('Keine KFE-Position ausgewählt');
 const next=(calcPositions.reduce((m,p)=>Math.max(m,num(p.pos)),0)||0)+1;
 const material = item.material_ek ?? item.matEk ?? 0;
 calcPositions.push({id:Date.now(),pos:next,kfe:item.kfe,name:`${item.leistung||''} - ${item.text||''}`.replace(/^ - /,'').trim(),qty:1,unit:item.unit||'m',matEk:material||0,minutes:item.minutes||0,cuPct:0,wastePct:0,machMin:0});
 renderCalcPositions(); calcAll();autoSave();
}
function parseCSVLine(line,sep){
 const out=[]; let cur=''; let quoted=false;
 for(let i=0;i<line.length;i++){
   const c=line[i], n=line[i+1];
   if(c==='"' && quoted && n==='"'){cur+='"'; i++; continue;}
   if(c==='"'){quoted=!quoted; continue;}
   if(c===sep && !quoted){out.push(cur); cur=''; continue;}
   cur+=c;
 }
 out.push(cur);
 return out.map(x=>x.trim());
}
function detectCSVSeparator(text){
 const first=(text.split(/\r?\n/).find(l=>l.trim())||'');
 const semis=(first.match(/;/g)||[]).length;
 const commas=(first.match(/,/g)||[]).length;
 return semis>=commas?';':',';
}
function cleanMinutes(v){
 return num(String(v||'').replace(',', '.').replace(/[^\d.\-]/g,''));
}
function importKFECSV(event){
 const file=event.target.files[0]; if(!file) return;
 const reader=new FileReader();
 reader.onload=()=>{
   const text=String(reader.result||'').replace(/^\uFEFF/,'');
   const sep=detectCSVSeparator(text);
   const lines=text.split(/\r?\n/).filter(l=>l.trim());
   if(!lines.length) return alert('CSV ist leer.');
   const first=parseCSVLine(lines[0],sep).map(h=>h.toLowerCase().trim());
   const hasHeader=first.some(h=>['kfe','position','leistung','kabel','text','bezeichnung','einheit','unit','minuten','minutes','materialek','material_ek'].includes(h.replace(/\s/g,'')));
   const header=hasHeader?first:[];
   const idx=(names, fallback)=> {
     for(const name of names){
       const n=name.toLowerCase().replace(/\s/g,'');
       const i=header.findIndex(h=>h.replace(/\s/g,'')===n);
       if(i>=0) return i;
     }
     return fallback;
   };
   const iKfe=idx(['kfe','kfe-nr','position','pos'],0);
   const iLeistung=idx(['leistung','leistungsart'],1);
   const iText=idx(['kabel','text','bezeichnung','kabelart','leitungsart'],2);
   const iUnit=idx(['einheit','unit','me'],3);
   const iMin=idx(['minuten','minutes','min'],4);
   const iMat=idx(['materialek','material_ek','matek','material'],5);
   const start=hasHeader?1:0;
   const imported=[];
   for(let i=start;i<lines.length;i++){
     const c=parseCSVLine(lines[i],sep);
     const kfe=(c[iKfe]||'').trim();
     const textVal=(c[iText]||'').trim();
     const leistung=(c[iLeistung]||'').trim();
     const minutes=cleanMinutes(c[iMin]);
     if(!kfe || (!textVal && !leistung)) continue;
     imported.push({
       kfe:kfe,
       section:kfe.split('.').slice(0,2).join('.'),
       leistung:leistung||'Eigene Leistung',
       text:textVal,
       unit:(c[iUnit]||'m').trim()||'m',
       minutes:minutes,
       material_ek: cleanMinutes(c[iMat])
     });
   }
   if(!imported.length) return alert('Keine gültigen Positionen gefunden. Prüfe: KFE;Leistung;Kabel;Einheit;Minuten');
   const mode=document.getElementById('kfeImportMode')?.value||'append';
   let finalRows=mode==='replace'?[]:readCustomKFE();
   const map=new Map(finalRows.map(x=>[String(x.kfe),x]));
   imported.forEach(x=>map.set(String(x.kfe),x));
   finalRows=Array.from(map.values());
   saveCustomKFE(finalRows);
   event.target.value='';
   renderKFESearch();
   alert(imported.length+' CSV-Positionen importiert. Eigene Datenbank jetzt: '+finalRows.length+' Positionen.');
 };
 reader.readAsText(file,'UTF-8');
}
function downloadKFECSVTemplate(){
 const csv='KFE;Leistung;Kabel;Einheit;Minuten;MaterialEK\n01.01.13;Mantelleitung einziehen;NYM-J 3x2,5;m;2;0\n01.65.01;Datenleitung einziehen;Cat7;m;1,8;0\n';
 const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});
 const a=document.createElement('a');
 a.href=URL.createObjectURL(blob);
 a.download='kfe_csv_vorlage.csv';
 a.click();
}
function clearCustomKFE(){
 if(!confirm('Eigene importierte KFE-CSV wirklich löschen?')) return;
 _kfeCustomDb=[];
 renderKFESearch();
 alert('Eigene KFE-CSV wurde gelöscht.');
}

function posField(p,k,label){return `<div><label>${label}</label><input type="text" inputmode="decimal" value="${p[k]??''}" oninput="updCalcPos(${p.id},'${k}',this.value)"></div>`}
function renderCalcPositions(){
 const el=document.getElementById('calcPositions'); if(!el) return;
 el.innerHTML=calcPositions.map(p=>`<tr>
 <td><input value="${p.pos??''}" oninput="updCalcPos(${p.id},'pos',this.value)"></td>
 <td><input value="${p.kfe??p.zveh??''}" placeholder="KFE-Nr." oninput="updCalcPos(${p.id},'kfe',this.value)"></td>
 <td><input value="${p.name??''}" placeholder="Bezeichnung" oninput="updCalcPos(${p.id},'name',this.value)"></td>
 <td><input class="right" type="text" inputmode="decimal" value="${p.qty??0}" oninput="updCalcPos(${p.id},'qty',this.value)"></td>
 <td><input value="${p.unit??'Stk'}" oninput="updCalcPos(${p.id},'unit',this.value)"></td>
 <td><input class="right" type="text" inputmode="decimal" value="${p.matEk??0}" oninput="updCalcPos(${p.id},'matEk',this.value)"></td>
 <td><input class="right" type="text" inputmode="decimal" value="${p.minutes??0}" oninput="updCalcPos(${p.id},'minutes',this.value)"></td>
 <td><input class="right" type="text" inputmode="decimal" value="${p.wastePct??0}" oninput="updCalcPos(${p.id},'wastePct',this.value)"></td>
 <td><input class="right" type="text" inputmode="decimal" value="${p.cuPct??0}" oninput="updCalcPos(${p.id},'cuPct',this.value)"></td>
 <td><input class="right" type="text" inputmode="decimal" value="${p.machMin??0}" oninput="updCalcPos(${p.id},'machMin',this.value)"></td>
 <td><button class="danger" onclick="calcPositions=calcPositions.filter(x=>x.id!==${p.id});renderCalcPositions();calcAll()">X</button></td>
 </tr>`).join('');
}
function updCalcPos(id,k,v){let p=calcPositions.find(x=>x.id===id); if(!p) return; p[k]=['pos','kfe','name','unit'].includes(k)?v:num(v); calcAll();}
function addCalcPosition(){const next=(calcPositions.reduce((m,p)=>Math.max(m,num(p.pos)),0)||0)+1; calcPositions.push({id:Date.now(),pos:next,kfe:'',name:'Neue Leistung',qty:1,unit:'m',matEk:0,minutes:0,cuPct:0,wastePct:0,machMin:0}); renderCalcPositions(); calcAll();}
function calcPositionsTotals(minuteSell,mixedCost,matFactor,machMinuteSell,machHourCost){
 return calcPositions.reduce((t,p)=>{
  const qty=num(p.qty)||0;
  const matUnit=num(p.matEk)*(1+num(p.wastePct)/100)*(1+num(p.cuPct)/100);
  const matEk=matUnit*qty;
  const mins=num(p.minutes)*qty;
  const machMins=num(p.machMin)*qty;
  t.materialEk+=matEk;
  t.materialSell+=matEk*matFactor*(1+n('qMatProfit')/100);
  t.laborMin+=mins;
  t.laborSell+=mins*minuteSell;
  t.laborCost+=mins/60*mixedCost;
  t.machineMin+=machMins;
  t.machineSell+=machMins*machMinuteSell;
  t.machineCost+=machMins/60*machHourCost;
  return t;
 },{materialEk:0,materialSell:0,laborMin:0,laborSell:0,laborCost:0,machineMin:0,machineSell:0,machineCost:0});
}

let _autoSaveTimer=null;
function autoSave(){
 clearTimeout(_autoSaveTimer);
 _autoSaveTimer=setTimeout(()=>{
  try{
   const data=buildSaveData();
   dbSave(data).catch(()=>{
    try{localStorage.setItem('kalkAppData',JSON.stringify(data));}catch(e){}
   });
   try{localStorage.setItem('kalkAppData',JSON.stringify(data));}catch(e){}
  }catch(e){}
 },1500); // 1.5 Sekunden nach letzter Änderung
}
function calcAll(){
 const empResults=employees.map(e=>e.type==="apprentice"?calcApprenticeCost(e):calcEmployeeCost(e)); const totalProductive=empResults.reduce((s,r)=>s+r.productiveHours,0); const totalPayroll=empResults.reduce((s,r)=>s+r.total,0); const mixed=totalProductive?totalPayroll/totalProductive:0; syncPayrollToBABAuto(true); syncVehicleToBAB();
 const groupTotals=groups.map(g=>{let rs=costRows.filter(r=>r.group===g);return{group:g,amount:rs.reduce((s,r)=>s+num(r.amount),0),installation:rs.reduce((s,r)=>s+num(r.amount)*num(r.installation)/100,0),verwaltung:rs.reduce((s,r)=>s+num(r.amount)*num(r.verwaltung)/100,0),material:rs.reduce((s,r)=>s+num(r.amount)*num(r.material)/100,0)}})
 const installBase=costRows.filter(r=>r.group==="Einzelkosten").reduce((s,r)=>s+num(r.amount)*num(r.installation)/100,0); const lohngeb=(groupTotals.find(g=>g.group==="lohngebundene GK")||{}).installation||0; const lohnneb=(groupTotals.find(g=>g.group==="Lohnnebenkosten")||{}).installation||0; const lohnun=(groupTotals.find(g=>g.group==="lohnunabhängige GK")||{}).installation||0; const overheadPct=installBase?((lohngeb+lohnneb+lohnun)/installBase*100):0;
 const hourly=mixed+(mixed*overheadPct/100); const hourlyProfit=hourly*(1+n("profit")/100); const minute=hourlyProfit/60; const mf=n("matFactor")*(1+n("matProfit")/100); const matSell=n("matCost")*mf; const labor=n("minutes")*minute; const bab=n("productiveHours")?(installBase+lohngeb+lohnneb+lohnun)/n("productiveHours"):0;
 document.getElementById("hourlyRate").textContent=eur(hourlyProfit)+"/Std."; document.getElementById("minuteRate").textContent=eur(minute)+"/min"; document.getElementById("mixedWage").textContent=eur(mixed); document.getElementById("payrollTotal").textContent=eur(totalPayroll); document.getElementById("payrollProductive").textContent=totalProductive.toLocaleString('de-DE',{maximumFractionDigits:1})+" h"; document.getElementById("matSurcharge").textContent=pct((mf-1)*100); document.getElementById("babHourly").textContent=eur(bab)+"/Std."; document.getElementById("laborPrice").textContent=eur(labor); document.getElementById("matSell").textContent=eur(matSell); document.getElementById("totalPrice").textContent=eur(labor+matSell); groupTotals.forEach((g,i)=>document.getElementById("g"+i).innerHTML=`Installation: ${eur(g.installation)}<br>Verwaltung: ${eur(g.verwaltung)}<br>Material: ${eur(g.material)}`)
 const veh=syncVehicleToBAB(); setText("vehDep",eur(veh.dep)); setText("shelfDep",eur(veh.shelf)); setText("vehFixedYear",eur(veh.fixed)); setText("vehVariableYear",eur(veh.variableYear)); setText("vehTotalYear",eur(veh.totalYear)+" (separat)"); setText("vehKmFull",eur(veh.fullKm)+"/km"); setText("vehKmYear",veh.kmYear.toLocaleString('de-DE',{maximumFractionDigits:0})+" km"); setText("vehFixedKm",eur(veh.fixedKm)+"/km"); setText("vehVarKm",eur(veh.varKm)+"/km"); setText("vehDayCost",eur(veh.dayCost)+"/Tag"); setText("vehHourCost",eur(veh.hourCost)+"/h");
 const mDep=(n("machPurchase")-n("machRest"))/(n("machYears")||1); const mFixed=mDep+n("machServiceYear")+n("machInsuranceYear")+n("machFinanceYear"); const mFixedHour=n("machHoursYear")?mFixed/n("machHoursYear"):0; const mVarHour=n("machEnergyHour")+n("machConsumablesHour")+n("machRepairHour"); const mInternalHour=mFixedHour+mVarHour; const mSellHour=mInternalHour*(1+n("machProfit")/100); const mMin=mSellHour/60; setText("machDep",eur(mDep)); setText("machFixedYear",eur(mFixed)); setText("machFixedHour",eur(mFixedHour)+"/h"); setText("machVarHour",eur(mVarHour)+"/h"); setText("machHour",eur(mSellHour)+"/h"); setText("machMinute",eur(mMin)+"/min");
 const qMatFactor=n("qMatFactor")||n("matFactor")||1;
 const posTotals=calcPositionsTotals(minute,mixed,qMatFactor,mMin,mInternalHour);
 const vq=calcVehicleQuote(); const qVehicleCost=vq.costTotal; const qVehicleSell=vq.costTotal; setText("qVehKmRate",eur(vq.fullKm)+"/km"); setText("qVehDayRate",eur(vq.dayCost)+"/Tag"); setText("qVehCostKm",eur(vq.costKm)); setText("qVehCostDay",eur(vq.costDay)); setText("qVehTotal",eur(vq.costTotal)); setText("qVehTotal2",eur(vq.costTotal));
 const qOther=n("qOther"); const qRiskPct=n("qRiskPct"); const qDiscountPct=n("qDiscountPct");
 const qSub=posTotals.materialSell+posTotals.laborSell+posTotals.machineSell+qVehicleSell+qOther;
 const qRisk=qSub*qRiskPct/100; const qBeforeDiscount=qSub+qRisk; const qDiscount=qBeforeDiscount*qDiscountPct/100; const qNet=qBeforeDiscount-qDiscount;
 const qCost=posTotals.materialEk+posTotals.laborCost+posTotals.machineCost+qVehicleCost+qOther; const qDb=qNet-qCost;
 setText("zvehTotalMin",posTotals.laborMin.toLocaleString('de-DE',{maximumFractionDigits:1})+" min"); setText("zvehTotalHours",(posTotals.laborMin/60).toLocaleString('de-DE',{maximumFractionDigits:2})+" h");
 setText("zvehMatEk",eur(posTotals.materialEk)); setText("zvehLaborCost",eur(posTotals.laborCost));
 setText("qMatSell",eur(posTotals.materialSell)); setText("qLaborSell",eur(posTotals.laborSell)); setText("qMachSell",eur(posTotals.machineSell)); setText("qNet",eur(qNet)); setText("qCost",eur(qCost)); setText("qDb",eur(qDb)); setText("qDbPct",pct(qNet?qDb/qNet*100:0)); setText("qBreakEven",qDb>0?eur(qCost/(qDb/qNet||1)):eur(0));
 const dbLaborSingle=posTotals.laborCost;
 const dbMaterial=posTotals.materialEk;
 const dbSelf=dbLaborSingle+dbMaterial+posTotals.machineCost+qVehicleCost+qOther;
 const dbPriceLower=dbSelf*n("dbPricePct")/100;
 const dbVarMat=dbMaterial*n("dbMatVarPct")/100;
 const dbVarLabor=dbLaborSingle*n("dbLaborVarPct")/100;
 const dbAmount=dbPriceLower-dbVarMat-dbVarLabor;
 const dbAnnualQty=n("dbAnnualQty")||1;
 const dbAmountYear=dbAmount*dbAnnualQty;
 const dbFixedManual=n("dbFixedManual"); const dbFixedAuto=lohngeb+lohnneb+lohnun; const dbFixed=dbFixedManual>0?dbFixedManual:dbFixedAuto;
 const dbActual=dbFixed?dbAmountYear/dbFixed*100:0; const dbTarget=n("dbTargetPct");
 setText("dbLaborSingle",eur(dbLaborSingle)); setText("dbMaterial",eur(dbMaterial)); setText("dbSelf",eur(dbSelf)); setText("dbPriceLower",eur(dbPriceLower)); setText("dbVarMat",eur(dbVarMat)); setText("dbVarLabor",eur(dbVarLabor)); setText("dbAmount",eur(dbAmount)); setText("dbAmountYear",eur(dbAmountYear)); setText("dbFixed",eur(dbFixed)); setText("dbActual",pct(dbActual)); setText("dbStatus",dbActual>=dbTarget?"Ja":"Nein");
 // Personalkostenanteil (Perko perko_pgk Logik)
 const pkAnnualRevenue=n("pkAnnualRevenue")||500000;
 const pkMaterialYear=n("pkMaterialYear")||170000;
 const pkGeraeteYear=n("pkGeraeteYear")||10000;
 const pkWagnisPCT=n("pkWagnisPCT")||5;
 const pkGesamtkosten=totalPayroll+pkMaterialYear+pkGeraeteYear+(totalPayroll+pkMaterialYear+pkGeraeteYear)*pkWagnisPCT/100;
 const pkAnteil=pkAnnualRevenue?totalPayroll/pkAnnualRevenue*100:0;
 setText("pkPersonal",eur(totalPayroll));
 setText("pkGesamtkosten",eur(pkGesamtkosten));
 setText("pkAnteil",pct(pkAnteil));

 const monProfit=n("monRev")-n("monCost");document.getElementById("monProfit").textContent=eur(monProfit);document.getElementById("yearProfit").textContent=eur(monProfit*12);document.getElementById("profitability").textContent=pct(n("monRev")?monProfit/n("monRev")*100:0);document.getElementById("targetRevenue").textContent=eur(n("monCost")/(1-n("targetProfit")/100||1))
 autoSave();
}
function runCalc(){document.getElementById("calcResult").textContent=eur(safeCalc(document.getElementById("calcInput").value))}
function showSaveStatus(msg,ok=true){
 const el=document.getElementById('saveStatus');
 if(!el)return;
 el.textContent=msg;
 el.style.background=ok?'var(--green-bg)':'var(--red-bg)';
 el.style.borderColor=ok?'var(--green-border)':'var(--red-border)';
 el.style.color=ok?'var(--green)':'var(--red)';
 el.style.display='inline';
 clearTimeout(el._t);
 el._t=setTimeout(()=>el.style.display='none',4000);
}
function buildSaveData(){
 return {employees,costRows,calcPositions,inputs:getInputs(),kfeCustomDb:readCustomKFE(),savedAt:new Date().toISOString()};
}
// ── Speicher-Engine: IndexedDB (primär) + localStorage (Fallback) ──
const DB_NAME='kalkApp',DB_STORE='data',DB_KEY='main';
function openDB(){
 return new Promise((res,rej)=>{
  try{
   const req=indexedDB.open(DB_NAME,1);
   req.onupgradeneeded=e=>e.target.result.createObjectStore(DB_STORE);
   req.onsuccess=e=>res(e.target.result);
   req.onerror=e=>rej(e.target.error);
  }catch(e){rej(e);}
 });
}
function dbSave(data){
 return openDB().then(db=>new Promise((res,rej)=>{
  const tx=db.transaction(DB_STORE,'readwrite');
  tx.objectStore(DB_STORE).put(JSON.stringify(data),DB_KEY);
  tx.oncomplete=()=>res();
  tx.onerror=e=>rej(e.target.error);
 }));
}
function dbLoad(){
 return openDB().then(db=>new Promise((res,rej)=>{
  const tx=db.transaction(DB_STORE,'readonly');
  const req=tx.objectStore(DB_STORE).get(DB_KEY);
  req.onsuccess=e=>res(e.target.result?JSON.parse(e.target.result):null);
  req.onerror=e=>rej(e.target.error);
 }));
}
function applyData(d){
 if(!d)return false;
 employees=d.employees||employees;
 costRows=d.costRows||costRows;
 calcPositions=d.calcPositions||calcPositions;
 if(d.kfeCustomDb)saveCustomKFE(d.kfeCustomDb);
 setInputs(d.inputs||{});
 renderEmployees();renderCostRows();renderCalcPositions();renderKFESearch();calcAll();
 return true;
}
function saveData(){
 const data=buildSaveData();
 // Primär: IndexedDB
 dbSave(data).then(()=>{
  // Auch localStorage als Backup
  try{localStorage.setItem('kalkAppData',JSON.stringify(data));}catch(e){}
  showSaveStatus('✓ Gespeichert – '+new Date().toLocaleTimeString('de-DE'));
 }).catch(e=>{
  // Fallback: nur localStorage
  try{
   localStorage.setItem('kalkAppData',JSON.stringify(data));
   showSaveStatus('✓ Gespeichert (Fallback)');
  }catch(e2){
   showSaveStatus('✗ Speichern fehlgeschlagen – bitte "Als Datei sichern" nutzen!',false);
  }
 });
}
function loadData(){
 dbLoad().then(d=>{
  if(!d){
   // Fallback: localStorage
   try{const raw=localStorage.getItem('kalkAppData');if(raw)d=JSON.parse(raw);}catch(e){}
  }
  if(!applyData(d)){showSaveStatus('✗ Kein Speicherstand gefunden',false);return;}
  const ts=d.savedAt?(' vom '+new Date(d.savedAt).toLocaleString('de-DE')):'';
  showSaveStatus('✓ Geladen'+ts);
 }).catch(e=>{
  // Fallback: localStorage
  try{
   const raw=localStorage.getItem('kalkAppData');
   if(raw&&applyData(JSON.parse(raw))){showSaveStatus('✓ Geladen (Fallback)');return;}
  }catch(e2){}
  showSaveStatus('✗ Ladefehler: '+e.message,false);
 });
}
function getInputs(){let o={};document.querySelectorAll("input[id]").forEach(i=>{if(i.type!=="file")o[i.id]=i.value});return o}
function setInputs(o){Object.entries(o).forEach(([k,v])=>{let el=document.getElementById(k);if(el)el.value=v})}
function exportJSON(){
 try{
  const blob=new Blob([JSON.stringify(buildSaveData(),null,2)],{type:"application/json"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="kalkulations-app-"+new Date().toISOString().slice(0,10)+".json";
  a.click();
  showSaveStatus('✓ JSON-Datei wird heruntergeladen');
 }catch(e){showSaveStatus('✗ Export-Fehler: '+e.message,false);}
}
function importJSON(ev){
 const f=ev.target.files[0];if(!f)return;
 const r=new FileReader();
 r.onload=()=>{
  try{
   const d=JSON.parse(r.result);
   employees=d.employees||employees;
   costRows=d.costRows||costRows;
   calcPositions=d.calcPositions||calcPositions;
   if(d.kfeCustomDb)saveCustomKFE(d.kfeCustomDb);
   setInputs(d.inputs||{});
   renderEmployees();renderCostRows();renderCalcPositions();renderKFESearch();calcAll();
   showSaveStatus('✓ Datei importiert: '+f.name);
  }catch(e){showSaveStatus('✗ Import-Fehler: '+e.message,false);}
 };
 r.readAsText(f);
}
syncPayrollToBABAuto(true);renderEmployees();renderCostRows();renderCalcPositions();renderKFESearch();calcAll();calcGFRate();
// AUTO-LOAD: Beim Start automatisch laden
setTimeout(()=>{
 function tryLoad(){
  dbLoad().then(d=>{
   if(!d){try{const r=localStorage.getItem('kalkAppData');if(r)d=JSON.parse(r);}catch(e){}}
   if(!d)return; // Nichts gespeichert - neue Sitzung
   employees=d.employees||employees;
   costRows=d.costRows||costRows;
   calcPositions=d.calcPositions||calcPositions;
   if(d.kfeCustomDb)saveCustomKFE(d.kfeCustomDb);
   setInputs(d.inputs||{});
   renderEmployees();renderCostRows();renderCalcPositions();renderKFESearch();calcAll();
   const ts=d.savedAt?' ('+new Date(d.savedAt).toLocaleString('de-DE')+')':'';
   showSaveStatus('✓ Automatisch geladen'+ts);
  }).catch(()=>{
   try{
    const r=localStorage.getItem('kalkAppData');
    if(!r)return;
    const d=JSON.parse(r);
    employees=d.employees||employees;
    costRows=d.costRows||costRows;
    calcPositions=d.calcPositions||calcPositions;
    if(d.kfeCustomDb)saveCustomKFE(d.kfeCustomDb);
    setInputs(d.inputs||{});
    renderEmployees();renderCostRows();renderCalcPositions();renderKFESearch();calcAll();
    showSaveStatus('✓ Automatisch geladen (Fallback)');
   }catch(e){}
  });
 }
 tryLoad();
},600);
