import { render } from 'solid-js/web'
import '@fontsource/corben/700.css'
import '@fontsource/corben' // weight 500 by default
import '@fontsource/poppins'
import '@fontsource/poppins/500.css'
import './styles/globals.css'
import './styles/typography.css'
import App from './App'
import { Router } from 'solid-app-router'

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root') as any
)
