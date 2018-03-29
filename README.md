project containing everything to launch an almost complete Fiware

il faut d'abord installer docker sur la machine hôte.

Tout ce passe dans le répertoire ngsi dans lequel se trouve le fichier docker-compose.yml servant à lancer tous les containers
les différents autres répertoires contiennent en général les fichiers de configuration de chaque container (volumes de chaque service ayant un fichier de configuration dans le docker compose)

Cependant il reste quelques images à builder (celles de l'agentiot-json, keyrock et horizon qui ont été séparés à partir du repo Fiware-idm)
voir fichier install & tests-issues.txt pour les instructions.
les repos nécessaires ont été forkés sur mon github 
https://github.com/agaldemas/iotagent-json, 
https://github.com/agaldemas/fiware-idm, horizon et keystone)
les répertoires knowage, fiware-idm et docker-openstack-horizon sont des repository github qui n'ont pas été inclus ici.

Pour lancer les 20 containers aller dans le répertoire ngsi puis entrer "docker-compose up"
pour y voir quelque chose
