FROM node:10-slim 
WORKDIR /home/node/app
RUN apt-get update && apt-get -y install inotify-tools && apt-get clean
CMD npm start 