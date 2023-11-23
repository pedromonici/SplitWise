package model

import (
    "time"
)

type Group struct {
    Index          int       `json:index"`
    Owner          string    `json:owner"`
    Name           string    `json:name"`
    CreationDate   time.Time `json:creation_date"`
    AmountUsers    int       `json:amount_users"`
    AmountExpenses int       `json:amount_expenses"`
}