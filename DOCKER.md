# Docker Setup

This project includes Docker configuration for both production and development environments.

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine
- [Docker Compose](https://docs.docker.com/compose/install/) (usually included with Docker Desktop)

## Production Setup

### Build and run the production container:

```bash
docker-compose up -d
```

This will:
- Build the optimized production image
- Start the container in detached mode
- Expose the app on `http://localhost:3000`

### Stop the production container:

```bash
docker-compose down
```

### View logs:

```bash
docker-compose logs -f web
```

### Rebuild after changes:

```bash
docker-compose up -d --build
```

## Development Setup

For development with hot-reloading:

### Start development container:

```bash
docker-compose -f docker-compose.dev.yml up
```

This will:
- Build the development image
- Mount your local code directory as a volume
- Enable hot-reloading (changes reflect immediately)
- Expose the app on `http://localhost:3000`

### Stop development container:

```bash
docker-compose -f docker-compose.dev.yml down
```

### Rebuild development container:

```bash
docker-compose -f docker-compose.dev.yml up --build
```

## Files Overview

- `Dockerfile` - Multi-stage production build
- `Dockerfile.dev` - Development build with hot-reloading
- `docker-compose.yml` - Production configuration
- `docker-compose.dev.yml` - Development configuration
- `.dockerignore` - Files to exclude from Docker build

## Useful Commands

### Access container shell:

```bash
# Production
docker exec -it moazzam-site sh

# Development
docker exec -it moazzam-site-dev sh
```

### View container stats:

```bash
docker stats moazzam-site
```

### Remove all stopped containers and images:

```bash
docker system prune -a
```

## Troubleshooting

### Port already in use:

If port 3000 is already in use, modify the port mapping in `docker-compose.yml`:

```yaml
ports:
  - "3001:3000"  # Changed host port to 3001
```

### Container won't start:

1. Check logs: `docker-compose logs web`
2. Rebuild: `docker-compose up --build`
3. Remove old containers: `docker-compose down -v`

### Hot-reloading not working in dev mode:

Ensure you're using `docker-compose.dev.yml` and volumes are properly mounted.

## Production Deployment

For production deployment to services like AWS, GCP, or Azure:

1. Build the image:
   ```bash
   docker build -t moazzam-site:latest .
   ```

2. Tag for your registry:
   ```bash
   docker tag moazzam-site:latest your-registry/moazzam-site:latest
   ```

3. Push to registry:
   ```bash
   docker push your-registry/moazzam-site:latest
   ```
