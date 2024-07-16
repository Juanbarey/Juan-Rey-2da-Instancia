import { beforeEach, describe, expect, test } from '@jest/globals';
import { Doctor, doctores } from '../doctor'; 

describe('Doctor', () => {
  let doctor;

  beforeEach(() => {
    doctor = doctores.doctor1; 
  });

  test('Obtener nombre del doctor', () => {
    expect(doctor.nombre).toBe('Dr. Juan Pérez');
  });

  test('Obtener especialidad del doctor', () => {
    expect(doctor.especialidad).toBe('Pediatría');
  });

  test('Obtener clínica del doctor', () => {
    expect(doctor.clinica).toBe('Carrasco');
  });

  test('Verificar toString del doctor', () => {
    const expectedString = 'Nombre: Dr. Juan Pérez - Especialidad: Pediatría - Clínica: Carrasco';
    expect(doctor.toString()).toBe(expectedString);
  });

});
