// Contenido oficial del sitio grupo-sidi.com — NO modificar el copy.
// Todo el texto es verbatim del sitio en producción.

export const site = {
  url: 'https://grupo-sidi.com',
  title: 'Grupo SIDI es: SOLUCIONES Industriales de Impacto.',
  description:
    'En Grupo SIDI brindamos nuestros servicios a la industria. Sellado de fugas en operación. Reparación y montaje de calderas. Reparación e hidrolavado de tanques. Entre otros. Ingresá a nuestra web para ver más.',
  phoneDisplay: '(+598) 099007975',
  phoneShort: 'UY 0 9900 7975',
  email: 'gruposidiuy@gmail.com',
  emailRRHH: 'rrhhgsidi@gmail.com',
  whatsapp:
    'https://api.whatsapp.com/send?phone=59899007975&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n',
  facebook: 'https://www.facebook.com/grupo.sidi.uy/',
  youtube: 'https://www.youtube.com/channel/UCpROqKodd9RkT_rMUv8bfMQ',
  youtubeVideoId: '6Zz62-wbNMA',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3380.707728405956!2d-57.91870212436595!3d-32.0771529739641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDA0JzM3LjgiUyA1N8KwNTQnNTguMSJX!5e0!3m2!1ses!2sar!4v1695685856182!5m2!1ses!2sar',
  formspree: 'https://formspree.io/f/mwvpjqve',
  credit: '2023 © Copyright. All rights Reserved | This web is made by TerraByteSolutions',
}

export const nav = [
  { label: 'NOSOTROS', href: '#quienes' },
  { label: 'SERVICIOS', href: '#servicios' },
  { label: 'PORTAFOLIO', href: '#integrantes' },
  { label: 'CLIENTES', href: '#clientes' },
  { label: 'TRABAJA CON NOSOTROS', href: '#trabaja-con-nosotros' },
  { label: 'CONTACTO', href: '#section-contacto' },
]

export const urgencias = [
  { titulo: 'Urgencias', texto: 'Servicio de emergencias 24hs' },
  { titulo: 'Presupuestos', texto: 'Presupuestos sin cargo a todo el país' },
  { titulo: 'Contactanos', texto: 'UY 0 9900 7975' },
]

export const nosotros = {
  titulo: 'NOSOTROS',
  subtitulo: 'Analizamos y accionamos!',
  // Los <span> destacados del original se marcan con ** **
  parrafo1:
    'Somos líderes en **soluciones industriales** de impacto. Son aval de nuestra trayectoria la **confianza del Estado** y de firmas pioneras en la industria.',
  parrafo2:
    'Analizamos, proyectamos y amoldamos al funcionamiento de cada planta la solución brindada. Nuestras intervenciones se analizan según **durabilidad, eficacia, seguridad y responsabilidad** con el impacto medioambiental.',
}

export type Servicio = { titulo: string; texto: string; icon: string }

export const servicios: Servicio[] = [
  {
    titulo: 'Recuperación de espesores',
    texto:
      'Contamos con un sistema de reparación con materiales compuestos no metálicos especialmente diseñado para la reparación de equipos y tuberías de la industria de GAS, Petroquímica y Refinación (Alta presión). Con este método podemos recuperar espesores en cañerías afectadas por el paso del tiempo extendiendo la vida útil hasta su remplazo definitivo.',
    icon: 'brocha',
  },
  {
    titulo: 'Montaje de galpones y naves de gran porte',
    texto:
      'Estructuras metálicas y de hormigón. Tinglados, sobre techos, entre pisos. Cerramientos perimetrales de tejidos y hormigon. Trabajamos con chapas, isopanel, hierro, aluminio, galvanizados y aceros. Construimos plateas, fundaciones, pisos de hormigón, pulidos y epóxicos. Calidad y experiencia en montajes.',
    icon: 'galpon',
  },
  {
    titulo: 'Servicios de agua',
    texto:
      'Perforaciones de agua subterránea, alumbramientos de agua. Para industria, comercio , agro y particulares. Limpieza y desinfección de pozos semisurgentes, cateos y reentubados especiales. Instalaciones de bombas y equipos hidráulicos. Estudios geológicos, Estudios de potabilización. Instalación, reparación, limpieza y desinfección de tanques de agua. Todos los materiales: hormigón, fibra, acero, piletones, etc. Declaraciones de pozos ante DINAGUA. Todas las garantías. Contamos con todas las habilitaciones.',
    icon: 'agua',
  },
  {
    titulo: 'Sellado de fugas',
    texto:
      'Reparación de fugas de fluidos (hidrocarburos, agua, gas, químicos, vapor de alta presión, amoníaco, etc.). Asistencia y mantenimiento industrial en operación sin detener la planta.',
    icon: 'sellado',
  },
  {
    titulo: 'Estudios y tratamientos ambientales',
    texto:
      'Estudios de impacto ambiental Muestreo de suelos y detección de contaminantes. Estudio y tratamiento de aguas contaminadas. Control de derrames ambientales. Tratamiento de suelos contaminados. Napas contaminadas',
    icon: 'ambiente',
  },
  {
    titulo: 'Especialistas en Cañerías',
    texto:
      'Expertos en cañerías de: agua, presión, gas, petroleras, etc. Reparación de Oleoductos. Contamos con especialistas en alta presión. ¡Soldadores calificados!',
    icon: 'llave',
  },
  {
    titulo: 'Sistemas de protección de incendios',
    texto:
      'Proyectos e instalaciones contra incendio para la industria y el comercio. Detección, prevención y mantenimiento de sistemas antiincendios. Contamos con la habilitación de DNB.',
    icon: 'extintor',
  },
  {
    titulo: 'Auditoría, Análisis y Detección',
    texto:
      'Auditorías internas y seguimiento de integridad de ductos. Estudios de riesgo. Detección de fallas. Evaluación y valoración directa de corrosión. Muestreo, evaluación y procesamiento de datos',
    icon: 'grafico',
  },
  {
    titulo: 'Líderes únicos en tanques',
    texto:
      'Limpieza y reparación de todo tipo de tanques (hidrocarburos, agua, petroleros, etc). Recuperación de espesores especiales para cañerías. Tanques de hormigón, fibra, acero, piletones, etc. ¡Procesos de última generación! ¡Sin detener el funcionamiento de la planta!',
    icon: 'tanque',
  },
]

export type Trabajo = {
  titulo: string
  texto: string
  slug: string
  width: number
  height: number
}

export const portafolio: Trabajo[] = [
  {
    titulo: 'Recubrimiento de tanque',
    texto: 'Recubrimiento en tanque de soda caustica con producto epoxi. Recuperación de espesores.',
    slug: 'trabajo-recubrimiento-tanque',
    width: 758,
    height: 1599,
  },
  {
    titulo: 'Recuperación de espesores',
    texto:
      'Recuperacion de espesores en cañerías deterioradas mediante recubrimientos epoxicos de alta resistencia.',
    slug: 'trabajo-recuperacion-espesores',
    width: 800,
    height: 600,
  },
  {
    titulo: 'Perforaciones para agua',
    texto:
      'Realizamos alumbramientos de agua para industrias, emprendimientos comerciales, campos agrícolas y viviendas particulares. Limpieza y desinfección de pozos semisurgentes, cateos y reentubados especiales. Realizamos las habilitaciones correspondientes ante DINAGUA y DINAMA. Instalaciones de bombas y equipos hidráulicos.',
    slug: 'trabajo-perforaciones-agua',
    width: 720,
    height: 758,
  },
  {
    titulo: 'Sellado de fuga en Tacuarembo.',
    texto:
      'Fuga de vapor en Lumin. Tacuarembo, Uruguay. Presión 6 kg/cm2. Temperatura 180°. Bonete y brida de 6”. Se colocó alambre, se perforó la brida y se inyectó quedando sin fuga.',
    slug: 'trabajo-sellado-fuga-tacuarembo',
    width: 800,
    height: 1067,
  },
  {
    titulo: 'Sellado de fuga',
    texto:
      'Fuga sobre brida de torre 1950mm de diametro. Presión 4kg/cm2. Temperatura 60°. Se coloco anilló y se inyectó dando un resultado efectivo sin desarmar ni detener el equipo.',
    slug: 'trabajo-sellado-fuga-torre',
    width: 800,
    height: 1067,
  },
  {
    titulo: 'Reparación de tanque',
    texto:
      'Reparación de tanque de fibra. También efectuamos la reparación de tanques de hormigón de todos los tamaños. Reparación de tanques de hierro. Somos expertos en reparaciones de tanques.',
    slug: 'trabajo-reparacion-tanque',
    width: 720,
    height: 1600,
  },
]

export type Cliente = {
  nombre: string
  texto: string
  logo: string
  width: number
  height: number
}

export const clientes: Cliente[] = [
  {
    nombre: 'LUMIN',
    texto: 'LUMIN empresa líder en forestación y productos forestales de Uruguay.',
    logo: 'cliente-lumin',
    width: 200,
    height: 200,
  },
  {
    nombre: 'ANCAP',
    texto: 'Administración Nacional de Combustibles, Alcohol y Pórtland.',
    logo: 'cliente-ancap',
    width: 200,
    height: 200,
  },
  {
    nombre: 'ATUCHA',
    texto:
      'El Complejo Nuclear Atucha es un centro argentino donde funcionan las centrales nucleares Atucha I y II',
    logo: 'cliente-atucha',
    width: 320,
    height: 320,
  },
  {
    nombre: 'CARGILL',
    texto:
      'Cargill es una de las principales empresas agroindustriales, y se dedica principalmente a la producción y exportación de soja, maíz y trigo.',
    logo: 'cliente-cargill',
    width: 320,
    height: 320,
  },
  {
    nombre: 'UPM',
    texto:
      'UPM produce y distribuye celulosa a distintas plantas industriales en el mercado nacional e internacional.',
    logo: 'cliente-upm',
    width: 200,
    height: 200,
  },
  {
    nombre: 'Montes del plata',
    texto: 'Empresa forestal, industria líder en producción de celulosa.',
    logo: 'cliente-montes-del-plata',
    width: 320,
    height: 315,
  },
  {
    nombre: 'Minerva Foods',
    texto: 'Empresa líder en exportación de carne de vacuno en Sudamérica.',
    logo: 'cliente-minerva-foods',
    width: 320,
    height: 320,
  },
  {
    nombre: 'OSE Obra Sanitaria del Estado',
    texto: 'Obra Sanitaria del Estado.',
    logo: 'cliente-ose',
    width: 320,
    height: 187,
  },
  {
    nombre: 'Scania',
    texto: 'Empresa global de ventas de camiones, buses y servicios.',
    logo: 'cliente-scania',
    width: 246,
    height: 204,
  },
]

export const trabajaConNosotros = {
  titulo1: 'TRABAJA CON',
  titulo2: ' NOSOTROS',
  texto:
    'Sé parte de nuestro equipo, preséntate y envíanos tu Curriculum Vitae al mail rrhhgsidi@gmail.com',
}

export const contacto = {
  titulo1: 'ENVIANOS UN',
  titulo2: ' CORREO',
  labels: { nombre: 'Nombre', correo: 'Correo', telefono: 'Teléfono', mensaje: 'Mensaje' },
  boton: 'ENVIAR',
  msgEnviando: 'Enviando...',
  msgOk: 'Mensaje enviado correctamente ✅',
  msgError: 'Error al enviar ❌',
  msgConexion: 'Error de conexión ❌',
}

export const ubicacion = { titulo1: 'NUESTRA', titulo2: ' UBICACIÓN' }

export const clientesIntro =
  'Tenemos el agrado de haber colaborado con prestigiosas empresas tales como:'
