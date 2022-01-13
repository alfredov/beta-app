# beta-app
![Screen Shot 2022-01-12 at 2 50 47 PM](https://user-images.githubusercontent.com/4967157/149204241-10cf2a52-0110-4d23-af93-7aba8d48467d.png)
![Screen Shot 2022-01-12 at 2 55 17 PM](https://user-images.githubusercontent.com/4967157/149204277-687bdabd-01bb-4a7e-bea0-543b984f7594.png)
![Screen Shot 2022-01-12 at 2 55 42 PM](https://user-images.githubusercontent.com/4967157/149204311-8ce75c0a-c2bd-4aaa-a4e2-cad64726d77d.png)

Beta react native app.
This project has reusable ui components to use them in another react-native projects. Components like:
- [@bits-x/button](https://www.npmjs.com/package/@bits-x/button)
- [@bits-x/icon-button](https://www.npmjs.com/package/@bits-x/icon-button)
- [@bits-x/text-input](https://www.npmjs.com/package/@bits-x/text-input)
- [@bits-x/chat](https://www.npmjs.com/package/@bits-x/chat)

## Requirements:
- [Node.js >= v12](https://nodejs.org/es/download/). We recommend to use `version 12`; We are getting some issues with versions greater than 12.
__For handling multiple node.js versions in a computer, we suggest to use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).__


## Pre-running, dependency installation:
```bash
yarn install
```

## Run instructions for Android:
There are 2 options:
- Open up `android` folder through **Android Studio** and Hit the Run ▶️ button
- Have an Android emulator running, or a device connected for then run `yarn android`

## Run instructions for iOS:
There are 2 ways as well:
- Running `yarn ios` command
- Excute this command to open up **XCode**
```bash
$ xed -b ios
```
Then in **Xcode** Hit the Run ▶️ button.
