// describe("Feedback Loop login flows", () => {
//   it("Should confirm that true is equal to true", () => {
//     expect(true).to.equal(true);
//   });
// });
import movieData from '../../src/MovieData';

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', movieData)
  });

  it('Should display a heading and all movie covers', () => {
    cy.contains('h1', 'Rancid Tomatillos')
  });

});