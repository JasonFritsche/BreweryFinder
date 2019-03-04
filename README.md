# Brewery Finder

## Dependencies

### react-typed
This project uses react-typed to produce the typing effect. https://www.npmjs.com/package/react-typed

## Bootstrap Theme
### Slate Theme
This project is currently using the Slate Bootswatch theme. https://bootswatch.com/slate/

## Anyone can contribute
Please feel free to contribute to this open source project. First timers are more than welcome. Take a look at the open issues under the issues tab. If you identify a bug, or would like to implement a feature that isn't posted under the issues feel free to submit a new issue. Also, if you see anything that needs to be updated in the readme file, you're more than welcome to update it.

### Please claim the issue that you want to work on in the comments of that issue. 

# How to get started

### Git Resources
You may find some or all of these resources helpful if you're new to git

* https://git-scm.com/book/en/v2/Getting-Started-The-Command-Line
* https://www.youtube.com/watch?v=SWYqp7iY_Tc
* https://www.git-tower.com/learn/git/ebook/en/command-line/appendix/command-line-101
* http://rogerdudler.github.io/git-guide/

## Fork

Click the fork button to get your copy of the repo. The fork button is in the top-right area of this page. A fork is your own copy of the repository.

## Clone 

After you fork the repo you will need to clone it to your machine. Go to your GitHub repositories and open the forked BreweryFinder repository. Look for the "Clone or download" button and copy the url.

Open your terminal and run the following git command:
`git clone "paste the copied url here"`

## Set the Upstream repository

In order to keep up with the latest changes in the repo you should set the upstream repository for your local clone. 
If you haven't done so already, in your terminal change to the BreweryFinder directory/folder that was created when you ran the `git clone` command. Use the following command to change in to that directory: `cd BrewryFinder`

Now set the upstream remote with the following command:
* `git remote add upstream https://github.com/JasonFritsche/BreweryFinder.git`

## Create a Branch

Now that you've cloned the repository, create a branch for the issue or feature you plan on working on. 
First, enter the following git command to make sure you have all of the current version of BreweryFinder:
* `git fetch upstream`

Now create a new branch with the follow git command:
* `git checkout -b <enter a branch name here without the brackets> upstream/master`

## Install dependencies

Use the `npm install` command in your terminal to install of of the project's dependencies. 

## Run the project locally

Run `npm start` to run your local copy of the project on a local server.

## Commit changes

When you're ready to commit your changes you'll want to do the following:
- Add the changes to your commit by running `git add .`
- Commit the changes by running `git commit -m "relevant message here"`
-Push the changes to GitHub by running ` git push origin <your branch name here>`

## Open a Pull Request
Go to your BreweryFinder repository on GitHub and click the "Compare and pull request" button. Describe what changes you made, and what issue number they are solving. Then click the "Create pull request" button.


------------------------------------------------
# React Stuff

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
