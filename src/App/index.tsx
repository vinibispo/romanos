import React, { useState } from 'react'
import { convertNumeroRomanoParaDecimal } from '../utils/convertNumeroRomanoParaDecimal';
import './style.css'
function App() {
  const [numeroRomano, setNumeroRomano] = useState('')
  return (
    <div className="container">
      <h1>Números Romanos</h1>
      <div className="input-box">
        <input type="text" value={numeroRomano} onChange={e => setNumeroRomano(e.target.value.toUpperCase()) } />
      <span>{convertNumeroRomanoParaDecimal(numeroRomano)}</span>

      </div>
      
    </div>
  )
}

export default App;
