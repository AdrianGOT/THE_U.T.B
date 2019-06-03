var preguntas = [
    "¿Como se dice 'Carro' en Ingles?",
    "Traducir la siguiente frase:  'A restaurant' ",
    "Traducir la siguiente oración: 'Necesito una mesa para dos personas'",
    "¿Como se dice 'baño' en ingles?"
    
      ];
      var respuestas = [
        ["Car","Automovil","Motorcylce", "Machine"],
        ["Un restaurante","Un carro","Muchos restaurantes","Un restaurador"],
        ["I need a table for two people","I need a table for two cats","I need a cup","I need a table for me"],
        ["Bathroom","Room","Kitchen","Backroom"]
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
    
    
    