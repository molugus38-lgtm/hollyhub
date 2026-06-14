const movies = [
  {
    id: 1,
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    rating: "9.2",
    director: "Francis Ford Coppola",
    img: process.env.PUBLIC_URL + "/posters/thegodfather.jpg",
    description: "The aging patriarch of a powerful crime family transfers control of his empire to his reluctant son, Michael Corleone."
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: "8.8",
    director: "Christopher Nolan",
    img: process.env.PUBLIC_URL + "/posters/inception.jpg",
    description: "A skilled thief enters dreams to steal secrets but is given the impossible task of planting an idea in someone's mind."
  },
  {
    id: 3,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    rating: "8.9",
    director: "Quentin Tarantino",
    img: process.env.PUBLIC_URL + "/posters/pulpfiction.jpg",
    description: "The lives of hitmen, gangsters, and criminals intertwine in a series of unforgettable stories."
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: "9.0",
    director: "Christopher Nolan",
    img: process.env.PUBLIC_URL + "/posters/thedarkknight.jpg",
    description: "Batman faces his greatest challenge when the Joker unleashes chaos upon Gotham City."
  },
  {
    id: 5,
    title: "There Will Be Blood",
    year: 2007,
    genre: "Drama",
    rating: "8.2",
    director: "Paul Thomas Anderson",
    img: process.env.PUBLIC_URL + "/posters/therewillbeblood.jpg",
    description: "A ruthless oil prospector's ambition and greed lead to power, wealth, and destruction."
  },
  {
    id: 6,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: "8.6",
    director: "Christopher Nolan",
    img: process.env.PUBLIC_URL + "/posters/interstellar.jpg",
    description: "Astronauts travel through a wormhole in search of a new home for humanity."
  },
  {
    id: 7,
    title: "No Country for Old Men",
    year: 2007,
    genre: "Thriller",
    rating: "8.1",
    director: "Coen Brothers",
    img: process.env.PUBLIC_URL + "/posters/nocountryforoldmen.jpg",
    description: "A hunter's discovery of drug money sets off a deadly chase across Texas."
  },
  {
    id: 8,
    title: "Mulholland Drive",
    year: 2001,
    genre: "Thriller",
    rating: "7.9",
    director: "David Lynch",
    img: process.env.PUBLIC_URL + "/posters/mulhollanddrive.jpg",
    description: "An aspiring actress uncovers mysterious secrets in Hollywood after meeting an amnesiac woman."
  },
  {
    id: 10,
    title: "Get Out",
    year: 2017,
    genre: "Horror",
    rating: "7.7",
    director: "Jordan Peele",
    img: process.env.PUBLIC_URL + "/posters/getout.jpg",
    description: "A young man uncovers disturbing secrets while visiting his girlfriend's family estate."
  },
  {
    id: 11,
    title: "Chinatown",
    year: 1974,
    genre: "Crime",
    rating: "8.2",
    director: "Roman Polanski",
    img: process.env.PUBLIC_URL + "/posters/chinatown.jpg",
    description: "A private detective investigating adultery becomes trapped in a web of corruption."
  },
  {
    id: 12,
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "Action",
    rating: "8.1",
    director: "George Miller",
    img: process.env.PUBLIC_URL + "/posters/madmaxfuryroad.jpg",
    description: "In a post-apocalyptic world, survivors race across the desert in a fight for freedom."
  },
  {
    id: 13,
    title: "Moonlight",
    year: 2016,
    genre: "Drama",
    rating: "7.4",
    director: "Barry Jenkins",
    img: process.env.PUBLIC_URL + "/posters/moonlight.jpg",
    description: "A young man struggles with identity, family, and love while growing up in Miami."
  },
  {
    id: 14,
    title: "Blade Runner 2049",
    year: 2017,
    genre: "Sci-Fi",
    rating: "8.0",
    director: "Denis Villeneuve",
    img: process.env.PUBLIC_URL + "/posters/bladerunner2049.jpg",
    description: "A new blade runner uncovers secrets that could change the future of humanity."
  },
  {
    id: 15,
    title: "Hereditary",
    year: 2018,
    genre: "Horror",
    rating: "7.3",
    director: "Ari Aster",
    img: process.env.PUBLIC_URL + "/posters/hereditary.jpg",
    description: "A grieving family becomes haunted by terrifying secrets after the death of their grandmother."
  },
  {
    id: 16,
    title: "Goodfellas",
    year: 1990,
    genre: "Crime",
    rating: "8.7",
    director: "Martin Scorsese",
    img: process.env.PUBLIC_URL + "/posters/Goodfellas.jpg",
    description: "The rise and fall of a mob associate in the world of organized crime."
  },
  {
    id: 17,
    title: "Eternal Sunshine",
    year: 2004,
    genre: "Romance",
    rating: "8.3",
    director: "Michel Gondry",
    img: process.env.PUBLIC_URL + "/posters/eternalsunshine.jpg",
    description: "After a painful breakup, a couple undergoes a procedure to erase memories of each other."
  },
  {
    id: 18,
    title: "Heat",
    year: 1995,
    genre: "Thriller",
    rating: "8.3",
    director: "Michael Mann",
    img: process.env.PUBLIC_URL + "/posters/heat.jpg",
    description: "A master thief and a determined detective face off in a gripping game of cat and mouse."
  },
  {
    id: 19,
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    rating: "8.5",
    director: "Bong Joon-ho",
    img: process.env.PUBLIC_URL + "/posters/parasite.jpg",
    description: "A poor family infiltrates a wealthy household with unexpected consequences."
  },
  {
    id: 20,
    title: "The Revenant",
    year: 2015,
    genre: "Drama",
    rating: "8.0",
    director: "Alejandro G. Iñárritu",
    img: process.env.PUBLIC_URL + "/posters/therevenant.jpg",
    description: "A frontiersman fights for survival and revenge after being left for dead."
  },
  {
    id: 21,
    title: "Whiplash",
    year: 2014,
    genre: "Drama",
    rating: "8.5",
    director: "Damien Chazelle",
    img: process.env.PUBLIC_URL + "/posters/whiplash.jpg",
    description: "An ambitious drummer pushes himself to the limit under a demanding music instructor."
  },
  {
    id: 22,
    title: "Joker",
    year: 2019,
    genre: "Thriller",
    rating: "8.4",
    director: "Todd Phillips",
    img: process.env.PUBLIC_URL + "/posters/joker.jpg",
    description: "A struggling comedian descends into madness and becomes Gotham's infamous villain."
  },
  {
    id: 23,
    title: "The Shining",
    year: 1980,
    genre: "Horror",
    rating: "8.4",
    director: "Stanley Kubrick",
    img: process.env.PUBLIC_URL + "/posters/theshining.jpg",
    description: "A writer and his family experience terrifying supernatural events in an isolated hotel."
  },
  {
    id: 24,
    title: "Gladiator",
    year: 2000,
    genre: "Action",
    rating: "8.5",
    director: "Ridley Scott",
    img: process.env.PUBLIC_URL + "/posters/gladiator.jpg",
    description: "A betrayed Roman general fights as a gladiator to seek justice and revenge."
  },
  {
    id: 26,
    title: "La La Land",
    year: 2016,
    genre: "Romance",
    rating: "8.0",
    director: "Damien Chazelle",
    img: process.env.PUBLIC_URL + "/posters/lalaland.jpg",
    description: "An aspiring actress and a jazz musician chase their dreams while falling in love."
  }
];


export default movies;