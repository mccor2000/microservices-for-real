FROM node:16-alpine AS base

WORKDIR /usr/app 

COPY package.json yarn.lock ./
COPY common/package.json ./common/
COPY api-gateway/package.json ./api-gateway/
COPY proto ./proto

# Build
FROM base AS build

RUN yarn install

COPY common/tsconfig.json ./common/ 
COPY api-gateway/tsconfig.json ./api-gateway/
COPY common/src ./common/src
COPY api-gateway/src ./api-gateway/src 

RUN yarn build:common
RUN yarn build:api-gateway

# Run
FROM base AS run

COPY --from=build /usr/app/node_modules ./node_modules
COPY --from=build /usr/app/common/node_modules ./common/node_modules
COPY --from=build /usr/app/api-gateway/node_modules ./api-gateway/node_modules

COPY --from=build /usr/app/common/dist ./common/dist
COPY --from=build /usr/app/api-gateway/dist ./api-gateway/dist

CMD [ "node", "api-gateway/dist/main" ]
