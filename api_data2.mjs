import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors({
    origin: '*' 
}));

app.use(express.json());


const details = [
  {
    id: 1,
    nombre: "Club Leyenda",
    descripcionDetail: "Esta cancha de fútbol 5 y futsal profesional, con piso de cemento, es perfecta para entrenamientos y partidos, especialmente diseñada para niños pequeños que están comenzando en el fútbol. Ofrece un entorno seguro con protecciones de colchonetas en los laterales, minimizando el riesgo de lesiones, y cuenta con gradas cómodas para que los espectadores puedan disfrutar de los encuentros.",
    localidad: "Recoleta",
    deporte: "Futbol",
    precio: 15000,
    imagen1: "https://malaga.wiki/wp-content/uploads/medidas-del-campo-de-futbito.jpg",
    imagen2: "https://malaga.wiki/wp-content/uploads/medidas-del-campo-de-futbito.jpg",
    imagen3: "https://malaga.wiki/wp-content/uploads/medidas-del-campo-de-futbito.jpg",
    imagen4: "https://malaga.wiki/wp-content/uploads/medidas-del-campo-de-futbito.jpg",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
    servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Cemento",
      estacionamiento: true,
      vestuario: true,
      buffet: false
    }
  },
  {
    id: 2,
    nombre: "El campito",
    descripcionDetail: "Esta cancha de fútbol 11 cuenta con amplias gradas y excelente iluminación nocturna, proporcionando un entorno ideal para partidos a cualquier hora del día. Es perfecta para encuentros competitivos y recreativos, con un buffet cercano donde los jugadores y espectadores pueden relajarse y disfrutar después del partido. Un espacio bien equipado para disfrutar del fútbol en un ambiente cómodo y acogedor.",
    localidad: "V. Lopez",
    deporte: "Futbol",
    precio: 16000,
    imagen1: "https://i.blogs.es/e361ec/sandro-schuh-hgwy_yq1m0w-unsplash/1200_800.webp",
    imagen2: "https://i.blogs.es/e361ec/sandro-schuh-hgwy_yq1m0w-unsplash/1200_800.webp",
    imagen3: "https://i.blogs.es/e361ec/sandro-schuh-hgwy_yq1m0w-unsplash/1200_800.webp",
    imagen4: "https://i.blogs.es/e361ec/sandro-schuh-hgwy_yq1m0w-unsplash/1200_800.webp",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
    servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Cesped natural",
      estacionamiento: true,
      vestuario: false,
      buffet: true
    }
  },
  {
    id: 3,
    nombre: "Young Boys",    
    descripcionDetail: "Esta cancha de futsal, con un elegante piso de parquet, está equipada tanto para el fútbol sala como para el balonmano, ofreciendo un espacio versátil para múltiples deportes. Su superficie de parquet proporciona un excelente control del balón y un juego suave, ideal para futsal. Además, las delimitaciones de handball están claramente marcadas, permitiendo la práctica de este deporte con total precisión.",
    localidad: "Caballito",
    deporte: "Futsal",
    precio: 17000,
    imagen1: "https://cdn.pixabay.com/photo/2020/02/09/11/14/youth-football-4832719_1280.jpg",
    imagen2: "https://cdn.pixabay.com/photo/2020/02/09/11/14/youth-football-4832719_1280.jpg",
    imagen3: "https://cdn.pixabay.com/photo/2020/02/09/11/14/youth-football-4832719_1280.jpg",
    imagen4: "https://cdn.pixabay.com/photo/2020/02/09/11/14/youth-football-4832719_1280.jpg",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
    servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Parquet",
      estacionamiento: false,
      vestuario: true,
      buffet: true
    }
  },
  {
    id: 4,
    nombre: "Paddle Sacramento",    
    descripcionDetail: "Esta cancha de pádel de polvo de ladrillo cuenta con excelente iluminación y protección, ofreciendo un entorno ideal para jugar. Su superficie de polvo de ladrillo proporciona un control óptimo del balón y comodidad durante el juego, mientras que la iluminación y protección aseguran una experiencia segura y de alta calidad.",
    localidad: "Las Cañitas",
    deporte: "Padel",
    precio: 18000,
    imagen1: "https://www.mdzol.com/u/fotografias/m/2021/11/9/f848x477-1133785_1191588_3362.jpg",
    imagen2: "https://www.mdzol.com/u/fotografias/m/2021/11/9/f848x477-1133785_1191588_3362.jpg",
    imagen3: "https://www.mdzol.com/u/fotografias/m/2021/11/9/f848x477-1133785_1191588_3362.jpg",
    imagen4: "https://www.mdzol.com/u/fotografias/m/2021/11/9/f848x477-1133785_1191588_3362.jpg",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
    servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Polvo Ladrillo",
      estacionamiento: true,
      vestuario: true,
      buffet: false
    }
  },
  {
    id: 5,
    nombre: "Tandil tenis",   
    descripcionDetail: "Esta cancha de tenis de polvo de ladrillo está equipada con un enrejado alto que asegura un juego sin interrupciones y un sistema de riego a disposición para mantener la superficie en óptimas condiciones. Ideal para entrenamientos y partidos, ofrece un entorno bien cuidado y cómodo para los jugadores, con una superficie que proporciona un excelente control y confort durante el juego.",
    localidad: "Tandil",
    deporte: "Tenis",
    precio: 19000,
    imagen1: "https://img.asmedia.epimg.net/resizer/v2/4QLKYW6DGFNEJLVDCO7WN63TZU.jpg?auth=066a34dc34cd8b739df0711535e0d3498301ea33ced04ffb1db159919cc81118&width=1288&height=725&smart=true",
    imagen2: "https://img.asmedia.epimg.net/resizer/v2/4QLKYW6DGFNEJLVDCO7WN63TZU.jpg?auth=066a34dc34cd8b739df0711535e0d3498301ea33ced04ffb1db159919cc81118&width=1288&height=725&smart=true",
    imagen3: "https://img.asmedia.epimg.net/resizer/v2/4QLKYW6DGFNEJLVDCO7WN63TZU.jpg?auth=066a34dc34cd8b739df0711535e0d3498301ea33ced04ffb1db159919cc81118&width=1288&height=725&smart=true",
    imagen4: "https://img.asmedia.epimg.net/resizer/v2/4QLKYW6DGFNEJLVDCO7WN63TZU.jpg?auth=066a34dc34cd8b739df0711535e0d3498301ea33ced04ffb1db159919cc81118&width=1288&height=725&smart=true",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
    servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Polvo Ladrillo",
      estacionamiento: false,
      vestuario: false,
      buffet: false
    }
  },
  {
    id: 6,
    nombre: "Devoto Paddle",    
    descripcionDetail: "Esta cancha de pádel con césped sintético y arena es ideal para jugar en cualquier momento del día, gracias a su excelente iluminación nocturna. Ofrece un entorno cómodo y bien mantenido, con vestuarios limpios para los jugadores. Perfecta para entrenamientos y partidos, asegura una experiencia deportiva de alta calidad y comodidad.",
    localidad: "Villa Devoto",
    deporte: "Padel",
    precio: 15000,
    imagen1: "https://media.istockphoto.com/id/1363976548/es/foto/raqueta-de-p%C3%A1del-y-pelotas-en-la-pista-de-p%C3%A1del-azul.webp?b=1&s=170667a&w=0&k=20&c=OuTiOyAVbVz1lgq4FBu5_mcL4d-Uz1Ml_3pTkDQMI54=",
    imagen2: "https://media.istockphoto.com/id/1363976548/es/foto/raqueta-de-p%C3%A1del-y-pelotas-en-la-pista-de-p%C3%A1del-azul.webp?b=1&s=170667a&w=0&k=20&c=OuTiOyAVbVz1lgq4FBu5_mcL4d-Uz1Ml_3pTkDQMI54=",
    imagen3: "https://media.istockphoto.com/id/1363976548/es/foto/raqueta-de-p%C3%A1del-y-pelotas-en-la-pista-de-p%C3%A1del-azul.webp?b=1&s=170667a&w=0&k=20&c=OuTiOyAVbVz1lgq4FBu5_mcL4d-Uz1Ml_3pTkDQMI54=",
    imagen4: "https://media.istockphoto.com/id/1363976548/es/foto/raqueta-de-p%C3%A1del-y-pelotas-en-la-pista-de-p%C3%A1del-azul.webp?b=1&s=170667a&w=0&k=20&c=OuTiOyAVbVz1lgq4FBu5_mcL4d-Uz1Ml_3pTkDQMI54=",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
        servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Sintetico Arena",
      estacionamiento: true,
      vestuario: true,
      buffet: true
    }
  },
  {
    id: 7,
    nombre: "Padle Urquiza",    
    descripcionDetail: "Esta cancha de pádel con superficie de césped sintético y arena ofrece un entorno ideal para jugar, complementado con un gimnasio a disposición para entrenamiento y relajación. Con una superficie bien mantenida y el gimnasio disponible, proporciona una experiencia completa y cómoda para jugadores que buscan mejorar su rendimiento o recuperarse después de los partidos.",
    localidad: "Villa Urquiza",
    deporte: "Padel",
    precio: 16000,
    imagen1: "https://www.ellitoral.com/images/2024/01/03/QdXbUWd7m_1300x655__1.jpg",
    imagen2: "https://www.ellitoral.com/images/2024/01/03/QdXbUWd7m_1300x655__1.jpg",
    imagen3: "https://www.ellitoral.com/images/2024/01/03/QdXbUWd7m_1300x655__1.jpg",
    imagen4: "https://www.ellitoral.com/images/2024/01/03/QdXbUWd7m_1300x655__1.jpg",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
        servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Sinteitco Arena",
      estacionamiento: true,
      vestuario: true,
      buffet: true
    }
  },
  {
    id: 8,
    nombre: "Pilar Soccer",    
    descripcionDetail: "Esta cancha de fútbol 7/11, diseñada para competencias interclubes, ofrece una superficie bien cuidada ideal para partidos de alto nivel de cesped sintetico. Con gradas para espectadores y un entorno acondicionado para la competencia, proporciona un espacio profesional y cómodo para que los equipos se enfrenten en condiciones óptimas.",
    localidad: "Pilar Country Las Leñas",
    deporte: "Futbol",
    precio: 17000,
    imagen1: "https://elnortecd.com.ar/wp-content/uploads/2024/01/Futbol-11-46.webp",
    imagen2: "https://elnortecd.com.ar/wp-content/uploads/2024/01/Futbol-11-46.webp",
    imagen3: "https://elnortecd.com.ar/wp-content/uploads/2024/01/Futbol-11-46.webp",
    imagen4: "https://elnortecd.com.ar/wp-content/uploads/2024/01/Futbol-11-46.webp",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
        servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Cesped Sintetico",
      estacionamiento: true,
      vestuario: true,
      buffet: true
    }
  },
  {
    id: 9,
    nombre: "Tenis Lanus",    
    descripcionDetail: "Esta cancha de tenis de polvo de ladrillo, con un amplio espacio, es perfecta tanto para partidos como para entrenamientos intensivos. Su superficie de polvo de ladrillo bien mantenida proporciona un excelente control del balón y una experiencia de juego profesional. El amplio espacio alrededor de la cancha asegura comodidad y libertad de movimiento.",
    precio: 18000,
    localidad: "Lanús",
    deporte: "Tenis",
    imagen1: "https://clublanus.com/wp-content/uploads/2023/06/Tenis-Canchas.jpeg",
    imagen2: "https://clublanus.com/wp-content/uploads/2023/06/Tenis-Canchas.jpeg",
    imagen3: "https://clublanus.com/wp-content/uploads/2023/06/Tenis-Canchas.jpeg",
    imagen4: "https://clublanus.com/wp-content/uploads/2023/06/Tenis-Canchas.jpeg",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
    servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Polvo Ladrillo",
      estacionamiento: true,
      vestuario: true,
      buffet: true
    }
  },
  {
    id: 10,
    nombre: "Montevideo Padle",    
    descripcionDetail: "Esta cancha de pádel con césped sintético y arena, ubicada en un galpón, garantiza que el juego pueda continuar sin importar las condiciones climáticas externas. Su superficie bien mantenida ofrece un excelente control del balón y una experiencia de juego óptima. El entorno cubierto proporciona comodidad y protección, asegurando que los jugadores disfruten de sus partidos en cualquier momento del año.",
    localidad: "Carrasco",
    deporte: "Padel",
    precio: 19000,
    imagen1: "https://carasucias.com.ar/media/k2/items/cache/89be03aca8f1275a2e53b04561e41fc0_XL.jpg",
    imagen2: "https://carasucias.com.ar/media/k2/items/cache/89be03aca8f1275a2e53b04561e41fc0_XL.jpg",
    imagen3: "https://carasucias.com.ar/media/k2/items/cache/89be03aca8f1275a2e53b04561e41fc0_XL.jpg",
    imagen4: "https://carasucias.com.ar/media/k2/items/cache/89be03aca8f1275a2e53b04561e41fc0_XL.jpg",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.12685750806!2d-58.416942433859774!3d-34.584790637453416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca99c609fc2f%3A0x392ca99351808a75!2sRecoleta%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1723146268638!5m2!1ses!2sar",
      servicios: {
      horario: ["Lun. a Vier.", "10:00 a 00:00"],
      suelo: "Sintetico Arena",
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

const reservas = [
  {
    "id": 1,
    "date" : "22/10/2024",
    "timeStart" : "12:30",
    "timeEnd": "13:30",
    "userId" : 1,
    "pitchId": 1,
    "fullPrice" : 12000
  },
  {
    "id": 2,
    "date" : "23/10/2024",
    "timeStart" : "10:00",
    "timeEnd": "11:00",
    "userId" : 2,
    "pitchId": 5,
    "fullPrice" : 13000
  },
  {
    "id": 3,
    "date" : "24/10/2024",
    "timeStart" : "14:30",
    "timeEnd": "15:30",
    "userId" : 2,
    "pitchId": 4,
    "fullPrice" : 12500
  },
  {
    "id": 4,
    "date" : "25/10/2024",
    "timeStart" : "09:00",
    "timeEnd": "10:00",
    "userId" : 2,
    "pitchId": 2,
    "fullPrice" : 11500
  },
  {
    "id": 5,
    "date" : "26/10/2024",
    "timeStart" : "16:00",
    "timeEnd": "17:00",
    "userId" : 1,
    "pitchId": 3,
    "fullPrice" : 14000
  }
];





app.get('/details', (req, res) => {
  res.json(details);
});
app.get('/canchas', (req, res) => {
  res.json(canchas);
});
app.get('/localidades', (req, res) => {
  res.json(localidades);
});

app.get('/details/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const detail = details.find(d => d.id === id);
  if (detail) {
    res.json(detail);
  } else {
    res.status(404).json({ message: 'Detail not found' });
  }
});

app.get('/search', (req, res) => {
  const { localidad, deporte } = req.query;
  
  let filteredDetails = details;

  if (localidad) {
      filteredDetails = filteredDetails.filter(detail => 
          detail.localidad.toLowerCase().includes(localidad.toLowerCase())
      );
  }

  if (deporte) { 
      filteredDetails = filteredDetails.filter(detail => 
          detail.deporte.toLowerCase().includes(deporte.toLowerCase())
      );
  }

  if (filteredDetails.length === 0) {
      return res.sendStatus(404); 
  }

  res.json(filteredDetails);
});



const verificarConflicto = (nuevaReserva) => {
  // Convertir las horas en minutos para facilitar la comparación
  const convertirA_Minutos = (hora) => {
    const [horas, minutos] = hora.split(':').map(Number);
    return horas * 60 + minutos;
  };

  const nuevaReservaInicio = convertirA_Minutos(nuevaReserva.timeStart);
  const nuevaReservaFin = convertirA_Minutos(nuevaReserva.timeEnd);

  return reservas.some(reserva => {
    if (reserva.date === nuevaReserva.date && reserva.pitchId === nuevaReserva.pitchId) {
      const reservaInicio = convertirA_Minutos(reserva.timeStart);
      const reservaFin = convertirA_Minutos(reserva.timeEnd);

      return (
        (nuevaReservaInicio < reservaFin && nuevaReservaFin > reservaInicio) ||
        (nuevaReservaFin > reservaInicio && nuevaReservaInicio < reservaFin)
      );
    }
    return false;
  });
};

// Endpoint para crear nuevas reservas
app.post('/reservas', (req, res) => {
  const nuevaReserva = req.body; // Obtenemos el objeto de reserva desde el cuerpo de la petición
  
  // Verificamos si hay un conflicto con la nueva reserva
  if (verificarConflicto(nuevaReserva)) {
      return res.status(400).json({ message: 'Ya existe una reserva en esta fecha, hora y pitch.' }); // Respondemos con un error si hay conflicto
  }

  nuevaReserva.id = reservas.length + 1; // Asignar un nuevo id para la reserva
  reservas.push(nuevaReserva); // Lo agregamos al array de reservas
  res.status(201).json({ message: 'Reserva creada exitosamente', reserva: nuevaReserva }); // Respondemos con un mensaje y la reserva creada
});


app.get('/allreservas', (req, res)=>{
  res.json(reservas)
});



app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});