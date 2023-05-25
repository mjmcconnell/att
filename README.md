# All The Things

This project is used as a playground and knowledge base for technoligies that I commonly interact with.

## Key components

### Terragrunt
### Kubernetes
### GCP
### Docker
### WebAssemby
### Frontend UI
### Backend APIs

## Infrasturcture

All the infrastructure is defined with terraform and terragrunt, and intended to be run on Kubernetes.

Some services use external resources, such as gcp cloud functions and gcp cloud run, but they are still managed via kubernetes (see GCP [ConfigConnector](https://cloud.google.com/config-connector/docs/overview)), and traffic is routed to the resources via kubernetes Services (externalName). All the traffic is kept within the same VPC, so services do not need egress access to the public internet.

The cloud infrastructure is mirrored locally, using minikube, along within app specific docker-compose defintions, for running partial local services.

## Docker Images

This project uses two different appraoches for definition docker images, traditional and wasm.

### Traditional

Traditional docker images, use multi stage builds, using the native OS architecture

### WASM
https://wasmedge.org/docs/develop/build-and-run/docker_wasm/

WASM images are built from scratch, and simply host the webassemby binaries. These images require beta features of the docker engine.

## Apps

### Declaritive state manager
Simple application, that uses declaritive state to update objects.

Similar to POST vs PUT requests, the appliction always uses POST requests, for both creation and update requests.

* Frontend retrieves observed state from API
* User updates state and submits the desired state to the API
* API compares the desired and observed state, to creates a diff
* Attempts to reconcile the diff
* If successful, diff is stored into a timeseries db
* API returns latest observed state
