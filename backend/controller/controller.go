package controller

import (
	"backend/config"
	"backend/models"
	"net/http"

	"github.com/labstack/echo/v4"
)

func SaveUser(c echo.Context) error {

	db := config.ReturnDB()

	user := new(models.User)

	if err := c.Bind(&user); err != nil {
		return err
	}

	result := db.Create(&user)

	if result.Error != nil {
		return c.JSON(http.StatusBadRequest, "Something went wrong!")
	}

	return c.JSON(http.StatusCreated, user)

}

type LoginData struct {
	Password string
	Email    string
}

func LoginUser(c echo.Context) error {
	db := config.ReturnDB()
	user := new(models.User)

	data := new(LoginData)
	c.Bind(data)

	result := db.Where(&models.User{Email: data.Email, Password: data.Password}).Find(user)

	if result.RowsAffected == 0 {
		return c.JSON(http.StatusNotFound, "User not found")
	}

	return c.JSON(http.StatusFound, user)

}
