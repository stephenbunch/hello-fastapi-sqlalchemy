# FastAPI + SQLAlchemy

This stack was inspired by https://github.com/tiangolo/full-stack-fastapi-postgresql

## Local postgres db

https://github.com/psycopg/psycopg2/issues/1200#issuecomment-776159466

```bash
brew install postgresql
brew install openssl

docker-compose up
```

## Local server development

```bash
brew install pipx
pipx install pipenv

cd server/
pipenv install

pipenv run dev
```

http://localhost:8000/docs
http://localhost:8000/openapi.json

## Local frontend development

```bash
cd web/
yarn install

yarn dev
```

## Build docker image

```bash
./build.sh
```
