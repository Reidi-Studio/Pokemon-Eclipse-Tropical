const item = document.getElementById('item');
const searchInput = document.getElementById('searchInput');

const list = [
    // ==========================================
    // MEDICINA (carpeta medicine/)
    // ==========================================
    {
        "tipo": "Medicina",
        "nombre": "Pocion",
        "img": "../assets/img/items/medicine/potion.png",
        "href": "../data/items/pocion.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Super Pocion",
        "img": "../assets/img/items/medicine/super-potion.png",
        "href": "../data/items/super-pocion.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Hyper Pocion",
        "img": "../assets/img/items/medicine/hyper-potion.png",
        "href": "../data/items/hyper-pocion.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Poción Máxima",
        "img": "../assets/img/items/medicine/max-potion.png",
        "href": "../data/items/pocion-maxima.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Restaurar Todo",
        "img": "../assets/img/items/medicine/full-restore.png",
        "href": "../data/items/restaurar-todo.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Antidoto",
        "img": "../assets/img/items/medicine/antidote.png",
        "href": "../data/items/antidoto.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Antiquemar",
        "img": "../assets/img/items/medicine/burn-heal.png",
        "href": "../data/items/antiquemar.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Antihielo",
        "img": "../assets/img/items/medicine/ice-heal.png",
        "href": "../data/items/antihielo.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Despertar",
        "img": "../assets/img/items/medicine/awakening.png",
        "href": "../data/items/despertar.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Antiparalizis",
        "img": "../assets/img/items/medicine/paralyze-heal.png",
        "href": "../data/items/antiparalizis.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Más PS",
        "img": "../assets/img/items/medicine/pp-up.png",
        "href": "../data/items/mas-ps.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Proteína",
        "img": "../assets/img/items/medicine/protein.png",
        "href": "../data/items/proteina.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Zinc",
        "img": "../assets/img/items/medicine/zinc.png",
        "href": "../data/items/zinc.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Hierro",
        "img": "../assets/img/items/medicine/iron.png",
        "href": "../data/items/hierro.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Calcio",
        "img": "../assets/img/items/medicine/calcium.png",
        "href": "../data/items/calcio.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Carburante",
        "img": "../assets/img/items/medicine/carbos.png",
        "href": "../data/items/carburante.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Más PP",
        "img": "../assets/img/items/medicine/pp-max.png",
        "href": "../data/items/mas-pp.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Revivir",
        "img": "../assets/img/items/medicine/revive.png",
        "href": "../data/items/revivir.html"
    },
    {
        "tipo": "Medicina",
        "nombre": "Revivir Máximo",
        "img": "../assets/img/items/medicine/max-revive.png",
        "href": "../data/items/revivir-maximo.html"
    },

    // ==========================================
    // POKEBALLS (carpeta ball/)
    // ==========================================
    {
        "tipo": "Pokeball",
        "nombre": "Pokeball",
        "img": "../assets/img/items/ball/poke.png",
        "href": "../data/items/pokeball.html"
    },
    {
        "tipo": "Pokeball",
        "nombre": "Pokeball Antigua",
        "img": "../assets/img/items/ball/hisuian-poke.png",
        "href": "../data/items/pokeball-antigua.html"
    },
    {
        "tipo": "Pokeball",
        "nombre": "Superball",
        "img": "../assets/img/items/ball/great.png",
        "href": "../data/items/superball.html"
    },
    {
        "tipo": "Pokeball",
        "nombre": "Ultraball",
        "img": "../assets/img/items/ball/ultra.png",
        "href": "../data/items/ultraball.html"
    },
    {
        "tipo": "Pokeball",
        "nombre": "Nivelball",
        "img": "../assets/img/items/ball/level.png",
        "href": "../data/items/nivelball.html"
    },
    {
        "tipo": "Pokeball",
        "nombre": "Ceboball",
        "img": "../assets/img/items/ball/lure.png",
        "href": "../data/items/ceboball.html"
    },
    {
        "tipo": "Pokeball",
        "nombre": "Lunaball",
        "img": "../assets/img/items/ball/moon.png",
        "href": "../data/items/lunaball.html"
    },
    {
        "tipo": "Pokeball",
        "nombre": "Amigoball",
        "img": "../assets/img/items/ball/friend.png",
        "href": "../data/items/amigoball.html"
    },
    {
        "tipo": "Pokeball",
        "nombre": "Amorball",
        "img": "../assets/img/items/ball/love.png",
        "href": "../data/items/amorball.html"
    },
    {
        "tipo": "Pokeball",
        "nombre": "Rapidball",
        "img": "../assets/img/items/ball/fast.png",
        "href": "../data/items/rapidball.html"
    },
    {
        "tipo": "Pokeball",
        "nombre": "Pesoball",
        "img": "../assets/img/items/ball/heavy.png",
        "href": "../data/items/pesoball.html"
    },
    {
        "tipo": "Pokeball",
        "nombre": "Buceoball",
        "img": "../assets/img/items/ball/dive.png",
        "href": "../data/items/buceoball.html"
    },
    {
        "tipo": "Pokeball",
        "nombre": "Mallaball",
        "img": "../assets/img/items/ball/net.png",
        "href": "../data/items/mallaball.html"
    },

    // ==========================================
    // BAYAS (carpeta berry/)
    // ==========================================
    {
        "tipo": "Baya",
        "nombre": "Baya Zreza",
        "img": "../assets/img/items/berry/cheri.png",
        "href": "../data/items/baya-zreza.html"
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Atania",
        "img": "../assets/img/items/berry/chesto.png",
        "href": "../data/items/baya-atania.html"
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Meloc",
        "img": "../assets/img/items/berry/pecha.png",
        "href": "../data/items/baya-meloc.html"
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Safre",
        "img": "../assets/img/items/berry/rawst.png",
        "href": "../data/items/baya-safre.html"
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Perasi",
        "img": "../assets/img/items/berry/aspear.png",
        "href": "../data/items/baya-perasi.html"
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Zanama",
        "img": "../assets/img/items/berry/leppa.png",
        "href": "../data/items/baya-zanma.html"
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Aranja",
        "img": "../assets/img/items/berry/oran.png",
        "href": "../data/items/baya-aranja.html"
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Caquic",
        "img": "../assets/img/items/berry/persim.png",
        "href": "../data/items/baya-caquic.html"
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Zidra",
        "img": "../assets/img/items/berry/sitrus.png",
        "href": "../data/items/baya-zidra.html"
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Guaya",
        "img": "../assets/img/items/berry/aguav.png",
        "href": "../data/items/baya-guaya.html"
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Frambu",
        "img": "../assets/img/items/berry/razz.png",
        "href": "../data/items/baya-frambu.html"
    },
    {
        "tipo": "Baya",
        "nombre": " Baya Latano",
        "img": "../assets/img/items/berry/nanab.png",
        "href": "../data/items/baya-latano.html"
    },
    {
        "tipo": "Baya",
        "nombre": " Baya Ispero",
        "img": "../assets/img/items/berry/qualot.png",
        "href": "../data/items/baya-ispero.html"
    },
    {
        "tipo": "Baya",
        "nombre": "Baya Mais",
        "img": "../assets/img/items/berry/cornn.png",
        "href": "../data/items/baya-mais.html"
    },

    // ==========================================
    // OBJETOS DE COMBATE (carpeta battle-item/)
    // ==========================================
    {
        "tipo": "Objeto de Combate",
        "nombre": "Velocidad X",
        "img": "../assets/img/items/battle-item/x-speed.png",
        "href": "../data/items/velocidad-x.html"
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "At. Esp. X",
        "img": "../assets/img/items/battle-item/x-sp-atk.png",
        "href": "../data/items/at-esp-x.html"
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "Ataque X",
        "img": "../assets/img/items/battle-item/x-attack.png",
        "href": "../data/items/ataque-x.html"
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "Defensa X",
        "img": "../assets/img/items/battle-item/x-defense.png",
        "href": "../data/items/defensa-x.html"
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "Def. Esp. X",
        "img": "../assets/img/items/battle-item/x-sp-def.png",
        "href": "../data/items/def-esp-x.html"
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "Crítico X",
        "img": "../assets/img/items/battle-item/x-hit.png",
        "href": "../data/items/critico-x.html"
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "Protección X",
        "img": "../assets/img/items/battle-item/guard-spec.png",
        "href": "../data/items/proteccion-x.html"
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "Precisión X",
        "img": "../assets/img/items/battle-item/x-accuracy.png",
        "href": "../data/items/precision-x.html"
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "Flauta Blanca",
        "img": "../assets/img/items/flute/white.png",
        "href": "../data/items/flauta-blanca.html"
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "Flauta Negra",
        "img": "../assets/img/items/flute/black.png",
        "href": "../data/items/flauta-negra.html"
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "Flauta Azul",
        "img": "../assets/img/items/flute/blue.png",
        "href": "../data/items/flauta-azul.html"
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "Flauta Roja",
        "img": "../assets/img/items/flute/red.png",
        "href": "../data/items/flauta-roja.html"
    },
    {
        "tipo": "Objeto de Combate",
        "nombre": "Flauta Amarilla",
        "img": "../assets/img/items/flute/yellow.png",
        "href": "../data/items/flauta-amarilla.html"
    },

    // ==========================================
    // OBJETOS CLAVE (carpeta key-item/)
    // ==========================================
    {
        "tipo": "Objeto Clave",
        "nombre": "Bicicleta",
        "img": "../assets/img/items/key-item/bicycle.png",
        "href": "../data/items/bicicleta.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Motocicleta",
        "img": "../assets/img/items/key-item/motorcycle.png",
        "href": "../data/items/motocicleta.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Caja de Apricorns",
        "img": "../assets/img/items/key-item/apricorn-box.png",
        "href": "../data/items/caja-de-apricorns.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Libro de Aventuras",
        "img": "../assets/img/items/key-item/adventure-rules.png",
        "href": "../data/items/libro-de-aventuras.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Bolsa de bayas",
        "img": "../assets/img/items/key-item/berry-pouch.png",
        "href": "../data/items/bolsa-de-bayas.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Apricorn Negro",
        "img": "../assets/img/items/apricorn/black.png",
        "href": "../data/items/apricorn-negro.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Apricorn Azul",
        "img": "../assets/img/items/apricorn/blue.png",
        "href": "../data/items/apricorn-azul.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Apricorn Verde",
        "img": "../assets/img/items/apricorn/green.png",
        "href": "../data/items/apricorn-verde.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Apricorn Rosado",
        "img": "../assets/img/items/apricorn/pink.png",
        "href": "../data/items/apricorn-rosado.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Apricorn Rojo",
        "img": "../assets/img/items/apricorn/red.png",
        "href": "../data/items/apricorn-rojo.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Apricorn Blanco",
        "img": "../assets/img/items/apricorn/white.png",
        "href": "../data/items/apricorn-blanco.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Apricorn Amarillo",
        "img": "../assets/img/items/apricorn/yellow.png",
        "href": "../data/items/apricorn-amarillo.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Monedero",
        "img": "../assets/img/items/key-item/coin-case.png",
        "href": "../data/items/monedero.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Caña de Vieja",
        "img": "../assets/img/items/key-item/old-rod.png",
        "href": "../data/items/cana-de-vieja.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Caña Buena",
        "img": "../assets/img/items/key-item/good-rod.png",
        "href": "../data/items/cana-buena.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Caja Atuendo",
        "img": "../assets/img/items/key-item/lens-case.png",
        "href": "../data/items/caja-atuendo.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Supercaña",
        "img": "../assets/img/items/key-item/super-rod.png",
        "href": "../data/items/supercana.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Regadera de Squirtle",
        "img": "../assets/img/items/key-item/squirt-bottle.png",
        "href": "../data/items/regadera-de-squirtle.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Casete de MT",
        "img": "../assets/img/items/key-item/tm-case.png",
        "href": "../data/items/casete-de-mt.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Té",
        "img": "../assets/img/items/key-item/tea.png",
        "href": "../data/items/te.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Buscapelea",
        "img": "../assets/img/items/key-item/vs-seeker.png",
        "href": "../data/items/buscapelea.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Diario",
        "img": "../assets/img/items/key-item/journal.png",
        "href": "../data/items/diario.html"
    },
    {
        "tipo": "Objeto Clave",
        "nombre": "Repartir Exp",
        "img": "../assets/img/items/key-item/exp-share.png",
        "href": "../data/items/repartir-exp.html"
    },

    // ==========================================
    // OBJETOS NORMALES (carpeta item/)
    // ==========================================
    {
        "tipo": "Objeto",
        "nombre": "Tela Terrible",
        "img": "../assets/img/items/item/terrible-cloth.png",
        "href": "../data/items/tela-terrible.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Lodo Negro",
        "img": "../assets/img/items/item/black-sludge.png",
        "href": "../data/items/lodo-negro.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Banda Focus",
        "img": "../assets/img/items/item/focus-band.png",
        "href": "../data/items/banda-focus.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Roca del Rey",
        "img": "../assets/img/items/item/kings-rock.png",
        "href": "../data/items/roca-del-rey.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Restos",
        "img": "../assets/img/items/item/leftovers.png",
        "href": "../data/items/restos.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Garra Rápida",
        "img": "../assets/img/items/item/quick-claw.png",
        "href": "../data/items/garra-rapida.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Colmillo Agudo",
        "img": "../assets/img/items/item/sharp-fang.png",
        "href": "../data/items/colmillo-agudo.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Colmillo de Dragón",
        "img": "../assets/img/items/item/dragon-fang.png",
        "href": "../data/items/colmillo-de-dragon.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Concha Campana",
        "img": "../assets/img/items/item/shell-bell.png",
        "href": "../data/items/concha-campana.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Pico Afilado",
        "img": "../assets/img/items/item/sharp-beak.png",
        "href": "../data/items/pico-afilado.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Flecha Venenosa",
        "img": "../assets/img/items/item/poison-barb.png",
        "href": "../data/items/flecha-venenosa.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Antiderretir",
        "img": "../assets/img/items/item/never-melt-ice.png",
        "href": "../data/items/antiderretir.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Hechizo",
        "img": "../assets/img/items/item/spell-tag.png",
        "href": "../data/items/hechizo.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Cuchara Torcida",
        "img": "../assets/img/items/item/twisted-spoon.png",
        "href": "../data/items/cuchara-torcida.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Pañuelo de Seda",
        "img": "../assets/img/items/item/silk-scarf.png",
        "href": "../data/items/panuelo-de-seda.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Eterna",
        "img": "../assets/img/items/item/everstone.png",
        "href": "../data/items/piedra-eterna.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Sem. Milagro",
        "img": "../assets/img/items/item/miracle-seed.png",
        "href": "../data/items/sem-milagro.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gafas de Sol",
        "img": "../assets/img/items/item/black-glasses.png",
        "href": "../data/items/gafas-de-sol.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Cinturon Negro",
        "img": "../assets/img/items/item/black-belt.png",
        "href": "../data/items/cinturon-negro.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Carbón",
        "img": "../assets/img/items/item/charcoal.png",
        "href": "../data/items/carbon.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Moneda Amuleto",
        "img": "../assets/img/items/item/amulet-coin.png",
        "href": "../data/items/moneda-amuleto.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Imán",
        "img": "../assets/img/items/item/magnet.png",
        "href": "../data/items/iman.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Agua Mística",
        "img": "../assets/img/items/item/mystic-water.png",
        "href": "../data/items/agua-mistica.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Arena Fina",
        "img": "../assets/img/items/item/soft-sand.png",
        "href": "../data/items/arena-fina.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Mejora",
        "img": "../assets/img/items/evo-item/up-grade.png",
        "href": "../data/items/mejora.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Hueso Raro",
        "img": "../assets/img/items/item/rare-bone.png",
        "href": "../data/items/hueso-raro.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Seta Grande",
        "img": "../assets/img/items/item/big-mushroom.png",
        "href": "../data/items/seta-grande.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Seta Pequeña",
        "img": "../assets/img/items/item/tiny-mushroom.png",
        "href": "../data/items/seta-pequena.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Pepita Grande",
        "img": "../assets/img/items/item/big-nugget.png",
        "href": "../data/items/pepita-grande.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Perla Grande",
        "img": "../assets/img/items/item/big-pearl.png",
        "href": "../data/items/perla-grande.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Alba",
        "img": "../assets/img/items/evo-item/dawn-stone.png",
        "href": "../data/items/piedra-alba.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Trueno",
        "img": "../assets/img/items/evo-item/thunder-stone.png",
        "href": "../data/items/piedra-trueno.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Fuego",
        "img": "../assets/img/items/evo-item/fire-stone.png",
        "href": "../data/items/piedra-fuego.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Hoja",
        "img": "../assets/img/items/evo-item/leaf-stone.png",
        "href": "../data/items/piedra-hoja.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Agua",
        "img": "../assets/img/items/evo-item/water-stone.png",
        "href": "../data/items/piedra-agua.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Solar",
        "img": "../assets/img/items/evo-item/sun-stone.png",
        "href": "../data/items/piedra-solar.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Lunar",
        "img": "../assets/img/items/evo-item/moon-stone.png",
        "href": "../data/items/piedra-lunar.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Día",
        "img": "../assets/img/items/evo-item/shiny-stone.png",
        "href": "../data/items/piedra-dia.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Noche",
        "img": "../assets/img/items/evo-item/dusk-stone.png",
        "href": "../data/items/piedra-noche.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Piedra Hielo",
        "img": "../assets/img/items/evo-item/ice-stone.png",
        "href": "../data/items/piedra-hielo.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Miel",
        "img": "../assets/img/items/item/honey.png",
        "href": "../data/items/miel.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Repelente Maximo",
        "img": "../assets/img/items/item/max-repel.png",
        "href": "../data/items/repelente-maximo.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Repelente",
        "img": "../assets/img/items/item/repel.png",
        "href": "../data/items/repelente.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Super Repelente",
        "img": "../assets/img/items/item/super-repel.png",
        "href": "../data/items/super-repelente.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Pepita",
        "img": "../assets/img/items/item/nugget.png",
        "href": "../data/items/pepita.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Ámbar Viejo",
        "img": "../assets/img/items/fossil/amber.png",
        "href": "../data/items/ambar-viejo.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Perla",
        "img": "../assets/img/items/item/pearl.png",
        "href": "../data/items/perla.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Estirla de Perlas",
        "img": "../assets/img/items/item/pearl-string.png",
        "href": "../data/items/estirla-de-perlas.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Poke Muñeco",
        "img": "../assets/img/items/item/poke-doll.png",
        "href": "../data/items/poke-muneco.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Cuerda Huida",
        "img": "../assets/img/items/item/escape-rope.png",
        "href": "../data/items/cuerda-huida.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Abono",
        "img": "../assets/img/items/item/growth.png",
        "href": "../data/items/abono.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Sal Marina",
        "img": "../assets/img/items/item/shoal-salt.png",
        "href": "../data/items/sal-marina.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Concha Marina",
        "img": "../assets/img/items/item/shoal-shell.png",
        "href": "../data/items/concha-marina.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Polvo Estrella",
        "img": "../assets/img/items/item/stardust.png",
        "href": "../data/items/polvo-estrella.html"
    },

    // ==========================================
    // FÓSILES (carpeta fossil/)
    // ==========================================
    {
        "tipo": "Objeto",
        "nombre": "Fósil Kabuto",
        "img": "../assets/img/items/fossil/helix.png",
        "href": "../data/items/fosil-kabuto.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Fósil Omanyte",
        "img": "../assets/img/items/fossil/dome.png",
        "href": "../data/items/fosil-omanyte.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Fósil Anorith",
        "img": "../assets/img/items/fossil/armor.png",
        "href": "../data/items/fosil-anorith.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Fósil Lileep",
        "img": "../assets/img/items/fossil/lileep.png",
        "href": "../data/items/fosil-lileep.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Fósil Cranidos",
        "img": "../assets/img/items/fossil/cranidos.png",
        "href": "../data/items/fosil-cranidos.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Fósil Shieldon",
        "img": "../assets/img/items/fossil/shieldon.png",
        "href": "../data/items/fosil-shieldon.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Fósil Tirtouga",
        "img": "../assets/img/items/fossil/tirtouga.png",
        "href": "../data/items/fosil-tirtouga.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Fósil Archen",
        "img": "../assets/img/items/fossil/archen.png",
        "href": "../data/items/fosil-archen.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Fósil Tyrunt",
        "img": "../assets/img/items/fossil/tyrunt.png",
        "href": "../data/items/fosil-tyrunt.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Fósil Amaura",
        "img": "../assets/img/items/fossil/amaura.png",
        "href": "../data/items/fosil-amaura.html"
    },

    // ==========================================
    // GEMAS (carpeta gem/)
    // ==========================================
    {
        "tipo": "Objeto",
        "nombre": "Gema Fuego",
        "img": "../assets/img/items/gem/fire.png",
        "href": "../data/items/gema-fuego.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gema Agua",
        "img": "../assets/img/items/gem/water.png",
        "href": "../data/items/gema-agua.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gema Planta",
        "img": "../assets/img/items/gem/grass.png",
        "href": "../data/items/gema-planta.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gema Eléctrica",
        "img": "../assets/img/items/gem/electric.png",
        "href": "../data/items/gema-electrica.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gema Hielo",
        "img": "../assets/img/items/gem/ice.png",
        "href": "../data/items/gema-hielo.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gema Lucha",
        "img": "../assets/img/items/gem/fighting.png",
        "href": "../data/items/gema-lucha.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gema Veneno",
        "img": "../assets/img/items/gem/poison.png",
        "href": "../data/items/gema-veneno.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gema Tierra",
        "img": "../assets/img/items/gem/ground.png",
        "href": "../data/items/gema-tierra.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gema Voladora",
        "img": "../assets/img/items/gem/flying.png",
        "href": "../data/items/gema-voladora.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gema Psíquica",
        "img": "../assets/img/items/gem/psychic.png",
        "href": "../data/items/gema-psiquica.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gema Bicho",
        "img": "../assets/img/items/gem/bug.png",
        "href": "../data/items/gema-bicho.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gema Roca",
        "img": "../assets/img/items/gem/rock.png",
        "href": "../data/items/gema-roca.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gema Fantasma",
        "img": "../assets/img/items/gem/ghost.png",
        "href": "../data/items/gema-fantasma.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gema Dragón",
        "img": "../assets/img/items/gem/dragon.png",
        "href": "../data/items/gema-dragon.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gema Siniestra",
        "img": "../assets/img/items/gem/dark.png",
        "href": "../data/items/gema-siniestra.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gema Acero",
        "img": "../assets/img/items/gem/steel.png",
        "href": "../data/items/gema-acero.html"
    },
    {
        "tipo": "Objeto",
        "nombre": "Gema Hada",
        "img": "../assets/img/items/gem/fairy.png",
        "href": "../data/items/gema-hada.html"
    },

    // ==========================================
    // COMIDA (carpeta food/)
    // ==========================================
    {
        "tipo": "Comida",
        "nombre": "Ensalada Mixta",
        "img": "../assets/img/items/food/salad-mix.png",
        "href": "../data/items/ensalada-mixta.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Salchichas",
        "img": "../assets/img/items/food/sausages.png",
        "href": "../data/items/salchichas.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Paquete de Papas",
        "img": "../assets/img/items/food/pack-of-potatoes.png",
        "href": "../data/items/patatas.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Curry Empaquetado",
        "img": "../assets/img/items/food/packaged-curry.png",
        "href": "../data/items/curry.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Hamburguesa Precocinada",
        "img": "../assets/img/items/food/precooked-burger.png",
        "href": "../data/items/hamburguesa.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Pasta",
        "img": "../assets/img/items/food/pasta.png",
        "href": "../data/items/pasta.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Fideos Instantaneos",
        "img": "../assets/img/items/food/instant-noodles.png",
        "href": "../data/items/fideos-instantaneos.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Leche en Polvo",
        "img": "../assets/img/items/food/powder-milk.png",
        "href": "../data/items/leche-en-polvo.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Leche Mu-Mu",
        "img": "../assets/img/items/food/moomoo-milk.png",
        "href": "../data/items/leche.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Carne de Tepig Asado",
        "img": "../assets/img/items/food/roast-tepig.png",
        "href": "../data/items/carne-de-tepig-asado.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Estofado de Tepig",
        "img": "../assets/img/items/food/tepig-stew.png",
        "href": "../data/items/estofado-de-tepig.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Farfetch'd Asado",
        "img": "../assets/img/items/food/roast-farfetchd.png",
        "href": "../data/items/farfetchd-asado.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Squirtle Rostizado",
        "img": "../assets/img/items/food/roast-squirtle.png",
        "href": "../data/items/squirtle-rostizado.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Estofado de Squirtle",
        "img": "../assets/img/items/food/squirtle-stew.png",
        "href": "../data/items/estofado-de-squirtle.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Bistec de Miltank",
        "img": "../assets/img/items/food/miltank-steak.png",
        "href": "../data/items/bistec-de-miltank.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Caldo de Res",
        "img": "../assets/img/items/food/beef-broth.png",
        "href": "../data/items/caldo-de-res.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Plátano Hervido",
        "img": "../assets/img/items/food/boiled-banana.png",
        "href": "../data/items/platano-hervido.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Plátano Frito",
        "img": "../assets/img/items/food/fried-banana.png",
        "href": "../data/items/platano-frito.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Pan con Timba",
        "img": "../assets/img/items/food/bread-with-timba.png",
        "href": "../data/items/pan-con-timba.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Hamburguesa",
        "img": "../assets/img/items/food/hamburger.png",
        "href": "../data/items/hamburguesa.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Pan con Croquetas",
        "img": "../assets/img/items/food/bread-with-croquettes.png",
        "href": "../data/items/pan-con-croquetas.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Hot-Dog",
        "img": "../assets/img/items/food/hot-dog.png",
        "href": "../data/items/hot-dog.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Pan con Hamburguesa",
        "img": "../assets/img/items/food/hamburger-bread.png",
        "href": "../data/items/pan-con-hamburguesa.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Bola de Arroz",
        "img": "../assets/img/items/food/rice-ball.png",
        "href": "../data/items/bola-de-arroz.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Bola de Arroz Frita",
        "img": "../assets/img/items/food/fried-rice-ball.png",
        "href": "../data/items/bola-de-arroz-frita.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Huevo Frito",
        "img": "../assets/img/items/food/fried-egg.png",
        "href": "../data/items/huevo-frito.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Huevo Hervido",
        "img": "../assets/img/items/food/boiled-egg.png",
        "href": "../data/items/huevo-duro.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Tortilla",
        "img": "../assets/img/items/food/omelette.png",
        "href": "../data/items/tortilla.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Cola Ahumada",
        "img": "../assets/img/items/food/smoke-poke-tail.png",
        "href": "../data/items/cola-ahumada.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Filete de Res Frito",
        "img": "../assets/img/items/food/fried-beef-steak.png",
        "href": "../data/items/filete-de-res-frito.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Confitura de Bayas",
        "img": "../assets/img/items/food/berry-jam.png",
        "href": "../data/items/confitura-de-bayas.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Mantequilla",
        "img": "../assets/img/items/food/butter.png",
        "href": "../data/items/mantequilla.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Nata Montada",
        "img": "../assets/img/items/food/whipped-cream.png",
        "href": "../data/items/nata-montada.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Queso Crema",
        "img": "../assets/img/items/food/cream-cheese.png",
        "href": "../data/items/queso-crema.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Bocadillo",
        "img": "../assets/img/items/food/sandwich.png",
        "href": "../data/items/bocadillo.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Queso Mu-Mu",
        "img": "../assets/img/items/food/mu-mu-cheese.png",
        "href": "../data/items/queso-mu-mu.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Curry",
        "img": "../assets/img/items/food/curry.png",
        "href": "../data/items/curry.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Patatas Fritas",
        "img": "../assets/img/items/food/french-fries.png",
        "href": "../data/items/patatas-fritas.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Frituras",
        "img": "../assets/img/items/food/fried-food.png",
        "href": "../data/items/frituras.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Aceite de Oliva",
        "img": "../assets/img/items/food/olive-oil.png",
        "href": "../data/items/aceite-de-oliva.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Vinagre",
        "img": "../assets/img/items/food/vinegar.png",
        "href": "../data/items/vinagre.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Especia Oculta Dulce",
        "img": "../assets/img/items/food/sweet-spice.png",
        "href": "../data/items/especia-oculta-dulce.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Especia Oculta Salada",
        "img": "../assets/img/items/food/salty-spice.png",
        "href": "../data/items/especia-oculta-salada.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Especia Oculta Ácida",
        "img": "../assets/img/items/food/sour-spice.png",
        "href": "../data/items/especia-oculta-acida.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Especia Oculta Amarga",
        "img": "../assets/img/items/food/bitter-spice.png",
        "href": "../data/items/especia-oculta-amarga.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Especia Oculta Picante",
        "img": "../assets/img/items/food/spicy-spice.png",
        "href": "../data/items/especia-oculta-picante.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Lechuga",
        "img": "../assets/img/items/food/lettuce.png",
        "href": "../data/items/lechuga.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Tomate",
        "img": "../assets/img/items/food/tomato.png",
        "href": "../data/items/tomate.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Tomate Cherry",
        "img": "../assets/img/items/food/cherry-tomato.png",
        "href": "../data/items/tomate-cherry.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Pepino",
        "img": "../assets/img/items/food/cucumber.png",
        "href": "../data/items/pepino.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Pepinillo",
        "img": "../assets/img/items/food/pickle.png",
        "href": "../data/items/pepinillo.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Cebolla",
        "img": "../assets/img/items/food/onion.png",
        "href": "../data/items/cebolla.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Cebolla Roja",
        "img": "../assets/img/items/food/red-onion.png",
        "href": "../data/items/cebolla-roja.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Pimiento Verde",
        "img": "../assets/img/items/food/green-pepper.png",
        "href": "../data/items/pimiento-verde.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Pimiento Rojo",
        "img": "../assets/img/items/food/red-pepper.png",
        "href": "../data/items/pimiento-rojo.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Pimiento Amarillo",
        "img": "../assets/img/items/food/yellow-pepper.png",
        "href": "../data/items/pimiento-amarillo.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Aguacate",
        "img": "../assets/img/items/food/avocado.png",
        "href": "../data/items/aguacate.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Panceta",
        "img": "../assets/img/items/food/bacon.png",
        "href": "../data/items/panceta.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Jamón Cocido",
        "img": "../assets/img/items/food/cooked-ham.png",
        "href": "../data/items/jamon-cocido.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Jamón Serrano",
        "img": "../assets/img/items/food/serrano-ham.png",
        "href": "../data/items/jamon-serrano.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Chorizo",
        "img": "../assets/img/items/food/chorizo.png",
        "href": "../data/items/chorizo.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Butifarra",
        "img": "../assets/img/items/food/butifarra.png",
        "href": "../data/items/butifarra.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Filete Ahumado",
        "img": "../assets/img/items/food/smoked-steak.png",
        "href": "../data/items/filete-ahumado.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Filete Frito",
        "img": "../assets/img/items/food/fried-steak.png",
        "href": "../data/items/filete-frito.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Tofu",
        "img": "../assets/img/items/food/tofu.png",
        "href": "../data/items/tofu.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Arroz",
        "img": "../assets/img/items/food/rice.png",
        "href": "../data/items/arroz.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Fideos",
        "img": "../assets/img/items/food/noodles.png",
        "href": "../data/items/fideos.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Ensaladilla",
        "img": "../assets/img/items/food/salad.png",
        "href": "../data/items/ensaladilla.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Queso",
        "img": "../assets/img/items/food/cheese.png",
        "href": "../data/items/queso.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Plátano",
        "img": "../assets/img/items/food/banana.png",
        "href": "../data/items/platano.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Piña",
        "img": "../assets/img/items/food/pineapple.png",
        "href": "../data/items/pina.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Jalapeño",
        "img": "../assets/img/items/food/jalapeno.png",
        "href": "../data/items/jalapeno.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Berros",
        "img": "../assets/img/items/food/watercress.png",
        "href": "../data/items/berros.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Albahaca",
        "img": "../assets/img/items/food/basil.png",
        "href": "../data/items/albahaca.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Crema de Cacahuate",
        "img": "../assets/img/items/food/peanut-butter.png",
        "href": "../data/items/crema-de-cacahuate.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Kit de Pokecubos",
        "img": "../assets/img/items/food/pokeblock-kit.png",
        "href": "../data/items/kit-de-pokecubos.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Globo Helio",
        "img": "../assets/img/items/food/helium-balloon.png",
        "href": "../data/items/globo-helio.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Pila",
        "img": "../assets/img/items/food/battery.png",
        "href": "../data/items/pila.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Lata de Darren",
        "img": "../assets/img/items/food/darren-can.png",
        "href": "../data/items/lata-de-darren.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Lata de Bach",
        "img": "../assets/img/items/food/bach-can.png",
        "href": "../data/items/lata-de-bach.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Lata de Habas",
        "img": "../assets/img/items/food/beans-can.png",
        "href": "../data/items/lata-de-habas.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Hierba Intensa",
        "img": "../assets/img/items/food/intense-herb.png",
        "href": "../data/items/hierba-intensa.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Verduras",
        "img": "../assets/img/items/food/vegetables.png",
        "href": "../data/items/verduras.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Especias",
        "img": "../assets/img/items/food/spices.png",
        "href": "../data/items/especias.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Curry Embasado",
        "img": "../assets/img/items/food/canned-curry.png",
        "href": "../data/items/curry-embasado.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Mayonesa",
        "img": "../assets/img/items/food/mayonnaise.png",
        "href": "../data/items/mayonesa.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Kétchup",
        "img": "../assets/img/items/food/ketchup.png",
        "href": "../data/items/ketchup.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Mostaza",
        "img": "../assets/img/items/food/mustard.png",
        "href": "../data/items/mostaza.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Salsa Picante",
        "img": "../assets/img/items/food/hot-sauce.png",
        "href": "../data/items/salsa-picante.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Sal",
        "img": "../assets/img/items/food/salt.png",
        "href": "../data/items/sal.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Pimienta",
        "img": "../assets/img/items/food/pepper.png",
        "href": "../data/items/pimienta.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Yogur",
        "img": "../assets/img/items/food/yogurt.png",
        "href": "../data/items/yogur.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Mermelada",
        "img": "../assets/img/items/food/jam.png",
        "href": "../data/items/mermelada.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Helado de Chocolate",
        "img": "../assets/img/items/food/chocolate-ice-cream.png",
        "href": "../data/items/helado-de-chocolate.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Helado de Fresa",
        "img": "../assets/img/items/food/strawberry-ice-cream.png",
        "href": "../data/items/helado-de-fresa.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Helado de Vainilla",
        "img": "../assets/img/items/food/vanilla-ice-cream.png",
        "href": "../data/items/helado-de-vainilla.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Helado de Café con Leche",
        "img": "../assets/img/items/food/coffee-ice-cream.png",
        "href": "../data/items/helado-de-cafe-con-leche.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Helado de Plátano",
        "img": "../assets/img/items/food/banana-ice-cream.png",
        "href": "../data/items/helado-de-platano.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Helado de Malta (Legendario)",
        "img": "../assets/img/items/food/malta-ice-cream.png",
        "href": "../data/items/helado-de-malta.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Helado de Frutas",
        "img": "../assets/img/items/food/fruit-ice-cream.png",
        "href": "../data/items/helado-de-frutas.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Helado de Pistacho",
        "img": "../assets/img/items/food/pistachio-ice-cream.png",
        "href": "../data/items/helado-de-pistacho.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Helado de Naranja Piña",
        "img": "../assets/img/items/food/orange-pineapple-ice-cream.png",
        "href": "../data/items/helado-de-naranja-pina.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Helado de Uva",
        "img": "../assets/img/items/food/grape-ice-cream.png",
        "href": "../data/items/helado-de-uva.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Bocadito de Helado",
        "img": "../assets/img/items/food/ice-cream-sandwich.png",
        "href": "../data/items/bocadito-de-helado.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Malteada",
        "img": "../assets/img/items/food/milkshake.png",
        "href": "../data/items/malteada.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Leche Condensada",
        "img": "../assets/img/items/food/condensed-milk.png",
        "href": "../data/items/leche-condensada.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Bol de Ramen",
        "img": "../assets/img/items/food/ramen-bowl.png",
        "href": "../data/items/bol-de-ramen.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Sushi",
        "img": "../assets/img/items/food/sushi.png",
        "href": "../data/items/sushi.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Takoyaki",
        "img": "../assets/img/items/food/takoyaki.png",
        "href": "../data/items/takoyaki.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Sashimi",
        "img": "../assets/img/items/food/sashimi.png",
        "href": "../data/items/sashimi.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Tempura",
        "img": "../assets/img/items/food/tempura.png",
        "href": "../data/items/tempura.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Onigiri",
        "img": "../assets/img/items/food/onigiri.png",
        "href": "../data/items/onigiri.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Pollo Piki Shiki",
        "img": "../assets/img/items/food/piki-shiki-chicken.png",
        "href": "../data/items/pollo-piki-shiki.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Pollo Empanizado",
        "img": "../assets/img/items/food/breaded-chicken.png",
        "href": "../data/items/pollo-empanizado.html"
    },
    {
        "tipo": "Comida",
        "nombre": "TuCola (Raro)",
        "img": "../assets/img/items/food/tucola.png",
        "href": "../data/items/tucola.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Malta Bucanero (Épica)",
        "img": "../assets/img/items/food/bucanero-malta.png",
        "href": "../data/items/malta-bucanero.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Malta Kara",
        "img": "../assets/img/items/food/kara-malta.png",
        "href": "../data/items/malta-kara.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Malta Three Horses (Legendaria)",
        "img": "../assets/img/items/food/three-horses-malta.png",
        "href": "../data/items/malta-three-horses.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Malta Belga Star",
        "img": "../assets/img/items/food/belga-star-malta.png",
        "href": "../data/items/malta-belga-star.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Malta Ligre (Raro)",
        "img": "../assets/img/items/food/ligre-malta.png",
        "href": "../data/items/malta-ligre.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Malta Sunshine",
        "img": "../assets/img/items/food/sunshine-malta.png",
        "href": "../data/items/malta-sunshine.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Malta Guajira",
        "img": "../assets/img/items/food/guajira-malta.png",
        "href": "../data/items/malta-guajira.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Malta Guajira de Medio L (Rara)",
        "img": "../assets/img/items/food/guajira-medium-malta.png",
        "href": "../data/items/malta-guajira-medio-l.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Malta Unlager",
        "img": "../assets/img/items/food/unlager-malta.png",
        "href": "../data/items/malta-unlager.html"
    },
    {
        "tipo": "Comida",
        "nombre": "SantaCola",
        "img": "../assets/img/items/food/santacola.png",
        "href": "../data/items/santacola.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Refresco Cachito (Raro)",
        "img": "../assets/img/items/food/cachito-soda.png",
        "href": "../data/items/refresco-cachito.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Refresco Piña",
        "img": "../assets/img/items/food/pineapple-soda.png",
        "href": "../data/items/refresco-pina.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Refresco de Limón",
        "img": "../assets/img/items/food/lemon-soda.png",
        "href": "../data/items/refresco-de-limon.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Jugo de Manzana en Lata",
        "img": "../assets/img/items/food/apple-juice-can.png",
        "href": "../data/items/jugo-de-manzana-en-lata.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Jugo de Pera en Lata",
        "img": "../assets/img/items/food/pear-juice-can.png",
        "href": "../data/items/jugo-de-pera-en-lata.html"
    },
    {
        "tipo": "Comida",
        "nombre": "Jugo de Mango en Lata (Épico)",
        "img": "../assets/img/items/food/mango-juice-can.png",
        "href": "../data/items/jugo-de-mango-en-lata.html"
    },

    // ==========================================
    // MATERIAL ANTIAPAGÓN
    // ==========================================
    {
        "tipo": "Material antiapagon",
        "nombre": "EcoFlow Pequeña",
        "img": "../assets/img/items/others/ecoflow-small.png",
        "href": "../data/items/ecoflow-pequena.html"
    },
    {
        "tipo": "Material antiapagon",
        "nombre": "EcoFlow Grande",
        "img": "../assets/img/items/others/ecoflow-large.png",
        "href": "../data/items/ecoflow-grande.html"
    },
    {
        "tipo": "Material antiapagon",
        "nombre": "Planta de Gasolina",
        "img": "../assets/img/items/others/gasoline-plant.png",
        "href": "../data/items/planta-de-gasolina.html"
    }
];

function renderizar(datosAMostrar = null) {
    const datos = datosAMostrar || list;
    
    let html = '';
    for (const g of datos) {
        html += `
            <a href="${g.href}" class="pokeCardLink" style="text-decoration: none; color: inherit;">
                <div class="pokeCard">
                    <img src="../assets/img/pokeball.svg" alt="" class="pokeballimg">
                    <div class="pokeinfo">
                        <p class="numero">${g.tipo}</p>
                        <p class="nombre">${g.nombre}</p>
                        ${g.img ? `<img src="${g.img}" class="pokeSprite" alt="${g.nombre}" loading="lazy">` : ''}
                    </div>
                </div>
            </a>
        `;
    }
    item.innerHTML = html;
}

// BÚSQUEDA
searchInput.addEventListener('input', (e) => {
    const termino = e.target.value.toLowerCase().trim();
    
    if (termino === '') {
        renderizar();
        return;
    }
    
    const filtrados = list.filter(g => 
        g.nombre.toLowerCase().includes(termino) ||
        g.tipo.toLowerCase().includes(termino) 
    );
    
    if (filtrados.length === 0) {
        item.innerHTML = `<div class="no-encontrado">🔍 No se encontró "${termino}"</div>`;
    } else {
        renderizar(filtrados);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    renderizar();
});