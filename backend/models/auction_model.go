package models

import "time"

type Auction struct {
	ID            uint
	StartTime     time.Time
	EndTime       time.Time
	StartingPrice int
	MinimumBid    int
	Images        []Images //TODO: images
	Car           Car
}
