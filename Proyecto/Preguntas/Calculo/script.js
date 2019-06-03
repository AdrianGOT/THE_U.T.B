var preguntas = [
    "¿Cuanto es 2x1000?",
    "¿La derivada de x^2?",
    "¿Cual es la integral de 4x?",
    "¿Cuanto es cualquier numero dividido entre 0?"
    
      ];
      var respuestas = [
        ["2000","200","20000", "200000"],
        ["2x","4x","x","0"],
        ["2x^2","4x","4x^2","2x"],
        ["Infinito","0","Indeterminado","Todas las anteriores"]
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
    
    
    