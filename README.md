# LAN Real Time Chat

The idea behind this project, beyond its functionalities themselves, is to improve my skills in creating scalable and fully modular code.

## How to create a postgresql container?

> Replace variables to your preferences. (U need to install Docker btw)

```bash
docker run --name {container-name} `
  -e POSTGRES_USER={username} `
  -e POSTGRES_PASSWORD={password} `
  -e POSTGRES_DB={database-name} `
  -p 5432:5432 `
  -d postgres:alpine
```

