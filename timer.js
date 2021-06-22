let time = 3600;

const timer = document.getElementById('timer');

let timeOut = setInterval(timeUpdate, 1000);

function timeUpdate() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    minutes = minutes < 10 ? "0" + minutes: minutes;
    seconds = seconds < 10 ? "0" + seconds: seconds;
    
    timer.innerHTML = `${minutes}:${seconds}`;
    
    time--;
    
    time < 0 ? timer.innerHTML = 'Время вышло!': false;
    

    time < 0 ? clearInterval(timeOut): false;

}

timeUpdate();