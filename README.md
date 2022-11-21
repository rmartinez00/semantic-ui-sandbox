# semantic-ui-sandbox

Functional sandbox for testing symfony Symfony CLI version 5.4.19, php v8.1.12, composer v2.4.4, node Linux v14.x, MacOsx v19.1.0

# ----- Clone GIT Repository ---------
First of all, download the code and save it to /my_project
### Cloning repository
```bash
git clone git@github.com:rmartinez00/semantic-ui-sandbox.git my_project
cd my_proyect
git fetch
git checkout master
git pull
```
### Commiting changes to repository
```bash
git status
git diff
git add . (or path to changed files)
git commit -m "message"
git push
```
### Update repository from repository
```bash
git pull
```

# -------- Installing Symfony ----------

This sandbox was tested in Debian 10 and MacOS Ventura

##              Debian Bullseye
### installing php 8.1
```bash
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
```
### installing composer
```bash
curl -sS https://getcomposer.org/installer -o composer-setup.php
HASH=`curl -sS https://composer.github.io/installer.sig`
echo $HASH
php -r "if (hash_file('SHA384', 'composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
```
### installing node 14
```bash
apt install curl
curl -sL https://deb.nodesource.com/setup_14.x | bash -
apt update
apt install nodejs
```
### starting sandbox for first time 
```bash
cd my_project
composer install
yarn
```
### compiling
```bash
yarn encore dev
```
### install symfony server
```bash
curl -1sLf 'https://dl.cloudsmith.io/public/symfony/stable/setup.deb.sh' | sudo -E bash
sudo apt install symfony-cli
```

##              MACOS
Make sure **homebrew** is installed before installing packages.

### install php
```zsh
brew install php
brew install yarn
```
### install composer
```zsh
brew install composer
```
### install symfony
```zsh
brew install simfony-cli/tap/symfony-cli
```
### starting sandbox for first time
```zsh
composer install
yarn
```
### compile
```zsh
yarn encore dev
```

# ---------- Making changes ------------
Once everything is prepared, the proyect could be started, modified and tested.
### Starting the symfony server
```bash
symfony server:start
```
### Starting proyect
```bash
cd my_project
yarn encore dev
symfony server:start
```

### Recompile after making changes
After making changes in the .js files, could be skipped if changes are made in the .html files.
```bash
yarn encore dev
```
