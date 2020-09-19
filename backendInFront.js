/*
* config/routes/users.js
*/

const users = {
  '/users': {
    getUsers() {
      action: async() => axios.get(this.extension)
      return this.extension;
    },
  },
};

/*
* config/routes/studies.js
*/
const studies = (baseUrl, moduleName) => {
  const extension = baseUrl + moduleName;
  return {
    //These are confusing because we have no idea what an extension is. We're just like 'yep this.extension will exist'
    getStudies() {
      return extension;
    },
    getStudiesShow(id) {
      return extension + '/' + id;
    },
  };
};

/*
* config/index.js
*/
const Router = {
  API_HOST: {
    production: 'https://nod-be.herokuapp.com',
    staging: 'https://nod-be-stag.herokuapp.com',
    development: 'https://nod-be-dev.herokuapp.com',
    dev_local: 'http://localhost:3000',
    heroku_review: '',
    other: '',
  },
  target: (process.env.NODE_ENV === '' || process.env.NODE_ENV === undefined) ? 'other' : process.env.NODE_ENV,
  baseUrl: this.API_HOST[this.target] + '/api',
  socketUrl: this.API_HOST[this.target] + '/',
  assignRouteBaseUrl: function(routes, newRoute) {
    const newestRoute = this.baseUrl + newRoute;
    return { ...routes, newestRoute };
    // this.routes[route].extension = this.baseUrl + route;
  },
  init: function(routes) {
    routes.reduce(this.assignRouteBaseUrl, {});
    // we want to take each object we get and store a route and an action for each.
    const { init, ...newThis } = this
    console.log('removing init', init);
    return newThis;
  },
};

// Object.assign(router.routes, users);
// Object.assign(router.routes, studies);

const router = Router.init();


/*
* PuddingAPI/studies.js
*/
const studyRoutes = router.routes['/studies'];

/*
* PuddingAPI/users.js
*/
const userRoutes = router.routes['/users'];


console.log(studyRoutes.getStudies());
// returns 'http://localhost:3000/studies'

console.log(studyRoutes.getStudiesShow(45));
// returns 'http://localhost:3000/studies/45'

console.log(userRoutes.getUsers());
// returns 'http://localhost:3000/users'

console.log(router)

// const foo = fetch({
//   url: userRoutes.getUsers(),
//   method: 'GET',
// });
//
// const bar = fetch({
//   url: studyRoutes.getStudiesShow(32),
//   method: 'GET',
// });
