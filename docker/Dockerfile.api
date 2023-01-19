# Install dependencies 
FROM node:14-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile


# Create a build from the source code
FROM node:14-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN cd common && yarn link
RUN yarn link common
RUN yarn run build && yarn install --production --ignore-scripts --prefer-offline


# Set-up production image
FROM node:14-alpine AS runner
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/common ./common
COPY --from=builder /app/ormconfig.js ./ormconfig.js
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/fixtures ./fixtures

RUN cd common && yarn link
RUN yarn link common

EXPOSE 3002

CMD ["node", "--input-type=module", "dist/index.js"]