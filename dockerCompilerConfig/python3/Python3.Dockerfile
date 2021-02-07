FROM ubuntu:20.04

ENV PYTHONUNBUFFERED=0

RUN apt-get update
RUN apt-get install -y timelimit
RUN apt-get install -y software-properties-common
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt-get install sudo -y
RUN apt-get install -y python3.8

COPY ./Python3Compile.sh /bin
COPY ./PythonExecuteScript.sh /bin
RUN chmod +x /bin/Python3Compile.sh
RUN chmod +x /bin/PythonExecuteScript.sh

RUN useradd -ms /bin/bash npuser
RUN groupadd npusers
RUN usermod -g npusers npuser

ENTRYPOINT ["bash", "Python3Compile.sh"]