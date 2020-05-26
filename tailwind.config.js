module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    borderStyle: ['responsive', 'hover', 'focus', 'active'],
    borderWidth: ['responsive', 'hover', 'focus', 'active'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
