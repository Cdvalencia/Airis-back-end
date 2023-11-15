# JWT AUTENTICACIÓN TEMPLATE PARA NODE BACKEND - TYPESCRIPT

Aplicación básica en Nodejs y Express, para la autenticación de usuarios por medio de JWT.

## Routes:

#### /api/user/login  - POST
Este endpoint, permite autenticar los usuarios.

#### /api/protected  - GET
Un ejemplo simple de un endpoint protegido con JWT: Authorization: 'Bearer [JWT]'

## Uso:

1. Clona este repositorio:
```bash
git clone https://github.com/Cdvalencia/Airis-back-end.git
```

2. Ejecuta los siguientes comandos:
```bash
npm install
npm run build
npm start
```

3. Para compilar los archivos Typescript, y ver la aplicación en tiempo real:
```bash
tsc -w
```