
const pokelist = document.getElementById('pokeList');

const pokemons = [
	{
		"numero": 1,
		"nombre": "Tepig"
	},
	{
		"numero": 2,
		"nombre": "Pignite"
	},
	{
		"numero": 3,
		"nombre": "Emboar"
	},
	{
		"numero": 4,
		"nombre": "Squirtle"
	},
	{
		"numero": 5,
		"nombre": "Wartortle"
	},
	{
		"numero": 6,
		"nombre": "Blastoise"
	},
	{
		"numero": 7,
		"nombre": "Sprigatitto"
	},
	{
		"numero": 8,
		"nombre": "Florgato"
	},
	{
		"numero": 9,
		"nombre": "Meowscarada"
	},
	{
		"numero": 10,
		"nombre": "Pichu"
	},
	{
		"numero": 11,
		"nombre": "Pikachu"
	},
	{
		"numero": 12,
		"nombre": "Raichu"
	},
	{
		"numero": 13,
		"nombre": "Sandile"
	},
	{
		"numero": 14,
		"nombre": "Krokorok"
	},
	{
		"numero": 15,
		"nombre": "Krookodile"
	},
	{
		"numero": 16,
		"nombre": "Starly"
	},
	{
		"numero": 17,
		"nombre": "Starvia"
	},
	{
		"numero": 18,
		"nombre": "Staraptor"
	},
	{
		"numero": 19,
		"nombre": "Treecko"
	},
	{
		"numero": 20,
		"nombre": "Grovyle"
	},
	{
		"numero": 21,
		"nombre": "Sceptile"
	},
	{
		"numero": 22,
		"nombre": "Caterpie"
	},
	{
		"numero": 23,
		"nombre": "Metapod"
	},
	{
		"numero": 24,
		"nombre": "Butterfree"
	},
	{
		"numero": 25,
		"nombre": "Pidgey"
	},
	{
		"numero": 26,
		"nombre": "Pidgeotto"
	},
	{
		"numero": 27,
		"nombre": "Pidgeot"
	},
	{
		"numero": 28,
		"nombre": "Spearow"
	},
	{
		"numero": 29,
		"nombre": "Fearrow"
	},
	{
		"numero": 30,
		"nombre": "Ekans"
	},
	{
		"numero": 31,
		"nombre": "Arbok"
	},
	{
		"numero": 32,
		"nombre": "Sandrew"
	},
	{
		"numero": 33,
		"nombre": "Sandslash"
	},
	{
		"numero": 34,
		"nombre": "Nidoran ♀️"
	},
	{
		"numero": 35,
		"nombre": "Nidorina"
	},
	{
		"numero": 36,
		"nombre": "Nidoqueen"
	},
	{
		"numero": 37,
		"nombre": "Nidoran♂"
	},
	{
		"numero": 38,
		"nombre": "Nidorino"
	},
	{
		"numero": 39,
		"nombre": "Nidoking"
	},
	{
		"numero": 40,
		"nombre": "Zubat"
	},
	{
		"numero": 41,
		"nombre": "Golbat"
	},
	{
		"numero": 42,
		"nombre": "Crobat"
	},
	{
		"numero": 43,
		"nombre": "Oddish"
	},
	{
		"numero": 44,
		"nombre": "Gloom"
	},
	{
		"numero": 45,
		"nombre": "Vileplume"
	},
	{
		"numero": 46,
		"nombre": "Bellossom"
	},
	{
		"numero": 47,
		"nombre": "Paras"
	},
	{
		"numero": 48,
		"nombre": "Parasect"
	},
	{
		"numero": 49,
		"nombre": "Meowth"
	},
	{
		"numero": 50,
		"nombre": "Persian"
	},
	{
		"numero": 51,
		"nombre": "Diglett"
	},
	{
		"numero": 52,
		"nombre": "Dugtrio"
	},
	{
		"numero": 53,
		"nombre": "Psyduck"
	},
	{
		"numero": 54,
		"nombre": "Golduck"
	},
	{
		"numero": 55,
		"nombre": "Growlithe"
	},
	{
		"numero": 56,
		"nombre": "Arcanine"
	},
	{
		"numero": 57,
		"nombre": "Mankey"
	},
	{
		"numero": 58,
		"nombre": "Primeape"
	},
	{
		"numero": 59,
		"nombre": "Poliwag"
	},
	{
		"numero": 60,
		"nombre": "Poliwhirl"
	},
	{
		"numero": 61,
		"nombre": "Poliwrath"
	},
	{
		"numero": 62,
		"nombre": "Politoed"
	},
	{
		"numero": 63,
		"nombre": "Abra"
	},
	{
		"numero": 64,
		"nombre": "Kadabra"
	},
	{
		"numero": 65,
		"nombre": "Alakazam"
	},
	{
		"numero": 66,
		"nombre": "Machop"
	},
	{
		"numero": 67,
		"nombre": "Machoke"
	},
	{
		"numero": 68,
		"nombre": "Machamp"
	},
	{
		"numero": 69,
		"nombre": "Bellsprout"
	},
	{
		"numero": 70,
		"nombre": "Weepinbell"
	},
	{
		"numero": 71,
		"nombre": "Victreebel"
	},
	{
		"numero": 72,
		"nombre": "Geodude"
	},
	{
		"numero": 73,
		"nombre": "Graveler"
	},
	{
		"numero": 74,
		"nombre": "Golem"
	},
	{
		"numero": 75,
		"nombre": "Magnemite"
	},
	{
		"numero": 76,
		"nombre": "Magneton"
	},
	{
		"numero": 77,
		"nombre": "Galarian Farfetch'd"
	},
	{
		"numero": 78,
		"nombre": "Sirfetch'd"
	},
	{
		"numero": 79,
		"nombre": "Doduo"
	},
	{
		"numero": 80,
		"nombre": "Dodrio"
	},
	{
		"numero": 81,
		"nombre": "Grimer"
	},
	{
		"numero": 82,
		"nombre": "Muk"
	},
	{
		"numero": 83,
		"nombre": "Shellder"
	},
	{
		"numero": 84,
		"nombre": "Cloyster"
	},
	{
		"numero": 85,
		"nombre": "Gastly"
	},
	{
		"numero": 86,
		"nombre": "Haunter"
	},
	{
		"numero": 87,
		"nombre": "Gengar"
	},
	{
		"numero": 88,
		"nombre": "Onix"
	},
	{
		"numero": 89,
		"nombre": "Steelix"
	},
	{
		"numero": 90,
		"nombre": "Krabby"
	},
	{
		"numero": 91,
		"nombre": "Kingler"
	},
	{
		"numero": 92,
		"nombre": "Hisuian Voltorb"
	},
	{
		"numero": 93,
		"nombre": "Hisuian Electrode"
	},
	{
		"numero": 94,
		"nombre": "Exeggcute"
	},
	{
		"numero": 95,
		"nombre": "Exeggutor"
	},
	{
		"numero": 96,
		"nombre": "Cubone"
	},
	{
		"numero": 97,
		"nombre": "Marowak"
	},
	{
		"numero": 98,
		"nombre": "Lickitung"
	},
	{
		"numero": 99,
		"nombre": "Koffing"
	},
	{
		"numero": 100,
		"nombre": "Weezing"
	},
	{
		"numero": 101,
		"nombre": "Happiny"
	},
	{
		"numero": 102,
		"nombre": "Chansey"
	},
	{
		"numero": 103,
		"nombre": "Blissey"
	},
	{
		"numero": 104,
		"nombre": "Kangaskhan"
	},
	{
		"numero": 105,
		"nombre": "Horsea"
	},
	{
		"numero": 106,
		"nombre": "Seadra"
	},
	{
		"numero": 107,
		"nombre": "Kingdra"
	},
	{
		"numero": 108,
		"nombre": "Goldeen"
	},
	{
		"numero": 109,
		"nombre": "Seaking"
	},
	{
		"numero": 110,
		"nombre": "Magby"
	},
	{
		"numero": 111,
		"nombre": "Magmar"
	},
	{
		"numero": 112,
		"nombre": "Magmortar"
	},
	{
		"numero": 113,
		"nombre": "Pinsir"
	},
	{
		"numero": 114,
		"nombre": "Tauros"
	},
	{
		"numero": 115,
		"nombre": "Magikarp"
	},
	{
		"numero": 116,
		"nombre": "Gyarados"
	},
	{
		"numero": 117,
		"nombre": "Lapras"
	},
	{
		"numero": 118,
		"nombre": "Ditto"
	},
	{
		"numero": 119,
		"nombre": "Eevee"
	},
	{
		"numero": 120,
		"nombre": "Vaporeon"
	},
	{
		"numero": 121,
		"nombre": "Flareon"
	},
	{
		"numero": 122,
		"nombre": "Jolteon"
	},
	{
		"numero": 123,
		"nombre": "Espeon"
	},
	{
		"numero": 124,
		"nombre": "Umbreon"
	},
	{
		"numero": 125,
		"nombre": "Leafeon"
	},
	{
		"numero": 126,
		"nombre": "Glaceon"
	},
	{
		"numero": 127,
		"nombre": "Sylveon"
	},
	{
		"numero": 128,
		"nombre": "Porygon"
	},
	{
		"numero": 129,
		"nombre": "Kabuto"
	},
	{
		"numero": 130,
		"nombre": "Kabutops"
	},
	{
		"numero": 131,
		"nombre": "Omanyte"
	},
	{
		"numero": 132,
		"nombre": "Omastar"
	},
	{
		"numero": 133,
		"nombre": "Moltres"
	},
	{
		"numero": 134,
		"nombre": "Articuno"
	},
	{
		"numero": 135,
		"nombre": "Zapdos"
	},
	{
		"numero": 136,
		"nombre": "Cyndaquil"
	},
	{
		"numero": 137,
		"nombre": "Quilava"
	},
	{
		"numero": 138,
		"nombre": "Typhlosion"
	},
	{
		"numero": 139,
		"nombre": "Totodile"
	},
	{
		"numero": 140,
		"nombre": "Croconaw"
	},
	{
		"numero": 141,
		"nombre": "Feraligatr"
	},
	{
		"numero": 142,
		"nombre": "Sentret"
	},
	{
		"numero": 143,
		"nombre": "Furret"
	},
	{
		"numero": 144,
		"nombre": "Hoothoot"
	},
	{
		"numero": 145,
		"nombre": "Noctowl"
	},
	{
		"numero": 146,
		"nombre": "Azurill"
	},
	{
		"numero": 147,
		"nombre": "Marill"
	},
	{
		"numero": 148,
		"nombre": "Azumarill"
	},
	{
		"numero": 149,
		"nombre": "Bonsly"
	},
	{
		"numero": 150,
		"nombre": "Sudowoodo"
	},
	{
		"numero": 151,
		"nombre": "Sunkern"
	},
	{
		"numero": 152,
		"nombre": "Sunflora"
	},
	{
		"numero": 153,
		"nombre": "Aipom"
	},
	{
		"numero": 154,
		"nombre": "Ambipom"
	},
	{
		"numero": 155,
		"nombre": "Yanma"
	},
	{
		"numero": 156,
		"nombre": "Wooper"
	},
	{
		"numero": 157,
		"nombre": "Quagsire"
	},
	{
		"numero": 158,
		"nombre": "Pineco"
	},
	{
		"numero": 159,
		"nombre": "Forretress"
	},
	{
		"numero": 160,
		"nombre": "Snubbull"
	},
	{
		"numero": 161,
		"nombre": "Granbull"
	},
	{
		"numero": 162,
		"nombre": "Heracross"
	},
	{
		"numero": 163,
		"nombre": "Teddiursa"
	},
	{
		"numero": 164,
		"nombre": "Ursaring"
	},
	{
		"numero": 165,
		"nombre": "Shuckle"
	},
	{
		"numero": 166,
		"nombre": "Slugma"
	},
	{
		"numero": 167,
		"nombre": "Magcargo"
	},
	{
		"numero": 168,
		"nombre": "Swinub"
	},
	{
		"numero": 169,
		"nombre": "Piloswine"
	},
	{
		"numero": 170,
		"nombre": "Galarian Corsola"
	},
	{
		"numero": 171,
		"nombre": "Cursola"
	},
	{
		"numero": 172,
		"nombre": "Houndour"
	},
	{
		"numero": 173,
		"nombre": "Houndoom"
	},
	{
		"numero": 174,
		"nombre": "Phanpy"
	},
	{
		"numero": 175,
		"nombre": "Donphan"
	},
	{
		"numero": 176,
		"nombre": "Stantler"
	},
	{
		"numero": 177,
		"nombre": "Tyrogue"
	},
	{
		"numero": 178,
		"nombre": "Hitmonlee"
	},
	{
		"numero": 179,
		"nombre": "Hitmonchan"
	},
	{
		"numero": 180,
		"nombre": "Hitmontop"
	},
	{
		"numero": 181,
		"nombre": "Miltank"
	},
	{
		"numero": 182,
		"nombre": "Larvitar"
	},
	{
		"numero": 183,
		"nombre": "Pupitar"
	},
	{
		"numero": 184,
		"nombre": "Tyranitar"
	},
	{
		"numero": 185,
		"nombre": "Torchic"
	},
	{
		"numero": 186,
		"nombre": "Combusken"
	},
	{
		"numero": 187,
		"nombre": "Blaziken"
	},
	{
		"numero": 188,
		"nombre": "Mudkip"
	},
	{
		"numero": 189,
		"nombre": "Marshtomp"
	},
	{
		"numero": 190,
		"nombre": "Swampert"
	},
	{
		"numero": 191,
		"nombre": "Poochyena"
	},
	{
		"numero": 192,
		"nombre": "Mightyena"
	},
	{
		"numero": 193,
		"nombre": "Zigzagoon"
	},
	{
		"numero": 194,
		"nombre": "Linoone"
	},
	{
		"numero": 195,
		"nombre": "Lotad"
	},
	{
		"numero": 196,
		"nombre": "Lombre"
	},
	{
		"numero": 197,
		"nombre": "Ludicolo"
	},
	{
		"numero": 198,
		"nombre": "Seedot"
	},
	{
		"numero": 199,
		"nombre": "Nuzleaf"
	},
	{
		"numero": 200,
		"nombre": "Shiftry"
	},
	{
		"numero": 201,
		"nombre": "Ralts"
	},
	{
		"numero": 202,
		"nombre": "Kirlia"
	},
	{
		"numero": 203,
		"nombre": "Gardevoir"
	},
	{
		"numero": 204,
		"nombre": "Shroomish"
	},
	{
		"numero": 205,
		"nombre": "Breloom"
	},
	{
		"numero": 206,
		"nombre": "Slakoth"
	},
	{
		"numero": 207,
		"nombre": "Vigoroth"
	},
	{
		"numero": 208,
		"nombre": "Slaking"
	},
	{
		"numero": 209,
		"nombre": "Nincada"
	},
	{
		"numero": 210,
		"nombre": "Ninjask"
	},
	{
		"numero": 211,
		"nombre": "Makuhita"
	},
	{
		"numero": 212,
		"nombre": "Hariyama"
	},
	{
		"numero": 213,
		"nombre": "Aron"
	},
	{
		"numero": 214,
		"nombre": "Lairon"
	},
	{
		"numero": 215,
		"nombre": "Aggron"
	},
	{
		"numero": 216,
		"nombre": "Meditite"
	},
	{
		"numero": 217,
		"nombre": "Medicham"
	},
	{
		"numero": 218,
		"nombre": "Electrike"
	},
	{
		"numero": 219,
		"nombre": "Manectric"
	},
	{
		"numero": 220,
		"nombre": "Plusle"
	},
	{
		"numero": 221,
		"nombre": "Minun"
	},
	{
		"numero": 222,
		"nombre": "Volbeat"
	},
	{
		"numero": 223,
		"nombre": "Illumise"
	},
	{
		"numero": 224,
		"nombre": "Gulpin"
	},
	{
		"numero": 225,
		"nombre": "Swalot"
	},
	{
		"numero": 226,
		"nombre": "Carvanha"
	},
	{
		"numero": 227,
		"nombre": "Sharpedo"
	},
	{
		"numero": 228,
		"nombre": "Wailmer"
	},
	{
		"numero": 229,
		"nombre": "Wailord"
	},
	{
		"numero": 230,
		"nombre": "Numel"
	},
	{
		"numero": 231,
		"nombre": "Camerupt"
	},
	{
		"numero": 232,
		"nombre": "Torkoal"
	},
	{
		"numero": 233,
		"nombre": "Spinda"
	},
	{
		"numero": 234,
		"nombre": "Trapinch"
	},
	{
		"numero": 235,
		"nombre": "Vibrava"
	},
	{
		"numero": 236,
		"nombre": "Flygon"
	},
	{
		"numero": 237,
		"nombre": "Cacnea"
	},
	{
		"numero": 238,
		"nombre": "Cacturne"
	},
	{
		"numero": 239,
		"nombre": "Corphish"
	},
	{
		"numero": 240,
		"nombre": "Crawdaunt"
	},
	{
		"numero": 241,
		"nombre": "Anorith"
	},
	{
		"numero": 242,
		"nombre": "Armaldo"
	},
	{
		"numero": 243,
		"nombre": "Feebas"
	},
	{
		"numero": 244,
		"nombre": "Milotic"
	},
	{
		"numero": 245,
		"nombre": "Duskull"
	},
	{
		"numero": 246,
		"nombre": "Dusclops"
	},
	{
		"numero": 247,
		"nombre": "Tropius"
	},
	{
		"numero": 248,
		"nombre": "Chimecho"
	},
	{
		"numero": 249,
		"nombre": "Spheal"
	},
	{
		"numero": 250,
		"nombre": "Beldum"
	},
	{
		"numero": 251,
		"nombre": "Metang"
	},
	{
		"numero": 252,
		"nombre": "Metagross"
	},
	{
		"numero": 253,
		"nombre": "Deoxys"
	},
	{
		"numero": 254,
		"nombre": "Shinx"
	},
	{
		"numero": 255,
		"nombre": "Luxio"
	},
	{
		"numero": 256,
		"nombre": "Luxray"
	},
	{
		"numero": 257,
		"nombre": "Shieldon"
	},
	{
		"numero": 258,
		"nombre": "Bastiodon"
	},
	{
		"numero": 259,
		"nombre": "Combee"
	},
	{
		"numero": 260,
		"nombre": "Vespiquen"
	},
	{
		"numero": 261,
		"nombre": "Buizel"
	},
	{
		"numero": 262,
		"nombre": "Floatzel"
	},
	{
		"numero": 263,
		"nombre": "Buneary"
	},
	{
		"numero": 264,
		"nombre": "Lopunny"
	},
	{
		"numero": 265,
		"nombre": "Munchlax"
	},
	{
		"numero": 266,
		"nombre": "Snorlax"
	},
	{
		"numero": 267,
		"nombre": "Riolu"
	},
	{
		"numero": 268,
		"nombre": "Lucario"
	},
	{
		"numero": 269,
		"nombre": "Skorupi"
	},
	{
		"numero": 270,
		"nombre": "Drapion"
	},
	{
		"numero": 271,
		"nombre": "Croagunk"
	},
	{
		"numero": 272,
		"nombre": "Toxicroak"
	},
	{
		"numero": 273,
		"nombre": "Carnivine"
	},
	{
		"numero": 274,
		"nombre": "Rotom"
	},
	{
		"numero": 275,
		"nombre": "Snivy"
	},
	{
		"numero": 276,
		"nombre": "Servine"
	},
	{
		"numero": 277,
		"nombre": "Serperior"
	},
	{
		"numero": 278,
		"nombre": "Lillipup"
	},
	{
		"numero": 279,
		"nombre": "Herdier"
	},
	{
		"numero": 280,
		"nombre": "Stoutland"
	},
	{
		"numero": 281,
		"nombre": "Purrloin"
	},
	{
		"numero": 282,
		"nombre": "Liepard"
	},
	{
		"numero": 283,
		"nombre": "Blitzle"
	},
	{
		"numero": 284,
		"nombre": "Zebstrika"
	},
	{
		"numero": 285,
		"nombre": "Roggenrola"
	},
	{
		"numero": 286,
		"nombre": "Boldore"
	},
	{
		"numero": 287,
		"nombre": "Gigalith"
	},
	{
		"numero": 288,
		"nombre": "Woobat"
	},
	{
		"numero": 289,
		"nombre": "Swoobat"
	},
	{
		"numero": 290,
		"nombre": "Audino"
	},
	{
		"numero": 291,
		"nombre": "Timburr"
	},
	{
		"numero": 292,
		"nombre": "Gurdurr"
	},
	{
		"numero": 293,
		"nombre": "Conkeldurr"
	},
	{
		"numero": 294,
		"nombre": "Throh"
	},
	{
		"numero": 295,
		"nombre": "Sawk"
	},
	{
		"numero": 296,
		"nombre": "Sewaddle"
	},
	{
		"numero": 297,
		"nombre": "Swadloon"
	},
	{
		"numero": 298,
		"nombre": "Leavanny"
	},
	{
		"numero": 299,
		"nombre": "Cottonee"
	},
	{
		"numero": 300,
		"nombre": "Whimsicott"
	},
	{
		"numero": 301,
		"nombre": "Ducklett"
	},
	{
		"numero": 302,
		"nombre": "Swanna"
	},
	{
		"numero": 303,
		"nombre": "Foongus"
	},
	{
		"numero": 304,
		"nombre": "Amoonguss"
	},
	{
		"numero": 305,
		"nombre": "Eelektrik"
	},
	{
		"numero": 306,
		"nombre": "Eelektross"
	},
	{
		"numero": 307,
		"nombre": "Litwick"
	},
	{
		"numero": 308,
		"nombre": "Lampent"
	},
	{
		"numero": 309,
		"nombre": "Chandelure"
	},
	{
		"numero": 310,
		"nombre": "Stunfisk"
	},
	{
		"numero": 311,
		"nombre": "Golett"
	},
	{
		"numero": 312,
		"nombre": "Golurk"
	},
	{
		"numero": 313,
		"nombre": "Bouffalant"
	},
	{
		"numero": 314,
		"nombre": "Larvesta"
	},
	{
		"numero": 315,
		"nombre": "Volcarona"
	},
	{
		"numero": 316,
		"nombre": "Froakie"
	},
	{
		"numero": 317,
		"nombre": "Frogadier"
	},
	{
		"numero": 318,
		"nombre": "Greninja"
	},
	{
		"numero": 319,
		"nombre": "Scatterbug"
	},
	{
		"numero": 320,
		"nombre": "Spewpa"
	},
	{
		"numero": 321,
		"nombre": "Vivillon"
	},
	{
		"numero": 322,
		"nombre": "Flabébé"
	},
	{
		"numero": 323,
		"nombre": "Skiddo"
	},
	{
		"numero": 324,
		"nombre": "Gogoat"
	},
	{
		"numero": 325,
		"nombre": "Pancham"
	},
	{
		"numero": 326,
		"nombre": "Pangoro"
	},
	{
		"numero": 327,
		"nombre": "Clauncher"
	},
	{
		"numero": 328,
		"nombre": "Clawitzer"
	},
	{
		"numero": 329,
		"nombre": "Hawlucha"
	},
	{
		"numero": 330,
		"nombre": "Phantump"
	},
	{
		"numero": 331,
		"nombre": "Trevenant"
	},
	{
		"numero": 332,
		"nombre": "Pumpkaboo"
	},
	{
		"numero": 333,
		"nombre": "Gourgeist"
	},
	{
		"numero": 334,
		"nombre": "Noibat"
	},
	{
		"numero": 335,
		"nombre": "Noivern"
	},
	{
		"numero": 336,
		"nombre": "Rowlet"
	},
	{
		"numero": 337,
		"nombre": "Dartrix"
	},
	{
		"numero": 338,
		"nombre": "Decidueye"
	},
	{
		"numero": 339,
		"nombre": "Litten"
	},
	{
		"numero": 340,
		"nombre": "Torracat"
	},
	{
		"numero": 341,
		"nombre": "Incineroar"
	},
	{
		"numero": 342,
		"nombre": "Rockruff"
	},
	{
		"numero": 343,
		"nombre": "Lycanroc"
	},
	{
		"numero": 344,
		"nombre": "Stufful"
	},
	{
		"numero": 345,
		"nombre": "Bewear"
	},
	{
		"numero": 346,
		"nombre": "Bounsweet"
	},
	{
		"numero": 347,
		"nombre": "Steenee"
	},
	{
		"numero": 348,
		"nombre": "Tsareena"
	},
	{
		"numero": 349,
		"nombre": "Minior"
	},
	{
		"numero": 350,
		"nombre": "Komala"
	},
	{
		"numero": 351,
		"nombre": "Mimikyu"
	},
	{
		"numero": 352,
		"nombre": "Kartana"
	},
	{
		"numero": 353,
		"nombre": "Scorbunny"
	},
	{
		"numero": 354,
		"nombre": "Raboot"
	},
	{
		"numero": 355,
		"nombre": "Cinderace"
	},
	{
		"numero": 356,
		"nombre": "Rookidee"
	},
	{
		"numero": 357,
		"nombre": "Wooloo"
	},
	{
		"numero": 358,
		"nombre": "Dubwool"
	},
	{
		"numero": 359,
		"nombre": "Chewtle"
	},
	{
		"numero": 360,
		"nombre": "Yamper"
	},
	{
		"numero": 361,
		"nombre": "Boltund"
	},
	{
		"numero": 362,
		"nombre": "Impidimp"
	},
	{
		"numero": 363,
		"nombre": "Morgrem"
	},
	{
		"numero": 364,
		"nombre": "Grimmsnarl"
	},
	{
		"numero": 365,
		"nombre": "Alcremie"
	},
	{
		"numero": 366,
		"nombre": "Falinks"
	},
	{
		"numero": 367,
		"nombre": "Axew"
	},
	{
		"numero": 368,
		"nombre": "Fraxure"
	},
	{
		"numero": 369,
		"nombre": "Haxorus"
	},
	{
		"numero": 370,
		"nombre": "Druddigon"
	},
	{
		"numero": 371,
		"nombre": "Deino"
	},
	{
		"numero": 372,
		"nombre": "Zweilous"
	},
	{
		"numero": 373,
		"nombre": "Hydreigon"
	},
	{
		"numero": 374,
		"nombre": "Tyrunt"
	},
	{
		"numero": 375,
		"nombre": "Tyrantrum"
	},
    {
        "numero": 376,
        "nombre": "Tocorath"
    }
]



function formatearNumero(num) {
    if (num >= 1 && num <= 9) return "00" + num;
    if (num >= 10 && num <= 99) return "0" + num;
    return num.toString();
}

function renderizar(pokemonsFiltrados = null) {
    const datosAMostrar = pokemonsFiltrados || pokemons;
    
    let html = '';
    for (const p of datosAMostrar) {
        html += `
            <div class="pokeCard">
                <img src="../assets/img/pokeball.svg" alt="" class="pokeballimg">
                <div class="pokeinfo">
                    <p class="numero">${formatearNumero(p.numero)}</p>
                    <p class="nombre">${p.nombre}</p>
                </div>
            </div>
        `;
    }
    pokelist.innerHTML = html;

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

//Busqueda
searchInput.addEventListener('input', (e) => {
    const termino = e.target.value.toLowerCase().trim();
    
    if (termino === '') {
        renderizar();
        return;
    }
    
    const filtrados = pokemons.filter(p => 
        p.nombre.toLocaleLowerCase().includes(termino) ||
        p.numero.toString().includes(termino)
    );
    
    if (filtrados.length === 0) {
        pokelist.innerHTML = `<div class="no-encontrado">🔍 No se encontró "${termino}"</div>`;
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