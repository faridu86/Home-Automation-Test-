
let config = (($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

	$stateProvider
	.state('login', {
			url: '/',
			component: 'loginComponent'
	})
	.state('dashboard', {
			url: '/bashboard',
			template: require('routes/dashboard/view.html')
	});
});

export default config