# Builds an image to run untrusted code
FROM ubuntu:20.04

RUN apt-get update && \
    apt-get install -y software-properties-common && \
    rm -rf /var/lib/apt/lists/*
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt install python3.7 -y

# Add 3.7 to the available alternatives
RUN update-alternatives --install /usr/bin/python python /usr/bin/python3.7 1

# Set python3.7 as the default python
RUN update-alternatives --set python /usr/bin/python3.7

# Install OpenJDK-8
RUN apt-get update && \
    apt-get install -y openjdk-8-jdk && \
    apt-get install -y ant && \
    apt-get clean;

# Fix certificate issues
RUN apt-get update && \
    apt-get install ca-certificates-java && \
    apt-get clean && \
    update-ca-certificates -f;

# Setup JAVA_HOME -- useful for docker commandline
ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64/
RUN export JAVA_HOME

# C++
RUN apt install -y build-essential

RUN mkdir -p /ninjaprep
RUN adduser --disabled-password ninjaprep
RUN usermod -d /ninjaprep ninjaprep

COPY . /ninjaprep/

RUN chmod +x /ninjaprep/dockerbox.sh
RUN chmod +x /ninjaprep/run_code.py

RUN bash /ninjaprep/dockerbox.sh 
RUN rm /ninjaprep/dockerbox.sh 

VOLUME /ninjaprep
USER ninjaprep
