FROM node:lts-slim

ENV APP_ID_NUMBER=9999
ENV APP_ID_NAME=ktamaral
ENV GROUP_ID_NUMBER=1234
ENV GROUP_ID_NAME=appgroup

RUN apt-get -y update && \
  deluser node && \
  rm -rf /home/node && \
  DEBIAN_FRONTEND=non-interactive && \
  groupadd -g ${GROUP_ID_NUMBER} ${GROUP_ID_NAME} && \
  useradd -l -s /bin/bash -m -u ${APP_ID_NUMBER} -g ${GROUP_ID_NAME} ${APP_ID_NAME} && \
  mkdir -p /home/${APP_ID_NAME} && \
  chown -R ${APP_ID_NAME}:${GROUP_ID_NAME} /home/${APP_ID_NAME}

COPY --chown=${APP_ID_NAME}:${GROUP_ID_NAME} . /home/${APP_ID_NAME}

USER ${APP_ID_NAME}

WORKDIR /home/${APP_ID_NAME}
RUN yarn install

RUN chown -R ${APP_ID_NAME}:${GROUP_ID_NAME} /home/${APP_ID_NAME}/node_modules

CMD [ "yarn", "dev" ]
