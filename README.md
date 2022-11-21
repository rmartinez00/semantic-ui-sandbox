# semantic-ui-sandbox

# -------------------------------------
# --------------- GIT -----------------
# -------------------------------------
# First time
git clone git@github.com:rmartinez00/semantic-ui-sandbox.git my_project
cd my_proyect
git fetch
git checkout master
git pull

# Commit changes
git status
git diff
git add . /ruta del archivo
git commit -m "message"
git push
# Update repository
git pull

# -------------------------------------
# ------------ symfony ----------------
# -------------------------------------

#              Debian Bullseye
# install php 8.1
sudo apt install php-curl
sudo apt install -y lsb-release ca-certificates apt-transport-https software-properties-common gnupg2
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/sury-php.list
curl -fsSL  https://packages.sury.org/php/apt.gpg| sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/sury-keyring.gpg
sudo apt update
sudo apt install php8.1
sudo apt install php8.1-curl
sudo apt install php8.1-common
sudo apt install php8.1-xml
sudo apt install php8.1-yaml
# install composer
curl -sS https://getcomposer.org/installer -o composer-setup.php
HASH=`curl -sS https://composer.github.io/installer.sig`
echo $HASH
php -r "if (hash_file('SHA384', 'composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
# install node
apt install curl
curl -sL https://deb.nodesource.com/setup_14.x | bash -
apt update
apt install nodejs
# start sandbox
composer install
yarn
# compile
yarn encore dev
# install symfony server
curl -1sLf 'https://dl.cloudsmith.io/public/symfony/stable/setup.deb.sh' | sudo -E bash
sudo apt install symfony-cli
# start symfony
symfony server:start

#              MACOS
# install php
brew install php
brew install yarn
# install composer
brew install composer
# install symfony
brew install simfony-cli/tap/symfony-cli
# start sandbox
composer install
yarn
# compile
yarn encore dev
# start symfony server
symfony server:start

# -------------------------------------
# ----------making changes-------------
# -------------------------------------
cd my_project
yarn encore dev
symfony server:start

# after changes
yarn encore dev