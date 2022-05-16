#GitHub Pages deploy

 ```yarn add gh-pages --dev```
 
Добавить в package.json:
```
homepage: "https://kozyrovladimir.github.io/project-name" 
```

Добавить в package.json обьект: 
```
 "scripts": {		
    "predeploy": "npm run build",		
    "deploy": "gh-pages -d build"	
    }	
```
