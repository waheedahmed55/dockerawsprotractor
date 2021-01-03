# We are setting up base of the image which means that this image will have java as our base
FROM openjdk:16-slim-buster
# We are creating custom directory on linux based image. 
RUN mkdir -p /home/tractionguest
# We are copying the code of the automation framework from local machine to docker image in the custom directory we have created in above step
COPY ./tractionguest /home/tractionguest

# set default dir so that next commands executes in /home/tractionguest dir
WORKDIR /home/tractionguest

# Here we are updating the current linux envirnoment and installing node in the docker image. 
RUN apt-get update; apt-get install -y curl \
    && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
    && apt-get install -y nodejs \
    && curl -L https://www.npmjs.com/install.sh | sh 
# We will execute npm install in /home/tractionguest because of WORKDIR to install project dependencies defined the package.json
RUN npm install
# We will install protractor globally so that in can accessed by package.json 
RUN npm install -g protractor

# EntryPoint There can be only one entry point and we have to mention comamnd in order to run the test cases from our image
CMD npm run test2
