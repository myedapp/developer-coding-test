Laravel Back-end 

THe backend code is very straight forward and has only some files which have been coded by me

To view the API routes they are viewable at
-forum
--routes
---web.php - This part transfers the control to the vue router and registers api endpoints

To see the API implementation view
-forum
--app
--Http
---Controllers -> StudentController.php

Portal VueJs Frontend
===

We can find the Javascript Code for the project in 
-forum
--resources
---assets
----js
And 
----sass for main css file

Routing file
----routes
-----routes.js

Build Process
---

We're building the application as a series of small components pulled together by the application through CommonJS require syntax. We are using webpack to handle the compilation and bundling of components into the core app. 

Libraries
---
Vue Router - Hanldes Routing
Vue Progress  - Progress bar
Vue Awsome - Icons Pack
Axios - Http Requests

Code Style
---

###Components###
Basic app should be built as a series of files within a directory, one file per item being exported (Class). Each file should contain a export default line which exposes the main content of that component. Each component has it's own style attached in the style tag at the bottom.

###Routing###
Routing is handeled by the vue router and the paths to the routes are defined in a routes.js file in the routes directory.

#### Main File ####
The project will have a single point of entry, which bootstraps it and exports a reference for use outside of itself. As these components are being used in Vue structure, the main file will export it's module name and not the module itself.

All vue.* calls will be made inside this file, and require in the pieces it needs to function. File name is app.js
```

#### webpack.mix ####
The module's webpack.mix file's main entry should point to the main module file.
```


## Recommended Reading ##
Vue Components - https://vuejs.org/v2/guide/components.html