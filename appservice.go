package main

// AppVersion is the single source of truth for the version shown in the UI.
const AppVersion = "0.1.0"

// AppService exposes application-level information to the frontend.
type AppService struct{}

func NewAppService() *AppService {
	return &AppService{}
}

// Version returns the application version.
func (s *AppService) Version() string {
	return AppVersion
}