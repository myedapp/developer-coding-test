# myEd Developer Coding Challenge
This is my submission for the myEd Developer Coding Challenge which is part of the recruitment process as set out by myEd.

## Overview
I tried to cover a little bit of everything:
 - Webpack setup with React v16, including loaders for babel and scss, aswell as PostCSS + Autoprefixer
 - Base app structure set up (base user page, components)
 - Tried to demonstrate basic React skills:
   - lifecycle methods (found in Users.jsx)
   - state change (found in Users.jsx)
   - props passed into "dumb" components (found in Spindle.jsx and Tag.jsx)
   - wrapping imported components (found in Spindle.jsx)
 - Basic styling and responsive design (albeit simple)
 - BEM usage
 - Some testing (inc. setting up Jest to work with React 16)
 - Didn't use express or similar to host the "api" as they were all GET requests. If POST, DELETE, PATCH/PUT was required, then express could've been subbed in


## Installation
In a fresh directory, clone this repo

```
git clone -b chriskelly git@github.com:myedapp/developer-coding-test.git

// Grab the required resources
npm run setup

// Setup basic folder structure and files
npm run build
```

## Development and Viewing
Once the above installation steps have been ran, run the following:

```
// Launch the local dev server
npm run dev
```

And visit `http://127.0.0.1:7777/`

## Styling and coding conventions 
Everyone has their own approaches to structure, formatting, etc. I generally just go with the standard set by the team (ie I'm not getting worked up in holy wars over space v tabs, semicolons v not, etc, etc). However, for this little project, I followed these conventions:

 - spaces
 - no semicolons
 - double quotes for html attributes, single quotes for javascript strings
 - components are always classes (no functional components, intentionally)
 - components are not responsible for their own visibility, I consider that external state
 - components are responsible for padding, but not margins (parent should control where it sits - making the component more reusable)
 - library classNames is used with dumb components to allow parent components to pass in additional classes
 - prop types and defaults defined as static properties
 - scss + BEM. Verbose but reliable 
 - couldn't find a SVG myEd logo, so just faked a dummy component (Logo.jsx)


## Todo
This project is far from complete. Obviously a lot more tests would be ideal, including possibly snapshot testing, etc. 

Internet Explorer testing would also be required. Autoprefixer is used to cover most basic vendor prefixing needs, but depending on the requirements of the demographic, it may need to be tweaked. 

