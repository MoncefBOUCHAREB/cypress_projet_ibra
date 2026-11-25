
class AcceuilPom {

    elements = {
       page_title:()=>cy.get("[data-testid='page-title']"),
       btn_projet_sauce_demo:()=>cy.get(".truncate").contains("Projet Sauce Demo"),
       btn_add_test:()=>cy.get("[data-testid='project-btn-cas-de-test']"),

       
    
    }



  cliqueBtnProjet(){
    this.elements.btn_projet_sauce_demo().click()

  }

  cliqueAddTest(){
    this.elements.btn_add_test.click()

  }

  getTitle(){
    return this.elements.page_title()
  }
 

}

export default new AcceuilPom()


