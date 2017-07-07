'use strict';

import 'angular';
import 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'angular-ui-bootstrap';

import './css/index.scss';

import RoutesConfig from './routes.es6';

class HaaApp {
  constructor() {
    angular
    .module('haa', ['ui.router', 'ui.bootstrap'])
    .config(RoutesConfig);
  }
}

new HaaApp