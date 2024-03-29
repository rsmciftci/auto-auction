package controller

import (
	"backend/config"
	"backend/models"
	"fmt"
	"net/http"
	"time"

	"github.com/labstack/echo/v4"
)

type Dto struct {
	Auction models.Auction
	Car     models.Car
}

func CreateAuctionCarAndImage(c echo.Context) error {
	// TODO : add savepoint
	db := config.ReturnDB()
	tx := db.Begin()

	dto := new(Dto)

	if err := c.Bind(&dto); err != nil {
		return err
	}

	auction := &dto.Auction
	tx.Create(&auction)

	car := &dto.Car
	car.AuctionID = auction.ID

	fmt.Println(&car.AuctionID)

	tx.Create(&car)
	tx.Commit()

	return c.JSON(http.StatusOK, auction)
}

func FindAuctionById(c echo.Context) error {

	id := c.Param("id")

	db := config.ReturnDB()

	auction := new(models.Auction)

	result := db.Preload("Images").Preload("Car").First(&auction, id)

	if result.Error != nil {
		return c.JSON(http.StatusBadRequest, "Something went wrong!")
	}

	return c.JSON(http.StatusOK, &auction)

}

func FindAuctionsEndingSoon(c echo.Context) error {

	db := config.ReturnDB()

	auctions := new([]models.Auction)

	result := db.Where("end_time > ?", time.Now()).Order("end_time asc").Preload("Images").Preload("Car").Find(auctions)

	if result.Error != nil {
		return result.Error
	}

	return c.JSON(http.StatusOK, &auctions)

}

func FindAuctionsByUserId(c echo.Context) error {

	userId := c.Param("id")

	db := config.ReturnDB()

	auctions := new([]models.Auction)

	result := db.Where("user_id =?", userId).Preload("Images").Preload("Car").Find(auctions)

	if result.Error != nil {
		return result.Error
	}

	return c.JSON(http.StatusOK, &auctions)

}
