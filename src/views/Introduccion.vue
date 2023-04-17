<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade-in") Bienvenido a este componente formativo, para comenzar el recorrido por el mismo, se invita a revisar la información que se presenta a continuación.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/6JL0h5blOwE" title="Sociolingüística, bilingüismo y neologismos de la Lengua de Señas Colombiana" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Sociolingüística, bilingüismo y neologismos de la Lengua de Señas Colombiana.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
