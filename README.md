# Open COVID19 Test

Un test de autoevaluación para el COVID-19 de código abierto que devuelve los mismos resultados que [coronamadrid.com](https://www.coronamadrid.com/) pero no almacena tus valiosos datos.

Puedes acceder a él a través de este enlace: https://celiavelmar.github.io/open-covid19-test/

### Aplicación de la Comunidad de Madrid

[La aplicación de autoevaluación de la Comunidad de Madrid para COVID-19: es oficial, da acceso a tus datos a empresas privadas y no los anonimiza](https://maldita.es/malditatecnologia/2020/03/20/aplicacion-madrid-coronavirus-oficial-comparte-datos-empresas/)

### Ingeniería inversa

Haciendo un poco de "ingeniería inversa" me he topado con el enrevesado algoritmo para el que se ha necesitado la colaboración de, al menos, seis multinacionales (según consta en la propia web de la aplicación): Google, Telefónica, Goggo Network, Ferrovial, Carto, Forcemanager y Mendesaltren.

El algoritmo es el siguiente:

```javascript
var scores = {
  falta_aire: 60,
  fiebre: 15,
  tos: 15,
  contacto_positivo: 29,
  mucosidad: 0,
  dolor_muscular: 0,
  gastrointestinal: 0,
  mas_20_dias: -15
};
var sc = 0;
for (var k in answers) {
  if (answers[k]) {
    sc = sc + scores[k];
  }
}
if (sc >= 30) {
  return 'con-sintomas';
} else {
  return 'sin-sintomas';
}
```

En la aplicación web de la Comunidad de Madrid te hacen 8 preguntas y le dan una puntuación a la respuesta positiva a cada una. Si tienes 30 puntos o más la aplicación te informará de que es posible que estés contagiado y de los pasos a seguir.

Las preguntas, y sus puntuaciones por contestar con un "Sí", son las siguientes:

- ¿Tienes sensación de falta de aire de inicio brusco (en ausencia de cualquier otra patología que justifique este síntoma)? **60 puntos**
- ¿Tienes fiebre? (+37.7ºC) **15 puntos**
- ¿Tienes tos seca y persistente? **15 puntos**
- ¿Has tenido contacto estrecho con algún paciente positivo confirmado? **29 puntos**
- ¿Tienes mucosidad en la nariz? **0 puntos**
- ¿Tienes dolor muscular?: **0 puntos**
- ¿Tienes sintomatología gastrointestinal? **0 puntos**
- ¿Llevas más de 20 días con estos síntomas? **-15 puntos**

¿Que cómo he podido encontrarlo? Así:

![Imagen del complejo algoritmo que la aplicación de la Comunidad de Madrid envía en un JSON mediante una petición HTTP GET](public/ComplexAlgorithm.png)

### Descargo de responsabilidad

La información proporcionada a través del uso de esta aplicación web no pretende, en ningún caso, sustituir el consejo de un profesional médico. Visto lo visto, la web anteriormente mencionada tampoco debería.

Los datos que aquí se muestran sobre la aplicación de la Comunidad de Madrid han sido obtenidos el 21 de marzo de 2020.
