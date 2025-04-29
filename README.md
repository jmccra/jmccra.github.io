### React Node Starter


Install
```
$ git clone https://github.ibm.com/David-Levy/react_node_starter.git
$ cd react_node_starter
$ npm install
$ npm run client-install
```

Start up in development mode
```
$ npm run server-dev
$ npm run client-dev
```

Start up in production mode
```
$ npm run build 
$ npm run prod
```


The Docker build uses RedHat's image registry, so you must log in with docker in your cli in order to build the image 

```sh
$ docker login registry.redhat.io 
# provide your docker username and password when prompted

$ docker login registry.access.redhat.com
# provide your docker username and password when prompted
```

To build an image
```sh
$ docker build --tag react_node_starter:v1 .
```

To run the image on a port
```
$ docker run -d --env-file=.env -p --name react_node_container <local port>:3000 react_node_starter:v1 
```


