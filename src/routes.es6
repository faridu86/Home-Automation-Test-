'use strict';

let config = (($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

	$stateProvider
	.state('login', {
		url: '/',
		component: 'loginComponent'
	})
	.state('dashboard', {
		url: '/bashboard',
		controller: 'DashboardCtrl as ctrl',
		templateUrl: './controllers/dashboard/view.html',
		redirectTo: 'dashboard.myAppliances'
	})
	.state('dashboard.myAppliances', {
		url: '/',
		component: 'myAppliances'
	})
	.state('dashboard.allAppliances', {
		url: '/appliances',
		component: 'allAppliances',
		resolve: {
			appliances: (ApplianceService) => {
				return ApplianceService.appliances()
				.then((appliances) => {
					return appliances;
				});
			}
		}
	});
});

export default config