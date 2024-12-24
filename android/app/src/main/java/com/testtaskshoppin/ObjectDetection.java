package com.testtaskshoppin;

import android.annotation.SuppressLint;
import android.provider.Settings;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ObjectDetection extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    // Constructor
    public ObjectDetection(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "ObjectDetection"; // This is the name that will be used in JavaScript
    }

    // Method to get the Device ID
    @ReactMethod
    public void getDeviceID(Promise promise) {
        try {
            @SuppressLint("HardwareIds")
            String deviceID = Settings.Secure.getString(reactContext.getContentResolver(), Settings.Secure.ANDROID_ID);
            promise.resolve(deviceID); // Resolve the promise with the device ID
        } catch (Exception e) {
            promise.reject("Error", "Failed to retrieve device ID: " + e.getMessage());
        }
    }
}
