const { Game, User, Comment } = require('../models');
const db = require('../config/connection');
const faker = require('faker');


db.once('open', async () => {

  await Game.deleteMany();
  const games = await Game.insertMany(
    [
      {
        game_name: "Plunder",
        image: "Plunder",
        category: "Strategy",
        min_number_of_players: 2,
        max_number_of_players: 6,
        avg_min_game_time: 40,
        avg_max_game_time: 120,
        game_description:
          "Adventure and riches await any swashbuckler brave enough to take the helm and command a fleet. Wage war against rival captains. Build and upgrade your ships with masts and cannons to increase speed and firepower. Conquer islands and exploit the land to gain valuable resources. Navigate dangerous waters and avoid the ever-wandering storm. Are you ruthless enough to prevail? Do you seek gold and infamy? If ruling the seas is your ambition, it’s time to unleash your inner pirate. It’s time to plunder!",
      },
      {
        game_name: "UNO",
        image: "UNO",
        category: "Strategy",
        min_number_of_players: 2,
        max_number_of_players: 10,
        avg_min_game_time: 60,
        avg_max_game_time: 180,
        game_description:
          "Easy to pick up and impossible to put down, players take turns matching a card in their hand with the current card shown on top of the deck either by color or number. The first player to rid themselves of all the cards in their hand before their opponents wins",
      },
      {
        game_name: "Cards Against Humanity",
        image: "Cards Against Humanity",
        category: "Storytelling",
        min_number_of_players: 3,
        max_number_of_players: 20,
        avg_min_game_time: 30,
        avg_max_game_time: 90,
        game_description:
          "Fill-in-the-blank party game that turns your awkard personality and lackluster social skills into hours of fun. One player asks a question from a black card and everyone else answers with their funniest white card.",
      },
      {
        game_name: "Cubitos",
        image: "Cubitos",
        category: "Gambling",
        min_number_of_players: 2,
        max_number_of_players: 4,
        avg_min_game_time: 30,
        avg_max_game_time: 60,
        game_description:
          "Take on the role of participants in the annual Cube Cup, a race of strategy and luck to determine the Cubitos Champion. Each player has a runner on the racetrack and a support team, which is represented by all the dice you roll. Each turn, you roll dice and use their results to move along the racetrack, buy new dice, and use abilities — but you must be careful not to push your luck rolling too much or you could bust!",
      },
      {
        game_name: "Once Upon a Time",
        image: "Once Upon a Time",
        category: "Storytelling",
        min_number_of_players: 2,
        max_number_of_players: 6,
        avg_min_game_time: 15,
        avg_max_game_time: 60,
        game_description:
          " Stem into the world of fairy tales. It's full of wicked queens, talking cauldrons and lucky boys who stumble upon magic objects, but unlike normal fairy tales, you control the action.",
      },
      {
        game_name: "Sprit Island",
        image: "Sprit Island",
        category: "Strategy",
        min_number_of_players: 1,
        max_number_of_players: 4,
        avg_min_game_time: 90,
        avg_max_game_time: 120,
        game_description:
          "In the most distant reaches of the world, magic still exists, embodied by spirits of the land, of the sky, and of every natural thing. As the great powers of Europe stretch their colonial empires further and further, they will inevitably lay claim to a place where spirits still hold power - and when they do, the land itself will fight back alongside the islanders who live there.",
      },
      {
        game_name: "Scythe",
        image: "Scythe",
        category: "Strategy",
        min_number_of_players: 1,
        max_number_of_players: 5,
        avg_min_game_time: 90,
        avg_max_game_time: 115,
        game_description:
          "It is a time of unrest in 1920s Europa. The ashes from the first great war still darken the snow. The capitalistic city-state known simply as “The Factory”, which fueled the war with heavily armored mechs, has closed its doors, drawing the attention of several nearby countries.",
      },
      {
        game_name: "Root",
        image: "Root",
        category: "Strategy",
        min_number_of_players: 2,
        max_number_of_players: 4,
        avg_min_game_time: 60,
        avg_max_game_time: 90,
        game_description:
          "Root is a game of adventure and war in which 2 to 4 (1 to 6 with the 'Riverfolk' expansion) players battle for control of a vast wilderness.",
      },
      {
        game_name: "Wingspan",
        image: "Wingspan",
        category: "Strategy",
        min_number_of_players: 1,
        max_number_of_players: 5,
        avg_min_game_time: 40,
        avg_max_game_time: 70,
        game_description:
          "Wingspan is a competitive, medium-weight, card-driven, engine-building board game from Stonemaier Games. It's designed by Elizabeth Hargrave and features over 170 birds illustrated by Beth Sobel, Natalia Rojas, and Ana Maria Martinez.",
      },
      {
        game_name: "Twilight Struggle",
        image: "Twilight Struggle",
        category: "Strategy",
        min_number_of_players: 2,
        max_number_of_players: 2,
        avg_min_game_time: 120,
        avg_max_game_time: 180,
        game_description:
          "Now the trumpet summons us again, not as a call to bear arms, though arms we need; not as a call to battle, though embattled we are – but a call to bear the burden of a long twilight struggle",
      },
      {
        game_name: "Clue",
        image: "Clue",
        category: "Strategy",
        min_number_of_players: 3,
        max_number_of_players: 6,
        avg_min_game_time: 10,
        avg_max_game_time: 60,
        game_description: "The classic detective game! Players move from room to room in a mansion to solve the mystery of: who done it, with what, and where? Players are dealt character, weapon, and location cards after the top card from each card type is secretly placed in the confidential file in the middle of the board. Players must move to a room and then make an accusation against a character by stating a specific weapon and room.Through deductive reasoning each player must figure out which character, weapon, and location are in the secret file. "
      },
      {
        game_name: "BadPlots",
        image: "BadPlots",
        category: "Cards",
        min_number_of_players: 2,
        max_number_of_players: 10,
        avg_min_game_time: 30,
        avg_max_game_time: 60,
        game_description:
          "A Party/Card/Trivia game that challenges players to identify a movie based on a terrible (but accurate) plot synopsis. Players take turns selecting a movie from their hand and reading the synopsis aloud. The other players then attempt to guess the movie (with the active player giving up to three hints listed on the card).",
      },
      {
        game_name: "500 Cribbage",
        image: "500 Cribbage",
        category: "Cards",
        min_number_of_players: 2,
        max_number_of_players: 4,
        avg_min_game_time: 30,
        avg_max_game_time: 30,
        game_description:
          "Fully referred to as the 500 Cribbage Thomas System, this game sets out to develop and modernize the classic game of Cribbage with several refinements. Players peg points on an updated version of the original Cribbage board, with separate tracks for points scored in the Play, Hand, and Crib. Additionally, the straight-flush is recognized as an independent scoring combination, and the play of the cards until Go is extended to a limit of 34 instead of 31.",
      },
      {
        game_name: "demidancer",
        image: "demidancer",
        category: "Cards",
        min_number_of_players: 2,
        max_number_of_players: 2,
        avg_min_game_time: 1,
        avg_max_game_time: 5,
        game_description:
          "The game #demidancer is like the Dance Class Dash, which girls in dance class relate to, but plays as a super-fast dexterity and sequencing card game for two. A 2-player dance themed card game of speed, coordination and anticipation. Place the right dance gear article on top of the next and be first to play out all your cards to win.",
      },
      {
        game_name: "Marvel Champions",
        image: "Marvel Champions",
        category: "Cards",
        min_number_of_players: 1,
        max_number_of_players: 4,
        avg_min_game_time: 45,
        avg_max_game_time: 90,
        game_description:
          "Marvel Champions: The Card Game invites players embody iconic heroes from the Marvel Universe as they battle to stop infamous villains from enacting their devious schemes. As a Living Card Game, Marvel Champions is supported with regular releases of new product, including new heroes and scenarios.",
      },
      {
        game_name: "Underwater Cities",
        image: "Underwater Cities",
        category: "Cards",
        min_number_of_players: 1,
        max_number_of_players: 4,
        avg_min_game_time: 80,
        avg_max_game_time: 150,
        game_description:
          "The main principle of the game is card placement. Three colored cards are placed along the edge of the main board into 3 x 5 slots, which are also colored. Ideally players can place cards into slots of the same color. Then they can take both actions and advantages: the action depicted in the slot on the main board and also the advantage of the card.",
      },
      {
        game_name: "Aeon's End",
        image: "Aeon's End",
        category: "Cards",
        min_number_of_players: 1,
        max_number_of_players: 4,
        avg_min_game_time: 60,
        avg_max_game_time: 60,
        game_description:
          "Aeon's End is a cooperative game that explores the deckbuilding genre with a number of innovative mechanisms, including a variable turn order system that simulates the chaos of an attack, and deck management rules that require careful planning with every discarded card. Players will struggle to defend Gravehold from The Nameless and their hordes using unique abilities, powerful spells, and, most importantly of all, their collective wits.",
      },
      {
        game_name: "Race for the Galaxy",
        image: "Race for the Galaxy",
        category: "Cards",
        min_number_of_players: 2,
        max_number_of_players: 4,
        avg_min_game_time: 30,
        avg_max_game_time: 60,
        game_description:
          "In the card game Race for the Galaxy, players build galactic civilizations by playing game cards in front of them that represent worlds or technical and social developments. Some worlds allow players to produce goods, which can be consumed later to gain either card draws or victory points when the appropriate technologies are available to them. These are mainly provided by the developments and worlds that are not able to produce, but the fancier production worlds also give these bonuses.",
      },
      {
        game_name: "7 Wonders",
        image: "7 Wonders",
        category: "Strategy",
        min_number_of_players: 2,
        max_number_of_players: 7,
        avg_min_game_time: 30,
        avg_max_game_time: 30,
        game_description:
          "You are the leader of one of the 7 great cities of the Ancient World. Gather resources, develop commercial routes, and affirm your military supremacy. Build your city and erect an architectural wonder which will transcend future times.",
      },
      {
        game_name: "Codenames",
        image: "Codenames",
        category: "Party",
        min_number_of_players: 2,
        max_number_of_players: 8,
        avg_min_game_time: 15,
        avg_max_game_time: 15,
        game_description:
          "Codenames is an easy party game to solve puzzles. The game is divided into red and blue, each side has a team leader, the team leader's goal is to lead their team to the final victory. At the beginning of the game, there will be 25 cards on the table with different words. Each card has a corresponding position, representing different colors. Only the team leader can see the color of the card. The team leader should prompt according to the words, let his team members find out the cards of their corresponding colors, and find out all the cards of their own colors to win.",
      },
      {
        game_name: "Azul",
        image: "Azul",
        category: "Strategy",
        min_number_of_players: 2,
        max_number_of_players: 4,
        avg_min_game_time: 30,
        avg_max_game_time: 45,
        game_description:
          "In the game Azul, players take turns drafting colored tiles from suppliers to their player board. Later in the round, players score points based on how they've placed their tiles to decorate the palace. Extra points are scored for specific patterns and completing sets; wasted supplies harm the player's score. The player with the most points at the end of the game wins.",
      },
      {
        game_name: "Patchwork",
        image: "Patchwork",
        category: "Strategy",
        min_number_of_players: 2,
        max_number_of_players: 2,
        avg_min_game_time: 15,
        avg_max_game_time: 30,
        game_description:
          "In Patchwork, two players compete to build the most aesthetic (and high-scoring) patchwork quilt on a personal 9x9 game board. To start play, lay out all of the patches at random in a circle and place a marker directly clockwise of the 2-1 patch. Each player takes five buttons — the currency/points in the game — and someone is chosen as the start player.",
      },
      {
        game_name: "Go",
        image: "Go",
        category: "Strategy",
        min_number_of_players: 2,
        max_number_of_players: 2,
        avg_min_game_time: 30,
        avg_max_game_time: 180,
        game_description:
          "By all appearances, it's just two players taking turns laying stones on a 19×19 (or smaller) grid of intersections. But once its basic rules are understood, Go shows its staggering depth. One can see why many people say it's one of the most elegant brain-burning abstract games in history, with players trying to claim territory by walling off sections of the board and surrounding each other's stones. The game doesn't end until the board fills up, or, more often, when both players agree to end it, at which time whoever controls the most territory wins.",
      },
      {
        game_name: "Dungeon Petz",
        image: "Dungeon Petz",
        category: "Party",
        min_number_of_players: 2,
        max_number_of_players: 4,
        avg_min_game_time: 90,
        avg_max_game_time: 90,
        game_description:
          "Become the leader of an imp family that has just started a new business – breeding and selling petz. Sound simple and safe? Well, we forgot to mention that those petz are for Dungeon Lords. This means magical, playful, sometimes angry monsters that constantly desire attention and at the very moment you want them to demonstrate their qualities to buyers they are sick or they poop. Sometimes you are even glad that you got rid of them – but the profit is unbelievable.",
      },
      {
        game_name: "Dungeon Lords",
        image: "Dungeon Lords",
        category: "Party",
        min_number_of_players: 2,
        max_number_of_players: 4,
        avg_min_game_time: 90,
        avg_max_game_time: 90,
        game_description:
          "In Dungeon Lords, you are an evil dungeonlord who is trying to build the best dungeon out there. You hire monsters, build rooms, buy traps and defeat the do-gooders who wish to bring you down.",
      },
      {
        game_name: "Telestrations",
        image: "Telestrations",
        category: "Party",
        min_number_of_players: 4,
        max_number_of_players: 8,
        avg_min_game_time: 30,
        avg_max_game_time: 30,
        game_description:
          "Each player begins by sketching a TELESTRATIONS word dictated by the roll of a die. The old fashioned sand timer may limit the amount of time they get to execute their sketch, but it certainly doesn't limit creativity! Time's up! All players, all at the same time, pass their sketch to the next player, who must guess what's been drawn. Players then simultaneously pass their guess -- which hopefully matches the original word (or does it??) -- to the next player who must try to draw the word they see -- and so on.",
      },
      {
        game_name: "Dixit",
        image: "Dixit",
        category: "Party",
        min_number_of_players: 3,
        max_number_of_players: 6,
        avg_min_game_time: 30,
        avg_max_game_time: 30,
        game_description:
          "One player is the storyteller for the turn and looks at the images on the 6 cards in her hand. From one of these, she makes up a sentence and says it out loud (without showing the card to the other players). Each other player selects the card in their hands which best matches the sentence and gives the selected card to the storyteller, without showing it to the others. The storyteller shuffles her card with all the received cards. All pictures are shown face up and every player has to bet upon which picture was the storyteller's.",
      },
      {
        game_name: "Monikers",
        image: "Monikers",
        category: "Party",
        min_number_of_players: 4,
        max_number_of_players: 16,
        avg_min_game_time: 30,
        avg_max_game_time: 60,
        game_description:
          "Monikers is a party game based on the public domain game Celebrity, where players take turns attempting to get their teammates to guess names by describing or imitating well-known people. In the first round, clue givers can say anything they want, except for the name itself. For the second round, clue givers can only say one word. And in the final round, clue givers can’t say anything at all: they can only use gestures and charades.",
      },
      {
        game_name: "Awkward Guests",
        image: "Awkward Guests",
        category: "Party",
        min_number_of_players: 1,
        max_number_of_players: 8,
        avg_min_game_time: 45,
        avg_max_game_time: 75,
        game_description:
          "Awkward Guests, a.k.a. Incómodos Invitados, is a one-of-a-kind deduction game with infinite re-playability. You can recreate Mr. Walton's murder in so many different ways that you won't ever play two similar games! (Mr. Walton will not thank you for doing this.)",
      },
      {
        game_name: "Sheriff of Nottingham",
        image: "Sheriff of Nottingham",
        category: "Storytelling",
        min_number_of_players: 3,
        max_number_of_players: 5,
        avg_min_game_time: 60,
        avg_max_game_time: 60,
        game_description:
          "In Sheriff of Nottingham, players will not only be able to experience Nottingham as a merchant of the city, but each turn one player will step into the shoes of the Sheriff himself. Players declare goods they wish to bring into the city, goods that are secretly stored in their burlap sack. The Sheriff must then determine who gets into the city with their goods, who gets inspected, and who may have their goods confiscated!",
      },
      {
        game_name: "Time's Up Title Recall",
        image: "Time's Up Title Recall",
        category: "Party",
        min_number_of_players: 4,
        max_number_of_players: 18,
        avg_min_game_time: 60,
        avg_max_game_time: 60,
        game_description:
          "Based on the popular game Time's Up!, Time's Up: Title Recall challenges players to guess the titles of books, films, songs, and more. Players try to get their teammates to guess the same set of titles over three rounds. In each round, one member of a team tries to get their teammates to guess as many titles as possible in 30 seconds. In round 1, almost any kind of clue is allowed. In round 2, no more than one word can be used in each clue (but unlimited sounds and gestures are permitted.) In round 3, no words are allowed at all.",
      },
      {
        game_name: "Last Will",
        image: "Last Will",
        category: "Party",
        min_number_of_players: 2,
        max_number_of_players: 5,
        avg_min_game_time: 45,
        avg_max_game_time: 75,
        game_description:
          "In Last Will, each player starts with a certain amount of money, an individual player board, two errand boys and two cards in some combination of properties and helpers. At the start of each round, lay out cards from the appropriate decks on the offering boards; the four regular decks are properties, companions, events, helpers and expenses, with special cards forming a deck of their own. The particular mix of cards varies by round and by the number of players.",
      },
      {
        game_name: "Gloomhaven",
        image: "Gloomhaven",
        category: "Storytelling",
        min_number_of_players: 1,
        max_number_of_players: 4,
        avg_min_game_time: 60,
        avg_max_game_time: 120,
        game_description:
          "Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Players must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process, they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make.",
      },
      {
        game_name: "Nemesis",
        image: "Nemesis",
        category: "Storytelling",
        min_number_of_players: 1,
        max_number_of_players: 5,
        avg_min_game_time: 90,
        avg_max_game_time: 180,
        game_description:
          "Nemesis is a semi-cooperative game in which you and your crewmates must survive on a ship infested with hostile organisms. To win the game, you have to complete one of the two objectives dealt to you at the start of the game and get back to Earth in one piece. You will find many obstacles on your way: swarms of Intruders (the name given to the alien organisms by the ship AI), the poor physical condition of the ship, agendas held by your fellow players, and sometimes just cruel fate.",
      },
      {
        game_name: "The 7th Continent",
        image: "The 7th Continent",
        category: "Storytelling",
        min_number_of_players: 1,
        max_number_of_players: 4,
        avg_min_game_time: 5,
        avg_max_game_time: 1000,
        game_description:
          "In The 7th Continent, a solo or cooperative choose-your-own-adventure exploration board game, you choose a character and begin your adventure on your own or with a team of other explorers. Inspired by the Fighting Fantasy book series, you will discover the extent of this wild new land through a variety of terrain and event cards. In a land fraught with danger and wonders, you have to use every ounce of wit and cunning to survive, crafting tools, weapons, and shelter to ensure your survival.",
      },
      {
        game_name: "Mage Knight Board Game",
        image: "Mage Knight Board Game",
        category: "Storytelling",
        min_number_of_players: 1,
        max_number_of_players: 4,
        avg_min_game_time: 60,
        avg_max_game_time: 240,
        game_description:
          "The Mage Knight board game puts you in control of one of four powerful Mage Knights as you explore (and conquer) a corner of the Mage Knight universe under the control of the Atlantean Empire. Build your army, fill your deck with powerful spells and actions, explore caves and dungeons, and eventually conquer powerful cities controlled by this once-great faction! In competitive scenarios, opposing players may be powerful allies, but only one will be able to claim the land as their own.",
      },
      {
        game_name: "Too Many Bones",
        image: "Too Many Bones",
        category: "Storytelling",
        min_number_of_players: 1,
        max_number_of_players: 4,
        avg_min_game_time: 60,
        avg_max_game_time: 120,
        game_description:
          "Too Many Bones comes loaded for bear by breaking into a new genre: the dice-builder RPG. This game takes everything you think you know about dice-rolling and turns it on its head. Dripping with strategy, this fantasy-based RPG puts you in the skin of a new race and takes you on an adventure to the northern territories to root out and defeat growing enemy forces and of course the infamous baddie responsible.",
      },
      {
        game_name: "Eldritch Horror",
        image: "Eldritch Horror",
        category: "Storytelling",
        min_number_of_players: 1,
        max_number_of_players: 8,
        avg_min_game_time: 120,
        avg_max_game_time: 240,
        game_description:
          "Eldritch Horror is a co-operative game of terror and adventure in which one to eight players take the roles of globetrotting investigators working to solve mysteries, gather clues, and protect the world from an Ancient One – that is, an elder being intent on destroying our world. Each Ancient One comes with its own unique decks of Mystery and Research cards, which draw you deeper into the lore surrounding each loathsome creature. Discover the true name of Azathoth or battle Cthulhu on the high seas.",
      },
      {
        game_name: "Champions of Midgard",
        image: "Champions of Midgard",
        category: "Storytelling",
        min_number_of_players: 2,
        max_number_of_players: 4,
        avg_min_game_time: 60,
        avg_max_game_time: 90,
        game_description:
          "Champions of Midgard is a middleweight, Viking-themed, worker placement game with dice rolling in which players are leaders of Viking clans who have traveled to an embattled Viking harbor town to help defend it against the threat of trolls, draugr, and other mythological Norse beasts. By defeating these epic creatures, players gain glory and the favor of the gods. When the game ends, the player who has earned the most glory earns the title of Jarl and is recognized as a champion of Midgard!",
      },
      {
        game_name: "PARKS",
        image: "PARKS",
        category: "Storytelling",
        min_number_of_players: 1,
        max_number_of_players: 5,
        avg_min_game_time: 30,
        avg_max_game_time: 60,
        game_description:
          "In PARKS, players will take on the role of two hikers as they trek through different trails across four seasons of the year. While on the trail, these hikers will take actions and collect memories of the places your hikers visit. These memories are represented by various resource tokens like mountains and forests. Collecting these memories in sets will allow players to trade them in to visit a National Park at the end of each hike.",
      },
      {
        game_name: "War of the Ring",
        image: "War of the Ring",
        category: "Storytelling",
        min_number_of_players: 2,
        max_number_of_players: 4,
        avg_min_game_time: 120,
        avg_max_game_time: 120,
        game_description:
          "Initially, the Free People Nations are reluctant to take arms against Sauron, so they must be attacked by Sauron or persuaded by Gandalf or other Companions, before they start to fight properly: this is represented by the Political Track, which shows if a Nation is ready to fight in the War of the Ring or not.",
      },
      {
        game_name: "Poker",
        image: "Poker",
        category: "Gambling",
        min_number_of_players: 2,
        max_number_of_players: 10,
        avg_min_game_time: 30,
        avg_max_game_time: 500,
        game_description:
          "Poker is any of a number of card games in which players wager over which hand is best according to that specific game's rules in ways similar to these rankings.",
      },
      {
        game_name: "Casino",
        image: "Casino",
        category: "Gambling",
        min_number_of_players: 2,
        max_number_of_players: 5,
        avg_min_game_time: 90,
        avg_max_game_time: 90,
        game_description:
          "This game is played on a round-course like Monopoly. You have to draw cards for special events and you can purchase 1 of 6 casinos when landing on their space.",
      },
      {
        game_name: "Mega Bucks",
        image: "Mega Bucks",
        category: "Gambling",
        min_number_of_players: 2,
        max_number_of_players: 7,
        avg_min_game_time: 75,
        avg_max_game_time: 100,
        game_description:
          "This is an Australian published game based on the Monopoly theme. The board has a circular track with a number of spaces representing Australian & International businesses.",
      },
      {
        game_name: "Casino Hot Dog",
        image: "Casino Hot Dog",
        category: "Gambling",
        min_number_of_players: 2,
        max_number_of_players: 8,
        avg_min_game_time: 30,
        avg_max_game_time: 45,
        game_description:
          "It’s betting time in the “Hot Dog” casino until hackles are raised! Who has lucky paws for pulling chips out of the bag and will muzzle ahead at the end of a round?",
      },
      {
        game_name: "Casino Yahtzee",
        image: "Casino Yahtzee",
        category: "Gambling",
        min_number_of_players: 2,
        max_number_of_players: 6,
        avg_min_game_time: 30,
        avg_max_game_time: 50,
        game_description:
          "Casino Yahtzee combines the suspense of a gambling game with the strategy of Yahtzee. The challenge is to toss the dice and roll the numbers you need.",
      },
      {
        game_name: "Mafia Casino",
        image: "Mafia Casino",
        category: "Gambling",
        min_number_of_players: 2,
        max_number_of_players: 8,
        avg_min_game_time: 45,
        avg_max_game_time: 90,
        game_description:
          "Enter a world where money and the mafia go hand in hand. Build your Casino-Hotel and aim to become the richest. Attract prestigious guests, deal pearls and diamonds, and partake in games of chance. Spying, bombings, robbing safes, and embezzlement will help you sabotage the plans of your opponents.",
      },
      {
        game_name: "Real Las Vegas",
        image: "Real Las Vegas",
        category: "Gambling",
        min_number_of_players: 2,
        max_number_of_players: 9,
        avg_min_game_time: 60,
        avg_max_game_time: 100,
        game_description:
          "Bring home the excitement of a Las Vegas casino into a board game. Players work their way around the board as a group and play all the great casino games including Poker, Blackjack, Roulette and Craps. the winner is the player who has the most money when the first person crosses the finish line.",
      },
      {
        game_name: "Casinopoly",
        image: "Casinopoly",
        category: "Gambling",
        min_number_of_players: 2,
        max_number_of_players: 6,
        avg_min_game_time: 30,
        avg_max_game_time: 400,
        game_description:
          "Viva Las Vegas! And Atlantic City, too! With Casinopoly, players can play a casino party game or create an add-on feature that’s compatible with “the most popular real estate trading board games.” The board just happens to fit snugly into the centre of a Monopoly board, and, whether you’re landing on Boardwalk or cruising the Strip, Casinopoly’s easy dice versions of four casino classics provide plenty of action.",
      },
    ]);

  console.log('games seeded')

  await User.deleteMany({});

  //create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
    // console.log(userData.length + " user data ");
  }

  let createdUsers = [];

  createdUsers = await User.collection.insertMany(userData);

  console.log('users seeded')

  // create friends
  for (let i = 0; i < 100; i += 1) {

    const randomUserIndex = Math.floor(Math.random() * userData.length);
    // console.log(randomUserIndex + " random user index")
    const { _id: userId } = userData[randomUserIndex];

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(Math.random() * userData.length);
      friendId = userData[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }

  console.log('friends seeded')



  //create game comments
  let createdComments = [];

  for (let i = 0; i < 100; i += 1) {

    const randomUserIndex = Math.floor(Math.random() * userData.length);
    // console.log(randomUserIndex + " random user index")
    let { username: username, _id: userId } = userData[randomUserIndex];

    userId = userId.toString();

    const commentText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomGameIndex = Math.floor(Math.random() * games.length);
    const { _id: gameId } = games[randomGameIndex];

    createdComments = await Comment.create({ commentText, username });

    const gameData = await Game.findByIdAndUpdate(
      { _id: gameId },
      { $push: { comments: createdComments._id } }
    );

    const updatedUser = await User.findByIdAndUpdate(
      { _id: userId },
      { $addToSet: { games: gameId } }
    )

  }

  console.log('comments seeded')

  // create favorites
  for (let i = 0; i < 100; i += 1) {

    const randomUserIndex = Math.floor(Math.random() * userData.length);
    // console.log(randomUserIndex + " random user index")
    let { username: username, _id: userId } = userData[randomUserIndex];

    userId = userId.toString();

    const randomGameIndex = Math.floor(Math.random() * games.length);
    const { _id: gameId } = games[randomGameIndex];

    const gameData = await Game.findByIdAndUpdate(
      { _id: gameId },
      { $push: { favorites: { username: username } } }
    );

    const updatedUser = await User.findByIdAndUpdate(
      { _id: userId },
      { $addToSet: { games: gameId } }
    )

  }

  console.log('favorites seeded')

  process.exit();
})



