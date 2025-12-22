# Docker Guide for Portfolio Backend

## What Was Fixed

### Issues in Original Dockerfile:
1. **Duplicate FROM statements** - Had both `FROM node:18-alpine` and `FROM express` (invalid)
2. **Missing start script** - Used `npm start` but package.json only had `dev` script
3. **No .dockerignore** - Would copy unnecessary files like node_modules
4. **No environment variable handling** - .env file not properly handled

### Solutions Applied:
1. Removed invalid `FROM express` line
2. Added `start` script to package.json
3. Created .dockerignore file
4. Created docker-compose.yml for environment variables
5. Changed to `npm ci --only=production` for faster, cleaner installs

---

## How to Build and Run

### Option 1: Using Docker directly

**Build the image:**
```bash
docker build -t portfolio-backend .
```

**Run the container (using .env file):**
```bash
docker run -d -p 5000:5000 \
  --name portfolio-backend \
  --env-file .env \
  portfolio-backend
```

**Or run with manual environment variables:**
```bash
docker run -d -p 5000:5000 \
  --name portfolio-backend \
  -e PORT=5000 \
  -e MONGO_URI="mongodb+srv://user:pass@cluster.mongodb.net/?appName=YourApp" \
  portfolio-backend
```

**View logs:**
```bash
docker logs -f portfolio-backend
```

**Stop and remove:**
```bash
docker stop portfolio-backend
docker rm portfolio-backend
```

### Option 2: Using Docker Compose (Recommended)

**Start the container:**
```bash
docker-compose up -d
```

**View logs:**
```bash
docker-compose logs -f
```

**Stop the container:**
```bash
docker-compose down
```

---

## Environment Variables

Make sure your `.env` file is in the root directory with:
```
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/...
```

Docker Compose will automatically read from your `.env` file.

---

## Testing the Container

Once running, test the API:

```bash
# Health check
curl http://localhost:5000

# Get projects
curl http://localhost:5000/api/projects

# Get skills
curl http://localhost:5000/api/skills
```

---

## Dockerfile Explanation

```dockerfile
FROM node:18-alpine          # Lightweight Node.js base image
WORKDIR /app                 # Set working directory
COPY package*.json ./        # Copy package files (for caching)
RUN npm ci --only=production # Install production dependencies
COPY . .                     # Copy source code
EXPOSE 5000                  # Document the port
CMD ["node", "backend/server.js"]  # Start the app
```

---

## .dockerignore Explanation

Prevents copying unnecessary files into the container:
- `node_modules` - Will be reinstalled inside container
- `.env` - Security (use env variables instead)
- `.git` - Not needed in production
- Documentation files - Not needed at runtime
