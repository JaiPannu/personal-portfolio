# Docker Quick Reference

## The Issue You Had

**Error:** `docker: 'docker buildx build' requires 1 argument`

**Cause:** You were missing the `.` (dot) at the end of the command, which specifies the build context (current directory).

**Solution:** Always include the `.` when building:
```bash
docker build -t portfolio-backend .
#                                 ^ Don't forget this!
```

---

## Essential Commands (Copy & Paste Ready)

### 1. Build the Image
```bash
cd /home/dhara/MERN-learn
docker build -t portfolio-backend .
```

### 2. Run the Container
```bash
docker run -d -p 5000:5000 --name portfolio-backend --env-file .env portfolio-backend
```

### 3. Check if Running
```bash
docker ps
```

### 4. View Logs (Real-time)
```bash
docker logs -f portfolio-backend
```

### 5. Test the API
```bash
curl http://localhost:5000
curl http://localhost:5000/api/projects
curl http://localhost:5000/api/skills
```

### 6. Stop the Container
```bash
docker stop portfolio-backend
```

### 7. Remove the Container
```bash
docker rm portfolio-backend
```

### 8. Restart Everything (Rebuild + Run)
```bash
docker stop portfolio-backend 2>/dev/null
docker rm portfolio-backend 2>/dev/null
docker build -t portfolio-backend .
docker run -d -p 5000:5000 --name portfolio-backend --env-file .env portfolio-backend
docker logs -f portfolio-backend
```

---

## Using Docker Compose (Easier!)

### Start
```bash
docker-compose up -d
```

### View Logs
```bash
docker-compose logs -f
```

### Stop
```bash
docker-compose down
```

### Rebuild and Restart
```bash
docker-compose down
docker-compose build
docker-compose up -d
```

---

## Troubleshooting

### Container won't start?
```bash
docker logs portfolio-backend
```

### Check if port 5000 is already in use:
```bash
lsof -i :5000
# or
netstat -tuln | grep 5000
```

### Remove all stopped containers:
```bash
docker container prune
```

### Remove the image and rebuild:
```bash
docker rmi portfolio-backend
docker build -t portfolio-backend .
```

---

## What's Currently Running

Your container is **successfully running** with:
- ✅ MongoDB connected
- ✅ API accessible at http://localhost:5000
- ✅ All routes working (/api/projects, /api/skills, /api/contact)
