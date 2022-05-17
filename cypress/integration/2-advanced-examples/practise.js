/// <reference types="cypress"/>
//const navbarText=Cypress.env("navbarText")//cerating a constant veriable which gets value from the environmnet variable
const automationHomePageLink=Cypress.env("automationUrl")
context('My First Test', () =>
{
  // beforeEach(()=>{
  //   cy.visit('/')
    

  // })

  //it('Verify Title Of The Page', () =>
  //{
  //  cy.  visit('/register')
  //cy.title().should('eq','nopCommerce demo store')

  //})
    /*it('correctly renders the nopCommerce link',()=> {
      cy.visit('/')
      cy.findByText(navbarText).should('exist')

    })
  //   */
  //  it('types into an email field',()=>{

  //    cy.visit('/login?returnUrl=%2F')
  //    cy.get('.email').type('test@email.com')

  //    
  //  })
      
  // it('type in serach field',()=>{
  //   cy.findAllByPlaceholderText('Search store').type('Build your own computer    ')
  //   cy.get('button[type=submit]').click()
  //   cy.wait(3000)
  //   console.log('test is finished')
  //   cy.log("cypress log open")

  // })
  //**************************************************************** */
  //handling execution of non cypress command explicitly
  /****************************************************************** */

  // it('type in serach field',()=>{
  //    cy.findAllByPlaceholderText('Search store').type('Build your own computer    ')
  //    cy.get('button[type=submit]').click()
  //     cy.wait(3000).then(()=>{              //this will help to run js code in linear manner
  //       console.log('test is finished')
  //     })

    
  // })
  /***********************************************************************
   * Assertion in  Cypress
   **********************************************************************/

// //possitive Assertion
//     it('short by dropdown list have name:Z to A on 3rd index',()=>{
//       cy.visit('/desktops')
//       cy.get('#products-orderby').find('option').eq(2).should('have.text','Name: Z to A')

//     })

//   //Negative Assertion
//   it('short by dropdown list don not have name :Z to A on first index',()=>{
//     cy.visit('/desktops')
//     cy.get('#products-orderby').find('option').first().should('not.have.a.text','Name: Z to A')
//   })
//   //chain assertion multiple assertion in one line
//   it('short by dropdown list have name:Z to A on 3rd index',()=>{
//     cy.visit('/desktops')
//     cy.get('#products-orderby').find('option').eq(2).should('have.text','Name: Z to A').should('have.value','6')

//   })
/*************************************************************
 * UI Cypress command
 * ********************************************************** */


// it('ui command practise on onCommerce Page',()=>{
//   cy.visit('/')
//   cy.findAllByText('Notebooks').first().click({force: true})
//   cy.url().should('contain','/notebooks')

// })

// it('lets type in search bar field',()=>{
//   cy.findAllByPlaceholderText('Search store').type('Build your own computer    ').should('have.value','Build your own computer    ')


// })

// it('lets clear the search field',()=>{
//   cy.findAllByPlaceholderText('Search store').type('Build your own computer    ').should('have.value','Build your own computer    ')
//   .clear().should('have.value','')


// })

// it('lets do action on check box',()=>{
//   cy.visit(automationHomePageLink)
//   cy.get('a[title=Dresses]').eq(0).click({force: true})
//   cy.get('.subcategory-name').first().click()
//   cy.get('.checkbox').eq(0).check().should('be.checked')
  

// })

/**************************************************************
 * Fixtures in cypress
 **************************************************************/

// beforeEach(()=>{
//   cy.fixture('example').then(function(data){
//     this.data=data
//     cy.log('This Data: ',data)
//   })
// })
// it('pulling data from the fixture file',()=>{
//   cy.fixture('example').then((data)=>{
//     cy.log('DATA: ' ,data)
//   })
// })

// it('update fixture data inline',()=>{
//   cy.fixture('example').then((data)=>{
//     data.email='updated@mail.com'
//     cy.log('Updated Data: ',data)
//   })
// })
//   it('checking  data after update',()=>{
//     cy.fixture('example').then((data)=>{
//       cy.log('afterUpdating data is: ',data)
//     })

//   })
/************************************************************************
 * custom commands
 *************************************************************************/
it('sets a token to a local storage',()=>{
  cy.setLocalStorage('token','abcd@')
})
it(' set and get a local storage',()=>{
  cy.setLocalStorage('token','abcd@')
  cy.getLocalStorage('token').should('eq','abcd@')
})
it('overwite the type command by using sensitive charaecter',()=>{
  cy.visit('/login?returnUrl=%2F')
   cy.get('.email').type('test@email.com')
   cy.get('.email').clear()
   cy.get('.email').type('test@email.com',{ sensitive: true})

})

})





