#!/bin/sh

/docker-entrypoint.sh

npm start &

nginx -g 'daemon off;' &

wait -n

exit $?
