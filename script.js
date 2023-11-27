let userInput = document.getElementById("date");
let result = document.getElementById("result");
userInput.setAttribute('max', new Date().toISOString().split("T")[0]);

function calculateAge() {

    if(userInput.value.length>0){

        
        let birthDate = new Date(userInput.value);
        let d1 = birthDate.getDate();
        let m1 = birthDate.getMonth() + 1; // month starts from 0 
        let y1 = birthDate.getFullYear();
        
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let y3, m3, d3;
    
    y3 = y2 - y1;
    
    if (m2 < m1 || (m2 === m1 && d2 < d1)) {
        y3--;
    }
    
    if (m2 < m1) {
        m3 = (m2 + 12) - m1;
    } else {
        m3 = m2 - m1;
    }
    
    if (d2 < d1) {
        let prevMonthDays = new Date(y2, m2 - 1, 0).getDate();
        d3 = (d2 + prevMonthDays) - d1;
        m3--;
    } else {
        d3 = d2 - d1;
    }
    
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
}else {
    userInput.classList.add("error");
    setTimeout(()=>{
        userInput.classList.remove("error");
    },1000);
}

}
