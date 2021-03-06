'use strict';

const parseEvent = require('./parse-event');
const response = require('./response');


exports.handler = function(event, context, callback) {

    switch (event.httpMethod) {

        case 'POST': {
            const message = parseEvent(event);
            console.console.log(message);
            //const resp = response.ok(message);
            //return callback(null, resp);
            context.succed(message);
        }

        default: {
            console.error(`Method not allowed: ${event.httpMethod}`);
            const resp = response.methodNotAllowed();
            return callback(null, resp);
        }
    }
};
