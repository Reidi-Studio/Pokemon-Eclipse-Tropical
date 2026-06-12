
const pokelist = document.getElementById('pokeList');

function formatearNumero(num) {
    if (num >= 1 && num <= 9) return "00" + num;
    if (num >= 10 && num <= 99) return "0" + num;
    return num.toString();
}

async function obtenerPokemons() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');

        const data = await response.json();
        
        const pokemons = data.results.map((pokemon, index) => ({
            numero: index + 1,
            nombre: pokemon.name
        }));
        
        return pokemons;
        
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}


// Renderizar
async function renderizar() {
    const pokemons = await obtenerPokemons();
    
    let html = '';
    for (const p of pokemons) {
        html += `
            <div class="pokeCard">
                <p class="numero">${formatearNumero(p.numero)}</p>
                <p class="nombre">${p.nombre}</p>
            </div>
        `;
    }
    pokelist.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderizar);