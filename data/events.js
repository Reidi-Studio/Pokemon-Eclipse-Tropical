const gym = document.getElementById('gym');
const searchInput = document.getElementById('searchInput');

const gymLider = [
    {
        "tipo": "Carrera",
        "nombre": "Carrera Pokemon",
    },
    {
        "tipo": "Pesca",
        "nombre": "Captura de peces",
    },
    {
        "tipo": "Torneo",
        "nombre": "Gran Torneo",
    },
    {
        "tipo": "Torneo",
        "nombre": "Torneo Costero",
    },
    {
        "tipo": "Carrera",
        "nombre": "Ruta del Tabaco",
    },
    {
        "tipo": "Cambio",
        "nombre": "Intercambio en el malecon",
    },   
    {
        "tipo": "Carrera",
        "nombre": "Busqueda del tesoro",
    },
    {
        "tipo": "Carrera",
        "nombre": "Carrera de bicis",
    },
    {
        "tipo": "Carrera",
        "nombre": "Dia de limpieza",
    },   
    {
        "tipo": "Carrera",
        "nombre": "Recoleccion de bayas",
    },
    {
        "tipo": "Pesca",
        "nombre": "Pesca al Gran Monstruo",
    },
    {
        "tipo": "Carrera",
        "nombre": "Correo Misterioso",
    },
    {
        "tipo": "Torneo",
        "nombre": "Apuesta de los 1000 huevos",
    },
    {
        "tipo": "Carrera",
        "nombre": "Caza el diamante negro",
    },
    {
        "tipo": "Comercio",
        "nombre": "Feria del trueque",
    },
    {
        "tipo": "Carrera",
        "nombre": "Batalla de las olas",
    },      
    {
        "tipo": "Carrera",
        "nombre": "Desafio del Chef",
    },
    {
        "tipo": "Carrera",
        "nombre": "Duelo de Criadores",
    },
    {
        "tipo": "Carrera",
        "nombre": "Recorre la Ciudad",
    },
    {
        "tipo": "Comercio",
        "nombre": "La subasta secreta del puerto",
    },
    {
        "tipo": "?",
        "nombre": "Cumpleaños",
    },
    {
        "tipo": "Carrera",
        "nombre": "Perdida en Cueva Eco",
    },
    {
        "tipo": "?",
        "nombre": "Proximamente",
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
                    <p class="numero">${g.tipo}</p>
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
        g.tipo.toLowerCase().includes(termino) ||
        g.nombre.toLowerCase().includes(termino)
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