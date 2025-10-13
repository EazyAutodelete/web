# --- Build Stage ---
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json tsconfig.json *.config.js *.config.ts ./
COPY src ./src
COPY static ./static

RUN npm ci
RUN npm run build
RUN npm prune --production
RUN npm cache clean --force && rm -rf /tmp/* /root/.npm

# --- Production Stage ---
FROM gcr.io/distroless/nodejs22:nonroot

WORKDIR /app

# Nur package files + build output + production deps
COPY --from=builder /app/build ./build
COPY --from=builder /app/static ./static
COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/node_modules/svelte ./node_modules/svelte

EXPOSE 3000

CMD ["build/index.js"]
