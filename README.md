# bryantcabrera_nationbuilder

## A. Description
This is a coding project for NationBuilder built by Bryant Cabrera.

## B. User Stories

## C. Images
1. Wireframe

## D. Technologies Used
> Front-End
    
    1. React
    2. React Router
    3. CSS
    4. BEM

> Back-End

    1. Node.js
    2. Express
    3. MongoDB
    4. Mongoose

> Testing

    1. Jest/Enzyme
        1. I chose to use Jest because of it's realtime update feature.  
        2. Jest allows for selective testing, namely running tests that have failed previously.
        3. Jest is an assertion library.
        4. Jest allows for the creation of mock functions.
        5. Enzyme is just a library.
        6. Enzyme can render a react component into a document to simulate an event.  However, it requires an adapter to load an emulated DOM.
        7. From past experience, enzyme is better suited for React web apps, not React Native.

> Authentication
    1. bcrypt
    

> Planning/Organization/Design
    
    1. Figma
    2. Adobe Photoshop
    3. Adobe Illustrator

## E. Getting Started
1. Creating local copy of Front-End repo
    1. Go to the remote repo's link at [https://github.com/BryantCabrera/bryantcabrera-nationbuilder](https://github.com/BryantCabrera/bryantcabrera-nationbuilder)
    2. On the right hand side, click "download"
    3. In terminal, $cd into the project folder
    4. $npm install
2. Start Local Repo
    1. On your computer, $cd to bryantcabrera-nationbuilder-backend
    2. $nodemon server.js
    3. On your computer, $cd to bryantcabrera-nationbuilder
    4. $npm start
    5. on your client, browse to localhost:3000
3. Commiting & pushing changes
    1. Please refer to the **GitHub workflow** in part F of this README.md.

## F. Github workflow
1.	Link to repo: [https://github.com/BryantCabrera/bryantcabrera-nationbuilder](https://github.com/BryantCabrera/bryantcabrera-nationbuilder).  
2.	Log into your personal repo.  Then, click link above and fork the repo.  Make sure the repo is in your personal GitHub (go to your personal GitHub account and the project repo “bryantcabrera_mobileforming” should be there).  Then, from **YOUR PERSONAL FORK**, clone it to your local repo.
    1.	$git clone {without curly braces, put the clone link here}
    2.  $git remote add upstream https://github.com/BryantCabrera/bryantcabrera-nationbuilder
3.	In terminal, cd to the project repo, open it, and $git checkout -b {without these curly braces, put your first name here}-{without these curly braces, put the component you are working on}
    1.	**EXAMPLE**:  $git checkout -b Bryant-login
    2.	**any other time you are changing back to your branch, you don’t need to type the “-b” part anymore
4.	$npm install
    1.	This gets all of the react & express packages downloaded.
5.	Edit the project files
    1. *__FOR EXPRESS__*: you’re only concerned with the following folders/files
        1.	Controllers
        2.	Db
        3.	Models
        4.	Public
        5.	Routers
        6.	.env
        7.	Server.js
    2.	*__FOR REACT__*: you’re only concerned with the following folders:
        1.	src (where you will be making ALL components)
        2.	public
6.  If you need to completely delete a branch
    1. $git branch -D {without the curly braces, the branch name you want to delete}
7. If you need to work on an old branch:
    1. $git checkout {without the curly braces, the branch name}
    2. $git merge master
    3. continue editing and commiting with normal workflow
8.	When you are 100% sure your data is ready to be merged into the master copy, make sure you are on *__YOUR OWN BRANCH__* (lower left of VScode), call Bryant to let him know you're merging, then:
    1.	$git add -A
    2.	$git commit -m “Adds {put your name here}’s {2-3 word description of the feature/code you made}”
    3.	$git push origin {without the curly braces, branchname}
        1.	This passes up the whole branch
    4.  go to your PERSONAL GitHub repo
        1.  OPTION 1: on your PERSONAL GitHub repo, accept and merge the pull requests
        2.  OPTION 2 (if you don't see the green button ABOVE the clone/download button on the right): 
            1. in your PERSONAL remote repo, use the dorpdown on the left to switch to the branch that you made updates to
            2.  click the "New Pull Request" button directly to the right of that dropdown menu
            3.  on the new screen, make sure the left side points to the origin master, and the right side points to your personal branch that has your edits
9.  Make sure your local repo is always in sync.
    1.  make sure you don't have any pending commits, then
    2.  $git checkout master
    3.  Bryant will let you know when it's ok to $git pull upstream master
    5. $git checkout -b {without the curly braces, your name all in lowercase}-{without these curly braces, put the component you are working on}
10.	Merging
    1.	On master GitHub link
        1.	Click green button called “compare & pull”
        2.	Create pull request
            (a)	Title: {YourName in all lowercase} –{1-3 word description of new feature/code you made}
            (b)	Description: {line numbers} : Describe in detail what change you made and what it does.
        3.	Click send pull request
    2.	**DO NOT** hit “merge”, Bryant will be handling this.

## G. Next Steps
