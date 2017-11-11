# React VOD CTV

Very simple React video app targeted at Connected TV devices with a single page of content and a mock video player. App can be navigated using keyboard or remote control. Supports running in a desktop browser or FireTV WebView.    

## install

```
$ npm install
```

## Run (webpack-dev-server)

### Run on port 4444 in desktop browser

```
$ npm start
```

### Run from dist on port 80

```
$ npm start:dist
```

Code must be built first. This is useful for loading the app into a WebView on FireTV devices. You can do this using the [Amazon Web App Tester app](https://developer.amazon.com/docs/html5-web-apps/webapp-app-tester.html).    

## build prod (webpack)

### Target desktop browser

```
$ npm run deploy
```

### Target FireTV

```
$ npm run deploy:firetv
```

## tests

```
# Run once
$ npm test

# watch
$ npm run test:watch
```

## Demo

### Browser

[http://ctv.jasoncarpenter.net](http://ctv.jasoncarpenter.net)

| Key | Action |
| --- | --- |
| UP | Up |
| RIGHT | Right |
| DOWN | Down |
| LEFT | Left |
| ENTER | Ok |
| P | Play current video |
| O | Pause current video |
| SPACE | Play/Pause toggle |
| BACKSPACE | Back |

### FireTv

[http://firetv.jasoncarpenter.net](http://firetv.jasoncarpenter.net)