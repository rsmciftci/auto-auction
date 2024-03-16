package models

import "time"

type Auction struct {
	ID            uint
	StartTime     time.Time
	EndTime       time.Time
	StartingPrice int
	MinimumBid    int
	Car           Car
}
