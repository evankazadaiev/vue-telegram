# Vue telegram.

## Demo. Make sure you have created telegram app client [here](https://my.telegram.org/).

1. [Demo](https://vuegram.herokuapp.com/login).

## Technologies/frameworks used:

1. [Vue](https://vuejs.org/) JS framework.
1. [Vue Cli](https://cli.vuejs.org/) Command line tools v4.
1. [Vuex](https://vuex.vuejs.org/) State management library.
1. [MTProto](https://github.com/zerobias/telegram-mtproto) Telegram Messenger protocol.
1. [Yarn](https://yarnpkg.com/en/) Package manager.
1. [ESLint]() Linting.

The instructions below will help you set up the development environment.

## Project setup Environment

1. First you need to obtain API id for telegram: Sign up for Telegram using any application.
Log in to your Telegram core: https://my.telegram.org.
Go to 'API development tools' and fill out the form.
You will get basic addresses as well as the api_id and api_hash parameters required for user authorization.
For the moment each number can only have one api_id connected to it.

1. Make sure you have Vue CLI 4 installed, you can install it by going to [Vue website](https://cli.vuejs.org/guide/installation.html)
1. Clone the repository `git clone https://github.com/evankazadaiev/vue-telegram.git`
1. `cd vue-telegram`
1. `yarn install` to install the dependencies.
1. `yarn serve` to compile and hot-reload for development.
1. Visit `http://localhost:8080/` and start developing.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
