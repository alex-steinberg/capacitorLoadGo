### To reproduce the behaviour

Note the problem only exists on IOS, Android does not cause any problems.

#### Preparation

```bash
cd capacitorLoadGo
npm install
npx ionic build
npx cap copy ios
cd ios/App
pod install
cd ../..
npx cap open ios
```

```bash
go version       
go version go1.21.2 darwin/arm64
```



#### Case that works

```bash
cd clib
./iosBou.sh
cd ..

```

Build in Xcode and observe the logline:

*[log] - golibFunction GoodMorning answer: Good morning says we - C version*



#### Case that does not work

```bash
cd golib
./go-ios-build.sh
cd ..
```

In Xcode select Product -> Clean Build Folder

Build and run. Note the failure message:

*Webview failed provisional navigation*

*Error: The file "public" couldn't be opened.*



