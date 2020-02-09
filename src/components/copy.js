/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

const Copy = ({ header, p }) => {
  return (
    <Box>
      <h1>{header}</h1>
      <p>{p}</p>
    </Box>
  )
}

export default Copy
