// clock.js For Live Clock
window.onload = function() {
    let tickingCounterClock = setInterval(function () {
        const currentdate = new Date();
        let datetime = currentdate.getFullYear() + "-" +
        (currentdate.getMonth() + 1) + "-" +
        currentdate.getDate() + " " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();

        document.getElementById("clock").innerHTML = datetime;
    }, 1000)
};
