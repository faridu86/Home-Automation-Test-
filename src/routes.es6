'use strict';

let config = (($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

	$stateProvider
	.state('login', {
		url: '/',
		component: 'loginComponent'
	})
	.state('dashboard', {
		url: '/dashboard',
		controller: 'DashboardCtrl as ctrl',
		templateUrl: './controllers/dashboard/view.html',
		redirectTo: 'dashboard.myAppliances'
	})
	.state('dashboard.myAppliances', {
		resolve: {
			appliances: (AppliancesFactory) => AppliancesFactory.appliances()
		},
		url: '/',
		component: 'myAppliances'
	})
	.state('dashboard.allAppliances', {
		resolve: {
			appliances: (AppliancesFactory) => AppliancesFactory.appliances()
		},
		url: '/appliances',
		component: 'allAppliances'
	});
});

export default config