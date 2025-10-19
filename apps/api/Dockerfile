FROM node:22-alpine AS base
RUN corepack enable

FROM base AS development
WORKDIR /usr/src/app

# Copy workspace files
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
COPY package.json ./

# Copy app-specific package.json
COPY apps/api/package.json ./apps/api/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the entire workspace
COPY . .

# Set working directory to the api app
WORKDIR /usr/src/app/apps/api

EXPOSE 3001

CMD ["pnpm", "run", "dev"]
