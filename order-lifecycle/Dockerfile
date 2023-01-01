FROM node:16-alpine AS base

WORKDIR /usr/app 

COPY package.json yarn.lock ./
COPY common/package.json ./common/
COPY order-lifecycle/package.json ./order-lifecycle/

# Build
FROM base AS build

RUN yarn install

COPY common/tsconfig.json ./common/ 
COPY order-lifecycle/tsconfig.json ./order-lifecycle/
COPY common/src ./common/src
COPY order-lifecycle/src ./order-lifecycle/src 

RUN yarn build:common
RUN yarn build:order-lifecycle

# Run
FROM base AS run

COPY --from=build /usr/app/node_modules ./node_modules
COPY --from=build /usr/app/common/node_modules ./common/node_modules
COPY --from=build /usr/app/order-lifecycle/node_modules ./order-lifecycle/node_modules

COPY --from=build /usr/app/common/dist ./common/dist
COPY --from=build /usr/app/order-lifecycle/dist ./order-lifecycle/dist

CMD [ "node", "order-lifecycle/dist/main" ]