# File: Dockerfile

# Stage 1: The Build Environment
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# This command will compile the client-side assets
RUN npm run build
RUN npm run build-server

# Stage 2: The Final, Lightweight Production Image
FROM node:18-alpine

# Create a non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Set the working directory
WORKDIR /usr/src/app

# Copy the compiled assets and dependencies
COPY --chown=appuser:appgroup --from=builder /usr/src/app/node_modules ./node_modules
COPY --chown=appuser:appgroup --from=builder /usr/src/app/ecosystem.config.js .
COPY --chown=appuser:appgroup --from=builder /usr/src/app/dist ./dist

# The production command to start your application
CMD ["/usr/src/app/node_modules/.bin/pm2-runtime", "start", "ecosystem.config.js"]