FROM registry.access.redhat.com/ubi8/nodejs-14:1-43 AS builder

WORKDIR /opt/app-root/src

RUN mkdir client
COPY --chown=default:root client client
COPY client/package*.json client/
WORKDIR /opt/app-root/src/client 

RUN npm ci && npm run build

FROM registry.access.redhat.com/ubi8/nodejs-14:1-43

WORKDIR /opt/app-root/src
COPY --from=builder /opt/app-root/src/client/build client/build
COPY --chown=default:root server server
COPY client/package*.json client/
COPY package*.json ./
RUN npm install --production


ENV NODE_ENV=production
ENV HOST=0.0.0.0 PORT=3000

EXPOSE 3000/tcp


USER default

LABEL name="react-node-starter" \
	description="ReactJS node starter"

CMD ["npm", "run", "prod"]
