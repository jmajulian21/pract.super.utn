-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 25-04-2020 a las 04:11:48
-- Versión del servidor: 8.0.13-4
-- Versión de PHP: 7.2.24-0ubuntu0.18.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `kfLR4Hw1f7`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `id_alumno` int(11) NOT NULL,
  `id_persona` int(11) DEFAULT NULL,
  `egresadoDe` varchar(35) NOT NULL,
  `titulo` varchar(35) NOT NULL,
  `promedio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`id_alumno`, `id_persona`, `egresadoDe`, `titulo`, `promedio`) VALUES
(1, 4, 'Escuela N5', 'Titulo Comun', 6),
(2, 6, 'Disney', 'Mago Blanco', 9),
(3, 12, 'Escuela N5 - Lanus', 'Secundaria Comun', 6),
(4, 21, 'Escuela N2 - Ezeiza', 'Secundaria Comun', 6),
(5, 22, 'asdasd', 'asdasd', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno_inscripto`
--

CREATE TABLE `alumno_inscripto` (
  `id_alumno_inscripto` int(11) NOT NULL,
  `id_asignacion_curso` int(11) NOT NULL,
  `id_alumno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alumno_inscripto`
--

INSERT INTO `alumno_inscripto` (`id_alumno_inscripto`, `id_asignacion_curso`, `id_alumno`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignacion`
--

CREATE TABLE `asignacion` (
  `id_asignacion` int(11) NOT NULL,
  `id_materia` int(11) NOT NULL,
  `cuatrimestre` int(11) NOT NULL,
  `id_carrera` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `asignacion`
--

INSERT INTO `asignacion` (`id_asignacion`, `id_materia`, `cuatrimestre`, `id_carrera`) VALUES
(1, 1, 1, 1),
(2, 2, 1, 1),
(3, 3, 1, 1),
(4, 4, 1, 1),
(5, 5, 1, 1),
(6, 6, 2, 1),
(7, 7, 2, 1),
(8, 8, 2, 1),
(9, 9, 2, 1),
(10, 10, 2, 1),
(11, 11, 2, 1),
(12, 12, 3, 1),
(13, 13, 3, 1),
(14, 14, 3, 1),
(15, 15, 3, 1),
(16, 16, 3, 1),
(17, 17, 4, 1),
(18, 18, 4, 1),
(19, 19, 4, 1),
(20, 20, 4, 1),
(21, 21, 4, 1),
(22, 22, 5, 2),
(23, 23, 5, 2),
(24, 24, 5, 2),
(25, 25, 5, 2),
(26, 26, 5, 2),
(27, 27, 5, 2),
(28, 28, 5, 2),
(29, 29, 6, 2),
(30, 30, 6, 2),
(31, 31, 6, 2),
(32, 32, 6, 2),
(33, 33, 6, 2),
(34, 34, 6, 2),
(35, 35, 6, 2),
(36, 36, 6, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignacion_x_curso`
--

CREATE TABLE `asignacion_x_curso` (
  `id_asignacion_curso` int(11) DEFAULT NULL,
  `id_asignacion` int(11) DEFAULT NULL,
  `id_curso` int(11) DEFAULT NULL,
  `id_dia` int(11) DEFAULT NULL,
  `id_horario` int(11) DEFAULT NULL,
  `id_profesor_1` int(11) DEFAULT NULL,
  `id_profesor_2` int(11) NOT NULL,
  `id_profesor_3` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asistencia`
--

CREATE TABLE `asistencia` (
  `id_asistencia` int(11) NOT NULL,
  `id_programa` int(11) NOT NULL,
  `id_alumno` int(11) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrera`
--

CREATE TABLE `carrera` (
  `id_carrera` int(11) NOT NULL,
  `carrera` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `carrera`
--

INSERT INTO `carrera` (`id_carrera`, `carrera`) VALUES
(1, 'Tecnico Superior en Programacion'),
(2, 'Tecnico Superior en Sistemas Informaticos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciclo_lectivo`
--

CREATE TABLE `ciclo_lectivo` (
  `id_ciclo` int(11) DEFAULT NULL,
  `ciclo_año` int(11) DEFAULT NULL,
  `ciclo_lectivo` int(11) DEFAULT NULL,
  `ciclo_fecha_inicio` date DEFAULT NULL,
  `ciclo_fecha_fin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `ciclo_lectivo`
--

INSERT INTO `ciclo_lectivo` (`id_ciclo`, `ciclo_año`, `ciclo_lectivo`, `ciclo_fecha_inicio`, `ciclo_fecha_fin`) VALUES
(1, 2020, 1, '2020-03-30', '2020-07-10');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `id_curso` int(11) NOT NULL,
  `descripcion` varchar(10) NOT NULL,
  `turno` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`id_curso`, `descripcion`, `turno`) VALUES
(1, '1A', 'M'),
(2, '1B', 'M'),
(3, '1C', 'M'),
(4, '2A', 'M'),
(5, '3A', 'M'),
(6, '4A', 'M'),
(7, '1E', 'N'),
(8, '1F', 'N'),
(9, '2C', 'N'),
(10, '3C', 'N'),
(11, '4B', 'N');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dia_clase`
--

CREATE TABLE `dia_clase` (
  `id_dia_clase` int(11) NOT NULL,
  `descripcion` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `dia_clase`
--

INSERT INTO `dia_clase` (`id_dia_clase`, `descripcion`) VALUES
(1, 'Domingo'),
(2, 'Lunes'),
(3, 'Martes'),
(4, 'Miercoles'),
(5, 'Jueves'),
(6, 'Viernes'),
(7, 'Sabado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fechas_2020`
--

CREATE TABLE `fechas_2020` (
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `fechas_2020`
--

INSERT INTO `fechas_2020` (`fecha`) VALUES
('2020-01-01'),
('2020-01-02'),
('2020-01-03'),
('2020-01-04'),
('2020-01-05'),
('2020-01-06'),
('2020-01-07'),
('2020-01-08'),
('2020-01-09'),
('2020-01-10'),
('2020-01-11'),
('2020-01-12'),
('2020-01-13'),
('2020-01-14'),
('2020-01-15'),
('2020-01-16'),
('2020-01-17'),
('2020-01-18'),
('2020-01-19'),
('2020-01-20'),
('2020-01-21'),
('2020-01-22'),
('2020-01-23'),
('2020-01-24'),
('2020-01-25'),
('2020-01-26'),
('2020-01-27'),
('2020-01-28'),
('2020-01-29'),
('2020-01-30'),
('2020-01-31'),
('2020-02-01'),
('2020-02-02'),
('2020-02-03'),
('2020-02-04'),
('2020-02-05'),
('2020-02-06'),
('2020-02-07'),
('2020-02-08'),
('2020-02-09'),
('2020-02-10'),
('2020-02-11'),
('2020-02-12'),
('2020-02-13'),
('2020-02-14'),
('2020-02-15'),
('2020-02-16'),
('2020-02-17'),
('2020-02-18'),
('2020-02-19'),
('2020-02-20'),
('2020-02-21'),
('2020-02-22'),
('2020-02-23'),
('2020-02-24'),
('2020-02-25'),
('2020-02-26'),
('2020-02-27'),
('2020-02-28'),
('2020-02-29'),
('2020-03-01'),
('2020-03-02'),
('2020-03-03'),
('2020-03-04'),
('2020-03-05'),
('2020-03-06'),
('2020-03-07'),
('2020-03-08'),
('2020-03-09'),
('2020-03-10'),
('2020-03-11'),
('2020-03-12'),
('2020-03-13'),
('2020-03-14'),
('2020-03-15'),
('2020-03-16'),
('2020-03-17'),
('2020-03-18'),
('2020-03-19'),
('2020-03-20'),
('2020-03-21'),
('2020-03-22'),
('2020-03-23'),
('2020-03-24'),
('2020-03-25'),
('2020-03-26'),
('2020-03-27'),
('2020-03-28'),
('2020-03-29'),
('2020-03-30'),
('2020-03-31'),
('2020-04-01'),
('2020-04-02'),
('2020-04-03'),
('2020-04-04'),
('2020-04-05'),
('2020-04-06'),
('2020-04-07'),
('2020-04-08'),
('2020-04-09'),
('2020-04-10'),
('2020-04-11'),
('2020-04-12'),
('2020-04-13'),
('2020-04-14'),
('2020-04-15'),
('2020-04-16'),
('2020-04-17'),
('2020-04-18'),
('2020-04-19'),
('2020-04-20'),
('2020-04-21'),
('2020-04-22'),
('2020-04-23'),
('2020-04-24'),
('2020-04-25'),
('2020-04-26'),
('2020-04-27'),
('2020-04-28'),
('2020-04-29'),
('2020-04-30'),
('2020-05-01'),
('2020-05-02'),
('2020-05-03'),
('2020-05-04'),
('2020-05-05'),
('2020-05-06'),
('2020-05-07'),
('2020-05-08'),
('2020-05-09'),
('2020-05-10'),
('2020-05-11'),
('2020-05-12'),
('2020-05-13'),
('2020-05-14'),
('2020-05-15'),
('2020-05-16'),
('2020-05-17'),
('2020-05-18'),
('2020-05-19'),
('2020-05-20'),
('2020-05-21'),
('2020-05-22'),
('2020-05-23'),
('2020-05-24'),
('2020-05-25'),
('2020-05-26'),
('2020-05-27'),
('2020-05-28'),
('2020-05-29'),
('2020-05-30'),
('2020-05-31'),
('2020-06-01'),
('2020-06-02'),
('2020-06-03'),
('2020-06-04'),
('2020-06-05'),
('2020-06-06'),
('2020-06-07'),
('2020-06-08'),
('2020-06-09'),
('2020-06-10'),
('2020-06-11'),
('2020-06-12'),
('2020-06-13'),
('2020-06-14'),
('2020-06-15'),
('2020-06-16'),
('2020-06-17'),
('2020-06-18'),
('2020-06-19'),
('2020-06-20'),
('2020-06-21'),
('2020-06-22'),
('2020-06-23'),
('2020-06-24'),
('2020-06-25'),
('2020-06-26'),
('2020-06-27'),
('2020-06-28'),
('2020-06-29'),
('2020-06-30'),
('2020-07-01'),
('2020-07-02'),
('2020-07-03'),
('2020-07-04'),
('2020-07-05'),
('2020-07-06'),
('2020-07-07'),
('2020-07-08'),
('2020-07-09'),
('2020-07-10'),
('2020-07-11'),
('2020-07-12'),
('2020-07-13'),
('2020-07-14'),
('2020-07-15'),
('2020-07-16'),
('2020-07-17'),
('2020-07-18'),
('2020-07-19'),
('2020-07-20'),
('2020-07-21'),
('2020-07-22'),
('2020-07-23'),
('2020-07-24'),
('2020-07-25'),
('2020-07-26'),
('2020-07-27'),
('2020-07-28'),
('2020-07-29'),
('2020-07-30'),
('2020-07-31'),
('2020-08-01'),
('2020-08-02'),
('2020-08-03'),
('2020-08-04'),
('2020-08-05'),
('2020-08-06'),
('2020-08-07'),
('2020-08-08'),
('2020-08-09'),
('2020-08-10'),
('2020-08-11'),
('2020-08-12'),
('2020-08-13'),
('2020-08-14'),
('2020-08-15'),
('2020-08-16'),
('2020-08-17'),
('2020-08-18'),
('2020-08-19'),
('2020-08-20'),
('2020-08-21'),
('2020-08-22'),
('2020-08-23'),
('2020-08-24'),
('2020-08-25'),
('2020-08-26'),
('2020-08-27'),
('2020-08-28'),
('2020-08-29'),
('2020-08-30'),
('2020-08-31'),
('2020-09-01'),
('2020-09-02'),
('2020-09-03'),
('2020-09-04'),
('2020-09-05'),
('2020-09-06'),
('2020-09-07'),
('2020-09-08'),
('2020-09-09'),
('2020-09-10'),
('2020-09-11'),
('2020-09-12'),
('2020-09-13'),
('2020-09-14'),
('2020-09-15'),
('2020-09-16'),
('2020-09-17'),
('2020-09-18'),
('2020-09-19'),
('2020-09-20'),
('2020-09-21'),
('2020-09-22'),
('2020-09-23'),
('2020-09-24'),
('2020-09-25'),
('2020-09-26'),
('2020-09-27'),
('2020-09-28'),
('2020-09-29'),
('2020-09-30'),
('2020-10-01'),
('2020-10-02'),
('2020-10-03'),
('2020-10-04'),
('2020-10-05'),
('2020-10-06'),
('2020-10-07'),
('2020-10-08'),
('2020-10-09'),
('2020-10-10'),
('2020-10-11'),
('2020-10-12'),
('2020-10-13'),
('2020-10-14'),
('2020-10-15'),
('2020-10-16'),
('2020-10-17'),
('2020-10-18'),
('2020-10-19'),
('2020-10-20'),
('2020-10-21'),
('2020-10-22'),
('2020-10-23'),
('2020-10-24'),
('2020-10-25'),
('2020-10-26'),
('2020-10-27'),
('2020-10-28'),
('2020-10-29'),
('2020-10-30'),
('2020-10-31'),
('2020-11-01'),
('2020-11-02'),
('2020-11-03'),
('2020-11-04'),
('2020-11-05'),
('2020-11-06'),
('2020-11-07'),
('2020-11-08'),
('2020-11-09'),
('2020-11-10'),
('2020-11-11'),
('2020-11-12'),
('2020-11-13'),
('2020-11-14'),
('2020-11-15'),
('2020-11-16'),
('2020-11-17'),
('2020-11-18'),
('2020-11-19'),
('2020-11-20'),
('2020-11-21'),
('2020-11-22'),
('2020-11-23'),
('2020-11-24'),
('2020-11-25'),
('2020-11-26'),
('2020-11-27'),
('2020-11-28'),
('2020-11-29'),
('2020-11-30'),
('2020-12-01'),
('2020-12-02'),
('2020-12-03'),
('2020-12-04'),
('2020-12-05'),
('2020-12-06'),
('2020-12-07'),
('2020-12-08'),
('2020-12-09'),
('2020-12-10'),
('2020-12-11'),
('2020-12-12'),
('2020-12-13'),
('2020-12-14'),
('2020-12-15'),
('2020-12-16'),
('2020-12-17'),
('2020-12-18'),
('2020-12-19'),
('2020-12-20'),
('2020-12-21'),
('2020-12-22'),
('2020-12-23'),
('2020-12-24'),
('2020-12-25'),
('2020-12-26'),
('2020-12-27'),
('2020-12-28'),
('2020-12-29'),
('2020-12-30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fecha_clase`
--

CREATE TABLE `fecha_clase` (
  `id_fecha_clase` int(11) NOT NULL,
  `id_carrera` int(11) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_fin` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `fecha_clase`
--

INSERT INTO `fecha_clase` (`id_fecha_clase`, `id_carrera`, `fecha_inicio`, `fecha_fin`) VALUES
(1, 1, '2019-03-20', '2019-06-30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `feriados`
--

CREATE TABLE `feriados` (
  `feriado` date NOT NULL,
  `descripcion` varchar(45) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario_clase`
--

CREATE TABLE `horario_clase` (
  `id_horario_clase` int(11) NOT NULL,
  `horario_desde` varchar(20) NOT NULL,
  `horario_hasta` varchar(20) NOT NULL,
  `turno` char(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `horario_clase`
--

INSERT INTO `horario_clase` (`id_horario_clase`, `horario_desde`, `horario_hasta`, `turno`) VALUES
(1, '18:30HS', '22:30HS', 'N'),
(2, '18:30HS', '20:30HS', 'N'),
(3, '20:30HS', '22:30HS', 'N'),
(4, '8:30HS', '12:30HS', 'M'),
(5, '8:30HS', '10:30HS', 'M'),
(6, '10:30HS', '12:30HS', 'M');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `id_materia` int(11) NOT NULL,
  `materia` varchar(52) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`id_materia`, `materia`) VALUES
(1, 'Matematica'),
(2, 'Sistema de Procesamiento de Datos'),
(3, 'Inglés'),
(4, 'Programacion I'),
(5, 'Laboratorio de Computacion I'),
(6, 'Arquitectura y Sistemas Operativo'),
(7, 'Estadistica'),
(8, 'Ingles II'),
(9, 'Programacion II'),
(10, 'Laboratorio de Computacion II'),
(11, 'Metodologia de la Investigacion'),
(12, 'Elemento de Investigacion Operativa'),
(13, 'Programacion III'),
(14, 'Laboratorio de Computacion III'),
(15, 'Diseño y Administracion de Bases de Datos'),
(16, 'Organizacion Empresarial'),
(17, 'Diseño y Administracion de Bases de Datos'),
(18, 'Laboratorio de Computacion IV'),
(19, 'Legislacion'),
(20, 'Metodologia en Sistemas I'),
(21, 'Practica Supervisada I'),
(22, 'Metodologia de Sistemas II'),
(23, 'Programacion Avanzada I'),
(24, 'Laboratorio de Computacion V'),
(25, 'Bases de Datos II'),
(26, 'Matematica II'),
(27, 'Redes'),
(28, 'Ingles Tecnico Avanzado I'),
(29, 'Administracion y Direccion de Poryectos Informatica'),
(30, 'Metodologia de Sistemas III'),
(31, 'Investigacion Operativa II'),
(32, 'Ingles Tecnico Avanzado II'),
(33, 'Matematica III'),
(34, 'Programacion Avanzada II'),
(35, 'Seminario'),
(36, 'Practica Supervisada II');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id_persona` int(11) NOT NULL,
  `legajo` varchar(35) NOT NULL,
  `nombre` varchar(35) DEFAULT NULL,
  `apellido` varchar(35) DEFAULT NULL,
  `tipoDoc` int(11) DEFAULT NULL,
  `nroDoc` varchar(35) DEFAULT NULL,
  `fechNacimiento` date DEFAULT NULL,
  `sexo` varchar(2) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `piso` varchar(10) DEFAULT NULL,
  `codPostal` int(11) DEFAULT NULL,
  `localidad` int(11) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `celular` varchar(30) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `id_tipo_persona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id_persona`, `legajo`, `nombre`, `apellido`, `tipoDoc`, `nroDoc`, `fechNacimiento`, `sexo`, `direccion`, `piso`, `codPostal`, `localidad`, `telefono`, `celular`, `email`, `id_tipo_persona`) VALUES
(1, '10001', 'Julian A.', 'Moreno', 1, '37659989', '1993-07-15', 'M', 'Lisandro de la torre', '1273', 1838, 4, '42969001', '157699504', 'asd@asd.com', 2),
(2, '10002', 'Fernando', 'Insua', 1, '36545665', '1992-04-25', 'M', 'Lisandro de la torre 1232', '4', 2322, NULL, NULL, NULL, NULL, 3),
(3, '10003', 'Juan', 'Perez', 1, '34231233', '0000-00-00', '', '', '', 0, 0, '', '', '', 1),
(4, '10004', 'Jose', 'Fernandez', 1, '23456789', NULL, 'M', 'XXX XXX', '5A', 1454, 0, '432243324', '324234234', 'fernandez.jose@gmail.com', 4),
(8, '10008', 'Sebastian', 'Fernandez', 1, '258963147', NULL, 'M', 'Alsina 559', NULL, 1870, 11, NULL, '1152132558', 'sebas.fernandez@gmail.com', 2),
(21, '10020', 'Lautaro', 'Martinez', 1, '45323345', '1991-01-12', 'M', 'Alsina 523', NULL, 1870, 12, NULL, NULL, 'lautaro.martinez@hotmail.com', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `id_profesor` int(11) NOT NULL,
  `id_persona` int(11) DEFAULT NULL,
  `egresadoDe` varchar(45) DEFAULT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `promedio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `profesor`
--

INSERT INTO `profesor` (`id_profesor`, `id_persona`, `egresadoDe`, `titulo`, `promedio`) VALUES
(1, 1, NULL, NULL, NULL),
(2, 8, 'Disney', 'Mago Blanco', 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `programa`
--

CREATE TABLE `programa` (
  `id_programa` int(11) NOT NULL,
  `id_asignacion` int(11) NOT NULL,
  `id_dia_clase_1` int(11) NOT NULL,
  `id_dia_clase_2` int(11) NOT NULL,
  `id_horario_clase_1` int(11) NOT NULL,
  `id_horario_clase_2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `programa`
--

INSERT INTO `programa` (`id_programa`, `id_asignacion`, `id_dia_clase_1`, `id_dia_clase_2`, `id_horario_clase_1`, `id_horario_clase_2`) VALUES
(1, 1, 1, 0, 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secretaria`
--

CREATE TABLE `secretaria` (
  `id_secretaria` int(11) NOT NULL,
  `id_persona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `secretaria`
--

INSERT INTO `secretaria` (`id_secretaria`, `id_persona`) VALUES
(1, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_documentacion`
--

CREATE TABLE `tipo_documentacion` (
  `tipo_documento` int(11) NOT NULL,
  `descripcion` varchar(10) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tipo_documentacion`
--

INSERT INTO `tipo_documentacion` (`tipo_documento`, `descripcion`) VALUES
(1, 'DNI'),
(2, 'CI'),
(3, 'CUIT'),
(4, 'LC'),
(5, 'LE'),
(6, 'ID');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_persona`
--

CREATE TABLE `tipo_persona` (
  `id_tipo` int(11) NOT NULL,
  `descripcion` varchar(35) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tipo_persona`
--

INSERT INTO `tipo_persona` (`id_tipo`, `descripcion`) VALUES
(1, 'Administrador'),
(2, 'Profesor'),
(3, 'Secretaria'),
(4, 'Alumno');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_usuario`
--

CREATE TABLE `tipo_usuario` (
  `tipo_usuario` int(11) DEFAULT NULL,
  `usuario` varchar(35) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `tipo_usuario`
--

INSERT INTO `tipo_usuario` (`tipo_usuario`, `usuario`) VALUES
(1, 'Admin'),
(2, 'Profesor'),
(3, 'Secretaria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `usuario` varchar(35) NOT NULL,
  `contraseña` varchar(45) NOT NULL,
  `id_persona` int(11) NOT NULL,
  `tipo_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `usuario`, `contraseña`, `id_persona`, `tipo_usuario`) VALUES
(1, 'admin', 'admin1', 3, 1),
(2, '10001', 'welcome1', 1, 2),
(3, '10002', 'welcome1', 2, 3),
(4, '10011', 'welcome1', 11, 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
