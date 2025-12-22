# Docker Build Error Troubleshooting

## Error: "docker: 'docker buildx build' requires 1 argument"

### Common Causes & Solutions:

### 1. **Missing the dot (`.`) at the end**
```bash
# ❌ WRONG
docker build -t portfolio-backend

# ✅ CORRECT
docker build -t portfolio-backend .
```
The `.` means "use current directory as build context"

---

### 2. **Wrong Directory**
Make sure you're in the project root:
```bash
cd /home/dhara/MERN-learn
pwd  # Should show: /home/dhara/MERN-learn
ls   # Should show: dockerfile, package.json, backend/, etc.
docker build -t portfolio-backend .
```

---

### 3. **Dockerfile Name Issue**
Docker looks for `Dockerfile` (capital D) by default, but you have `dockerfile` (lowercase).

**Option A - Rename the file (Recommended):**
```bash
cd /home/dhara/MERN-learn
mv dockerfile Dockerfile
docker build -t portfolio-backend .
```

**Option B - Specify the file explicitly:**
```bash
docker build -t portfolio-backend -f dockerfile .
```

---

### 4. **Docker Buildx vs Docker Build**
If you're seeing "buildx" in the error, try using the legacy builder:

```bash
# Disable buildx (use classic builder)
export DOCKER_BUILDKIT=0
docker build -t portfolio-backend .
```

Or explicitly use buildx:
```bash
docker buildx build -t portfolio-backend . --load
```

---

### 5. **Docker Context Issues**
If you have Docker Desktop:
```bash
# Check current context
docker context ls

# Switch to default context
docker context use default

# Try build again
docker build -t portfolio-backend .
```

---

## Step-by-Step Build Process

**Run these commands one by one:**

```bash
# 1. Navigate to project
cd /home/dhara/MERN-learn

# 2. Verify you're in the right place
ls -la | grep -E 'dockerfile|package.json'

# 3. Check Docker is running
docker ps

# 4. Build with explicit filename
docker build -t portfolio-backend -f dockerfile .

# 5. Verify image was created
docker images | grep portfolio-backend
```

---

## Alternative: Rename to Dockerfile (Best Practice)

```bash
cd /home/dhara/MERN-learn
mv dockerfile Dockerfile
docker build -t portfolio-backend .
```

Docker expects `Dockerfile` with a capital D by convention.

---

## Test if Docker is Working

```bash
# Simple test
docker run --rm hello-world

# If this fails, Docker isn't running properly
```

---

## Full Clean Rebuild

If nothing works, try a complete clean build:

```bash
cd /home/dhara/MERN-learn

# Remove old images
docker rmi portfolio-backend 2>/dev/null || true

# Clear build cache
docker builder prune -a -f

# Rebuild
docker build -t portfolio-backend -f dockerfile .
```

---

## What Command Are You Running?

Please copy-paste the **exact command** you're typing. Common mistakes:

- Missing the `.` at the end
- Running from wrong directory
- Extra spaces or typos
- Using `buildx` instead of `build`

**The correct command is:**
```bash
docker build -t portfolio-backend .
```

With **lowercase** dockerfile, use:
```bash
docker build -t portfolio-backend -f dockerfile .
```
