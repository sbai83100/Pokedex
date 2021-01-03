


const fetchPokemon = (pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(url)
        .then( response => {
            return response.json()
        })
        .then( data => {
            console.log(data);
            const pokemon = {
                name: data.name,
                id: data.id,
                image: data.sprites['front_default'],
                type: data.types.map( type => type.type.name ),
            };
            console.log(pokemon);

            const html = 
            `
            <div class="name">
                ${pokemon.name}
            </div>
            <div class="details">
                <img src="${pokemon.image}">
            </div>
            `;

            let pokedex = document.getElementById("pokedex");
            pokedex.innerHTML = html;
        }).catch(function () {
            console.log("error");
        });
}

/*
function getInputValue() {
    var inputVal = document.getElementById("pokemonName").value;
    alert(inputVal);
    fetchPokemon(inputVal);
}
*/

/*
$("#pokemonName").on("keyup", function (event) {
    if (event.keyCode === 13) {
        var inputVal = document.getElementById("pokemonName").value;
        alert(inputVal);
        fetchPokemon(inputVal);
    }
})
*/

window.onload = function() {
    const input = document.querySelector('input');
    input.onkeydown = search;

    function search(e) {
        if (e.code === "Enter") {
            var inputVal = document.getElementById("pokemonName").value;
            fetchPokemon(inputVal.toLowerCase());
            e.preventDefault();
        }
    }
}