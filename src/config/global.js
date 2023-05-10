export default {
  global: {
    componenteFormativo:
      'Sociolingüística, bilingüismo y neologismos de la lengua de señas colombiana',
    descripcionCurso:
      'La constante investigación en el campo de las lenguas ha dado lugar a la aparición de nuevos fenómenos que permiten el crecimiento de nuevos términos y palabras. Muchas de estas nuevas palabras son procedentes de otras lenguas y son adaptadas al español o se prestan en una forma de neologismos que han cobrado fuerza con la asociación de nuevos conceptos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/item_01.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/item_02.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/item_03.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/item_04.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'fas fa-play-circle',
        numero: '1',
        titulo: 'Lengua materna y segunda lengua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Lengua materna',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Lengua de señas y español ¿primera o segunda lengua?',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'El aprendizaje y la adquisición de una lengua',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sociolingüística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'El uso coloquial y técnico de las lenguas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Factores gramaticales, pragmáticos y semánticos de la lengua fuente y meta (español - LSC y LSC - español)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Tipología y estructuras de textos de la lengua fuente y meta',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El bilingüismo ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Los neologismos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/512400_CF03_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Lengua materna y segunda lengua',
      referencia:
        'Barreto, A. (2021). Relatos del desorden: exploraciones sobre capital cultural en comunidades sordas, y el papel de la mano no-dominante en la creación de palabras de la lengua de señas colombiana. Universidad Nacional de Colombia. ',
      tipo: 'PDF',
      descarga: '/downloads/73181915_2021.pdf',
    },
    {
      tema: 'Lengua de señas y español ¿primera o segunda lengua?',
      referencia:
        'Barreto, A. (2015). La increíble y triste historia de la interpretación de lengua de señas: reflexiones identitarias desde Colombia. Mutatis Mutandis: Revista Latinoamericana de Traducción, 8(2), p. 299-330.',
      tipo: 'PDF',
      descarga: '/downloads/acastrillongonzalez.pdf',
    },
    {
      tema: 'Los neologismos',
      referencia:
        'Bello, Y., y Gómez, O. (2017). Consideraciones sobre las actitudes lingüísticas de señantes de lengua de señas colombiana frente a los neologismos ya los señantes de la comunidad Árbol de Vida. Lenguaje, 45(1), p. 141-166. ',
      tipo: 'PDF',
      descarga: '/downloads/0120-3479-leng-45-01-00141.pdf',
    },
    {
      tema: 'Los neologismos',
      referencia:
        'Amórtegui, E., y Rangel, O. (2008). Comparación de estrategias para la traducción de neologismos. (Trabajo de grado). Universidad Javeriana, Bogotá.',
      tipo: 'PDF',
      descarga: '/downloads/tesis256.pdf',
    },
    {
      tema: 'Los neologismos',
      referencia:
        'Barreto, A. (2015). Fundarvid: Una contextualización etnográfica de sus neologismos en la lengua de señas colombiana. (Trabajo de investigación de maestría inédito). Universidad Nacional de Colombia.',
      tipo: 'PDF',
      descarga: '/downloads/731819152015.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Bilingüismo',
      significado:
        'capacidad de desarrollar algún nivel de competencia (hablar, leer, entender, escribir) en una segunda lengua.',
    },
    {
      termino: 'Lengua materna',
      significado:
        'es la primera lengua que aprende una persona en su vida. También se le llama lengua nativa o lengua natal. Es la lengua o idioma que aprende una persona en sus primeros años de vida y que habitualmente se convierte en su instrumento natural de pensamiento y comunicación.',
    },
    {
      termino: 'Mnemotecnia',
      significado:
        'deriva del griego mnéemee (memoria), y téchnee (arte). Una regla mnemotécnica es un sistema sencillo utilizado para recordar una secuencia de datos, nombres, números, y en general para recordar listas de datos relacionando palabras, imágenes, etc.',
    },
    {
      termino: 'Neologismos',
      significado:
        'vocablo, acepción o giro novedoso que ha sido introducido en una lengua por razones determinadas. Se trata, por tanto, de la constitución de un una nueva palabra o un nuevo significado derivado de una ya establecida.',
    },
    {
      termino: 'Segunda lengua',
      significado:
        'se denomina segunda lengua al idioma no nativo de una persona o territorio, es decir, una lengua aprendida después del período de tiempo determinado.',
    },
    {
      termino: 'Sociolingüística',
      significado:
        'disciplina que se ocupa de las relaciones entre el lenguaje y la sociedad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cárdenas, N. (2018). Perspectivas para un estudio sobre bilingüismo en universidades regionales colombianas. Revista historia de la educación latinoamericana, 20(31), 125-142.',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0122-72382018000200125',
    },
    {
      referencia:
        'Congreso de Colombia. (1992). Ley 982 de 2005. Por la cual se establecen normas tendientes a la equiparación de oportunidades para las personas sordas y sordociegas y se dictan otras disposiciones. 2 de agosto de 2005. D.O. 45995',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=17283#:~:text=Subtema%3A%20Tel%C3%A9fonos%20P%C3%BAblicos-,Establece%20normas%20tendientes%20a%20la%20equiparaci%C3%B3n%20de%20oportunidades%20para%20las,Gobierno%20Nacional%20reglamentar%C3%A1%20la%20materia',
    },
    {
      referencia:
        'Domínguez, E. (2016). Interpretación simultánea: el camino hacia la profesionalización. (Trabajo de fin de grado). Universidad Autónoma de Barcelona. Barcelona, España.',
      link: 'https://core.ac.uk/display/78543263',
    },
    {
      referencia:
        'Hael, V. (2018). Abordajes de la lectura por parte de sordos en contextos bilingües en países de habla hispana. Revista Latinoamericana de Educación Inclusiva, 12(2), 79-96.',
      link:
        'https://scielo.conicyt.cl/scielo.php?script=sci_abstract&pid=S0718-73782018000200079&lng=pt&nrm=iso',
    },
    {
      referencia:
        'Herrera, V., y Calderón, V. (2019). Prácticas Pedagógicas y transformaciones sociales. Interculturalidad y bilingüismo en la educación de sordos. Revista Latinoamericana de Educación Inclusiva, 13(1), 73-88.',
      link:
        'https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0718-73782019000100073',
    },
    {
      referencia:
        'Jiménez, I., A. (2002). Variedades de interpretación: modalidades y tipos. Hermeneus: Revista de la Facultad de Traducción e Interpretación de Soria, (4), 95-114.',
      link:
        'https://www.researchgate.net/publication/277273211_Variedades_de_interpretacion_modalidades_y_tipos',
    },
    {
      referencia:
        'Nieto, G. (2017). El aprendizaje de la gramática española por parte de aprendientes extranjeros y sordos: puntos de encuentro. Hechos y Proyecciones del Lenguaje. 23(1), Págs.: (31 – 41).',
      link:
        'https://revistas.udenar.edu.co/index.php/rheprol/article/view/3841',
    },
    {
      referencia:
        'Oviedo, A. (2001). Apuntes para una gramática de la Lengua de Señas Colombiana. Ministerio de Educación Nacional, Instituto Nacional para Sordos.',
      link:
        'https://cultura-sorda.org/wp-content/uploads/2021/04/LSC-2-Sumario.pdf',
    },
    {
      referencia:
        'Signoret, D., A. (2003). Bilingüismo y cognición: ¿cuándo iniciar el bilingüismo en el aula?. Perfiles Educativos, 25(102), 6-21.',
      link:
        'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0185-26982003000400002#:~:text=Es%20entonces%20esencialmente%20a%20partir,en%20el%20ni%C3%B1o%20toma%20fuerza.',
    },
    {
      referencia:
        'Silva-Corvalán, C. (2001). Sociolingüística y pragmática del español. Georgetown University Press.',
      link:
        'https://lintres.files.wordpress.com/2013/06/carmen-silva-corvalc3a1nsociolingc3bcc3adstica-y-pragmc3a1tica-del-espac3b1ol.pdf',
    },
    {
      referencia:
        'Tovar, L. (2001). La importancia del estudio de las lenguas de señas. Lenguaje, 28, 42-61.',
      link: 'https://bibliotecadigital.univalle.edu.co/handle/10893/2704',
    },
    {
      referencia:
        'Vargas, C. (2020). Neologismos de la lengua de señas colombiana en contexto: Una lectura de un debate comunitario desde la Etnoeducación. (Tesis de grado). UNAD, Bogotá.',
      link: 'https://repository.unad.edu.co/handle/10596/31286',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jhacesiz Mary Hincapié Atehortúa',
          cargo: 'Instructora',
          centro: 'Centro de Servicios de Salud - Regional Antioquia.',
        },
        {
          nombre: 'Manuel Alejandro Garzón',
          cargo: 'Instructor',
          centro: 'Centro de Servicios de Salud - Regional Antioquia.',
        },
        {
          nombre: 'German Albeiro Saldarriga ',
          cargo: 'Instructora',
          centro: 'Centro de Servicios de Salud - Regional Antioquia.',
        },
        {
          nombre: 'Adriana María Bustamante',
          cargo: 'Profesional Diseño Curricular',
          centro: 'Centro de Servicios de Salud - Regional Antioquia.',
        },
        {
          nombre: 'Nidian Yarume Ortiz Buitrago',
          cargo: 'Experta temática',
          centro:
            'Centro de Formación en Talento Humano y Salud - Regional Distrito Capital.',
        },
        {
          nombre: 'Jeimy Lorena Romero Perilla',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander.',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus ',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'José Grabriel Ortiz Abella ',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
