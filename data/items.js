const item = document.getElementById('item');
const searchInput = document.getElementById('searchInput');

const list = [
    {
        "tipo": "Medicina",
        "nombre": "Pocion",
    },
    {
        "tipo": "Medicina",
        "nombre": "Super Pocion",
    },
    {
        "tipo": "Medicina",
        "nombre": "Hyper Pocion",
    },
    {
        "tipo": "Medicina",
        "nombre": "Poción Máxima",
    },
    {
        "tipo": "Medicina",
        "nombre": "Restaurar Todo"
    },
    {
        "tipo": "Medicina",
        "nombre": "Antidoto",
    },
    {
        "tipo": "Medicina",
        "nombre": "Antiquemar",
    },
    {
        "tipo": "Medicina",
        "nombre": "Antihielo",
    },
    {
        "tipo": "Medicina",
        "nombre": "Despertar",
    },
    {
        "tipo": "Medicina",
        "nombre": "Antiparalizis",
    },
    {
        "tipo": "Medicina",
        "nombre": "Más PS",
    },
    {
        "tipo": "Medicina",
        "nombre": "Proteína",
    },
    {
        "tipo": "Medicina",
        "nombre": "Zinc",
    },
    {
        "tipo": "Medicina",
        "nombre": "Hierro",
    },
    {
        "tipo": "Medicina",
        "nombre": "Calcio",
    },
    {
        "tipo": "Medicina",
        "nombre": "Carbunante",
    },
    {
        "tipo": "Medicina",
        "nombre": "Más PP",
    },
    {
        "tipo": "Medicina",
        "nombre": "Zinc",
    },
    {
        "tipo": "Medicina",
        "nombre": "Revivir",
    },
    {
        "tipo": "Medicina",
        "nombre": "Revivir Máximo",
    },
    {
        "tipo": "Pokeball",
        "nombre": "Pokeball",
    },
    {
        "tipo": "Pokeball",
        "nombre": "Pokeball Antigua",
    },
    {
        "tipo": "Pokeball",
        "nombre": "Superball",
    },
    {
        "tipo": "Pokeball",
        "nombre": "Ultraball",
    },
    {
        "tipo": "Pokeball",
        "nombre": "Nivelball",
    },
    {
        "tipo": "Pokeball",
        "nombre": "Ceboball",
    },
    {
        "tipo": "Pokeball",
        "nombre": "Lunaball",
    },
    {
        "tipo": "Pokeball",
        "nombre": "Amigoball",
    },
    {
        "tipo": "Pokeball",
        "nombre": "Amorball",
    },
    {
        "tipo": "Pokeball",
        "nombre": "Rapidball",
    },
    {
        "tipo": "Pokeball",
        "nombre": "Pesoball",
    },
    {
        "tipo": "Pokeball",
        "nombre": "Buceoball",
    },
    {
        "tipo": "Pokeball",
        "nombre": "Mallaball",
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Zreza",
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Atania",
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Meloc",
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Safre",
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Perasi",
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Zanma",
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Aranja",
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Caquic",
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Zidra",
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Guaya",
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Frambu",
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Oran",
    },
    {
        "tipo": "Baya",
        "nombre": "Latano",
    },
    {
        "tipo": "Baya",
        "nombre": "Ispero",
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Mais",
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Sambia",
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "Velocidad X",
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "At. Esp. X",
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "Ataque X",
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "Defensa X",
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "Def. Esp. X",
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "Crítico X",
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "Protección X",
    },
    {
        "tipo": "Objeto de Combate",
        "nombre":  "Presición X",
    },
    {
        "tipo": "Objeto de Combate",
        "nombre":  "Pokeflauta",
    },
    {
        "tipo": "Objeto de Combate",
        "nombre":  "Flauta Blanca",
    },
    {
        "tipo": "Objeto de Combate",
        "nombre":  "Flauta Negra",
    },
    {
        "tipo": "Objeto de Combate",
        "nombre":  "Flauta Azul",
    },
    {
        "tipo": "Objeto de Combate",
        "nombre":  "Flauta Roja",
    },
    {
        "tipo": "Objeto de Combate",
        "nombre":  "Flauta Amarilla",
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Bicicleta"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Motocicleta"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Caja de Apricorns"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Libro de Aventuras"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Bolsa de bayas"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Apriconrn Negro"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Apriconrn Azul"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Apriconrn Verde"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Apriconrn Rosado"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Apriconrn Rojo"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Apriconrn Blanco"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Apricorn Amarillo"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Monedero"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Caña de Vieja"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Caña Buena"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Caja Atuendo"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Supercaña"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Regadera de Squirte"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Casete de MT"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Té"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Buscapelea"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Diario"
    },
    {
        "tipo": "Objeto",
        "nombre": "Tela Terrible"
    },
    {
        "tipo": "Objeto",
        "nombre": "Lodo Negro"
    },
    {
        "tipo": "Objeto",
        "nombre": "Banda Focus"
    },
    {
        "tipo": "Objeto",
        "nombre": "Roca del Rey"
    },
    {
        "tipo": "Objeto",
        "nombre": "Restos"
    },
    {
        "tipo": "Objeto",
        "nombre": "Garra Rápida"
    },
    {
        "tipo": "Objeto",
        "nombre": "Colmillo Agudo"
    },
    {
        "tipo": "Objeto",
        "nombre": "Colmillo de Dragón"
    },
    {
        "tipo": "Objeto",
        "nombre": "Concha Campana"
    },
    {
        "tipo": "Objeto",
        "nombre": "Pico Afilado"
    },
    {
        "tipo": "Objeto",
        "nombre": "Flecha Venenosa"
    },
    {
        "tipo": "Objeto",
        "nombre": "Antiderretir"
    },
    {
        "tipo": "Objeto",
        "nombre": "Hechizo"
    },
    {
        "tipo": "Objeto",
        "nombre": "Cuchara Torcida"
    },
    {
        "tipo": "Objeto",
        "nombre": "Pañuelo de Seda"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Eterna"
    },
    {
        "tipo": "Objeto",
        "nombre": "Sem. Milagro"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gafas de Sol"
    },
    {
        "tipo": "Objeto",
        "nombre": "Cinturon Negro"
    },
    {
        "tipo": "Objeto",
        "nombre": "Carbón"
    },
    {
        "tipo": "Objeto",
        "nombre": "Moneda Amuleto"
    },
    {
        "tipo": "Objeto",
        "nombre": "Repartir Exp"
    },
    {
        "tipo": "Objeto",
        "nombre": "Imán"
    },
    {
        "tipo": "Objeto",
        "nombre": "Agua Mística"
    },
    {
        "tipo": "Objeto",
        "nombre": "Arena Fina"
    },
    {
        "tipo": "Objeto",
        "nombre": "Mejora"
    },
    {
        "tipo": "Objeto",
        "nombre": "Campana"
    },
    {
        "tipo": "Objeto",
        "nombre": "Hueso Raro"
    },
    {
        "tipo": "Objeto",
        "nombre": "Seta Grande"
    },
    {
        "tipo": "Objeto",
        "nombre": "Seta Pequeña"
    },
    {
        "tipo": "Objeto",
        "nombre": "Pepita grande"
    },
    {
        "tipo": "Objeto",
        "nombre": "Perla Grande"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Alba"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Trueno"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Fuego"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Hoja"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Agua"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Solar"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Lunar"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Día"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Noche"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Hielo"
    },
    {
        "tipo": "Objeto",
        "nombre": "Miel"
    },
    {
        "tipo": "Objeto",
        "nombre": "Repelente Maximo"
    },
    {
        "tipo": "Objeto",
        "nombre": "Repelente"
    },
    {
        "tipo": "Objeto",
        "nombre": "Super Repelente"
    },
    {
        "tipo": "Objeto",
        "nombre": "Pepita"
    },
    {
        "tipo": "Objeto",
        "nombre": "Ámbar Viejo"
    },
    {
        "tipo": "Objeto",
        "nombre": "Perla"
    },
    {
        "tipo": "Objeto",
        "nombre": "Estirla de Perlas"
    },
    {
        "tipo": "Objeto",
        "nombre": "Poke Muñeco"
    },
    {
        "tipo": "Objeto",
        "nombre": "Cuerda huida"
    },
    {
        "tipo": "Objeto",
        "nombre": "Abono"
    },
    {
        "tipo": "Objeto",
        "nombre": "Sal Marina"
    },
    {
        "tipo": "Objeto",
        "nombre": "Concha Marina"
    },
    {
        "tipo": "Objeto",
        "nombre": "Polvo Estrella"
    },
    {
        "tipo": "Comida",
        "nombre": "Ensalada Mixta"
    },
    {
        "tipo": "Comida",
        "nombre": "Salchichas"
    },
    {
        "tipo": "Comida",
        "nombre": "Paquete de Papas"
    },
    {
        "tipo": "Comida",
        "nombre": "Curry Empaquetado"
    },
    {
        "tipo": "Comida",
        "nombre": "Hamburguesa Precocinada"
    },
    {
        "tipo": "Comida",
        "nombre": "Pasta"
    },
    {
        "tipo": "Comida",
        "nombre": "Fideos Instantaneos"
    },
    {
        "tipo": "Comida",
        "nombre": "Leche en Polvo"
    },
    {
        "tipo": "Comida",
        "nombre": "Leche Mu-Mu"
    },
    {
        "tipo": "Comida",
        "nombre": "Carne de Tepig Asado"
    },
    {
        "tipo": "Comida",
        "nombre": "Estofado de Tepig"
    },
    {
        "tipo": "Comida",
        "nombre": "Farfetch'd Asado"
    },
    {
        "tipo": "Comida",
        "nombre": "Squirte Rostizado"
    },
    {
        "tipo": "Comida",
        "nombre": "Estofado de Squirte"
    },
    {
        "tipo": "Comida",
        "nombre": "Bistec de Miltank"
    },
    {
        "tipo": "Comida",
        "nombre": "Caldo de Res"
    },
    {
        "tipo": "Comida",
        "nombre": "Plátano hervido"
    },
    {
        "tipo": "Comida",
        "nombre": "Plátano Frito"
    },
    {
        "tipo": "Comida",
        "nombre": "Pan con timba"
    },
    {
        "tipo": "Comida",
        "nombre": "Hamburguesa"
    },
    {
        "tipo": "Comida",
        "nombre": "Pan con croquetas"
    },
    {
        "tipo": "Comida",
        "nombre": "Hot-Dog"
    },
    {
        "tipo": "Comida",
        "nombre": "Pan con hamburguesa"
    },
    {
        "tipo": "Comida",
        "nombre": "Bola de arroz"
    },
    {
        "tipo": "Comida",
        "nombre": "Bola de arroz frita"
    },
    {
        "tipo": "Comida",
        "nombre": "Huevo frito"
    },
    {
        "tipo": "Comida",
        "nombre": "Huevo duro"
    },
    {
        "tipo": "Comida",
        "nombre": "Tortilla"
    },
    {
        "tipo": "Comida",
        "nombre": "Cola ahumada"
    },
    {
        "tipo": "Comida",
        "nombre": "Filete de res frito"
    },
    {
        "tipo": "Comida",
        "nombre": "Confitura de bayas"
    },
    {
        "tipo": "Comida",
        "nombre": "Mantequilla"
    },
    {
        "tipo": "Comida",
        "nombre": "Nata montada"
    },
    {
        "tipo": "Comida",
        "nombre": "Queso crema"
    },
    {
        "tipo": "Comida",
        "nombre": "Bocadillo"
    },
    {
        "tipo": "Comida",
        "nombre": "Queso Mu-Mu"
    },
    {
        "tipo": "Comida",
        "nombre": "Curry"
    },
    {
        "tipo": "Comida",
        "nombre": "Patatas fritas"
    },
    {
        "tipo": "Comida",
        "nombre": "Frituras"
    },
    {
        "tipo": "Comida",
        "nombre": "Aceite de Oliva"
    },
    {
        "tipo": "Comida",
        "nombre": "Vinagre"
    },
    {
        "tipo": "Comida",
        "nombre": "Especia Oculta Dulce"
    },
    {
        "tipo": "Comida",
        "nombre": "Especia Oculta Salada"
    },
    {
        "tipo": "Comida",
        "nombre": "Especia Oculta Ácida"
    },
    {
        "tipo": "Comida",
        "nombre": "Especia Oculta Amarga"
    },
    {
        "tipo": "Comida",
        "nombre": "Especia Oculta Picante"
    },
    {
        "tipo": "Comida",
        "nombre": "Lechuga"
    },
    {
        "tipo": "Comida",
        "nombre": "Tomate"
    },
    {
        "tipo": "Comida",
        "nombre": "Tomate cherry"
    },
    {
        "tipo": "Comida",
        "nombre": "Pepino"
    },
    {
        "tipo": "Comida",
        "nombre": "Pepinillo"
    },
    {
        "tipo": "Comida",
        "nombre": "Cebolla"
    },
    {
        "tipo": "Comida",
        "nombre": "Cebolla Roja"
    },
    {
        "tipo": "Comida",
        "nombre": "Pimiento Verde"
    },
    {
        "tipo": "Comida",
        "nombre": "Pimiento Rojo"
    },
    {
        "tipo": "Comida",
        "nombre": "Pimiento Amarillo"
    },
    {
        "tipo": "Comida",
        "nombre": "Aguacate"
    },
    {
        "tipo": "Comida",
        "nombre": "Panceta"
    },
    {
        "tipo": "Comida",
        "nombre": "Jamón Cocido"
    },
    {
        "tipo": "Comida",
        "nombre": "Jamón Serrano"
    },
    {
        "tipo": "Comida",
        "nombre": "Chorizo"
    },
    {
        "tipo": "Comida",
        "nombre": "Butifarra"
    },
    {
        "tipo": "Comida",
        "nombre": "Hamburguesa"
    },
    {
        "tipo": "Comida",
        "nombre": "Filete Ahumado"
    },
    {
        "tipo": "Comida",
        "nombre": "Filete Frito"
    },
    {
        "tipo": "Comida",
        "nombre": "Tofu"
    },
    {
        "tipo": "Comida",
        "nombre": "Arroz"
    },
    {
        "tipo": "Comida",
        "nombre": "Fideos"
    },
    {
        "tipo": "Comida",
        "nombre": "Ensaladilla"
    },
    {
        "tipo": "Comida",
        "nombre": "Queso"
    },
    {
        "tipo": "Comida",
        "nombre": "Plátano"
    },
    {
        "tipo": "Comida",
        "nombre": "Piña"
    },
    {
        "tipo": "Comida",
        "nombre": "Jalapeño"
    },
    {
        "tipo": "Comida",
        "nombre": "Berros"
    },
    {
        "tipo": "Comida",
        "nombre": "Albahaca"
    },
    {
        "tipo": "Comida",
        "nombre": "Crema de Cacahuate"
    },
    {
        "tipo": "Comida",
        "nombre": "Kit de pokecubos"
    },
    {
        "tipo": "Comida",
        "nombre": "Globo Helio"
    },
    {
        "tipo": "Comida",
        "nombre": "Pila"
    },
    {
        "tipo": "Comida",
        "nombre": "Lata de Darren"
    },
    {
        "tipo": "Comida",
        "nombre": "Lata de Bach"
    },
    {
        "tipo": "Comida",
        "nombre": "Lata de Habas"
    },
    {
        "tipo": "Comida",
        "nombre": "Hierba intensa"
    },
    {
        "tipo": "Comida",
        "nombre": "Verduras"
    },
    {
        "tipo": "Comida",
        "nombre": "Especias"
    },
    {
        "tipo":"Comida",
        "nombre":"Curry Embasado"
    },
    {
        "tipo":"Comida",
        "nombre":"Bocadillo"
    },
    {
        "tipo":"Comida",
        "nombre":"Mayonesa"
    },
    {
        "tipo":"Comida",
        "nombre":"Kétchup"
    },
    {
        "tipo":"Comida",
        "nombre":"Mostaza"
    },
    {
        "tipo":"Comida",
        "nombre":"Salsa Picante"
    },
    {
        "tipo":"Comida",
        "nombre":"Sal"
    },
    {
        "tipo":"Comida",
        "nombre":"Pimienta"
    },
    {
        "tipo":"Comida",
        "nombre":"Yogur"
    },
    {
        "tipo":"Comida",
        "nombre":"Mermelada"
    },
    {
        "tipo":"Comida",
        "nombre":"Helado de Chocolate"
    },
    {
        "tipo":"Comida",
        "nombre":"Helado de Fresa"
    },
    {
        "tipo":"Comida",
        "nombre":"Helado de Vainilla"
    },
    {
        "tipo":"Comida",
        "nombre":"Helado de Café con Leche"
    },
    {
        "tipo":"Comida",
        "nombre":"Helado de Plátano"
    },
    {
        "tipo":"Comida",
        "nombre":"Helado de Malta(Legendario)"
    },
    {
        "tipo":"Comida",
        "nombre":"Helado de Frutas"
    },
    {
        "tipo":"Comida",
        "nombre":"Helado de Pistacho"
    },
    {
        "tipo":"Comida",
        "nombre":"Helado de Naranja Piña"
    },
    {
        "tipo":"Comida",
        "nombre":"Helado de Uva"
    },
    {
        "tipo":"Comida",
        "nombre":"Bocadito de Helado"
    },
    {
        "tipo":"Comida",
        "nombre":"Malteada"
    },
    {
        "tipo":"Comida",
        "nombre":"Leche Condensada"
    },
    {
        "tipo":"Comida",
        "nombre":"Bol de Ramen"
    },
    {
        "tipo":"Comida",
        "nombre":"Sushi"
    },
    {
        "tipo":"Comida",
        "nombre":"Takoyaki"
    },
    {
        "tipo":"Comida",
        "nombre":"Sahimi"
    },
    {
        "tipo":"Comida",
        "nombre":"Tempura"
    },
    {
        "tipo":"Comida",
        "nombre":"Onigiri"
    },
    {
        "tipo":"Comida",
        "nombre":"Pollo Piki Shiki"
    },
    {
        "tipo":"Comida",
        "nombre":"Pollo Empanizado"
    },
    {
        "tipo":"Comida",
        "nombre":"TuCola (Raro)"
    },
    {
        "tipo":"Comida",
        "nombre":"Malta Bucanero (Épica)"
    },
    {
        "tipo":"Comida",
        "nombre":"Malta Kara"
    },
    {
        "tipo":"Comida",
        "nombre":"Malta Three Horses (Legendaria)"
    },
    {
        "tipo":"Comida",
        "nombre":"Malta Belga Star"
    },
    {
        "tipo":"Comida",
        "nombre":"Malta Ligre (Raro)"
    },
    {
        "tipo":"Comida",
        "nombre":"Malta Sunshine"
    },
    {
        "tipo":"Comida",
        "nombre":"Malta Guajira"
    },
    {
        "tipo":"Comida",
        "nombre":"Malta Guajira de Medio L (Rara)"
    },
    {
        "tipo":"Comida",
        "nombre":"Malta Unlager"
    },
    {
        "tipo":"Comida",
        "nombre":"SantaCola"
    },
    {
        "tipo":"Comida",
        "nombre":"Refresco Cachito (Raro)"
    },
    {
        "tipo":"Comida",
        "nombre":"Refresco Piña"
    },
    {
        "tipo":"Comida",
        "nombre":"Refresco de Limón"
    },
    {
        "tipo":"Comida",
        "nombre":"Jugo de Manzana en lata"
    },
    {
        "tipo":"Comida",
        "nombre":"Jugo de pera en lata"
    },
    {
        "tipo":"Comida",
        "nombre":"Jugo de mango en lata (Épico)"
    },
    {
        "tipo":"Material antiapagon",
        "nombre":"EcoFlow Pequeña"
    },
    {
        "tipo":"Material antiapagon",
        "nombre":"EcoFlow Grande"
    },
    {
        "tipo":"Material antiapagon",
        "nombre":"Planta de Gasolina"
    },
];

function renderizar(datosAMostrar = null) {
    const datos = datosAMostrar || list;
    
    let html = '';
    for (const g of datos) {
        // Usar imagen específica si existe, si no usar la default
        const imagenSrc = g.imagen || "../assets/img/pokeball.svg";
        
        html += `
            <div class="pokeCard">
                <img src="${imagenSrc}" alt="${g.nombre}" class="pokeballimg">
                <div class="pokeinfo">
                    <p class="numero">${g.tipo}</p>
                    <p class="nombre">${g.nombre}</p>
                </div>
            </div>
        `;
    }
    item.innerHTML = html;
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

// BÚSQUEDA
searchInput.addEventListener('input', (e) => {
    const termino = e.target.value.toLowerCase().trim();
    
    if (termino === '') {
        renderizar();
        return;
    }
    
    const filtrados = list.filter(p => 
        p.nombre.toLowerCase().includes(termino) ||
        p.tipo.toLowerCase().includes(termino) 
    );
    
    if (filtrados.length === 0) {
        item.innerHTML = `<div class="no-encontrado">🔍 No se encontró "${termino}"</div>`;
    } else {
        renderizar(filtrados);
    }
});
function test(){
    alert("funcion en contruccion!!");
}

document.addEventListener('DOMContentLoaded', () => {
    renderizar();
});

// INICIALIZAR al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderizar();
});