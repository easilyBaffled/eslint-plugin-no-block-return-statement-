import { RuleTester } from 'eslint';

import rule from '../../../lib/rules/no-block-return-statement';

const ruleTester = new RuleTester( { parserOptions: { ecmaVersion: 2018 } } ); // You do have to tell eslint what js you're using

const errorObj = {
    message: 'No need for the `{`, `return` `}` syntax for an Arrow Function that only returns something.',
    type: 'ReturnStatement' // This may not be right
};

const isString = v => typeof v === 'string';

ruleTester.run( 'no-block-return-statement', rule, {
    valid: [
        'const ident2 = v => v',
        `const complex2 = s =>
            s.split('').join(' ').toUpperCase()`,
        'const capitalize2 = v => v.toUpperCase()'
    ],
    invalid: [
        `const ident = v => {
            return v
        }`,
        `const capitalize = v => {
            return v.toUpperCase()
        }`,
        `const complex = s => {
            return s.split('').join(' ').toUpperCase()
        }`
    ].map( code => isString( code ) ? { code, errors: [ errorObj ] } : code )
} );
