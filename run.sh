
#!/usr/bin/bash

echo "****** Removedeep-health-ui"
docker rm -f deep-health-ui

PORT=8010
echo $PORT
echo "**************************************"
echo "* Run deep-health-ui in port $PORT *****"
echo "**************************************"
export PORT=$PORT
docker run --rm -it \
        -p $PORT:80 \
        --name deep-health-ui \
        deep-health-ui