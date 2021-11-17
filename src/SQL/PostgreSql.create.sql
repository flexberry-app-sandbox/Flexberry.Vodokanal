﻿




CREATE TABLE ВидРаботы (
 primaryKey UUID NOT NULL,
 Название VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Пункт (
 primaryKey UUID NOT NULL,
 Готово BOOLEAN NULL,
 Работа_m0 UUID NOT NULL,
 Задание_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Работа (
 primaryKey UUID NOT NULL,
 План INT NULL,
 Факт INT NULL,
 Заявка_m0 UUID NOT NULL,
 ВидРаботы_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Задание (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 Сотрудник_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Заявка (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 Адрес VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудник (
 primaryKey UUID NOT NULL,
 Фамилия VARCHAR(255) NULL,
 Имя VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Пункт ADD CONSTRAINT FKc8511e3037f49d2426f9b7d0703326ddfe7603c0 FOREIGN KEY (Работа_m0) REFERENCES Работа; 
CREATE INDEX Indexc8511e3037f49d2426f9b7d0703326ddfe7603c0 on Пункт (Работа_m0); 

 ALTER TABLE Пункт ADD CONSTRAINT FK174c2b9fe654e1e169708630e48511e95a4ee85c FOREIGN KEY (Задание_m0) REFERENCES Задание; 
CREATE INDEX Index174c2b9fe654e1e169708630e48511e95a4ee85c on Пункт (Задание_m0); 

 ALTER TABLE Работа ADD CONSTRAINT FK13c41d7aa3d720fa1ce39836f9e11650f9d2804f FOREIGN KEY (Заявка_m0) REFERENCES Заявка; 
CREATE INDEX Index13c41d7aa3d720fa1ce39836f9e11650f9d2804f on Работа (Заявка_m0); 

 ALTER TABLE Работа ADD CONSTRAINT FK97747c5ccaadb25721e705cdaf96e814aad8642b FOREIGN KEY (ВидРаботы_m0) REFERENCES ВидРаботы; 
CREATE INDEX Index97747c5ccaadb25721e705cdaf96e814aad8642b on Работа (ВидРаботы_m0); 

 ALTER TABLE Задание ADD CONSTRAINT FK29a17c90203001ee8280f7661c2b61a2328bda9a FOREIGN KEY (Сотрудник_m0) REFERENCES Сотрудник; 
CREATE INDEX Index29a17c90203001ee8280f7661c2b61a2328bda9a on Задание (Сотрудник_m0); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

