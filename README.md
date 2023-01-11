# GeneraPass

Este proyecto es un formulario generador de contraseñas construido usando React. El formulario permite al usuario especificar la longitud de la contraseña generada, así como los tipos de caracteres a incluir en la contraseña (letras mayúsculas, letras minúsculas, símbolos y números).

El proyecto utiliza el estado para registrar las selecciones del usuario y la contraseña generada. Se usa el gancho `useState` para crear variables de estado para lo siguiente:

- `passwordLength`: almacena la longitud de la contraseña
- `includeUppercase`: almacena un valor booleano que indica si se deben incluir letras mayúsculas en la contraseña
- `includeLowercase`: almacena un valor booleano que indica si se deben incluir letras minúsculas en la contraseña
- `includeSymbols`: almacena un valor booleano que indica si se deben incluir símbolos en la contraseña
- `includeNumbers`: almacena un valor booleano que indica si se deben incluir números en la contraseña
- `password`: almacena la contraseña generada

Se emplea el gancho `useCallback` para crear una función de callback para `generatePassword` que genera una contraseña en función de las selecciones del usuario. La contraseña se genera generando una lista de caracteres que incluir en la contraseña en función de las selecciones del usuario y luego agregando caracteres aleatorios de esta lista a la contraseña hasta alcanzar la longitud deseada.

El Hook `useEffect` se emplea para ejecutar la función `generatePassword` tan pronto como se renderiza el componente.

Además, también hay un botón Resetear que simplemente llama de nuevo a la función generatePassword, generando otra contraseña. También válida si alguna de las opciones de checkbox fue seleccionada antes de enviar el formulario.

## Comenzando

1.  Clona este repositorio
2.  Ejecuta `npm install` para instalar las dependencias del proyecto
3.  Ejecuta `npm start` para iniciar el servidor de desarrollo
4.  Abre [http://localhost:3000](http://localhost:3000/) en tu navegador para ver la aplicación

## Construido con

- React
- SASS

## Autores

- **GeneraPass** - [Luis H Ron](https://github.com/luishron)

## Licencia

Este proyecto está licenciado bajo la Licencia MIT -
