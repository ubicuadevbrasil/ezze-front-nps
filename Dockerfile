# FROM node:latest

# WORKDIR /tmp/react

# COPY . .

# RUN rm -rf node_modules
# RUN npm cache clean --force
# RUN npm install

# RUN npm run build

# RUN mkdir -p /var/www/html

# RUN mv dist/* /var/www/html

# VOLUME /var/www/html

# WORKDIR /

# RUN rm -rf /tmp/react

# Use node 18-alpine as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /tmp/react

# Copy the project files
COPY . .

# Remove existing node_modules and package-lock.json
RUN rm -rf node_modules package-lock.json

# Upgrade npm to the latest version to avoid npm-related issues
RUN npm install -g npm@latest

# Clean npm cache forcefully (optional, if you want to clear caches)
RUN npm cache clean --force

# Install dependencies using npm ci for a clean installation
RUN npm install

# Build the project
RUN npm run build

# Expose port (if needed)
EXPOSE 3000

COPY package.json .

COPY vite.config.ts .

RUN npm install typescript

EXPOSE 5173
# Start the app
CMD ["npm", "run", "preview"]

