module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "commonjs": true,
        "es6": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        'vue/no-multiple-template-root': 'off',
        'vue/html-self-closing': 'off',
        'no-console': 'off',
        "no-var": 1
    }
};
