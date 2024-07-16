import { Doctor, doctores } from "./doctor.js";

export default class DoctorList {
  constructor() {
    this.doctors = [];
  }

  add(doctor) {
    this.doctors.push(doctor);
  }

  getDoctors() {
    return this.doctors;
  }

  getDoctorByName(name) {
    return this.doctors.find(doctor => doctor.nombre === name);
  }

  getAvailableDatesByDoctorName(name) {
    const doctor = this.getDoctorByName(name);
    return doctor ? doctor.turnosDisponibles : [];
  }
}

const listaDoctores = new DoctorList();

Object.values(doctores).forEach((doctor) => listaDoctores.add(doctor));
export { listaDoctores };
