const $video = document.querySelector('#video')
const $play = document.querySelector('.play')
const $pause = document.querySelector('.pause')
const $backward = document.querySelector('.backward')
const $forward = document.querySelector('.forward')


$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

function handlePlay(){
    $video.play()
    $pause.hidden = false
    $play.hidden = true
    console.log('le diste click al boton de play')
}
function handleBackward(){
    $video.currentTime -= 10 
    console.log('para atras 10 segundos')
}
function handleForward(){
    $video.currentTime += 10
    console.log('para adelante 10 segundos')
        }
function handlePause(){
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('le diste click al boton de pause')
}


const $progress = document.querySelector('.progress')
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);

function handleLoaded(){
    $progress.max = $video.duration
    console.log('ha cargado mi video', $video.duration); 
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
    //console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handInput);

function handInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}





