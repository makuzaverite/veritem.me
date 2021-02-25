/// <reference types="Cypress"/>

// const {  beforEach} = require('mocha')


describe('The Home Page', () => {

  // beforeEach(()=>{
  //   cy.exec("npm run dev")
  // })

  it('successfully loads', () => {
    cy.visit('/') // change URL to match your dev URL
  })

  // it('has title',()=>{
  //   cy.contains("Verite")
  // })

})
