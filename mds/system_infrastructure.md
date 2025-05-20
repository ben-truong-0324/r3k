# r3k System Infrastructure
## Stack Overview

- **Frontend**: Next.js + D3.js + Tailwind CSS
- **Backend**: Flask (REST API)
- **Database**: SQLite (dev) via SQLAlchemy
- **Containerization**: Docker + Docker Compose
- **Port**: 42069 (mapped for host access)

## Folder Structure

r3k/
├── frontend/ # Next.js app
├── backend/ # Flask app
├── database/ # SQLite files and migrations
├── docker/ # Docker-related configs
├── tests/ # Unit/integration tests
└── .github/ # GitHub CI workflows

## Docker Compose

- `frontend`: runs on `next dev`, exposed via port 42069
- `backend`: Flask server on internal network
- shared volume for database

## Networking

- Docker Compose internal network connects frontend and backend.
- Port 42069 is exposed to host for the web interface.
