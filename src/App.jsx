import { useState } from 'react'
import CapturaDados from './components/CapturaDados'
import ExibeDados from './components/ExibeDados'

function App() {
  const [valorInicial, setValorInicial] = useState('')
  const [valorAporte, setValorAporte] = useState('')
  const [taxaJuros, setTaxaJuros] = useState('')
  const [periodo, setPeriodo] = useState('')

  const [valorFinal, setValorFinal] = useState('')
  const [numeroAportes, setNumeroAportes] = useState('')
  const [juros, setJuros] = useState('')
  const [rentabilidade, setRentabilidade] = useState('')

  const [historico, setHistorico] = useState([])

  const handleValorInicial = (e) => setValorInicial(e.target.value)
  const handleValorAporte = (e) => setValorAporte(e.target.value)
  const handleTaxaJuros = (e) => setTaxaJuros(e.target.value)
  const handlePeriodo = (e) => setPeriodo(e.target.value)

  const simular = () => {
    const vi = Number(valorInicial)
    const va = Number(valorAporte)
    const tj = Number(taxaJuros) / 100
    const p = Number(periodo)

    let total = vi

    for (let i = 0; i < p; i++) {
      total = (total + va) * (1 + tj)
    }

    const totalAportes = va * p
    const jurosCalculado = total - vi - totalAportes

    const valorFinalCalculado = total.toFixed(2)

    setValorFinal(valorFinalCalculado)
    setNumeroAportes(p)
    setJuros(jurosCalculado.toFixed(2))
    setRentabilidade((tj * 100).toFixed(2) + '%')

    const novaSimulacao = {
      valorFinal: valorFinalCalculado,
      data: new Date().toLocaleString()
    }

    setHistorico([...historico, novaSimulacao])
  }

  const limpar = () => {
    setValorInicial('')
    setValorAporte('')
    setTaxaJuros('')
    setPeriodo('')

    setValorFinal('')
    setNumeroAportes('')
    setJuros('')
    setRentabilidade('')
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Hello, Investimentos</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6">
          <CapturaDados
            valorInicial={valorInicial}
            valorAporte={valorAporte}
            taxaJuros={taxaJuros}
            periodo={periodo}
            onValorInicialChange={handleValorInicial}
            onValorAporteChange={handleValorAporte}
            onTaxaJurosChange={handleTaxaJuros}
            onPeriodoChange={handlePeriodo}
            onSimular={simular}
            onLimpar={limpar}
          />
        </div>

        <div className="col-12 col-lg-6">
          <ExibeDados
            valorFinal={valorFinal}
            numeroAportes={numeroAportes}
            juros={juros}
            rentabilidade={rentabilidade}
          />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <h4>Histórico de Simulações</h4>

          <ul className="list-group">
            {historico.map((item, index) => (
              <li key={index} className="list-group-item">
                Valor: {item.valorFinal} | Data: {item.data}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App