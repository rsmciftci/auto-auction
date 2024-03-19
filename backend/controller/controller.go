package controller

import (
	"backend/config"
	"backend/models"
	"fmt"
	"net/http"
	"time"

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

type UserWithouthPassword struct {
	ID      uint
	Name    string
	Surname string
	Email   string
	Phone   string
	Auction *[]models.Auction
	Dob     time.Time
}

func LoginUser(c echo.Context) error {
	db := config.ReturnDB()
	user := new(models.User)

	data := new(LoginData)
	c.Bind(data)

	fmt.Println(data)

	if data.Email == "" || data.Password == "" {
		return c.JSON(http.StatusBadRequest, "Email or Password cannot be null or!")
	}

	result := db.Where(&models.User{Email: data.Email, Password: data.Password}).Find(user)

	fmt.Println(user)
	fmt.Println(data)

	if result.RowsAffected == 0 {
		return c.JSON(http.StatusNotFound, "User not found")
	}

	userWithouthPassword := UserWithouthPassword{
		ID:      user.ID,
		Name:    user.Name,
		Surname: user.Surname,
		Email:   user.Email,
		Phone:   user.Phone,
		Auction: user.Auction,
		Dob:     user.Dob,
	}

	return c.JSON(http.StatusOK, userWithouthPassword)

}
