/// <reference types="cypress"/>

const { beforeEach } = require('mocha')


describe('check if starts',() => {
    beforeEach(()=>{
        cy.visit('localhost:3000')
    })
    it('has the title',()=>{
        cy.contains('verite')
        expect(2).to.equal(2)
    })
})
