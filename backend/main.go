package main

import (
	"backend/config"
	"backend/controller"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {

	e := echo.New()
	e.Use(middleware.CORSWithConfig(
		middleware.CORSConfig{
			AllowOrigins: []string{"http://localhost:3000", "https://localhost:3000"},
			AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
		},
	))

	config.DatabaseInit()
	config.Migrate()

	e.Static("/images", "images")
	e.POST("/user", controller.SaveUser)
	e.POST("/login", controller.LoginUser)

	e.POST("/create-auction-car-images", controller.CreateAuctionCarAndImage)

	e.POST("/upload", controller.SaveImage)

	e.GET("/auction/:id", controller.FindAuctionById)

	e.Logger.Fatal(e.Start(":1323"))

}
