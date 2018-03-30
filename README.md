project containing everything to launch an almost complete Fiware

il faut d'abord installer docker sur la machine hôte.

Tout ce passe dans le répertoire ngsi dans lequel se trouve le fichier docker-compose.yml servant à lancer tous les containers

Les différents autres répertoires contiennent en général, les fichiers de configuration de chaque container (volumes de chaque service ayant un fichier de configuration dans le docker compose)

Cependant il reste quelques images à builder (celles de l'agentiot-json, keyrock et horizon qui ont été séparés à partir du repo Fiware-idm)
voir fichier "install & tests-issues.txt" pour les instructions.

les repos nécessaires ont été forkés sur mon github :
https://github.com/agaldemas/iotagent-json, 
https://github.com/agaldemas/fiware-idm, horizon et keystone)

dans les répertoires sous ngsi : knowage, fiware-idm et docker-openstack-horizon sont des repository github qui n'ont pas été inclus ici.
https://github.com/KnowageLabs/Knowage-Server-Docker.git pour le knowage, qui pour le moment ne peut pas être inclus dans le docker-compose.yml
parce que le test de présence du serveur de base de données ne fonctionne pas en docker-compose > V1 !


Pour lancer les 20 containers aller dans le répertoire ngsi puis entrer "docker-compose up"
Afin d'y voir quelque chose n'hésitez pas à installer un portainer la commande est indiquée dans les premières lignes du fichier "install & tests-issues.txt"
