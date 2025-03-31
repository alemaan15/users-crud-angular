import { TipoUsuario, Usuario } from "../core/models/user.model";

export const USERS_MOCK: Usuario[] = [
  {
    id: '1',
    tipo: TipoUsuario.DEMANDANTE,
    nif: '12345678A',
    nombre: 'Juan',
    apellido1: 'Pérez',
    genero: 'Hombre',
    fechaNacimiento: '1990-01-01',
    direccion: {
      calle: 'Calle Falsa',
      numero: '123',
      codigoPostal: '28080',
      ciudad: 'Madrid'
    },
    estudios: [
      {
        institucion: 'Universidad X',
        titulacion: 'Grado en Derecho',
        fecha: '2015-06-01'
      }
    ]
  },
  {
    id: '2',
    tipo: TipoUsuario.EMPLEADO,
    nif: '87654321B',
    nombre: 'María',
    apellido1: 'López',
    genero: 'Mujer',
    fechaNacimiento: '1985-04-15',
    direccion: {
      calle: 'Calle Real',
      numero: '45',
      codigoPostal: '46001',
      ciudad: 'Valencia'
    },
    experiencia: [
      {
        empresa: 'Empresa Y',
        puesto: 'Desarrolladora',
        fecha: '2020-01-01'
      }
    ]
  }
];