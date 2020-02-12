# Gatsby Starter Stripe Non-Profit

A Gatsby Starter that would allow you to very quickly spin up a non-profit donation site with Stripe integration. Built on top of Gatsby's default starter and using theme-ui

## Set up

Run this in terminal:

`gatsby new my-non-profit-site https://github.com/dayhaysoos/gatsby-starter-stripe-non-profit.git`

Get your Stripe API keys from here: https://dashboard.stripe.com/apikeys

Create two files for environment variables

For test keys: `.env.development`
For live keys `.env.production`

Provide the lines below to either of the .env files

```
STRIPE_API_SECRET=SECRET_KEY_GOES_HERE
STRIPE_API_PUBLIC=PUBLIC_KEY_GOES_HERE
```

You'll see a file called `gatsby-config.js`

````
    {
      resolve: 'gatsby-theme-stripe-non-profit',
      options: {
        stripePublicKey: process.env.STRIPE_API_PUBLIC,
        successUrl: 'https://resilientcoders.netlify.com/thank-you',
      },
    },
    ```

    You might want to change `successUrl` to point to a thank you page to redirect to, for example

    `src/pages/thank-you.js`


    ## Styling
    This starter uses theme-ui under the hood, as well theme-ui components.

    If you'd like to change the colors you can go to `gatsby-plugin-theme-ui/index.js`

    You'll see:

    ```
    export default merge(baseTheme, {
  colors: {
    primary: '#ed1b24',
    secondary: '#21262D',
    text: '#fff',
  },
  // default styles
  planList: {
    button: {
      lastClicked: {
        backgroundColor: 'primary',
        color: 'text',
      },
      notClicked: {
        backgroundColor: 'muted',
        color: 'gray',
      },
    },
  },
})
````

Feel freel to change primary, secondary and text colors, if you need more than this, you can refer to the theme-ui docs to see what other values are under the hood:

https://theme-ui.com/theming
