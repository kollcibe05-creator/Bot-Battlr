# BOT BATTLR

##### Welcome to Flatadango!!
Welcome to Bot Battlr

## Demos(Deployment details)
checkout the deployment details 👇
1. ['netlify_link'](https://warbots.netlify.app/)
2. ['db.json_link'](https://robot-api-fixed.onrender.com)

## Functionality 
Bot-Battlr is an SPA which aims to recruit and remove bots expected to fight for one's army.
Upon opening the website, the user can see the bots available as rendered by the API. 
Recruiting a bot to your army is achieved by clicking on the bot and the same is done to remove one from the *Your Army*.
It is made possible by incorporating knowledge in JS, React and CSS in terms of *fetch* requests and rendering items conditionally.

# Description
The repo has folders and subfolders with some having some files  nested inside them ;
1. [`index.html`](./Flatad_folder/index.html) : It defines the structure of our page and is linked to external css and js files making the impressive features you see possible. 
Here, the user votes by clicking the `vote here` button below the image of the animal.

2. [`index.css`](./Flatad_folder/index.css) : This is the styling file where the liveliness of the page has been replenished. 
This is made possible by use of selectors and giving the elements a feature or outlook.

3. [`index.js`](./Flatad_folder/index.js) : Via the link to the html file, event listening and execution of callback functions has been rendered possible. 
Alerts and other back-end functionalities have been coded in this file.
4. `README.md` : It is a simply written .md file that descriptively explains what the code entails.
5. [`db.json`](./Flatad_folder/db.json) : It serves as our API (Application Programming interface).
It stores our data and loads our app page.
6. **src** folder is the key directory which contains the components to be rendered.
# Project setup
### index.html
It defines the structure of our  app containing the default tags where the nodes fetched from the server are to be inserted dynamically via the javascript file. In it is linked a css and js files that defines some vital features and attributes to be included in the Flatadango app. 

### index.css
Styling of the `index.html file` has been done here.
There is use of selectors to identify the elements eg. *img{}*, *.h2-header*.
Various styles have been applied to the respective elements as can be seen by the comments */**/*

 ### index.js
 It has incorporated many concepts and functionalities in our app as can be depicted via the comments.
 It fetches data from *db.json* file and converts it to a javascript object format by the *fetch* inbuilt command.
 The fetched data is then used to dynamically create a list element that displays the movie headers using *.innerHTML*.
 *PATCH* and *DELETE*  have been added to the eventListeners on the *Buy Ticket* button to update the number of remaining tickets and deleting a movie  upon completion of the tickets respectively.
 
 ### db.json
 It contains the data that has been  used to dynamically create our web page. For the data to be fetched and rendered follow the steps below(that is incase you have decided to inspect the page locally)

 1. Install the JSON server globally on your machine if not yet;
 ```sh
 npm install -g json-server
```

 2. Navigate to the folder having the file then type the following in your terminal;
 ```sh
 json-server --watch db.json
 ```  
 You'll now see the contents of the web page rendered if you *go live*
  

## Technologies used
- Markdown
- Javascript
- Github
- .json
- css
- html 
-React

# Author & License
## Author
#### By *Collins Kibet*
#### Date, 2025/10/20
### License
The contents of this file are within the scope of the syntax provided by the CommonMark Community, 2025.
*All rights reserved.*




## Support and contact details
[`github account`](https://github.com/kollcibe05-creator)





