This project is a basic clone of the Google app with the following features:

### Search functionality: 
Simulating Google search using Google autocomplete suggestions.
### Google Lens simulation: 
A simple feature to emulate Google Lens with predefined dataset.
### Voice Search: 
Implemented using a native module on Android.

# Features

### Search:
Users can enter a query in the search bar and view results using Google autocomplete suggestions.

### Google Lens:
Users can upload or select an image to simulate recognition and display results using predefined dataset.

### Voice Search (Android Only):
Voice search functionality is implemented using a native Android module.
Ensure microphone permissions are granted for this feature to work.

# Limitations
Voice Search and Google Lens are currently supported only on Android, as they rely on native modules. Google Lens search features are implemented using predefined dataset.

# Usage

### Search: 
Enter text in the search bar and can see autocomplete suggestions.

### Google Lens: 
Upload or select an image to view simulated recognition results.

### Voice Search (Android): 
Use the microphone button to speak your query and view search results.

# Notes
The app uses predefined dataset for Google Lens search functionalities.

The project is for educational purposes only and is not affiliated with Google


# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
