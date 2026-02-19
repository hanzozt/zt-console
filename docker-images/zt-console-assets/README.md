
# hanzozt/zt-console-assets

## Overview

This image is only for embedding the console in the controller container image. It doesn't do anything by itself.

## Deploy

[Here's a link to the console deployment guide](https://hanzozt.dev/docs/guides/deployments/docker/console) that shows how to enable the console in the controller image.

## Build

In the project root, build the image with the `BASE_HREF` build argument set to the path where the console will be served (default: `/zac/` is hard-coded in `zt controller`).

In this Dockerfile, the default value of `DEPLOY_URL` is set to the value of `BASE_HREF`. These correspond to [Angular `ng build` options](https://angular.io/cli/build).

```bash
docker build \
    --tag zt-console-assets \
    --file ./docker-images/zt-console-assets/Dockerfile \
    --build-arg BASE_HREF=/zac/ \
    "${PWD}"
```

Refer to [the `hanzozt/zt-controller` image](https://github.com/hanzozt/zt/blob/release-next/dist/docker-images/zt-controller/Dockerfile) to see how this image is used to build a controller image.
