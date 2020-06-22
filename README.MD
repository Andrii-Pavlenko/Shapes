# Shapes

[DEMO LINK](https://andrii-pavlenko.github.io/Shapes/)

## What you should do to get app code and run app?

Firstly you should clone repository in local computer.

Then open code editor and run 

```
npm i
```

Then you should start your local server. You can use extensions in VS Code or run in command line
```
npm run dev
```
Now, when your local server was started, you can see working application. If no, press on folder dist, which you can see on browser window. Great, the app is running and you can play.

## How to deploy changed code

If you made some changes an want to add it in your repository, you should: 

- Have your repo, or create it.
- Add code in it.
```
git add .
git commit -m 'my message'
git push origin master
```
- Deploy code on gh-pages, run
```
npm run deploy
```

:+1: Now you have your repository with your code, and ph-pages to display running app.

