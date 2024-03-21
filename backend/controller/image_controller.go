package controller

import (
	"backend/config"
	"backend/models"
	"fmt"
	"io"
	"net/http"
	"os"
	"strconv"

	"github.com/labstack/echo/v4"
)

func SaveImage(c echo.Context) error {

	// db := config.ReturnDB()

	auctionID := c.FormValue("auctionId")
	db := config.ReturnDB()

	form, err := c.MultipartForm()
	if err != nil {
		return err
	}

	files := form.File["files"]

	err = os.MkdirAll("images/"+auctionID, os.ModePerm)
	if err != nil {
		return err
	}

	for _, file := range files {
		// Source
		src, err := file.Open()
		if err != nil {
			return err
		}
		defer src.Close()

		filePath := fmt.Sprintf("images/"+auctionID+"/%s", file.Filename)

		// Destination
		dst, err := os.Create(filePath)
		if err != nil {
			return err
		}

		defer dst.Close()

		// Copy
		if _, err = io.Copy(dst, src); err != nil {
			return err
		}

		auctionIduint64, err := strconv.ParseUint(auctionID, 10, 64)
		if err != nil {
			fmt.Println("Error:", err)
			return err
		}

		image := models.Image{
			AuctionID: uint(auctionIduint64),
			Path:      filePath,
		}

		if err := db.Create(&image).Error; err != nil {
			return err
		}

	}

	return c.HTML(http.StatusOK, fmt.Sprintf("<p>Uploaded successfully %d files.</p>", len(files)))

}
