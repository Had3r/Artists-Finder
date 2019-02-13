<div align="center">

# Artists Finder (MVC pattern) in pure JavaScript

It is a search engine of three top artists in a given country and their albums. The API I used is called Musixmatch (https://developer.musixmatch.com/documentation). App with ***MVC design pattern***.

</div>

## Technologies 
+ [x] Asynchronous JavaScript: promises, async/await, AJAX calls (axios) and APIs.
+ [x] NPM, Webpack, Babel and ES6+ to set up a modern development workflow 
+ [x] BEM methodology
+ [x] CSS architecture with SASS
+ [x] RWD with desktop first strategy

## Architecture

in the src folder (MVC structure)
```bash
 |-- js/
    |-- models/
        |-- Album.js       - ajax requests
        |-- Search.js      - ajax requests
    |-- views/
        |-- albumView.js   - one interface for various aspects of the app
        |-- searchView.js  - as above
        |-- base.js        - DOM manipulation
    |-- config.js
    |-- index.js           - controller
```
