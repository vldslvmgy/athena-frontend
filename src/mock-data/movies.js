const movies = [
  {
    title: 'Whiplash',
    year: 2014,
    cast: [
      'Miles Teller',
      'Melissa Benoist',
      'Austin Stowell'
    ],
    genres: [
      'Drama'
    ]
  },
  {
    title: "You're Not You",
    year: 2014,
    cast: [
      'Hilary Swank',
      'Emmy Rossum',
      'Josh Duhamel',
      'Frances Fisher'
    ],
    genres: [
      'Drama'
    ]
  },
  {
    title: 'Birdman or (The Unexpected Virtue of Ignorance)',
    year: 2014,
    cast: [
      'Michael Keaton',
      'Edward Norton',
      'Naomi Watts',
      'Emma Stone'
    ],
    genres: [
      'Comedy'
    ]
  },
  {
    title: 'The Book of Life',
    year: 2014,
    cast: [
      'Channing Tatum',
      'Zoe Saldana',
      'Diego Luna',
      'Ice Cube'
    ],
    genres: [
      'Animated',
      'Adventure'
    ]
  },
  {
    title: 'Camp X-Ray',
    year: 2014,
    cast: [
      'Kristen Stewart',
      'Peyman Moaadi',
      'Julia Duffy',
      'Lane Garrison'
    ],
    genres: [
      'Drama'
    ]
  },
  {
    title: 'The Czar of Black Hollywood',
    year: 2014,
    cast: [
      'Oscar Micheaux'
    ],
    genres: [
      'Biography',
      'Documentary'
    ]
  },
  {
    title: 'Dear White People',
    year: 2014,
    cast: [
      'Tyler James Williams',
      'Dennis Haysbert',
      'Tessa Thompson',
      'Kyle Gallner'
    ],
    genres: [
      'Drama'
    ]
  },
  {
    title: 'Fury',
    year: 2014,
    cast: [
      'Brad Pitt',
      'Shia LaBeouf',
      'Logan Lerman',
      'Michael Peña'
    ],
    genres: [
      'War'
    ]
  },
  {
    title: 'Listen Up Philip',
    year: 2014,
    cast: [
      'Jason Schwartzman',
      'Elisabeth Moss',
      'Jonathan Pryce'
    ],
    genres: [
      'Drama'
    ]
  },
  {
    title: 'Nightcrawler',
    year: 2014,
    cast: [
      'Jake Gyllenhaal',
      'Rene Russo',
      'Riz Ahmed',
      'Bill Paxton'
    ],
    genres: [
      'Thriller'
    ]
  },
  {
    title: 'Pernicious',
    year: 2014,
    cast: [
      'Ciara Hanna',
      "Emily O'Brien",
      'Jackie Moore',
      'Russell Geoffrey'
    ],
    genres: [
      'Horror'
    ]
  },
  {
    title: 'Young Ones',
    year: 2014,
    cast: [
      'Kodi Smit-McPhee',
      'Elle Fanning',
      'Michael Shannon',
      'Nicholas Hoult'
    ],
    genres: [
      'Science Fiction'
    ]
  },
  {
    title: 'Laggies',
    year: 2014,
    cast: [
      'Keira Knightley',
      'Chloë Grace Moretz',
      'Sam Rockwell',
      'Mark Webber'
    ],
    genres: [
      'Romance',
      'Comedy'
    ]
  },
  {
    title: 'Ouija',
    year: 2014,
    cast: [
      'Ana Coto',
      'Olivia Cooke',
      'Daren Kagasoff',
      'Bianca A. Santos'
    ],
    genres: [
      'Horror'
    ]
  },
  {
    title: 'Interstellar',
    year: 2014,
    cast: [
      'Anne Hathaway',
      'Matthew McConaughey',
      'Jessica Chastain',
      'Michael Caine'
    ],
    genres: [
      'Science Fiction'
    ]
  },
  {
    title: "A Merry Friggin' Christmas",
    year: 2014,
    cast: [
      'Robin Williams',
      'Joel McHale',
      'Clark Duke',
      'Oliver Platt'
    ],
    genres: [
      'Comedy'
    ]
  },
  {
    title: 'The Better Angels',
    year: 2014,
    cast: [
      'Diane Kruger',
      'Brit Marling',
      'Wes Bentley'
    ],
    genres: [
      'Biography'
    ]
  },
  {
    title: 'Big Hero 6',
    year: 2014,
    cast: [
      'Ryan Potter',
      'Scott Adsit',
      'Jamie Chung',
      'Damon Wayans, Jr.'
    ],
    genres: [
      'Animated',
      'Comedy'
    ]
  },
  {
    title: 'Elsa & Fred',
    year: 2014,
    cast: [
      'Shirley MacLaine',
      'Christopher Plummer',
      'Marcia Gay Harden'
    ],
    genres: [
      'Comedy',
      'Drama'
    ]
  },
  {
    title: 'Jessabelle',
    year: 2014,
    cast: [
      'Sarah Snook',
      'Mark Webber',
      'Joelle Carter',
      'Amber Stevens'
    ],
    genres: [
      'Horror'
    ]
  },
  {
    title: 'The Peripheral',
    year: 2014,
    cast: [
      'Randy Frank',
      'Lynn Lowry'
    ],
    genres: [
      'Horror'
    ]
  },
  {
    title: 'Beside Still Waters',
    year: 2014,
    cast: [
      'Ryan Eggold',
      'Brett Dalton',
      'Beck Bennett'
    ],
    genres: [
      'Comedy',
      'Drama'
    ]
  },
  {
    title: 'Beyond the Lights',
    year: 2014,
    cast: [
      'Gugu Mbatha-Raw',
      'Minnie Driver',
      'Nate Parker',
      'Danny Glover'
    ],
    genres: [
      'Romance'
    ]
  },
  {
    title: 'Dumb and Dumber To',
    year: 2014,
    cast: [
      'Jim Carrey',
      'Jeff Daniels',
      'Laurie Holden',
      'Jennifer Lawrence'
    ],
    genres: [
      'Comedy'
    ]
  },
  {
    title: 'Foxcatcher',
    year: 2014,
    cast: [
      'Steve Carell',
      'Channing Tatum',
      'Mark Ruffalo',
      'Vanessa Redgrave'
    ],
    genres: [
      'Drama'
    ]
  },
  {
    title: 'The Homesman',
    year: 2014,
    cast: [
      'Tommy Lee Jones',
      'Hilary Swank',
      'Grace Gummer',
      'Miranda Otto'
    ],
    genres: [
      'Drama'
    ]
  },
  {
    title: 'Saving Christmas',
    year: 2014,
    cast: [
      'Kirk Cameron',
      'Darren Doane',
      'David Shannon',
      'Bridgette Ridenour'
    ],
    genres: []
  },
  {
    title: 'Witching Hour',
    year: 2014,
    cast: [
      'Reanna Roanne',
      'Emily Johnson-Erday',
      'Patrick Ferrara'
    ],
    genres: [
      'Horror'
    ]
  },
  {
    title: 'The Hunger Games: Mockingjay – Part 1',
    year: 2014,
    cast: [
      'Josh Hutcherson',
      'Jennifer Lawrence',
      'Liam Hemsworth',
      'Donald Sutherland'
    ],
    genres: [
      'Adventure'
    ]
  },
  {
    title: 'Horrible Bosses 2',
    year: 2014,
    cast: [
      'Jason Bateman',
      'Charlie Day',
      'Jennifer Aniston',
      'Jason Sudeikis',
      'Jamie Foxx'
    ],
    genres: [
      'Comedy'
    ]
  },
  {
    title: 'Penguins of Madagascar',
    year: 2014,
    cast: [
      'Tom McGrath',
      'John DiMaggio',
      'Christopher Knights'
    ],
    genres: [
      'Animated'
    ]
  },
  {
    title: 'Comet',
    year: 2014,
    cast: [
      'Emmy Rossum',
      'Justin Long',
      'Eric Winter',
      'Kayla Servi'
    ],
    genres: [
      'Comedy',
      'Drama'
    ]
  },
  {
    title: 'Wild',
    year: 2014,
    cast: [
      'Reese Witherspoon',
      'Laura Dern',
      'Thomas Sadoski',
      'Michiel Huisman'
    ],
    genres: [
      'Biography'
    ]
  },
  {
    title: 'Exodus: Gods and Kings',
    year: 2014,
    cast: [
      'Christian Bale',
      'Joel Edgerton',
      'Aaron Paul',
      'John Turturro'
    ],
    genres: [
      'Drama'
    ]
  },
  {
    title: 'Inherent Vice',
    year: 2014,
    cast: [
      'Joaquin Phoenix',
      'Owen Wilson',
      'Reese Witherspoon',
      'Benicio del Toro'
    ],
    genres: [
      'Comedy',
      'Drama'
    ]
  },
  {
    title: 'The Color of Time',
    year: 2014,
    cast: [
      'James Franco',
      'Henry Hopper',
      'Mila Kunis',
      'Zach Braff'
    ],
    genres: [
      'Drama'
    ]
  },
  {
    title: 'Top Five',
    year: 2014,
    cast: [
      'Chris Rock',
      'Rosario Dawson',
      'Kevin Hart',
      'Gabrielle Union'
    ],
    genres: [
      'Comedy'
    ]
  },
  {
    title: 'Goodbye To All That',
    year: 2014,
    cast: [
      'Paul Schneider',
      'Melanie Lynskey',
      'Anna Camp'
    ],
    genres: [
      'Comedy'
    ]
  },
  {
    title: 'Annie',
    year: 2014,
    cast: [
      'Jamie Foxx',
      'Quvenzhané Wallis',
      'Rose Byrne',
      'Bobby Cannavale'
    ],
    genres: [
      'Comedy',
      'Drama'
    ]
  },
  {
    title: 'Night at the Museum: Secret of the Tomb',
    year: 2014,
    cast: [
      'Ben Stiller',
      'Robin Williams',
      'Owen Wilson',
      'Ben Kingsley'
    ],
    genres: [
      'Comedy'
    ]
  },
  {
    title: 'Big Eyes',
    year: 2014,
    cast: [
      'Amy Adams',
      'Christoph Waltz',
      'Danny Huston',
      'Terence Stamp'
    ],
    genres: [
      'Drama'
    ]
  },
  {
    title: 'The Interview',
    year: 2014,
    cast: [
      'James Franco',
      'Seth Rogen',
      'Lizzy Caplan',
      'Randall Park'
    ],
    genres: [
      'Action',
      'Comedy'
    ]
  }
];

export default movies;
