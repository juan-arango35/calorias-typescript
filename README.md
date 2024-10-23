
# Calculadora de Propinas

Una calculadora de propinas simple construida con **React** y **TypeScript**. Este proyecto demuestra el uso de hooks clave de React (`useState`, `useEffect`) para gestionar el estado y los efectos secundarios en una aplicación frontend. La calculadora permite a los usuarios ingresar el monto de la cuenta, seleccionar un porcentaje de propina y calcular el monto total incluyendo la propina. Este proyecto es guiado por un curso de Udemy, el cual me parecio muy interesante realizarlo además de poner en práctica los tipados que te brindan una gran eficiencia en el código.
Muy agaradecido con el autor que me brindo la posibilidad de adquirir nuevos conocimientos.

[DEMO]
<a href="https://calculadora-propinas-tsx.netlify.app/" target="_blank">GitHub</a>

## Características

- **Entrada de Cuenta**: Los usuarios pueden ingresar el monto total de la cuenta.
- **Porcentaje de Propina**: Selecciona entre porcentajes de propina predefinidos o ingresa un porcentaje personalizado.
- **Número de Personas**: Calcula la propina por persona para grupos.
- **Diseño Responsivo**: Funciona en dispositivos móviles y de escritorio.
- **Gestión del Estado**: Utiliza hooks de React para manejar entradas y valores calculados.

## Tecnologías Utilizadas

- **React**: Para construir la interfaz de usuario.
- **TypeScript**: Para JavaScript con tipado seguro.
- **Hooks de React**: `useState`, `useEffect` para gestionar el estado y efectos secundarios.

## Hooks Utilizados

- **`useState`**: Gestiona el monto de la cuenta, el porcentaje de propina y el número de personas.
- **`useEffect`**: Maneja el recálculo de la propina total y el monto por persona cuando cambian las entradas.

## Instalación y Configuración

Para obtener una copia local y ponerla en funcionamiento, sigue estos pasos sencillos.

### Requisitos Previos

- Necesitas tener **Node.js** y **npm** instalados en tu máquina.

### Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/juan-arango35/calorias-typescript
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd calculadora-de-propinas
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

5. Abre tu navegador y ve a `http://localhost:3000` para ver la aplicación.

## Uso

1. Selecciona el sevicio que realizaras la cantidad de veces, lo cual hará un agregado con el precio.
2. Elige un porcentaje de propina (Podrián modificarse según sea conveniente).
3. Calcula el subtotal a pagar, agregafo de propina y el monto total a pagar.
4. Boton de envio para direccionar a un registro.


