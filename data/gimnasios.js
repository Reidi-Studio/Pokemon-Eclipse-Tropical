const gym = document.getElementById('gym');
const searchInput = document.getElementById('searchInput');

const gymLider = [
    {
        "numero": "Gimnasio #1",
        "nombre": "El chicle",
    },
    {
        "numero": "Gimnasio #2",
        "nombre": "Undefined",
    },
    {
        "numero": "Gimnasio #3",
        "nombre": "Otaola",
    },
    {
        "numero": "Gimnasio #4",
        "nombre": "Popeye",
    },
    {
        "numero": "Gimnasio #5",
        "nombre": "Undefined",
    },
    {
        "numero": "Gimnasio #6",
        "nombre": "Bich",
    },
    {
        "numero": "Gimnasio #7",
        "nombre": "Ernesto",
    },
    {
        "numero": "Gimnasio #8",
        "nombre": "Labrador",
    },
    {
        "numero": "Gimnasio #9",
        "nombre": "Candelaria",
    },
    {
        "numero": "Gimnasio #10",
        "nombre": "Caballero",
    },
    {
        "numero": "Gimnasio #11",
        "nombre": "Chaveto",
    },
    {
        "numero": "Gimnasio #12",
        "nombre": "Otaku-Sensei",
    },
    {
        "numero": "Gimnasio #13",
        "nombre": "Jorge",
    },
    {
        "numero": "Gimnasio #14",
        "nombre": "Bebesitho",
    },
    {
        "numero": "Élite #1",
        "nombre": "Marrano",
    },
    {
        "numero": "Élite #2",
        "nombre": "Parrilla",
    },
    {
        "numero": "Élite #3",
        "nombre": "Otaola",
    },
    {
        "numero": "Élite #4",
        "nombre": "Franko",
    },
    {
        "numero": "Élite #5",
        "nombre": "Christian SinFuegos",
    },
    {
        "numero": "Élite #6",
        "nombre": "Lisandra Costarica",
    },
    {
        "numero": "Campeon",
        "nombre": "Rival",
    },
];

function renderizar(datosAMostrar = null) {
    // Si no se pasan datos, usar todos los gimnasios
    const datos = datosAMostrar || gymLider;
    
    let html = '';
    for (const g of datos) {
        html += `
            <div class="pokeCard">
                <img src="../assets/img/pokeball.svg" alt="" class="pokeballimg">
                <div class="pokeinfo">
                    <p class="numero">${g.numero}</p>
                    <p class="nombre">${g.nombre}</p>
                </div>
            </div>
        `;
    }
    gym.innerHTML = html;
    
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
    
    const filtrados = gymLider.filter(g => 
        g.nombre.toLowerCase().includes(termino) ||
        g.numero.toLowerCase().includes(termino)
    );
    
    if (filtrados.length === 0) {
        gym.innerHTML = `<div class="no-encontrado">🔍 No se encontró "${termino}"</div>`;
    } else {
        renderizar(filtrados);
    }
});

// INICIALIZAR al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderizar();
});