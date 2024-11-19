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

    // console.log('paisID:',paisId) 

    // Limpa as opções anteriores antes de adicionar as novas
    artistaSelect.innerHTML = '<option value="">Selecione um artista</option>';
    comidaSelect.innerHTML = '<option value="">Selecione uma comida típica</option>';
    artistaSelect.disabled = !paisId;
    comidaSelect.disabled = !paisId;

    if(paisId){
        const artistas = bancoDados.artistas.filter(artista => artista.id_pais === paisId);
        const comidas = bancoDados.comidas.filter(comida => comida.id_pais === paisId); 
        // console.log('artistas:',artistas)

        artistas.forEach(artista => {
            let option = document.createElement('option');
            option.value = artista.id_pais;
            option.textContent = artista.nome_artista;
            artistaSelect.appendChild(option);
        });

        comidas.forEach(comida => {
            let option = document.createElement('option');
            option.value = comida.id_pais;
            option.textContent = comida.nome_comida;
            comidaSelect.appendChild(option);
        });
        // console.log('passei por if(paisesId)');
    };
 });

 btnBuscar.addEventListener('click', function() {
    const paisId = parseInt(paisSelect.value);
    const artistaId = parseInt(artistaSelect.value);
    const comidaId = parseInt(comidaSelect.value);
    resultadoDiv.innerHTML = ''; 

    if(!paisId){
        resultadoDiv.style.display = 'none'; 
        return; 
    }

    if (paisId) {
        const pais = bancoDados.paises.find(p => p.id === paisId);
        resultadoDiv.innerHTML += `<p class='resultado-p'><strong>País:</strong> ${pais.descricao}<p>`;
    }
    if (artistaId) {
        const artista = bancoDados.artistas.find(a => a.id_pais === artistaId);
        resultadoDiv.innerHTML += `<p class='resultado-p'><strong>Artista:</strong> ${artista.descricao}</p>`;
    }
    if (comidaId) {
        const comida = bancoDados.comidas.find(c => c.id_pais === comidaId);
        resultadoDiv.innerHTML += `<p class='resultado-p'><strong>Comida:</strong> ${comida.descricao}</p>`;
    }
    resultadoDiv.style.display = 'block';


});

// atualizando codigo
