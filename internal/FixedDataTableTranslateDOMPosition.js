/**
 * Copyright Schrodinger, LLC
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FixedDataTableTranslateDOMPosition
 * @typechecks
 */

'use strict';

var translateDOMPositionXY = require('./translateDOMPositionXY');

function FixedDataTableTranslateDOMPosition( /*object*/style, /*number*/x, /*number*/y) {
  var initialRender = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

  if (initialRender) {
    style.left = x + 'px';
    style.top = y + 'px';
  } else {
    translateDOMPositionXY(style, x, y);
  }
}

module.exports = FixedDataTableTranslateDOMPosition;
/*boolean*/