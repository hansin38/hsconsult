const firebaseConfig = {
    apiKey: "AIzaSyCpMIytCpZ5F5JRoKABJE7kkgv_RZReFRc",
    authDomain: "hansin-df749.firebaseapp.com",
    projectId: "hansin-df749",
    storageBucket: "hansin-df749.firebasestorage.app",
    messagingSenderId: "908820835514",
    appId: "1:908820835514:web:0e02c604c7cf775d5f2683",
    measurementId: "G-LP10H2WN94"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const FIX_OT_HOURS = 65;
let currentUser = { name: "", phone: "" };

const holidays2026 = [
    "2026-01-01", "2026-02-16", "2026-02-17", "2026-02-18", "2026-02-19",
    "2026-03-01", "2026-03-02", "2026-05-01", "2026-05-05", "2026-05-24", 
    "2026-05-25", "2026-06-03", "2026-06-06", "2026-08-15", "2026-08-17", 
    "2026-09-24", "2026-09-25", "2026-09-26", "2026-10-03", "2026-10-09", "2026-12-25"
];

let minDateStr = "2026-05-25"; 
let maxDateStr = "";           

function initDatePickerLimits() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    maxDateStr = `${yyyy}-${mm}-${dd}`; 
}

// 🕒 [스마트 필터] 대표님 직관 맞춤형 24시간 순환 정렬 추출기
function buildCustomOptions(type, mode, weekdayStartVal) {
    let arr = [];
    
    // 1. 평일 야근 시작시간은 무조건 딱 3개만 깔끔히 제공
    if (type === 'weekday' && mode === 'start') {
        return ["18:30", "19:00", "19:30"];
    }

    // 2. 기준 대기 시간(baseTime) 설정 분기 구조
    let baseTime = "18:00"; 

    if (type === 'weekend') {
        // 주말인 경우 시작/종료 모두 09:00부터 24시간 순환 정렬
        baseTime = "09:00";
    } else if (type === 'weekday' && mode === 'end') {
        // 평일 종료인 경우: 사원이 선택한 시작 시간에 맞춰서 종료 기준점 강제 싱크 연동
        if (weekdayStartVal === "18:30") baseTime = "19:00";
        else if (weekdayStartVal === "19:00") baseTime = "19:30";
        else if (weekdayStartVal === "19:30") baseTime = "20:00";
        else baseTime = "19:00"; 
    }

    let [baseH, baseM] = baseTime.split(':').map(Number);
    let baseTotalMin = baseH * 60 + baseM;

    // 3. 결정된 기준 시간을 맨 첫 번째 칸에 배치
    arr.push(baseTime);

    // 4. 기준 시간 다음(30분 뒤)부터 시작하여 24시간(총 47개 세션)을 순서대로 순환 생성
    for (let i = 1; i < 48; i++) {
        let currentTotalMin = (baseTotalMin + i * 30) % (24 * 60);
        
        let h = Math.floor(currentTotalMin / 60);
        let m = currentTotalMin % 60;
        
        let hourStr = String(h).padStart(2, '0');
        let minStr = String(m).padStart(2, '0');
        
        arr.push(`${hourStr}:${minStr}`);
        if (type === 'weekday' && mode === 'end' &&
        hourStr === '08' && minStr === '30') {
        break;
}
    }
    
    return arr;
}

// 🚀 [마스터 드롭다운 생성기] 중복 제거 및 "선택" 공란 초기화 완벽 제어
function makeSmartSelect(row, mode, type, startVal) {
    const container = row.querySelector(`.${mode}-time-container`);
    
    // 평일 종료 시간 생성 시, 이미 선택된 시작 시간이 없다면 화면에 표시된 값을 매칭
    if (type === 'weekday' && mode === 'end' && !startVal) {
        startVal = row.querySelector('.start-time-container').dataset.value || "08:30";
    }

    const timeList = buildCustomOptions(type, mode, startVal);
    
    // 🔒 [대표님 픽 보완] 기본 표시 문구는 무조건 깔끔하게 공란("선택") 처리
    let initialText = "선택";
    
    // 만약 기존에 이미 선택해 둔 안전한 데이터가 남아있다면 유지
    const currentSaved = container.dataset.value || "";
    if (currentSaved && timeList.includes(currentSaved)) {
        initialText = currentSaved;
    } else {
        container.dataset.value = ""; // DB 제출 및 계산 시 에러 방지용 공란 초기화
    }

    let html = `
        <div class="custom-select-wrapper">
            <div class="selected-value" onclick="toggleDropdown(this)">${initialText}</div>
            <div class="select-options-box">
                <div onclick="selectCustomValue(this, '')">선택</div>
    `;
    
    timeList.forEach(t => {
        html += `<div onclick="selectCustomValue(this, '${t}')">${t}</div>`;
    });
    
    html += `</div></div>`;
    container.innerHTML = html;
}

// 🚀 [스마트 선택 처리기] 값 선택 시 실시간 종료시간 재생성 연동
function selectCustomValue(el, val) {
    const wrapper = el.closest('.custom-select-wrapper');
    const displayDiv = wrapper.querySelector('.selected-value');
    const container = wrapper.parentElement;
    
    displayDiv.innerText = val ? val : "선택";
    container.dataset.value = val;
    wrapper.querySelector('.select-options-box').style.display = 'none';
    
    // 평일 야근의 시작 시간이 바뀌면 즉시 종료 시간 리스트를 다음 시간 기준(+30분)으로 재생성
    const row = container.closest('tr');
    if (row && row.dataset.workType === 'weekday' && container.classList.contains('start-time-container')) {
        // 종료 시간은 기존 선택 기록을 무시하고 강제로 "선택" 공란으로 초기화 시킨 후 리스트 재생성
        const endContainer = row.querySelector('.end-time-container');
        endContainer.dataset.value = ""; 
        makeSmartSelect(row, 'end', 'weekday', val);
    }
    
    calculateRowHours(container);
}

function toggleDropdown(el) {
    document.querySelectorAll('.select-options-box').forEach(box => {
        if(box !== el.nextElementSibling) box.style.display = 'none';
    });
    const target = el.nextElementSibling;
    target.style.display = (target.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('click', function(e) {
    if(!e.target.classList.contains('selected-value')) {
        document.querySelectorAll('.select-options-box').forEach(box => box.style.display = 'none');
    }
});

function handleLogin() {
    const name = document.getElementById('login-name').value.trim();
    const phone = document.getElementById('login-phone').value.trim();
    if(!name || !phone) { alert("정보를 모두 입력해주세요."); return; }
    currentUser.name = name;
    currentUser.phone = phone;
    
    initDatePickerLimits(); 
    
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('main-system').style.display = 'block';
    document.getElementById('user-display').innerText = `${name}(${phone.slice(-4)})`;
    resetFormRows();
}

function resetFormRows() {
    document.getElementById('ot-tbody').innerHTML = "";
    for(let i=0; i<5; i++) { addRow(); }
    calculateTotalHours();
}

function openTab(tabId, element) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    element.classList.add('active');
}

function handleDateChange(dateInput) {
    const row = dateInput.closest('tr');
    const typeTextSpan = row.querySelector('.type-text');
    
    if(!dateInput.value) {
        typeTextSpan.innerText = "-";
        typeTextSpan.className = "type-text";
        return;
    }

    const selectedDateStr = dateInput.value; 
    const selectedDate = new Date(selectedDateStr);
    const dayOfWeek = selectedDate.getDay(); 

    // 날짜가 바뀌면 기존에 채워져 있던 시간 데이터들도 깨끗이 리셋 처리
    row.querySelector('.start-time-container').dataset.value = "";
    row.querySelector('.end-time-container').dataset.value = "";

    if (dayOfWeek === 0 || dayOfWeek === 6 || holidays2026.includes(selectedDateStr)) {
        typeTextSpan.innerText = "주말/공휴일";
        typeTextSpan.className = "type-text type-weekend"; 
        row.dataset.workType = 'weekend';
        makeSmartSelect(row, 'start', 'weekend');
        makeSmartSelect(row, 'end', 'weekend');
    } else {
        typeTextSpan.innerText = "평일 야근";
        typeTextSpan.className = "type-text type-weekday"; 
        row.dataset.workType = 'weekday';
        makeSmartSelect(row, 'start', 'weekday');
        makeSmartSelect(row, 'end', 'weekday');
    }
    
    calculateRowHours(dateInput);
}

function addRow() {
    const tr = document.createElement('tr');
    tr.dataset.workType = 'weekday'; 
    
    tr.innerHTML = `
        <td><input type="date" class="work-date" min="${minDateStr}" max="${maxDateStr}" onchange="handleDateChange(this)" required></td>
        <td><span class="type-text">-</span></td>
        <td><div class="start-time-container" data-value=""></div></td>
        <td><div class="end-time-container" data-value=""></div></td>
        <td><input type="text" class="work-reason" placeholder="용역명 또는 수행 업무를 입력하세요." required></td>
        <td><span class="row-calculated-hours">0</span><span class="unit-text">시간</span></td>
        <td><button type="button" class="btn btn-delete" onclick="deleteRow(this)">삭제</button></td>
    `;
    
    makeSmartSelect(tr, 'start', 'weekday');
    makeSmartSelect(tr, 'end', 'weekday');
    
    document.getElementById('ot-tbody').appendChild(tr);
}

function deleteRow(btn) { btn.closest('tr').remove(); calculateTotalHours(); }

function calculateRowHours(el) {
    const row = el.closest('tr');
    const type = row.dataset.workType; 
    
    const startVal = row.querySelector('.start-time-container').dataset.value || "";
    const endVal = row.querySelector('.end-time-container').dataset.value || "";
    const resSpan = row.querySelector('.row-calculated-hours');

    // 하나라도 고르지 않은 공란("선택") 상태라면 즉시 인정시간을 0으로 떨구고 차단
    if (!startVal || !endVal) { 
        resSpan.innerText = "0"; 
        calculateTotalHours(); 
        return; 
    }

    let [sh, sm] = startVal.split(':').map(Number);
    let [eh, em] = endVal.split(':').map(Number);
    let sMin = sh * 60 + sm;
    let eMin = eh * 60 + em;

    if (eMin < sMin) eMin += 24 * 60; 
    let diff = eMin - sMin;

    if (type === 'weekend') {
        const lunchStart = 12 * 60;
        const lunchEnd = 13 * 60;
        const dinnerThreshold = 18 * 60; 

        if (sMin <= lunchStart && eMin >= lunchEnd) diff -= 60;
        if (sMin < dinnerThreshold && eMin > dinnerThreshold) {
            diff -= 30;
        }
    }

    resSpan.innerText = Math.max(0, diff / 60).toFixed(1);
    calculateTotalHours();
}

function calculateTotalHours() {
    let total = 0;
    document.querySelectorAll('.row-calculated-hours').forEach(s => total += parseFloat(s.innerText) || 0);
    document.getElementById('total-hours').innerText = total.toFixed(1) + " 시간";
    
    const badge = document.getElementById('ot-status');
    if (total > FIX_OT_HOURS) {
        badge.innerText = "★ 초과 수당 지급 대상"; badge.className = "status-badge over-ot";
    } else {
        badge.innerText = "고정 OT 범위 내"; badge.className = "status-badge under-ot";
    }
    return total;
}

function submitForm(event) {
    event.preventDefault();
    const userConfirm = confirm("작성하신 연장근로일지를 제출하시겠습니까?\n제출 후 관리자가 승인/반송하기 전까지는 수정할 수 없습니다.");
    if (!userConfirm) return;

    const rows = document.querySelectorAll('#ot-tbody tr');
    let logs = [];

    rows.forEach(row => {
        const date = row.querySelector('.work-date').value;
        const type = row.dataset.workType; 
        const startVal = row.querySelector('.start-time-container').dataset.value || "";
        const endVal = row.querySelector('.end-time-container').dataset.value || "";
        const reasonInput = row.querySelector('.work-reason'); 
        const hours = row.querySelector('.row-calculated-hours').innerText;

        if(date && startVal && endVal) {
            logs.push({ 
                date, 
                type, 
                start: startVal, 
                end: endVal, 
                reason: reasonInput ? reasonInput.value.trim() : "", 
                hours: parseFloat(hours) 
            });
        }
    });

    if(logs.length === 0) { alert("입력된 완결된 근로 내역이 없습니다. 일자와 시간을 다시 확인해주세요."); return; }

    db.collection("overtime_requests").add({
        employeeName: currentUser.name,
        employeePhone: currentUser.phone,
        submittedAt: firebase.firestore.FieldValue.serverTimestamp(),
        totalHours: calculateTotalHours(),
        status: "대기",
        detailLogs: logs
    })
    .then(() => {
        alert("🎉 성공적으로 제출되었습니다!");
        resetFormRows();
        const historyTabBtn = document.getElementById('btn-history-tab');
        openTab('history-tab', historyTabBtn);
        loadMyHistory(); 
    })
    .catch((error) => {
        alert("전송 실패: " + error.message);
    });
}

function loadMyHistory() {
    const container = document.getElementById('history-container');
    container.innerHTML = "DB에서 내역을 불러오는 중입니다...";

    db.collection("overtime_requests")
      .where("employeeName", "==", currentUser.name)
      .where("employeePhone", "==", currentUser.phone)
      .orderBy("submittedAt", "desc")
      .get()
      .then((querySnapshot) => {
          if(querySnapshot.empty) { container.innerHTML = "<p>제출된 내역이 없습니다.</p>"; return; }
          
          let html = "";
          querySnapshot.forEach((doc) => {
              const data = doc.data();
              const dateStr = data.submittedAt ? data.submittedAt.toDate().toLocaleDateString() : "방금 전";
              
              let statusColor = "#ffc107"; 
              if(data.status === "승인") statusColor = "var(--success-color)";
              if(data.status === "반송") statusColor = "var(--danger-color)";

              html += `
                <div class="history-list">
                    <strong>${dateStr} 제출 연장근로일지</strong> (총 ${data.totalHours}시간 신청)
                    <span class="status-text" style="color: ${statusColor};">[${data.status}]</span>
                    <p style="font-size:12px; color:#666; margin:5px 0 0 0;">
                        ${data.status === '반송' ? '⚠️ 반송 사유를 확인하고 수정하여 다시 제출하세요.' : '승인 완료/대기 상태에서는 임의 수정이 불가능합니다.'}
                    </p>
                </div>
              `;
          });
          container.innerHTML = html;
      })
      .catch(err => { container.innerHTML = "내역 로드 실패: " + err.message; });
}