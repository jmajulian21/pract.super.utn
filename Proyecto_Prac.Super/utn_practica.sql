-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-07-2019 a las 23:21:48
-- Versión del servidor: 10.1.40-MariaDB
-- Versión de PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `utn_practica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `id_alumno` int(11) NOT NULL,
  `id_persona` int(11) DEFAULT NULL,
  `legajo` int(11) NOT NULL,
  `egresadoDe` varchar(35) NOT NULL,
  `titulo` varchar(35) NOT NULL,
  `promedio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`id_alumno`, `id_persona`, `legajo`, `egresadoDe`, `titulo`, `promedio`) VALUES
(1, 1, 1001, 'Escuela Tecnica N1', 'Bachiller en Economia', 9),
(2, 2, 1002, 'Escuela N°5', 'Secundario Normal', 7),
(0, NULL, 1000, '', '', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno_inscripto`
--

CREATE TABLE `alumno_inscripto` (
  `id_alumno_inscripto` int(11) NOT NULL,
  `id_asignacion` int(11) NOT NULL,
  `id_fecha_clase` int(11) NOT NULL,
  `id_alumno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `alumno_inscripto`
--

INSERT INTO `alumno_inscripto` (`id_alumno_inscripto`, `id_asignacion`, `id_fecha_clase`, `id_alumno`) VALUES
(1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignacion`
--

CREATE TABLE `asignacion` (
  `id_asignacion` int(11) NOT NULL,
  `id_materia` int(11) NOT NULL,
  `id_carrera` int(11) NOT NULL,
  `id_curso` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `asignacion`
--

INSERT INTO `asignacion` (`id_asignacion`, `id_materia`, `id_carrera`, `id_curso`) VALUES
(1, 1, 1, 1);

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
(1, 'Tecnico Superior en Programacion');

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
(1, '1A', 'M');

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
(1, 'Lunes'),
(2, 'Martes'),
(3, 'Miercoles'),
(4, 'Jueves'),
(5, 'Viernes'),
(6, 'Sabado');

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
(3, '20:30HS', '22:30HS', 'N');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `id_materia` int(11) NOT NULL,
  `materia` varchar(45) NOT NULL
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
(11, 'Elemento de Investigacion Operativa'),
(12, 'Programacion III'),
(13, 'Laboratorio de Computacion III'),
(14, 'Organizacion Operativa III'),
(15, 'Organizacion Contable de la Empresa'),
(16, 'Organizacion Empresarial'),
(17, 'Diseño y Administracion de Bases de Datos'),
(18, 'Laboratorio de Computacion IV'),
(19, 'Legislacion'),
(20, 'Metodologia en Sistemas I'),
(21, 'Metodologia de Sistemas II'),
(22, 'Programacion Avanzada I'),
(23, 'Laboratorio de Computacion V'),
(24, 'Bases de Datos II'),
(25, 'Matematica II'),
(26, 'Redes'),
(27, 'Ingles Tecnico Avanzado I'),
(28, 'Administracion y Direccion de Poryectos Infor'),
(29, 'Metodologia de Sistemas III'),
(30, 'Investigacion Operativa II'),
(31, 'Ingles Tecnico Avanzado II'),
(32, 'Matematica III'),
(33, 'Programacion Avanzada II'),
(34, 'Seminario'),
(35, 'Practica Supervisada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id_persona` int(11) NOT NULL,
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
  `email` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id_persona`, `nombre`, `apellido`, `tipoDoc`, `nroDoc`, `fechNacimiento`, `sexo`, `direccion`, `piso`, `codPostal`, `localidad`, `telefono`, `celular`, `email`) VALUES
(1, 'Julian A.', 'Moreno', 1, '37659989', '1993-07-15', 'M', 'Lisandro de la torre', '1273', 1838, 4, '42969001', '157699504', 'asd@asd.com'),
(2, 'Fernando', 'Insua', NULL, '36545665', '1992-04-25', 'M', 'Lisandro de la torre 1232', '4', 2322, NULL, NULL, NULL, NULL),
(3, 'Juan', 'Perez', 1, '34231233', '0000-00-00', '', '', '', 0, 0, '', '', ''),
(4, 'Jose', 'Fernandez', 1, '23456789', NULL, 'M', 'XXX XXX', '5A', 1454, 0, '432243324', '324234234', 'fernandez.jose@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesor`
--

CREATE TABLE `profesor` (
  `id_profesor` int(11) NOT NULL,
  `id_persona` int(11) DEFAULT NULL,
  `legajo` int(11) DEFAULT NULL,
  `egresadoDe` varchar(45) DEFAULT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `promedio` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `profesor`
--

INSERT INTO `profesor` (`id_profesor`, `id_persona`, `legajo`, `egresadoDe`, `titulo`, `promedio`) VALUES
(1, NULL, 1000, NULL, NULL, NULL),
(0, 4, 1001, 'XXXX .XXX', 'XXXX.XXX', 8);

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
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `usuario` varchar(35) NOT NULL,
  `contraseña` varchar(45) NOT NULL,
  `id_persona` int(11) NOT NULL,
  `tipo_usuario` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `usuario`, `contraseña`, `id_persona`, `tipo_usuario`) VALUES
(1, 'admin', 'admin1', 3, 'Admin'),
(2, '1001', '23456789', 4, 'Profesor');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
