This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This App demonstrates the paginated list with RestfulAPI


## Steps to start the server

    ### `yarn install`
    ### `yarn start`

## Front End Coding test for onTrack
#Requirements:
These are the requirements for the test

1. Using React, build a webapp that queries this paginated endpoint and prints out the results as a list
2. The app should be paginated (page selector) with the pagination reflected in the url (so when the page is
refreshed the same resultset is shown)
3. You can use React Bootstrap as a components library for simplicity
4. Compile your own Bootstrap theme (less/sass) with the only difference to the original that the primary
colour is `#1D7874`
5. Host your code on github or similar, put all the code in a Pull Request against the (probably) empty repo
6. Add a search field to the app that upon request populates the `filters` post param as follows:
filters:[{type: "all", values: ["YOUR_SEARCH_FIELD_CONTENTS"]}]
