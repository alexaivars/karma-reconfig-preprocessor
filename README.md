# karma-reconfig-preprocessor

> A Karma plugin. To modify requirejs config files..

## Installation

```bash
npm install karma-reconfig-preprocessor --save-dev
```

## Configuration
### The simplest configuration

> You just need to declare what files should be reconfigured

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*-config.js': ['reconfig']
    }
  });
};
```

----

For more information on Karma see the [homepage].


[homepage]: http://karma-runner.github.com
