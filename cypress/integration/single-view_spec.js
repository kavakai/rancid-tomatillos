describe('MovieInfo view', () => {
    let sadMovie = {
      id: 737173,
      title: 'Maratón After',
      poster_path: "https://image.tmdb.org/t/p/original//opZKcgocttEOAUzqluX3bUbbDew.jpg",
      backdrop_path: "https://www.esm.rochester.edu/uploads/NoPhotoAvailable.jpg",
      release_date: "2020-09-03",
      overview: "",
      genres: [],
      budget: 0,
      revenue: 0,
      runtime: 0,
      tagline: "",
      average_rating: 4.333333333333333
    }
    let movie = {
      id: 340102,
      title: "The New Mutants",
      poster_path:
        "https://image.tmdb.org/t/p/original//xrI4EnZWftpo1B7tTvlMUXVOikd.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//eCIvqa3QVCx6H09bdeOS8Al2Sqy.jpg",
      release_date: "2020-08-26",
      overview:
        "Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.",
      genres: ["Action", "Science Fiction", "Horror", "Adventure"],
      budget: 67000000,
      revenue: 3100000,
      runtime: 94,
      tagline: "It's time to face your demons",
      average_rating: 4,
    }

    it('should display a single movie when a user clicks on a movie poster', () => {
      cy.intercept(
        "https://rancid-tomatillos.herokuapp.com/api/v2/movies/340102",
        { body: { movie } }
      )
        .visit("http://localhost:3000/340102")
        .contains("h2", movie.title)
        .get("button")
        .should("be.visible")
        .get(".backdrop")
        .should(
          "have.attr",
          "alt",
          movie.title
        );
    })
  
  it('should not display info if it doesn\'t exist', () => {
      cy.intercept(
        "https://rancid-tomatillos.herokuapp.com/api/v2/movies/737173",
        { body: { sadMovie } }
      ).visit("http://localhost:3000/737173")
        .get('.genres')
        .should('not.exist')
    })
});
