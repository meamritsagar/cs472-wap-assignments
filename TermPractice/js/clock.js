// clock.js For Live Clock
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    second = second < 10 ? '0'+second : second;
    var strTime = hours + ':' + minutes + ':' + second + ' ' + ampm;
    return strTime;
  }

let tickingCounterClock = setInterval(function () {
    const currentdate = new Date();
    let date = weekday[currentdate.getDay()] + ", " +
    currentdate.getDate() + " " +
    month[(currentdate.getMonth() + 1)] + " " +
    currentdate.getFullYear();// + " " +
    // currentdate.getHours() + ":" +
    // currentdate.getMinutes() + ":" +
    // currentdate.getSeconds();

    let time = formatAMPM(currentdate);
    // let datetime = date + " " + time;

    // document.getElementById("clock").innerText = datetime;
    document.getElementById("date").innerText = date;
    document.getElementById("time").innerText = time;
}, 1000)
