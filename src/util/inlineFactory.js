document.title = 'Inline Data Example'

// couple of ways to store this (although I'm sure an external csv file is easily doable?)
// either, as a multi-dimensional array...
const rawDataTable = [
    [ 'name',                          'ring',   'quadrant',               'isNew', 'description' ],
    [ 'Grafana',                       'adopt',  'tools',                  'TRUE',  'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' ],
    [ 'Packer',                        'adopt',  'tools',                  'FALSE', 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' ],
	[ 'Apache Kafka',                  'trial',  'tools',                  'FALSE', 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' ],
	[ 'Spring Boot',                   'adopt',  'languages & frameworks', 'FALSE', 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' ],
	[ 'AngularJS',                     'hold',   'languages & frameworks', 'FALSE', 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' ],
	[ 'Docker',                        'adopt',  'platforms',              'FALSE', 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' ],
	[ 'Pivotal Cloud Foundry',         'trial',  'platforms',              'FALSE', 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' ],
	[ 'AWS Application Load Balancer', 'assess', 'platforms',              'TRUE',  'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' ],
	[ 'Overambitious API gateways',    'hold',   'platforms',              'FALSE', 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' ],
	[ 'Superficial private cloud',     'hold',   'platforms',              'FALSE', 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' ],
	[ 'Pipelines as code',             'adopt',  'techniques',             'TRUE',  'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' ],
	[ 'Bug bounties',                  'trial',  'techniques',             'FALSE', 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' ],
	[ 'Cloud lift and shift',          'hold',   'techniques',             'FALSE', 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' ]
]

// which will need to be converted to an array of objects...
const rawData = rawDataTable.slice(1).map(function(x) {
	var response = {}
	for (var i = 0; i < x.length; i++)  {
		response[rawDataTable[0][i]] = x[i];
	}
	return response
})

// or store directly as an array of objects...
/*
const rawData = 
[
	{name: 'Grafana',                       ring: 'adopt',  quadrant: 'tools',                  isNew: 'TRUE',  description: 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' },
	{name: 'Packer',                        ring: 'adopt',  quadrant: 'tools',                  isNew: 'FALSE', description: 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' },
	{name: 'Apache Kafka',                  ring: 'trial',  quadrant: 'tools',                  isNew: 'FALSE', description: 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' },
	{name: 'Spring Boot',                   ring: 'adopt',  quadrant: 'languages & frameworks', isNew: 'FALSE', description: 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' },
	{name: 'AngularJS',                     ring: 'hold',   quadrant: 'languages & frameworks', isNew: 'FALSE', description: 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' },
	{name: 'Docker',                        ring: 'adopt',  quadrant: 'platforms',              isNew: 'FALSE', description: 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' },
	{name: 'Pivotal Cloud Foundry',         ring: 'trial',  quadrant: 'platforms',              isNew: 'FALSE', description: 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' },
	{name: 'AWS Application Load Balancer', ring: 'assess', quadrant: 'platforms',              isNew: 'TRUE',  description: 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' },
	{name: 'Overambitious API gateways',    ring: 'hold',   quadrant: 'platforms',              isNew: 'FALSE', description: 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' },
	{name: 'Superficial private cloud',     ring: 'hold',   quadrant: 'platforms',              isNew: 'FALSE', description: 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' },
	{name: 'Pipelines as code',             ring: 'adopt',  quadrant: 'techniques',             isNew: 'TRUE',  description: 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' },
	{name: 'Bug bounties',                  ring: 'trial',  quadrant: 'techniques',             isNew: 'FALSE', description: 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' },
	{name: 'Cloud lift and shift',          ring: 'hold',   quadrant: 'techniques',             isNew: 'FALSE', description: 'This is the description. You can use basic html such as the <strong>strong tag to emphasise keywords and phrases</strong> and insert <a href="https://www.thoughtworks.com">anchor links to documentation and referance material</a>.' }
]
*/

const _ = {
    map: require('lodash/map'),
    uniqBy: require('lodash/uniqBy'),
    capitalize: require('lodash/capitalize'),
    each: require('lodash/each')
};

const InputSanitizer = require('./inputSanitizer');
const Radar = require('../models/radar');
const Quadrant = require('../models/quadrant');
const Ring = require('../models/ring');
const Blip = require('../models/blip');
const GraphingRadar = require('../graphing/radar');
const MalformedDataError = require('../exceptions/malformedDataError');
const ContentValidator = require('./contentValidator');
const ExceptionMessages = require('./exceptionMessages');

const InlineSheet = function () {
    var self = {};

    self.build = function () {
		var columnNames = Object.keys(rawData[0])

		var contentValidator = new ContentValidator(columnNames);
		contentValidator.verifyContent();
		contentValidator.verifyHeaders();

		var all = rawData;
		var blips = _.map(all, new InputSanitizer().sanitize);
		var rings = _.map(_.uniqBy(blips, 'ring'), 'ring');
		var ringMap = {};
		var maxRings = 4;

		_.each(rings, function (ringName, i) {
			if (i == maxRings) {
				throw new MalformedDataError(ExceptionMessages.TOO_MANY_RINGS);
			}
			ringMap[ringName] = new Ring(ringName, i);
		});

		var quadrants = {};
		_.each(blips, function (blip) {
			if (!quadrants[blip.quadrant]) {
				quadrants[blip.quadrant] = new Quadrant(_.capitalize(blip.quadrant));
			}
			quadrants[blip.quadrant].add(new Blip(blip.name, ringMap[blip.ring], blip.isNew.toLowerCase() === 'true', blip.topic, blip.description))
		});

		var radar = new Radar();
		_.each(quadrants, function (quadrant) {
			radar.addQuadrant(quadrant)
		});

		var size = (window.innerHeight - 133) < 620 ? 620 : window.innerHeight - 133;
		new GraphingRadar(size, radar).init().plot();
    };

    return self;
};

module.exports = InlineSheet;
