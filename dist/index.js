'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (req, res, next) {
    if ((0, _isEmpty2.default)(req.body.entry) || !(0, _isArray2.default)(req.body.entry)) {
        throw new Error('Data coming from messenger is corrupted. Please, check for all fields.');
    }

    if (!req.bot) {
        throw new Error('Field \'bot\' should be initialized in request object.');
    }

    req.bot.normalized = req.body.entry.reduce(function (acc, entry) {
        acc = acc.concat(entry.messaging);
        return acc;
    }, []);

    next();
};

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isArray = require('lodash/isArray');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }