// package main

// import (
// 	"backend/models"
// 	"fmt"

// 	"gorm.io/driver/postgres"
// 	"gorm.io/gorm"
// )

// var db *gorm.DB
// var err error

// func connectDB() {

// 	host := "localhost"
// 	user := "postgres"
// 	password := "123456"
// 	dbName := "auto_auction"
// 	port := 5432

// 	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%d sslmode=disable TimeZone=Europe/London", host, user, password, dbName, port)
// 	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

// 	if err != nil {
// 		panic(err)
// 	}

// }

// func migrate() {
// 	db.AutoMigrate(&models.User{})
// }

// func returnDB() *gorm.DB {
// 	return db
// }
