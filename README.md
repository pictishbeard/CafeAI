# CafeAI
Final CodeClan Project, a chatbot built in React, Node.js and using MongoDB to assist with reserving coffees through an interactive messenger bot.

Purpose -
  
  This project was chosen based on a want to understand the base principles in how interactive chatbots across various services and platforms are built,
  as such I have chosen to build out a very rudimentary Conversational AI bot which uses some basic Natural Language Processing to determine its response to user input.
  Given the time constraint of this solo project the responses are restricted to Hello, Goodbye and variations of the two.
  
How To Run -
  
  To run this bot the following will need to be done:/br
  - Clone this repo onto your own local machine/br
  - Open up the repo in your IDE
  - Run the following command in the IDE terminal within Server directory of the project: npm install
  - Do the same command but this time in Client
  - Go to Server and run: node bin/www
  - Open a new terminal in the ide beside the running one, go to Client and run: npm start
   
CURRENT ISSUE
 - At the moment there is a CORS issue with the project due to how the client grabs responses from the server, to workaorund this open the project in a Chrome browser, go to the Extensions store,
   and download Moesif Origin & CORS Charger, upon reloading the webpage and activating this extension the responses will then function
   
Any feedback or advice on this project would be highly appreciated! I am a lone developer on it and would love to improve my understanding through iterations and improvements of this bot.
