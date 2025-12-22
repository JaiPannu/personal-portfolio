# 1. Use an official runtime as a parent image (like downloading an OS with Node pre-installed)
FROM node:18-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package files first (for better caching)
COPY package*.json ./

# 4. Install dependencies inside the container (production only)
RUN npm ci --only=production

# 5. Copy the rest of your source code
COPY . .

# 6. Expose the port your backend runs on (e.g., 5000)
EXPOSE 5000

# 7. Define the command to run your app
CMD ["node", "backend/server.js"]