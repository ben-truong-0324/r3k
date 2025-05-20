# r3k: Test and Deploy

## Local Development

1. Clone the repo.
2. Run with Docker Compose:

```bash
docker-compose up --build

#http://localhost:42069

## Testing

Frontend
Uses Jest + React Testing Library
Run: npm run test inside frontend/

Backend
Uses pytest for unit and integration tests
Run: pytest inside backend/

End-to-End
Planned: Playwright or Cypress

## Github CI

GitHub CI

.github/workflows/main.yml

Build frontend and backend
Run all tests
Optionally build Docker images