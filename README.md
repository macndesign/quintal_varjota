# Deploy

```console
# Python
sudo apt-get update
sudo apt-get install python-dev python3-dev build-essential python-pip python3-pip python-virtualenv libbz2-dev libssl-dev libreadline-dev libsqlite3-dev libffi-dev libpq-dev libpng-dev libfreetype6-dev libtiff5-dev libjpeg8-dev zlib1g-dev liblcms2-dev libwebp-dev tcl8.6-dev tk8.6-dev python-tk postgresql postgresql-contrib gunicorn gunicorn3 python-gunicorn python3-gunicorn supervisor nginx

# PyEnv
curl -L https://raw.githubusercontent.com/yyuu/pyenv-installer/master/bin/pyenv-installer | bash
pyenv update
pyenv install 3.6.0

pyenv global 3.6.0
cd ./workspace/
python -m venv quintal_varjota_django
cd ./quintal_varjota_django/
mkdir logs
source ./bin/activate
git clone https://github.com/macndesign/quintal_varjota.git
pip install -r ./quintal_varjota/requirements.txt
cp ./quintal_varjota/contrib/gunicorn/gunicorn_start ./bin/
chmod +x ./bin/gunicorn_start
cp ./quintal_varjota/contrib/gunicorn/quintal_varjota.conf /etc/supervisor/conf.d/
sudo ln -s ./quintal_varjota/contrib/nginx/quintal_varjota /etc/nginx/sites-enabled/quintal_varjota
# Colocar a chave no .env (SECRET_KEY)
python quintal_varjota/contrib/secret_gen.py
cp quintal_varjota/contrib/env-sample quintal_varjota/.env
cd quintal_varjota/
./manage.py migrate
./manage.py collectstatic --noinput

# Reload and restart services
sudo supervisorctl reread
sudo supervisorctl update
# Manual with: sudo supervisorctl start quintal_varjota
sudo service nginx restart
```
