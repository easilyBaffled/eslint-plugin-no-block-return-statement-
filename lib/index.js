/**
 * @fileoverview Call out unecessary return statements
 * @author Danny Michaelis
 */
"use strict";

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

import requireIndex from "requireindex";

// ------------------------------------------------------------------------------
// Plugin Definition
// ------------------------------------------------------------------------------

// import all rules in lib/rules
console.log(requireIndex(__dirname + "/rules"));
export default requireIndex(__dirname + "/rules");
