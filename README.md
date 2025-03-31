# CRUD de Usuarios en Angular

## 📌 Descripción General
Este proyecto es una aplicación web desarrollada con **Angular 17** que permite gestionar un CRUD de usuarios con dos tipos: *demandantes* y *empleados*. Incluye funcionalidades como creación, visualización, edición y eliminación de usuarios, además de filtrado por tipo.

## 🚀 Funcionalidades

### 1. Listado de Usuarios
- Muestra todos los usuarios disponibles.
- Permite filtrar por tipo (*demandante*, *empleado*).
- Incluye botones para ver, editar o borrar cada usuario.

### 2. Formulario de Usuario
- Permite crear y editar usuarios.
- Incluye validación de campos obligatorios.
- Los campos cambian según el tipo de usuario.

### 3. Detalle de Usuario
- Visualiza la información agrupada por pestañas:
  - Datos personales
  - Dirección
  - Estudios (para demandantes)
  - Experiencia (para empleados)

### 4. Eliminar Usuario
- Al hacer clic en “Borrar”, aparece una confirmación:
  > ¿Está seguro de que desea borrar el usuario con id [IdUsuario]?
- Si se acepta, el usuario se elimina y se recarga la lista.

## 🧠 Consideraciones Técnicas

### 🔨 Angular 17
- Uso de componentes **standalone**.
- Sintaxis moderna con `@for` y `@if` para renderizado condicional y listas.


### 📦 Datos Simulados
- Los usuarios se cargan desde un mock en memoria (`USERS_MOCK`).
- Las operaciones CRUD se realizan sobre el array local.


## ▶️ Cómo Ejecutar el Proyecto

```bash
npm install
ng serve
