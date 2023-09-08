function updatedate(){
    const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    document.querySelector(".CurrentDayodtheWeek").textContent = dayOfWeek;
}
updatedate();
var time = new Date().getTime();
document.querySelector(".currenttime").innerHTML = time;