# r3k Database Schema

## Technology
- SQLite for local development and portability
- SQLAlchemy ORM for Flask

## Tables

### users
| Field      | Type     | Description            |
|------------|----------|------------------------|
| id         | Integer  | Primary Key            |
| username   | Text     | Unique user ID         |
| created_at | DateTime | Timestamp of creation  |

### tasks
| Field      | Type     | Description                  |
|------------|----------|------------------------------|
| id         | Integer  | Primary Key                  |
| user_id    | Integer  | Foreign Key (users.id)       |
| title      | Text     | Task description             |
| date       | Date     | Assigned date                |
| priority   | Integer  | 1, 2, or 3 (priority level)   |
| completed  | Boolean  | Task completion status        |
| created_at | DateTime | Task creation timestamp       |

### settings
| Field        | Type     | Description                     |
|--------------|----------|---------------------------------|
| id           | Integer  | Primary Key                     |
| user_id      | Integer  | Foreign Key (users.id)          |
| daily_target | Integer  | 1–3 task goal for the day       |
