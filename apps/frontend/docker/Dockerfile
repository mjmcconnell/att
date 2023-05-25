# build serving assets
FROM node:20 as builder

WORKDIR /home

USER 0

# remove important vulnerabilities
RUN apt update

# install packages
COPY package-lock.json                    package-lock.json
COPY package.json                         package.json
RUN npm ci --quiet

# build package
COPY public/            public/
COPY src/               src/
COPY index.html         index.html
COPY vite.config.js     vite.config.js

RUN npm run build

# configure caddy server with serving assets
FROM caddy:2.6-alpine

# add source files
COPY --from=builder /home/dist /srv

COPY docker/files/Caddyfile         /etc/caddy/Caddyfile
COPY docker/files/Caddyfile.tls         /etc/caddy/Caddyfile.tls

ARG user=1001

# allow caddy autosave func
ENV XDG_CONFIG_HOME=/etc/caddy/config
RUN mkdir /etc/caddy/config && chown -R ${user}:0 /etc/caddy/config

USER ${user}

# required startup cmd
ENTRYPOINT ["caddy", "run", "--adapter", "caddyfile"]

# default params
# for tls use: CMD ["--config", "/etc/caddy/Caddyfile.tls"]
CMD ["--config", "/etc/caddy/Caddyfile"]
