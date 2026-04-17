function CapturaDados(props) {
  return (
    <div className="card p-3">
      <h4 className="mb-3">Captura de Dados</h4>

      <div className="mb-2">
        <label>Valor inicial</label>
        <input
          type="number"
          className="form-control"
          value={props.valorInicial}
          onChange={props.onValorInicialChange}
        />
      </div>

      <div className="mb-2">
        <label>Valor de aporte</label>
        <input
          type="number"
          className="form-control"
          value={props.valorAporte}
          onChange={props.onValorAporteChange}
        />
      </div>

      <div className="mb-2">
        <label>Taxa de juros (%)</label>
        <input
          type="number"
          className="form-control"
          value={props.taxaJuros}
          onChange={props.onTaxaJurosChange}
        />
      </div>

      <div className="mb-3">
        <label>Período (meses)</label>
        <input
          type="number"
          className="form-control"
          value={props.periodo}
          onChange={props.onPeriodoChange}
        />
      </div>

      <div className="d-flex gap-2">
        <button className="btn btn-primary" onClick={props.onSimular}>
          Simular
        </button>

        <button className="btn btn-secondary" onClick={props.onLimpar}>
          Limpar
        </button>
      </div>
    </div>
  )
}

export default CapturaDados