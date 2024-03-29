package config

import (
	"backend/models"
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var db *gorm.DB
var err error

func DatabaseInit() {
	host := "localhost"
	user := "postgres"
	password := "123456"
	dbName := "auto_auction"
	port := 5432

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%d sslmode=disable TimeZone=Europe/London", host, user, password, dbName, port)
	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err)
	}

	//
}

func ReturnDB() *gorm.DB {
	return db
}

func Migrate() {
	db.AutoMigrate(&models.User{}, &models.Auction{}, &models.Car{}, &models.Image{})
}
