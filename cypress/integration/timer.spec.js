describe('timer test', () => {
	it('happy new year test', () => {
		cy.visit('/')
		cy.clock(1640962740000)
		cy.tick(59000)
		cy.get('.timer_value').should('have.text', '1')

		cy.tick(1000)
		cy.get('.result').should('have.text', '2022')
	})
})
