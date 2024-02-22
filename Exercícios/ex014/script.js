function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += `Bom dia!`
        img.src = 'fotomanha.png'
        document.body.style.background = '#f4b94a'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML += `Boa Tarde!`
        img.src = 'fototarde.png'
        document.body.style.background = '#d66f13'
    } else {
        msg.innerHTML += `Boa Noite!`
        img.src = 'fotonoite.png'
        document.body.style.background = '#071d1b'
    }

}