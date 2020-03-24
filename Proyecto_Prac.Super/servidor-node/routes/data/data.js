var legajo = 1002;

var fechas_clases = [{id_fecha_clases:1,id_carrera:1,fecha_inicio:'2019-03-18',fecha_fin:'2019-07-06'}];

var alumnos= [{id_alumno:1,id_persona: 1,legajo: 1001 ,egresadoDe:"Escuela Secundaria N°12",titulo:"Bachiller en electronica",promedio:7},
              {id_alumno:2,id_persona: 2,legajo: 1002 ,egresadoDe:"Escuela Secundaria N°1",titulo:"Bachiller en Informatica",promedio:9},
              {id_alumno:3,id_persona: 3,legajo: 1003 ,egresadoDe:"Escuela Secundaria N°15",titulo:"Ballicher en periodismo",promedio:7}];

var carreras= [{id_carrera:1,carrera:'Tecnico Superior Programacion'},
               {id_carrera:2,carrera:'Tecnico Superior en Sistemas'}];

var materias= [{id_materia:1,legajo:001,materia:'Matematica'},
               {id_materia:2,legajo:002,materia:'Matematica II'},
               {id_materia:3,legajo:002,materia:'Redes'},
               {id_materia:4,legajo:003,materia:'Matematica III'}];

var asignaciones= [{id_asignacion:1,id_materia:1,id_carrera:1,id_curso:1},
                   {id_asignacion:2,id_materia:2,id_carrera:1,id_curso:2},
                   {id_asignacion:3,id_materia:3,id_carrera:2,id_curso:3},
                   {id_asignacion:4,id_materia:4,id_carrera:2,id_curso:4}];

var cursos = [{id_curso:1,descripcion:'1A',turno:'M'},
              {id_curso:2,descripcion:'2B',turno:'T'},
              {id_curso:3,descripcion:'5B',turno:'T'},
              {id_curso:4,descripcion:'6B',turno:'T'}];

var dias_clase=[{id_dia_clase:1,descripcion:"Lunes"},
                {id_dia_clase:2,descripcion:"Martes"},
                {id_dia_clase:3,descripcion:"Miercoles"},
                {id_dia_clase:4,descripcion:"Jueves"},
                {id_dia_clase:5,descripcion:"Viernes"},
                {id_dia_clase:6,descripcion:"Sabado"}];

var horarios_clase=[{id_horario_clase:1,horario_desde:'',horario_hasta:''},
                    {id_horario_clase:2,horario_desde:'',horario_hasta:''}];

var programas= [{id_programa:1,id_asignacion:1,id_dia_clase_1:1,id_dia_clase_2:4,id_horario_clase_1:1,id_horario_clase_2:2},
    {id_programa:2,id_asignacion:2,id_dia_clase_1:1,id_dia_clase_2:4,id_horario_clase_1:1,id_horario_clase_2:2},
    {id_programa:3,id_asignacion:3,id_dia_clase_1:1,id_dia_clase_2:4,id_horario_clase_1:1,id_horario_clase_2:2},
    {id_programa:4,id_asignacion:4,id_dia_clase_1:1,id_dia_clase_2:4,id_horario_clase_1:1,id_horario_clase_2:2}];

var alumnos_inscriptos= [{id_alumnos_inscriptos:1,id_asignacion:1,id_fecha_clases:1,id_alumno:1},{id_alumnos_inscriptos:2,id_asignacion:1,id_fecha_clases:1,id_alumno:2},]

var asistencias= [{id_asistencia:1,id_programa:1,id_alumno:1,fecha:''},
                  {id_asistencia:2,id_programa:1,id_alumno:2,fecha:''}];


module.exports={legajo, personas, alumnos, carreras, materias, carreras,
    asignaciones, cursos, programas, asistencias,dias_clase,horarios_clase,fechas_clases,alumnos_inscriptos}; 