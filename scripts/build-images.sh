docker build . -f ./order-lifecycle/Dockerfile -t mccor/order-lifecycle
docker build . -f ./order-provider/Dockerfile -t mccor/order-provider
docker build . -f ./api-gateway/Dockerfile -t mccor/api-gateway