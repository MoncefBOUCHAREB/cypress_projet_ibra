///<reference types="cypress"/> 


class LoginPage{
        elements={
            Email : ()=>cy.get("#email"),
            password : ()=>cy.get("#password"),
            login : ()=>cy.contains("Se connecter"),
        }
    Setemail(u){
        this.elements.Email().type(u,{force:true})
    }
    Setpassword(p){
        this.elements.password().type(p,{force:true})
    }
    CliqueSeconnecter(){
        this.elements.login().click()
    }
    }
    export default new LoginPage()