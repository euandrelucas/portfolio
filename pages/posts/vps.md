---
title: Como hospedar seu bot em uma vps!
date: 2021/8/7
description: Aprenda a hospedar seu bot em uma VPS linux :)
tag: hosting, ubuntu, os, sistema, operacional, vps, como, hospedar, segurança, tutorial, hospedagem, gratis, 2021, como usar uma vps, como usar um vps, o que fazer com uma vps, o que é uma vps, vps como usar, vps, como hospedar bot, como hospedar bot discord, como hospedar bot na vps, como hospedar bot telegram, vps 2020, vps como configurar, vps como funciona, dev aprender bot, dev aprender bot discord, dev aprender bot instagram, dev aprender python, volohost
author: You
---
# Como hospedar seu bot em uma vps, pratico e facil!

Hospedagens gratis ultimamente andam tendo certos problemas, tanto de segurança quanto de qualidade, a maioria das hospedagens gratis hoje em dia seguem o mesmo padrão, geralmente utilizando um painel [pterodactyl](https://pterodactyl.io/) e uma vps qualque que você não sabe nem da onde vem ¯\\\_(ツ)\_/¯

## Primeiros passos

Antes de iniciarmos iremos precisar de algumas coisas, alguns programas dependendo de seu sistema operacional, e é claro, a vps, caso você use windows, irá precisar de:

- Windows Subsystem for Linux (WSL, iremos utilizar para executar comandos de linux em seu pc, pode ser substituido pelo powershell, porém não tem comandos sudo)
- WinSCP (Iremos utilizar para conectar via SFTP para poder gerenciar os arquivos de sua vps)

## Passo 1: Escolhendo a VPS

Existem diversas empresas que fazem revenda de VPS, vou deixar algumas para você escolher abaixo:

- [GalaxyGate](https://galaxygate.net/) (foi a primeira vps que tive, recomendo)
- [Contabo](https://contabo.com/en/) (ja utilizei também, ela tem preços baixos e recursos otimos, a melhor do mercado atualmente)
- [DigitalOcean](https://www.digitalocean.com/) (nunca utilizei, mas dizem ser boa)
- [OVH](https://www.ovhcloud.com/en/) (uso atualmente, muito boa também)

Eu recomendo você escolher um maquina Ubuntu (de preferência Ubuntu 20.04 LTS por ter mais suporte), e também é a maquina que irei utilizar para esse tutorial.

Respostas para perguntas que geralmente são feitas ao comprar uma vps:

- **Localização:** É recomendavel uma VPS que se encontre proxima aos estados unidos, pois os servidores da [API](https://pt.wikipedia.org/wiki/Interface_de_programa%C3%A7%C3%A3o_de_aplica%C3%A7%C3%B5es) do discord é hospedada nos estados unidos, logo, quanto mais proximo, menos ping
- **Root password:** A Senha do usuário **root** de sua maquina, no caso é o usuário admininstrador.
- **Hostname:** O nome de sua maquina, por exemplo `javier`.

## Passo 2: Conectando a VPS

Para conectar a uma VPS, utilizamos [SSH](https://en.wikipedia.org/wiki/Secure_Shell) (Secure Shell Protocol), abra o WSL ou PowerShell e utilize:

```

$ ssh root@ip-da-maquina
```

**Exemplo:** ssh root@127.0.0.1

Ao conectar, você irá ver uma mensagem parecida com essa:

```

The authenticity of host '<host>' can't be established.
ECDSA key fingerprint is    SHA256:TER0dEslggzS/BROmiE/s70WqcYy6bk52fs+MLTIptM.
Are you sure you want to continue connecting (yes/no)?
```

Apenas digite **yes** e pronto

Depois ele irá pedir a senha de sua maquina, insira a senha que você configurou, caso não apareça nada, não se preocupe, é apenas o sistema de proteção para impedir que pessoas atrás de você olhe a sua senha.

![conectado](/vps1.png)

Pronto, agora você está conectado em sua VPS, caso você queira ficar de olho no consumo, você pode instalar o neofetch em sua VPS, basta usar:

```

$ sudo apt install neofetch
```

e depois digite **neofetch**

![neofetch](/vps2.png)

Como eu uso linux, irei deixar um tutorial ai em baixo de outro website mostrando como usar o winscp:

<center>
**Fonte:** https://www.pucsp.br/suporte/tutorial-winscp-ftp
<iframe src="https://www.pucsp.br/suporte/tutorial-winscp-ftp" height="400" width="700"></iframe>
</center>

## Instalando o NodeJS

Para isso você irá precisar do curl, instalável com:

```
$ sudo apt install curl
```
depois execute:
```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

Isso irá instalar o NVM (Node Version Manager), já que o **sudo apt install nodejs** está desatualizado.

Depois que instalar, só usar algum desses comandos:
```
$ nvm install vX.X.X
```
Utilize o comando acima ^ para baixar uma versão que tenha preferência, substituindo o X pela versão
```
$ nvm install node
```

Utilize o comando acima ^ para instalar a mais recente.

Depois digite **node** no terminal e tudo estará funcionando.

## Python

O ubuntu ja vem com python, então... :D

Mas caso queira atualizar utilize o comando:
```
$ sudo pt upgrade python3
```

## Java (JDK)

Para instalar o java em sua maquina, basta usar o comando a seguir:

```
wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | sudo apt-key add -
sudo apt-get install -y software-properties-common
sudo apt-get install adoptopenjdk-11-hotspot
```

## Passo 3: Screen

Screen é o que vai deixar nosso bot online, seria como se você abrisse uma nova janela em seu navegador, mas no caso é um novo terminal, com isso quando você finalizar sua sessão, a screen continuará ativa.

Para instalar utilize:

```
$ sudo apt install screen
```

Utilizar o screen é simples:
- **screen -S nome-legal:** Cria uma screen
- **screen -r nome-legal:** Entra em uma screen
- **CTRL + A + D:** Desconecta de uma screen
- **exit:** Ao digitar **exit** no terminal de uma screen, ela será excluida
- **screen -Dr nome-legal:** Caso sua screen esteja "Attached", isso ocorre quando sua internet morre no meio da conexão por exemplo

Já dentro da screen, basta escrever o comando que liga seu bot e pronto, ele estará ligado :)