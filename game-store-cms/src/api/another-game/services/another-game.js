'use strict';

/**
 * another-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::another-game.another-game');
