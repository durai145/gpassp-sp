FROM ubuntu
# MAINTAINER Jayagopal Govindaraj <jayagopal.govindaraj@heaerieglobalsolutions.com>
ADD . /app
WORKDIR /app
RUN mkdir /config/
RUN apt-get update -y
RUN apt-get install nodejs -y
RUN apt-get install npm -y
#RUN npm install @angular/cli 
#RUN npm install @angular/compiler
RUN npm install 
RUN apt-get install -y vim
EXPOSE 5000
ENTRYPOINT ["ng"]
CMD ["serve", "--port", "4200"]
