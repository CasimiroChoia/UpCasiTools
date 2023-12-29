
window.onload = function() {
    
	open_music = document.createElement("audio")
    open_music.setAttribute("src","entrada.mp3")
    open_music.setAttribute("type","mpeg")
    // open_music.play()
}

function tocar() {
    var aaa = setTimeout(function() {
        open_music.play()
    })
}
