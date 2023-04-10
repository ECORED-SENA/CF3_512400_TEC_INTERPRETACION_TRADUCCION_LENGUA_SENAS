<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Lengua materna y segunda lengua

    .row.justify-content-center
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-rosa.p-3.p-sm-4.p-md-5.mb-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t1/t1_01.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 No siempre es evidente establecer la diferencia entre lengua materna y segunda lengua, la primera hace referencia como aquella que se aprende desde el momento mismo del nacimiento, puede expresarla de manera espontánea y fluida, es decir, la que lengua con la que se tiene más facilidad de comunicación y forma parte de la identidad del ser humano.

      .col-lg-10(data-aos="zoom-in")
        .cajon.color-celeste.p-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t1/t1_02.svg", alt="alt").img85.m-auto
            .col
              p.mb-0 La segunda lengua hace referencia a aquella que se aprende por gusto, después de haber adquirido la lengua materna, es una opción que dispone el ser humano para establecer otras formas de comunicación. A continuación, se invita a profundizar en cada una de ellas. 

    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Lengua materna

    p.mb-4(data-aos="fade-in") Nieto (2017), define la lengua materna como :

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .bloque-texto-c.color-rosa-claro.p-4
          i.fas.fa-quote-right
          h4 Aquella que se adquiere de forma inconsciente y espontánea. Como aquella que resulta ser la base sobre la que se construye el proceso de adquisición del lenguaje, el desarrollo cognitivo y de identidad psicosocial del individuo.
          span.me-5.float-end - Nieto (2017)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-10.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_03.png", alt="alt")
      .col-lg-8(data-aos="fade-in")
        p En este sentido, se entiende la lengua materna como una lengua que no requiere instrucción formal, una lengua que se adquiere en un contexto natural lingüísticamente enriquecido. Sin embargo, no son equiparables los conceptos de lengua materna y primera lengua, porque una primera lengua se define por la frecuencia de uso respecto a la condición de bilingüismo del hablante y su nivel de dominio de la lengua. 

        p En algunos casos la lengua materna y la primera lengua son la misma, en otros casos el orden en el que fueron adquiridas-aprendidas las lenguas por parte del individuo no es influyente y lo determinante resulta ser la frecuencia de uso que este hace de una de las lenguas. 

        p.mb-0 Otro concepto relevante es este escenario es el de #[span.bold.clr-wine lengua natural], definida como:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10        
        .cajon.color-celeste.p-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/t1/t1_04.svg", alt="alt").img85.m-auto
            .col
              p.mb-0 “Aquella lengua cuyo canal no presenta obstáculos a los hablantes y se encuentra en armonía con sus características fisiológicas y de igual manera que la lengua materna, es adquirida sin necesidad de instrucción formal” Nieto (2017). 

    .cstmH3--blue.mb-5(data-aos="fade-right")
      h3.mb-0 Segunda lengua

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .bloque-texto-a.color-azulRosa.p-4.p-md-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/t1/t1_05.svg", alt="alt")
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Una segunda lengua en algunos casos se adquiere y en otros casos se aprende; se adquiere cuando el contacto con la lengua es espontáneo y mediante la interacción directa en un contexto de habla; y se aprende cuando existe un proceso de instrucción formal que estructura la lengua por niveles y los aborda a través de una estrategia didáctica que permite la comprensión de sus contenidos.        

    p(data-aos="fade-in") Una segunda lengua se construye mediante el conocimiento previo de la lengua natural o la lengua materna que posee un individuo. Este desarrollo cognitivo y demás procesos de pensamiento logrados en la lengua materna, posibilitan la construcción de un proceso de transferencia lingüística de la primera lengua a la lengua meta.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Lengua de señas y español ¿primera o segunda lengua? 

    p.mb-5 Son diversos los contextos de adquisición y aprendizaje de un código lingüístico por parte de los miembros de la comunidad sorda, en el siguiente material se presenta cómo se da este proceso.

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 El aprendizaje y la adquisición de una lengua

    p(data-aos="fade-in") Como se ha venido anticipando, los conceptos de adquisición y aprendizaje no son sinónimos, para conocer su definición se debe hacer clic en cada uno de los siguientes botones. 

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="flip-right")
        .crd-avatar-Horizontal.hg-100
          .row
            .col-auto
              figure
                img(src="@/assets/curso/temas/t1/t1_06.svg", alt="alt").img85
            .col
              h3 Adquisición 
              p.mb-0 Obedece a un proceso inconsciente y espontáneo que se desarrolla en un ambiente natural a partir del uso de la lengua (Krashen, 1982)
      .col-lg-6(data-aos="flip-right")
        .crd-avatar-Horizontal.hg-100
          .row
            .col-auto
              figure
                img(src="@/assets/curso/temas/t1/t1_07.svg", alt="alt").img85
            .col
              h3 Aprendizaje 
              p.mb-0 Consiste en el conocimiento consciente de reglas y estructuras de una lengua que se enfoca en el uso de la variedad formal de la lengua (Muntzel, 1995).

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10
        .cajon.color-celeste.p-4          
          p.mb-0 La diferencia entre estos dos conceptos hace eco en el conocimiento de una lengua y en las decisiones que se toman durante el proceso de transferencia que realiza el intérprete durante un servicio, debido a que involucra el conocimiento experiencial y metalingüístico de las dos lenguas. 




          


    
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
