# Deploy

```console
pyenv global 3.6.0
cd /webapps
python -m venv quintal_varjota_django
cd quintal_varjota_django/
source bin/activate
git clone quintal_varjota (Colocar o repositório aqui)
# Se não existir
# sudo groupadd --system webapps
# Se não foi dada a permissão
# sudo chmod -R g+w /webapps
sudo useradd --system --gid webapps --home /webapps/quintal_varjota_django quintal_varjota
sudo chown -R hello:users /webapps/quintal_varjota_django
chmod +x quintal_varjota/contrib/gunicorn/gunicorn_start
cp quintal_varjota/contrib/gunicorn/gunicorn_start bin/
cp quintal_varjota/contrib/quintal_varjota.conf /etc/supervisor/conf.d/
sudo supervisorctl reread
sudo supervisorctl update
cp quintal_varjota/contrib/nginx/quintal_varjota /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/quintal_varjota /etc/nginx/sites-enabled/quintal_varjota
sudo service nginx restart
cp quintal_varjota/contrib/env-sample quintal_varjota/.env
# Colocar a chave no .env (SECRET_KEY)
python quintal_varjota/contrib/secret_gen.py
```
