package models

import "time"

type User struct {
	ID       uint
	Name     string
	Surname  string
	Email    string
	Password string
	Phone    string
	Auction  []Auction `gorm:"many2many:favorite_auctions"`
	Dob      time.Time

	// 	id
	// name
	// surname
	// email
	// password
	// phone
	// auctions
	// dob

}
