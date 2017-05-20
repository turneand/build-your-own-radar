require('./stylesheets/base.scss');
require('./images/logo.png');
require('./images/tech-radar-201611-landing-page-wide.png');
require('./images/tw-logo.png');
require('./images/favicon.ico');
require('./images/radar_legend.png');

//const RadarFactory = require('./util/factory');
const RadarFactory = require('./util/inlineFactory');

RadarFactory().build();