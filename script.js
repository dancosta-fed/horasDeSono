const horarioAtual = document.getElementById('horaAtual');
const resultado = document.getElementById('resultado');
const resultado2 = document.getElementById('resultado2');

const horasCenario2 = document.getElementById('horaAgora');
const minutosCenario2 = document.getElementById('minutoAgora');

const minutoDespertador = document.getElementById('minutoDespertador');
const horaDespertador = document.getElementById('horaDespertador');
const minutoDespertador2 = document.getElementById('minutoDespertador2');
const horaDespertador2 = document.getElementById('horaDespertador2');


const calculateBtn = document.getElementById( 'calculateBtn' );
const calculateBtn2 = document.getElementById( 'calculateBtn2' );

// Mostrando a hora atual
const horaAtual = () => {
  const agora = new Date();
  const hora = agora.getHours().toString().padStart(2, '0');
  const minuto = agora.getMinutes().toString().padStart(2, '0');
  const segundo = agora.getSeconds().toString().padStart(2, '0');

  horarioAtual.innerHTML = `${hora}:${minuto}:${segundo}`;
}

// Chamando a função para atualizar a hora
setInterval(horaAtual, 1000);

// Pegar valores do input despertador
const getHorario = () => {
  const hora = horaDespertador.value;
  const minuto = minutoDespertador.value;

  console.log(`horário: ${hora}:${minuto}`)
}

// calculando o horário cenario 1
const calculateTime = () => {
  getHorario();
  const agora = new Date();
  const hora = agora.getHours();
  const minuto = agora.getMinutes();

  const horaDespertadorValue = horaDespertador.value;
  const minutoDespertadorValue = minutoDespertador.value;
  
  if (hora > horaDespertador.value) {
    alert('Horário do despertador deve ser superior ao horário atual.');
  } else if (hora === horaDespertador.value && minuto > minutoDespertador.value) {
    alert('Horário do despertador deve ser superior ao horário atual.');
  } else {
    let horasDeSono = horaDespertador.value - hora;
    let minutosDeSono = minutoDespertador.value - minuto;
  
    console.log(hora, minuto);
    console.log(horaDespertador.value, minutoDespertador.value);
  
    if (minutosDeSono < 0) {
      horasDeSono -= 1;
      minutosDeSono += 60;
    }

    if (horasDeSono < 0) {
       alert('Horário do despertador deve ser superior ao horário atual.');
    } else {
      resultado.innerHTML = `Você tem ${horasDeSono} horas e ${minutosDeSono} minutos de sono.`;
      console.log(`Você tem ${horasDeSono} horas e ${minutosDeSono} minutos de sono.`);
    }
  }
}

// calculando o horário cenario 2
const calculateTime2 = () => {
  const hora = horasCenario2.value;
  const minuto = minutosCenario2.value;
  const horaDespertadorValue = horaDespertador2.value;
  const minutoDespertadorValue = minutoDespertador2.value;

  if (!hora) {
    alert('Preencha os campos');
  } else if (hora > horaDespertador2.value) {
    alert('Horário do despertador deve ser superior ao horário atual.');
  } else if (hora === horaDespertador.value && minuto > minutoDespertador.value) {
    alert('Horário do despertador deve ser superior ao horário atual.');
  } else {
    let horasDeSono = horaDespertador2.value - hora;
    let minutosDeSono = minutoDespertador2.value - minuto;

    console.log(hora, minuto);
    console.log(horaDespertador2.value, minutoDespertador2.value);

    if (minutosDeSono < 0) {
      horasDeSono -= 1;
      minutosDeSono += 60;
    }

    if (horasDeSono < 0) {
       alert('Horário do despertador deve ser superior ao horário atual.');
    } else {
      resultado2.innerHTML = `Você tem ${horasDeSono} horas e ${minutosDeSono} minutos de sono.`;
      console.log(`Você tem ${horasDeSono} horas e ${minutosDeSono} minutos de sono.`);
    }
  }
}


calculateBtn.addEventListener('click', calculateTime);
calculateBtn2.addEventListener('click', calculateTime2);