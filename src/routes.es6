
let config = (($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
$stateProvider
    .state('todos', {
        url: '/',
        template: require('todos/todos.html')
    })
    .state('about', {
        url: '/about',
        template: require('about/about.html')
    });
});

export default config