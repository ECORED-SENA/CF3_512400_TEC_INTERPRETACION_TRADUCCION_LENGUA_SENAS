<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Los neologismos

    p(data-aos="fade-in") Actualmente es necesaria la creación de nuevos términos que corresponden a nuevos conceptos o a la designación de nuevas realidades. El término neologismo nació en el siglo XVIII para designar una afectación en la manera de expresarse, con una carga peyorativa, que con el pasar del tiempo designó una innovación en la lengua. Un neologismo es una palabra o expresión nueva que se crea en una lengua, con respecto a la época en que surge.

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10.mb-4
        .bloque-texto-g.color-rosa.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t4/t4_01.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el caso de la Lengua de Señas Colombiana (LSC), hay que reconocer en primera instancia, que nace de una comunidad heterogénea, dicho de otra manera, culturalmente diversa que, como señaló Tovar (2001), esta comunidad está dividida en dos grupos principales: por un lado, los sordos de generaciones más jóvenes pertenecientes a la Comunidad Árbol de Vida y, por otra parte, los sordos de generaciones adultas-mayores con sordos más jóvenes relacionados con alguna institución. 

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10        
        .cajon.color-celeste.p-4
          .row.align-items-center
            .col.col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/temas/t4/t4_02.svg", alt="alt").img85.m-auto
            .col-md
              p.mb-0 En 1994 nació esta división con cuatro jóvenes estudiantes sordos enfrentados a un contexto académico oralizado en el que se vieron en la imperiosa necesidad de adecuar su lengua a lo que para ellos eran los nuevos vocablos e iniciaron un proceso de creación de señas. En cuanto a muchas de las señas propuestas por Árbol de vida, tal parece ser que, efectivamente, no siguen los procesos más productivos que se han identificado. Se trata a menudo de señas que intentan ser etimológicas, a la manera de los neologismos de las lenguas orales basadas en los étimos griegos y latinos, en las que cada mano expresa una raíz. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_04.svg", alt="alt")
      .col-lg-8(data-aos="fade-in")
        p Otros estudiosos hablan de calcar las lenguas orales, traerlas de otros países o continentes. En cualquier caso, para los usuarios de la lengua de señas colombiana los neologismos se han convertido en un tema de discusión, estudio y de grandes desacuerdos. Los señantes de la Lengua de Señas Colombiana advierten variaciones en su forma y expresividad a nivel regional y que su lengua está muy ligada a la historia de su educación. Estos fenómenos particulares de las señas colombianas relacionadas con los neologismos hacen que la traducción e interpretación sea todo un reto.

        .crd-pink.p-4(data-aos="zoom-in")
          .row.justify-content-center.align-items-center
            .col.col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/temas/t4/t4_03.svg", alt="alt").img85.m-auto
            .col-md
              p.mb-0 Una de las razones por las que existen los neologismos en la lengua de señas, es porque “un grupo de señas construyen significados complejos y tienen usos específicos, […] además, no existe seña simple. No son simples las señas tradicionales”, (Barreto, 2015); así como tampoco son simples los neologismos. Pese a todo lo anterior, estas nuevas formas de expresión o neologismos surgen para una mayor efectividad en la comunicación.

    Separador 
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.1 Tipos de neologismos

    p(data-aos="fade-in") A continuación, se indican algunos de los tipos de neologismos más utilizados por los académicos y que se pueden aplicar de igual manera a la Lengua de Señas Colombiana.

    .bg-slyder.p-5.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h3 Neologismos de forma
            p.mb-0 Estos se crean por la transformación morfológica de palabras o vocablos que ya existen en el idioma. Estos pueden ser por sufijación, prefijación, interferencias entre sufijación y prefijación, composición, lexicalización, conversión sintáctica, sintagmación, siglación, acronimia o abreviación. Ejemplos en español: antiarrugas, fotoperiodismo, papamóvil.
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/t4/t4_05.svg', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h3 Neologismos semánticos
            p.mb-0 Se refieren a las palabras que, si bien ya forman parte de la lengua, son tomadas con otro significado o sentido en el mismo idioma. Ejemplos en español: buscador, parquet o virus.
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/t4/t4_06.svg', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h3 Neologismos estilísticos
            p.mb-0 Son aquellas palabras que se aplican para darle un tono más sensible y positivo a una expresión, o para cambiar la percepción de las cosas. Ejemplos en español: moreno, invidente.
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/t4/t4_07.svg', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h3 Neologismos funcionales
            p.mb-0 Esta clasificación se refiere a la necesidad de añadir nuevas palabras a una lengua, porque no hay otra manera de designar a un objeto o situación en particular y permiten que sea más dinámica la comunicación. Ejemplos en español: kilo, jirafa, oruga.
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/t4/t4_08.svg', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h3 Neologismos sociales
            p.mb-0 Son todos aquellos que describen o definen aspectos vinculados a la sociedad donde vivimos, lo moral y cultural. Ejemplos en español: comité, huelga, asamblea.
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/t4/t4_09.svg', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h3 Neologismos por préstamos
            p.mb-0 Términos importados de otra lengua, estén o no admitidos. También puede referirse a los extranjerismos o al término imperialismo lingüístico, haciendo referencia a la influencia que ejerce una lengua dominante sobre otras. Ejemplos en español: carné, champú, estrés, consomé. 
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/t4/t4_10.svg', alt='')

        .row.justify-content-center.align-items-center
          .col-lg-6.mb-4.mb-lg-0
            h3 Neologismos tecnológicos
            p.mb-0 Este tipo de neologismos está relacionado con los cambios que producen las palabras en los campos de la tecnología y la ciencia. Casi siempre provienen de otros idiomas, en el caso del español, el inglés. Esta clasificación es una de las más utilizadas en la actualidad. Ejemplos en español: escáner, servidor, selfi o ciberespacio.
          .col-lg-6.col-8
            figure
              img(src='@/assets/curso/temas/t4/t4_11.svg', alt='')

    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.2 Procedimiento para la creación, recolección, validación y divulgación de neologismos

    p.mb-5(data-aos="fade-in") Los intereses para la creación de los neologismos son diferentes. En algunos casos pueden ser de tipo comercial, académico o gubernamental. Teniendo en cuenta lo anterior, los intérpretes y traductores se enfrentan con diversos y complejos retos porque requieren de una investigación profunda y obligatoria de cultura, contexto y temática de la lengua de señas para la creación de los neologismos.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .bloque-texto-c.color-rosa-claro.p-4
          i.fas.fa-quote-right
          h4 Habla de la cultura como “la forma de vida y las manifestaciones propias de una comunidad que se hacen visibles en su lengua”. Por lo que “las palabras (o en este caso, las señas) están estrechamente ligadas a la cultura de cada comunidad en tanto estas les permiten manifestar sus costumbres y tradiciones desarrollando así su propia identidad.
          span.me-5.float-end - Newmark (1988)
          
    p.mb-5(data-aos="fade-in") El autor también hace una distinción de dos tipos de palabras: universales y culturales. Esto es importante a la hora de crear los neologismos, ya que la traducción e interpretación por transferencia privilegia la cultura, a diferencia del análisis componencial que se interesa en los elementos comunes en un contexto específico, así: 

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .crd-avatar-Horizontal(data-aos="flip-right")
          .row
            .col-auto
              figure
                img(src="@/assets/curso/temas/t4/t4_12.svg", alt="alt").img85
            .col
              h3 Universales
              p.mb-0 No representan un problema para el traductor e intérprete, ya que son familiares para la comunidad sorda, como mesa, silla o mamá. En este caso no es necesario crear un neologismo.
      .col-lg-6
        .crd-avatar-Horizontal(data-aos="flip-right")
          .row
            .col-auto
              figure
                img(src="@/assets/curso/temas/t4/t4_13.svg", alt="alt").img85
            .col
              h3 Culturales
              p.mb-0 Pueden presentarse dificultades por interferencia entre los mismos hablantes de la lengua al designar objetos, fenómenos o procesos propios de una cultura.

    p.mb-5 El fenómeno de los neologismos no atañe a la interpretación o traducción de textos, sino más bien de palabras y de expresiones, estas, a su vez pueden nacer por la planeación organizada o por la espontaneidad; para mejor compresión se deben revisar a continuación los tipos de neologías: 

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-auto
        .bg_darkBlue_02
          h3.text-white.mb-0 Clasificación de las neologías

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-12.mb-4.d-lg-none.d-flex
        figure
          img(src="@/assets/curso/temas/t4/t4_16.svg", alt="alt").img300.m-auto
      .col-lg-5.col
        .blueSquare
          h4 1. ¿Que es una neología?
          .bg_pink.p-4
            .row.justify-content-center.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t4/t4_17.svg", alt="alt").img85.m-auto 
              .col
                p.mb-0 Campo de conocimiento que se ocupa del estudio de las palabras nuevas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")    
      .col-lg-4.mb-4.mb-lg-0
        .blueSquare
          h4 2.¿Qué es una neología espontanea?
          .bg_pink.p-4
            p Puede "ser consecuencia de un acto inconsciente por parte del hablante, que forma una nueva unidad sin darse cuenta de que se trata de una unidad no codificada en las obras lexicográficas". Estos nacen de la subjetividad, de un grupo o son extranjerismos. Estas suelen dejarse al azar y al uso particular según las necesidades de la comunidad, que luego pueden llegar a incorporarlas a su vocabulario.
            figure
              img(src="@/assets/curso/temas/t4/t4_18.svg", alt="alt").img85.m-auto

      .col-lg-4.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/t4/t4_16.svg", alt="alt").img300.m-auto

      .col-lg-4
        .blueSquare
          h4 3.¿Qué es una neología planificada?
          .bg_pink.p-4
            p Tiene como objetivo dotar a una lengua de recursos de expresión y de comunicación propios, es decir, de preservar una lengua, y para ello usa como base las nociones de norma y genuinidad linguistica". Pascual, (2015). Generalmente nace en instituciones que buscan describir términos nuevos.
            figure
              img(src="@/assets/curso/temas/t4/t4_19.svg", alt="alt").img85.m-auto


    p.mb-4(data-aos="fade-in") Existen diferentes argumentos y estrategias que pueden ayudar en el particular ejercicio de la validación de los neologismos en la lengua de señas, algunos de ellos bien vistos por la comunidad de sordos en Colombia y otros no tanto. Se pueden plantear entonces algunas generalidades para tener en cuenta sobre este tema. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t4/t4_14.png", alt="alt")
      .col-lg-8(data-aos="fade-in")
        p Una de las controversias de los líderes señantes en Colombia es la creación de señas complejas, que utilicen movimientos de articulación diferentes para ambas manos o que sean difíciles de ejecutar por alguna otra razón. Sin embargo, aún si es de difícil articulación, es posible que la fonología de una seña extraña, con el uso, se asimile a la de la lengua. Pero tampoco es obligatorio pensar que, para que un signo lingüístico sea válido y ayude en la conceptualización, tenga que expresar en morfemas definidos los significados que encierra. 

        p Otro debate sobresaliente para validar los neologismos en la lengua de señas es el calco de los campos semánticos, es decir, una imitación literal del significado que tienen las palabras o conceptos de la lengua oral a la lengua de señas sin ningún tipo de contextualización en el discurso ni llenar una necesidad específica.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .bloque-texto-a.color-azulRosa.p-4.p-md-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t4/t4_15.svg", alt="alt")
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Es necesaria una motivación visual a la hora de crear nuevas señas, sin atropellar la simetría y dominancia, con una articulación cómoda, unos movimientos específicos, una percepción clara, una recordación simple y una completa claridad en los conceptos; son una base imprescindible para la creación, recolección, validación y divulgación de los neologismos.




</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
