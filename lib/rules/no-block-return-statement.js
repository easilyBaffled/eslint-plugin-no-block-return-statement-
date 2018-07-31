"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

export default {
  meta: {
    docs: {
      description: "disallow unnecessary return blocks",
      category: "Stylistic Issues",
      recommended: false,
      url: ""
    },

    schema: []
  },

  create(context) {
    return {
      "BlockStatement[body.length===1] > ReturnStatement": (node) {
        console.log(context)
        console.log(node)
        context.report({
          node,
          message:
            "No need for the `{`, `return` `}` syntax for an Arrow Function that only returns something."
        });
      }
    };
  }
};
