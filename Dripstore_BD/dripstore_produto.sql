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
-- Table structure for table `produto`
--

DROP TABLE IF EXISTS `produto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `produto_base_id` int DEFAULT NULL,
  `imagem` varchar(300) DEFAULT NULL,
  `preco` decimal(10,2) NOT NULL,
  `desconto` decimal(10,0) DEFAULT NULL,
  `estoque` int DEFAULT NULL,
  `tamanho_id` int DEFAULT NULL,
  `cor_id` int DEFAULT NULL,
  `genero_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tamanho_id` (`tamanho_id`),
  KEY `cor_id` (`cor_id`),
  KEY `genero_id` (`genero_id`),
  KEY `produto_base_id` (`produto_base_id`),
  CONSTRAINT `produto_ibfk_1` FOREIGN KEY (`tamanho_id`) REFERENCES `tamanho` (`id`),
  CONSTRAINT `produto_ibfk_2` FOREIGN KEY (`cor_id`) REFERENCES `cor` (`id`),
  CONSTRAINT `produto_ibfk_3` FOREIGN KEY (`genero_id`) REFERENCES `genero` (`id`),
  CONSTRAINT `produto_ibfk_4` FOREIGN KEY (`produto_base_id`) REFERENCES `produto_base` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produto`
--

LOCK TABLES `produto` WRITE;
/*!40000 ALTER TABLE `produto` DISABLE KEYS */;
INSERT INTO `produto` VALUES (1,1,NULL,250.00,30,0,8,1,1),(2,2,NULL,120.00,NULL,9,7,2,1),(3,3,NULL,110.00,20,15,6,3,1),(4,4,NULL,130.00,NULL,5,7,4,1),(5,5,NULL,90.00,NULL,20,7,5,1),(6,6,NULL,280.00,NULL,8,9,6,1),(7,7,NULL,320.00,NULL,12,7,7,1),(8,8,NULL,300.00,NULL,6,10,8,1),(9,9,NULL,250.00,30,0,8,3,2),(10,10,NULL,120.00,NULL,10,6,6,2),(11,11,NULL,110.00,20,15,7,4,2),(12,12,NULL,130.00,NULL,5,5,4,2),(13,13,NULL,90.00,NULL,20,2,3,2),(14,14,NULL,280.00,NULL,8,7,1,3),(15,15,NULL,320.00,NULL,12,7,5,2),(16,16,NULL,300.00,NULL,6,1,8,2);
/*!40000 ALTER TABLE `produto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-27 20:22:31
