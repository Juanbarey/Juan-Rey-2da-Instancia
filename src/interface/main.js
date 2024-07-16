import { listaDoctores } from "../domain/doctorlist.js";
import {doctores} from"../domain/doctor.js";
document.addEventListener('DOMContentLoaded', function() {
    const nombreDoctor=document.getElementById("doctores"); 
    const especialidadDoctor=document.getElementById("especialidades"); 
    const btnBuscar=document.getElementById("buscar");
    const Rturno=document.getElementById("reserva-turno");
    const btnVolver=document.getElementById("btnVolver");
    const VentanaFecha=document.getElementById("fecha_Ventana");
    const fecha=document.getElementById("fechaReserva");
    const selectHora=document.getElementById("hora");
    const titulo=document.getElementById("titulo");
    const btnReserva =document.getElementById("btnReserva");


    var dateInput = fecha;
    var today = new Date();
    var day = String(today.getDate()).padStart(2, '0');
    var month = String(today.getMonth() + 1).padStart(2, '0'); 
    var year = today.getFullYear();
    
    var formattedDate = `${year}-${month}-${day}`;
    
    dateInput.min = formattedDate;

    listaDoctores.getDoctors().forEach((doctor) => {
        const option = document.createElement("option");
        option.value = doctor.nombre;
        option.textContent = doctor.nombre;
        nombreDoctor.appendChild(option);
    });

    const especialidadesSet = new Set();
    listaDoctores.getDoctors().forEach((doctor) => {
        especialidadesSet.add(doctor.especialidad);
    });

    especialidadesSet.forEach((especialidad) => {
        let option = document.createElement("option");
        option.value = especialidad;
        option.textContent = especialidad.charAt(0).toUpperCase() + especialidad.slice(1); // Capitalizar la primera letra
        especialidadDoctor.appendChild(option);
    });



    especialidadDoctor.addEventListener('change', (updateDoctorsSelect));
    nombreDoctor.addEventListener('change', (updateEspSelect));

    function updateEspSelect (){
        const selectedNombre = nombreDoctor.value;
        const filteredEsp = listaDoctores.getDoctors().filter((doctor) => doctor.nombre === selectedNombre);
        especialidadDoctor.innerHTML="";
        filteredEsp.forEach((doctor)=>{
            let option = document.createElement("option");
            option.value = doctor.especialidad;
            option.textContent = doctor.especialidad;
            especialidadDoctor.appendChild(option);      
          });
    }

    function updateDoctorsSelect() {
        const selectedEspecialidad = especialidadDoctor.value;

        const filteredDoctores = listaDoctores.getDoctors().filter((doctor) => doctor.especialidad === selectedEspecialidad);

        nombreDoctor.innerHTML = "";
        filteredDoctores.forEach((doctor) => {
            let option = document.createElement("option");
            option.value = doctor.nombre;
            option.textContent = doctor.nombre;
            nombreDoctor.appendChild(option);
        });
    }
    btnBuscar.addEventListener('click', function(event)  {
        event.preventDefault(); 
        if (nombreDoctor.value !== ""&&especialidadDoctor.value!=="") {
            Rturno.style.display = "none";
            VentanaFecha.style.display = "block";
            const aten=document.getElementById("atencion");
            const doctor = listaDoctores.getDoctors().find(d => d.nombre === nombreDoctor.value);
            aten.innerHTML=nombreDoctor.value +  " atiende los dias" +doctor; 

        }
        else{
                    alert("Por favor, selecciona un doctor antes de continuar.");
        }
      });

      btnVolver.addEventListener('click',()=>{
             Rturno.style.display = "block";
            VentanaFecha.style.display = "none";
            fecha.value = '';
            selectHora.innerHTML = '<option value="">Seleccione una hora</option>';

      })

      fecha.addEventListener('change', (actualizarHora));
  
  
function actualizarHora() {
  const nombreAux = nombreDoctor.value;
  const fechaAux = fecha.value;
  const doctor = listaDoctores.getDoctors().find(d => d.nombre === nombreAux);

const aten=document.getElementById("atencion");
    const turnosParaFecha = doctor.obtenerTurnos().filter(turno => turno.fecha === fechaAux);

    if (turnosParaFecha.length > 0) {
      selectHora.innerHTML = '';

      const horasDisponibles = [...new Set(turnosParaFecha.map(turno => turno.hora))];

      horasDisponibles.forEach(hora => {
        const option = document.createElement('option');
        option.textContent = hora;
        option.value = hora;
        selectHora.appendChild(option);
      });
    } else {
      selectHora.innerHTML = '<option value="">No hay turnos disponibles para esta fecha</option>';
    }
  
}

btnReserva.addEventListener('click',()=>{
    alert("La reserva fue realizada con exito");
    const nombreAux = nombreDoctor.value;
    const fechaAux = fecha.value;
    const horaSeleccionada = selectHora.value;
    const doctor = listaDoctores.getDoctors().find(d => d.nombre === nombreAux);
    doctor.eliminarTurno(fechaAux, horaSeleccionada);
    selectHora.innerHTML = '<option value="">Seleccione una hora</option>';
    fecha.value='';
    Rturno.style.display = "block";
    VentanaFecha.style.display = "none";
})

});