/**
 * @fileoverview Call out unecessary return statements
 * @author Danny Michaelis
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
import { join } from 'path';

import requireIndex from 'requireindex';

// ------------------------------------------------------------------------------
// Plugin Definition
// ------------------------------------------------------------------------------

// import all rules in lib/rules
console.log( requireIndex( join( __dirname, '/rules' ) ) );
export default requireIndex( join( __dirname, '/rules' ) );
