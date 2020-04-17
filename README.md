# SG News - A Personal NC News React App

This project represents my early forays into React, and particularly with using React to render a website based heavily on communication with a backend API (to see more about that, head over to my [Northocders Now API repo](https://github.com/sgwicks/nc-news)).

## The Live Hosted Site: [SG News](https://sg-news.netlify.app/)

This site represents a Reddit-esque news/blog/social media site where registered users can browse articles by topic, comment on them, and up- or down-vote articles and comments alike.

The site is designed to be scalable from day 1, with responsive design of course, but also functionality that is ready to accept additional topics or articles and immediately integrate them into the layout.

I also tried to keep accessibility in mind while designing the site, and this can mostly be seen with the larger hitboxes for each link, and the semantic html, avoiding excessive nesting wherever possible.

The layout is designed to be responsive, using a mix of grid and flex techniques to achieve an elegant display that doesn't break when you change screen size or device. Media queries allow the display to change functionality and layout on smaller devices, too.

## The Live Backend: [NC News Now](https://github.com/sgwicks/nc-news)

NC News Now was a project I worked on to implement a database for the data which you can now see displayed on the site. For more information head over to the Readme on that project, or go [directly to the API](https://nc-news-now.herokuapp.com/api).

## Running The Project - Node v13.11

```bash
# Clone the repo to your own computer
git clone https://github.com/sgwicks/nc-news

# The app is stored in the nc-news-fe directory
cd ./nc-news/nc-news-fe

# Install dependencies
npm i
```

### Dependencies - React v16.13

#### Axios - v0.19

I used axios to communicate with the backend server. Axios is semantically simple and promisified, making it pleasant to work with and easy to understand both in functionality and readability.

[Axios Docs](https://github.com/axios/axios)

#### @reach/router - v1.3

Routing is handled by Reach Router, a simple one-two punch package of Router and Link components that allowed me to handle any path request with just a couple of lines of code.

Crucially React Router understands parametric endpoints (e.g. topics/:topic_slug) which makes scalability simple, allowing me to build it in from day one.

[Reach Router Docs](https://reach.tech/router)

#### Styled-components - v5.1

Styled Components is a neat little package that makes combining JS and CSS the simplest thing in the world. Even where JS isn't necessary, all of the styling for this project uses Styled Components JS files rather than CSS files, for consistency's sake.

This project hasn't even scratched the surface of its capabilities, but it did allow me to write much tidier code, allowed me to style Router and Link components with no headaches, and by building it in now, I have the option to add much more interesting functionality down the line, if it's needed.

[Styled Components Docs](https://styled-components.com/)

### Scripts

```bash
npm start # Opens a version of the React App on localhost:3000

npm test # Runs test files - currently just utils.test.js
```

## Breakdown

### Components

### Utilities

### API Requests

### Styles

### Wireframes

## Plans for Future
