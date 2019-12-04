const OFF = 0, WARN = 1, ERROR = 2;

module.exports = exports = {
    "extends": "airbnb",
    "env": {
        "browser": true
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        // Indent with 4 spaces
        "indent": ["error", 4],

        // Indent JSX with 4 spaces
        "react/jsx-indent": ["error", 4],

        // Indent props with 4 spaces
        "react/jsx-indent-props": ["error", 4],

        // Disable react prop types rule for now
        "react/prop-types": [OFF]
    }
}
