'use strict';

/**
 * adventure service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::adventure.adventure');
