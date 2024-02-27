CREATE DATABASE  IF NOT EXISTS `dripstore` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `dripstore`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: dripstore
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `produto_base`
--

DROP TABLE IF EXISTS `produto_base`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto_base` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(30) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `marca_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `marca_id` (`marca_id`),
  CONSTRAINT `produto_base_ibfk_1` FOREIGN KEY (`marca_id`) REFERENCES `marca` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto_base`
--

LOCK TABLES `produto_base` WRITE;
/*!40000 ALTER TABLE `produto_base` DISABLE KEYS */;
INSERT INTO `produto_base` VALUES (1,'Tênis','Air Max',NULL),(2,'Tênis','Ultraboost',NULL),(3,'Tênis','RS-X',NULL),(4,'Tênis','990',NULL),(5,'Tênis','Old Skool',NULL),(6,'Tênis','Classic',NULL),(7,'Tênis','Chuck Taylor',NULL),(8,'Tênis','Gel-Kayano',NULL),(9,'Tênis','Air Max',NULL),(10,'Tênis','Ultraboost',NULL),(11,'Tênis','RS-X',NULL),(12,'Tênis','990',NULL),(13,'Tênis','Old Skool',NULL),(14,'Tênis','Classic',NULL),(15,'Tênis','Chuck Taylor',NULL),(16,'Tênis','Gel-Kayano',NULL);
/*!40000 ALTER TABLE `produto_base` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-27 20:22:32
