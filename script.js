const missions = [
  {
    title: "Надсилання та отримання",
    intro: "Електронна пошта допомагає обмінюватися повідомленнями через Інтернет. З’ясуй, із чого складається лист і де шукати отримані повідомлення.",
    tasks: [
      {q:"Яке поле містить електронну адресу людини, якій ти надсилаєш лист?",a:["Тема","Кому","Вкладення","Папка «Надіслані»"],correct:1,why:"Поле «Кому» (To) призначене для адреси основного отримувача листа."},
      {q:"Що найкраще написати в полі «Тема»?",a:["Коротко про зміст листа","Свій пароль","Увесь текст листа","Номер телефону"],correct:0,why:"Тема коротко пояснює, про що повідомлення, і допомагає отримувачу зорієнтуватися."},
      {q:"У якій папці зазвичай знаходяться листи, які надійшли тобі?",a:["Чернетки","Надіслані","Вхідні","Кошик"],correct:2,why:"Папка «Вхідні» містить отримані електронні листи."},
      {q:"Що потрібно зробити після заповнення адреси, теми й тексту листа?",a:["Закрити браузер","Натиснути «Надіслати»","Видалити лист","Очистити адресну книгу"],correct:1,why:"Кнопка «Надіслати» відправляє підготовлене повідомлення адресату."}
    ]
  },
  {
    title: "Перенаправлення повідомлень",
    intro: "Можна відповісти відправнику або переслати отриманий лист іншій людині. Це різні дії — не переплутай їх!",
    tasks: [
      {q:"Ти отримав лист від учителя й хочеш повідомити відповідь саме йому. Яку команду обрати?",a:["Переслати","Відповісти","Видалити","Архівувати"],correct:1,why:"«Відповісти» створює лист у відповідь відправнику початкового повідомлення."},
      {q:"Однокласник надіслав тобі корисний лист. Ти хочеш передати його ще одному учню. Що обрати?",a:["Відповісти","Позначити як спам","Переслати","Створити чернетку"],correct:2,why:"«Переслати» надсилає отримане повідомлення іншому адресату."},
      {q:"Для чого використовують поле «Копія» (CC)?",a:["Щоб додати інших видимих отримувачів","Щоб прикріпити файл","Щоб приховати тему","Щоб видалити адресу"],correct:0,why:"Усі отримувачі листа бачать адреси, додані в поле CC."},
      {q:"Що зазвичай відбувається з початковим текстом під час пересилання листа?",a:["Він автоматично зникає","Він додається до нового листа","Він перетворюється на пароль","Він друкується"],correct:1,why:"Початковий лист зазвичай додається нижче нового повідомлення, щоб адресат бачив контекст."}
    ]
  },
  {
    title: "Пересилання файлів",
    intro: "До електронного листа можна додати документи, фотографії та інші файли. Вони називаються вкладеннями. Навчися вибирати їх безпечно.",
    tasks: [
      {q:"Як називають файл, доданий до електронного листа?",a:["Вкладення","Підпис","Тема","Контакт"],correct:0,why:"Файл, прикріплений до листа, називається вкладенням (attachment)."},
      {q:"Який значок найчастіше використовують для додавання файлу?",a:["🔍 Лупа","📎 Скріпка","🖨 Принтер","🔔 Дзвіночок"],correct:1,why:"Значок скріпки зазвичай відкриває вибір файлів для вкладення."},
      {q:"Тобі надійшов лист із невідомим файлом від незнайомця. Як діяти?",a:["Одразу відкрити","Переслати всьому класу","Не відкривати, повідомити дорослого/вчителя","Ввести пароль від пошти"],correct:2,why:"Невідомі вкладення можуть містити шкідливі програми. Не відкривай підозрілі файли."},
      {q:"Який файл найдоречніше надіслати вчителю, якщо він попросив текстовий звіт?",a:["Звіт.docx або PDF","Випадковий файл .exe","Невідомий архів","Файл із незрозумілою назвою"],correct:0,why:"Документ DOCX або PDF — поширений формат для текстового звіту."}
    ]
  },
  {
    title: "Адресна книга",
    intro: "Адресна книга зберігає контакти, щоб не вводити електронні адреси щоразу вручну. Перевір, чи вмієш знаходити й додавати контакти.",
    tasks: [
      {q:"Для чого потрібна адресна книга електронної пошти?",a:["Для зберігання контактів","Для написання програм","Для очищення монітора","Для зміни швидкості Інтернету"],correct:0,why:"В адресній книзі зберігаються імена, електронні адреси та інші дані контактів."},
      {q:"Які дані обов’язково варто перевірити, додаючи контакт?",a:["Колір аватара","Правильність електронної адреси","Улюблену гру","Модель комп’ютера"],correct:1,why:"Помилка в адресі може призвести до того, що лист не потрапить до потрібного адресата."},
      {q:"Ти хочеш швидко знайти контакт «Олена Коваль». Що використаєш?",a:["Пошук за іменем","Кошик","Кнопку друку","Налаштування екрана"],correct:0,why:"Поле пошуку в адресній книзі допомагає швидко знайти потрібний контакт."},
      {q:"Під час створення листа ти почав вводити ім’я з адресної книги. Що може запропонувати пошта?",a:["Відкрити калькулятор","Автоматично підставити адресу контакту","Видалити контакт","Вимкнути Інтернет"],correct:1,why:"Більшість поштових сервісів пропонують збережені контакти під час введення адреси."}
    ]
  },
  {
    title: "Списки розсилки",
    intro: "Список розсилки (група контактів) дає змогу надіслати одне повідомлення відразу кільком людям. Важливо пам’ятати про приватність адрес.",
    tasks: [
      {q:"Що таке список розсилки?",a:["Папка з файлами","Група контактів для спільного надсилання листів","Список паролів","Перелік тем уроків"],correct:1,why:"Список розсилки об’єднує кілька контактів, щоб надсилати їм повідомлення одночасно."},
      {q:"Ти хочеш надіслати оголошення всім учням свого класу. Що зручніше створити?",a:["Групу «6-А»","Окремий пароль для кожного","Нову папку «Кошик»","Порожню чернетку"],correct:0,why:"Група «6-А» дає змогу швидко вибрати всіх потрібних отримувачів."},
      {q:"Що означає поле «Прихована копія» (BCC)?",a:["Усі бачать усі адреси","Адреси отримувачів приховані від інших отримувачів","Лист не буде надіслано","Файл автоматично стискається"],correct:1,why:"BCC дає змогу надіслати копію так, щоб інші отримувачі не бачили адреси в цьому полі."},
      {q:"Яке правило є правильним під час масової розсилки?",a:["Додавати всіх знайомих без дозволу","Надсилати чужі особисті адреси у відкритому списку","Перевіряти отримувачів і дбати про конфіденційність","Надсилати пароль разом із листом"],correct:2,why:"Перед розсилкою перевіряй адресатів і не розголошуй особисті адреси без потреби."}
    ]
  }
];

const state = {scores:[0,0,0,0,0],completed:[false,false,false,false,false],current:0,task:0,answered:false,answers:[]};
const $ = id => document.getElementById(id);
const total = () => state.scores.reduce((a,b)=>a+b,0);
function updateHeader(){
  $("totalScore").textContent=total();
  $("progressText").textContent=state.completed.filter(Boolean).length+" із 5 місій";
  $("progressBar").style.width=(state.completed.filter(Boolean).length/5*100)+"%";
  document.querySelectorAll(".mission-card").forEach((card,i)=>{card.classList.toggle("done",state.completed[i]);card.classList.toggle("active",state.current===i&&!$("gamePanel").classList.contains("hidden"));});
}
function toast(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");setTimeout(()=>el.classList.remove("show"),2100);}
function openMission(index){
  state.current=index;state.task=0;state.answered=false;state.answers=[];
  $("homeScreen").classList.add("hidden");$("missionArea").classList.add("hidden");$("gamePanel").classList.remove("hidden");
  $("gameKicker").textContent="МІСІЯ 0"+(index+1)+" / 05";$("missionScore").textContent=state.scores[index];
  renderTask();window.scrollTo({top:$("gamePanel").offsetTop-15,behavior:"smooth"});updateHeader();
}
function renderTask(){
  const m=missions[state.current],t=m.tasks[state.task];
  $("gameContent").innerHTML=`
    <div class="eyebrow">МІСІЯ 0${state.current+1} · ЗАВДАННЯ 0${state.task+1} / 04</div>
    <h2 class="mission-title">${m.title}</h2>
    <p class="mission-intro">${m.intro}</p>
    <div class="task-box">
      <div class="task-label">ПЕРЕВІР СЕБЕ · 10 БАЛІВ</div>
      <div class="task-question">${t.q}</div>
      <div class="options">${t.a.map((a,i)=>`<button class="option-btn" data-answer="${i}">${String.fromCharCode(65+i)}. ${a}</button>`).join("")}</div>
      <div class="feedback" id="feedback" aria-live="polite">Обери одну правильну відповідь.</div>
      <button class="next-btn" id="nextTask" disabled>${state.task===3?"Завершити місію":"Наступне завдання →"}</button>
    </div>
    <div class="progress-label"><span>ПРОГРЕС МІСІЇ</span><b>${state.task+1} / 4</b></div>
    <div class="progress-track"><div style="width:${(state.task+1)/4*100}%"></div></div>`;
  document.querySelectorAll("[data-answer]").forEach(btn=>btn.addEventListener("click",()=>answer(Number(btn.dataset.answer))));
  $("nextTask").addEventListener("click",nextTask);
}
function answer(choice){
  if(state.answered)return;
  state.answered=true;const t=missions[state.current].tasks[state.task],correct=choice===t.correct;
  document.querySelectorAll("[data-answer]").forEach((btn,i)=>{btn.disabled=true;if(i===t.correct)btn.classList.add("correct");else if(i===choice)btn.classList.add("wrong");});
  const feedback=$("feedback");feedback.textContent=(correct?"Правильно! +10 балів. ":"Не зовсім. Правильна відповідь підсвічена. ")+t.why;feedback.className="feedback "+(correct?"good":"bad");
  if(correct){state.scores[state.current]=Math.min(40,state.scores[state.current]+10);toast("Чудово! +10 балів");}
  $("missionScore").textContent=state.scores[state.current];$("nextTask").disabled=false;state.answers.push(correct);updateHeader();
}
function nextTask(){
  if(state.task<3){state.task++;state.answered=false;renderTask();}
  else finishMission();
}
function finishMission(){
  const i=state.current;state.completed[i]=true;updateHeader();
  const earned=state.scores[i],all=state.completed.every(Boolean);
  $("gameContent").innerHTML=`
    <div class="result-card">
      <div class="result-icon">${earned>=30?"🏆":"🚀"}</div>
      <div class="eyebrow" style="justify-content:center">МІСІЮ ВИКОНАНО</div>
      <h3>${earned===40?"Ідеально!":earned>=20?"Гарна робота!":"Спробу зараховано!"}</h3>
      <p>Ти завершив місію «${missions[i].title}».</p>
      <div class="result-score">${earned}<span style="font-size:15px;color:var(--muted)"> / 40</span></div>
      <div class="badge-row"><span class="badge">${earned>=30?"ЗНАВЕЦЬ ПОШТИ":"ДОСЛІДНИК ПОШТИ"}</span><span class="badge">МІСІЯ 0${i+1} / 05</span></div>
      <p>${all?"Усі п’ять місій пройдено! Ти справжній майстер електронної пошти.":"Можеш перейти до наступної місії або повторити цю, щоб покращити результат."}</p>
      <button class="next-btn" id="continueBtn">${all?"Показати підсумок": "Повернутися до місій"} →</button>
    </div>`;
  $("continueBtn").addEventListener("click",()=>{if(all)showFinal();else backHome();});
}
function showFinal(){
  const score=total(),rank=score>=170?"МАЙСТЕР ПОШТИ":score>=120?"ПОШТОВИЙ ЕКСПЕРТ":score>=70?"ВПЕВНЕНИЙ КОРИСТУВАЧ":"ПОЧАТКІВЕЦЬ";
  $("gameContent").innerHTML=`
    <div class="result-card">
      <div class="result-icon">🎉</div><div class="eyebrow" style="justify-content:center">УСІ МІСІЇ ЗАВЕРШЕНО</div>
      <h3>Вітаємо з перемогою!</h3><p>Ти пройшов усі навчальні випробування з електронної пошти.</p>
      <div class="result-score">${score}<span style="font-size:15px;color:var(--muted)"> / 200</span></div>
      <div class="badge-row"><span class="badge">${rank}</span></div>
      <div class="task-box" style="text-align:left"><div class="task-label">ТВОЇ РЕЗУЛЬТАТИ</div>${missions.map((m,i)=>`<div style="display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px solid #293b57;font-size:12px"><span>${m.title}</span><b style="color:var(--lime)">${state.scores[i]} / 40</b></div>`).join("")}</div>
      <button class="next-btn" id="restartBtn">Пройти гру ще раз ↻</button>
    </div>`;
  $("restartBtn").addEventListener("click",()=>{state.scores=[0,0,0,0,0];state.completed=[false,false,false,false,false];updateHeader();backHome();});
}
function backHome(){
  $("gamePanel").classList.add("hidden");$("homeScreen").classList.remove("hidden");$("missionArea").classList.remove("hidden");updateHeader();window.scrollTo({top:$("missionArea").offsetTop-15,behavior:"smooth"});
}
$("startBtn").addEventListener("click",()=>openMission(0));
$("backBtn").addEventListener("click",backHome);
document.querySelectorAll(".mission-card").forEach(card=>card.addEventListener("click",()=>openMission(Number(card.dataset.mission))));
updateHeader();