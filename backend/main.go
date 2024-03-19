package main

import (
	"backend/config"
	"backend/controller"

	"github.com/labstack/echo/v4"
)

func main() {

	e := echo.New()

	config.DatabaseInit()

	e.POST("/user", controller.SaveUser)
	e.GET("/login", controller.LoginUser)

	e.Logger.Fatal(e.Start(":1323"))

}
