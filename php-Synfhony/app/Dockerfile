FROM php:7.2-apache
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && apt-get update && apt-get install -y git libzip-dev unzip \
    && docker-php-ext-install zip \
    && a2enmod rewrite headers \
    && docker-php-ext-install mysqli \
    && apt-get clean
COPY . /var/www/html