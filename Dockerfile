# ------------------------------------------------------
# STAGE 1 — Builder
# ------------------------------------------------------
    FROM node:20-slim AS builder

    WORKDIR /app
    
    # Install deps cleanly
    COPY package*.json ./
    RUN npm ci
    
    # Copy rest of project
    COPY . .
    
    # Build client + server
    RUN npm run build
    RUN npm run build-server
    
    
    # ------------------------------------------------------
    # STAGE 2 — Production Runtime
    # ------------------------------------------------------
    FROM node:20-slim
    
    # Create non-root user
    RUN useradd -m appuser
    USER appuser
    
    WORKDIR /app
    
    # Only copy required artifacts
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/ecosystem.config.js .
    COPY --from=builder /app/dist ./dist
    
    # Expose port (optional)
    EXPOSE 3000
    
    # Start with PM2 runtime
    CMD ["node_modules/.bin/pm2-runtime", "start", "ecosystem.config.js"]    