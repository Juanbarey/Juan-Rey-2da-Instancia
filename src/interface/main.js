import { listaDoctores } from "../domain/doctorlist.js";

document.addEventListener('DOMContentLoaded', function() {
    const nombreDoctor=document.getElementById("doctores"); 
    const especialidadDoctor=document.getElementById("especialidades"); 
    const btnBuscar=document.getElementById("buscar");

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
});