let audio = document.getElementById("audio");    // Берём элемент audio
let time = document.querySelector(".line-audio-live");      // Берём аудио дорожку
let play = document.querySelector(".promo-audio_play-pause");   // Берём кнопку проигрывания
let timeLive = document.querySelector('.audio-timeShtamp_live');
let timeLenght = document.querySelector('.audio-timeShtamp_lenght');
let pause = document.querySelector('.promo-audio_pause');
let line = document.querySelector('.line-audio');
let timeSpan = document.querySelector('.line-audio span');
let timeSkip = document.querySelector(".line-audio-skip"); 

//длительность трека
window.onload = function() {
    let timeLenghtTest = Math.round(audio.duration % 60);
    if (audio.duration > 59){
        timeLenght.textContent = `-0${Math.round(audio.duration / 60)}:${timeLenghtTest < 10 ? '0'+ timeLenghtTest : timeLenghtTest}`;
    }else {
        timeLenght.textContent = `-00:${timeLenghtTest < 10 ? '0' + timeLenghtTest: timeLenghtTest}`
    }
}

//отображение линии и таймкода

function timeLineSkip() {
    let mouseX = event.clientX - 300;
    let pxSec = Math.floor(line.offsetWidth/audio.duration);
    timeSkip.style.width = `${mouseX}px`;
    let skipTime = Math.floor(mouseX /pxSec);
    if (skipTime / 60 > 0) {
        timeSpan.textContent = `0${Math.floor(skipTime/60)}:${skipTime % 60 < 10 ? '0' + skipTime % 60 : skipTime % 60}`
    }else {
        timeSpan.textContent = `00:${skipTime % 60 < 10 ? '0' + skipTime % 60 : skipTime % 60}`
    }
    // Мы должны запустить трек(передавать ли аргумент ?) с этого интервала ?????
    // line.addEventListener('click', () => {
    //     playMusic(skipTime)
    // })
};
line.addEventListener('mousemove', timeLineSkip);

line.addEventListener('mouseout', () => {
    timeSkip.style.width = 0;
});

//запуск трека
// argument skiptime ???
function playMusic() {XMLDocument 
    audio.play();
    play.classList.toggle('active'); // класс для смены play pause
    if (play.classList.contains('active') === false){
        audio.pause();
        clearInterval(audioPlay)
    }
    // audio.currentTime = skiptime; должны получить извне начало трека ???????????
    audioPlay = setInterval(() => {
        let audioTime = Math.round(audio.currentTime); // текущее время трека
        console.log(audioTime);
        let audioLenght = Math.round(audio.duration); //длительность трека
        if (audioTime < 60) {
            if (audioTime < 10) {
                timeLive.textContent = `00:0${audioTime}`
            }else timeLive.textContent = `00:${audioTime}`
        }else if( audioTime >= 60) {
            let num = audioTime % 60;
            if (num < 10) {
                timeLive.textContent = `0${Math.floor(audioTime/60)}:0${num}`;
            }else timeLive.textContent = `0${Math.floor(audioTime/60)}:${num}`;
        }

        time.style.width = (audioTime * 100) / audioLenght + "%"
        if (audio.currentTime >= audio.duration) {
            play.classList.remove('active');
            time.style.width = 0;
            clearInterval(audioPlay)
        }

    }, 10)
};

play.addEventListener('click', playMusic);




