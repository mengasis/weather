# 🌤 Real-time Weather

This app get data from darksky and serves them to a client in React with websocket.

![image](https://user-images.githubusercontent.com/21364178/50752123-9a1d0e80-122b-11e9-858c-f774ee4f7ff6.png)

![image](https://user-images.githubusercontent.com/21364178/50752147-c0db4500-122b-11e9-8003-2c0449f28995.png)

### Running the app

You must set your API KEY in the docker-compose

```
  server:
    environment:
      - API_KEY=<Add your API Key"
```
Run the application 🚀

    $ docker-compose up

> Open http://localhost to view it in the browser.

### Stopping the app

    $ docker-compose down

### Deploy to Heroku

#### Deploy Client

Git initialize

    $ cd client
    $ git init
    $ git add . && git commit -m "Init app"
    
Login with your user

    $ heroku login
    $ heroku create <App Name>
    $ heroku git:remote -a <App Name>

Set environment variables

    $ heroku config:set REACT_APP_MODE="production"
    $ heroku config:set REACT_APP_HOST=<API HOST>
    $ heroku config:set REACT_APP_PORT=<API PORT>

Deploy application

    $ git push heroku master

#### Deploy Server

Git initialize

    $ cd server
    $ git init
    $ git add . && git commit -m "Init app"
    
Login with your user

    $ heroku login
    $ heroku create <App Name>
    $ heroku git:remote -a <App Name>

Add Redis to Heroku

    $ heroku addons:create heroku-redis:hobby-dev -a <App Name>

Set environment variables

    $ heroku config:set API_KEY=<Add your API KEY>
    $ heroku config:set PORT=1337

Deploy application

    $ git push heroku master

### Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/mengasis/websocket-weather/issues).
