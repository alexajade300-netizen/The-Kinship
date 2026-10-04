# Stage 1: Build static site export
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve with lightweight Nginx
FROM nginx:alpine AS runner

# Remove all default Nginx welcome pages and configurations
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/*

# Copy exported static files directly into Nginx web root
COPY --from=builder /app/out/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
