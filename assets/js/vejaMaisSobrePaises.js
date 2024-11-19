import bancoDados from "./bancoDados.js";
const btnBuscar = document.getElementById('btn-buscarPaises');
const resultadoDiv = document.getElementById('resultado');
const artistaSelect = document.getElementById('artistaSelect');
const comidaSelect = document.getElementById('comidaSelect');
const paisSelect = document.getElementById('paisSelect');


// console.log(bancoDados) ////debug
window.onload = function() {
    const paises = bancoDados.paises; 
    // console.log('sadasda',paises) ////debug
    if (paises && paisSelect) {
        paises.forEach(pais => {
            let option = document.createElement('option');
            option.value = pais.id;
            option.textContent = pais.nome;
            paisSelect.appendChild(option);
        });
    }
};
   
    
    
paisSelect.addEventListener('change', function() {
    const paisId = parseInt(this.value);

    console.log('paisID:',paisId)

    // Limpar os selects de artistas e comidas ao selecionar um novo país
    


    // artistaSelect.innerHTML = '<option value="">Selecione um artista</option>';
    // comidaSelect.innerHTML = '<option value="">Selecione uma comida típica</option>';
    // artistaSelect.disabled = !paisId;
    // comidaSelect.disabled = !paisId;

    if(paisId){
        // const artistas = bancoDados.artistas.filter(artista => artista.paisId === paisId);//ainda n tem
        // const comidas = bancoDados.comidas.filter(comida => comida.paisId === paisId); //ainda n tem

        // artistas.forEach(artista => {
        //     let option = document.createElement('option');
        //     option.value = artista.id;
        //     option.textContent = artista.nome;
        //     artistaSelect.appendChild(option);
        // });

        // comidas.forEach(comida => {
        //     let option = document.createElement('option');
        //     option.value = comida.id;
        //     option.textContent = comida.nome;
        //     comidaSelect.appendChild(option);
        // });
        console.log('passei por if(paisesId)');
    };
 });

 btnBuscar.addEventListener('click', function() {
    const paisId = parseInt(paisSelect.value);
    // const artistaId = parseInt(artistaSelect.value);//ainda n tem
    // const comidaId = parseInt(comidaSelect.value);//ainda n tem
    resultadoDiv.innerHTML = ''; // Limpar resultado anterior

    if (paisId) {
        const pais = bancoDados.paises.find(p => p.id === paisId);
        resultadoDiv.innerHTML += `<p class='resultado-p'><strong>País:</strong> ${pais.descricao}<p>`;
    }
    // if (artistaId) {
    //     const artista = bancoDados.artistas.find(a => a.id === artistaId);
    //     resultadoDiv.innerHTML += `<div><strong>Artista:</strong> ${artista.descricao}</div>`;
    // }
    // if (comidaId) {
    //     const comida = bancoDados.comidas.find(c => c.id === comidaId);
    //     resultadoDiv.innerHTML += `<div><strong>Comida:</strong> ${comida.descricao}</div>`;
    // }
    resultadoDiv.style.display = 'block';

});
