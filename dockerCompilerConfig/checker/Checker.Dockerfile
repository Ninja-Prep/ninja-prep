FROM ubuntu:20.04
# Install OpenJDK-8
RUN apt-get update -y && \
    apt-get install -y openjdk-8-jdk && \
    apt-get install -y ant && \
    apt-get clean;

# Fix certificate issues
RUN apt-get update -y && \
    apt-get install ca-certificates-java -y && \
    apt-get clean -y && \
    update-ca-certificates -f -y;

# Setup JAVA_HOME -- useful for docker commandline
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME

COPY ./RunCheck.sh /bin

RUN chmod +x /bin/RunCheck.sh

RUN useradd -ms /bin/bash npuser
RUN groupadd npusers
RUN usermod -g npusers npuser

ENTRYPOINT ["bash", "RunCheck.sh"]