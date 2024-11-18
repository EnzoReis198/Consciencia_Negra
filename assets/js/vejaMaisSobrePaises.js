const bancoDados = require("./bancoDados");
console.log(bancoDados)
// JavaScript (seuScript.js)
window.onload = function() {
    const paises = bancoDados.paises; // Acessa os dados locais
    console.log(paises)
    const paisSelect = document.getElementById('paisSelect');
    if (paises && paisSelect) { // Verifica se os elementos existem
        paises.forEach(pais => {
            let option = document.createElement('option');
            option.value = pais.id;
            option.textContent = pais.nome;
            paisSelect.appendChild(option);
        });
    }
};





// window.onload = function() {
//     fetch('https://api-consciencia-negra.vercel.app/paises')
//         .then(response => response.json())
//         .then(paises => {
//             const paisSelect = document.getElementById('paisSelect');
//             paises.forEach(pais => {
//                 let option = document.createElement('option');
//                 option.value = pais.id;
//                 option.textContent = pais.nome;
//                 paisSelect.appendChild(option);
//             });
//         })

        
//         .catch(error => console.error('Erro ao buscar países:', error));
// };

// document.getElementById('paisSelect').addEventListener('change', function() {
//     const paisId = this.value;

//     console.log("id pais do elemento paisSelect...")
//     console.log(paisId)

//     // Limpar os selects de artistas e comidas ao selecionar um novo país
//     const artistaSelect = document.getElementById('artistaSelect');
//     const comidaSelect = document.getElementById('comidaSelect');
//     artistaSelect.innerHTML = '<option value="">Selecione um artista</option>';
//     comidaSelect.innerHTML = '<option value="">Selecione uma comida típica</option>';

//     // Buscar artistas relacionados ao país selecionado
//     fetch(`https://api-consciencia-negra.vercel.app/artistas?pais=${paisId}`)
//         .then(response => response.json())
//         .then(artistas => {
//             artistas.forEach(artista => {
//                 let option = document.createElement('option');
//                 option.value = artista.id;
//                 option.textContent = artista.nome;
//                 artistaSelect.appendChild(option);
//             });
//         })
//         .catch(error => console.error('Erro ao buscar artistas:', error));

//     // Buscar comidas relacionadas ao país selecionado
//     fetch(`https://api-consciencia-negra.vercel.app/comidas?pais=${paisId}`)
//         .then(response => response.json())
//         .then(comidas => {
//             comidas.forEach(comida => {
//                 let option = document.createElement('option');
//                 option.value = comida.id;
//                 option.textContent = comida.nome;
//                 comidaSelect.appendChild(option);
//             });
//         })
//         .catch(error => console.error('Erro ao buscar comidas:', error));
// });

