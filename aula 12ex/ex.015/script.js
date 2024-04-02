function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#F7AD22'
    } else if(hora >= 12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#95DCF7 '
    } else{
        img.src = 'noite.png'
        document.body.style.background = '#8D55A9 '
    }
}
