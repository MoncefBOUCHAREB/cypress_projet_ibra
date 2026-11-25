Feature: Fonctionnalitée  
    Background:
        Given je suis sur le site de fonctionnel thrundrz "https://fonctionnel.thrundrz.fr/"
    Scenario:"login valide"
        When  je saisi email "teams2@gmail.com" et je saisie le password "Teams2025@"
        And   je clique sur button Se connecter  
        And je suis redireger vers la page dacceuil "https://fonctionnel.thrundrz.fr/"
        And je verifier le titre "Bonjour teams2"
        And je clique sur Projet sauce demo 
        And je verfier le titre "Projet Sauce Demo"
        And je clique sur cas de test 
        And je remplie le titre "Login valide"  le statut "En revue" le module "login" user story "US-01" la regle "RG6" 
        And je met la priorite "Haute" et type "IHM" 
        And je coche "Web" objectif "Login valide" precoditions " des identifients valide " donnees de test "standard_user, secret_sauce" postconditions " je suis dans la page inventory "
        And rempli etape1 action "visiter le site" donnees "saucedeo.com" resultatAtt "je suis sur la page login" 
        And je clique ajouter etape
        And je verifie num1 "2"
        And rempli etape2 action "remplir username" donnees "standard_user" resultatAtt "le champs est bien remple" 
        And je clique ajouter etape
        And je verifie num2 "3"
        And rempli etape3 action "remplir password" donnees "secret_sauce" resultatAtt "le champs est bien remplie" 
        And je clique ajouter etape
        And je verifie num3 "4"
        And rempli etape4 action "clique sur le button login"  resultatAtt "redirection vers la page inventory" 
        And je clique Enregistrer
        Then je suis redireger et je verifier objectif "Login valide" donnees de test "standard_user, secret_sauce" statut "En revue" et priorite "Haute"
        
        #Given moncef 