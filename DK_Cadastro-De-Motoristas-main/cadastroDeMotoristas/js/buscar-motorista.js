var botaoBuscar = document.querySelector("#buscar-encomenda")

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/motoristas")
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        console.log(typeof resposta);
        console.log(resposta);
        
    })
});
