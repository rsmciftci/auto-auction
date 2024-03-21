package controller

import (
	"backend/config"
	"backend/models"
	"fmt"
	"net/http"

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
