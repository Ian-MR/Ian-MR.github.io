const corpo = document.querySelector('body')
corpo.addEventListener('mousedown', function(){
    const bonk = document.querySelector('audio')    
    bonk.currentTime = 0.5
    bonk.play()
})