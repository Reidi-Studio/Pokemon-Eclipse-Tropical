const pokelist = document.getElementById('pokeList');
const searchInput = document.getElementById('searchInput');

const pokemons = [
    {
        "numero": 1,
        "nombre": "Tepig",
        "img": "../assets/img/498.png",
        "href": "../data/pokedex/tepig.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 2,
        "nombre": "Pignite",
        "img": "../assets/img/499.png",
        "href": "../data/pokedex/pignite.html",
        "tipo": "Fuego",
        "type": "fire",
        "tipo2": "Lucha",
        "type2": "figth"
    },
    {
        "numero": 3,
        "nombre": "Emboar",
        "img": "../assets/img/500.png",
        "href": "../data/pokedex/emboar.html",
        "tipo": "Fuego",
        "type": "fire",
        "tipo2": "Lucha",
        "type2": "figth"
    },
    {
        "numero": 4,
        "nombre": "Squirtle",
        "img": "../assets/img/007.png",
        "href": "../data/pokedex/squirtle.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 5,
        "nombre": "Wartortle",
        "img": "../assets/img/008.png",
        "href": "../data/pokedex/wartortle.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 6,
        "nombre": "Blastoise",
        "img": "../assets/img/009.png",
        "href": "../data/pokedex/blastoise.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 7,
        "nombre": "Sprigatito",
        "img": "../assets/img/906.png",
        "href": "../data/pokedex/sprigatito.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 8,
        "nombre": "Floragato",
        "img": "../assets/img/907.png",
        "href": "../data/pokedex/floragato.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 9,
        "nombre": "Meowscarada",
        "img": "../assets/img/908.png",
        "href": "../data/pokedex/meowscarada.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Siniestro",
        "type2": "dark"
    },
    {
        "numero": 10,
        "nombre": "Pichu",
        "img": "../assets/img/172.png",
        "href": "../data/pokedex/pichu.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 11,
        "nombre": "Pikachu",
        "img": "../assets/img/025.png",
        "href": "../data/pokedex/pikachu.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 12,
        "nombre": "Raichu",
        "img": "../assets/img/026.png",
        "href": "../data/pokedex/raichu.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 13,
        "nombre": "Sandile",
        "img": "../assets/img/551.png",
        "href": "../data/pokedex/sandile.html",
        "tipo": "Tierra",
        "type": "ground",
        "tipo2": "Siniestro",
        "type2": "dark"
    },
    {
        "numero": 14,
        "nombre": "Krokorok",
        "img": "../assets/img/552.png",
        "href": "../data/pokedex/krokorok.html",
        "tipo": "Tierra",
        "type": "ground",
        "tipo2": "Siniestro",
        "type2": "dark"
    },
    {
        "numero": 15,
        "nombre": "Krookodile",
        "img": "../assets/img/553.png",
        "href": "../data/pokedex/krookodile.html",
        "tipo": "Tierra",
        "type": "ground",
        "tipo2": "Siniestro",
        "type2": "dark"
    },
    {
        "numero": 16,
        "nombre": "Starly",
        "img": "../assets/img/396.png",
        "href": "../data/pokedex/starly.html",
        "tipo": "Normal",
        "type": "normal",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 17,
        "nombre": "Staravia",
        "img": "../assets/img/397.png",
        "href": "../data/pokedex/staravia.html",
        "tipo": "Normal",
        "type": "normal",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 18,
        "nombre": "Staraptor",
        "img": "../assets/img/398.png",
        "href": "../data/pokedex/staraptor.html",
        "tipo": "Normal",
        "type": "normal",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 19,
        "nombre": "Treecko",
        "img": "../assets/img/252.png",
        "href": "../data/pokedex/treecko.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 20,
        "nombre": "Grovyle",
        "img": "../assets/img/253.png",
        "href": "../data/pokedex/grovyle.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 21,
        "nombre": "Sceptile",
        "img": "../assets/img/254.png",
        "href": "../data/pokedex/sceptile.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 22,
        "nombre": "Caterpie",
        "img": "../assets/img/010.png",
        "href": "../data/pokedex/caterpie.html",
        "tipo": "Bicho",
        "type": "bug"
    },
    {
        "numero": 23,
        "nombre": "Metapod",
        "img": "../assets/img/011.png",
        "href": "../data/pokedex/metapod.html",
        "tipo": "Bicho",
        "type": "bug"
    },
    {
        "numero": 24,
        "nombre": "Butterfree",
        "img": "../assets/img/012.png",
        "href": "../data/pokedex/butterfree.html",
        "tipo": "Bicho",
        "type": "bug",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 25,
        "nombre": "Pidgey",
        "img": "../assets/img/016.png",
        "href": "../data/pokedex/pidgey.html",
        "tipo": "Normal",
        "type": "normal",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 26,
        "nombre": "Pidgeotto",
        "img": "../assets/img/017.png",
        "href": "../data/pokedex/pidgeotto.html",
        "tipo": "Normal",
        "type": "normal",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 27,
        "nombre": "Pidgeot",
        "img": "../assets/img/018.png",
        "href": "../data/pokedex/pidgeot.html",
        "tipo": "Normal",
        "type": "normal",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 28,
        "nombre": "Spearow",
        "img": "../assets/img/021.png",
        "href": "../data/pokedex/spearow.html",
        "tipo": "Normal",
        "type": "normal",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 29,
        "nombre": "Fearow",
        "img": "../assets/img/022.png",
        "href": "../data/pokedex/fearow.html",
        "tipo": "Normal",
        "type": "normal",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 30,
        "nombre": "Ekans",
        "img": "../assets/img/023.png",
        "href": "../data/pokedex/ekans.html",
        "tipo": "Veneno",
        "type": "poison"
    },
    {
        "numero": 31,
        "nombre": "Arbok",
        "img": "../assets/img/024.png",
        "href": "../data/pokedex/arbok.html",
        "tipo": "Veneno",
        "type": "poison"
    },
    {
        "numero": 32,
        "nombre": "Sandshrew",
        "img": "../assets/img/027.png",
        "href": "../data/pokedex/sandshrew.html",
        "tipo": "Tierra",
        "type": "ground"
    },
    {
        "numero": 33,
        "nombre": "Sandslash",
        "img": "../assets/img/028.png",
        "href": "../data/pokedex/sandslash.html",
        "tipo": "Tierra",
        "type": "ground"
    },
    {
        "numero": 34,
        "nombre": "Nidoran ♀",
        "img": "../assets/img/029.png",
        "href": "../data/pokedex/nidoran_f.html",
        "tipo": "Veneno",
        "type": "poison"
    },
    {
        "numero": 35,
        "nombre": "Nidorina",
        "img": "../assets/img/030.png",
        "href": "../data/pokedex/nidorina.html",
        "tipo": "Veneno",
        "type": "poison"
    },
    {
        "numero": 36,
        "nombre": "Nidoqueen",
        "img": "../assets/img/031.png",
        "href": "../data/pokedex/nidoqueen.html",
        "tipo": "Veneno",
        "type": "poison",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 37,
        "nombre": "Nidoran ♂",
        "img": "../assets/img/032.png",
        "href": "../data/pokedex/nidoran_m.html",
        "tipo": "Veneno",
        "type": "poison"
    },
    {
        "numero": 38,
        "nombre": "Nidorino",
        "img": "../assets/img/033.png",
        "href": "../data/pokedex/nidorino.html",
        "tipo": "Veneno",
        "type": "poison"
    },
    {
        "numero": 39,
        "nombre": "Nidoking",
        "img": "../assets/img/034.png",
        "href": "../data/pokedex/nidoking.html",
        "tipo": "Veneno",
        "type": "poison",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 40,
        "nombre": "Zubat",
        "img": "../assets/img/041.png",
        "href": "../data/pokedex/zubat.html",
        "tipo": "Veneno",
        "type": "poison",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 41,
        "nombre": "Golbat",
        "img": "../assets/img/042.png",
        "href": "../data/pokedex/golbat.html",
        "tipo": "Veneno",
        "type": "poison",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 42,
        "nombre": "Crobat",
        "img": "../assets/img/169.png",
        "href": "../data/pokedex/crobat.html",
        "tipo": "Veneno",
        "type": "poison",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 43,
        "nombre": "Oddish",
        "img": "../assets/img/043.png",
        "href": "../data/pokedex/oddish.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Veneno",
        "type2": "poison"
    },
    {
        "numero": 44,
        "nombre": "Gloom",
        "img": "../assets/img/044.png",
        "href": "../data/pokedex/gloom.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Veneno",
        "type2": "poison"
    },
    {
        "numero": 45,
        "nombre": "Vileplume",
        "img": "../assets/img/045.png",
        "href": "../data/pokedex/vileplume.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Veneno",
        "type2": "poison"
    },
    {
        "numero": 46,
        "nombre": "Bellossom",
        "img": "../assets/img/182.png",
        "href": "../data/pokedex/bellossom.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 47,
        "nombre": "Paras",
        "img": "../assets/img/046.png",
        "href": "../data/pokedex/paras.html",
        "tipo": "Bicho",
        "type": "bug",
        "tipo2": "Planta",
        "type2": "grass"
    },
    {
        "numero": 48,
        "nombre": "Parasect",
        "img": "../assets/img/047.png",
        "href": "../data/pokedex/parasect.html",
        "tipo": "Bicho",
        "type": "bug",
        "tipo2": "Planta",
        "type2": "grass"
    },
    {
        "numero": 49,
        "nombre": "Meowth",
        "img": "../assets/img/052.png",
        "href": "../data/pokedex/meowth.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 50,
        "nombre": "Persian",
        "img": "../assets/img/053.png",
        "href": "../data/pokedex/persian.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 51,
        "nombre": "Diglett",
        "img": "../assets/img/050.png",
        "href": "../data/pokedex/diglett.html",
        "tipo": "Tierra",
        "type": "ground"
    },
    {
        "numero": 52,
        "nombre": "Dugtrio",
        "img": "../assets/img/051.png",
        "href": "../data/pokedex/dugtrio.html",
        "tipo": "Tierra",
        "type": "ground"
    },
    {
        "numero": 53,
        "nombre": "Psyduck",
        "img": "../assets/img/054.png",
        "href": "../data/pokedex/psyduck.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 54,
        "nombre": "Golduck",
        "img": "../assets/img/055.png",
        "href": "../data/pokedex/golduck.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 55,
        "nombre": "Growlithe",
        "img": "../assets/img/058.png",
        "href": "../data/pokedex/growlithe.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 56,
        "nombre": "Arcanine",
        "img": "../assets/img/059.png",
        "href": "../data/pokedex/arcanine.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 57,
        "nombre": "Mankey",
        "img": "../assets/img/056.png",
        "href": "../data/pokedex/mankey.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 58,
        "nombre": "Primeape",
        "img": "../assets/img/057.png",
        "href": "../data/pokedex/primeape.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 59,
        "nombre": "Poliwag",
        "img": "../assets/img/060.png",
        "href": "../data/pokedex/poliwag.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 60,
        "nombre": "Poliwhirl",
        "img": "../assets/img/061.png",
        "href": "../data/pokedex/poliwhirl.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 61,
        "nombre": "Poliwrath",
        "img": "../assets/img/062.png",
        "href": "../data/pokedex/poliwrath.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Lucha",
        "type2": "figth"
    },
    {
        "numero": 62,
        "nombre": "Politoed",
        "img": "../assets/img/186.png",
        "href": "../data/pokedex/politoed.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 63,
        "nombre": "Abra",
        "img": "../assets/img/063.png",
        "href": "../data/pokedex/abra.html",
        "tipo": "Psíquico",
        "type": "psychic"
    },
    {
        "numero": 64,
        "nombre": "Kadabra",
        "img": "../assets/img/064.png",
        "href": "../data/pokedex/kadabra.html",
        "tipo": "Psíquico",
        "type": "psychic"
    },
    {
        "numero": 65,
        "nombre": "Alakazam",
        "img": "../assets/img/065.png",
        "href": "../data/pokedex/alakazam.html",
        "tipo": "Psíquico",
        "type": "psychic"
    },
    {
        "numero": 66,
        "nombre": "Machop",
        "img": "../assets/img/066.png",
        "href": "../data/pokedex/machop.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 67,
        "nombre": "Machoke",
        "img": "../assets/img/067.png",
        "href": "../data/pokedex/machoke.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 68,
        "nombre": "Machamp",
        "img": "../assets/img/068.png",
        "href": "../data/pokedex/machamp.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 69,
        "nombre": "Bellsprout",
        "img": "../assets/img/069.png",
        "href": "../data/pokedex/bellsprout.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Veneno",
        "type2": "poison"
    },
    {
        "numero": 70,
        "nombre": "Weepinbell",
        "img": "../assets/img/070.png",
        "href": "../data/pokedex/weepinbell.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Veneno",
        "type2": "poison"
    },
    {
        "numero": 71,
        "nombre": "Victreebel",
        "img": "../assets/img/071.png",
        "href": "../data/pokedex/victreebel.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Veneno",
        "type2": "poison"
    },
    {
        "numero": 72,
        "nombre": "Geodude",
        "img": "../assets/img/074.png",
        "href": "../data/pokedex/geodude.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 73,
        "nombre": "Graveler",
        "img": "../assets/img/075.png",
        "href": "../data/pokedex/graveler.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 74,
        "nombre": "Golem",
        "img": "../assets/img/076.png",
        "href": "../data/pokedex/golem.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 75,
        "nombre": "Magnemite",
        "img": "../assets/img/081.png",
        "href": "../data/pokedex/magnemite.html",
        "tipo": "Eléctrico",
        "type": "electric",
        "tipo2": "Acero",
        "type2": "steel"
    },
    {
        "numero": 76,
        "nombre": "Magneton",
        "img": "../assets/img/082.png",
        "href": "../data/pokedex/magneton.html",
        "tipo": "Eléctrico",
        "type": "electric",
        "tipo2": "Acero",
        "type2": "steel"
    },
    {
        "numero": 77,
        "nombre": "Farfetch'd",
        "img": "../assets/img/083-Galar.png",
        "href": "../data/pokedex/farfetchd.html",
        "tipo": "Normal",
        "type": "normal",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 78,
        "nombre": "Sirfetch'd",
        "img": "../assets/img/865.png",
        "href": "../data/pokedex/sirfetchd.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 79,
        "nombre": "Doduo",
        "img": "../assets/img/084.png",
        "href": "../data/pokedex/doduo.html",
        "tipo": "Normal",
        "type": "normal",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 80,
        "nombre": "Dodrio",
        "img": "../assets/img/085.png",
        "href": "../data/pokedex/dodrio.html",
        "tipo": "Normal",
        "type": "normal",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 81,
        "nombre": "Grimer",
        "img": "../assets/img/088.png",
        "href": "../data/pokedex/grimer.html",
        "tipo": "Veneno",
        "type": "poison"
    },
    {
        "numero": 82,
        "nombre": "Muk",
        "img": "../assets/img/089.png",
        "href": "../data/pokedex/muk.html",
        "tipo": "Veneno",
        "type": "poison"
    },
    {
        "numero": 83,
        "nombre": "Shellder",
        "img": "../assets/img/090.png",
        "href": "../data/pokedex/shellder.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 84,
        "nombre": "Cloyster",
        "img": "../assets/img/091.png",
        "href": "../data/pokedex/cloyster.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Hielo",
        "type2": "ice"
    },
    {
        "numero": 85,
        "nombre": "Gastly",
        "img": "../assets/img/092.png",
        "href": "../data/pokedex/gastly.html",
        "tipo": "Fantasma",
        "type": "ghost",
        "tipo2": "Veneno",
        "type2": "poison"
    },
    {
        "numero": 86,
        "nombre": "Haunter",
        "img": "../assets/img/093.png",
        "href": "../data/pokedex/haunter.html",
        "tipo": "Fantasma",
        "type": "ghost",
        "tipo2": "Veneno",
        "type2": "poison"
    },
    {
        "numero": 87,
        "nombre": "Gengar",
        "img": "../assets/img/094.png",
        "href": "../data/pokedex/gengar.html",
        "tipo": "Fantasma",
        "type": "ghost",
        "tipo2": "Veneno",
        "type2": "poison"
    },
    {
        "numero": 88,
        "nombre": "Onix",
        "img": "../assets/img/095.png",
        "href": "../data/pokedex/onix.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 89,
        "nombre": "Steelix",
        "img": "../assets/img/208.png",
        "href": "../data/pokedex/steelix.html",
        "tipo": "Acero",
        "type": "steel",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 90,
        "nombre": "Krabby",
        "img": "../assets/img/098.png",
        "href": "../data/pokedex/krabby.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 91,
        "nombre": "Kingler",
        "img": "../assets/img/099.png",
        "href": "../data/pokedex/kingler.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 92,
        "nombre": "Voltorb",
        "img": "../assets/img/100.png",
        "href": "../data/pokedex/voltorb.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 93,
        "nombre": "Electrode",
        "img": "../assets/img/101.png",
        "href": "../data/pokedex/electrode.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 94,
        "nombre": "Exeggcute",
        "img": "../assets/img/102.png",
        "href": "../data/pokedex/exeggcute.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Psíquico",
        "type2": "psychic"
    },
    {
        "numero": 95,
        "nombre": "Exeggutor",
        "img": "../assets/img/103.png",
        "href": "../data/pokedex/exeggutor.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Psíquico",
        "type2": "psychic"
    },
    {
        "numero": 96,
        "nombre": "Cubone",
        "img": "../assets/img/104.png",
        "href": "../data/pokedex/cubone.html",
        "tipo": "Tierra",
        "type": "ground"
    },
    {
        "numero": 97,
        "nombre": "Marowak",
        "img": "../assets/img/105.png",
        "href": "../data/pokedex/marowak.html",
        "tipo": "Tierra",
        "type": "ground"
    },
    {
        "numero": 98,
        "nombre": "Lickitung",
        "img": "../assets/img/108.png",
        "href": "../data/pokedex/lickitung.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 99,
        "nombre": "Koffing",
        "img": "../assets/img/109.png",
        "href": "../data/pokedex/koffing.html",
        "tipo": "Veneno",
        "type": "poison"
    },
    {
        "numero": 100,
        "nombre": "Weezing",
        "img": "../assets/img/110.png",
        "href": "../data/pokedex/weezing.html",
        "tipo": "Veneno",
        "type": "poison"
    },
    {
        "numero": 101,
        "nombre": "Happiny",
        "img": "../assets/img/440.png",
        "href": "../data/pokedex/happiny.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 102,
        "nombre": "Chansey",
        "img": "../assets/img/113.png",
        "href": "../data/pokedex/chansey.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 103,
        "nombre": "Blissey",
        "img": "../assets/img/242.png",
        "href": "../data/pokedex/blissey.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 104,
        "nombre": "Kangaskhan",
        "img": "../assets/img/115.png",
        "href": "../data/pokedex/kangaskhan.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 105,
        "nombre": "Horsea",
        "img": "../assets/img/116.png",
        "href": "../data/pokedex/horsea.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 106,
        "nombre": "Seadra",
        "img": "../assets/img/117.png",
        "href": "../data/pokedex/seadra.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 107,
        "nombre": "Kingdra",
        "img": "../assets/img/230.png",
        "href": "../data/pokedex/kingdra.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Dragón",
        "type2": "dragon"
    },
    {
        "numero": 108,
        "nombre": "Goldeen",
        "img": "../assets/img/118.png",
        "href": "../data/pokedex/goldeen.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 109,
        "nombre": "Seaking",
        "img": "../assets/img/119.png",
        "href": "../data/pokedex/seaking.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 110,
        "nombre": "Magby",
        "img": "../assets/img/240.png",
        "href": "../data/pokedex/magby.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 111,
        "nombre": "Magmar",
        "img": "../assets/img/126.png",
        "href": "../data/pokedex/magmar.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 112,
        "nombre": "Magmortar",
        "img": "../assets/img/467.png",
        "href": "../data/pokedex/magmortar.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 113,
        "nombre": "Pinsir",
        "img": "../assets/img/127.png",
        "href": "../data/pokedex/pinsir.html",
        "tipo": "Bicho",
        "type": "bug"
    },
    {
        "numero": 114,
        "nombre": "Tauros",
        "img": "../assets/img/128.png",
        "href": "../data/pokedex/tauros.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 115,
        "nombre": "Magikarp",
        "img": "../assets/img/129.png",
        "href": "../data/pokedex/magikarp.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 116,
        "nombre": "Gyarados",
        "img": "../assets/img/130.png",
        "href": "../data/pokedex/gyarados.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 117,
        "nombre": "Lapras",
        "img": "../assets/img/131.png",
        "href": "../data/pokedex/lapras.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Hielo",
        "type2": "ice"
    },
    {
        "numero": 118,
        "nombre": "Ditto",
        "img": "../assets/img/132.png",
        "href": "../data/pokedex/ditto.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 119,
        "nombre": "Eevee",
        "img": "../assets/img/133.png",
        "href": "../data/pokedex/eevee.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 120,
        "nombre": "Vaporeon",
        "img": "../assets/img/134.png",
        "href": "../data/pokedex/vaporeon.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 121,
        "nombre": "Flareon",
        "img": "../assets/img/136.png",
        "href": "../data/pokedex/flareon.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 122,
        "nombre": "Jolteon",
        "img": "../assets/img/135.png",
        "href": "../data/pokedex/jolteon.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 123,
        "nombre": "Espeon",
        "img": "../assets/img/196.png",
        "href": "../data/pokedex/espeon.html",
        "tipo": "Psíquico",
        "type": "psychic"
    },
    {
        "numero": 124,
        "nombre": "Umbreon",
        "img": "../assets/img/197.png",
        "href": "../data/pokedex/umbreon.html",
        "tipo": "Siniestro",
        "type": "dark"
    },
    {
        "numero": 125,
        "nombre": "Leafeon",
        "img": "../assets/img/470.png",
        "href": "../data/pokedex/leafeon.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 126,
        "nombre": "Glaceon",
        "img": "../assets/img/471.png",
        "href": "../data/pokedex/glaceon.html",
        "tipo": "Hielo",
        "type": "ice"
    },
    {
        "numero": 127,
        "nombre": "Sylveon",
        "img": "../assets/img/700.png",
        "href": "../data/pokedex/sylveon.html",
        "tipo": "Hada",
        "type": "fairy"
    },
    {
        "numero": 128,
        "nombre": "Porygon",
        "img": "../assets/img/137.png",
        "href": "../data/pokedex/porygon.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 129,
        "nombre": "Omanyte",
        "img": "../assets/img/138.png",
        "href": "../data/pokedex/omanyte.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Agua",
        "type2": "water"
    },
    {
        "numero": 130,
        "nombre": "Omastar",
        "img": "../assets/img/139.png",
        "href": "../data/pokedex/omastar.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Agua",
        "type2": "water"
    },
    {
        "numero": 131,
        "nombre": "Kabuto",
        "img": "../assets/img/140.png",
        "href": "../data/pokedex/kabuto.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Agua",
        "type2": "water"
    },
    {
        "numero": 132,
        "nombre": "Kabutops",
        "img": "../assets/img/141.png",
        "href": "../data/pokedex/kabutops.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Agua",
        "type2": "water"
    },
    {
        "numero": 133,
        "nombre": "Articuno",
        "img": "../assets/img/144.png",
        "href": "../data/pokedex/articuno.html",
        "tipo": "Hielo",
        "type": "ice",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 134,
        "nombre": "Zapdos",
        "img": "../assets/img/145.png",
        "href": "../data/pokedex/zapdos.html",
        "tipo": "Eléctrico",
        "type": "electric",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 135,
        "nombre": "Moltres",
        "img": "../assets/img/146.png",
        "href": "../data/pokedex/moltres.html",
        "tipo": "Fuego",
        "type": "fire",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 136,
        "nombre": "Cyndaquil",
        "img": "../assets/img/155.png",
        "href": "../data/pokedex/cyndaquil.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 137,
        "nombre": "Quilava",
        "img": "../assets/img/156.png",
        "href": "../data/pokedex/quilava.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 138,
        "nombre": "Typhlosion",
        "img": "../assets/img/157.png",
        "href": "../data/pokedex/typhlosion.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 139,
        "nombre": "Totodile",
        "img": "../assets/img/158.png",
        "href": "../data/pokedex/totodile.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 140,
        "nombre": "Croconaw",
        "img": "../assets/img/159.png",
        "href": "../data/pokedex/croconaw.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 141,
        "nombre": "Feraligatr",
        "img": "../assets/img/160.png",
        "href": "../data/pokedex/feraligatr.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 142,
        "nombre": "Sentret",
        "img": "../assets/img/161.png",
        "href": "../data/pokedex/sentret.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 143,
        "nombre": "Furret",
        "img": "../assets/img/162.png",
        "href": "../data/pokedex/furret.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 144,
        "nombre": "Hoothoot",
        "img": "../assets/img/163.png",
        "href": "../data/pokedex/hoothoot.html",
        "tipo": "Normal",
        "type": "normal",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 145,
        "nombre": "Noctowl",
        "img": "../assets/img/164.png",
        "href": "../data/pokedex/noctowl.html",
        "tipo": "Normal",
        "type": "normal",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 146,
        "nombre": "Azurill",
        "img": "../assets/img/298.png",
        "href": "../data/pokedex/azurill.html",
        "tipo": "Normal",
        "type": "normal",
        "tipo2": "Hada",
        "type2": "fairy"
    },
    {
        "numero": 147,
        "nombre": "Marill",
        "img": "../assets/img/183.png",
        "href": "../data/pokedex/marill.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Hada",
        "type2": "fairy"
    },
    {
        "numero": 148,
        "nombre": "Azumarill",
        "img": "../assets/img/184.png",
        "href": "../data/pokedex/azumarill.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Hada",
        "type2": "fairy"
    },
    {
        "numero": 149,
        "nombre": "Bonsly",
        "img": "../assets/img/438.png",
        "href": "../data/pokedex/bonsly.html",
        "tipo": "Roca",
        "type": "rock"
    },
    {
        "numero": 150,
        "nombre": "Sudowoodo",
        "img": "../assets/img/185.png",
        "href": "../data/pokedex/sudowoodo.html",
        "tipo": "Roca",
        "type": "rock"
    },
    {
        "numero": 151,
        "nombre": "Sunkern",
        "img": "../assets/img/191.png",
        "href": "../data/pokedex/sunkern.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 152,
        "nombre": "Sunflora",
        "img": "../assets/img/192.png",
        "href": "../data/pokedex/sunflora.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 153,
        "nombre": "Aipom",
        "img": "../assets/img/190.png",
        "href": "../data/pokedex/aipom.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 154,
        "nombre": "Ambipom",
        "img": "../assets/img/424.png",
        "href": "../data/pokedex/ambipom.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 155,
        "nombre": "Yanma",
        "img": "../assets/img/193.png",
        "href": "../data/pokedex/yanma.html",
        "tipo": "Bicho",
        "type": "bug",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 156,
        "nombre": "Wooper",
        "img": "../assets/img/194.png",
        "href": "../data/pokedex/wooper.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 157,
        "nombre": "Quagsire",
        "img": "../assets/img/195.png",
        "href": "../data/pokedex/quagsire.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 158,
        "nombre": "Pineco",
        "img": "../assets/img/204.png",
        "href": "../data/pokedex/pineco.html",
        "tipo": "Bicho",
        "type": "bug"
    },
    {
        "numero": 159,
        "nombre": "Forretress",
        "img": "../assets/img/205.png",
        "href": "../data/pokedex/forretress.html",
        "tipo": "Bicho",
        "type": "bug",
        "tipo2": "Acero",
        "type2": "steel"
    },
    {
        "numero": 160,
        "nombre": "Snubbull",
        "img": "../assets/img/209.png",
        "href": "../data/pokedex/snubbull.html",
        "tipo": "Hada",
        "type": "fairy"
    },
    {
        "numero": 161,
        "nombre": "Granbull",
        "img": "../assets/img/210.png",
        "href": "../data/pokedex/granbull.html",
        "tipo": "Hada",
        "type": "fairy"
    },
    {
        "numero": 162,
        "nombre": "Heracross",
        "img": "../assets/img/214.png",
        "href": "../data/pokedex/heracross.html",
        "tipo": "Bicho",
        "type": "bug",
        "tipo2": "Lucha",
        "type2": "figth"
    },
    {
        "numero": 163,
        "nombre": "Teddiursa",
        "img": "../assets/img/216.png",
        "href": "../data/pokedex/teddiursa.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 164,
        "nombre": "Ursaring",
        "img": "../assets/img/217.png",
        "href": "../data/pokedex/ursaring.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 165,
        "nombre": "Shuckle",
        "img": "../assets/img/213.png",
        "href": "../data/pokedex/shuckle.html",
        "tipo": "Bicho",
        "type": "bug",
        "tipo2": "Roca",
        "type2": "rock"
    },
    {
        "numero": 166,
        "nombre": "Slugma",
        "img": "../assets/img/218.png",
        "href": "../data/pokedex/slugma.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 167,
        "nombre": "Magcargo",
        "img": "../assets/img/219.png",
        "href": "../data/pokedex/magcargo.html",
        "tipo": "Fuego",
        "type": "fire",
        "tipo2": "Roca",
        "type2": "rock"
    },
    {
        "numero": 168,
        "nombre": "Swinub",
        "img": "../assets/img/220.png",
        "href": "../data/pokedex/swinub.html",
        "tipo": "Hielo",
        "type": "ice",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 169,
        "nombre": "Piloswine",
        "img": "../assets/img/221.png",
        "href": "../data/pokedex/piloswine.html",
        "tipo": "Hielo",
        "type": "ice",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 170,
        "nombre": "Corsola",
        "img": "../assets/img/222.png",
        "href": "../data/pokedex/corsola.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Roca",
        "type2": "rock"
    },
    {
        "numero": 171,
        "nombre": "Cursola",
        "img": "../assets/img/864.png",
        "href": "../data/pokedex/cursola.html",
        "tipo": "Fantasma",
        "type": "ghost"
    },
    {
        "numero": 172,
        "nombre": "Houndour",
        "img": "../assets/img/228.png",
        "href": "../data/pokedex/houndour.html",
        "tipo": "Siniestro",
        "type": "dark",
        "tipo2": "Fuego",
        "type2": "fire"
    },
    {
        "numero": 173,
        "nombre": "Houndoom",
        "img": "../assets/img/229.png",
        "href": "../data/pokedex/houndoom.html",
        "tipo": "Siniestro",
        "type": "dark",
        "tipo2": "Fuego",
        "type2": "fire"
    },
    {
        "numero": 174,
        "nombre": "Phanpy",
        "img": "../assets/img/231.png",
        "href": "../data/pokedex/phanpy.html",
        "tipo": "Tierra",
        "type": "ground"
    },
    {
        "numero": 175,
        "nombre": "Donphan",
        "img": "../assets/img/232.png",
        "href": "../data/pokedex/donphan.html",
        "tipo": "Tierra",
        "type": "ground"
    },
    {
        "numero": 176,
        "nombre": "Stantler",
        "img": "../assets/img/234.png",
        "href": "../data/pokedex/stantler.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 177,
        "nombre": "Tyrogue",
        "img": "../assets/img/236.png",
        "href": "../data/pokedex/tyrogue.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 178,
        "nombre": "Hitmonlee",
        "img": "../assets/img/106.png",
        "href": "../data/pokedex/hitmonlee.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 179,
        "nombre": "Hitmonchan",
        "img": "../assets/img/107.png",
        "href": "../data/pokedex/hitmonchan.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 180,
        "nombre": "Hitmontop",
        "img": "../assets/img/237.png",
        "href": "../data/pokedex/hitmontop.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 181,
        "nombre": "Miltank",
        "img": "../assets/img/241.png",
        "href": "../data/pokedex/miltank.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 182,
        "nombre": "Larvitar",
        "img": "../assets/img/246.png",
        "href": "../data/pokedex/larvitar.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 183,
        "nombre": "Pupitar",
        "img": "../assets/img/247.png",
        "href": "../data/pokedex/pupitar.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 184,
        "nombre": "Tyranitar",
        "img": "../assets/img/248.png",
        "href": "../data/pokedex/tyranitar.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Siniestro",
        "type2": "dark"
    },
    {
        "numero": 185,
        "nombre": "Torchic",
        "img": "../assets/img/255.png",
        "href": "../data/pokedex/torchic.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 186,
        "nombre": "Combusken",
        "img": "../assets/img/256.png",
        "href": "../data/pokedex/combusken.html",
        "tipo": "Fuego",
        "type": "fire",
        "tipo2": "Lucha",
        "type2": "figth"
    },
    {
        "numero": 187,
        "nombre": "Blaziken",
        "img": "../assets/img/257.png",
        "href": "../data/pokedex/blaziken.html",
        "tipo": "Fuego",
        "type": "fire",
        "tipo2": "Lucha",
        "type2": "figth"
    },
    {
        "numero": 188,
        "nombre": "Mudkip",
        "img": "../assets/img/258.png",
        "href": "../data/pokedex/mudkip.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 189,
        "nombre": "Marshtomp",
        "img": "../assets/img/259.png",
        "href": "../data/pokedex/marshtomp.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 190,
        "nombre": "Swampert",
        "img": "../assets/img/260.png",
        "href": "../data/pokedex/swampert.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 191,
        "nombre": "Poochyena",
        "img": "../assets/img/261.png",
        "href": "../data/pokedex/poochyena.html",
        "tipo": "Siniestro",
        "type": "dark"
    },
    {
        "numero": 192,
        "nombre": "Mightyena",
        "img": "../assets/img/262.png",
        "href": "../data/pokedex/mightyena.html",
        "tipo": "Siniestro",
        "type": "dark"
    },
    {
        "numero": 193,
        "nombre": "Zigzagoon",
        "img": "../assets/img/263.png",
        "href": "../data/pokedex/zigzagoon.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 194,
        "nombre": "Linoone",
        "img": "../assets/img/264.png",
        "href": "../data/pokedex/linoone.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 195,
        "nombre": "Lotad",
        "img": "../assets/img/270.png",
        "href": "../data/pokedex/lotad.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Planta",
        "type2": "grass"
    },
    {
        "numero": 196,
        "nombre": "Lombre",
        "img": "../assets/img/271.png",
        "href": "../data/pokedex/lombre.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Planta",
        "type2": "grass"
    },
    {
        "numero": 197,
        "nombre": "Ludicolo",
        "img": "../assets/img/272.png",
        "href": "../data/pokedex/ludicolo.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Planta",
        "type2": "grass"
    },
    {
        "numero": 198,
        "nombre": "Seedot",
        "img": "../assets/img/273.png",
        "href": "../data/pokedex/seedot.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 199,
        "nombre": "Nuzleaf",
        "img": "../assets/img/274.png",
        "href": "../data/pokedex/nuzleaf.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Siniestro",
        "type2": "dark"
    },
    {
        "numero": 200,
        "nombre": "Shiftry",
        "img": "../assets/img/275.png",
        "href": "../data/pokedex/shiftry.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Siniestro",
        "type2": "dark"
    },
    {
        "numero": 201,
        "nombre": "Ralts",
        "img": "../assets/img/280.png",
        "href": "../data/pokedex/ralts.html",
        "tipo": "Psíquico",
        "type": "psychic",
        "tipo2": "Hada",
        "type2": "fairy"
    },
    {
        "numero": 202,
        "nombre": "Kirlia",
        "img": "../assets/img/281.png",
        "href": "../data/pokedex/kirlia.html",
        "tipo": "Psíquico",
        "type": "psychic",
        "tipo2": "Hada",
        "type2": "fairy"
    },
    {
        "numero": 203,
        "nombre": "Gardevoir",
        "img": "../assets/img/282.png",
        "href": "../data/pokedex/gardevoir.html",
        "tipo": "Psíquico",
        "type": "psychic",
        "tipo2": "Hada",
        "type2": "fairy"
    },
    {
        "numero": 204,
        "nombre": "Shroomish",
        "img": "../assets/img/285.png",
        "href": "../data/pokedex/shroomish.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 205,
        "nombre": "Breloom",
        "img": "../assets/img/286.png",
        "href": "../data/pokedex/breloom.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Lucha",
        "type2": "figth"
    },
    {
        "numero": 206,
        "nombre": "Slakoth",
        "img": "../assets/img/287.png",
        "href": "../data/pokedex/slakoth.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 207,
        "nombre": "Vigoroth",
        "img": "../assets/img/288.png",
        "href": "../data/pokedex/vigoroth.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 208,
        "nombre": "Slaking",
        "img": "../assets/img/289.png",
        "href": "../data/pokedex/slaking.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 209,
        "nombre": "Nincada",
        "img": "../assets/img/290.png",
        "href": "../data/pokedex/nincada.html",
        "tipo": "Bicho",
        "type": "bug",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 210,
        "nombre": "Ninjask",
        "img": "../assets/img/291.png",
        "href": "../data/pokedex/ninjask.html",
        "tipo": "Bicho",
        "type": "bug",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 211,
        "nombre": "Makuhita",
        "img": "../assets/img/296.png",
        "href": "../data/pokedex/makuhita.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 212,
        "nombre": "Hariyama",
        "img": "../assets/img/297.png",
        "href": "../data/pokedex/hariyama.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 213,
        "nombre": "Aron",
        "img": "../assets/img/304.png",
        "href": "../data/pokedex/aron.html",
        "tipo": "Acero",
        "type": "steel",
        "tipo2": "Roca",
        "type2": "rock"
    },
    {
        "numero": 214,
        "nombre": "Lairon",
        "img": "../assets/img/305.png",
        "href": "../data/pokedex/lairon.html",
        "tipo": "Acero",
        "type": "steel",
        "tipo2": "Roca",
        "type2": "rock"
    },
    {
        "numero": 215,
        "nombre": "Aggron",
        "img": "../assets/img/306.png",
        "href": "../data/pokedex/aggron.html",
        "tipo": "Acero",
        "type": "steel",
        "tipo2": "Roca",
        "type2": "rock"
    },
    {
        "numero": 216,
        "nombre": "Meditite",
        "img": "../assets/img/307.png",
        "href": "../data/pokedex/meditite.html",
        "tipo": "Lucha",
        "type": "figth",
        "tipo2": "Psíquico",
        "type2": "psychic"
    },
    {
        "numero": 217,
        "nombre": "Medicham",
        "img": "../assets/img/308.png",
        "href": "../data/pokedex/medicham.html",
        "tipo": "Lucha",
        "type": "figth",
        "tipo2": "Psíquico",
        "type2": "psychic"
    },
    {
        "numero": 218,
        "nombre": "Electrike",
        "img": "../assets/img/309.png",
        "href": "../data/pokedex/electrike.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 219,
        "nombre": "Manectric",
        "img": "../assets/img/310.png",
        "href": "../data/pokedex/manectric.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 220,
        "nombre": "Plusle",
        "img": "../assets/img/311.png",
        "href": "../data/pokedex/plusle.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 221,
        "nombre": "Minun",
        "img": "../assets/img/312.png",
        "href": "../data/pokedex/minun.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 222,
        "nombre": "Volbeat",
        "img": "../assets/img/313.png",
        "href": "../data/pokedex/volbeat.html",
        "tipo": "Bicho",
        "type": "bug"
    },
    {
        "numero": 223,
        "nombre": "Illumise",
        "img": "../assets/img/314.png",
        "href": "../data/pokedex/illumise.html",
        "tipo": "Bicho",
        "type": "bug"
    },
    {
        "numero": 224,
        "nombre": "Gulpin",
        "img": "../assets/img/316.png",
        "href": "../data/pokedex/gulpin.html",
        "tipo": "Veneno",
        "type": "poison"
    },
    {
        "numero": 225,
        "nombre": "Swalot",
        "img": "../assets/img/317.png",
        "href": "../data/pokedex/swalot.html",
        "tipo": "Veneno",
        "type": "poison"
    },
    {
        "numero": 226,
        "nombre": "Carvanha",
        "img": "../assets/img/318.png",
        "href": "../data/pokedex/carvanha.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Siniestro",
        "type2": "dark"
    },
    {
        "numero": 227,
        "nombre": "Sharpedo",
        "img": "../assets/img/319.png",
        "href": "../data/pokedex/sharpedo.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Siniestro",
        "type2": "dark"
    },
    {
        "numero": 228,
        "nombre": "Wailmer",
        "img": "../assets/img/320.png",
        "href": "../data/pokedex/wailmer.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 229,
        "nombre": "Wailord",
        "img": "../assets/img/321.png",
        "href": "../data/pokedex/wailord.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 230,
        "nombre": "Numel",
        "img": "../assets/img/322.png",
        "href": "../data/pokedex/numel.html",
        "tipo": "Fuego",
        "type": "fire",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 231,
        "nombre": "Camerupt",
        "img": "../assets/img/323.png",
        "href": "../data/pokedex/camerupt.html",
        "tipo": "Fuego",
        "type": "fire",
        "tipo2": "Tierra",
        "type2": "ground"
    },
    {
        "numero": 232,
        "nombre": "Torkoal",
        "img": "../assets/img/324.png",
        "href": "../data/pokedex/torkoal.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 233,
        "nombre": "Spinda",
        "img": "../assets/img/327.png",
        "href": "../data/pokedex/spinda.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 234,
        "nombre": "Trapinch",
        "img": "../assets/img/328.png",
        "href": "../data/pokedex/trapinch.html",
        "tipo": "Tierra",
        "type": "ground"
    },
    {
        "numero": 235,
        "nombre": "Vibrava",
        "img": "../assets/img/329.png",
        "href": "../data/pokedex/vibrava.html",
        "tipo": "Tierra",
        "type": "ground",
        "tipo2": "Dragón",
        "type2": "dragon"
    },
    {
        "numero": 236,
        "nombre": "Flygon",
        "img": "../assets/img/330.png",
        "href": "../data/pokedex/flygon.html",
        "tipo": "Tierra",
        "type": "ground",
        "tipo2": "Dragón",
        "type2": "dragon"
    },
    {
        "numero": 237,
        "nombre": "Cacnea",
        "img": "../assets/img/331.png",
        "href": "../data/pokedex/cacnea.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 238,
        "nombre": "Cacturne",
        "img": "../assets/img/332.png",
        "href": "../data/pokedex/cacturne.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Siniestro",
        "type2": "dark"
    },
    {
        "numero": 239,
        "nombre": "Corphish",
        "img": "../assets/img/341.png",
        "href": "../data/pokedex/corphish.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 240,
        "nombre": "Crawdaunt",
        "img": "../assets/img/342.png",
        "href": "../data/pokedex/crawdaunt.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Siniestro",
        "type2": "dark"
    },
    {
        "numero": 241,
        "nombre": "Anorith",
        "img": "../assets/img/347.png",
        "href": "../data/pokedex/anorith.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Bicho",
        "type2": "bug"
    },
    {
        "numero": 242,
        "nombre": "Armaldo",
        "img": "../assets/img/348.png",
        "href": "../data/pokedex/armaldo.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Bicho",
        "type2": "bug"
    },
    {
        "numero": 243,
        "nombre": "Feebas",
        "img": "../assets/img/349.png",
        "href": "../data/pokedex/feebas.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 244,
        "nombre": "Milotic",
        "img": "../assets/img/350.png",
        "href": "../data/pokedex/milotic.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 245,
        "nombre": "Duskull",
        "img": "../assets/img/355.png",
        "href": "../data/pokedex/duskull.html",
        "tipo": "Fantasma",
        "type": "ghost"
    },
    {
        "numero": 246,
        "nombre": "Dusclops",
        "img": "../assets/img/356.png",
        "href": "../data/pokedex/dusclops.html",
        "tipo": "Fantasma",
        "type": "ghost"
    },
    {
        "numero": 247,
        "nombre": "Tropius",
        "img": "../assets/img/357.png",
        "href": "../data/pokedex/tropius.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 248,
        "nombre": "Chimecho",
        "img": "../assets/img/358.png",
        "href": "../data/pokedex/chimecho.html",
        "tipo": "Psíquico",
        "type": "psychic"
    },
    {
        "numero": 249,
        "nombre": "Beldum",
        "img": "../assets/img/374.png",
        "href": "../data/pokedex/beldum.html",
        "tipo": "Acero",
        "type": "steel",
        "tipo2": "Psíquico",
        "type2": "psychic"
    },
    {
        "numero": 250,
        "nombre": "Metang",
        "img": "../assets/img/375.png",
        "href": "../data/pokedex/metang.html",
        "tipo": "Acero",
        "type": "steel",
        "tipo2": "Psíquico",
        "type2": "psychic"
    },
    {
        "numero": 251,
        "nombre": "Metagross",
        "img": "../assets/img/376.png",
        "href": "../data/pokedex/metagross.html",
        "tipo": "Acero",
        "type": "steel",
        "tipo2": "Psíquico",
        "type2": "psychic"
    },
    {
        "numero": 252,
        "nombre": "Deoxys",
        "img": "../assets/img/386.png",
        "href": "../data/pokedex/deoxys.html",
        "tipo": "Psíquico",
        "type": "psychic"
    },
    {
        "numero": 253,
        "nombre": "Shinx",
        "img": "../assets/img/403.png",
        "href": "../data/pokedex/shinx.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 254,
        "nombre": "Luxio",
        "img": "../assets/img/404.png",
        "href": "../data/pokedex/luxio.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 255,
        "nombre": "Luxray",
        "img": "../assets/img/405.png",
        "href": "../data/pokedex/luxray.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 256,
        "nombre": "Shieldon",
        "img": "../assets/img/410.png",
        "href": "../data/pokedex/shieldon.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Acero",
        "type2": "steel"
    },
    {
        "numero": 257,
        "nombre": "Bastiodon",
        "img": "../assets/img/411.png",
        "href": "../data/pokedex/bastiodon.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Acero",
        "type2": "steel"
    },
    {
        "numero": 258,
        "nombre": "Combee",
        "img": "../assets/img/415.png",
        "href": "../data/pokedex/combee.html",
        "tipo": "Bicho",
        "type": "bug",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 259,
        "nombre": "Vespiquen",
        "img": "../assets/img/416.png",
        "href": "../data/pokedex/vespiquen.html",
        "tipo": "Bicho",
        "type": "bug",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 260,
        "nombre": "Buizel",
        "img": "../assets/img/418.png",
        "href": "../data/pokedex/buizel.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 261,
        "nombre": "Floatzel",
        "img": "../assets/img/419.png",
        "href": "../data/pokedex/floatzel.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 262,
        "nombre": "Buneary",
        "img": "../assets/img/427.png",
        "href": "../data/pokedex/buneary.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 263,
        "nombre": "Lopunny",
        "img": "../assets/img/428.png",
        "href": "../data/pokedex/lopunny.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 264,
        "nombre": "Munchlax",
        "img": "../assets/img/446.png",
        "href": "../data/pokedex/munchlax.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 265,
        "nombre": "Snorlax",
        "img": "../assets/img/143.png",
        "href": "../data/pokedex/snorlax.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 266,
        "nombre": "Riolu",
        "img": "../assets/img/447.png",
        "href": "../data/pokedex/riolu.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 267,
        "nombre": "Lucario",
        "img": "../assets/img/448.png",
        "href": "../data/pokedex/lucario.html",
        "tipo": "Lucha",
        "type": "figth",
        "tipo2": "Acero",
        "type2": "steel"
    },
    {
        "numero": 268,
        "nombre": "Skorupi",
        "img": "../assets/img/451.png",
        "href": "../data/pokedex/skorupi.html",
        "tipo": "Veneno",
        "type": "poison",
        "tipo2": "Bicho",
        "type2": "bug"
    },
    {
        "numero": 269,
        "nombre": "Drapion",
        "img": "../assets/img/452.png",
        "href": "../data/pokedex/drapion.html",
        "tipo": "Veneno",
        "type": "poison",
        "tipo2": "Siniestro",
        "type2": "dark"
    },
    {
        "numero": 270,
        "nombre": "Croagunk",
        "img": "../assets/img/453.png",
        "href": "../data/pokedex/croagunk.html",
        "tipo": "Veneno",
        "type": "poison",
        "tipo2": "Lucha",
        "type2": "figth"
    },
    {
        "numero": 271,
        "nombre": "Toxicroak",
        "img": "../assets/img/454.png",
        "href": "../data/pokedex/toxicroak.html",
        "tipo": "Veneno",
        "type": "poison",
        "tipo2": "Lucha",
        "type2": "figth"
    },
    {
        "numero": 272,
        "nombre": "Carnivine",
        "img": "../assets/img/455.png",
        "href": "../data/pokedex/carnivine.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 273,
        "nombre": "Rotom",
        "img": "../assets/img/479.png",
        "href": "../data/pokedex/rotom.html",
        "tipo": "Eléctrico",
        "type": "electric",
        "tipo2": "Fantasma",
        "type2": "ghost"
    },
    {
        "numero": 274,
        "nombre": "Snivy",
        "img": "../assets/img/495.png",
        "href": "../data/pokedex/snivy.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 275,
        "nombre": "Servine",
        "img": "../assets/img/496.png",
        "href": "../data/pokedex/servine.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 276,
        "nombre": "Serperior",
        "img": "../assets/img/497.png",
        "href": "../data/pokedex/serperior.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 277,
        "nombre": "Lillipup",
        "img": "../assets/img/506.png",
        "href": "../data/pokedex/lillipup.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 278,
        "nombre": "Herdier",
        "img": "../assets/img/507.png",
        "href": "../data/pokedex/herdier.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 279,
        "nombre": "Stoutland",
        "img": "../assets/img/508.png",
        "href": "../data/pokedex/stoutland.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 280,
        "nombre": "Purrloin",
        "img": "../assets/img/509.png",
        "href": "../data/pokedex/purrloin.html",
        "tipo": "Siniestro",
        "type": "dark"
    },
    {
        "numero": 281,
        "nombre": "Liepard",
        "img": "../assets/img/510.png",
        "href": "../data/pokedex/liepard.html",
        "tipo": "Siniestro",
        "type": "dark"
    },
    {
        "numero": 282,
        "nombre": "Blitzle",
        "img": "../assets/img/522.png",
        "href": "../data/pokedex/blitzle.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 283,
        "nombre": "Zebstrika",
        "img": "../assets/img/523.png",
        "href": "../data/pokedex/zebstrika.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 284,
        "nombre": "Roggenrola",
        "img": "../assets/img/524.png",
        "href": "../data/pokedex/roggenrola.html",
        "tipo": "Roca",
        "type": "rock"
    },
    {
        "numero": 285,
        "nombre": "Boldore",
        "img": "../assets/img/525.png",
        "href": "../data/pokedex/boldore.html",
        "tipo": "Roca",
        "type": "rock"
    },
    {
        "numero": 286,
        "nombre": "Gigalith",
        "img": "../assets/img/526.png",
        "href": "../data/pokedex/gigalith.html",
        "tipo": "Roca",
        "type": "rock"
    },
    {
        "numero": 287,
        "nombre": "Woobat",
        "img": "../assets/img/527.png",
        "href": "../data/pokedex/woobat.html",
        "tipo": "Psíquico",
        "type": "psychic",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 288,
        "nombre": "Swoobat",
        "img": "../assets/img/528.png",
        "href": "../data/pokedex/swoobat.html",
        "tipo": "Psíquico",
        "type": "psychic",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 289,
        "nombre": "Audino",
        "img": "../assets/img/531.png",
        "href": "../data/pokedex/audino.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 290,
        "nombre": "Timburr",
        "img": "../assets/img/532.png",
        "href": "../data/pokedex/timburr.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 291,
        "nombre": "Gurdurr",
        "img": "../assets/img/533.png",
        "href": "../data/pokedex/gurdurr.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 292,
        "nombre": "Conkeldurr",
        "img": "../assets/img/534.png",
        "href": "../data/pokedex/conkeldurr.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 293,
        "nombre": "Throh",
        "img": "../assets/img/538.png",
        "href": "../data/pokedex/throh.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 294,
        "nombre": "Sawk",
        "img": "../assets/img/539.png",
        "href": "../data/pokedex/sawk.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 295,
        "nombre": "Sewaddle",
        "img": "../assets/img/540.png",
        "href": "../data/pokedex/sewaddle.html",
        "tipo": "Bicho",
        "type": "bug",
        "tipo2": "Planta",
        "type2": "grass"
    },
    {
        "numero": 296,
        "nombre": "Swadloon",
        "img": "../assets/img/541.png",
        "href": "../data/pokedex/swadloon.html",
        "tipo": "Bicho",
        "type": "bug",
        "tipo2": "Planta",
        "type2": "grass"
    },
    {
        "numero": 297,
        "nombre": "Leavanny",
        "img": "../assets/img/542.png",
        "href": "../data/pokedex/leavanny.html",
        "tipo": "Bicho",
        "type": "bug",
        "tipo2": "Planta",
        "type2": "grass"
    },
    {
        "numero": 298,
        "nombre": "Cottonee",
        "img": "../assets/img/546.png",
        "href": "../data/pokedex/cottonee.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Hada",
        "type2": "fairy"
    },
    {
        "numero": 299,
        "nombre": "Whimsicott",
        "img": "../assets/img/547.png",
        "href": "../data/pokedex/whimsicott.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Hada",
        "type2": "fairy"
    },
    {
        "numero": 300,
        "nombre": "Ducklett",
        "img": "../assets/img/580.png",
        "href": "../data/pokedex/ducklett.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 301,
        "nombre": "Swanna",
        "img": "../assets/img/581.png",
        "href": "../data/pokedex/swanna.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 302,
        "nombre": "Foongus",
        "img": "../assets/img/590.png",
        "href": "../data/pokedex/foongus.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Veneno",
        "type2": "poison"
    },
    {
        "numero": 303,
        "nombre": "Amoonguss",
        "img": "../assets/img/591.png",
        "href": "../data/pokedex/amoonguss.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Veneno",
        "type2": "poison"
    },
    {
        "numero": 304,
        "nombre": "Tynamo",
        "img": "../assets/img/602.png",
        "href": "../data/pokedex/tynamo.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 305,
        "nombre": "Eelektrik",
        "img": "../assets/img/603.png",
        "href": "../data/pokedex/eelektrik.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 306,
        "nombre": "Eelektross",
        "img": "../assets/img/604.png",
        "href": "../data/pokedex/eelektross.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 307,
        "nombre": "Litwick",
        "img": "../assets/img/607.png",
        "href": "../data/pokedex/litwick.html",
        "tipo": "Fantasma",
        "type": "ghost",
        "tipo2": "Fuego",
        "type2": "fire"
    },
    {
        "numero": 308,
        "nombre": "Lampent",
        "img": "../assets/img/608.png",
        "href": "../data/pokedex/lampent.html",
        "tipo": "Fantasma",
        "type": "ghost",
        "tipo2": "Fuego",
        "type2": "fire"
    },
    {
        "numero": 309,
        "nombre": "Chandelure",
        "img": "../assets/img/609.png",
        "href": "../data/pokedex/chandelure.html",
        "tipo": "Fantasma",
        "type": "ghost",
        "tipo2": "Fuego",
        "type2": "fire"
    },
    {
        "numero": 310,
        "nombre": "Axew",
        "img": "../assets/img/610.png",
        "href": "../data/pokedex/axew.html",
        "tipo": "Dragón",
        "type": "dragon"
    },
    {
        "numero": 311,
        "nombre": "Fraxure",
        "img": "../assets/img/611.png",
        "href": "../data/pokedex/fraxure.html",
        "tipo": "Dragón",
        "type": "dragon"
    },
    {
        "numero": 312,
        "nombre": "Haxorus",
        "img": "../assets/img/612.png",
        "href": "../data/pokedex/haxorus.html",
        "tipo": "Dragón",
        "type": "dragon"
    },
    {
        "numero": 313,
        "nombre": "Stunfisk",
        "img": "../assets/img/618.png",
        "href": "../data/pokedex/stunfisk.html",
        "tipo": "Tierra",
        "type": "ground",
        "tipo2": "Eléctrico",
        "type2": "electric"
    },
    {
        "numero": 314,
        "nombre": "Druddigon",
        "img": "../assets/img/621.png",
        "href": "../data/pokedex/druddigon.html",
        "tipo": "Dragón",
        "type": "dragon"
    },
    {
        "numero": 315,
        "nombre": "Golett",
        "img": "../assets/img/622.png",
        "href": "../data/pokedex/golett.html",
        "tipo": "Tierra",
        "type": "ground",
        "tipo2": "Fantasma",
        "type2": "ghost"
    },
    {
        "numero": 316,
        "nombre": "Golurk",
        "img": "../assets/img/623.png",
        "href": "../data/pokedex/golurk.html",
        "tipo": "Tierra",
        "type": "ground",
        "tipo2": "Fantasma",
        "type2": "ghost"
    },
    {
        "numero": 317,
        "nombre": "Bouffalant",
        "img": "../assets/img/626.png",
        "href": "../data/pokedex/bouffalant.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 318,
        "nombre": "Deino",
        "img": "../assets/img/633.png",
        "href": "../data/pokedex/deino.html",
        "tipo": "Siniestro",
        "type": "dark",
        "tipo2": "Dragón",
        "type2": "dragon"
    },
    {
        "numero": 319,
        "nombre": "Zweilous",
        "img": "../assets/img/634.png",
        "href": "../data/pokedex/zweilous.html",
        "tipo": "Siniestro",
        "type": "dark",
        "tipo2": "Dragón",
        "type2": "dragon"
    },
    {
        "numero": 320,
        "nombre": "Hydreigon",
        "img": "../assets/img/635.png",
        "href": "../data/pokedex/hydreigon.html",
        "tipo": "Siniestro",
        "type": "dark",
        "tipo2": "Dragón",
        "type2": "dragon"
    },
    {
        "numero": 321,
        "nombre": "Larvesta",
        "img": "../assets/img/636.png",
        "href": "../data/pokedex/larvesta.html",
        "tipo": "Bicho",
        "type": "bug",
        "tipo2": "Fuego",
        "type2": "fire"
    },
    {
        "numero": 322,
        "nombre": "Volcarona",
        "img": "../assets/img/637.png",
        "href": "../data/pokedex/volcarona.html",
        "tipo": "Bicho",
        "type": "bug",
        "tipo2": "Fuego",
        "type2": "fire"
    },
    {
        "numero": 323,
        "nombre": "Froakie",
        "img": "../assets/img/656.png",
        "href": "../data/pokedex/froakie.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 324,
        "nombre": "Frogadier",
        "img": "../assets/img/657.png",
        "href": "../data/pokedex/frogadier.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 325,
        "nombre": "Greninja",
        "img": "../assets/img/658.png",
        "href": "../data/pokedex/greninja.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Siniestro",
        "type2": "dark"
    },
    {
        "numero": 326,
        "nombre": "Scatterbug",
        "img": "../assets/img/664.png",
        "href": "../data/pokedex/scatterbug.html",
        "tipo": "Bicho",
        "type": "bug"
    },
    {
        "numero": 327,
        "nombre": "Spewpa",
        "img": "../assets/img/665.png",
        "href": "../data/pokedex/spewpa.html",
        "tipo": "Bicho",
        "type": "bug"
    },
    {
        "numero": 328,
        "nombre": "Vivillon",
        "img": "../assets/img/666.png",
        "href": "../data/pokedex/vivillon.html",
        "tipo": "Bicho",
        "type": "bug",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 329,
        "nombre": "Flabébé",
        "img": "../assets/img/669.png",
        "href": "../data/pokedex/flabebe.html",
        "tipo": "Hada",
        "type": "fairy"
    },
    {
        "numero": 330,
        "nombre": "Skiddo",
        "img": "../assets/img/672.png",
        "href": "../data/pokedex/skiddo.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 331,
        "nombre": "Gogoat",
        "img": "../assets/img/673.png",
        "href": "../data/pokedex/gogoat.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 332,
        "nombre": "Pancham",
        "img": "../assets/img/674.png",
        "href": "../data/pokedex/pancham.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 333,
        "nombre": "Pangoro",
        "img": "../assets/img/675.png",
        "href": "../data/pokedex/pangoro.html",
        "tipo": "Lucha",
        "type": "figth",
        "tipo2": "Siniestro",
        "type2": "dark"
    },
    {
        "numero": 334,
        "nombre": "Tyrunt",
        "img": "../assets/img/696.png",
        "href": "../data/pokedex/tyrunt.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Dragón",
        "type2": "dragon"
    },
    {
        "numero": 335,
        "nombre": "Tyrantrum",
        "img": "../assets/img/697.png",
        "href": "../data/pokedex/tyrantrum.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Dragón",
        "type2": "dragon"
    },
    {
        "numero": 336,
        "nombre": "Clauncher",
        "img": "../assets/img/692.png",
        "href": "../data/pokedex/clauncher.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 337,
        "nombre": "Clawitzer",
        "img": "../assets/img/693.png",
        "href": "../data/pokedex/clawitzer.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 338,
        "nombre": "Hawlucha",
        "img": "../assets/img/701.png",
        "href": "../data/pokedex/hawlucha.html",
        "tipo": "Lucha",
        "type": "figth",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 339,
        "nombre": "Phantump",
        "img": "../assets/img/708.png",
        "href": "../data/pokedex/phantump.html",
        "tipo": "Fantasma",
        "type": "ghost",
        "tipo2": "Planta",
        "type2": "grass"
    },
    {
        "numero": 340,
        "nombre": "Trevenant",
        "img": "../assets/img/709.png",
        "href": "../data/pokedex/trevenant.html",
        "tipo": "Fantasma",
        "type": "ghost",
        "tipo2": "Planta",
        "type2": "grass"
    },
    {
        "numero": 341,
        "nombre": "Pumpkaboo",
        "img": "../assets/img/710.png",
        "href": "../data/pokedex/pumpkaboo.html",
        "tipo": "Fantasma",
        "type": "ghost",
        "tipo2": "Planta",
        "type2": "grass"
    },
    {
        "numero": 342,
        "nombre": "Gourgeist",
        "img": "../assets/img/711.png",
        "href": "../data/pokedex/gourgeist.html",
        "tipo": "Fantasma",
        "type": "ghost",
        "tipo2": "Planta",
        "type2": "grass"
    },
    {
        "numero": 343,
        "nombre": "Noibat",
        "img": "../assets/img/714.png",
        "href": "../data/pokedex/noibat.html",
        "tipo": "Volador",
        "type": "flying",
        "tipo2": "Dragón",
        "type2": "dragon"
    },
    {
        "numero": 344,
        "nombre": "Noivern",
        "img": "../assets/img/715.png",
        "href": "../data/pokedex/noivern.html",
        "tipo": "Volador",
        "type": "flying",
        "tipo2": "Dragón",
        "type2": "dragon"
    },
    {
        "numero": 345,
        "nombre": "Rowlet",
        "img": "../assets/img/722.png",
        "href": "../data/pokedex/rowlet.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 346,
        "nombre": "Dartrix",
        "img": "../assets/img/723.png",
        "href": "../data/pokedex/dartrix.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 347,
        "nombre": "Decidueye",
        "img": "../assets/img/724.png",
        "href": "../data/pokedex/decidueye.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Fantasma",
        "type2": "ghost"
    },
    {
        "numero": 348,
        "nombre": "Litten",
        "img": "../assets/img/725.png",
        "href": "../data/pokedex/litten.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 349,
        "nombre": "Torracat",
        "img": "../assets/img/726.png",
        "href": "../data/pokedex/torracat.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 350,
        "nombre": "Incineroar",
        "img": "../assets/img/727.png",
        "href": "../data/pokedex/incineroar.html",
        "tipo": "Fuego",
        "type": "fire",
        "tipo2": "Siniestro",
        "type2": "dark"
    },
    {
        "numero": 351,
        "nombre": "Rockruff",
        "img": "../assets/img/744.png",
        "href": "../data/pokedex/rockruff.html",
        "tipo": "Roca",
        "type": "rock"
    },
    {
        "numero": 352,
        "nombre": "Lycanroc",
        "img": "../assets/img/745.png",
        "href": "../data/pokedex/lycanroc.html",
        "tipo": "Roca",
        "type": "rock"
    },
    {
        "numero": 353,
        "nombre": "Stufful",
        "img": "../assets/img/759.png",
        "href": "../data/pokedex/stufful.html",
        "tipo": "Normal",
        "type": "normal",
        "tipo2": "Lucha",
        "type2": "figth"
    },
    {
        "numero": 354,
        "nombre": "Bewear",
        "img": "../assets/img/760.png",
        "href": "../data/pokedex/bewear.html",
        "tipo": "Normal",
        "type": "normal",
        "tipo2": "Lucha",
        "type2": "figth"
    },
    {
        "numero": 355,
        "nombre": "Bounsweet",
        "img": "../assets/img/761.png",
        "href": "../data/pokedex/bounsweet.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 356,
        "nombre": "Steenee",
        "img": "../assets/img/762.png",
        "href": "../data/pokedex/steenee.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 357,
        "nombre": "Tsareena",
        "img": "../assets/img/763.png",
        "href": "../data/pokedex/tsareena.html",
        "tipo": "Planta",
        "type": "grass"
    },
    {
        "numero": 358,
        "nombre": "Minior",
        "img": "../assets/img/774.png",
        "href": "../data/pokedex/minior.html",
        "tipo": "Roca",
        "type": "rock",
        "tipo2": "Volador",
        "type2": "flying"
    },
    {
        "numero": 359,
        "nombre": "Komala",
        "img": "../assets/img/775.png",
        "href": "../data/pokedex/komala.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 360,
        "nombre": "Mimikyu",
        "img": "../assets/img/778.png",
        "href": "../data/pokedex/mimikyu.html",
        "tipo": "Fantasma",
        "type": "ghost",
        "tipo2": "Hada",
        "type2": "fairy"
    },
    {
        "numero": 361,
        "nombre": "Kartana",
        "img": "../assets/img/798.png",
        "href": "../data/pokedex/kartana.html",
        "tipo": "Planta",
        "type": "grass",
        "tipo2": "Acero",
        "type2": "steel"
    },
    {
        "numero": 362,
        "nombre": "Scorbunny",
        "img": "../assets/img/813.png",
        "href": "../data/pokedex/scorbunny.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 363,
        "nombre": "Raboot",
        "img": "../assets/img/814.png",
        "href": "../data/pokedex/raboot.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 364,
        "nombre": "Cinderace",
        "img": "../assets/img/815.png",
        "href": "../data/pokedex/cinderace.html",
        "tipo": "Fuego",
        "type": "fire"
    },
    {
        "numero": 365,
        "nombre": "Rookidee",
        "img": "../assets/img/821.png",
        "href": "../data/pokedex/rookidee.html",
        "tipo": "Volador",
        "type": "flying"
    },
    {
        "numero": 366,
        "nombre": "Corvisquire",
        "img": "../assets/img/822.png",
        "href": "../data/pokedex/corvisquire.html",
        "tipo": "Volador",
        "type": "flying"
    },
    {
        "numero": 367,
        "nombre": "Corviknight",
        "img": "../assets/img/823.png",
        "href": "../data/pokedex/corviknight.html",
        "tipo": "Volador",
        "type": "flying",
        "tipo2": "Acero",
        "type2": "steel"
    },
    {
        "numero": 368,
        "nombre": "Wooloo",
        "img": "../assets/img/831.png",
        "href": "../data/pokedex/wooloo.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 369,
        "nombre": "Dubwool",
        "img": "../assets/img/832.png",
        "href": "../data/pokedex/dubwool.html",
        "tipo": "Normal",
        "type": "normal"
    },
    {
        "numero": 370,
        "nombre": "Chewtle",
        "img": "../assets/img/833.png",
        "href": "../data/pokedex/chewtle.html",
        "tipo": "Agua",
        "type": "water"
    },
    {
        "numero": 371,
        "nombre": "Drednaw",
        "img": "../assets/img/834.png",
        "href": "../data/pokedex/drednaw.html",
        "tipo": "Agua",
        "type": "water",
        "tipo2": "Roca",
        "type2": "rock"
    },
    {
        "numero": 372,
        "nombre": "Yamper",
        "img": "../assets/img/835.png",
        "href": "../data/pokedex/yamper.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 373,
        "nombre": "Boltund",
        "img": "../assets/img/836.png",
        "href": "../data/pokedex/boltund.html",
        "tipo": "Eléctrico",
        "type": "electric"
    },
    {
        "numero": 374,
        "nombre": "Impidimp",
        "img": "../assets/img/859.png",
        "href": "../data/pokedex/impidimp.html",
        "tipo": "Siniestro",
        "type": "dark",
        "tipo2": "Hada",
        "type2": "fairy"
    },
    {
        "numero": 375,
        "nombre": "Morgrem",
        "img": "../assets/img/860.png",
        "href": "../data/pokedex/morgrem.html",
        "tipo": "Siniestro",
        "type": "dark",
        "tipo2": "Hada",
        "type2": "fairy"
    },
    {
        "numero": 376,
        "nombre": "Grimmsnarl",
        "img": "../assets/img/861.png",
        "href": "../data/pokedex/grimmsnarl.html",
        "tipo": "Siniestro",
        "type": "dark",
        "tipo2": "Hada",
        "type2": "fairy"
    },
    {
        "numero": 377,
        "nombre": "Alcremie",
        "img": "../assets/img/869.png",
        "href": "../data/pokedex/alcremie.html",
        "tipo": "Hada",
        "type": "fairy"
    },
    {
        "numero": 378,
        "nombre": "Falinks",
        "img": "../assets/img/870.png",
        "href": "../data/pokedex/falinks.html",
        "tipo": "Lucha",
        "type": "figth"
    },
    {
        "numero": 379,
        "nombre":"Tocorath",
        "img":"../assets/img/tocorath.png",
        "href":"../data/pokedex/tocorath.html",
        "tipo":"Planta",
        "type":"grass",
        "tipo2":"Volador",
        "type2":"flying"
    },
    {
        "numero": 380,
        "nombre":"Reparthion",
        "img":"../assets/img/reparthion.png",
        "href":"../data/pokedex/reparthion.html",
        "tipo":"Siniestro",
        "type":"dark",
        "tipo2":"Normal",
        "type2":"normal"
    },
];

function formatearNumero(num) {
    if (num >= 1 && num <= 9) return "00" + num;
    if (num >= 10 && num <= 99) return "0" + num;
    return num.toString();
}

function renderizar(pokemonsFiltrados) {
    const datosAMostrar = pokemonsFiltrados || pokemons;
    
    let html = '';
    for (const p of datosAMostrar) {
        let tiposHTML = `<span class="type ${p.type}">${p.tipo}</span>`;
        if (p.tipo2 && p.type2) {
            tiposHTML += `<span class="type ${p.type2}">${p.tipo2}</span>`;
        }
        
        html += `
            <a href="${p.href || '#'}" class="pokeCardLink" style="text-decoration: none; color: inherit;">
                <div class="pokeCard">
                    <img src="../assets/img/pokeball.svg" alt="" class="pokeballimg">
                    <div class="pokeinfo">
                        <p class="numero">${formatearNumero(p.numero)}</p>
                        <p class="nombre">${p.nombre}</p>
                        ${p.img ? `<img src="${p.img}" class="pokeSprite" alt="${p.nombre}" loading="lazy">` : ''}
                        <div class="types">
                            ${tiposHTML}
                        </div>
                    </div>
                </div>
            </a>
        `;
    }
    pokelist.innerHTML = html;
}

function renderizar(pokemonsFiltrados) {
    const datosAMostrar = pokemonsFiltrados || pokemons;
    
    let html = '';
    for (const p of datosAMostrar) {
        let tiposHTML = `<span class="type ${p.type}">${p.tipo}</span>`;
        if (p.tipo2 && p.type2) {
            tiposHTML += `<span class="type ${p.type2}">${p.tipo2}</span>`;
        }
        
        html += `
            <a href="${p.href || '#'}" class="pokeCardLink" style="text-decoration: none; color: inherit;">
                <div class="pokeCard">
                    <img src="../assets/img/pokeball.svg" alt="" class="pokeballimg">
                    <div class="pokeinfo">
                        <p class="numero">${formatearNumero(p.numero)}</p>
                        <p class="nombre">${p.nombre}</p>
                        ${p.img ? `<img src="${p.img}" class="pokeSprite" alt="${p.nombre}" loading="lazy">` : ''}
                        <div class="types">
                            ${tiposHTML}
                        </div>
                    </div>
                </div>
            </a>
        `;
    }
    pokelist.innerHTML = html;
}

function filtrarPokemons(termino) {
    termino = termino.toLowerCase().trim();
    
    if (termino === '') {
        return pokemons;
    }
    
    // Detectar si es búsqueda por tipo (#tipo)
    if (termino.startsWith('#')) {
        const tipoBuscado = termino.substring(1).toLowerCase();
        // Mapeo de tipos en español a inglés para comparar
        const tipoMap = {
            'normal': 'normal',
            'lucha': 'figth',
            'volador': 'flying',
            'veneno': 'poison',
            'tierra': 'ground',
            'roca': 'rock',
            'bicho': 'bug',
            'fantasma': 'ghost',
            'acero': 'steel',
            'fuego': 'fire',
            'agua': 'water',
            'planta': 'grass',
            'eléctrico': 'electric',
            'psíquico': 'psychic',
            'hielo': 'ice',
            'dragón': 'dragon',
            'siniestro': 'dark',
            'hada': 'fairy'
        };
        
        // Buscar por tipo en español o inglés
        return pokemons.filter(p => {
            const tipo1 = p.tipo ? p.tipo.toLowerCase() : '';
            const tipo2 = p.tipo2 ? p.tipo2.toLowerCase() : '';
            const type1 = p.type ? p.type.toLowerCase() : '';
            const type2 = p.type2 ? p.type2.toLowerCase() : '';
            
            // Buscar en español o en inglés
            return tipo1 === tipoBuscado || 
                   tipo2 === tipoBuscado ||
                   type1 === tipoBuscado || 
                   type2 === tipoBuscado ||
                   (tipoMap[tipoBuscado] && (type1 === tipoMap[tipoBuscado] || type2 === tipoMap[tipoBuscado]));
        });
    }
    
    // Búsqueda normal por nombre o número
    return pokemons.filter(p => 
        p.nombre.toLowerCase().includes(termino) ||
        p.numero.toString().includes(termino)
    );
}

searchInput.addEventListener('input', (e) => {
    const termino = e.target.value;
    const filtrados = filtrarPokemons(termino);
    
    if (filtrados.length === 0) {
        pokelist.innerHTML = `<div class="no-encontrado">🔍 Error de búsqueda: "${termino}" no encontrado</div>`;
    } else {
        renderizar(filtrados);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    renderizar();
});