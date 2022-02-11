// describe("Feedback Loop login flows", () => {
//   it("Should confirm that true is equal to true", () => {
//     expect(true).to.equal(true);
//   });
// });
import movieData from '../../src/MovieData';

describe('Home page', () => {
  beforeEach(() => {
    let fakeApi = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    cy.visit('http://localhost:3000')
    .intercept(fakeApi, movieData)
  });

  it('Should display a heading and all movie covers', () => {
    cy.contains('h1', 'Rancid Tomatillos')
    .get('.poster').should('be.visible')
  });

  it('Should display an error when ')


});