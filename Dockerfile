FROM node:9.3-alpine

# Setup project
ENV HOME /docker/project
WORKDIR $HOME

# install
COPY project /docker/project
RUN npm install swagger -g
RUN npm install --no-progress
