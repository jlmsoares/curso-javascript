var idade = 68
console.log(`Você possui ${idade} anos.`)
if (idade < 16) {
    console.log('O voto não é obrigatório!')
}else if (idade < 18 || idade > 65) {
    console.log('O voto é opcional!')
}else {
    console.log('Voto obrigatório!')
}
