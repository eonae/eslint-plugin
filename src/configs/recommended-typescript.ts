/* eslint-disable */

export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: ['plugin:import/typescript'],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': false
      }
    ],
    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {},
        extendDefaults: false
      }
    ],
    '@typescript-eslint/brace-style': ['warn', '1tbs'],
    'brace-style': 'off',
    '@typescript-eslint/class-literal-property-style': 'warn',
    '@typescript-eslint/comma-dangle': ['warn', 'never'], // Мы не любим запятые в конце
    'comma-dangle': 'off',
    '@typescript-eslint/comma-spacing': 'warn',
    'comma-spacing': 'off',
    '@typescript-eslint/consistent-indexed-object-style': ['off', 'record'],
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true
      }
    ],
    '@typescript-eslint/default-param-last': 'off',
    'default-param-last': 'off',
    '@typescript-eslint/dot-notation': [
      'warn',
      {
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
        allowIndexSignaturePropertyAccess: false
      }
    ],
    'dot-notation': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'warn',
      {
        accessibility: 'no-public',
        overrides: {
          accessors: 'no-public',
          constructors: 'no-public',
          methods: 'no-public',
          properties: 'no-public',
          parameterProperties: 'no-public'
        }
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/func-call-spacing': 'warn',
    'func-call-spacing': 'off',
    '@typescript-eslint/indent': [
      'warn',
      2,
      {
        SwitchCase: 1,
        FunctionDeclaration: { parameters: 'first' },
        FunctionExpression: { parameters: 'first' },
        ignoredNodes: [
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key'
        ]
      }
    ],
    'indent': 'off',
    '@typescript-eslint/init-declarations': [
      'off',
      'never',
      {
        ignoreForLoopInit: true
      }
    ],
    'init-declarations': 'off',
    '@typescript-eslint/keyword-spacing': 'warn',
    'keyword-spacing': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'warn',
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],
    'lines-between-class-members': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: { delimiter: 'semi', requireLast: true },
        singleline: { delimiter: 'semi', requireLast: false }
      }
    ],
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: [
          'abstract-field',
          'abstract-method',
          'static-field',
          'instance-field',
          'constructor',
          'instance-method',
          'static-method'
        ]
      }
    ],
    '@typescript-eslint/method-signature-style': ['off', 'method'],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-base-to-string': 'warn',
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-duplicate-imports': 'error',
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extra-parens': [
      'warn',
      'all',
      {
        returnAssign: false,
        nestedBinaryExpressions: false,
        enforceForSequenceExpressions: false,
        ignoreJSX: 'multi-line'
      }
    ],
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-semi': 'error',
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implicit-any-catch': [
      'off',
      {
        allowExplicitAny: true
      }
    ], // TS1196
    '@typescript-eslint/no-implied-eval': 'error',
    'no-implied-eval': 'off',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreProperties: true,
        ignoreParameters: true
      }
    ],
    '@typescript-eslint/no-invalid-this': 'warn',
    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-loop-func': 'off',
    'no-loop-func': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksConditionals: true,
        checksVoidReturn: true
      }
    ],
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-this-alias': 'error', // !
    '@typescript-eslint/no-throw-literal': 'off', // Не поддерживает DomainException который не наследуется от Error
    'no-throw-literal': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error', // !
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off', // Когда явно использем any, хотим иметь свободу
    '@typescript-eslint/no-unsafe-call': 'off', // Когда явно использем any, хотим иметь свободу
    '@typescript-eslint/no-unsafe-member-access': 'off', // Когда явно использем any, хотим иметь свободу
    '@typescript-eslint/no-unsafe-return': 'error', // !
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowTernary: true,
        allowShortCircuit: true
      }
    ],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'none',
        caughtErrors: 'none',
        ignoreRestSiblings: true
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-var-requires': 'error', // !
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/object-curly-spacing': ['warn', 'always'],
    'object-curly-spacing': 'off',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'warn',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'warn',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    '@typescript-eslint/require-array-sort-compare': 'off',
    '@typescript-eslint/require-await': 'off', // Не хотим переделывать везде
    'require-await': 'off',
    '@typescript-eslint/restrict-plus-operands': [
      'warn',
      {
        checkCompoundAssignments: true
      }
    ],
    '@typescript-eslint/restrict-template-expressions': 'off', // Просто не удобно
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/semi': ['error', 'always'],
    'semi': 'off',
    '@typescript-eslint/sort-type-union-intersection-members': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'warn',
      {
        asyncArrow: 'always',
        anonymous: 'always',
        named: 'always'
      }
    ],
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-infix-ops': 'warn',
    'space-infix-ops': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': 'warn',
    '@typescript-eslint/typedef': [
      'warn',
      {
        arrowParameter: false,
        variableDeclarationIgnoreFunction: true,
        objectDestructuring: false,
        arrayDestructuring: false,
        memberVariableDeclaration: false
      }
    ],
    '@typescript-eslint/unbound-method': 'error', // !
    '@typescript-eslint/unified-signatures': 'off',

    'constructor-super': 'off',
    'getter-return': 'off',
    'no-const-assign': 'off',
    'no-dupe-args': 'off',
    'no-dupe-keys': 'off',
    'no-func-assign': 'off',
    'no-import-assign': 'off',
    'no-new-symbol': 'off',
    'no-obj-calls': 'off',
    'no-prototype-builtins': 'off',
    'no-return-await': 'off',
    'no-setter-return': 'off',
    'no-this-before-super': 'off',
    'no-undef': 'off',
    'no-unreachable': 'off',
    'no-unsafe-negation': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'valid-typeof': 'off' // ts(2367)
  }
};
