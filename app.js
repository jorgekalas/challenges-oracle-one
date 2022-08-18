let textoAEncriptar = document.querySelector('.inputTexto');
let botonEncriptar = document.querySelector('.botonEncriptar')
let botonDesencriptar = document.querySelector('.botonDesencriptar')
let aside = document.querySelector('.resultadoEncriptacion')
let imagenMunieco = document.querySelector('.imagenMunieco')
let parrafoNingunMensaje = document.querySelector('.ningunMensaje')
let parrafoIngresaElTexto = document.querySelector('.ingresaElTexto');

let textoEncriptado = "";


botonEncriptar.addEventListener('click', () => {

    let arrayTextoAEncriptar = (textoAEncriptar.value).split('');
    let arrayTextoEncriptado = [];

    // console.log(arrayTextoAEncriptar);


    arrayTextoAEncriptar.forEach(letra => {
        
        if(letra=="a"){
            arrayTextoEncriptado.push('ai');
        } else if(letra=="e"){
            arrayTextoEncriptado.push('enter');
        } else if(letra=="i"){
            arrayTextoEncriptado.push('imes');
        } else if(letra=="o"){
            arrayTextoEncriptado.push('ober');
        } else if(letra=="u"){
            arrayTextoEncriptado.push('ufat');
        } else{
            arrayTextoEncriptado.push(letra);
        }  
    })

    textoEncriptado = arrayTextoEncriptado.join('');
    console.log(textoEncriptado);



    if(textoEncriptado != ""){
        imagenMunieco.remove();
        parrafoNingunMensaje.remove();
        parrafoIngresaElTexto.remove();
        aside.innerHTML+=`<p class="parrafoTextoEncriptado">${textoEncriptado}</p>`
        aside.innerHTML+=`<button class="botonCopiar">Copiar</button>`
    }

});



botonDesencriptar.addEventListener('click', () =>{
    let parrafoTextoEncriptado = document.querySelector('.parrafoTextoEncriptado')


    
    let textoDesencriptado = textoAEncriptar.value;
    console.log(textoDesencriptado);

    parrafoTextoEncriptado.remove();
    aside.innerHTML+=`<p class="parrafoTextoDesencriptado">${textoDesencriptado}</p>`;
});