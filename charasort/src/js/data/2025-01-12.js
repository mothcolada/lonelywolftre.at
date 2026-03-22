dataSetVersion = "2025-01-12"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [

  {
    name: "Hide Spoilers",
    key: "spoiler",
    tooltip: "keep this checked if you have not seen the alternate endings"
  },
  {
    name: "Filter by Importance",
    key: "group",
    tooltip: "check this to determine which character pools to use",
    checked: false,
    sub: [
      { name: "Main Characters", tooltip: "characters who play an important role in the story", key: "main" },
      { name: "NPCs", tooltip: "characters who only make a brief appearance or play a minor role in the story", key: "npc" },
      { name: "Cameos", tooltip: "guest characters from other games", key: "cameo" },
    ]
  },
  {
    name: "Filter by Game",
    key: "chapter",
    tooltip: "check this to only sort characters that appear in certain chapters",
    checked: false,
    sub: [ { name: "Chapter 1: Lonely Wolf Treat", key: "ch1" },
      { name: "Chapter 2: Friendly Bunny Mochi", key: "ch2" },
      { name: "Chapter 3: Clever Fox Moxie", key: "ch3" },
      { name: "Chapter 4: Wandering Wolf Trick", key: "ch4" },
      { name: "Chapter 5: Dreaming Treat", key: "ch5" },
      { name: "Chapter 6: Mochi in Frosting", key: "ch6" },
      { name: "Chapter 7: Lucky Number Moxie", key: "ch7" },
      { name: "Chapter 8: Trick Comes Home", key: "ch8" },
      { name: "Syrup and the Ultimate Sweet", key: "sy1" },
      { name: "her tears were my light", key: "htwml" },
      { name: "First Kiss at a Spooky Soiree", key: "soiree" },
      { name: "Contract Demon", key: "cd" },
      { name: "Starry Flowers", key: "sf" },
      { name: "Astra's Garden", key: "ag" },
      { name: "Sex Advice Succubus", key: "sas" },
      { name: "Princess Poffin and the Spider Invasion", key: "pp" },
      { name: "Charm Studies", key: "cs" },
      { name: "Syrup 2: Candy Alchemy RPG", key: "sy2" },
      { name: "Night With Timber", key: "nwt" },
      //{ name: "DROP GAME", key: "skldajkldjs" },
      { name: "another piece of candy", key: "apoc" },
      //{ name: "KAIMA", key: "kaima" },
      //{ name: "drowning, drowning", key: "dd" },
      //{ name: "BAD END THEATER", key: "bet" },
      //{ name: "Return to Ash", key: "rta" },
      //{ name: "Puppergeist", key: "pup" }
    ]
  },
];


dataSet[dataSetVersion].characterData = [
  {
    name: "Treat",
    img: "treat.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch1", "ch2", "ch3", "ch4", "ch5", "ch6", "ch7", "sy1", "sy2"]
    },
  },
  {
    name: "Mochi",
    img: "mochi.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch1", "ch2", "ch3", "ch4", "ch5", "ch6", "ch7", "sy2"]
    },
  },
  {
    name: "Moxie",
    img: "moxie.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch1", "ch2", "ch3", "ch4", "ch5", "ch7"]
    },
  },
  {
    name: "Trick",
    img: "trick.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch4", "ch8"]
    },
  },
  {
    name: "Manjuu (Juju)",
    img: "juju.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch1", "ch2", "ch6"]
    },
  },
  {
    name: "Dango (Danny)",
    img: "dango.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch1", "ch2", "ch5", "ch6"]
    },
  },
  {
    name: "Boreas",
    img: "boreas.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch1", "ch2", "ch4", "ch8"]
    },
  },
  {
    name: "Annie",
    img: "annie.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch1", "ch2", "ch3", "ch4", "ch5", "ch6"]
    },
  },
  {
    name: "May",
    img: "may.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch1", "ch2", "ch3", "ch4", "ch5", "ch6"]
    },
  },
//    cinnason
//    cinnamom
  {
    name: "Pitaya",
    img: "pitaya.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch1", "ch2", "ch8"]
    },
  },
  {
    name: "Lemonne",
    img: "lemonne.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch1", "ch2", "ch4"]
    },
  },
  {
    name: "Nutmeg",
    img: "nutmeg.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch1", "ch3", "ch5", "ch8"]
    },
  },
  {
    name: "Salt",
    img: "salt.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch1", "ch2", "ch3", "ch4", "ch5"]
    },
  },
  {
    name: "Pepper",
    img: "pepper.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch1", "ch2", "ch3", "ch4", "ch5"]
    },
  },
  {
    name: "Chai",
    img: "chai.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch1", "ch3", "ch4", "ch5"]
    },
  },
  {
    name: "Eleni",
    img: "eleni.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch1", "ch2", "ch3", "ch4", "fkaass", "cd"]
    },
  },
  {
    name: "Kamilla",
    img: "kamilla.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch2", "ch4", "fkaass", "cd"]
    },
  },
  {
    name: "Thyme",
    img: "thyme.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch3", "ch4", "ch5", "ch8", "sy2"]
    },
  },
  {
    name: "Spice",
    img: "spice.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch3", "ch4", "ch5", "ch8", "sy2", "nwt"]
    },
  },
  {
    name: "Peanut",
    img: "madcat.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch3", "ch8"]
    },
  },
  {
    name: "Brittle",
    img: "shycat.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch3", "ch8"]
    },
  },
  {
    name: "Mousse",
    img: "mousse.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch3", "ch4", "ch5", "ch6"]
    },
  },
  {
    name: "Drop",
    img: "drop.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch3", "ch4", "ch5", "sy2"]
    },
  },
  {
    name: "Nougat",
    img: "nougat.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch3", "ch4", "ch8", ]
    },
  },
  {
    name: "Astragalus",
    img: "astra.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch3", "sf", "ag", "sy2"]
    },
  },
  {
    name: "Cassia",
    img: "cassia.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch3", "ch5", "sf", "cs", "sy2"]
    },
  },
  {
    name: "Biscotti",
    img: "biscotti.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch3", "ch5"]
    },
  },
  {
    name: "Angelica",
    img: "angelica.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch5"]
    },
  },
  {
    name: "Syrup",
    img: "syrup.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch4", "ch5", "sy1", "sy2"]
    },
  },
  {
    name: "Pastille",
    img: "pastille.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch3", "ch5", "ch8", "sy1", "sf", "sy2"]
    },
  },
  {
    name: "Gumdrop",
    img: "gumdrop.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch5", "ch8", "sy1", "sf", "sy2"]
    },
  },
  {
    name: "Butterscotch",
    img: "butterscotch.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch3", "sy1", "sy2"]
    },
  },
  {
    name: "Toffee",
    img: "toffee.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch3"]
    },
  },
  {
    name: "Cotton",
    img: "cotton.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch4", "ch7"]
    },
  },
  {
    name: "Candy",
    img: "candy.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch4", "ch7"]
    },
  },
  {
    name: "Fennel",
    img: "fennel.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch4", "ch7"]
    },
  },
  {
    name: "Powder",
    img: "powder.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch4", "ch7"]
    },
  },
  {
    name: "Mango",
    img: "mango.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch4", "ch7"]
    },
  },
  {
    name: "Jam",
    img: "jam.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch4"]
    },
  },
  {
    name: "Marzipan",
    img: "marz.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch4"]
    },
  },
  {
    name: "[Mouse Merchant]",
    img: "merchant1.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch4", "ch5", "ch8"]
    },
  },
  {
    name: "[Cat Child]",
    img: "catchild.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch4", "ch5"]
    },
  },
  {
    name: "Castella",
    img: "castella.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch4"]
    },
  },
  {
    name: "[Wormwood Mice]",
    img: "wormwood.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch4"]
    },
  },
  {
    name: "[Moxie's Mom]",
    img: "momxie.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch3", "ch4", "ch7"]
    },
  },
  {
    name: "Mitsu",
    img: "mitsu.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch4", "ch5", "ch8"],
    },
  },
  {
    name: "Tiramisu",
    img: "tiramisu.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch5", "ch8"]
    },
  },
  {
    name: "[Crab Witch]",
    img: "witch1.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch5", "ch8"]
    },
  },
  {
    name: "Rose",
    img: "rose.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch5", "ch8"],
      spoiler: true
    },
  },
  {
    name: "[Grumpy Grandpa]",
    img: "rabbit1.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch5", "ch6"]
    },
  },
  {
    name: "[Rude Receptionist]",
    img: "rabbit2.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch5", "ch6"]
    },
  },
  {
    name: "[Bad Boyfriend]",
    img: "rabbit3.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch5", "ch6"]
    },
  },
  {
    name: "[Popsicle Seal]",
    img: "seal.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch5"]
    },
  },
  {
    name: "Sakura",
    img: "sakura.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch5"]
    },
  },
  {
    name: "Strudel",
    img: "strudel.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch5"]
    },
  },
  {
    name: "[Junior Guard]",
    img: "rabbit4.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch6"]
    },
  },
  {
    name: "[Snooty Rabbit]",
    img: "rabbit5.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch6"]
    },
  },
  {
    name: "Brickzo",
    img: "brickzo.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch6"]
    },
  },
  {
    name: "Senbei",
    img: "senbei.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch6"]
    },
  },
  {
    name: "Genoise",
    img: "genoise.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch7"]
    },
  },
  {
    name: "Periwinkle",
    img: "peri.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch7", "ch8"]
    },
  },
  {
    name: "[Red Riding Hood]",
    img: "red.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch8"]
    },
  },
  {
    name: "[Squirrel Gramma]",
    img: "gramma.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch8"]
    },
  },
  {
    name: "Basmati",
    img: "basmati.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch8"]
    },
  },
  {
    name: "Saffron",
    img: "saffron.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch8"]
    },
  },
  {
    name: "Sesame",
    img: "sesame.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch8"]
    },
  },
  {
    name: "Marmalade",
    img: "marmalade.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch8"]
    },
  },
//  {
//    name: "[Saffron's Dad]",
//    img: "saffdad.png",
//    opts: {
//      group: [ "npc" ],
//      chapter: ["ch8"]
//    },
//  },
  {
    name: "Lime",
    img: "lime.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch8"]
    },
  },
  {
    name: "Souffle",
    img: "souffle.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch8"]
    },
  },
  {
    name: "Maia",
    img: "maia.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch8"]
    },
  },
  {
    name: "[Ukulele Bat]",
    img: "bat.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch5", "ch8"]
    },
  },
  {
    name: "[Witch Student]",
    img: "student.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch8"]
    },
  },
  {
    name: "Phoenix",
    img: "phoenix.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch8"]
    },
  },
  {
    name: "Grenadine (Granny)",
    img: "grenadine.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch8"],
      spoiler: true
    },
  },
  {
    name: "Capillaire",
    img: "capillaire.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch8"],
      spoiler: true
    },
  },
  {
    name: "Myrrh",
    img: "myrrh.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch8"],
      spoiler: true
    },
  },
  {
    name: "Lilikoi",
    img: "lilikoi.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch8"],
    },
  },
  {
    name: "[Canary Mama]",
    img: "canarymama.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch8"],
    },
  },
  {
    name: "Pip",
    img: "pip.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch8"],
    },
  },
  {
    name: "Squeak",
    img: "squeak.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch8"],
    },
  },
  {
    name: "Mr. Brew",
    img: "brew.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch8"],
    },
  },
  {
    name: "Lilium",
    img: "lilium.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch4", "ch8"],
      spoiler: true
    },
  },
  {
    name: "Orchid",
    img: "orchid.png",
    opts: {
      group: [ "cameo" ],
      chapter: ["ch4", "ch8"],
      spoiler: true
    },
  },
  {
    name: "Timber",
    img: "timber.png",
    opts: {
      group: ["main"],
      chapter: ["ch1"],
      spoiler: true
    },
  },
  {
    name: "Tundra",
    img: "tundra.png",
    opts: {
      group: [ "main" ],
      chapter: ["ch1"],
      spoiler: true
    },
  },
  {
    name: "Parsnip",
    img: "parsnip.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch6"],
      spoiler: true
    },
  },
  {
    name: "[Dazed Rabbit]",
    img: "rabbit6.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch6"],
      spoiler: true
    },
  },
  {
    name: "[Snickering Jerk]",
    img: "rabbit7.png",
    opts: {
      group: [ "npc" ],
      chapter: ["ch6"],
      spoiler: true
    },
  },
];
//fashionable witch (witch2)
//hat witch (witch3)
