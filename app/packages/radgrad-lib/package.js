Package.describe({
  name: 'radgrad:lib',
  summary: 'RadGrad third party libraries and global namespace.',
  version: '0.0.4',
  git: 'https://github.com/radgrad/core',
  documentation: "README.md"
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@1.2']);

  var packages = [
      'accounts-password',
    'alanning:roles@1.2.14',
    'aldeed:autoform@5.8.1',
    'aldeed:collection2@2.8.0',
    'blaze-html-templates',
    'check',
    'ecmascript',
    'ejson',
    'es5-shim',
    'jquery',
    'markdown',
    'meteor-base',
    'momentjs:moment@2.11.1',
    'mongo',
    'session',
    'standard-minifiers',
    'tracker',
    'underscore'
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'lib/core.js'
  ], ['client', 'server']);

  api.export([
    'RadGrad'
  ]);
});