package group

import (
	"context"
	"groups/pkg/model"
	"time"

	"github.com/go-kit/kit/endpoint"
)

type registerGroupRequest struct {
    Index          int       `json:"index"`
	Owner          string    `json:"owner"`
    Name           string    `json:"name"`
	CreationDate   time.Time `json:"creation_date"`
	AmountUsers    int       `json:"amount_users"`
	AmountExpenses int       `json:"amount_expenses"`
}

type registerGroupResponse struct {
	Err   string      `json:"err,omitempty"` // errors don't JSON-marshal, so we use a string
}

func MakeRegisterGroupEndpoint(svc Service) endpoint.Endpoint {
	return func(ctx context.Context, request any) (any, error) {
		req := request.(registerGroupRequest)

		createdGroup := model.Group{
            // FIXME: since we are getting the groups by ID, it would be interesting
            // to change the Index field to ID
            Index: req.Index,
            Owner: req.Owner,
            Name: req.Name,
            CreationDate: req.CreationDate,
            AmountUsers: req.AmountUsers,
            AmountExpenses: req.AmountExpenses,
		}

        if err := svc.RegisterGroup(ctx, &createdGroup); err != nil {
			return registerGroupResponse{err.Error()}, err
		}
		return registerGroupResponse{""}, nil
	}
}

type deleteGroupRequest struct {
	ID int `json:"id"`
}

type deleteGroupResponse struct {
	Err   string `json:"err,omitempty"` // errors don't JSON-marshal, so we use a string
}

func MakeDeleteGroupEndpoint(svc Service) endpoint.Endpoint {
	return func(ctx context.Context, request any) (any, error) {
		req := request.(deleteGroupRequest)
		err := svc.DeleteGroup(ctx, req.ID)
		if err != nil {
			return deleteGroupResponse{err.Error()}, err
		}
		return deleteGroupResponse{""}, err
	}
}

type getGroupRequest struct {
	ID int `json:"token"`
}

type getGroupResponse struct {
    Group *model.Group `json:"group"`
	Err   string      `json:"err,omitempty"` // errors don't JSON-marshal, so we use a string
}

func MakeGetGroupEndpoint(svc Service) endpoint.Endpoint {
	return func(ctx context.Context, request any) (any, error) {
		req := request.(getGroupRequest)

		group, err := svc.GetGroupByID(ctx, req.ID)
		if err != nil {
			return getGroupResponse{nil, err.Error()}, err
		}
		return getGroupResponse{group, ""}, err
	}
}

type getAllGroupsRequest struct {
	Token string `json:"token"`
}

type getAllGroupsResponse struct {
    Groups []model.Group `json:"groups"`
	Err    string        `json:"err,omitempty"` // errors don't JSON-marshal, so we use a string
}

func MakeGetAllGroupsEndpoint(svc Service) endpoint.Endpoint {
	return func(ctx context.Context, request any) (any, error) {
		req := request.(getAllGroupsRequest)

		groups, err := svc.GetGroupsFromUser(ctx, req.Token)
		if err != nil {
			return getAllGroupsResponse{nil, err.Error()}, err
		}
		return getAllGroupsResponse{groups, ""}, err
	}
}