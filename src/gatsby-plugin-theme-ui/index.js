import merge from 'deepmerge'
import baseTheme from 'gatsby-theme-stripe-non-profit/src/gatsby-plugin-theme-ui'

export default merge(baseTheme, {
  colors: {
    primary: '#ed1b24',
    secondary: '#21262D',
    text: '#fff',
  },
})
