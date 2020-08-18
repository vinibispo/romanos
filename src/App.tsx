import React, { useState } from 'react'
import { convertNumeroRomanoParaDecimal } from './utils/convertNumeroRomanoParaDecimal';

function App() {
  const [numeroRomano, setNumeroRomano] = useState('')
  return (
    <div className="container">
      <input type="text" value={numeroRomano} onChange={e => setNumeroRomano(e.target.value.toUpperCase()) } />
      {convertNumeroRomanoParaDecimal(numeroRomano)}
    </div>
  )
}

export default App;
