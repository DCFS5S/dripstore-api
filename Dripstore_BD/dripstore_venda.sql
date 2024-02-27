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
-- Table structure for table `venda`
--

DROP TABLE IF EXISTS `venda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venda` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_venda` date DEFAULT NULL,
  `valor_total` decimal(20,2) NOT NULL,
  `metodo_pagamento` varchar(50) DEFAULT NULL,
  `status_da_venda` varchar(20) DEFAULT NULL,
  `valor_do_frete` float DEFAULT NULL,
  `cliente_id` int DEFAULT NULL,
  `cupom_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cliente_id` (`cliente_id`),
  KEY `cupom_id` (`cupom_id`),
  CONSTRAINT `venda_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`id`),
  CONSTRAINT `venda_ibfk_2` FOREIGN KEY (`cupom_id`) REFERENCES `cupom` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venda`
--

LOCK TABLES `venda` WRITE;
/*!40000 ALTER TABLE `venda` DISABLE KEYS */;
INSERT INTO `venda` VALUES (1,'2023-12-30',5000.00,'Dinheiro','Concluída',0,3,NULL),(2,NULL,120.00,'Débito','Concluída',0,1,NULL);
/*!40000 ALTER TABLE `venda` ENABLE KEYS */;
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
