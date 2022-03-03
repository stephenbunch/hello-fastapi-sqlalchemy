FROM node:17.3.1
WORKDIR /web/
COPY web/yarn.lock ./
COPY web/package.json ./
RUN yarn
COPY web/ ./
ENV NODE_ENV=production
RUN yarn build

FROM python:3.8
WORKDIR /root/server/
RUN pip install pipenv
COPY server/Pipfile ./
COPY server/Pipfile.lock ./
RUN pipenv install

WORKDIR /root/web/build/
COPY --from=0 /web/build/ ./

WORKDIR /root/server/
COPY server/ ./

CMD ["./start.sh"]
