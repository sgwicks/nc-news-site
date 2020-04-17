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

I erred on the side of over-componentisation for this project. It allowed me to make the code a little easier to read, and made structuring the site's layout and functionality easier to comprehend.

#### App

- **Header:** Handles the h1 tag and user info (currently hardcoded)

- **Nav:** Handles the nav bar (which is dynamically created based on number of topics received from the API)

- **Router:** Handles pathing to

  - **Article List:** Displays a list of articles on a path of `/`, `/articles` or `/topics/:topic_slug`

  - **Article:** Displays a single article on a path of `/articles/:article_id`

- **Footer:** Displays the footer. Nothing much interesting going on down here right now.

#### Article List

The Article List uses a `<main>` tag, with a dynamic `<h2>` tag based on topic currently displayed (including 'All'). Makes an API request on mount and update. It also includes the following components:

- **Dropdown:** Handles the dropdown list and uses its parent API request functions to update the parent on selection.

- **Article Card:** Handles each article in a list, dynamically displaying information on the title, author, topic, date created, votes and comment count. The entire card is a link (based on `article_id`) to the article, providing a larger hitbox for accessibility.

#### Article

Article uses an `<article>` tag and dynamically requests and displays information based on the `:article_id` provided by the url. It uses the same Article Info component as the Article Card does to provide its header, and also uses the following components:

- **Votes:** Handles the ability of a user to vote on an article. Votes are limited to +/- 1 per page visit.

- **Comment List:** Handles the display of all comments on a given article, sorted by date descending. Also includes an input box for a logged in user (currently hardcoded) to post a new comment to the current article.

#### Comment List

The Comment List component includes the Comment Form and Comment components to allow users to interact with comments on a currently viewed article:

- **Comment Form:** The input box is a controlled component which also stores input in local storage to retain it on page reload. Trying to post an empty comment fails with an error message. Optimistically renders the new comment before making the post request, then refreshes with the real comment, or removes it with an error if the request fails for some reason. On a failed request, the input box refreshes from local storage so that it isn't lost. On a successful request, local storage refreshes to empty.

- **Comment:** Each comment component uses the Votes component to allow users to vote on individual comments with exactly the same functionality as voting on an article. Comments written by the currently logged in user also display a delete button, allowing you to delete your own posted comments.

### Utilities

**stringToTitleCase():** This project only required one 'utility' function, to convert incoming data from the API into title case. I use this on topic_slugs to render the topic on the Nav and Article Info components, and also to display the title on the Article Info and Article components.

### API Requests

- **getTopics:** Used in the Nav component to retrieve a list of topic_slugs

- **getArticles:** Used in the Article List component to retrieve a list of articles based on a provided topic_slug and sort_by queries.

- **getArticleById:** Used in the Article component to display an article based on an article_id.

- **getCommentsByArticleId:** Used in the Comment List (in the Article component) to retrieve a list of comments based on an article_id.

- **postCommentToArticleId:** Used in the Comment Form component to enable new comments to be posted to a given article_id.

- **patchVotesById:** Used in the Votes component to enable votes to be adjusted up or down based on a given article*id \_or* comment_id.

- **deleteCommentById:** Used in the Comment component to enable a user to delete their own comments.

### Styles

Styles are broken down into different js files for different component groups. Most use basic CSS styles written in a Styled Components format, and use a mix of grid and flex displays to achieve dynamic resizing.

The NavStyles use JS to allow alternating background colours on the NavLinks, so that when new topics are added, they will continue to alternate shades and remain distinct.

The Info styled component in ArticleCardStyles allows me to re-use CSS styling for the Article Info component and adjust it slightly whether it's displayed at the top of an article or in an article card, rather than repeating CSS for two almost-identical classes.

### Wireframes

For any interested parties, I included the wireframes that I used to plan out the project from the start. Wireframe.xcf was created in GIMP and uses layers to allow me to quickly switch between different url paths, component trees, layout notes etc.

Article List.png and Single Article.png contain flattened images for the two most important views with layout and component structure notes. Component Tree.png contains a rough diagram of the originally planned component tree and general path structure.

Feel free to take a look at these if you'd like an idea of how I planned out the app before I started working on it, and a couple of ideas that never came to full fruition.

## Plans for Future

The most immediate plan for the future is to write a more detailed "plans for the future" section. There are ideas that never got fully implemented, and functionality I hadn't even begun to dream of, as well as techniques I'd like to test. The most obvious ones include:

- Add sort functionality to the comments list;
- Properly implement logged in user functionality (using fake authentication for now);
- Update the backend and frontend to allow for pagination;
- Update the nav bar to include all (or top) articles for each topic, to easily navigate from article to article.
