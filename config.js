var config = {
  logo: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/path19-9.png?raw=true",
  style: 'mapbox://styles/mauberm/cmf8wt3x4004d01s556hvg1xu',
  accessToken: "pk.eyJ1IjoibWF1YmVybSIsImEiOiJjbDkwandiMXAwdDJkM3ZvNjhyNGtyYmtvIn0.f8f_PAURro1hU-sh_xnAuA",
  showMarkers: false,
  theme: "cf",
  alignment: "left",
  title: "MIRALOMA",
  subtitle: "",
  byline: "TENTER",
  
  footer: 'WEBMAP - Developed by <div style="text-align:center; margin-top:10px;"><img src="https://github.com/mauebrm/AGUASCALIENTES/blob/main/path19-9.png?raw=true" alt="Logo TENTER" style="height:30px;"></div>',

  chapters: [
    {
      id: "chap-1",
      title: "",
      image: "https://github.com/mauebrm/MIRALOMA/",
      description: "",
      location: {
        center: [-99.294497, 19.55845],
        zoom: 4,
        pitch: 0,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "R2", opacity: 0 },
        { layer: "R1", opacity: 0 },
        { layer: "PARAD", opacity: 0 },
        { layer: "IC", opacity: 0 },
        { layer: "CORR", opacity: 0 },
        { layer: "AV", opacity: 0 },
        { layer: "SEC", opacity: 0 },
        { layer: "uta", opacity: 0 },
        { layer: "CORR", opacity: 0 },
        { layer: "CORR1", opacity: 0 },
        { layer: "oficinas-cg7ao1", opacity: 0 },
        { layer: "map-7-00pvbd", opacity: 0 },
        { layer: "dp-com", opacity: 0 },
        { layer: "sombras-dp", opacity: 0 },
        { layer: "distritopy", opacity: 0 },
        { layer: "dp-completo-84d3yb copy 1", opacity: 0 }
      ],
      onChapterExit: []
    },
    {
      id: "chap-2",
      title: "CIUDAD DE MEXICO",
      image: "https://github.com/mauebrm/MIRALOMA/",
      description: "",
      location: {
        center: [-99.294497, 19.55845],
        zoom: 7.9,
        pitch: 0,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "R1", opacity: 0 }
      ],
      onChapterExit: []
    },
    {
      id: "CHAP-3",
      title: "ZONA NORTE",
      image: "https://github.com/mauebrm/MIRALOMA/",
      description: "",
      location: {
        center: [-99.294497, 19.55845],
        zoom: 10.5,
        pitch: 0,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "rio", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "rio", opacity: 0.4 }
      ]
    },
    {
      id: "chap-4.9",
      title: "AVENIDAS",
      image: "https://github.com/mauebrm/MIRALOMA/",
      description: "",
      location: {
        center: [-99.294497, 19.55845],
        zoom: 12.6,
        pitch: 0,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "R1", opacity: 0.8 }
      ],
      onChapterExit: []
    },
    {
      id: "chap-4.8",
      title: "CALLES",
      image: "https://github.com/mauebrm/MIRALOMA/",
      description: "",
      location: {
        center: [-99.294497, 19.55845],
        zoom: 12.3,
        pitch: 0,
        bearing: 0,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "R2", opacity: 0.8 }
      ],
      onChapterExit: []
    },
        {
      id: "chap-4.8",
      title: "INFRAESTRUCUTRA URBANA",
      image: "https://github.com/mauebrm/MIRALOMA/",
      description: "",
      location: {
        center: [-99.294497, 19.55845],
        zoom: 11.8,
        pitch: 0,
        bearing: 0,
        duration: 3000
      },
      onChapterEnter: [
        { layer: "CORR1", opacity: 0.8 }
      ],
      onChapterExit: []
    },
    {
      id: "chap-4",
      title: "CORREDOR",
      image: "",
      description: "pitch",
      location: {
        center: [-99.294497, 19.55845],
        zoom: 12,
        pitch: 0,
        bearing: 180,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "PARAD", opacity: 0.8 },
                { layer: "CORR", opacity: 0.8 }
      ],
      onChapterExit: []
    },
    {
      id: "chap-6",
      title: "AVENIDAS PRICIPALES",
      image: "",
      description: "",
      location: {
        center: [-99.294497, 19.55845],
        zoom: 12.3,
        pitch: 52,
        bearing: 180,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "AV", opacity: 0.8 },
        { layer: "aero", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "camino-aero", opacity: 0 },
        { layer: "caminos", opacity: 1 },
        { layer: "aero", opacity: 0 }
      ]
    },
        {
      id: "chap-6.1",
      title: "MIRALOMA",
      image: "",
      description: "RESERVA NATURAL DE LOS VENADOS",
      location: {
        center: [-99.294497, 19.55845],
        zoom: 12.5,
        pitch: 52,
        bearing: 180,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "SEC", opacity: 0.6 },
        { layer: "aero", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "camino-aero", opacity: 0 },
        { layer: "caminos", opacity: 1 },
        { layer: "aero", opacity: 0 }
      ]
    },
    {
      id: "chap-6.4",
      title: "MIRALOMA",
      image: "",
      description: "",
      location: {
        center: [-99.294497, 19.55845],
        zoom: 15,
        pitch: 45,
        bearing: 180,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "uta", opacity: 0.9 }
      ],
      onChapterExit: []
    },
    {
      id: "IC2",
      title: "MIRALOMA",
      image: "",
      description: "TORRE RESIDENCIAL CON VISTA A LA RESERVA",
      location: {
        center: [-99.294497, 19.55845],
        zoom: 15.5,
        pitch: 65,
        bearing: 180,
        duration: 8000
      },
      onChapterEnter: [
        { layer: "IC", opacity: 1 }
      ],
      onChapterExit: []
    },
    {
      id: "chap-8",
      title: "MIRALOMA",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-07%20165917.png?raw=true",
      description: "Where experiences converge.",
      location: {
        center: [-99.294497, 19.55845],
        zoom: 16,
        pitch: 35,
        bearing: 180,
        duration: 6000
      },
      onChapterEnter: [
        { layer: "EXP", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "EXP", opacity: 0 }
      ]
    },
    {
      id: "chap-9",
      title: "MIRALOMA",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-06%20202844.png?raw=true",
      description: "50,000 m² of commercial areas.",
      location: {
        center: [-99.294497, 19.55845], // fixed
        zoom: 17,
        pitch: 50,
        bearing: 120,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "Ameba",
      title: "MIRALOMA",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-06%20202859.png?raw=true",
      description: "First residential buildings - 60 to 433 m2 - 100% sold",
      location: {
        center: [-99.294497, 19.55845],
        zoom: 17.56,
        pitch: 69.50,
        bearing: 102.14,
        duration: 8000
      },
      onChapterEnter: [
        { layer: "R1", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "R1", opacity: 0 }
      ]
    },
        {
      id: "X",
      title: "MIRALOMA",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-06%20202913.png?raw=true",
      description: "First residential buildings - 60 to 433 m2 - 100% sold",
      location: {
        center:[-99.294497, 19.55845],
        zoom: 17.56,
        pitch: 69.50,
        bearing: 102.14,
        duration: 5000
      },
      onChapterEnter: [
        { layer: "R1", opacity: 1 }
      ],
      onChapterExit: [
        { layer: "R1", opacity: 0 }
      ]
    },
    {
      id: "chap-11",
      title: "MIRALOMA",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/nissan-mexicana-logra-su-produccion-de-dos-millones-de-unidades-utilizando-energias-renovables-9245.jpeg?raw=true",
      description: "Residential tower R2 detail.",
      location: {
        center: [-99.294497, 19.55845],
        zoom: 17.71,
        pitch: 63.5,
        bearing: 99.6,
        duration: 5000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "chap-12",
      title: "MIRALOMA",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-07%20170018.png?raw=true",
      description: ".",
      location: {
        center: [-99.294497, 19.55845],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 5000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "chap-13",
      title: "MIRALOMA",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-07%20170024.png?raw=true",
      description: "R4 BULNESIA - 15% SOLD",
      location: {
        center:[-99.294497, 19.55845],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 5000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "chap-14",
      title: "MIRALOMA",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-06%20202949.png?raw=true",
      description: "R5 - CURRENTLY ON DESIGN - 120 Apartaments",
      location: {
        center: [-99.294497, 19.55845],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 5000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
        {
      id: "chap-15",
      title: "MIRALOMA",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-06%20203006.png?raw=true",
      description: "R5 - CURRENTLY ON DESIGN - 120 Apartaments",
      location: {
        center: [-99.294497, 19.55845],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 5000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
        {
      id: "chap-16",
      title: "MIRALOMA",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-07%20170042.png?raw=true",
      description: "R5 - CURRENTLY ON DESIGN - 120 Apartaments",
      location: {
        center: [-99.294497, 19.55845],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 5000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
        {
      id: "chap-17",
      title: "MIRALOMA",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-06%20203028.png?raw=true",
      description: "R5 - CURRENTLY ON DESIGN - 120 Apartaments",
      location: {
        center: [-99.294497, 19.55845],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
        {
      id: "chap-18",
      title: "MIRALOMA",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-06%20203044.png?raw=true",
      description: "R5 - CURRENTLY ON DESIGN - 120 Apartaments",
      location: {
        center: [-99.294497, 19.55845],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
            {
      id: "chap-19",
      title: "MIRALOMA",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-06%20203102.png?raw=true",
      description: "R5 - CURRENTLY ON DESIGN - 120 Apartaments",
      location: {
        center: [-99.294497, 19.55845],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
            {
      id: "chap-20",
      title: "MIRALOMA",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-07%20170042.png?raw=true",
      description: "R5 - CURRENTLY ON DESIGN - 120 Apartaments",
      location: {
        center: [-99.294497, 19.55845],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
            {
      id: "chap-21",
      title: "MIRALOMA",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-07%20170042.png?raw=true",
      description: "R5 - CURRENTLY ON DESIGN - 120 Apartaments",
      location: {
        center: [-99.294497, 19.55845],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
            {
      id: "chap-22",
      title: "MIRALOMA",
      image: "https://github.com/mauebrm/AGUASCALIENTES/blob/main/Screenshot%202025-09-07%20170042.png?raw=true",
      description: "R5 - CURRENTLY ON DESIGN - 120 Apartaments",
      location: {
        center: [-99.294497, 19.55845],
       zoom: 16.82,
        pitch: 71.6,
        bearing: -25.2,
        duration: 8000
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    // ... Remaining chapters unchanged
  ]
};
