'use strict';

import 'angular';
import 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'angular-ui-bootstrap';
import 'angular-cookies';

import './css/index.scss';

import { requireTemplates } from './template.cache.es6';

import components from './components/imports.es6';
import controllers from './controllers/imports.es6';
let filters = {};
import services from './services/imports.es6';

export { controllers, components, services, filters, requireTemplates};