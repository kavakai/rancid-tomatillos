import movieData from "../../src/MovieData";


describe('Filter function', () => {

  it('should be able to filter movies by title', () => {
    let fakeApi = "https://rancid-tomatillos.herokuapp.com/api/v2/movies";
    cy.intercept(fakeApi, movieData)
      .visit("http://localhost:3000")
      .get(".pro-item-content")
      .contains('Search By Title')
      .click()
      .get('input[name="textInput"]')
      .type("Mulan")
      .get("button")
      .contains("SUBMIT")
      .click()
      .get('a')
      .should("have.attr", 'href', '/337401');
  })

  it('should be able to filter movies by release date', () => {
    let fakeApi = "https://rancid-tomatillos.herokuapp.com/api/v2/movies";
    cy.intercept(fakeApi, movieData)
      .visit("http://localhost:3000")
      .get(".pro-item-content")
      .contains("Search By Release Date")
      .click()
      .get('input[name="dateInput"]')
      .type("2019-12")
      .get("button")
      .contains("SUBMIT")
      .click()
      .get("a")
      .should("have.attr", "href", "/592350");
  })

  it('should be able to filter by average rating', () => {
    let fakeApi = "https://rancid-tomatillos.herokuapp.com/api/v2/movies";
    cy.intercept(fakeApi, movieData)
      .visit("http://localhost:3000")
      .get(".pro-item-content")
      .contains("Search by Rating")
      .click()
      .get('[type="radio"]')
      .check('3')
      .get("button")
      .contains("SUBMIT")
      .click()
      .get("a")
      .should("have.attr", "href", "/694919");
  })

  it('should return an error message if no movies are found', () => {
    let fakeApi = "https://rancid-tomatillos.herokuapp.com/api/v2/movies";
    cy.intercept(fakeApi, movieData)
      .visit("http://localhost:3000")
      .get(".pro-item-content")
      .contains("Search by Rating")
      .click()
      .get('[type="radio"]')
      .check("4")
      .get("button")
      .contains("SUBMIT")
      .click()
      .get(".poster")
      .should("not.exist")
      .get("h2")
      .contains(
        "No movies found, try again"
      );
  })
})