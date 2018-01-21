# REST API using Node.js Server

[![License](https://img.shields.io/github/license/mashape/apistatus.svg)](./LICENSE.txt)
[![Build Status](https://travis-ci.org/pranavpandey/api.pranavpandey.com.svg?branch=master)](https://travis-ci.org/pranavpandey/api.pranavpandey.com)

This is the simple [Node.js](https://nodejs.org) API to serve `json` response.
For better understanding, I am taking an example of my personal website and
serving all of its contents in `json` format at different endpoints.

Currently, it is hosted on [AWS](https://aws.amazon.com/) running
[Ubuntu Server 16.04 LTS](https://www.ubuntu.com/download/server) but, it will
work with other cloud providers also.

*I will update this guide with more tips and tricks later.*

---

## Available API endpoints

For now, following `GET` REST API endpoints are available to retrieve the data in
`json` format.

1. `GET` `https://api.pranavpandey.com/me/home` - To get the [home page](https://pranavpandey.com/home) content.
2. `GET` `https://api.pranavpandey.com/me/about` - To get the [about page](https://pranavpandey.com/about) content.
3. `GET` `https://api.pranavpandey.com/me/skills` - To get the [skills page](https://pranavpandey.com/skills) content.
4. `GET` `https://api.pranavpandey.com/me/projects` - To get the [about page](https://pranavpandey.com/projects) content.
5. `GET` `https://api.pranavpandey.com/me/work` - To get the [work page](https://pranavpandey.com/work) content.
6. `GET` `https://api.pranavpandey.com/me/contact` - To get the [contact page](https://pranavpandey.com/contact) content.

---

## Table of Contents

1. [Setup](https://github.com/pranavpandey/api.pranavpandey.com#setup)
    1. [Start a Server](https://github.com/pranavpandey/api.pranavpandey.com#start-a-server)
    2. [Connect to the Server](https://github.com/pranavpandey/api.pranavpandey.com#connect-to-the-server)
2. [Install Node.js](https://github.com/pranavpandey/api.pranavpandey.com#install-node.js)
3. [Write Node.js](https://github.com/pranavpandey/api.pranavpandey.com#write-node.js-app)
    1. [Install git](https://github.com/pranavpandey/api.pranavpandey.com#install-git)
    2. [Clone the repo](https://github.com/pranavpandey/api.pranavpandey.com#clone-the-repo)
    3. [Install dependencies](https://github.com/pranavpandey/api.pranavpandey.com#install-dependencies)
4. [Test Application](https://github.com/pranavpandey/api.pranavpandey.com#test-application)
5. [Install PM2](https://github.com/pranavpandey/api.pranavpandey.com#install-pm2)
    1. [Manage Application with PM2](https://github.com/pranavpandey/api.pranavpandey.com#manage-application-with-pm2)
    2. [Start Application](https://github.com/pranavpandey/api.pranavpandey.com#start-application)
6. [Setup Nginx](https://github.com/pranavpandey/api.pranavpandey.com#setup-nginx2)
7. [Connect with the domain](https://github.com/pranavpandey/api.pranavpandey.com#connect-with-the-domain)
8. [Conclusion](https://github.com/pranavpandey/api.pranavpandey.com#conclusion)
9. [References](https://github.com/pranavpandey/api.pranavpandey.com#references)
10. [License](https://github.com/pranavpandey/api.pranavpandey.com#license)

---

## Setup

### Start a Server

First of all, you need a server to follow all the steps below. If you didn't
started your virtual server yet then, please follow these official guides from
[AWS](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html),
[Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-create-your-first-digitalocean-droplet-virtual-server),
[Google Cloud](https://cloud.google.com/compute/docs/quickstart-linux) or
[Microsoft Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/virtual-machines-linux-quick-create-portal).
You can also try these steps on your local machine but for production app, a
server is required.

### Connect to the Server

After starting the server, you need to connect with the server by using SSH or
[PuTTY](http://www.putty.org/) so that you can install required packages and
can run essential commands.

You can check these official documentations from [AWS](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html),
[Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-use-ssh-keys-with-putty-on-digitalocean-droplets-windows-users),
[Google Cloud](https://cloud.google.com/compute/docs/instances/connecting-to-instance) or
[Microsoft Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/virtual-machines-linux-mac-create-ssh-keys).

After you have successfully logged in to your server, please follow the guide
below to make it ready for serving the `Node.js` app.

### Install Node.js

We will install the latest LTS release of Node.js, using the
[NodeSource](https://github.com/nodesource/distributions) package archives.

First, you need to install the [NodeSource](https://github.com/nodesource/distributions)
PPA in order to get access to its contents. Make sure you're in your home
directory, and use curl to retrieve the installation script for the Node.js
6.x archives.

```
cd ~
curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
```

You can inspect the contents of this script with `nano` (or your preferred text
editor).

```
nano nodesource_setup.sh
```

And run the script under `sudo`.

```
sudo bash nodesource_setup.sh
```

The PPA will be added to your configuration and your local package cache will
be updated automatically. After running the setup script from `nodesource`, you
can install the Node.js package in the same way that you did above.

```
sudo apt-get install nodejs
```

The `nodejs` package contains the `nodejs` binary as well as `npm`, so you
don't need to install `npm` separately. However, in order for some `npm`
packages to work (such as those that require compiling code from source),
you will need to install the `build-essential` package.

```
sudo apt-get install build-essential
```

The Node.js runtime is now installed, and ready to run an application!
Let's write a Node.js application.

    Note: When installing from the NodeSource PPA, the Node.js executable is
    called nodejs, rather than node.

---

## Write Node.js app

Now, either you can write your own Node.js app or you can `clone` this `repo`
to make things easier. For cloning the `repo`, you first need to install
[git](https://git-scm.com/) on the server.

### Install git

Use below command to install `git` on Ubuntu. This command will change according
to your operating system.

```
sudo apt-get install git
```

You can configure your username and email also.

```
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

### Clone the repo

You can clone this `repo` by using the below command.

```
git clone https://github.com/pranavpandey/api.pranavpandey.com.git
```

### Install dependencies

Run the below command to install all the dependencies mentioned
in `package.json`.

```
cd api.pranavpandey.com
npm install
```

---

## Test Application

In order to test your application, mark `server.js` executable.

```
chmod +x ./server.js
```

And run it like so.

```
./server.js

Output
API is listening at http://localhost:8080/
```

    Note: Running a Node.js application in this manner will block additional
    commands until the application is killed by pressing Ctrl-C.

In order to test the application, open another terminal session on your server,
and connect to localhost with curl.

```
curl http://localhost:8080
```

If you see the following output, the application is working properly and
listening on the proper address and port.

```
Output
{"message":"Welcome to the API for pranavpandey.com."}
```

If you do not see the proper output, make sure that your Node.js application
is running, and configured to listen on the proper address and port.

Once you're sure it's working, kill the application (if you haven't already)
by pressing `Ctrl+C`.

---

## Install PM2

Now we will install PM2, which is a process manager for Node.js applications.
PM2 provides an easy way to manage and daemonize applications
(run them in the background as a service).

We will use `npm`, a package manager for Node modules that installs with
Node.js, to install PM2 on our server. Use this command to install PM2.

```
sudo npm install -g pm2
```

The -g option tells npm to install the module globally, so that it's available
system-wide.

### Manage Application with PM2

PM2 is simple and easy to use. We will cover a few basic uses of PM2.

#### Start Application

The first thing you will want to do is use the `pm2 start` command to run your
application, `server.js`, in the background.

```
pm2 start server.js
```

This also adds your application to PM2's process list, which is outputted
every time you start an application.

As you can see, PM2 automatically assigns an App name (based on the filename,
without the `.js` extension) and a PM2 id. PM2 also maintains other
information, such as the PID of the process, its current status, and memory
usage.

Applications that are running under PM2 will be restarted automatically if the
application crashes or is killed, but an additional step needs to be taken to
get the application to launch on system startup (boot or reboot). Luckily,
PM2 provides an easy way to do this, the `startup` subcommand.

The `startup` subcommand generates and configures a startup script to launch PM2
and its managed processes on server boots. You must also specify the platform
you are running on, which is `ubuntu`, in our case.

```
pm2 startup systemd
```

The last line of the resulting output will include a command that you must run
with superuser privileges.

```
Output
[PM2] You have to run this command as root. Execute the following command:
      sudo su -c "env PATH=$PATH:/usr/bin pm2 startup systemd -u username --hp /home/usename
```

Run the command that was generated (similar to the highlighted output above,
but with your username instead of `username`) to set PM2 up to start on boot
(use the command from your own output).

```
sudo su -c "env PATH=$PATH:/usr/bin pm2 startup systemd -u username --hp /home/username"
```

This will create a `systemd` unit which runs `pm2` for your user on boot. This
`pm2` instance, in turn, runs `server.js`. You can check the status of the
`systemd` unit with `systemctl`.

```
systemctl status pm2
```

For complete `pm2` usage, please visit the
[official documentation](https://github.com/Unitech/pm2).

Now that your Node.js application is running, and managed by PM2, let's set up
the reverse proxy.

---

## Setup Nginx

Now that your application is running, and listening on localhost, you need to
set up a way for your users to access it. We will set up an Nginx web server as
a reverse proxy for this purpose. This tutorial will set up an Nginx server
from scratch. If you already have an Nginx server setup, you can just copy the
`location` block into the server block of your choice (make sure the location
does not conflict with any of your web server's existing content).

First, install Nginx using `apt-get`.

```
sudo apt-get install nginx
```

Now open the default server block configuration file for editing.

```
sudo nano /etc/nginx/sites-available/default
```

Delete everything in the file and insert the following configuration. Be sure
to substitute your own domain name for the `server_name` directive.
Additionally, change the port (`8080`) if your application is set to listen
on a different port.

    server {
        listen 80;

        server_name example.com;

        location / {
            proxy_pass http://localhost:8080;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }

This configures the server to respond to requests at its root. Assuming our
server is available at `example.com`, accessing `http://example.com/` via a web
browser would send the request to `server.js`, listening on port `8080` at
localhost.

You can add additional `location` blocks to the same server block to provide
access to other applications on the same server. For example, if you were also
running another Node.js application on port `8081`, you could add this location
block to allow access to it via `http://example.com/app2`.

    location /app2 {
        proxy_pass http://localhost:8081;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

Once you are done adding the location blocks for your applications, save
and exit.

Make sure you didn't introduce any syntax errors by typing.

```
sudo nginx -t
```

Next, restart Nginx.

```
sudo systemctl restart nginx
```

Next, permit traffic to Nginx through the firewall, if you have it enabled.

```
sudo ufw allow 'Nginx Full'
```

Assuming that your Node.js application is running, and your application and
Nginx configurations are correct, you should now be able to access your
application via the Nginx reverse proxy. Try it out by accessing your server's
URL (its public IP address or domain name).

---

## Connect with the domain

It is better to connect a domain with your app so that your server's public DNS
will not be exposed. To connect a domain, just create a `CNAME` in your DNS
configuration pointing to your server's public DNS.

For example, I have created a `CNAME` with name `api` and set it's `value`to
the `public DNS` of my `Amazon EC2 instance`. So, it can be accessible at
`api.pranavpandey.com`.

---

## Conclusion

Congratulations! You now have your Node.js application running behind an Nginx
reverse proxy on an Ubuntu 16.04 server. This reverse proxy setup is flexible
enough to provide your users access to other applications or static web content
that you want to share. Good luck with your Node.js development!

You can fully secure the connection to your app with HTTPS using
[Let's Encrypt](https://letsencrypt.org/) or partially by using a `CDN` like
[Cloudflare](https://www.cloudflare.com/).

*I will add more documentation on this soon.*

---

## References

[AWS](https://aws.amazon.com/) and [Digital Ocean](https://www.digitalocean.com/community).

---

## License

    Copyright (C) 2017 Pranav Pandey

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
