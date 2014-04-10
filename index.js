var createReconfigPreprocessor = function(args, config, logger, helper) {
  config = config || {};

  var log = logger.create('preprocessor.reconfig');
  var options = args.options || config.options || {};

  return function(content, file, done) {
    log.debug('Processing "%s".', file.originalPath);

    var result;
    try {
      // ToDo: add config options and make more general purpose
			log.debug('Processing "%s".', file.originalPath);
			var base = /(baseUrl)\s*:\s*("|')(.*)\2/gi;
			var bower = /\/bower_components/gi; 
			result = content.replace(base, '//').replace(bower, 'bower_components');
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
