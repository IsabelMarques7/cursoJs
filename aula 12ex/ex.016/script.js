function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano').value;
    var res = document.querySelector('div#res');

    if (fano.length == 0 || Number(fano) > ano) {
        window.alert('Verifique os dados e tente novamente');
    } else {
        var masc = document.getElementById('masc').checked;
        var fem = document.getElementById('fem').checked;
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        var idade = ano - Number(fano);

        if (masc) {
            genero = 'homem';
            if(idade>=0 && idade < 10) {
                img.setAttribute('src','menino.png')
            } else if(idade < 21) {
                img.setAttribute('src','jovem_h.png')
            } else if(idade < 50) {
                img.setAttribute('src','adulto.png')
            } else {
                img.setAttribute('src','idoso.png')
            }

        } else if (fem) {
            genero = 'mulher';
            if(idade>=0 && idade < 10){
                img.setAttribute('src','menina.png')
            } else if(idade < 21){
                img.setAttribute('src','jovem_m.png')
            } else if(idade < 50){
                img.setAttribute('src','adulta.png')
            } else{
                img.setAttribute('src','idosa.png')
            }
        } 

        img.style.display = 'block'; // Garante que a imagem seja exibida como bloco{}
        img.style.margin = '0 auto'; // Margem automática nos lados horizontalmente

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img)
    }
}
