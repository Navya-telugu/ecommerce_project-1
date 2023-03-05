'use strict';

/**
 * adventure controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::adventure.adventure');
