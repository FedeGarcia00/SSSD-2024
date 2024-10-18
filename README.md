# TP Integrador: Desarrollo de un sistema distribuido simple

Desarrollo de un sistema distribuido con el objetivo de simular un sistema de monitoreo y control de ganado, ofreciendo una solución moderna para los dueños de recursos ganaderos que reemplace los métodos de inspección visual, existentes en muchos negocios rurales.


## 🫂 Integrantes

- Federico Garcia ([@FedeGarcia00](https://www.github.com/FedeGarcia00))
- Aureliano Vega Imbalde ([@aureeliano](https://www.github.com/aureeliano))
- Juan Bautista Orte ([@BauchoOrte](https://www.github.com/BauchoOrte))
- Juan Martin Vila ([@martinvila](https://www.github.com/martinvila))

## 🗒️ Instrucciones

Requisitos:
- Node.js v20 o superior instalado.

1) Ir al directorio de la API, ("cd api_vjs")
2) Ejecutar npm install para instalar las dependencias en el package.json
3) Ejecutar npm run start para correr el script "start" del package.json
4) Ir al directorio del cliente, ("cd cliente")
5) Ejecutar npm install para instalar las dependencias en el package.json
6) Ejecutar npm run start para correr el script "start" del package.json


## Estructura
```
SSDD-2024
├─ api_vjs
│  ├─ controllers
│  │  └─ VacasController.js
│  ├─ db
│  │  └─ vacas.json
│  ├─ index.js
│  ├─ package-lock.json
│  ├─ package.json
│  └─ repositories
│     └─ VacasRepository.js
├─ cliente
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ server.js
│  ├─ static
│  │  ├─ css
│  │  │  └─ style.css
│  │  └─ js
│  │     ├─ index.js
│  │     └─ pages
│  │        └─ HomePage.js
│  └─ _redirects
└─ README.md

```