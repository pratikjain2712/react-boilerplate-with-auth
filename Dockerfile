FROM node:10 as react-build

RUN mkdir -p /frontend/
RUN apt-get update
RUN apt-get install nano
WORKDIR /frontend
RUN npm install pm2 -g
COPY . /frontend
RUN npm install
#RUN npm install react-scripts@3.4.1 -g 
#RUN npm run build
RUN mkdir -p /frontend/utils

COPY start.sh /frontend/utils/start.sh

ENTRYPOINT ["utils/start.sh"]
    