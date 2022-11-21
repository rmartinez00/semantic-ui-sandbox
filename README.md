# semantic-ui-sandbox


# --------------- GIT -----------------

### Cloning repository
```bash
git clone git@github.com:rmartinez00/semantic-ui-sandbox.git my_project
cd my_proyect
git fetch
git checkout master
git pull
```

### Commit changes
```bash
git status
git diff
git add . (or path to changed files)
git commit -m "message"
git push
```
### Update repository
```bash
git pull
```

# ------------ symfony ----------------

##              Debian Bullseye
### install php 8.1
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
### install composer
```bash
curl -sS https://getcomposer.org/installer -o composer-setup.php
HASH=`curl -sS https://composer.github.io/installer.sig`
echo $HASH
php -r "if (hash_file('SHA384', 'composer-setup.php') === '$HASH') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
```
### install node
```bash
apt install curl
curl -sL https://deb.nodesource.com/setup_14.x | bash -
apt update
apt install nodejs
```
### start sandbox
```bash
composer install
yarn
```
### compile
```bash
yarn encore dev
```
### install symfony server
```bash
curl -1sLf 'https://dl.cloudsmith.io/public/symfony/stable/setup.deb.sh' | sudo -E bash
sudo apt install symfony-cli
```
### start symfony
```bash
symfony server:start
```

##              MACOS
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
### start sandbox
```zsh
composer install
yarn
```
### compile
```zsh
yarn encore dev
```
### start symfony server
```bash
symfony server:start
```

# ----------making changes-------------
### Start proyect
```bash
cd my_project
yarn encore dev
symfony server:start
```

### Recompile after making changes
```bash
yarn encore dev
```