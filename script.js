let userInput = document.getElementById("date");
let result = document.getElementById("result");
userInput.setAttribute('max', new Date().toISOString().split("T")[0]);

function getZodiacSign(m1, d1) {
    if ((m1 == 3 && 21 <= d1 && d1 <= 31) || (m1 == 4 && 1 <= d1 && d1 <= 20)) {
      return 'Aries';
    } else if ((m1 == 4 && 21 <= d1 && d1 <= 30) || (m1 == 5 && 1 <= d1 && d1 <= 20)) {
      return 'Taurus';
    } else if ((m1 == 5 && 21 <= d1 && d1 <= 31) || (m1 == 6 && 1 <= d1 && d1 <= 21)) {
      return 'Gemini';
    } else if ((m1 == 6 && 22 <= d1 && d1 <= 30) || (m1 == 7 && 1 <= d1 && d1 <= 22)) {
      return 'Cancer';
    } else if ((m1 == 7 && 23 <= d1 && d1 <= 31) || (m1 == 8 && 1 <= d1 && d1 <= 22)) {
      return 'Leo';
    } else if ((m1 == 8 && 23 <= d1 && d1 <= 31) || (m1 == 9 && 1 <= d1 && d1 <= 22)) {
      return 'Virgo';
    } else if ((m1 == 9 && 23 <= d1 && d1 <= 30) || (m1 == 10 && 1 <= d1 && d1 <= 22)) {
      return 'Libra';
    } else if ((m1 == 10 && 23 <= d1 && d1 <= 31) || (m1 == 11 && 1 <= d1 && d1 <= 21)) {
      return 'Scorpio';
    } else if ((m1 == 11 && 22 <= d1 && d1 <= 30) || (m1 == 12 && 1 <= d1 && d1 <= 21)) {
      return 'Sagittarius';
    } else if ((m1 == 12 && 22 <= d1 && d1 <= 31) || (m1 == 1 && 1 <= d1 && d1 <= 19)) {
      return 'Capricorn';
    } else if ((m1 == 1 && 20 <= d1 && d1 <= 31) || (m1 == 2 && 1 <= d1 && d1 <= 18)) {
      return 'Aquarius';
    } else if ((m1 == 2 && 19 <= d1 && d1 <= 29) || (m1 == 3 && 1 <= d1 && d1 <= 20)) {
      return 'Pisces';
    } else {
      return 'Not a valid date for any zodiac sign';
    }
  };
  
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

    let ageResult = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old`;

    let zodiacSign = getZodiacSign(m1, d1);
    ageResult += `<br>Your zodiac sign is ${zodiacSign}!!!`;
    result.innerHTML = ageResult;
}else {
    userInput.classList.add("error");
    setTimeout(()=>{
        userInput.classList.remove("error");
    },1000);
}

}
