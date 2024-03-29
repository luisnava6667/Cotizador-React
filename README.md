# Cotizador-React

Este es un proyecto de ejemplo que muestra cómo construir un cotizador en React. El cotizador es una aplicación simple que permite a los usuarios obtener una cotización de seguros de automóviles. La aplicación utiliza datos de prueba para calcular el precio de la cotización y no está conectada a un servicio de cotización real.

## Instalación

Para instalar y ejecutar el proyecto, sigue los siguientes pasos:

1. Clona el repositorio: `git clone https://github.com/luisnava6667/Cotizador-React.git`
2. Ve al directorio del proyecto: `cd Cotizador-React`
3. Instala las dependencias: `npm install`

## Uso

Para iniciar la aplicación, ejecuta el comando `npm start` y abre [http://localhost:3000](http://localhost:3000) en tu navegador.

La aplicación es un cotizador de seguros de automóviles. Para utilizarlo, sigue los siguientes pasos:

1. Ingresa la marca de tu automóvil. Puedes ingresar cualquier marca, pero se recomienda utilizar una de las marcas de prueba que se proporcionan, como "Americano", "Europeo" o "Asiático".
2. Ingresa el año de tu automóvil. El año debe ser un número entre 1900 y el año actual.
3. Selecciona el plan de seguro que deseas contratar. La aplicación ofrece dos planes de seguro diferentes: "Básico" y "Completo".
4. Haz clic en el botón "Cotizar" para obtener el precio de la cotización.

Después de ingresar los datos de tu automóvil y seleccionar el plan de seguro, la aplicación calculará el precio de la cotización y lo mostrará en la pantalla. También se mostrará una descripción detallada del plan de seguro que seleccionaste y de los servicios que incluye.

## Estructura del proyecto

El proyecto está estructurado en diferentes componentes de React, cada uno responsable de una parte específica de la aplicación. Los componentes principales son los siguientes:

- **App.js:** El componente principal de la aplicación, que contiene la estructura general de la página y se encarga de renderizar los demás componentes.
- **Formulario.js:** El componente que contiene el formulario de cotización de seguros.
- **Resumen.js:** El componente que muestra el resumen de la cotización, incluyendo el precio y la descripción del plan de seguro seleccionado.
- **Resultado.js:** El componente que muestra el resultado de la cotización.

Los estilos de la aplicación se encuentran en la carpeta `src/styles`, y están organizados en diferentes archivos para cada componente.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del proyecto.
2. Crea una rama para tus cambios: `git checkout -b mi-rama-de-cambios`
3. Realiza tus cambios y haz commit de los mismos: `git commit -am "Agrega mi funcionalidad"`
4. Haz push de tus cambios a tu fork: `git push origin mi-rama-de-cambios`
5. Crea un pull request para solicitar que tus cambios sean fusionados con la rama principal del proyecto.

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes ver el archivo LICENSE.md para más detalles.



