import { useState } from 'react'
import CapturaDados from './components/CapturaDados'

function App() {
  // Estados
  const [valorInicial, setValorInicial] = useState('')
  const [valorAporte, setValorAporte] = useState('')
  const [taxaJuros, setTaxaJuros] = useState('')
  const [periodo, setPeriodo] = useState('')

  // Funções de atualização
  const handleValorInicial = (e) => {
    setValorInicial(e.target.value)
  }

  const handleValorAporte = (e) => {
    setValorAporte(e.target.value)
  }

  const handleTaxaJuros = (e) => {
    setTaxaJuros(e.target.value)
  }

  const handlePeriodo = (e) => {
    setPeriodo(e.target.value)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Hello, Investimentos</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <CapturaDados
            valorInicial={valorInicial}
            valorAporte={valorAporte}
            taxaJuros={taxaJuros}
            periodo={periodo}
            onValorInicialChange={handleValorInicial}
            onValorAporteChange={handleValorAporte}
            onTaxaJurosChange={handleTaxaJuros}
            onPeriodoChange={handlePeriodo}
          />
        </div>
      </div>
    </div>
  )
}

export default App