import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

const key = import.meta.env.VITE_SOME_KEY
document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello ${key}!</h1>
  </div>
`

