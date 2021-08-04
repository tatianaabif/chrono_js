
window.onload = function() {
    let html_chrono = document.getElementById('chrono');
    let html_play = document.getElementById('play_btn');
    let html_pause = document.getElementById('pause_btn');
    let html_reset = document.getElementById('reset_btn');

    const conversion = function(time_in_second) {
        let seconds = time_in_second % 60;
        //let minutes = Math.floor(time_in_second / 60) ;  
        let minutes = (time_in_second - seconds) /60 ;
        return `${(minutes < 10)?'0'+minutes:minutes}:${(seconds < 10)?'0'+seconds:seconds}`;
            
    }

    const chronoAddOne = function() {
        seconds++;
        html_chrono.innerText = conversion(seconds);
    }

    let seconds = 0;

    html_chrono.innerHTML = conversion(seconds);

    
    let timer = undefined;

    html_play.onclick = function(){
        timer = setInterval(chronoAddOne, 1000);
    }

    html_pause.addEventListener('click', function(){clearInterval(timer);});
    
    html_reset.onclick = function () {
        clearInterval(timer);
        seconds = 0;
        html_chrono.innerText = seconds;   
    }


}






