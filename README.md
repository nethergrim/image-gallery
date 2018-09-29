# Image Gallery
### React-native client for Unsplash.com


## How to build the app

1. Install `react-native`, `node`, `android-sdk`, `xcode`
2. `git clone git@github.com:nethergrim/image-gallery.git`
3. `cd image-gallery`
4. `npm install`
5. run `react-native run-ios`, observe build failure, blame god knows who for build issues and try to fix them (**.6**, **.7**)
6. `cd node_modules/react-native/scripts` then `./ios-install-third-party.sh` then `cd ..` then `cd ./third-party/glog-0.3.4/` then `../../scripts/ios-configure-glog.sh`
7. `cd ../../../../`
8. run `react-native run-ios`, observe another build issue
9. Open project in Xcode
10. Re-link `libfishhook.a` at Libraries > RTCWebSocket > Build Phases
11. Tap `Build` in Xcode, then `react-native run-ios`


## App




### Dev Notes

* I've used Unsplash API to fetch images
* As I didn't want to add redundant web requests to the app, I've removed a web request to fetch full-sized image. Unsplash serves links to full size image by default in /list request.


![https://github.com/nethergrim/image-gallery/raw/master/raw/1.png](https://github.com/nethergrim/image-gallery/raw/master/raw/1.png)

![https://github.com/nethergrim/image-gallery/raw/master/raw/2.png](https://github.com/nethergrim/image-gallery/raw/master/raw/2.png)