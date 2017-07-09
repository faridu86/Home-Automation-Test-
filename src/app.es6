'use strict';

import 'angular';
import 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'angular-ui-bootstrap';

import './css/index.scss';
import RoutesConfig from './routes.es6';
import { controllers, components, services, filters, requireTemplates} from './imports.es6';

class HaaApp {
  constructor() {
    angular
    .module('haa', ['ui.router', 'ui.bootstrap', 'ngCookies'])
    .config(RoutesConfig)
    .component('loginComponent', components.Login)
    .component('mainMenu', components.Menu)
    .component('allAppliances', components.AllAppliances)
    .component('myAppliances', components.MyAppliances)
    .controller('DashboardCtrl', controllers.Dashboard)
    .service('LoginService', services.Login)
    .service('ApplianceService', services.Appliances)
    .run(($templateCache) => {
      requireTemplates($templateCache);
    });
  }
}

new HaaApp