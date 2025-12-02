# build stage
FROM node:20-alpine AS build
WORKDIR /app

# copy package + install
COPY package.json package-lock.json* ./
RUN npm ci --silent

# copy source and build
COPY . .
RUN npm run build

# production image
FROM node:20-alpine AS prod
WORKDIR /app

COPY package.json ./
COPY --from=build /app/dist ./dist
RUN npm ci --production --silent

EXPOSE 3000
CMD ["node", "dist/index.js"]
