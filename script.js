

const play_pause=document.getElementById('playButton');
var audio=document.getElementById('currentAudio');
play_pause.addEventListener("click",function(){
    if (audio.paused) 
    {   
        // play_pause.style.backgroundColor='green';
        this.innerHTML.replace("");
        audio.play();
    }
    else 
    { 
        // play_pause.style.backgroundColor='rgb(115, 138, 117)';
        audio.pause(); 
    }
    
});