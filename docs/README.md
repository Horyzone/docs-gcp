# Introduction

![](https://raw.githubusercontent.com/Horyzone/docs-gcp/master/docs/.vuepress/public/assets/img/logo.png)

[GCP](https://github.com/Horyzone/gcp) pour Gestionnaire de Congés Professionnel est une application web pour faciliter l'organisation des jours de congés de vos salariés.

## Prérequis

- **[Php](https://secure.php.net/) >= 7.2**
> Cette librairie nécessite une version récente de php


## Installation

```bash
$ git clone https://github.com/Horyzone/gcp.git
$ cd gcp
$ composer install
```
Vérifiez que le fichier `.env` a bien été créé, c'est le fichier de configuration de votre environnement ou vous définissez la connexion à la base de données, l'environnement `dev` ou `prod` et l'activation du cache de twig.

Si le fichier n'a pas été créé, faites-le manuellement en dupliquant le fichier `.env.example`.

N'oubliez pas de vérifier que la configuration de votre environnement de base de données correspond bien.


## Permissions

Autoriser le dossier `storage` à écriture pour votre serveur Web.
