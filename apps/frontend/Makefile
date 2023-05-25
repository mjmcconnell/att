DOCKER_REGISTRY = ghcr.io/mjmcconnell/att
DOCKER_IMAGE_NAME = frontend
DOCKER_IMAGE_TAG ?= latest

.PHONY: help
help:			## list available cmds.
	@sed -ne '/@sed/!s/## //p' $(MAKEFILE_LIST)

.PHONY: docker.build
docker.build:		## build local docker image
	docker build \
		-t $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_NAME):$(DOCKER_IMAGE_TAG) \
		-f docker/Dockerfile \
		.

.PHONY: docker.shell
docker.shell:		## start a shell for the base image
	docker run --rm -it $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_NAME):$(DOCKER_IMAGE_TAG) /bin/sh

.PHONY: docker.run
docker.run:		## start a shell for the base image
	docker run --rm -p 3000:3000 $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_NAME):$(DOCKER_IMAGE_TAG)

.PHONY: docker.push
docker.push:		## start a shell for the base image
	docker push $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_NAME):$(DOCKER_IMAGE_TAG)
