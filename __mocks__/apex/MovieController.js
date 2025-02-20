const RESPONSE_DATA = [
  {
    title: 'Oppenheimer',
    year: 2023,
    link: 'https://letterboxd.com/film/oppenheimer-2023/',
    img: 'https://a.ltrbxd.com/resized/film-poster/7/8/4/3/2/8/784328-oppenheimer-0-2000-0-3000-crop.jpg?v=e3c6e7a32c',
  },
  {
    title: 'Parasite',
    year: 2019,
    link: 'https://letterboxd.com/film/parasite-2019/',
    img: 'https://a.ltrbxd.com/resized/film-poster/4/2/6/4/0/6/426406-parasite-0-2000-0-3000-crop.jpg',
  },
  {
    title: 'Whiplash',
    year: 2014,
    link: 'https://letterboxd.com/film/whiplash-2014/',
    img: 'https://a.ltrbxd.com/resized/sm/upload/cl/dn/kr/f1/4C9LHDxMsoYI0S3iMPZdm3Oevwo-0-2000-0-3000-crop.jpg',
  },
  {
    title: 'Shrek',
    year: 2001,
    link: 'https://letterboxd.com/film/shrek/',
    img: 'https://a.ltrbxd.com/resized/film-poster/5/1/3/4/4/51344-shrek-0-1000-0-1500-crop.jpg',
  },
  {
    title: 'Office Space',
    year: 1999,
    link: 'https://letterboxd.com/film/office-space/',
    img: 'https://a.ltrbxd.com/resized/film-poster/5/0/9/9/1/50991-office-space-0-2000-0-3000-crop.jpg',
  },
  {
    title: '1917',
    year: 2019,
    link: 'https://letterboxd.com/film/1917/',
    img: 'https://a.ltrbxd.com/resized/film-poster/4/6/0/1/5/5/460155-1917-0-2000-0-3000-crop.jpg',
  },
  {
    title: 'The Incredibles',
    year: 2004,
    link: 'https://letterboxd.com/film/the-incredibles/',
    img: 'https://a.ltrbxd.com/resized/film-poster/4/6/8/0/6/46806-the-incredibles-0-1000-0-1500-crop.jpg',
  },
  {
    title: 'Monty Python and the Holy Grail',
    year: 1975,
    link: 'https://letterboxd.com/film/monty-python-and-the-holy-grail/',
    img: 'https://a.ltrbxd.com/resized/film-poster/5/1/3/9/0/51390-monty-python-and-the-holy-grail-0-2000-0-3000-crop.jpg',
  },
  {
    title: 'The Big Lebowski',
    year: 1998,
    link: 'https://letterboxd.com/film/the-big-lebowski/',
    img: 'https://a.ltrbxd.com/resized/film-poster/5/1/9/3/5/51935-the-big-lebowski-0-2000-0-3000-crop.jpg',
  },
  {
    title: 'Get Out',
    year: 2017,
    link: 'https://letterboxd.com/film/get-out-2017/',
    img: 'https://a.ltrbxd.com/resized/film-poster/3/5/3/1/1/7/353117-get-out-0-2000-0-3000-crop.jpg',
  },
  {
    title: 'Fight Club',
    year: 1999,
    link: 'https://letterboxd.com/film/fight-club/',
    img: 'https://a.ltrbxd.com/resized/film-poster/5/1/5/6/8/51568-fight-club-0-2000-0-3000-crop.jpg',
  },
  {
    title: 'The Fast and the Furious',
    year: 2001,
    link: 'https://letterboxd.com/film/the-fast-and-the-furious-2001/',
    img: 'https://a.ltrbxd.com/resized/film-poster/4/6/8/1/3/46813-the-fast-and-the-furious-0-2000-0-3000-crop.jpg',
  },
]

export class getMovies {
  connected = false
  cachedConfig = {}

  constructor(dataCallback) {
    this.dataCallback = dataCallback
  }

  connect() {
    this.connected = true
    this.runMethod(this.cachedConfig)
  }

  disconnect() {
    this.connected = false
  }

  update(config) {
    // check if the config has changed, if not, no need to re-run the method
    if (Object.keys(config).filter((key) => this.isDiff(config, key))) {
      this.runMethod(config)
      this.cachedConfig = config
    }
  }

  isDiff = (config, key) => this.cachedConfig[key] !== config[key]

  runMethod(config) {
    const { connected } = this
    console.log('runmethod ', connected, config)

    if (connected) {
      this.dataCallback({
        data: RESPONSE_DATA,
        error: undefined,
      })
    }
  }
}
