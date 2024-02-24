function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.getElementById('imagem')
    
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verrifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''

        if(fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <14){
                //Criança
                img.src = 'criançam.png'
            } else if (idade <24) {
                //Jovem
                img.src = 'jovemm.png'
            } else if (idade <60){
                //Adulto
                img.src = 'adultom.png'
            } else {
                //Idoso
                img.src = 'idosom.png'
            }
        } else if(fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <14){
                //Criança
                img.src = 'criançaf.png'
            } else if (idade <24) {
                //Jovem
                img.src = 'jovemf.png'
            } else if (idade <60){
                //Adulto
                img.src = 'adultof.png'
            } else {
                //Idoso
                img.src = 'idosof.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }   
}