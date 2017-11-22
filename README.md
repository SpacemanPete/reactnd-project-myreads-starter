# MyReads Project

This project began as a fork of the starter project with my modification to eet the project requirements. 

I am submitting the project in an incomplete state in orde to get feedback on the current structure of the code design. 

The SearchBooks.js component does not yet work as requested, I'm a bit stuck on that component and request advice on where I might be going wrong.

I am open to suggestions on how to better wire up the components to pass data to each other. For example, it feels uncomfortable to me to have the App.js component pass the `shelfUpdate` function to the Bookshelf.js component, which then passes it down to the Book.js component as the `handleChange` function. Is this a good implementation of such a scenario? It seems to bind all the components together quite explicitly.

## Setup Instructions

* install all project dependencies with `npm install`
* start the development server with `npm start`