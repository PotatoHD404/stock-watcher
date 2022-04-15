FROM maven:3.8-openjdk-17-slim

COPY ./entrypoint.sh /usr/local/bin/entrypoint.sh
RUN apt-get update && apt-get install dos2unix && dos2unix /usr/local/bin/entrypoint.sh && chmod +x /usr/local/bin/entrypoint.sh
COPY . /usr/src/mymaven
#Start application
WORKDIR /usr/src/mymaven
RUN mvn clean package
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
CMD ["bash"]