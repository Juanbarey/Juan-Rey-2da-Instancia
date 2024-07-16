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

  test('Eliminar turno del doctor', () => {
    const fecha = '2024-07-17';
    const hora = '09:00';

    expect(doctor.obtenerTurnos()).toContainEqual({ fecha, hora });

    doctor.eliminarTurno(fecha, hora);

    expect(doctor.obtenerTurnos()).not.toContainEqual({ fecha, hora });
  });

  test('Agregar turno al doctor', () => {
    const fecha = '2024-07-30';
    const hora = '14:00';

    doctor.agregarTurno(fecha, hora);

    expect(doctor.obtenerTurnos()).toContainEqual({ fecha, hora });
  });


  test('Obtener días de atención del doctor', () => {
    expect(doctor.dias).toBe('Lunes y miércoles');
  });

});
