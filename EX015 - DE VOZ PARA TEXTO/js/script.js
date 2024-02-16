  // Verificar se o navegador suporta a API de Reconhecimento de Fala
  if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    // Criar um novo objeto de reconhecimento de fala
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    // Definir idioma, se necessário
     recognition.lang = 'pt-BR';

    // Definir a continuidade da escuta
    recognition.continuous = true;

    // Definir o retorno de chamada para o resultado da transcrição
    recognition.onresult = function(event) {
      var transcript = event.results[event.results.length - 1][0].transcript;
      document.getElementById('output').textContent = transcript;
    };

    document.querySelector("#stop").onclick = function(event) {

      if (document.getElementById('output').innerHTML != "" ) {
        // var transcript = event.results[event.results.length - 1][0].transcript;
        // document.getElementById('output').textContent = transcript;
        recognition.stop()
      } else {
        jarvis("Diz alguma coisa antes...")
        return alert("Diz alguma coisa antes...")
      }
    };

    // Lidar com erros
    recognition.onerror = function(event) {
      // jarvis("aconteceu um erro com a " + event.error)
      // alert("'Erro de reconhecimento de fala: " + event.error)
      console.error('Erro de reconhecimento de fala: ', event.error);
    };

    // Adicionar um evento de clique ao botão para iniciar o reconhecimento
    document.getElementById('start').addEventListener('click', function() {
      if (navigator.onLine === true) {
        recognition.start();
        jarvis("a gravar.")
      } else {
        jarvis("você não está conectado com a internet.")
        return alert("você não está conectado com a internet.")
      }
    });
  } else {
    // Se o navegador não suportar, exibir uma mensagem de aviso
    document.getElementById('output').textContent = 'Seu navegador não suporta a API de reconhecimento de fala.';
  }
  
  function jarvis(voz = "não conseguimos identificar o texto") {

      window.speechSynthesis.cancel()
      voz = new SpeechSynthesisUtterance(voz);
      fala = window.speechSynthesis;
      // if (window.speechSynthesis.speaking === True) window.speechSynthesis.cancel(new SpeechSynthesisUtterance(voz))
      fala.speak(voz);

  }


  function ler(texto) {

    if (texto !== "") {
      jarvis(texto)
    } else {
      jarvis("campo vazio")
    }
    
  }