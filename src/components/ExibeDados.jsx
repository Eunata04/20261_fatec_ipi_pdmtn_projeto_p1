function ExibeDados(props) {
  return (
    <div className="card p-3">
      <h4 className="mb-3">Resultado</h4>

      <p>Valor final acumulado: {props.valorFinal}</p>
      <p>Número de aportes: {props.numeroAportes}</p>
      <p>Juros acumulados: {props.juros}</p>
      <p>Rentabilidade: {props.rentabilidade}</p>
    </div>
  )
}

export default ExibeDados