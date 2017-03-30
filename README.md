# [Node.js](https://nodejs.org) API for [pranavpandey.com](https://pranavpandey.com)

[![License](https://img.shields.io/github/license/mashape/apistatus.svg)](./LICENSE.txt)

This is the simple `Node.js` API to serve `json` response. For better
understanding, I am taking an example of my personal website and serving all of
its contents in `json` format at different endpoints.

Currently, it is hosted on [AWS](https://aws.amazon.com/) running
[Ubuntu Server 16.04 LTS](https://www.ubuntu.com/download/server) but, it will
work with other cloud providers also.

---

## Available API endpoints

For now, following `GET` REST API endpoints are available to retrieve the data in
`json` format: -

1. `GET` `https://api.pranavpandey.com/me/home` - To get the [home page](https://pranavpandey.com/home) content.
2. `GET` `https://api.pranavpandey.com/me/about` - To get the [about page](https://pranavpandey.com/about) content.
3. `GET` `https://api.pranavpandey.com/me/skills` - To get the [skills page](https://pranavpandey.com/skills) content.
4. `GET` `https://api.pranavpandey.com/me/projects` - To get the [about page](https://pranavpandey.com/projects) content.
5. `GET` `https://api.pranavpandey.com/me/work` - To get the [work page](https://pranavpandey.com/work) content.
6. `GET` `https://api.pranavpandey.com/me/contact` - To get the [contact page](https://pranavpandey.com/contact) content.

---

## License

Copyright (c) 2017 Pranav Pandey - Released under the [MIT license](./LICENSE.txt).
