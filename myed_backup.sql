-- MySQL dump 10.16  Distrib 10.1.24-MariaDB, for Win32 (AMD64)
--
-- Host: localhost    Database: myed
-- ------------------------------------------------------
-- Server version	10.1.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2017_11_09_125423_create_quests_table',2),(4,'2017_11_09_125640_create_results_table',2),(5,'2017_11_09_132625_make_results_mark_nullable',3);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quests`
--

DROP TABLE IF EXISTS `quests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `quests` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quests`
--

LOCK TABLES `quests` WRITE;
/*!40000 ALTER TABLE `quests` DISABLE KEYS */;
INSERT INTO `quests` VALUES (1,'Curiosity - The Space Rover',0,'2017-11-09 02:16:16','2017-11-09 02:16:16'),(2,'The 4 Hour Work Week',0,'2017-11-09 02:17:03','2017-11-09 02:17:03'),(3,'Let\'s Learn about Economics',0,'2017-11-09 02:17:57','2017-11-09 02:17:57');
/*!40000 ALTER TABLE `quests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `results`
--

DROP TABLE IF EXISTS `results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `results` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `quest_id` int(10) unsigned NOT NULL,
  `submitted` tinyint(1) NOT NULL DEFAULT '0',
  `completion` int(10) unsigned NOT NULL DEFAULT '0',
  `mark` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `results`
--

LOCK TABLES `results` WRITE;
/*!40000 ALTER TABLE `results` DISABLE KEYS */;
INSERT INTO `results` VALUES (1,1,1,1,100,100,'2017-11-09 02:21:34','2017-11-09 02:21:34'),(2,1,2,1,55,NULL,'2017-11-09 02:23:27','2017-11-09 02:23:27'),(3,1,3,1,27,10,'2017-11-09 02:39:31','2017-11-09 02:39:31'),(4,2,2,1,75,NULL,'2017-11-09 02:40:46','2017-11-09 02:40:46'),(5,2,3,0,0,NULL,'2017-11-09 02:41:39','2017-11-09 02:41:39'),(6,3,1,1,85,15,'2017-11-09 02:42:45','2017-11-09 02:42:45'),(7,3,3,0,0,NULL,'2017-11-09 02:43:32','2017-11-09 02:43:32'),(8,4,1,1,67,80,'2017-11-09 02:44:28','2017-11-09 02:44:28'),(9,4,3,0,0,NULL,'2017-11-09 02:45:07','2017-11-09 02:45:07'),(10,5,1,1,100,100,'2017-11-09 02:46:00','2017-11-09 02:46:00'),(11,5,2,0,0,NULL,'2017-11-09 02:46:41','2017-11-09 02:46:41'),(12,5,3,1,40,65,'2017-11-09 02:47:12','2017-11-09 02:47:12');
/*!40000 ALTER TABLE `results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ryan Grey','ryan_grey@gmail.com','$2y$10$I2lYt0oAw7S9j/1.3BuyjOjzeIKSa.7NhAA1/hGOef2dYx/nJD0nS','F4pWgmalvbeMNFgJghPW3eZUt0B9cdSlidARMcHKK3ttSPZXf89RfnfvQjfZ','2017-11-09 02:11:51','2017-11-09 02:11:51'),(2,'Jacqueline Myers','jacqueline_myers@gmail.com','$2y$10$FF/Kd8Btie3LzvD/K2HNYOeXanaV8alh./pr2g0cmn/NXNhfhX8FW','qSlpCJS1CMvg836qs2xrybf6n1UCWVTHO3nyV6SD97eycUYw8hB051103Vjj','2017-11-09 02:12:45','2017-11-09 02:12:45'),(3,'Henry Bloggs','henry_bloggs@gmail.com','$2y$10$do8q4uX2Y9yQtOLEJ/hWBebaFxs6dy.p57L.XP3ct9hoflsNdrlr2','49TpZxCcmsd4rgzYDN54p3yVKURGH1NOIl0SheEBMpR5u9JVYAZTlJE4Xez9','2017-11-09 02:13:11','2017-11-09 02:13:11'),(4,'Michael McManns','michael_mcmanns@gmail.com','$2y$10$5QZHoPsPL3hk1Oi0Sr8QU.HJRR/G8hy0uUCwYiq4gUQieTabNPMg6','OI8hYwn2kVKbmpsw3qn6N1zpjPK1vrfbaRMghACavkubyunCYf2DYCJdXWEF','2017-11-09 02:13:38','2017-11-09 02:13:38'),(5,'Vanessa Riley','vanessa_riley@gmail.com','$2y$10$6PYMbxYAfjtxA/g8MuoocOS.1b6kmwM9x4hhpKJv3y1P4zwMdwA3O','0dQohxwpAOluoQC2Fe4HtcNSv6NWilbgRgUqaB3gyA35hpFGowjK1RcdPYkv','2017-11-09 02:14:07','2017-11-09 02:14:07');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-10 14:17:22
