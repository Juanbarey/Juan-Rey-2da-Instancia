export class Doctor {
  #nombre;
  #especialidad;
  #turnos;
  #dias;

  constructor(nombre, especialidad, dias) {
    this.#nombre = nombre;
    this.#especialidad = especialidad;
    this.#turnos = [];
    this.#dias = dias;
  }



  
agregarTurno(fecha, hora ) {
  const nuevoTurno = {
      fecha: fecha,
      hora: hora
  };

  this.#turnos.push(nuevoTurno);
}
eliminarTurno(fecha, hora) {
  this.#turnos = this.#turnos.filter(turno => !(turno.fecha === fecha && turno.hora === hora));
}
obtenerTurnos() {
  return this.#turnos;
}


  get nombre() {
    return this.#nombre;
  }

  get especialidad() {
    return this.#especialidad;
  }



  get dias() {
    return this.#dias;
  }

  toString() {
    return ` ${this.#dias}`;
  }
}



const doctor1 = new Doctor("Dr. Juan Pérez", "Pediatría", "Lunes y miércoles");
doctor1.agregarTurno('2024-07-17', '09:00');
doctor1.agregarTurno('2024-07-17', '10:00');
doctor1.agregarTurno('2024-07-17', '15:00');
doctor1.agregarTurno('2024-07-22', '09:00');
doctor1.agregarTurno('2024-07-22', '10:00');
doctor1.agregarTurno('2024-07-22', '15:00');
doctor1.agregarTurno('2024-07-24', '09:00');
doctor1.agregarTurno('2024-07-24', '10:00');
doctor1.agregarTurno('2024-07-24', '15:00');

const doctor2 = new Doctor("Dra. Ana Gómez", "Cardiología", "Jueves y sábado");
doctor2.agregarTurno('2024-07-18', '09:00');
doctor2.agregarTurno('2024-07-18', '10:00');
doctor2.agregarTurno('2024-07-18', '15:00');
doctor2.agregarTurno('2024-07-20', '09:00');
doctor2.agregarTurno('2024-07-20', '10:00');
doctor2.agregarTurno('2024-07-20', '15:00');
doctor2.agregarTurno('2024-07-25', '09:00');
doctor2.agregarTurno('2024-07-25', '10:00');
doctor2.agregarTurno('2024-07-25', '15:00');
doctor2.agregarTurno('2024-07-27', '09:00');
doctor2.agregarTurno('2024-07-27', '10:00');
doctor2.agregarTurno('2024-07-27', '15:00');

const doctor3= new Doctor("Dr. Luis Martínez", "Dermatología", "Martes y miercoles");
doctor3.agregarTurno('2024-07-17', '09:00');
doctor3.agregarTurno('2024-07-25', '10:00');
doctor3.agregarTurno('2024-07-17', '15:00');
doctor3.agregarTurno('2024-07-18', '09:00');
doctor3.agregarTurno('2024-07-18', '10:00');
doctor3.agregarTurno('2024-07-18', '15:00');
doctor3.agregarTurno('2024-07-24', '09:00');
doctor3.agregarTurno('2024-07-24', '10:00');
doctor3.agregarTurno('2024-07-25', '15:00');

const doctor4 = new Doctor("Dra. María López", "Oftalmología", "Lunes y viernes");
doctor4.agregarTurno('2024-07-19', '15:00');
doctor4.agregarTurno('2024-07-19', '14:00');
doctor4.agregarTurno('2024-07-22', '10:00');
doctor4.agregarTurno('2024-07-22', '11:00');

const doctor5 = new Doctor("Dr. Javier Rodríguez", "Pediatría", "Martes y jueves");
doctor5.agregarTurno('2024-07-23', '10:00');
doctor5.agregarTurno('2024-07-23', '11:00');
doctor5.agregarTurno('2024-07-23', '12:00');
doctor5.agregarTurno('2024-07-25', '10:00');
doctor5.agregarTurno('2024-07-25', '11:00');

const doctor6=new Doctor("Dra. Andrea Sánchez", "Cardiología", "Lunes y martes");
doctor6.agregarTurno('2024-07-23', '10:00');
doctor6.agregarTurno('2024-07-23', '11:00');
doctor6.agregarTurno('2024-07-23', '12:00');
doctor6.agregarTurno('2024-07-22', '10:00');
doctor6.agregarTurno('2024-07-22', '11:00');

const doctor7=new Doctor("Dr. Carlos García", "Oftalmología", "Martes y jueves");
doctor7.agregarTurno('2024-07-23', '18:00');
doctor7.agregarTurno('2024-07-23', '19:00');
doctor7.agregarTurno('2024-07-23', '20:00');
doctor7.agregarTurno('2024-07-25', '16:00');
doctor7.agregarTurno('2024-07-25', '17:00');


const doctor8=new Doctor("Dra. Laura Fernández", "Dermatología", "Lunes y viernes");
doctor8.agregarTurno('2024-07-19', '17:00');
doctor8.agregarTurno('2024-07-19', '18:00');
doctor8.agregarTurno('2024-07-22', '10:00');
doctor8.agregarTurno('2024-07-22', '11:00');

export const doctores ={
  doctor1: doctor1,
  doctor2: doctor2,
  doctor3: doctor3,
  doctor4: doctor4,
  doctor5: doctor5,
  doctor6: doctor6,
  doctor7: doctor7,
  doctor8: doctor8,
}