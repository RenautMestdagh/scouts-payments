FROM node:24-bookworm-slim

ENV NODE_ENV=production
WORKDIR /usr/app

COPY package*.json .
RUN npm ci --omit=dev

COPY . .

User node

EXPOSE 80
CMD [ "npm", "start"]
