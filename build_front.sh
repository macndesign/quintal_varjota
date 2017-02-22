#!/usr/bin/env bash
if [ -d ./core/static/ ]; then rm -R ./core/static/; fi
if [ -d ./core/templates/ ]; then rm -R ./core/templates/; fi

cd front/
if [ -d ./build/ ]; then rm -R ./build/; fi
npm run build

mkdir ../core/templates/ && mkdir ../core/static/
cp ./build/index.html ../core/templates/
cp ./build/asset-manifest.json ../core/static/
cp ./build/favicon.ico ../core/static/
cp -R ./build/static/ ../core/static/

cd ../ && python manage.py collectstatic --noinput
