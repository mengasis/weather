# 🌤 Real-time Weather

This app get data from darksky and serves them to a client in React with websocket.

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

### Issues

If you find a bug, please file an issue on [our issue tracker on GitHub](https://github.com/mengasis/websocket-weather/issues).
