/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

const Copy = ({ header, p }) => {
  return (
    <Box p={20} sx={{ width: '400px', backgroundColor: 'rgba(0 , 0, 0, 0.7)' }}>
      <h1 sx={{ textAlign: 'center' }}>{header}</h1>
      <p sx={{ textAlign: 'center', flexGrow: '0' }}>{p}</p>
    </Box>
  )
}

export default Copy
