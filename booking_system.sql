-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 02, 2020 at 06:18 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `booking_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(3, 'admin@dbms.com', 'c93ccd78b2076528346216b3b2f701e6');

-- --------------------------------------------------------

--
-- Table structure for table `bus`
--

CREATE TABLE `bus` (
  `id` int(100) NOT NULL,
  `busno` varchar(50) NOT NULL,
  `route` varchar(50) NOT NULL,
  `schedule` varchar(50) NOT NULL,
  `seatarrangement` varchar(15) NOT NULL,
  `price` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bus`
--

INSERT INTO `bus` (`id`, `busno`, `route`, `schedule`, `seatarrangement`, `price`) VALUES
(1, 'bus1', 'Jessore', 'Morning', '1', '700'),
(2, 'bus2', 'Jessore', 'Night', '2', '1200'),
(4, 'bus5', 'Khulna ', 'Morning', '1', '850'),
(5, 'bus3 ', 'Khulna', 'Night', '2', '1450'),
(6, 'bus4', 'Rangpur', 'Night', '2', '1800'),
(7, 'bus6', 'Rangpur', 'Morning', '1', '1200');

-- --------------------------------------------------------

--
-- Table structure for table `passenger`
--

CREATE TABLE `passenger` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phoneNumber` int(15) NOT NULL,
  `journeyID` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `passenger`
--

INSERT INTO `passenger` (`id`, `name`, `email`, `phoneNumber`, `journeyID`, `password`) VALUES
(2, 'Jakir alom', 'j_alom@gmail.com', 1552385734, '523', '$2y$10$2HsNUCpaKYfvJo6DYLMxC.DNjdSEJRcnaBt0RkNe4lTKTxjMtP2Im'),
(3, 'Rashed Khan', 'r_Khan@gmail.com', 1895467839, '234', '$2y$10$bnVFYZR3wCR9fTeEA2gZJurQ4HnBC/CYHLWOlje1UWamgTsO71JS.'),
(7, 'Jawad Kabir', 'JKabir@gmail.com', 87654676, '345', '26650f28483f8ffb99b360c616eb2dfd'),
(8, 'Labib Rahman', 'Labibstar@gmail.com', 1942808108, '', '57c3c4c7199aad44dabebddf06d40027'),
(9, 'Labib Rahman', 'Labibstar@gmail.com', 1942808108, '', '57c3c4c7199aad44dabebddf06d40027'),
(10, 'Labib Rahman', 'Labibstar@gmail.com', 1942808108, '', '57c3c4c7199aad44dabebddf06d40027');

-- --------------------------------------------------------

--
-- Table structure for table `ride`
--

CREATE TABLE `ride` (
  `id` int(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `destination` varchar(50) NOT NULL,
  `phoneNumber` int(50) NOT NULL,
  `noOfPass` int(10) NOT NULL,
  `travelTime` varchar(15) NOT NULL,
  `totalFare` int(100) NOT NULL,
  `ticketNo` int(100) NOT NULL,
  `date` date NOT NULL,
  `chosenSeat` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ride`
--

INSERT INTO `ride` (`id`, `name`, `email`, `destination`, `phoneNumber`, `noOfPass`, `travelTime`, `totalFare`, `ticketNo`, `date`, `chosenSeat`) VALUES
(1, 'Jahangir Alom', 'j_Alom@yahoo.com', 'Khulna', 2147483647, 2, '0', 2900, 5104, '2020-09-29', ''),
(10, 'Kamal Bhuiya', 'kamalb@gmail.com', 'Rangpur', 2147483647, 4, '0', 7200, 4915, '2020-10-01', ''),
(11, 'Kamal Bhuiya', 'kamalb@gmail.com', 'Khulna', 2147483647, 4, '0', 3400, 8998, '2020-09-30', ''),
(12, 'Kamal Bhuiya', 'kamalb@gmail.com', 'Khulna', 2147483647, 4, '0', 3400, 2204, '2020-10-01', ''),
(13, 'Jamal Bhuiyan', 'jamalb@gmail.com', 'Jessore', 2147483647, 4, '0', 4800, 5879, '2020-10-01', ''),
(14, 'Islam Sarkar', 'islam@gmail.com', 'Jessore', 182347856, 3, '0', 3600, 5073, '2020-10-01', ''),
(15, 'Islam Sarkar', 'islam@gmail.com', 'Jessore', 182347856, 3, 'Night', 3600, 904, '2020-10-01', 'D32D42D52'),
(16, 'Kamal Bhuiyan', 'kamalb@gmail.com', 'Rangpur', 2147483647, 2, 'Morning', 2400, 6700, '2020-10-01', 'A1A2'),
(20, 'Mamun Zaman', 'mamumz@gmail.com', 'Rangpur', 1642356789, 4, 'Morning', 7200, 3928, '2020-10-01', 'G3G4H3H4'),
(21, 'Labib Rahman', 'Labibstar@gmail.com', 'Rangpur', 1942808108, 2, 'Night', 3600, 5286, '2020-10-02', 'E12E22'),
(22, 'Nakib Anam', 'nakib101@gmail.com', 'Jessore', 2147483647, 2, 'Morning', 1400, 286, '2020-10-02', 'B3B4'),
(23, 'Kamal Bhuiya', 'kamalb@gmail.com', 'Khulna', 182347856, 3, 'Night', 4350, 9624, '2020-10-02', 'C32C42C52'),
(24, 'Jahangir Alom', 'j_Alom@yahoo.com', 'Jessore', 2147483647, 4, 'Morning', 2800, 5209, '2020-10-02', 'E1E2E3E4'),
(25, 'Halder Alamgir', 'h_alamgir@gmail.com', 'Khulna', 1726457234, 2, 'Morning', 1700, 224, '2020-10-03', 'B1B2');

-- --------------------------------------------------------

--
-- Table structure for table `route`
--

CREATE TABLE `route` (
  `id` int(100) NOT NULL,
  `routename` varchar(50) NOT NULL,
  `bus` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `route`
--

INSERT INTO `route` (`id`, `routename`, `bus`) VALUES
(2, 'Jessore', 'bus1,bus2'),
(3, 'Khulna', 'bus3, bus5'),
(4, 'Rangpur', 'bus4, bus6');

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `id` int(100) NOT NULL,
  `date` date NOT NULL,
  `route` varchar(10) NOT NULL,
  `travelTime` varchar(10) NOT NULL,
  `busno` varchar(10) NOT NULL,
  `seatarrangement` varchar(2) NOT NULL,
  `A1` varchar(10) NOT NULL DEFAULT 'Vacant',
  `A2` varchar(10) NOT NULL,
  `A3` varchar(10) NOT NULL,
  `A4` varchar(10) NOT NULL,
  `B1` varchar(10) NOT NULL,
  `B2` varchar(10) NOT NULL,
  `B3` varchar(10) NOT NULL,
  `B4` varchar(10) NOT NULL,
  `B5` varchar(10) NOT NULL,
  `C1` varchar(10) NOT NULL,
  `C2` varchar(10) NOT NULL,
  `C3` varchar(10) NOT NULL,
  `C4` varchar(10) NOT NULL,
  `C5` varchar(10) NOT NULL,
  `D1` varchar(10) NOT NULL,
  `D2` varchar(10) NOT NULL,
  `D3` varchar(10) NOT NULL,
  `D4` varchar(10) NOT NULL,
  `D5` varchar(10) NOT NULL,
  `E1` varchar(10) NOT NULL,
  `E2` varchar(10) NOT NULL,
  `E3` varchar(10) NOT NULL,
  `E4` varchar(10) NOT NULL,
  `E5` varchar(10) NOT NULL,
  `F1` varchar(10) NOT NULL,
  `F2` varchar(10) NOT NULL,
  `F3` varchar(10) NOT NULL,
  `F4` varchar(10) NOT NULL,
  `F5` varchar(10) NOT NULL,
  `G1` varchar(10) NOT NULL,
  `G2` varchar(10) NOT NULL,
  `G3` varchar(10) NOT NULL,
  `G4` varchar(10) NOT NULL,
  `G5` varchar(10) NOT NULL,
  `H1` varchar(10) NOT NULL,
  `H2` varchar(10) NOT NULL,
  `H3` varchar(10) NOT NULL,
  `H4` varchar(10) NOT NULL,
  `H5` varchar(10) NOT NULL,
  `I1` varchar(10) NOT NULL,
  `I2` varchar(10) NOT NULL,
  `I3` varchar(10) NOT NULL,
  `I4` varchar(10) NOT NULL,
  `I5` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `schedule`
--

INSERT INTO `schedule` (`id`, `date`, `route`, `travelTime`, `busno`, `seatarrangement`, `A1`, `A2`, `A3`, `A4`, `B1`, `B2`, `B3`, `B4`, `B5`, `C1`, `C2`, `C3`, `C4`, `C5`, `D1`, `D2`, `D3`, `D4`, `D5`, `E1`, `E2`, `E3`, `E4`, `E5`, `F1`, `F2`, `F3`, `F4`, `F5`, `G1`, `G2`, `G3`, `G4`, `G5`, `H1`, `H2`, `H3`, `H4`, `H5`, `I1`, `I2`, `I3`, `I4`, `I5`) VALUES
(1, '2020-10-01', 'Jessore', 'Night', 'bus2', '2', 'Booked', 'Booked', 'NULL', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Booked', 'Booked', 'Booked', 'Booked', 'Vacant', 'Vacant', 'Booked', 'Booked', 'Booked', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'),
(2, '2020-10-01', 'Khulna', 'Night', 'bus3', '2', 'Vacant', 'Vacant', 'NULL', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Booked', 'Booked', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'),
(3, '2020-10-01', 'Rangpur', 'Night', 'bus4', '2', 'Vacant', 'Vacant', 'NULL', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'),
(4, '2020-10-01', 'Jessore', 'Morning', 'bus1', '1', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant'),
(5, '2020-10-01', 'Khulna', 'Morning', 'bus5', '1', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Booked', 'Booked', 'Vacant', 'Vacant', 'NULL', 'Booked', 'Booked', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant'),
(6, '2020-10-01', 'Rangpur', 'Morning', 'bus6', '1', 'Booked', 'Booked', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Booked', 'Booked', 'Booked', 'Booked', 'NULL', 'Booked', 'Booked', 'Booked', 'Booked', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant'),
(8, '2020-10-02', 'Jessore', 'Night', 'bus2', '2', 'Vacant', 'Vacant', 'NULL', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'),
(9, '2020-10-02', 'Khulna', 'Night', 'bus3', '2', 'Vacant', 'Vacant', 'NULL', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Booked', 'Booked', 'Booked', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'),
(10, '2020-10-02', 'Rangpur', 'Night', 'bus4', '2', 'Vacant', 'Vacant', 'NULL', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Booked', 'Booked', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'),
(11, '2020-10-02', 'Jessore', 'Morning', 'bus1', '1', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Booked', 'Booked', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Booked', 'Booked', 'Booked', 'Booked', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant'),
(12, '2020-10-02', 'Khulna', 'Morning', 'bus5', '1', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant'),
(13, '2020-10-02', 'Rangpur', 'Morning', 'bus6', '1', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant'),
(14, '2020-10-03', 'Jessore', 'Night', 'bus2', '2', 'Vacant', 'Vacant', 'NULL', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'),
(15, '2020-10-03', 'Khulna', 'Night', 'bus3', '2', 'Vacant', 'Vacant', 'NULL', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'),
(16, '2020-10-03', 'Rangpur', 'Night', 'bus4', '2', 'Vacant', 'Vacant', 'NULL', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'NULL', 'NULL', 'NULL', 'NULL'),
(17, '2020-10-03', 'Jessore', 'Morning', 'bus1', '1', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant'),
(18, '2020-10-03', 'Khulna', 'Morning', 'bus5', '1', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Booked', 'Booked', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant'),
(19, '2020-10-03', 'Rangpur', 'Morning', 'bus6', '1', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'NULL', 'Vacant', 'Vacant', 'Vacant', 'Vacant', 'Vacant');

-- --------------------------------------------------------

--
-- Table structure for table `ticketmaster`
--

CREATE TABLE `ticketmaster` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ticketmaster`
--

INSERT INTO `ticketmaster` (`id`, `email`, `password`) VALUES
(1, 'ticketmaster@dbms.com', '0020ad550e112f931fb36a79f81bb80a');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bus`
--
ALTER TABLE `bus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `passenger`
--
ALTER TABLE `passenger`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ride`
--
ALTER TABLE `ride`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `route`
--
ALTER TABLE `route`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ticketmaster`
--
ALTER TABLE `ticketmaster`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `bus`
--
ALTER TABLE `bus`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `passenger`
--
ALTER TABLE `passenger`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `ride`
--
ALTER TABLE `ride`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `route`
--
ALTER TABLE `route`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `ticketmaster`
--
ALTER TABLE `ticketmaster`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
