const common = require('./common');
const utils = require('./utils');
//css文件引入
require('./style.css')
common.info('Hello world!' + utils.add(100, 200));