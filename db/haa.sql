-- phpMyAdmin SQL Dump
-- version 4.0.10.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 11, 2017 at 02:12 PM
-- Server version: 5.1.44
-- PHP Version: 5.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `haa`
--

-- --------------------------------------------------------

--
-- Table structure for table `appliances`
--

CREATE TABLE IF NOT EXISTS `appliances` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `v_name` varchar(20) NOT NULL,
  `v_location` varchar(100) NOT NULL,
  `t_status` text,
  `fk_created_by` int(11) NOT NULL,
  `fk_updated_by` int(11) NOT NULL,
  `createdAt` int(11) NOT NULL,
  `updatedAt` int(11) NOT NULL,
  `i_is_active` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_created_by` (`fk_created_by`,`fk_updated_by`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `appliances`
--

INSERT INTO `appliances` (`id`, `v_name`, `v_location`, `t_status`, `fk_created_by`, `fk_updated_by`, `createdAt`, `updatedAt`, `i_is_active`) VALUES
(1, 'Bulb', 'TV Lounge', '{"Switch":"ON"}', 1, 1, 1499578926, 2017, 1),
(2, 'Bulb', 'Bed Room', NULL, 1, 1, 1499578926, 1499578926, 1),
(3, 'Bulb', 'Wash Room', NULL, 1, 1, 1499578926, 1499578926, 1),
(4, 'Tube Light', 'TV Lounge', '{"Switch":"OFF","Brightness":5}', 1, 1, 1499578926, 2017, 1),
(5, 'Tube Light', 'Bed Room', '{"Switch":"ON","Brightness":6}', 1, 1, 1499578926, 2017, 1),
(6, 'Tube Light', 'Bed Room', NULL, 1, 1, 1499578926, 1499578926, 0),
(7, 'AC', 'TV Lounge', '{"Switch":"OFF","Temprature":20,"Fan":2,"Swing":"OFF"}', 1, 1, 1499578926, 2017, 1),
(8, 'AC', 'Bed Room', NULL, 1, 1, 1499578926, 1499578926, 1),
(9, 'TV', 'TV Lounge', '{"Switch":"OFF","Channels":7,"Volume":25,"Brightness":50,"Color":50,"Contrast":50}', 1, 1, 1499578926, 2017, 1),
(10, 'Fridge', 'Kitchen', NULL, 1, 1, 1499578926, 1499578926, 1),
(11, 'Fan', 'TV Lounge', '{"Switch":"ON","Speed":3}', 1, 1, 1499578926, 2017, 1),
(12, 'Fan', 'Bed Room', NULL, 1, 1, 1499578926, 1499578926, 1),
(13, 'Bulb', 'Kitchen', '{"Switch":"ON"}', 1, 1, 1499578926, 2017, 1),
(14, 'Tube Light', 'Kitchen', NULL, 1, 1, 1499578926, 1499578926, 1),
(15, 'Fan', 'Kitchen', '{"Switch":"OFF","Speed":3}', 1, 1, 1499578926, 2017, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `v_username` varchar(20) NOT NULL,
  `v_password` varchar(255) NOT NULL,
  `v_full_name` varchar(50) NOT NULL,
  `v_api_key` varchar(100) NOT NULL,
  `fk_created_by` int(11) NOT NULL,
  `fk_updated_by` int(11) NOT NULL,
  `createdAt` int(11) NOT NULL,
  `updatedAt` int(11) NOT NULL,
  `i_is_active` tinyint(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `v_username` (`v_username`),
  KEY `fk_created_by` (`fk_created_by`,`fk_updated_by`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `v_username`, `v_password`, `v_full_name`, `v_api_key`, `fk_created_by`, `fk_updated_by`, `createdAt`, `updatedAt`, `i_is_active`) VALUES
(1, 'root', '123', 'Root User', 'j4xp4vvy06hh327ebb5acurk', 1, 1, 1499222670, 2017, 1),
(2, 'farid', '123', 'Farid', '', 1, 1, 1499578926, 1499578926, 1),
(3, 'hamza', '123', 'Hamza', '', 1, 1, 1499578926, 1499578926, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_appliances`
--

CREATE TABLE IF NOT EXISTS `user_appliances` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fk_user_id` int(11) NOT NULL,
  `fk_appliance_id` int(11) NOT NULL,
  `fk_created_by` int(11) NOT NULL,
  `fk_updated_by` int(11) NOT NULL,
  `createdAt` int(11) NOT NULL,
  `UpdatedAt` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_id` (`fk_user_id`),
  KEY `fk_appliance_id` (`fk_appliance_id`),
  KEY `fk_created_by_id` (`fk_created_by`),
  KEY `fk_updated_by_id` (`fk_updated_by`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=110 ;

--
-- Dumping data for table `user_appliances`
--

INSERT INTO `user_appliances` (`id`, `fk_user_id`, `fk_appliance_id`, `fk_created_by`, `fk_updated_by`, `createdAt`, `UpdatedAt`) VALUES
(109, 1, 13, 1, 1, 2017, 2017),
(108, 1, 14, 1, 1, 2017, 2017),
(107, 1, 15, 1, 1, 2017, 2017),
(106, 1, 4, 1, 1, 2017, 2017),
(105, 1, 7, 1, 1, 2017, 2017),
(104, 1, 11, 1, 1, 2017, 2017),
(103, 1, 9, 1, 1, 2017, 2017),
(102, 1, 1, 1, 1, 2017, 2017);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
