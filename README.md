project containing everything to launch an almost complete Fiware

Tout ce passe dans le répertoire ngsi dans lequel se trouve le fichier docker-compose.yml servant à lancer tous les containers
les différents autres répertoires contiennent en général les fichiers de configuration de chaque container (volumes de chaque service ayant un fichier de configuration dans le docker compose)
cependant il reste quelques images à builder (celles des agents IOT UL et json, keyrock et horizon qui ont été séparés)
voir fichier install & tests-issues.txt pour les instructions

Pour lancer les 20 containers aller dans le répertoire ngsi puis entrer "docker-compose up"
