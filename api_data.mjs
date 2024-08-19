import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors({
    origin: '*' 
}));

const fields = [
      {
        id: "1",
        nombre: "Club Leyenda",
        material: "plastificado",
        ubicacion: "Recoleta",
        beneficios: "ducha escosesa",
        descripcion: "Imperdible y con canchas de primer nivel para jugar futbol sala profesional",
        imagen: "https://malaga.wiki/wp-content/uploads/medidas-del-campo-de-futbito.jpg"
      },
      {
        id: "2",
        nombre: "El campito",
        material: "césped sintetico",
        ubicacion: "V. Lopez",
        beneficios: "parking free access",
        descripcion: "Futbol 11 nivel interclub para competir en equipos",
        imagen: "https://i.blogs.es/e361ec/sandro-schuh-hgwy_yq1m0w-unsplash/1200_800.webp"
      },
      {
        id: "3",
        nombre: "Young Boys",
        material: "plastificado",
        ubicacion: "Caballito",
        beneficios: "entrenadores baby",
        descripcion: "Futbol de sala amateur para chicos de 6 a 15.",
        imagen: "https://cdn.pixabay.com/photo/2020/02/09/11/14/youth-football-4832719_1280.jpg"
      },
      {
        id: "4",
        nombre: "Paddle Sacramento",
        material: "cemento",
        ubicacion: "Las Cañitas",
        beneficios: "bar",
        descripcion: "El mejor lugar para disfrutar con tus amigos, contamos con muy buenas canchas.",
        imagen: "https://www.mdzol.com/u/fotografias/m/2021/11/9/f848x477-1133785_1191588_3362.jpg"
      },
      {
        id: "5",
        nombre: "Tandil Tenis",
        material: "polvo de ladrillo y césped",
        ubicacion: "Tandil",
        beneficios: "Cabañas",
        descripcion: "5 canchas de polvo de ladrillo y única en el pais con dos canchas de césped.",
        imagen: "https://img.asmedia.epimg.net/resizer/v2/4QLKYW6DGFNEJLVDCO7WN63TZU.jpg?auth=066a34dc34cd8b739df0711535e0d3498301ea33ced04ffb1db159919cc81118&width=1288&height=725&smart=true"
      },
      {
        id: "6",
        nombre: "Devoto Padel",
        material: "variado",
        ubicacion: "Villa Devoto",
        beneficios: "bar",
        descripcion: "Ubicado en zona centrica de Devoto, cerca a Plaza Arenales. 10 canchas.",
        imagen: "https://media.istockphoto.com/id/1363976548/es/foto/raqueta-de-p%C3%A1del-y-pelotas-en-la-pista-de-p%C3%A1del-azul.webp?b=1&s=170667a&w=0&k=20&c=OuTiOyAVbVz1lgq4FBu5_mcL4d-Uz1Ml_3pTkDQMI54="
      },
      {
        id: "7",
        nombre: "Padel Urquiza",
        material: "hormigon y plastificado",
        ubicacion: "Villa Urquiza",
        beneficios: "gym",
        descripcion: "Exclusivo gym con canchas de paddle.",
        imagen: "https://www.ellitoral.com/images/2024/01/03/QdXbUWd7m_1300x655__1.jpg"
      },
      {
        id: "8",
        nombre: "Pilar Soccer",
        material: "césped fútbol 11",
        ubicacion: "Pilar Country Las Leñas",
        beneficios: "Golf Club",
        descripcion: "En el corazón del Country Las Leñas tenemos el mejor torneo del país.",
        imagen: "https://elnortecd.com.ar/wp-content/uploads/2024/01/Futbol-11-46.webp"
      },
      {
        id: "9",
        nombre: "Tenis Lanús",
        material: "polvo de ladrillo",
        ubicacion: "Lanús",
        beneficios: "parrilla y salón de eventos",
        descripcion: "Alquilamos 24 horas. 12 canchas de polvo de ladrillo.",
        imagen: "https://clublanus.com/wp-content/uploads/2023/06/Tenis-Canchas.jpeg"
      },
      {
        id: "10",
        nombre: "Montevideo Padel",
        material: "hormigón última generación",
        ubicacion: "Carrasco",
        beneficios: "Rugby Club",
        descripcion: "Sorprendente e inmejorables canchas de paddle en Montevideo.",
        imagen: "https://carasucias.com.ar/media/k2/items/cache/89be03aca8f1275a2e53b04561e41fc0_XL.jpg"
      }
];

const details = [
  {
    id: 1,
    nombre: "Club Leyenda",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    precio: "15.000",
    imagen1: "https://malaga.wiki/wp-content/uploads/medidas-del-campo-de-futbito.jpg",
    imagen2: "https://malaga.wiki/wp-content/uploads/medidas-del-campo-de-futbito.jpg",
    imagen3: "https://malaga.wiki/wp-content/uploads/medidas-del-campo-de-futbito.jpg",
    imagen4: "https://malaga.wiki/wp-content/uploads/medidas-del-campo-de-futbito.jpg",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
    servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Cesped natural",
      estacionamiento: true,
      vestuario: true,
      buffet: true
    }
  },
  {
    id: 2,
    nombre: "El campito",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    precio: "16.000",
    imagen1: "https://i.blogs.es/e361ec/sandro-schuh-hgwy_yq1m0w-unsplash/1200_800.webp",
    imagen2: "https://i.blogs.es/e361ec/sandro-schuh-hgwy_yq1m0w-unsplash/1200_800.webp",
    imagen3: "https://i.blogs.es/e361ec/sandro-schuh-hgwy_yq1m0w-unsplash/1200_800.webp",
    imagen4: "https://i.blogs.es/e361ec/sandro-schuh-hgwy_yq1m0w-unsplash/1200_800.webp",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
    servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Cesped natural",
      estacionamiento: true,
      vestuario: true,
      buffet: true
    }
  },
  {
    id: 3,
    nombre: "Young Boys",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    precio: "17.000",
    imagen1: "https://cdn.pixabay.com/photo/2020/02/09/11/14/youth-football-4832719_1280.jpg",
    imagen2: "https://cdn.pixabay.com/photo/2020/02/09/11/14/youth-football-4832719_1280.jpg",
    imagen3: "https://cdn.pixabay.com/photo/2020/02/09/11/14/youth-football-4832719_1280.jpg",
    imagen4: "https://cdn.pixabay.com/photo/2020/02/09/11/14/youth-football-4832719_1280.jpg",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
    servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Cesped natural",
      estacionamiento: true,
      vestuario: true,
      buffet: true
    }
  },
  {
    id: 4,
    nombre: "Paddle Sacramento",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    precio: "18.000",
    imagen1: "https://www.mdzol.com/u/fotografias/m/2021/11/9/f848x477-1133785_1191588_3362.jpg",
    imagen2: "https://www.mdzol.com/u/fotografias/m/2021/11/9/f848x477-1133785_1191588_3362.jpg",
    imagen3: "https://www.mdzol.com/u/fotografias/m/2021/11/9/f848x477-1133785_1191588_3362.jpg",
    imagen4: "https://www.mdzol.com/u/fotografias/m/2021/11/9/f848x477-1133785_1191588_3362.jpg",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
    servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Cesped natural",
      estacionamiento: true,
      vestuario: true,
      buffet: true
    }
  },
  {
    id: 5,
    nombre: "Tandil tenis",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    precio: "19.000",
    imagen1: "https://img.asmedia.epimg.net/resizer/v2/4QLKYW6DGFNEJLVDCO7WN63TZU.jpg?auth=066a34dc34cd8b739df0711535e0d3498301ea33ced04ffb1db159919cc81118&width=1288&height=725&smart=true",
    imagen2: "https://img.asmedia.epimg.net/resizer/v2/4QLKYW6DGFNEJLVDCO7WN63TZU.jpg?auth=066a34dc34cd8b739df0711535e0d3498301ea33ced04ffb1db159919cc81118&width=1288&height=725&smart=true",
    imagen3: "https://img.asmedia.epimg.net/resizer/v2/4QLKYW6DGFNEJLVDCO7WN63TZU.jpg?auth=066a34dc34cd8b739df0711535e0d3498301ea33ced04ffb1db159919cc81118&width=1288&height=725&smart=true",
    imagen4: "https://img.asmedia.epimg.net/resizer/v2/4QLKYW6DGFNEJLVDCO7WN63TZU.jpg?auth=066a34dc34cd8b739df0711535e0d3498301ea33ced04ffb1db159919cc81118&width=1288&height=725&smart=true",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
    servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Cesped natural",
      estacionamiento: true,
      vestuario: true,
      buffet: true
    }
  },
  {
    id: 6,
    nombre: "Devoto Padle",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    precio: "15.000",
    imagen1: "https://media.istockphoto.com/id/1363976548/es/foto/raqueta-de-p%C3%A1del-y-pelotas-en-la-pista-de-p%C3%A1del-azul.webp?b=1&s=170667a&w=0&k=20&c=OuTiOyAVbVz1lgq4FBu5_mcL4d-Uz1Ml_3pTkDQMI54=",
    imagen2: "https://media.istockphoto.com/id/1363976548/es/foto/raqueta-de-p%C3%A1del-y-pelotas-en-la-pista-de-p%C3%A1del-azul.webp?b=1&s=170667a&w=0&k=20&c=OuTiOyAVbVz1lgq4FBu5_mcL4d-Uz1Ml_3pTkDQMI54=",
    imagen3: "https://media.istockphoto.com/id/1363976548/es/foto/raqueta-de-p%C3%A1del-y-pelotas-en-la-pista-de-p%C3%A1del-azul.webp?b=1&s=170667a&w=0&k=20&c=OuTiOyAVbVz1lgq4FBu5_mcL4d-Uz1Ml_3pTkDQMI54=",
    imagen4: "https://media.istockphoto.com/id/1363976548/es/foto/raqueta-de-p%C3%A1del-y-pelotas-en-la-pista-de-p%C3%A1del-azul.webp?b=1&s=170667a&w=0&k=20&c=OuTiOyAVbVz1lgq4FBu5_mcL4d-Uz1Ml_3pTkDQMI54=",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
        servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Cesped natural",
      estacionamiento: true,
      vestuario: true,
      buffet: true
    }
  },
  {
    id: 7,
    nombre: "Padle Urquiza",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    precio: "16.000",
    imagen1: "https://www.ellitoral.com/images/2024/01/03/QdXbUWd7m_1300x655__1.jpg",
    imagen2: "https://www.ellitoral.com/images/2024/01/03/QdXbUWd7m_1300x655__1.jpg",
    imagen3: "https://www.ellitoral.com/images/2024/01/03/QdXbUWd7m_1300x655__1.jpg",
    imagen4: "https://www.ellitoral.com/images/2024/01/03/QdXbUWd7m_1300x655__1.jpg",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
        servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Cesped natural",
      estacionamiento: true,
      vestuario: true,
      buffet: true
    }
  },
  {
    id: 8,
    nombre: "Pilar Soccer",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    precio: "17.000",
    imagen1: "https://elnortecd.com.ar/wp-content/uploads/2024/01/Futbol-11-46.webp",
    imagen2: "https://elnortecd.com.ar/wp-content/uploads/2024/01/Futbol-11-46.webp",
    imagen3: "https://elnortecd.com.ar/wp-content/uploads/2024/01/Futbol-11-46.webp",
    imagen4: "https://elnortecd.com.ar/wp-content/uploads/2024/01/Futbol-11-46.webp",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
        servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Cesped natural",
      estacionamiento: true,
      vestuario: true,
      buffet: true
    }
  },
  {
    id: 9,
    nombre: "Tenis Lanus",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    precio: "18.000",
    imagen1: "https://clublanus.com/wp-content/uploads/2023/06/Tenis-Canchas.jpeg",
    imagen2: "https://clublanus.com/wp-content/uploads/2023/06/Tenis-Canchas.jpeg",
    imagen3: "https://clublanus.com/wp-content/uploads/2023/06/Tenis-Canchas.jpeg",
    imagen4: "https://clublanus.com/wp-content/uploads/2023/06/Tenis-Canchas.jpeg",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
        servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Cesped natural",
      estacionamiento: true,
      vestuario: true,
      buffet: true
    }
  },
  {
    id: 10,
    nombre: "Montevideo Padle",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    precio: "19.000",
    imagen1: "https://carasucias.com.ar/media/k2/items/cache/89be03aca8f1275a2e53b04561e41fc0_XL.jpg",
    imagen2: "https://carasucias.com.ar/media/k2/items/cache/89be03aca8f1275a2e53b04561e41fc0_XL.jpg",
    imagen3: "https://carasucias.com.ar/media/k2/items/cache/89be03aca8f1275a2e53b04561e41fc0_XL.jpg",
    imagen4: "https://carasucias.com.ar/media/k2/items/cache/89be03aca8f1275a2e53b04561e41fc0_XL.jpg",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
        servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Cesped natural",
      estacionamiento: true,
      vestuario: true,
      buffet: true
    }
  }
];

const canchas = [
  {
      id: "1",
      nombreCancha: "Club Leyenda",
      propietario: "Propietario",
      direccion: "Av. 18 de julio 1360",
      localidad: "Recoleta",
      tipoCancha: "Futbol",
      images:[]
  },
  {
      id: "2",
      nombreCancha: "El Campito",
      propietario: "Propietario",
      direccion: "Palmar 4531",
      localidad: "V. Lopez",
      tipoCancha: "Futbol",
      images:[]
  },
  {
      id: "3",
      nombreCancha: "Young Boys",
      propietario: "Propietario",
      direccion: "Av. Italia 1254",
      localidad:  "Caballito",
      tipoCancha: "Futbol",
      images:[]
  },
  {
      id: "4",
      nombreCancha: "Paddle Sacramento",
      propietario: "Propietario",
      direccion: "Av. Libertador 2354",
      localidad: "Las Cañitas",
      tipoCancha: "Padel",
      images:[]
  },
  {
      id: "5",
      nombreCancha: "Tandil Tenis",
      propietario: "Propietario",
      direccion: "Yaguaron 1212",
      localidad: "Tandil",
      tipoCancha: "Tenis",
      images:[]
  },
  {
      id: "6",
      nombreCancha: "Devoto Padel",
      propietario: "Propietario",
      direccion: "Yaguaron 1212",
      localidad: "Villa Devoto",
      tipoCancha: "Padel",
      images:[]
  },
  {
      id: "7",
      nombreCancha: "Padel Urquiza",
      propietario: "Propietario",
      direccion: "Yaguaron 1212",
      localidad: "Villa Urquiza",
      tipoCancha: "Padel",
      images:[]
  },
  {
      id: "8",
      nombreCancha: "Pilar Soccer",
      propietario: "Propietario",
      direccion: "Yaguaron 1212",
      localidad: "Pilar Country Las Leñas",
      tipoCancha: "Futbol",
      images:[]
  },
  {
      id: "9",
      nombreCancha: "Tenis Lanús",
      propietario: "Propietario",
      direccion: "Yaguaron 1212",
      localidad: "Lanús",
      tipoCancha: "Tenis",
      images:[]
  },
  {
      id: "10",
      nombreCancha: "Montevideo Padel",
      propietario: "Propietario",
      direccion: "Yaguaron 1212",
      localidad: "Carrasco",
      tipoCancha: "Padel",
      images:[]
  },
]
 
const localidades = [
  "Montevideo", "Buenos Aires",
  "San Isidro", "Piriapolis",
  "Localidad"
]

const usuarios = [
  {
    id: "1",
    apellido: "Recoba",
    nombre: "Gonzalo",
    emailUser: "gonzalo.recoba@gmail.com",
    pasword: "qwerty",
    passwordConfirmation: "qwerty"
  },
  {
    id: "2",
    apellido: "Daglio",
    nombre: "Gerardo",
    emailUser: "gerardo.daglio@gmail.com",
    pasword: "asdfgh",
    passwordConfirmation: "asdfgh"
  },
]

app.get('/fields', (req, res) => {
    res.json(fields);
});

app.get('/details', (req, res) => {
  res.json(details);
});
app.get('/canchas', (req, res) => {
  res.json(canchas);
});
app.get('/localidades', (req, res) => {
  res.json(localidades);
});

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});