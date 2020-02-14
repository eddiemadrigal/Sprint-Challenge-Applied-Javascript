# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your Tead Lead and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your Team Lead.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

The Document Object Model (DOM) is the browsers API that acts as a bridge between code and the user's screen.  It can be static, dynamic and overwritten using tools like JavaScript.

2. What is an event?

An event is an action that occurs on a web page and can be described as a click, scroll, drag-n-drop, double click and so forth.  Events can be listened for and resulting behaviors can then be triggered.

3. What is an event listener?

An event listener can be thought of as an element's 'action' sensor that waits for some action (usually from the user) to occur on an element.  

4. Why would we convert a NodeList into an Array?

Arrays have more properties and methods available than a NodeList.  This advantage allows the data found in the array to be molded, transformed and shaped into more manageable groupings of data.

5. What is a component?

A component is a reusable block of code that incorporates html, css and javascript.  Components can be used as stand-alone snippets of code that can then be inserted into the DOM as needed.

### Git Set up

* [X] Fork the project into your GitHub user account
* [X] Clone the forked project into a directory on your machine
* [X] Create a pull request before you start working on the project requirements.  You will continuously push you updates throughout the project.
* [X] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [X] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the HTML file itself.

* [X] Following the instructions in the `Header/index.js` file, create the Header component. 

* [ ] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

* [ ] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

* [ ] Complete the carousel functionality in `Carousel.js`

* [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [ ] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [ ] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.
