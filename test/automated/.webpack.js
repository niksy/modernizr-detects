const testsContext = require.context('.', true, /^((?!(\.webpack|fixtures\/)).)*\.js$/);
require('classlist.js');
testsContext.keys().forEach(testsContext);
