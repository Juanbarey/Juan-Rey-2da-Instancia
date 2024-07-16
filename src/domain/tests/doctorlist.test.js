import { describe, expect, test } from '@jest/globals';
import DoctorList from '../doctorlist';
import { doctores } from '../doctor';

describe('DoctorList', () => {
  let listaDoctores;

  beforeEach(() => {
    listaDoctores = new DoctorList();

    Object.values(doctores).forEach((doctor) => listaDoctores.add(doctor));
  });

  test('Inicialización de lista de doctores vacía', () => {
    const doctorList = new DoctorList();
    expect(doctorList.getDoctors()).toHaveLength(0);
  });

  test('Agregar doctor', () => {
    const newDoctor = new Doctor('Dr. suarez', 'medico gral', 'Lunes y viernes');
    listaDoctores.add(newDoctor);

    const doctors = listaDoctores.getDoctors();
    expect(doctors).toHaveLength(Object.values(doctores).length + 1);
    expect(doctors).toContain(newDoctor);
  });

  test('Obtener todos los doctores', () => {
    const doctors = listaDoctores.getDoctors();
    expect(doctors).toHaveLength(Object.values(doctores).length);
  });

  test('Obtener doctor por nombre', () => {
    const doctorName = 'Dr. Juan Pérez';
    const doctor = listaDoctores.getDoctorByName(doctorName);
    expect(doctor).toBeDefined();
    expect(doctor.nombre).toBe(doctorName);
  });

  test('Obtener fechas disponibles por nombre de doctor', () => {
    const doctorName = 'Dr. Juan Pérez';
    const availableDates = listaDoctores.getAvailableDatesByDoctorName(doctorName);
    expect(availableDates).toEqual(['2024-07-17', '2024-07-22', '2024-07-24']);
  });

  test('Obtener fechas para doctor que no existe', () => {
    const doctorName = 'Dr. Forlan';
    const availableDates = listaDoctores.getAvailableDatesByDoctorName(doctorName);
    expect(availableDates).toEqual([]);
  });
});

