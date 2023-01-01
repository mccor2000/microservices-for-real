FROM node:16-alpine AS base

WORKDIR /usr/app 

COPY package.json yarn.lock ./
COPY common/package.json ./common/
COPY order-provider/package.json ./order-provider/

# Build
FROM base AS build

RUN yarn install

COPY common/tsconfig.json ./common/ 
COPY order-provider/tsconfig.json ./order-provider/
COPY common/src ./common/src
COPY order-provider/src ./order-provider/src 

RUN yarn build:common
RUN yarn build:order-provider

# Run
FROM base AS run

COPY --from=build /usr/app/node_modules ./node_modules
COPY --from=build /usr/app/common/node_modules ./common/node_modules
COPY --from=build /usr/app/order-provider/node_modules ./order-provider/node_modules

COPY --from=build /usr/app/common/dist ./common/dist
COPY --from=build /usr/app/order-provider/dist ./order-provider/dist

CMD [ "node", "order-provider/dist/main" ]