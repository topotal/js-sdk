module.exports = {
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: [
    "react",
    "react-hooks",
  ],
  rules: {
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": true
    }],
    "react-hooks/exhaustive-deps": ["error", {
      "additionalHooks": "(useAsync|useAsyncFn)"
    }],
    "react/jsx-key": ["error"],
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  }
}
