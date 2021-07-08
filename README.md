- docker login registry.gitlab.com -u gitlab+deploy-token-506413 -p GN9zWjoNXVo1BMqouzys
- docker pull registry.gitlab.com/smartfarmKKU:master
- docker run -d -p 4201:80 --name smartfarmKKU registry.gitlab.com/smartfarmKKU:master

- docker ps
- docker rm smartfarmKKU
- docker build -t test .
- docker run -d -p 4201:80 --name smartfarmKKU test

https://gitlab.com/smartfarmKKU.git
