package models

import (
	"time"
)

// func (ct *CustomTime) UnmarshalJSON(data []byte) error {
// 	t, err := time.Parse(`"2006-01-02"`, string(data))
// 	if err != nil {
// 		return err
// 	}
// 	ct.Time = t
// 	return nil
// }

// type CustomTime struct {
// 	time.Time
// }

type User struct {
	ID       uint
	Name     string     `json:"name"`
	Surname  string     `json:"surname"`
	Email    string     `json:"email" gorm:"unique"`
	Password string     `json:"password"`
	Phone    string     `json:"phone"`
	Auction  *[]Auction `gorm:"many2many:favorite_auctions"`
	Dob      time.Time  `json:"dob"`
}
