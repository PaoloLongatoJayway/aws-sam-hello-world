'use strict';

const url = require('url');

module.exports = ({message, host, path}) => {
    return url.format({
        protocol: 'https:',
        host,
        pathname: `${path}/${message}`
    });
};
