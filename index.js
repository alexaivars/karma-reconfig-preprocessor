var path = require('path');

var createReconfigPreprocessor = function(args, config, logger, helper) {
  config = config || {};

  var log = logger.create('preprocessor.reconfig'),
			options = args.options || config.options || {
				baseUrl: '/base'
			};

  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);
    var result;
    try {
      // ToDo: add config options and make more general purpose
			log.debug('Processing "%s".', file.originalPath);
			var base = /(baseUrl\s*:\s*)("|')(.*)\2/gi;
			result = content.replace(base, '$1$2'+options.baseUrl+'$2');
			done(result);
    } catch (error) {
      log.error('%s\n  at %s', error.message, file.originalPath);
      done(content);
    }
  };
};

createReconfigPreprocessor.$inject = ['args', 'config.reconfigPreprocessor', 'logger', 'helper'];

module.exports = {
  'preprocessor:reconfig': ['factory', createReconfigPreprocessor]
};
