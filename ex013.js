var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 00 && hora < 6) {
    console.log('Boa Madrugada!')
}else if (hora <= 11){
    console.log('Bom Dia')
}else if (hora <= 18) {
    console.log('Boa tarde')
}else {
    console.log('Boa noite')
}
