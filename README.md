# web-stack-base

## What is this?
This project is intended to be a jumping off point for web development projects. It includes Webpack, React, TypeScript, Sass, and Bulma. 
### Important
This project has only been tested on Windows 10 with an ubuntu vagrant machine with virtualbox provider.  

### ToDo
* Add React Router suport
* Show example of custom Bulma theme

## Quick Start
If you want to get the project up and running as quick as possible follow these steps:
1. Install vagrant
2. Clone the repository
```cmd
C:\Projects> git clone https://github.com/amarzot/web-stack-base.git
```
3. Start and provision the vagrant machine. This will ask you to install the vagrant plugin, fsnotify.
```cmd
C:\Projects> cd web-stack-base
C:\Projects\web-stack-base> vagrant up
```
4. Start an ssh session to the vagrant machine
```cmd
C:\Projects\web-stack-base> vagrant ssh
```
5. Change directory to the shared directory
```console
vagrant@ubuntu-xenial:~$ cd /vagrant
vagrant@ubuntu-xenial:/vagrant$
```
6. Start the development server
```console
vagrant@ubuntu-xenial:/vagrant$ yarn start
```
7. Open a web browser and navigate to `localhost:8080`

