## Info
Stack: React & Nodejs

I decided to serve up a very basic backend as I wanted to focus more on the front end since I wouldn't be serving up a database anyway. I didn't want to create a docker build either because its only something I'd do with invested time and I don't have anything pre-prepared.

If I did a docker build I would run to images on a docker compose, one the backend and the other the front end and serve it with one command. I'd also have dev, test and production images.

I added a slight delay to the requests to imitate network delay rather than give an instance response. I also placed delays on fetching data between clicks so the user doesn't spam the backend.

I kept the code very simple, of course I could get more extensive but that would require additional time. I already didn't go for the 2 hour mark as I new beforehand the scope to get the result I wanted was longer.

I focused on user experience and code, interface simplicity. 

I chose parcel instead of webpack but I know how to configure both - I'd prefer webpack on a larger scale app.

## Testing
Because I chose the new React Hooks, testing was a lot more difficult that usual since Facebook is still patching bugs in the latest version and I didn't want to test React by using snapshots. React reducers were an option with the new hooks but the boiler code for that meant more time (something I would adopt on a larger scale app). The Enzyme library still hasn't been updated to take full advantage of react hooks as it's more designed for class components. I kept the testing basic to give a brief demo of testing so it isn't as extensive as I could make it.

To test the front end:
```
cd frontend
```
```
npm install && npm test
```

## Setup instructions & review
### Backend
This is assuming you have nodejs installed
```
cd backend
```
```
npm install && npm start
```

### Front end
You can use `npm start` however you will need to run a build first `npm build`. I suggest using the dev script

```
cd frontend
```
```
npm install && npm run dev
```
Front end address:
[http://localhost:1234 ](ttp://localhost:1234 )

