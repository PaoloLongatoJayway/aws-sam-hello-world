'use strict';

function parse(event) {
    const {headers: {Host}, body, requestContext: {path}} = event;
    const message = JSON.parse(body).message;
    return message
}

module.exports = parse;
