const pokeList = document.getElementById('routes');
const searchInput = document.getElementById('searchInput');

const ruta = [
    {
        "ruta":"Ruta 1",
        "location":""
    },
    {
        "ruta":"Ruta 2",
        "location":""
    },
    {
        "ruta":"Ruta 3",
        "location":""
    },
    {
        "ruta":"Ruta 4",
        "location":""
    },
    {
        "ruta":"Ruta 5",
        "location":""
    },
    {
        "ruta":"Ruta 6",
        "location":""
    },
    {
        "ruta":"Ruta 7",
        "location":""
    },
    {
        "ruta":"Ruta 8",
        "location":""
    },
    {
        "ruta":"Ruta 9",
        "location":""
    },
    {
        "ruta":"Ruta 10",
        "location":""
    },
    {
        "ruta":"Ruta 11",
        "location":""
    },
    {
        "ruta":"Ruta 12",
        "location":""
    },
    {
        "ruta":"Ruta 13",
        "location":""
    },
    {
        "ruta":"Ruta 14",
        "location":""
    },
    {
        "ruta":"Ruta 15",
        "location":""
    },
    {
        "ruta":"Ruta 16",
        "location":""
    },
    {
        "ruta":"Ruta 17",
        "location":""
    },
    {
        "ruta":"Ruta 18",
        "location":""
    },
    {
        "ruta":"Ruta 19",
        "location":""
    },
    {
        "ruta":"Ruta 20",
        "location":""
    },
    {
        "ruta":"Ruta 21",
        "location":""
    },
    {
        "ruta":"Ruta 22",
        "location":""
    },
    {
        "ruta":"Ruta 23",
        "location":""
    },
    {
        "ruta":"Ruta 24",
        "location":""
    },
    {
        "ruta":"Ruta 25",
        "location":""
    },
    {
        "ruta":"Ruta 26",
        "location":""
    },
    {
        "ruta":"Ruta 27",
        "location":""
    },
    {
        "ruta":"Ruta 28",
        "location":""
    },
    {
        "ruta":"Ruta 29",
        "location":""
    },
    {
        "ruta":"Ruta 30",
        "location":""
    },
];

function renderizar(datosAMostrar = null) {
    // Si no se pasan datos, usar todos los gimnasios
    const datos = datosAMostrar || ruta;
    
    let html = '';
    for (const r of datos) {
        html += `
            <div class="pokeCard">
                <img src="../assets/img/pokeball.svg" alt="" class="pokeballimg">
                <div class="pokeinfo">
                    <p class="ruta">${r.ruta}</p>
                    <p class="nombre">${r.location}</p>
                </div>
            </div>
        `;
    }
    pokeList.innerHTML = html;
    
    // Re-asignar eventos click a las nuevas tarjetas
       asignarEventosClick();
}

function test() {
    alert("Función en construcción!!");
}

function asignarEventosClick() {
    const pcard = document.getElementsByClassName("pokeCard");
    Array.from(pcard).forEach(card => {
        card.addEventListener('click', test);
    });
}

function test() {
    alert("Función en construcción!!");
}

function asignarEventosClick() {
    const pcard = document.getElementsByClassName("pokeCard");
    Array.from(pcard).forEach(card => {
        card.addEventListener('click', test);
    });
}

// BÚSQUEDA
searchInput.addEventListener('input', (e) => {
    const termino = e.target.value.toLowerCase().trim();
    
    if (termino === '') {
        renderizar();
        return;
    }
    
    const filtrados = ruta.filter(r => 
        r.ruta.toLowerCase().includes(termino) ||
        r.location.toLowerCase().includes(termino)
    );
    
    if (filtrados.length === 0) {
        pokeList.innerHTML = `<div class="no-encontrado">🔍 No se encontró "${termino}"</div>`;
    } else {
        renderizar(filtrados);
    }
});

// INICIALIZAR al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderizar();
});