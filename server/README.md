This repo was inspired by https://github.com/tiangolo/full-stack-fastapi-postgresql

## Environment setup

### `pipenv`

```bash
brew install pipx
pipx install pipenv
```

### Postgres

https://github.com/psycopg/psycopg2/issues/1200#issuecomment-776159466

```bash
$ brew install postgresql
$ brew install openssl

$ brew link openssl
Warning: Refusing to link macOS provided/shadowed software: openssl@1.1
If you need to have openssl@1.1 first in your PATH, run:
  echo 'export PATH="/opt/homebrew/opt/openssl@1.1/bin:$PATH"' >> ~/.zshrc

For compilers to find openssl@1.1 you may need to set:
  export LDFLAGS="-L/opt/homebrew/opt/openssl@1.1/lib"
  export CPPFLAGS="-I/opt/homebrew/opt/openssl@1.1/include"

For pkg-config to find openssl@1.1 you may need to set:
  export PKG_CONFIG_PATH="/opt/homebrew/opt/openssl@1.1/lib/pkgconfig"
```

## Local development

```bash
pipenv install

docker-compose up
pipenv run dev
```

http://localhost:8000/docs
http://localhost:8000/openapi.json
