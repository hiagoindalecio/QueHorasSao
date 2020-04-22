function carregar()
{
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = new Number(data.getHours())
    //var hora = 4;
    var minuto = new Number(data.getMinutes())
    //var minuto = 30;
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if(hora >= 0 && hora < 12)
    {
        //manhã
        msg.innerHTML += ` Bom dia!`
        img.src = 'manha.png'
        document.body.style.background = '#dccfc5'
    }
    else if(hora >=12 && hora < 19)
    {
        //tarde
        msg.innerHTML += ` Boa tarde!`
        img.src = 'tarde.png'
        document.body.style.background = '#ffb85c'
    }
    else
    {
        //noite
        msg.innerHTML += ` Boa noite!`
        img.src = 'noite.png'
        document.body.style.background = '#2d2c2d'
    }
}
