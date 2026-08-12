const gym = document.getElementById('gym');
const searchInput = document.getElementById('searchInput');

const gymLider = [
    {
        "tipo": "Carrera",
        "nombre": "Carrera Pokemon",
        "img":"../assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "Pesca",
        "nombre": "Captura de peces",
        "img":"../assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "Torneo",
        "nombre": "Gran Torneo",
        "img":"../assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "Torneo",
        "nombre": "Torneo Costero",
        "img":"../assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "Carrera",
        "nombre": "Ruta del Tabaco",
        "img":"../assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "Cambio",
        "nombre": "Intercambio en el malecon",
        "img":"../assets/img/Items/01/etc/m.png"
    },   
    {
        "tipo": "Carrera",
        "nombre": "Busqueda del tesoro",
        "img":"../assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "Carrera",
        "nombre": "Carrera de bicis",
        "img":"../assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "Carrera",
        "nombre": "Dia de limpieza",
        "img":"../assets/img/Items/01/etc/m.png"
    },   
    {
        "tipo": "Carrera",
        "nombre": "Recoleccion de bayas",
        "img":"../assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "Pesca",
        "nombre": "Pesca al Gran Monstruo",
        "img":"../assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "Carrera",
        "nombre": "Correo Misterioso",
        "img":"../assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "Torneo",
        "nombre": "Apuesta de los 1000 huevos",
        "img":"../assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "Carrera",
        "nombre": "Caza el diamante negro",
        "img":"../assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "Comercio",
        "nombre": "Feria del trueque",
        "img":"../assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "Carrera",
        "nombre": "Batalla de las olas",
        "img":"../assets/img/Items/01/etc/m.png"
    },      
    {
        "tipo": "Carrera",
        "nombre": "Desafio del Chef",
        "img":"../assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "Carrera",
        "nombre": "Duelo de Criadores",
        "img":"../assets/img/Items/01/ect/m.png"
    },
    {
        "tipo": "Carrera",
        "nombre": "Recorre la Ciudad",
        "img":"./assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "Comercio",
        "nombre": "Fiebre Compras",
        "img":"./assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "?",
        "nombre": "Cumpleaños",
        "img":"./assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "Carrera",
        "nombre": "Perdida en Cueva Eco",
        "img":"../assets/img/Items/01/etc/m.png"
    },
    {
        "tipo": "Comercio",
        "nombre": "Gran concurso de ventas",
        "img":"../assets/img/Items/01/etc/m.png"
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
                    <img src="${g.img}">
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