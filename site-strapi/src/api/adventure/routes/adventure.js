'use strict';

/**
 * adventure router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::adventure.adventure');
