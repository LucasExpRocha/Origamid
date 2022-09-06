export default function horarioFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]')
    const diaSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horario = funcionamento.dataset.horario.split(',').map(Number);
    
    const dataAgora = new Date();
    const diaDeHoje = dataAgora.getDay();
    const horarioDeAgora = dataAgora.getHours();
    const diaAberto = diaSemana.indexOf(diaDeHoje) !== -1
    const horarioAberto = horarioDeAgora >= horario[0] && horarioDeAgora < horario[1]
    const funcionando = diaAberto && horarioAberto
    
    funcionando ? funcionamento.classList.add('aberto') : funcionamento.classList.remove('aberto')
}

