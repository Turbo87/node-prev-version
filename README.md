
node-prev-version
==============================================================================

[![Build Status](https://travis-ci.org/Turbo87/node-prev-version.svg?branch=master)](https://travis-ci.org/Turbo87/node-prev-version)
[![npm](https://img.shields.io/npm/v/prev-version.svg)](https://www.npmjs.com/package/prev-version)

low-level library for figuring out the "previous" release version


Installation
------------------------------------------------------------------------------

```
npm install --save prev-version
```

Usage
------------------------------------------------------------------------------

```js
var prevVersion = require('prev-version');
var versions = [
  'v0.9.0',
  'v0.9.1',
  'v1.0.0-beta.1',
  'v0.9.2',
  'v1.0.0-beta.2',
  'v1.0.0',
  'v0.9.3',
  'v1.1.0-beta.1',
];

prevVersion('v0.9.0', versions); // -> null
prevVersion('v0.9.1', versions); // -> v0.9.0
prevVersion('v1.0.0-beta.1', versions); // -> v0.9.1
prevVersion('v0.9.2', versions); // -> v0.9.1
prevVersion('v1.0.0-beta.2', versions); // -> v1.0.0-beta.1 
prevVersion('v1.0.0', versions); // -> v0.9.2
prevVersion('v0.9.3', versions); // -> v0.9.2
prevVersion('v1.1.0-beta.1', versions); // -> v1.0.0
```

License
------------------------------------------------------------------------------
node-prev-version is licensed under the [MIT License](LICENSE).