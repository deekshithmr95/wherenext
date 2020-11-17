FROM node:12
LABEL MAINTAINER "Deekshith"

VOLUME /var/log/
WORKDIR /usr/src/app

COPY package*.json ./
COPY src/ ./src
ARG environment

# Set environment variable.
ENV NODE_ENV=${environment}
ARG envfile=.env.${environment}
RUN echo "copy env"
RUN echo $envfile .env
COPY ${envfile} .env
RUN npm install --only-production

COPY ./public ./public

# Build and optimize react app
RUN npm run build

#install serve to run enviromnet built files
RUN npm install -g serve

#clean up 
# Remove source directlty as we are running agains the build 
RUN rm -rf ./src

EXPOSE 3000
CMD [ "serve", "-l", "3000", "-s", "build"]