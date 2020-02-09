/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import PaySelection from 'gatsby-theme-stripe-non-profit/src/components/pay-selection'
import Copy from '../components/copy'
import backgroundImage from '../images/background-image.png'

const Home = () => {
  return (
    <Flex
      sx={{
        justifyContent: 'space-between',
        background: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <PaySelection />
      <Copy header={'Resilient Coders'} p={'give us money pls'} />
    </Flex>
  )
}

export default Home
