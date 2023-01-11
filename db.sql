-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: minicrm
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `lead_status`
--

DROP TABLE IF EXISTS `lead_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lead_status` (
  `status_id` int NOT NULL AUTO_INCREMENT,
  `status_name` varchar(20) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lead_status`
--

LOCK TABLES `lead_status` WRITE;
/*!40000 ALTER TABLE `lead_status` DISABLE KEYS */;
INSERT INTO `lead_status` VALUES (1,'New Lead'),(2,'Contacted'),(3,'Not interested');
/*!40000 ALTER TABLE `lead_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lead_table`
--

DROP TABLE IF EXISTS `lead_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lead_table` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8mb3_unicode_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb3_unicode_ci NOT NULL,
  `event_date` varchar(20) COLLATE utf8mb3_unicode_ci NOT NULL,
  `email` varchar(20) COLLATE utf8mb3_unicode_ci NOT NULL,
  `location` varchar(20) COLLATE utf8mb3_unicode_ci NOT NULL,
  `LeadStatus` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `Lead_status_idx` (`LeadStatus`),
  CONSTRAINT `Lead_status` FOREIGN KEY (`LeadStatus`) REFERENCES `lead_status` (`status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lead_table`
--

LOCK TABLES `lead_table` WRITE;
/*!40000 ALTER TABLE `lead_table` DISABLE KEYS */;
INSERT INTO `lead_table` VALUES (6,'Miri','054624137','2023-01-11','mirifurman@gmail.com','Hadera',2),(7,'Yarden','0549854545','2023-01-12','yarden1032@gmail.com','Tel Aviv',3),(8,'Garfield','0546242137','2023-01-10','garfield@cat.com','Hadera',1);
/*!40000 ALTER TABLE `lead_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'minicrm'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-11 17:53:48
