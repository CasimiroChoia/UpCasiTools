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
      transcript = event.results[event.results.length - 1][0].transcript;
      document.getElementById('output').textContent = transcript;
      console.log(recognition)
    };
    
    document.querySelector("#stop").onclick = function(event) {

      if (document.getElementById('output').innerHTML != "" ) {
        // var transcript = event.results[event.results.length - 1][0].transcript;
        // document.getElementById('output').textContent = transcript;
        recognition.stop()
        console.log(recognition)
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
        console.log(recognition)
    };

    // Adicionar um evento de clique ao botão para iniciar o reconhecimento
    document.getElementById('start').addEventListener('click', function() {
      if (navigator.onLine === true) {
        recognition.start();
        jarvis("a gravar.")
        texto = document.querySelector("#output".innerHTML)
        setTimeout(() => {
          switch (texto) {
            case includes("clarear página",1):
              document.body.style = "transition-duration: 1s; backdrop-filter: brightness(2);"
              break;
            case includes("escurecer página",1):
              document.body.style = "transition-duration: 1s; backdrop-filter: brightness(0.5);"
              break;
            case includes("pesquisar",1):
              texto = texto.replace("pesquisar","")
              navigator.href = "https://www.google.com/search?q=" + texto
              break;
            case includes("tocar",1):
              texto = texto.replace("tocar","")
              navigator.href = "https://m.youtube.com/" + texto
              break;
            default:
              console.log("aaa")
              break;
          }
        }, 5 * 1000);
      } else {
        jarvis("você não está conectado com a internet.")
        return alert("você não está conectado com a internet.")
      }
    });
  } else {
    // Se o navegador não suportar, exibir uma mensagem de aviso
    alert("Seu navegador não suporta a API de reconhecimento de fala.")
    document.getElementById('output').textContent = 'Seu navegador não suporta a API de reconhecimento de fala.';
  }
  
  function jarvis(voz = "não conseguimos identificar o texto") {

      window.speechSynthesis.cancel()
      voz = new SpeechSynthesisUtterance(voz);
      fala = window.speechSynthesis;
      // if (window.speechSynthesis.speaking === True) window.speechSynthesis.cancel(new SpeechSynthesisUtterance(voz))
      fala.speak(voz);

  }

  function copiarTexto() {
    try {
      navigator.clipboard.writeText(aaa)
      alert("Texto Copiado")
    } catch (error) {
      console.log("aconteceu algo mau: " + error)
    }
  }
  aaa = document.querySelector("#output").innerHTML


  function ler(texto) {

    if (texto !== "") {
      jarvis(texto)
    } else {
      jarvis("campo vazio")
    }
    
  }
  
    document.querySelector('body').addEventListener("contextmenu",function(evt) {
      jarvis("Menù Bloqueado.")
      evt.preventDefault()
    })