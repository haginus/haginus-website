FROM node:16-alpine AS builder
WORKDIR /app/builder
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.20.2-alpine
COPY --from=builder /app/builder/build /usr/share/nginx/html
