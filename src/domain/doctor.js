export class Doctor {
  #nombre;
  #especialidad;
  #turnosDisponibles;
  #clinica;

  constructor(nombre, especialidad, clinica) {
    this.#nombre = nombre;
    this.#especialidad = especialidad;
    this.#turnosDisponibles = [];
    this.#clinica = clinica;
  }


  agregarTurno(fecha, hora) {
    this.turnos.push({ fecha: fecha, hora: hora });
}
  

  get nombre() {
    return this.#nombre;
  }

  get especialidad() {
    return this.#especialidad;
  }

  get turnosDisponibles() {
    return this.#turnosDisponibles;
  }

  get clinicas() {
    return this.#clinica;
  }

  toString() {
    return `Nombre: ${this.#nombre} - Especialidad: ${this.#especialidad} - Clínica: ${this.#clinica}`;
  }
}

export const doctores = {
  doctor1: new Doctor("Dr. Juan Pérez", "Pediatría", "Carrasco"),
  doctor2:new Doctor("Dra. Ana Gómez", "Cardiología", "Pocitos"),
  doctor3:new Doctor("Dr. Luis Martínez", "Dermatología", "Centro"),
  doctor4:new Doctor("Dra. María López", "Oftalmología", "Carrasco"),
  doctor5:new Doctor("Dr. Javier Rodríguez", "Pediatría", "Pocitos"),
  doctor6:new Doctor("Dra. Andrea Sánchez", "Cardiología", "Centro"),
  doctor7:new Doctor("Dr. Carlos García", "Oftalmología", "Carrasco"),
  doctor8:new Doctor("Dra. Laura Fernández", "Dermatología", "Pocitos"),
  doctor9:new Doctor("Dr. Roberto Pérez", "Pediatría", "Centro"),
  doctor10:new Doctor("Dra. Ana María Pérez", "Oftalmología", "Carrasco"),
  doctor11:new Doctor("Dr. José Martínez", "Cardiología", "Pocitos"),
  doctor12:new Doctor("Dra. Claudia Hernández", "Dermatología", "Centro"),
  doctor13:new Doctor("Dr. Miguel Torres", "Pediatría", "Carrasco"),
  doctor14:new Doctor("Dra. Julia Soto", "Oftalmología", "Pocitos"),
  doctor15:new Doctor("Dr. Alejandro López", "Cardiología", "Centro"),
};
