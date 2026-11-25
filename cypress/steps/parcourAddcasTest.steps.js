///<reference types="cypress"/> 
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../pages/LoginPage.js"
/*iven("moncef",()=>{
})*/

Given('je suis sur le site de fonctionnel thrundrz {string}', (s) => {
    cy.visit(s)
})

When('je saisi email {string} et je saisie le password {string}', (s, s2) => {
    LoginPage.Setemail(s)
    LoginPage.Setpassword(s2)
})

When('je clique sur button Se connecter', () => {
    LoginPage.CliqueSeconnecter()
})

When('je suis redireger vers la page dacceuil {string}', (s) => {
    cy.url().should('include',s)
})

When('je verifier le titre {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je verfier le titre {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je remplie le titre {string}  le statut {string} le module {string} user story {string} la regle {string}', (s, s2, s3, s4, s5) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je clique sur cas de test', () => {
  // Write code here that turns the phrase above into concrete actions
})

When('je met la priorite {string} et type {string}', (s, s2) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je clique sur Projet sauce demo', () => {
  // Write code here that turns the phrase above into concrete actions
})

When('rempli etape1 action {string} donnees {string} resultatAtt {string}', (s, s2, s3) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je clique ajouter etape', () => {
  // Write code here that turns the phrase above into concrete actions
})

When('je coche {string} objectif {string} precoditions {string} donnees de test {string} postconditions {string}', (s, s2, s3, s4, s5) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je verifie num1 {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

When('rempli etape2 action {string} donnees {string} resultatAtt {string}', (s, s2, s3) => {
  // Write code here that turns the phrase above into concrete actions
})

When('rempli etape3 action {string} donnees {string} resultatAtt {string}', (s, s2, s3) => {
  // Write code here that turns the phrase above into concrete actions
})

When('rempli etape4 action {string}  resultatAtt {string}', (s, s2) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je verifie num3 {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je clique Enregistrer', () => {
  // Write code here that turns the phrase above into concrete actions
})

Then('je suis redireger et je verifier objectif {string} donnees de test {string} statut {string} et priorite {string}', (s, s2, s3, s4) => {
  // Write code here that turns the phrase above into concrete actions
})

When('je verifie num2 {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})


/*Then('je suis redireger vers la page dacceuil {string}', (s) => {
    cy.url().should('include',s)
})*/






