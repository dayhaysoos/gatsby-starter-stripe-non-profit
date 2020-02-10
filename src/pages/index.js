/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import PaySelection from 'gatsby-theme-stripe-non-profit/src/components/pay-selection'
import Copy from '../components/copy'
import backgroundImage from '../images/background-image.png'

const Home = () => {
  return (
    <Box
      p={[0, 20, 40]}
      sx={{
        display: 'flex',
        alignItems: ['center', 'flex-start', 'flex-start'],
        justifyContent: ['center', 'center', 'space-around'],
        flexDirection: ['column-reverse', 'column-reverse', 'row'],
        background: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <PaySelection />
      <Copy header={'Resilient Coders'} p={'give us money pls'} />
    </Box>
  )
}

export default Home
