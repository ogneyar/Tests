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
-- Dumping data for table `avtozakaz_mediagroup`
--


/*!40000 ALTER TABLE `avtozakaz_mediagroup` DISABLE KEYS */;
LOCK TABLES `avtozakaz_mediagroup` WRITE;
UNLOCK TABLES;
/*!40000 ALTER TABLE `avtozakaz_mediagroup` ENABLE KEYS */;

--
-- Dumping data for table `avtozakaz_ojidanie`
--


/*!40000 ALTER TABLE `avtozakaz_ojidanie` DISABLE KEYS */;
LOCK TABLES `avtozakaz_ojidanie` WRITE;
UNLOCK TABLES;
/*!40000 ALTER TABLE `avtozakaz_ojidanie` ENABLE KEYS */;

--
-- Dumping data for table `avtozakaz_pzmarket`
--


/*!40000 ALTER TABLE `avtozakaz_pzmarket` DISABLE KEYS */;
LOCK TABLES `avtozakaz_pzmarket` WRITE;
UNLOCK TABLES;
/*!40000 ALTER TABLE `avtozakaz_pzmarket` ENABLE KEYS */;

--
-- Dumping data for table `avtozakaz_users`
--


/*!40000 ALTER TABLE `avtozakaz_users` DISABLE KEYS */;
LOCK TABLES `avtozakaz_users` WRITE;
INSERT INTO `avtozakaz_users` VALUES (351009636,'Ogneyar',NULL,'@Ogneyar_ya','admin');
INSERT INTO `avtozakaz_users` VALUES (298466355,'Otrad',NULL,'@Otrad_ya','admin');
INSERT INTO `avtozakaz_users` VALUES (276795315,'Rada',NULL,'@DJRADA','admin');
UNLOCK TABLES;
/*!40000 ALTER TABLE `avtozakaz_users` ENABLE KEYS */;

--
-- Dumping data for table `chat_garant`
--


/*!40000 ALTER TABLE `chat_garant` DISABLE KEYS */;
LOCK TABLES `chat_garant` WRITE;
UNLOCK TABLES;
/*!40000 ALTER TABLE `chat_garant` ENABLE KEYS */;

--
-- Dumping data for table `culc`
--


/*!40000 ALTER TABLE `culc` DISABLE KEYS */;
LOCK TABLES `culc` WRITE;
UNLOCK TABLES;
/*!40000 ALTER TABLE `culc` ENABLE KEYS */;

--
-- Dumping data for table `garant_users`
--


/*!40000 ALTER TABLE `garant_users` DISABLE KEYS */;
LOCK TABLES `garant_users` WRITE;
UNLOCK TABLES;
/*!40000 ALTER TABLE `garant_users` ENABLE KEYS */;

--
-- Dumping data for table `info_users`
--


/*!40000 ALTER TABLE `info_users` DISABLE KEYS */;
LOCK TABLES `info_users` WRITE;
INSERT INTO `info_users` VALUES (351009636,'????????','','Ogneyar','admin');
INSERT INTO `info_users` VALUES (298466355,'??????','','Otrad','admin');
UNLOCK TABLES;
/*!40000 ALTER TABLE `info_users` ENABLE KEYS */;

--
-- Dumping data for table `migrations`
--


/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
LOCK TABLES `migrations` WRITE;
UNLOCK TABLES;
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

--
-- Dumping data for table `obrabotka_zayavok`
--


/*!40000 ALTER TABLE `obrabotka_zayavok` DISABLE KEYS */;
LOCK TABLES `obrabotka_zayavok` WRITE;
UNLOCK TABLES;
/*!40000 ALTER TABLE `obrabotka_zayavok` ENABLE KEYS */;

--
-- Dumping data for table `pzmarkt`
--


/*!40000 ALTER TABLE `pzmarkt` DISABLE KEYS */;
LOCK TABLES `pzmarkt` WRITE;
UNLOCK TABLES;
/*!40000 ALTER TABLE `pzmarkt` ENABLE KEYS */;

--
-- Dumping data for table `temp`
--


/*!40000 ALTER TABLE `temp` DISABLE KEYS */;
LOCK TABLES `temp` WRITE;
INSERT INTO `temp` VALUES (1,1,'mmm','mmm',1,1);
INSERT INTO `temp` VALUES (1,1,'mmm','mmm',1,1);
INSERT INTO `temp` VALUES (0,0,'0','0',0,0);
INSERT INTO `temp` VALUES (1,2,'lll','mmm',2,1);
INSERT INTO `temp` VALUES (1,2,'lll','mmm',2,1);
INSERT INTO `temp` VALUES (12,21,'lll','mmm',22,11);
UNLOCK TABLES;
/*!40000 ALTER TABLE `temp` ENABLE KEYS */;

--
-- Dumping data for table `test_table1`
--


/*!40000 ALTER TABLE `test_table1` DISABLE KEYS */;
LOCK TABLES `test_table1` WRITE;
INSERT INTO `test_table1` VALUES (1,1,1,1);
INSERT INTO `test_table1` VALUES (2,2,2,2);
INSERT INTO `test_table1` VALUES (0,0,0,0);
INSERT INTO `test_table1` VALUES (0,0,0,0);
UNLOCK TABLES;
/*!40000 ALTER TABLE `test_table1` ENABLE KEYS */;

--
-- Dumping data for table `test_table2`
--


/*!40000 ALTER TABLE `test_table2` DISABLE KEYS */;
LOCK TABLES `test_table2` WRITE;
INSERT INTO `test_table2` VALUES (3,3,3,3);
INSERT INTO `test_table2` VALUES (4,4,4,4);
UNLOCK TABLES;
/*!40000 ALTER TABLE `test_table2` ENABLE KEYS */;

--
-- Dumping data for table `users`
--


/*!40000 ALTER TABLE `users` DISABLE KEYS */;
LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES (1,351009636,'Ogneyar','admin',0);
INSERT INTO `users` VALUES (2,298466355,'Otrad','admin',0);
UNLOCK TABLES;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

--
-- Dumping data for table `zakaz_message`
--


/*!40000 ALTER TABLE `zakaz_message` DISABLE KEYS */;
LOCK TABLES `zakaz_message` WRITE;
UNLOCK TABLES;
/*!40000 ALTER TABLE `zakaz_message` ENABLE KEYS */;

--
-- Dumping data for table `zakaz_users`
--


/*!40000 ALTER TABLE `zakaz_users` DISABLE KEYS */;
LOCK TABLES `zakaz_users` WRITE;
INSERT INTO `zakaz_users` VALUES (351009636,'Ogneyar','','@Ogneyar_ya','admin');
INSERT INTO `zakaz_users` VALUES (298466355,'Otrad','','@Otrad_ya','admin');
UNLOCK TABLES;
/*!40000 ALTER TABLE `zakaz_users` ENABLE KEYS */;

--
-- Dumping data for table `zayavka`
--


/*!40000 ALTER TABLE `zayavka` DISABLE KEYS */;
LOCK TABLES `zayavka` WRITE;
UNLOCK TABLES;
/*!40000 ALTER TABLE `zayavka` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

