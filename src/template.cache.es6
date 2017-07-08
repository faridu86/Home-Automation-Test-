let requireTemplates = ($templateCache) => {
  $templateCache.put('./components/login/view.html', require('./components/login/view.html'));
  $templateCache.put('./components/menu/view.html', require('./components/menu/view.html'));
  $templateCache.put('./controllers/dashboard/view.html', require('./controllers/dashboard/view.html'));
  $templateCache.put('./components/appliances/all/view.html', require('./components/appliances/all/view.html'));
  $templateCache.put('./components/appliances/mine/view.html', require('./components/appliances/mine/view.html'));
};

export {
  requireTemplates
}