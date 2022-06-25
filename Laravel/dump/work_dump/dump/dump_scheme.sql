-- MySQL dump 10.10
--
-- Host: 127.0.0.1    Database: test
-- ------------------------------------------------------
-- Server version	5.5.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES latin1 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `avtozakaz_mediagroup`
--

DROP TABLE IF EXISTS `avtozakaz_mediagroup`;
CREATE TABLE `avtozakaz_mediagroup` (
  `id` int(10) DEFAULT NULL,
  `id_client` bigint(20) DEFAULT NULL,
  `media_group_id` bigint(20) DEFAULT NULL,
  `format_file` varchar(20) DEFAULT NULL,
  `file_id` varchar(200) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `avtozakaz_ojidanie`
--

DROP TABLE IF EXISTS `avtozakaz_ojidanie`;
CREATE TABLE `avtozakaz_ojidanie` (
  `id_client` bigint(20) DEFAULT NULL,
  `ojidanie` varchar(200) DEFAULT NULL,
  `last` varchar(200) DEFAULT NULL,
  `flag` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `avtozakaz_pzmarket`
--

DROP TABLE IF EXISTS `avtozakaz_pzmarket`;
CREATE TABLE `avtozakaz_pzmarket` (
  `id_client` bigint(20) DEFAULT NULL,
  `id_zakaz` varchar(50) DEFAULT NULL,
  `kuplu_prodam` varchar(100) DEFAULT NULL,
  `nazvanie` varchar(500) DEFAULT NULL,
  `url_nazv` varchar(200) DEFAULT NULL,
  `valuta` varchar(100) DEFAULT NULL,
  `gorod` varchar(200) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `doverie` tinyint(1) DEFAULT NULL,
  `otdel` varchar(100) DEFAULT NULL,
  `format_file` varchar(20) DEFAULT NULL,
  `file_id` varchar(200) DEFAULT NULL,
  `url_podrobno` varchar(200) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `podrobno` blob,
  `url_tgraph` varchar(200) DEFAULT NULL,
  `foto_album` tinyint(1) DEFAULT NULL,
  `url_info_bot` varchar(200) DEFAULT NULL,
  `date` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `avtozakaz_users`
--

DROP TABLE IF EXISTS `avtozakaz_users`;
CREATE TABLE `avtozakaz_users` (
  `id_client` bigint(20) DEFAULT NULL,
  `first_name` varchar(500) DEFAULT NULL,
  `last_name` varchar(500) DEFAULT NULL,
  `user_name` varchar(200) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `chat_garant`
--

DROP TABLE IF EXISTS `chat_garant`;
CREATE TABLE `chat_garant` (
  `id_p2p` bigint(20) NOT NULL AUTO_INCREMENT,
  `id_garant` bigint(20) DEFAULT NULL,
  `garant_username` varchar(30) DEFAULT NULL,
  `id_chat` bigint(20) DEFAULT NULL,
  `chat_url` varchar(30) DEFAULT NULL,
  `id_admin_group` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id_p2p`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `culc`
--

DROP TABLE IF EXISTS `culc`;
CREATE TABLE `culc` (
  `id_client` int(20) DEFAULT NULL,
  `id` int(20) DEFAULT NULL,
  `knopka` varchar(10) DEFAULT NULL,
  `flag` tinyint(1) NOT NULL DEFAULT '0',
  `zpt` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `garant_users`
--

DROP TABLE IF EXISTS `garant_users`;
CREATE TABLE `garant_users` (
  `id_client` int(20) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `flag` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `info_users`
--

DROP TABLE IF EXISTS `info_users`;
CREATE TABLE `info_users` (
  `id_client` bigint(20) DEFAULT NULL,
  `first_name` varchar(500) DEFAULT NULL,
  `last_name` varchar(500) DEFAULT NULL,
  `user_name` varchar(200) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Table structure for table `obrabotka_zayavok`
--

DROP TABLE IF EXISTS `obrabotka_zayavok`;
CREATE TABLE `obrabotka_zayavok` (
  `id_client` int(20) DEFAULT NULL,
  `id_zakaz` varchar(20) DEFAULT NULL,
  `vibor` varchar(20) DEFAULT NULL,
  `monet` varchar(20) DEFAULT NULL,
  `kol_monet` double DEFAULT NULL,
  `valuta` varchar(20) DEFAULT NULL,
  `cena` double DEFAULT NULL,
  `itog` double DEFAULT NULL,
  `bank` text,
  `flag_isp` tinyint(1) DEFAULT NULL,
  `id_chat` bigint(20) DEFAULT NULL,
  `id_admin_chat` bigint(20) DEFAULT NULL,
  `client_username` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `pzmarkt`
--

DROP TABLE IF EXISTS `pzmarkt`;
CREATE TABLE `pzmarkt` (
  `id` int(20) NOT NULL,
  `otdel` varchar(100) DEFAULT NULL,
  `format` varchar(20) DEFAULT NULL,
  `file_id` varchar(100) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `kuplu_prodam` varchar(100) DEFAULT NULL,
  `nazvanie` varchar(255) DEFAULT NULL,
  `valuta` varchar(100) DEFAULT NULL,
  `gorod` varchar(200) DEFAULT NULL,
  `username` varchar(200) DEFAULT NULL,
  `doverie` varchar(100) DEFAULT NULL,
  `podrobno` varchar(100) DEFAULT NULL,
  `time` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `temp`
--

DROP TABLE IF EXISTS `temp`;
CREATE TABLE `temp` (
  `ttt` int(11) NOT NULL,
  `ttteeest` int(11) NOT NULL,
  `qqq` varchar(100) DEFAULT NULL,
  `ww` varchar(100) DEFAULT NULL,
  `fffff` int(11) NOT NULL,
  `rrrrrrr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `test_table1`
--

DROP TABLE IF EXISTS `test_table1`;
CREATE TABLE `test_table1` (
  `a` int(11) NOT NULL,
  `b` int(11) NOT NULL,
  `c` int(11) NOT NULL,
  `d` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `test_table2`
--

DROP TABLE IF EXISTS `test_table2`;
CREATE TABLE `test_table2` (
  `a` int(11) NOT NULL,
  `b` int(11) NOT NULL,
  `c` int(11) NOT NULL,
  `d` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(20) DEFAULT NULL,
  `id_client` int(20) DEFAULT NULL,
  `name_client` varchar(15) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `flag` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `zakaz_message`
--

DROP TABLE IF EXISTS `zakaz_message`;
CREATE TABLE `zakaz_message` (
  `client_id` bigint(20) DEFAULT NULL,
  `message_id_in` bigint(20) DEFAULT NULL,
  `message_id_out` bigint(20) DEFAULT NULL,
  `date` int(20) DEFAULT NULL,
  `flag` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `zakaz_users`
--

DROP TABLE IF EXISTS `zakaz_users`;
CREATE TABLE `zakaz_users` (
  `id_client` bigint(20) DEFAULT NULL,
  `first_name` varchar(500) DEFAULT NULL,
  `last_name` varchar(500) DEFAULT NULL,
  `user_name` varchar(200) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `zayavka`
--

DROP TABLE IF EXISTS `zayavka`;
CREATE TABLE `zayavka` (
  `id_client` int(20) DEFAULT NULL,
  `id_zakaz` int(20) DEFAULT NULL,
  `vibor` varchar(20) DEFAULT NULL,
  `monet` varchar(20) DEFAULT NULL,
  `kol_monet` double DEFAULT NULL,
  `valuta` varchar(20) DEFAULT NULL,
  `cena` double DEFAULT NULL,
  `itog` double DEFAULT NULL,
  `bank` text,
  `flag_isp` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

