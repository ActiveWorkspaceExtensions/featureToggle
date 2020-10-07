// Copyright 2018 Siemens Product Lifecycle Management Software Inc.

/* global
 alert
 */

/**
 * Simple Alert service for sample command Handlers
 *
 * @module js/commandToggleService
 */

'use strict';

/**
 * Dummy alert.
 * @param {String} text - text to display
 */
export let alert2 = function( text ) {
    alert( text ); // eslint-disable-line no-alert
};

export default {
    alert: alert2
};
