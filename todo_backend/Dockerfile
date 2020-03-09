FROM openjdk
RUN mkdir /usr/src/todoapp-api
COPY target/scala-2.12/todoapp-api-assembly.jar /usr/src/todoapp-api
WORKDIR /usr/src/todoapp-api
EXPOSE 9999
CMD java -jar todoapp-api-assembly.jar