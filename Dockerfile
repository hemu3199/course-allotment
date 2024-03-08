FROM openjdk:11-jre-slim
WORKDIR /app
ARG JAR_FILE=target/*.jar
RUN echo "JAR_FILE value is: ${JAR_FILE}"
COPY ${JAR_FILE} app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]