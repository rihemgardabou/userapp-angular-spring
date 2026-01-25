
# Application d’Enregistrement des Utilisateurs (Angular & Spring Boot)
##  Description
Cette application est une application simple d’inscription utilisateur.
Elle permet à un utilisateur de saisir ses informations via une interface Angular,
puis de les enregistrer dans une base de données PostgreSQL via une API Spring Boot.

Ce projet a été réalisé dans un objectif pédagogique afin d’appliquer
les concepts DevOps et l’architecture Frontend / Backend.

---

##  Architecture
- Frontend : Angular
- Backend : Spring Boot (API REST)
- Base de données : PostgreSQL
- Communication : HTTP (JSON)

---

##  Technologies utilisées
- Java JDK 17
- Spring Boot 3.0.0
- Angular 21.1.0
- Node.js 24.13.0
- PostgreSQL 18.1
- Maven
- Git & GitHub

---

##  Fonctionnalités
- Formulaire d’inscription utilisateur
- Validation des champs (obligatoires)
- Enregistrement des données en base
- API REST sécurisée (CORS)
- Architecture claire et évolutive

---

##  Lancer le projet
 
 Backend
```bash
.\mvnw spring-boot:run

API disponible sur :
http://localhost:8080/users/register

Frontend
npm install
ng serve


Application disponible sur :
http://localhost:4200






