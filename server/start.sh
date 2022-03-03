#!/bin/bash

pipenv run migrate
pipenv run uvicorn main:app --host 0.0.0.0
