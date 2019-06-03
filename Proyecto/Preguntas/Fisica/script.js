var preguntas = [
    "¿Que es la luz?",
    "¿La luz se curva al pasar cerca de un objeto con mucha masa?",
    "¿Que descubrio Michael Faraday?",
    "¿Que es el campo eléctrico?"
  ];
      var respuestas = [
        ["Una onda electromagnética con comportamiento de particula","Una partiucla con mucha carga","Una onda electromagnétca","Una sustancia que recubre todo que se vuelve visible tras ser excitada por partículas cargadas"],
        ["Sí","No","No esta demostrado","Solamente es posible en las "],
        ["Las lineas de campo","el fenomeno fotoelectrico","La corriente alterna","los electrones en el atomo"],
        ["Un lugar en el espacio donde una carga puede ejercer una fuerza sobre otra carga","Una capa electrica que cubre a las cargas protegiéndolas","Flechas que indican en que dirección se movera la particula","Luz que sale de la carga"]
      ];
    
     
    jugar();
      var indice_respuesta_correcta;
    
    function jugar(){
    var indice_aleatorio = Math.floor(Math.random()*preguntas.length);
    var respuestas_posibles = respuestas[indice_aleatorio];
    var posiciones = [0,1,2,3];
    var respuestas_reordenadas = [];
    var uso = false;

    
    for(i in respuestas_posibles){
      var posicion_aleatoria = Math.floor(Math.random()*posiciones.length);
      if(posicion_aleatoria==0 && uso==false){
        indice_respuesta_correcta = i;
        uso = true;
      }
      respuestas_reordenadas[i] = respuestas_posibles[posiciones[posicion_aleatoria]];
      posiciones.splice(posicion_aleatoria, 1);
    }
    
    var txt_respuestas="";
    for(i in respuestas_reordenadas){
      txt_respuestas += '<input type="radio" name="pp" value="'+i+'"><label>'+respuestas_reordenadas[i]+'</label><br>';
    
    }
    document.getElementById("respuestas").innerHTML = txt_respuestas;
    document.getElementById("preguntas").innerHTML = preguntas[indice_aleatorio];
    }

    var Boton = document.getElementsByClassName("Btn");
    Boton[0].onclick = comprobar;

    function comprobar(){
      var respuesta = $("input[type=radio]:checked").val();
      if(respuesta==indice_respuesta_correcta){
        alert("Correcta");
      }else{
        alert("Incorrecta");
    
      }
      jugar();
    }
    
    
    