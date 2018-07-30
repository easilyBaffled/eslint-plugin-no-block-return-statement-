import { RuleTester } from 'eslint';

import rule from '../../../lib/rules/no-block-return-statement';

const ruleTester = new RuleTester();

const errorObj = {
    message: 'No need for the `{`, `return` `}` syntax for an Arrow Function that only returns something.',
    type: 'ReturnStatement' // This may not be right
};

ruleTester.run( 'no-block-return-statement', rule, {
    valid: [
        'const ident2 = v => v',
        `const complex2 = s =>
            s.split('').join(' ').toUpperCase()`,
        'const capitalize2 = v => v.toUpperCase()'
    ],
    invalid: [
        {
            code: `const ident = v => {
                        return v
                   }`,
            errors: [ errorObj ]
        },
        {
            code: `const capitalize = v => {
                      return v.toUpperCase()
                   }`,
            errors: [ errorObj ]
        },
        {
            code: `const complex = s => {
                        return s.split('').join(' ').toUpperCase()
                   } `,
            errors: [ errorObj ]
        }
    ]
} );
