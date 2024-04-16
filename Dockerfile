FROM openjdk:11-jre-slim

ARG JAR_FILE=csc/target/*.jar
RUN echo "JAR_FILE value is: ${JAR_FILE}"
COPY ${JAR_FILE} app.jar
EXPOSE 80
ENTRYPOINT ["java","-jar","/app.jar"]
