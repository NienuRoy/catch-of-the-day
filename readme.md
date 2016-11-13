# Catch of the Day

React application built following the incredible, recently updated tutorial
created by Wes Bos. You can find the tutorial [here](react-for-beginners).

Production site: https://catch-of-the-day-austin-wood.firebaseapp.com/

![application-screenshot](http://i.imgur.com/epdcSs3.jpg)

### Running Locally

Clone repository

```
git clone git@github.com:indiesquidge/catch-of-the-day.git
```

Download Dependencies
```
npm install
```

Run locally
```
npm start
```

### Extension/Transformation Ideas

- [ ] try implementing a loading spinner to avoid rendering initial state where it looks like the user is logged out before a second render shows the proper inventory
- [x] try using more native Firebase v3 code for auth handling (https://www.youtube.com/watch?v=iIcOohdSnMw)
- [ ] try fixing initial state for order being "Sorry, fish is no longer available"
      - this cannot done with `shouldComponentUpdate`, as `shouldComponentUpdate` is called *after* the initial render)
      - instead, use the callback option that is part of the config object passed to rebase's `syncState` method
- [x] try deploying to Firebase
- [ ] try validating adding a fish with Firebase database rules
- [ ] try creating our own `webpack.config.js` to compliment the `create-react-app` eject action
- [ ] try using `Redirect` react-router component (https://www.youtube.com/watch?v=Vur2dAFZ4GE)
- [ ] try building our own version of `react-dom` render (https://github.com/iamdustan/tiny-react-renderer)
- [ ] try using uni-directional data flow when updating a fish form; two-directional is messy and prone to errors
- [ ] try using all stateless, pure, functional React components (not sure if this is fully possible)

[react-for-beginners]: https://reactforbeginners.com/
