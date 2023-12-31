package expense

import (
	"context"
	"encoding/json"
    "errors"
	"net/http"

	"github.com/go-kit/kit/transport"
	kithttp "github.com/go-kit/kit/transport/http"
	kitlog "github.com/go-kit/log"
	"github.com/gorilla/mux"
)

func NewHttpServer(svc Service, logger kitlog.Logger) *mux.Router {
	options := []kithttp.ServerOption{
		kithttp.ServerErrorHandler(transport.NewLogErrorHandler(logger)),
		kithttp.ServerErrorEncoder(encodeErrorResponse),
		kithttp.ServerFinalizer(newServerFinalizer(logger)),
	}

	registerExpenseHandler := kithttp.NewServer(
		MakeRegisterExpenseEndpoint(svc),
		decodeRegisterExpenseRequest,
		encodeResponse,
		options...,
	)

	deleteExpenseHandler := kithttp.NewServer(
		MakeDeleteExpenseEndpoint(svc),
		decodeDeleteExpenseRequest,
		encodeResponse,
		options...,
	)

	getExpenseHandler := kithttp.NewServer(
		MakeGetExpenseEndpoint(svc),
		decodeGetExpenseRequest,
		encodeResponse,
		options...,
	)

	getAllExpensesFromGroupHandler := kithttp.NewServer(
		MakeGetAllExpensesFromGroupEndpoint(svc),
		decodeGetAllExpensesFromGroupRequest,
		encodeResponse,
		options...,
	)

	getAllExpensesFromUserHandler := kithttp.NewServer(
		MakeGetAllExpensesFromUserEndpoint(svc),
		decodeGetAllExpensesFromUserRequest,
		encodeResponse,
		options...,
	)

	r := mux.NewRouter()
	r.Methods("POST").Path("/register-expense").Handler(registerExpenseHandler)
	r.Methods("DELETE").Path("/delete-expense").Handler(deleteExpenseHandler)
	r.Methods("GET").Path("/get-expense").Handler(getExpenseHandler)
	r.Methods("GET").Path("/get-all-expenses-from-group").Handler(getAllExpensesFromGroupHandler)
	r.Methods("GET").Path("/get-all-expenses-from-user").Handler(getAllExpensesFromUserHandler)

	return r
}

func newServerFinalizer(logger kitlog.Logger) kithttp.ServerFinalizerFunc {
	return func(ctx context.Context, code int, r *http.Request) {
		logger.Log("status", code, "path", r.RequestURI, "method", r.Method)
	}
}

func encodeErrorResponse(_ context.Context, err error, w http.ResponseWriter) {
	if err == nil {
		panic("encodeError with nil error")
	}
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(codeFrom(err))
	json.NewEncoder(w).Encode(map[string]interface{}{
		"error": err.Error(),
	})
}

func codeFrom(err error) int {
	switch err {
	case ErrInvalidToken:
		return http.StatusUnauthorized
	default:
		return http.StatusInternalServerError
	}
}

func decodeRegisterExpenseRequest(ctx context.Context, r *http.Request) (interface{}, error) {
	var request registerExpenseRequest
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		return nil, err
	}
	return request, nil
}

func decodeDeleteExpenseRequest(ctx context.Context, r *http.Request) (interface{}, error) {
	var request deleteExpenseRequest
	if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
		return nil, err
	}
	return request, nil
}

func decodeGetExpenseRequest(ctx context.Context, r *http.Request) (interface{}, error) {
    expenseID := r.URL.Query().Get("id")

    if expenseID == "" {
        return nil, errors.New("No parameter for expense id")
    }
    request := getExpenseRequest {
        ID: expenseID,
    }
	return request, nil
}

func decodeGetAllExpensesFromGroupRequest(ctx context.Context, r *http.Request) (interface{}, error) {
    expenseID := r.URL.Query().Get("id")

    if expenseID == "" {
        return nil, errors.New("No parameter for expense id")
    }
    request := getAllExpensesFromGroupRequest {
        ID: expenseID,
    }
	return request, nil
}

func decodeGetAllExpensesFromUserRequest(ctx context.Context, r *http.Request) (interface{}, error) {
    token := r.URL.Query().Get("token")

    if token == "" {
        return nil, errors.New("No parameter for expense id")
    }
    request := getAllExpensesFromUserRequest {
        Token: token,
    }
	return request, nil
}

func encodeResponse(ctx context.Context, w http.ResponseWriter, response interface{}) error {
	return json.NewEncoder(w).Encode(response)
}
