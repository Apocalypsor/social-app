# Front End
FROM node:18-alpine AS webbuild

ARG REACT_APP_API_ENDPOINT=http://localhost/api

WORKDIR /web
COPY frontend .
RUN npm install && npm run build

# Full App
FROM nginx:stable-alpine
WORKDIR /app

ENV NODE_ENV=development \
    BACKEND_PORT=4000 \
    # DO NOT MODIFY BACKEND_PORT
    DB_URL="" \
    R2_ACCOUNT_ID="" \
    R2_ACCOUNT_KEY="" \
    R2_ACCOUNT_SECRET="" \
    R2_BUCKET_NAME="" \
    R2_PUBLIC_URL=""

COPY /config/start.sh /start.sh
COPY /config/nginx.conf /etc/nginx/nginx.conf
COPY backend /app

RUN apk update \
  && apk upgrade \
  && apk add --update ca-certificates coreutils bash npm \
  && update-ca-certificates \
  && npm install \
  && rm -rf /var/cache/apk/* \
  && rm -rf /usr/share/nginx/html \
  && chmod +x /start.sh

COPY --from=webbuild /web/build /usr/share/nginx/html

ENTRYPOINT /start.sh

EXPOSE 80
