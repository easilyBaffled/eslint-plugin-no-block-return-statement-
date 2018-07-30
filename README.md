# eslint-plugin-no-return-syntax

Call out unecessary return statements

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-return-syntax`:

```
$ npm install eslint-plugin-no-return-syntax --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-return-syntax` globally.

## Usage

Add `no-return-syntax` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-return-syntax"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-return-syntax/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





