# Formula Fun

## Table of Contents
  - [Introduction](#Introduction)
  - [Technologies](#Technologies)
  - [Contributors](#Contributors)
  - [Illustrations](#Illustrations)
  - [Deployed Page](#Deployed-Page)
  - [Wins](#Wins)
  - [Challenges & Improvements](#Challenges-&-Improvements)
  - [Set Up](#Set-Up)
  - [Sources](#Sources)
  - [Project Spec](#Project-Spec)

## Introduction
For all the Formula One fans with favorite drivers who drive for different teams - now is your chance to make the team of your dreams and find out how they would perform!  No longer do you have to pick one uniform to root for - the sky is the limit with this responsive, accessible React app.  Pick from any of the drivers from the 2021 season, read through their overall career stats, and decide who you want to pair up to create the season winners.

## Technologies
  - React
  - Router
  - Cypress
  - Javascript
  - JSX
  - Fetch API
  - CSS
  - HTML

## Contributors
  - [Kara Anderson](https://github.com/Kanderson58)

## Illustrations 
![Demo](https://user-images.githubusercontent.com/114871395/233849014-229e2fe4-afd7-489f-8d1e-eaac544df7ad.gif)

## Deployed Page

Visit the [deployed page](https://formula-fun-two.vercel.app/) to start building your F1 team!

## Wins
- Being able to implement a fully accessible, mouse-free navigatable, screen reader capable app that can truly be used by anyone.
- Creating a beautifully responsive design that looks modern and inviting on every screen.
- Providing seamless error handling that prevents most user errors before they even happen.
- User tested to ensure quality before deployment.

## Challenges & Improvements
- API limit - this app was developed with a 100 request per day limit.  In order to be as clean as possible, each call was strategically planned and created to be reusable, only fire when a user requests specific data, and allow page-to-page navigation without excessive or unnecessary fetches.
- Error handling with an API that intercepts errors behind the scenes was a challenge.  This API tackles the errors and sends them back in an array with a message for the developer.  Translating this into something a user will understand and be able to navigate was challenging.  Clone this repo and try a fetch with a bad parameter to see how I was able to successfully error handle for these responses!
- Async Javascript - for this project, I learned and implemented asynchronous fetches to allow the page to present data promtly to the user.

## Set Up

1. Fork this repo  
2. Clone the repo to your local machine   
3. Run `npm i`, then ` npm run build`, then `npm start`
4. View the project in the browser by opening localhost:3000

## Sources
  - [MDN](http://developer.mozilla.org/en-US/)
  - [W3Schools](https://www.w3schools.com/)
  - [React Docs](https://reactjs.org/docs/getting-started.html)
  - [Cypress Docs](https://docs.cypress.io/guides/overview/why-cypress.html)
  - [API-Formula-1](https://api-sports.io/documentation/formula-1/v1)

## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/showcase.html).