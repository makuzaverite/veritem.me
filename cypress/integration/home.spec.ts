/// <reference types="Cypress"/>

// const { beforeEach } = require('mocha')


describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/') // change URL to match your dev URL
  })

  it('has title',()=>{
    cy.contains("Verite")
  })
})
