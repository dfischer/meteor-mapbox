Package.describe({
  summary: "Map box 2.1.2",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.addFiles('dfischer:meteor-mapbox.js', 'client');
  api.addFiles('dfischer:meteor-mapbox.css', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dfischer:meteor-mapbox');
  api.addFiles('dfischer:meteor-mapbox-tests.js');
});
