import isEmpty from 'lodash/isEmpty';
import isArray from 'lodash/isArray';

/**
 * [
 *  {
 *      sender: { id: '823746283746' },
 *      recipient: { id: '98234982347' },
 *      timestamp: 1475519849260,
 *      message: {
 *          mid: 'mid.239849h238fh98',
 *          seq: 8,
 *          text: 'hi'
 *      }
 *  }
 * ]
 */

export default function(req, res, next) {
    if (isEmpty(req.body.entry) || !isArray(req.body.entry)) {
        throw new Error('Data coming from messenger is corrupted. Please, check for all fields.');
    }

    if (!req.bot) {
        throw new Error('Field \'bot\' should be initialized in request object.');
    }

    req.bot.normalized = req.body.entry.reduce((acc, entry) => {
        acc = acc.concat(entry.messaging);
        return acc;
    }, []);

    next();
}
