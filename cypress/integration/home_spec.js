// describe("Feedback Loop login flows", () => {
//   it("Should confirm that true is equal to true", () => {
//     expect(true).to.equal(true);
//   });
// });
import movieData from '../../src/MovieData';

describe('Home page', () => {

  it('Should display a heading and all movie covers', () => {
    let fakeApi = "https://rancid-tomatillos.herokuapp.com/api/v2/movies";
    cy.intercept(fakeApi, movieData)
    .visit("http://localhost:3000")
      .contains("h1", "Rancid Tomatillos")
      .get(".poster")
      .should("be.visible");
  });

  it('Should display an error message if the url can\'t be reached', () => {
    let fakeApi2 = "https://rancid-tomatillos.herokuapp.com/api/v2/movies";
    cy.intercept(fakeApi2, {
          statusCode: 500,
          response: {
              "error": "error message"
          }
        })
      .visit("http://localhost:3000")
      .contains(
      "h2",
      "Oops, our server is napping... Refresh page and try again"
    );
  })


});