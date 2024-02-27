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
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `email` varchar(30) DEFAULT NULL,
  `celular` varchar(14) DEFAULT NULL,
  `logradouro` varchar(40) DEFAULT NULL,
  `numero_residencial` varchar(5) DEFAULT NULL,
  `bairro` varchar(15) DEFAULT NULL,
  `cidade` varchar(15) DEFAULT NULL,
  `cep` varchar(10) DEFAULT NULL,
  `complemento` varchar(30) DEFAULT NULL,
  `data_de_cadastro` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` VALUES (1,'Maria de Souza','985.678.234-90','mariazinha@gmail.com','(85)9956.08904','Rua das Margaridas','2589','Beira Mar','Fortaleza','60.672-046','Apto 302','2023-10-17'),(2,'João da Silva','805.451.789-33','joao45@gmail.com','(44)98678-0923','Rua Principal','106','Centro','Maringá','60.345-678','Apto 101','2023-10-30'),(3,'Andreson Moura','996.091.719-20','and_mou@hotmail.com','(11)99876-0478','Avenida Paulista','80','Bela Vista','São Paulo','60.960-120','Casa','2023-11-07'),(4,'Ana Lúcia de Souza Andrade','870.409.152-00','anitta@yahoo.com.br','(85)98867-3041','Rua Central','106','Dunas','Fortaleza','60.850-321','Apto 2010','2023-12-29'),(5,'Daniel dos Santos Nóbrega','340.091.404-09','daniel19@gmail.com','(11)98998-5971','Avenida Leblon','5556','Socorro','São Paulo','60.891-778','Apto 1001','2024-01-22'),(6,'José Maria do Nasciemnto','555.459.702-70','zemaria@yahoo.com','(21)98468-5689','Avenida América','106','Centro','Rio de Janeiro','60.560-185','Casa','2024-01-22'),(7,'Milena Rodrigues da Silva','900.307.089-42','milena@gmail.com','(85)99734-9210','Rua Principal','106','Praia do Futuro','Fortaleza','60.490-803','Perto da Barraca do João','2024-02-01');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
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
