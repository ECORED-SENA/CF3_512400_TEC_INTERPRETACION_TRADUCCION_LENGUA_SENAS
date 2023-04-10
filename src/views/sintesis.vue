<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El lenguaje de señas es una disciplina que constantemente se encuentra en proceso de investigación, es innegables que el lenguaje español es la base sobre la cual esta se desarrolla, dicho lenguaje ha sido estudiado desde su morfología, sintaxis, semántica, fonoaudiología y un sinnúmero de fenómenos que permiten su entendimiento dentro de diferente contextos, por ende, resulta fundamental conocer la relación de todos estas áreas de estudio con el lenguaje de señas colombiano, aspectos que contribuirán a que el intérprete desarrolle su labor de la mejor manera posible 

    p.mb-5 Una breve revisión de los temas vistos, se encuentran en el siguiente esquema: 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
