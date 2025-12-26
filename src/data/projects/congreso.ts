import { ModalData } from '@/types/proyecto.types';

export const congresoModalData: ModalData = {
  title: 'Congreso de Logística y Transporte',
  sections: [
    {
      key: 'home',
      title: 'Inicio',
      description: 'Portada principal del sitio, acceso rápido a información clave y bienvenida al Congreso.',
      images: [
        '/images/proyectos/congreso/home/home-1.webp',
        '/images/proyectos/congreso/home/home-2.webp',
      ],
    },
    {
      key: 'sobre',
      title: 'Sobre el Congreso',
      description: 'Información general y detalles sobre el evento.',
      subsections: [
        {
          key: 'disertantes',
          title: 'Disertantes',
          description: 'Listado y perfiles de los disertantes del congreso.',
          images: [
            '/images/proyectos/congreso/sobre-el-congreso/disertantes/disertantes.webp',
          ],
        },
        {
          key: 'empresas',
          title: 'Empresas',
          description: 'Empresas participantes y colaboradoras.',
          images: [
            '/images/proyectos/congreso/sobre-el-congreso/empresas/empresas-1.webp',
          ],
        },
        {
          key: 'info',
          title: 'Información General',
          description: 'Detalles generales sobre el evento y su organización.',
          images: [
            '/images/proyectos/congreso/sobre-el-congreso/informacion-general/sobre-el-congreso.webp',
          ],
        },
        {
          key: 'programa',
          title: 'Programa',
          description: 'Programa completo del congreso, cronograma y actividades.',
          images: [
            '/images/proyectos/congreso/sobre-el-congreso/programa/programa-1.webp',
            '/images/proyectos/congreso/sobre-el-congreso/programa/programa-2.webp',
          ],
        },
      ],
    },
    {
      key: 'registro',
      title: 'Registro',
      description: 'Formulario y proceso de inscripción al evento.',
      images: [
        '/images/proyectos/congreso/registro/registro.webp',
        '/images/proyectos/congreso/registro/registro-1.webp',
        '/images/proyectos/congreso/registro/registro-2.webp',
        '/images/proyectos/congreso/registro/registro-3.webp',
      ],
    },
    {
      key: 'contacto',
      title: 'Contacto',
      description: 'Información de contacto y canales de comunicación.',
      images: [
        '/images/proyectos/congreso/contacto/contacto.webp',
      ],
    },
    {
      key: 'historia',
      title: 'Historia del Campus',
      description: 'Reseña histórica y galería del campus universitario.',
      images: [
        '/images/proyectos/congreso/historia/historia-1.webp',
        '/images/proyectos/congreso/historia/historia-2.webp',
        '/images/proyectos/congreso/historia/historia-3.webp',
        '/images/proyectos/congreso/historia/historia-4.webp',
      ],
    },
  ],
};
