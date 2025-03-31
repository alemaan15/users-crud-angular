export interface Usuario {
  id: string;
  tipo: TipoUsuario;
  nif: string;
  nombre: string;
  apellido1: string;
  apellido2?: string;
  genero?: string;
  fechaNacimiento?: string;
  direccion?: Direccion;
  estudios?: Estudios[];
  experiencia?: Experiencia[];
}

export enum TipoUsuario {
  DEMANDANTE = 'Demandante',
  EMPLEADO = 'Empleado',
}

export interface Direccion {
  calle?: string;
  numero?: string;
  puerta?: string;
  codigoPostal?: string;
  ciudad?: string;
}

export interface Estudios {
  institucion: string;
  titulacion: string;
  fecha: string;
}

export interface Experiencia {
  empresa: string;
  puesto: string;
  fecha: string;
}