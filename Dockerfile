FROM node:12
ADD . /hamm-e2e
WORKDIR /hamm-e2e
RUN npm install

RUN chmod +rx docker.sh
