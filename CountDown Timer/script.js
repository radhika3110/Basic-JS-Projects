// const date = new Date(); 
// console.log(date); --> shows current date

const date = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');


const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}

const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime; //milliseconds

    // calculate days, hours, mins, secs from timeDifference
    let calcSecs = Math.floor(timeDifference/1000) % 60;
    let calcmins = Math.floor(timeDifference/1000/60) % 60;
    let calchours = Math.floor(timeDifference/1000/60/60) % 24;
    let calcdays = Math.floor(timeDifference/1000/60/60/24);

    days.textContent = formatTime(calcdays);
    hours.textContent = formatTime(calchours);
    mins.textContent = formatTime(calcmins);
    secs.textContent = formatTime(calcSecs);
    
}

const countDown = (targetDate) => {
    setInterval(() => updateCountDown(targetDate), 1000);
}

const targetDate = new Date("January 01 2025 00:00");
countDown(targetDate);