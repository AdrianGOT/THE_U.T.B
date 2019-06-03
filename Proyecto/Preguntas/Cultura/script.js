var preguntas = [
    "¿En que año termino la Segunda Guerra Mundial?",
    "¿Que es el poligrafo?",
    "¿Por qué Colombia es considerado uno de los países mas felices del mundo?",
    "¿Cuantos años tiene la tierra?"
  ];
      var respuestas = [
        ["En 1945","En 1954", "En 1946","En 1990"],
        ["Un aparato utlizado para detectar a las personas mentirosas","Una maquina para cifrar mensajes","Componente de los aviones","Aparato utilizado para detectar el nivel de los sismos"],
        ["Por la actitud de las personas","Por los Carnavales","Por sus presidentes","Por el cafe"],
        ["4600 millones de años","2 años y nos han engañado","6000 años","Siempre ha existido"]
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
    
    
    