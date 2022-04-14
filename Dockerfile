# Image
FROM node:16.14-alpine as builder

# Create app directory
WORKDIR /app

# Copy package and install dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

# Bundle app source
COPY . .

# Build application
RUN yarn build
RUN yarn prisma generate

# Run application
CMD ["yarn", "start:prod"]
