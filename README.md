# Deploy

```console
pyenv global 3.6.0
cd /webapps
python -m venv quintal_varjota_django
cd quintal_varjota_django/
mkdir logs
source bin/activate
git clone git@github.com:macndesign/quintal_varjota.git
pip install -r quintal_varjota/requirements.txt
# Se não existir
# sudo groupadd --system webapps
# Se não foi dada a permissão
# sudo chmod -R g+w /webapps
sudo useradd --system --gid webapps --home /webapps/quintal_varjota_django quintal_varjota
sudo chown -R quintal_varjota:users /webapps/quintal_varjota_django
chmod +x quintal_varjota/contrib/gunicorn/gunicorn_start
cp quintal_varjota/contrib/gunicorn/gunicorn_start bin/
cp quintal_varjota/contrib/gunicorn/quintal_varjota.conf /etc/supervisor/conf.d/
sudo supervisorctl reread
sudo supervisorctl update
cp quintal_varjota/contrib/nginx/quintal_varjota /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/quintal_varjota /etc/nginx/sites-enabled/quintal_varjota
sudo service nginx restart
# Colocar a chave no .env (SECRET_KEY)
python quintal_varjota/contrib/secret_gen.py
cp quintal_varjota/contrib/env-sample quintal_varjota/.env
cd quintal_varjota/
./manage.py migrate
./manage.py collectstatic --noinput
```
