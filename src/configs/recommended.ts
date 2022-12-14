/* eslint-disable */

export default {
  plugins: ['import', 'unused-imports'],
  extends: ['plugin:import/recommended'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'import/no-cycle': 'off', // К сожалению, при использовании typeorm мы не можем избежать циклов
    'import/no-deprecated': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-unused-modules': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: [
          ['builtin', 'external', 'internal', 'unknown'],
          ['parent', 'sibling', 'index']
        ],
        'newlines-between': 'always'
      }
    ],
    'import/prefer-default-export': 'off',

    'accessor-pairs': 'error',
    'array-bracket-newline': [
      'warn',
      {
        multiline: true
      }
    ],
    'array-bracket-spacing': ['warn', 'never'],
    'array-callback-return': [
      'warn',
      {
        allowImplicit: true,
        checkForEach: true
      }
    ],
    'array-element-newline': ['warn', 'consistent'],
    'arrow-body-style': 'warn',
    'arrow-parens': ['warn', 'as-needed'], // Ненужные скобки создают дополнительный шум
    'arrow-spacing': 'warn',
    'block-scoped-var': 'warn',
    'block-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs'],
    'camelcase': [
      'off',
      {
        properties: 'never'
      }
    ],
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': ['warn', 'never'], // Мы не любим запятые в конце
    'comma-spacing': 'warn',
    'comma-style': 'warn',
    'complexity': 'off',
    'computed-property-spacing': ['warn', 'never'],
    'consistent-return': 'off',
    'consistent-this': 'off',
    'constructor-super': 'error',
    'curly': ['error'],
    'default-case-last': 'warn',
    'default-case': 'warn',
    'default-param-last': 'off',
    'dot-location': ['error', 'property'],
    'dot-notation': 'warn',
    'eol-last': 'error',
    'eqeqeq': ['error', 'smart'],
    'for-direction': 'error',
    'func-call-spacing': 'warn',
    'func-name-matching': 'warn',
    'func-names': 'warn',
    'func-style': 'off',
    'function-call-argument-newline': ['warn', 'consistent'],
    'function-paren-newline': ['warn', 'multiline-arguments'],
    'generator-star-spacing': ['warn', 'after'],
    'getter-return': 'error',
    'grouped-accessor-pairs': ['warn', 'getBeforeSet'],
    'guard-for-in': 'error',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': 'off', // Это правило иногда конфликтует с другими
    'indent': [
      'warn',
      2,
      {
        SwitchCase: 1,
        FunctionDeclaration: { parameters: 'first' },
        FunctionExpression: { parameters: 'first' }
      }
    ],
    'init-declarations': [
      'off',
      'never',
      {
        ignoreForLoopInit: true
      }
    ],
    'jsx-quotes': 'warn',
    'key-spacing': 'warn',
    'keyword-spacing': 'warn',
    'line-comment-position': 'off',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': [
      'warn',
      {
        allowBlockStart: true,
        beforeBlockComment: false
      }
    ],
    'lines-between-class-members': [
      'warn',
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],
    'max-classes-per-file': 'off',
    'max-depth': 'off',
    'max-len': ['warn', 100],
    'max-lines-per-function': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements-per-line': 'warn',
    'max-statements': 'off',
    'multiline-comment-style': 'off',
    'multiline-ternary': ['warn', 'always-multiline'],
    'new-cap': 'off',
    'new-parens': 'error',
    'newline-per-chained-call': 'off',
    'no-alert': 'off',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'off',
    'no-confusing-arrow': 'off',
    'no-console': 'off',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-continue': 'off',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'warn',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': [
      'warn',
      {
        allowElseIf: false
      }
    ],
    'no-empty-character-class': 'error',
    'no-empty-function': 'off',
    'no-empty-pattern': 'error',
    'no-empty': 'off',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': [
      'warn',
      'all',
      {
        returnAssign: false,
        nestedBinaryExpressions: false,
        enforceForSequenceExpressions: false,
        ignoreJSX: 'multi-line'
      }
    ],
    'no-extra-semi': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'warn',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'warn',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'warn',
    'no-loop-func': 'off',
    'no-loss-of-precision': 'error',
    'no-magic-numbers': 'off',
    'no-misleading-character-class': 'error',
    'no-mixed-operators': 'warn',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'warn',
    'no-multi-spaces': 'warn',
    'no-multi-str': 'warn',
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
        maxEOF: 0
      }
    ],
    'no-negated-condition': 'off', // Семантика важнее
    'no-nested-ternary': 'off',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'off',
    'no-nonoctal-decimal-escape': 'error',
    'no-obj-calls': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-promise-executor-return': 'off',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-exports': 'off',
    'no-restricted-globals': 'warn',
    'no-restricted-imports': 'error',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'warn',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-setter-return': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': [
      'off',
      {
        hoist: 'functions'
      }
    ],
    'no-sparse-arrays': 'error',
    'no-tabs': [
      'warn',
      {
        allowIndentationTabs: true
      }
    ],
    'no-template-curly-in-string': 'warn',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'warn',
    'no-undef-init': 'error',
    'no-undef': 'off',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable-loop': 'warn',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowTernary: true,
        allowShortCircuit: true
      }
    ],
    'no-unused-labels': 'error',
    'no-unused-vars': [
      'warn',
      {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true
      }
    ],
    'no-use-before-define': 'warn',
    'no-useless-backreference': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'warn',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'off',
    'no-warning-comments': 'off',
    'no-whitespace-before-property': 'warn',
    'no-with': 'error',
    'nonblock-statement-body-position': 'warn',
    'object-curly-newline': [
      'warn',
      {
        ObjectExpression: { multiline: true, minProperties: 10, consistent: true },
        ImportDeclaration: { multiline: true, consistent: true },
        ExportDeclaration: { multiline: true, minProperties: 10, consistent: true }
      }
    ],
    'object-curly-spacing': ['warn', 'always'],
    'object-property-newline': [
      'warn',
      {
        allowAllPropertiesOnSameLine: true
      }
    ],
    'object-shorthand': 'error',
    'one-var-declaration-per-line': 'warn',
    'one-var': [
      'off',
      {
        var: 'never',
        let: 'never',
        const: 'never'
      }
    ],
    'operator-assignment': 'warn',
    'operator-linebreak': ['warn', 'before'],
    'padded-blocks': ['warn', 'never'],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*'
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'const',
          'let',
          'do',
          'switch',
          'try',
          'class',
          'function',
          'while',
          'for',
          'if',
          'continue',
          'break',
          'throw',
          'return'
        ]
      },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let']
      }
    ],
    'prefer-arrow-callback': 'warn',
    'prefer-const': [
      'error',
      {
        destructuring: 'all'
      }
    ],
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: { array: false, object: false }
      }
    ],
    'prefer-exponentiation-operator': 'error',
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': 'warn',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'warn',
    'prefer-regex-literals': 'warn',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'warn',
    'quote-props': 'off',
    'quotes': [
      'warn',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    'radix': 'error',
    'require-atomic-updates': 'off',
    'require-await': 'warn',
    'require-unicode-regexp': 'off',
    'require-yield': 'error',
    'rest-spread-spacing': 'warn',
    'semi-spacing': 'warn',
    'semi-style': 'warn',
    'semi': ['error', 'always'],
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
        ignoreMemberSort: false
      }
    ],
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'warn',
    'space-before-function-paren': [
      'warn',
      {
        asyncArrow: 'always',
        anonymous: 'always',
        named: 'always'
      }
    ],
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': 'warn',
    'space-unary-ops': 'warn',
    'spaced-comment': ['warn', 'always'],
    'strict': 'error',
    'switch-colon-spacing': 'warn',
    'symbol-description': 'error',
    'template-curly-spacing': 'warn',
    'template-tag-spacing': 'warn',
    'unicode-bom': ['error', 'never'],
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'vars-on-top': 'off',
    'wrap-iife': [
      'warn',
      'inside',
      {
        functionPrototypeMethods: true
      }
    ],
    'wrap-regex': 'off',
    'yield-star-spacing': ['warn', 'after'],
    'yoda': ['error', 'never']
  }
};
