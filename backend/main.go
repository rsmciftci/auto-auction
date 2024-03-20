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

	e.POST("/user", controller.SaveUser)
	e.POST("/login", controller.LoginUser)

	e.Logger.Fatal(e.Start(":1323"))

}
