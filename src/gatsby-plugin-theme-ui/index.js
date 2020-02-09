import merge from 'deepmerge'
import baseTheme from 'gatsby-theme-stripe-non-profit/src/gatsby-plugin-theme-ui'

console.log(baseTheme)

export default merge(baseTheme, {
  colors: {
    primary: '#ed1b24',
    secondary: '#21262D',
    text: '#fff',
  },
})
