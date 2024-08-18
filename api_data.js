import express from 'express';
const app = express();
const port = 3000;

const cards = [
  {
    id: "01",
    nombre: "Club Leyenda",
    material: "plastificado",
    ubicacion: "Recoleta",
    beneficios: "ducha escosesa",
    descripcion: "Imperdible y con canchas de primer nivel para jugar futbol sala profesional",
    imagen: "https://malaga.wiki/wp-content/uploads/medidas-del-campo-de-futbito.jpg"
  },
  {
    id: "02",
    nombre: "El campito",
    material: "césped sintetico",
    ubicacion: "V. Lopez",
    beneficios: "parking free access",
    descripcion: "Futbol 11 nivel interclub para competir en equipos",
    imagen: "https://i.blogs.es/e361ec/sandro-schuh-hgwy_yq1m0w-unsplash/1200_800.webp"
  },
  {
    id: "03",
    nombre: "Young Boys",
    material: "plastificado",
    ubicacion: "Caballito",
    beneficios: "entrenadores baby",
    descripcion: "Futbol de sala amateur para chicos de 6 a 15.",
    imagen: "https://cdn.pixabay.com/photo/2020/02/09/11/14/youth-football-4832719_1280.jpg"
  },
  {
    id: "04",
    nombre: "Paddle Sacramento",
    material: "cemento",
    ubicacion: "Las Cañitas",
    beneficios: "bar",
    descripcion: "El mejor lugar para disfrutar con tus amigos, contamos con muy buenas canchas.",
    imagen: "https://www.mdzol.com/u/fotografias/m/2021/11/9/f848x477-1133785_1191588_3362.jpg"
  },
  {
    id: "05",
    nombre: "Tandil Tenis",
    material: "polvo de ladrillo y césped",
    ubicacion: "Tandil",
    beneficios: "cabañas",
    descripcion: "5 canchas de polvo de ladrillo y única en el pais con dos canchas de césped.",
    imagen: "https://img.asmedia.epimg.net/resizer/v2/4QLKYW6DGFNEJLVDCO7WN63TZU.jpg?auth=066a34dc34cd8b739df0711535e0d3498301ea33ced04ffb1db159919cc81118&width=1288&height=725&smart=true"
  },
  {
    id: "06",
    nombre: "Devoto Padel",
    material: "variado",
    ubicacion: "Villa Devoto",
    beneficios: "bar",
    descripcion: "Ubicado en zona centrica de Devoto, cerca a Plaza Arenales. 10 canchas.",
    imagen: "https://media.istockphoto.com/id/1363976548/es/foto/raqueta-de-p%C3%A1del-y-pelotas-en-la-pista-de-p%C3%A1del-azul.webp?b=1&s=170667a&w=0&k=20&c=OuTiOyAVbVz1lgq4FBu5_mcL4d-Uz1Ml_3pTkDQMI54="
  },
  {
    id: "07",
    nombre: "Padel Urquiza",
    material: "hormigon y plastificado",
    ubicacion: "Villa Urquiza",
    beneficios: "gym",
    descripcion: "Exclusivo gym con canchas de paddle.",
    imagen: "https://www.ellitoral.com/images/2024/01/03/QdXbUWd7m_1300x655__1.jpg"
  },
  {
    id: "08",
    nombre: "Pilar Soccer",
    material: "césped fútbol 11",
    ubicacion: "Pilar Country Las Leñas",
    beneficios: "Golf Club",
    descripcion: "En el corazón del Country Las Leñas tenemos el mejor torneo del país.",
    imagen: "https://elnortecd.com.ar/wp-content/uploads/2024/01/Futbol-11-46.webp"
  },
  {
    id: "09",
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
        id: "01",
        nombre: "Club Leyenda",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        precio: 15000,
        servicios: [
          {
            nombre: "ducha escosesa"
          }, 
          {
            nombre: "estacionamiento"
          }, 
          {
            nombre: "buffet"
          },
          {
            nombre: "horarios",
            detalle: "Lunes a Viernes - 10hs a 00hs"
          },
          {
            nombre: "material",
            detalle: "plastificado"
          }
        ],
        imagenes: [
          {
            url: "https://malaga.wiki/wp-content/uploads/medidas-del-campo-de-futbito.jpg"
          },
          {
            url: "https://malaga.wiki/wp-content/uploads/medidas-del-campo-de-futbito.jpg"
          },
          {
            url: "https://malaga.wiki/wp-content/uploads/medidas-del-campo-de-futbito.jpg"
          },
          {
            url: "https://malaga.wiki/wp-content/uploads/medidas-del-campo-de-futbito.jpg"
          }
        ]
    },
    {
        id: "02",
        nombre: "El campito",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        precio: 100000,
        servicios: [
          {
            nombre: "parking free access"
          }, 
          {
            nombre: "duchas/vestuarios"
          }, 
          {
            nombre: "buffet"
          },
          {
            nombre: "horarios",
            detalle: "Lunes a Viernes - 10hs a 00hs"
          },
          {
            nombre: "material",
            detalle: "césped sintetico"
          }
        ],
        imagenes: [
          {
            url: "https://i.blogs.es/e361ec/sandro-schuh-hgwy_yq1m0w-unsplash/1200_800.webp"
          },
          {
            url: "https://i.blogs.es/e361ec/sandro-schuh-hgwy_yq1m0w-unsplash/1200_800.webp"
          },
          {
            url: "https://i.blogs.es/e361ec/sandro-schuh-hgwy_yq1m0w-unsplash/1200_800.webp"
          },
          {
            url: "https://i.blogs.es/e361ec/sandro-schuh-hgwy_yq1m0w-unsplash/1200_800.webp"
          }
        ]
    },
    {
        id: "03",
        nombre: "Young Boys" ,
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        precio: 10000,
        servicios: [
          {
            nombre: "entrenadores baby"
          }, 
          {
            nombre: "duchas/vestuarios"
          }, 
          {
            nombre: "buffet"
          },
          {
            nombre: "horarios",
            detalle: "Lunes a Viernes - 10hs a 00hs"
          },
          {
            nombre: "material",
            detalle: "plastificado"
          }
        ],
        imagenes: [
          {
            url: "https://cdn.pixabay.com/photo/2020/02/09/11/14/youth-football-4832719_1280.jpg"
          },
          {
            url: "https://cdn.pixabay.com/photo/2020/02/09/11/14/youth-football-4832719_1280.jpg"
          },
          {
            url: "https://cdn.pixabay.com/photo/2020/02/09/11/14/youth-football-4832719_1280.jpg"
          },
          {
            url: "https://cdn.pixabay.com/photo/2020/02/09/11/14/youth-football-4832719_1280.jpg"
          },
        ]
    },
    {
        id: "04",
        nombre: "Paddle Sacramento",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        precio: 120000,
        servicios: [
          {
            nombre: "bar"
          }, 
          {
            nombre: "duchas/vestuarios"
          }, 
          {
            nombre: "buffet"
          },
          {
            nombre: "horarios",
            detalle: "Lunes a Viernes - 10hs a 00hs"
          },
          {
            nombre: "material",
            detalle: "cemento"
          }
        ],
        imagenes: [
          {
            url: "https://www.mdzol.com/u/fotografias/m/2021/11/9/f848x477-1133785_1191588_3362.jpg"
          },
          {
            url: "https://www.mdzol.com/u/fotografias/m/2021/11/9/f848x477-1133785_1191588_3362.jpg"
          },
          {
            url: "https://www.mdzol.com/u/fotografias/m/2021/11/9/f848x477-1133785_1191588_3362.jpg"
          },
          {
            url: "https://www.mdzol.com/u/fotografias/m/2021/11/9/f848x477-1133785_1191588_3362.jpg"
          }
        ]
    },
    {
        id: "05",
        nombre: "Tandil Tenis",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        precio: 50000,
        servicios: [
          {
            nombre: "cabañas"
          }, 
          {
            nombre: "duchas/vestuarios"
          }, 
          {
            nombre: "buffet"
          },
          {
            nombre: "horarios",
            detalle: "Lunes a Viernes - 10hs a 00hs"
          },
          {
            nombre: "material",
            detalle: "polvo de ladrillo y césped"
          }
        ],
        imagenes: [
          {
            url: "https://img.asmedia.epimg.net/resizer/v2/4QLKYW6DGFNEJLVDCO7WN63TZU.jpg?auth=066a34dc34cd8b739df0711535e0d3498301ea33ced04ffb1db159919cc81118&width=1288&height=725&smart=true"
          },
          {
            url: "https://img.asmedia.epimg.net/resizer/v2/4QLKYW6DGFNEJLVDCO7WN63TZU.jpg?auth=066a34dc34cd8b739df0711535e0d3498301ea33ced04ffb1db159919cc81118&width=1288&height=725&smart=true"
          },
          {
            url: "https://img.asmedia.epimg.net/resizer/v2/4QLKYW6DGFNEJLVDCO7WN63TZU.jpg?auth=066a34dc34cd8b739df0711535e0d3498301ea33ced04ffb1db159919cc81118&width=1288&height=725&smart=true"
          },
          {
            url: "https://img.asmedia.epimg.net/resizer/v2/4QLKYW6DGFNEJLVDCO7WN63TZU.jpg?auth=066a34dc34cd8b739df0711535e0d3498301ea33ced04ffb1db159919cc81118&width=1288&height=725&smart=true"
          }
        ]
    },
    {
        id: "06",
        nombre: "Devoto Padel",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        precio: 150000,
        servicios: [
          {
            nombre: "bar"
          }, 
          {
            nombre: "duchas/vestuarios"
          }, 
          {
            nombre: "estacionamiento"
          },
          {
            nombre: "horarios",
            detalle: "Lunes a Viernes - 10hs a 00hs"
          },
          {
            nombre: "material",
            detalle: "variado"
          }
        ],
        imagenes: [
          {
            url:  "https://media.istockphoto.com/id/1363976548/es/foto/raqueta-de-p%C3%A1del-y-pelotas-en-la-pista-de-p%C3%A1del-azul.webp?b=1&s=170667a&w=0&k=20&c=OuTiOyAVbVz1lgq4FBu5_mcL4d-Uz1Ml_3pTkDQMI54="
          },
          {
            url:  "https://media.istockphoto.com/id/1363976548/es/foto/raqueta-de-p%C3%A1del-y-pelotas-en-la-pista-de-p%C3%A1del-azul.webp?b=1&s=170667a&w=0&k=20&c=OuTiOyAVbVz1lgq4FBu5_mcL4d-Uz1Ml_3pTkDQMI54="
          },
          {
            url:  "https://media.istockphoto.com/id/1363976548/es/foto/raqueta-de-p%C3%A1del-y-pelotas-en-la-pista-de-p%C3%A1del-azul.webp?b=1&s=170667a&w=0&k=20&c=OuTiOyAVbVz1lgq4FBu5_mcL4d-Uz1Ml_3pTkDQMI54="
          },
          {
            url:  "https://media.istockphoto.com/id/1363976548/es/foto/raqueta-de-p%C3%A1del-y-pelotas-en-la-pista-de-p%C3%A1del-azul.webp?b=1&s=170667a&w=0&k=20&c=OuTiOyAVbVz1lgq4FBu5_mcL4d-Uz1Ml_3pTkDQMI54="
          }
        ]
    },
    {
        id: "07",
        nombre: "Padel Urquiza" ,
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        precio: 150000,
        servicios: [
          {
            nombre: "gym"
          }, 
          {
            nombre: "duchas/vestuarios"
          }, 
          {
            nombre: "buffet"
          },
          {
            nombre: "horarios",
            detalle: "Lunes a Viernes - 10hs a 00hs"
          },
          {
            nombre: "material",
            detalle: "hormigón y plastificado"
          }
        ],
        imagenes: [
          {
            url: "https://www.ellitoral.com/images/2024/01/03/QdXbUWd7m_1300x655__1.jpg"
          },
          {
            url: "https://www.ellitoral.com/images/2024/01/03/QdXbUWd7m_1300x655__1.jpg"
          },
          {
            url: "https://www.ellitoral.com/images/2024/01/03/QdXbUWd7m_1300x655__1.jpg"
          },
          {
            url: "https://www.ellitoral.com/images/2024/01/03/QdXbUWd7m_1300x655__1.jpg"
          }
        ]
    },
    {
        id: "08",
        nombre: "Pilar Soccer",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        precio: 15000,
        servicios: [
          {
            nombre: "Golf Club"
          }, 
          {
            nombre: "duchas/vestuarios"
          }, 
          {
            nombre: "buffet"
          },
          {
            nombre: "horarios",
            detalle: "Lunes a Viernes - 10hs a 00hs"
          },
          {
            nombre: "material",
            detalle: "césped fútbol 11"
          }
        ],
        imagenes: [
          {
            url: "https://elnortecd.com.ar/wp-content/uploads/2024/01/Futbol-11-46.webp"
          },
          {
            url: "https://elnortecd.com.ar/wp-content/uploads/2024/01/Futbol-11-46.webp"
          },
          {
            url: "https://elnortecd.com.ar/wp-content/uploads/2024/01/Futbol-11-46.webp"
          },
          {
            url: "https://elnortecd.com.ar/wp-content/uploads/2024/01/Futbol-11-46.webp"
          }
        ]
    },
    {
        id: "09",
        nombre: "Tenis Lanús",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        precio: 100000,
        servicios: [
          {
            nombre: "parrilla y salón de eventos"
          }, 
          {
            nombre: "duchas/vestuarios"
          }, 
          {
            nombre: "buffet"
          },
          {
            nombre: "horarios",
            detalle: "Lunes a Viernes - 10hs a 00hs"
          },
          {
            nombre: "material",
            detalle: "polvo de ladrillo"
          }
        ],
        imagenes: [
          {
            url: "https://clublanus.com/wp-content/uploads/2023/06/Tenis-Canchas.jpeg"
          },
          {
            url: "https://clublanus.com/wp-content/uploads/2023/06/Tenis-Canchas.jpeg"
          },
          {
            url: "https://clublanus.com/wp-content/uploads/2023/06/Tenis-Canchas.jpeg"
          },
          {
            url: "https://clublanus.com/wp-content/uploads/2023/06/Tenis-Canchas.jpeg"
          }
        ]
    },
    {
        id: "10",
        nombre: "Montevideo Padel",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        precio: 50,
        servicios: [
          {
            nombre: "Rugby Club"
          }, 
          {
            nombre: "duchas/vestuarios"
          }, 
          {
            nombre: "buffet"
          },
          {
            nombre: "horarios",
            detalle: "Lunes a Viernes - 10hs a 00hs"
          },
          {
            nombre: "material",
            detalle: "hormigón última generación"
          }
        ],
        imagenes: [
          {
            url: "https://carasucias.com.ar/media/k2/items/cache/89be03aca8f1275a2e53b04561e41fc0_XL.jpg"
          },
          {
            url: "https://carasucias.com.ar/media/k2/items/cache/89be03aca8f1275a2e53b04561e41fc0_XL.jpg"
          },
          {
            url: "https://carasucias.com.ar/media/k2/items/cache/89be03aca8f1275a2e53b04561e41fc0_XL.jpg"
          },
          {
            url: "https://carasucias.com.ar/media/k2/items/cache/89be03aca8f1275a2e53b04561e41fc0_XL.jpg"
          }
        ]
    }
]


app.get('/cards', (req, res) => {
    res.json(cards);
});

app.get('/details', (req, res) => {
    res.json(details)
})

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});