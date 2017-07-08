let requireTemplates = ($templateCache) => {
  $templateCache.put('./components/login/view.html', require('./components/login/view.html'));
};

export {
  requireTemplates
}