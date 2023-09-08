function updatedateTime (){
    const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getUTCDay()];
    const utcTime = now.toUTCString();

    document.querySelector(".CurrDayodtheWeek").textContent = dayOfWeek;
    document.querySelector(".CurrTime").textContent = utcTime;
}
updatedateTime();
setInterval(updatedateTime,1000)
