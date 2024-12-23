package com.testtaskshoppin;

import android.Manifest;
import android.annotation.SuppressLint;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.provider.Settings;
import android.speech.RecognitionListener;
import android.speech.RecognizerIntent;
import android.speech.SpeechRecognizer;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.ArrayList;
import java.util.Locale;

public class ReactOneCustomMethod extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    private SpeechRecognizer speechRecognizer;

    ReactOneCustomMethod(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "ReactOneCustomMethod";
    }

    @ReactMethod
    public void getPhoneID(Promise response) {
        try {
            @SuppressLint("HardwareIds") String id = Settings.Secure.getString(reactContext.getContentResolver(), Settings.Secure.ANDROID_ID);
            response.resolve(id);
        } catch (Exception e) {
            response.reject("Error", e);
        }
    }

    @ReactMethod
    public void startListening(Promise promise) {
        try {
            // Check for microphone permission
            if (ActivityCompat.checkSelfPermission(reactContext, Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED) {
                promise.reject("PermissionError", "Microphone permission not granted");
                return;
            }

            // Initialize SpeechRecognizer on the main thread
            new Handler(Looper.getMainLooper()).post(() -> {
                if (speechRecognizer == null) {
                    speechRecognizer = SpeechRecognizer.createSpeechRecognizer(reactContext);
                }

                Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
                intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
                intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, Locale.ENGLISH); // Explicitly set to English
                intent.putExtra(RecognizerIntent.EXTRA_CALLING_PACKAGE, reactContext.getPackageName());
                intent.putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, 5); // Allow multiple results
                intent.putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, true); // Allow partial results

                speechRecognizer.setRecognitionListener(new RecognitionListener() {
                    @Override
                    public void onReadyForSpeech(Bundle params) {
                        Log.d("SpeechRecognizer", "Ready for speech");
                    }

                    @Override
                    public void onBeginningOfSpeech() {
                        Log.d("SpeechRecognizer", "Speech started");
                    }

                    @Override
                    public void onRmsChanged(float rmsdB) {
                        Log.d("SpeechRecognizer", "RMS dB: " + rmsdB);
                    }

                    @Override
                    public void onBufferReceived(byte[] buffer) {
                        Log.d("SpeechRecognizer", "Buffer received");
                    }

                    @Override
                    public void onEndOfSpeech() {
                        Log.d("SpeechRecognizer", "Speech ended");
                    }

                    @Override
                    public void onError(int error) {
                        String errorMessage = getErrorText(error);
                        Log.e("SpeechRecognizer", "Error: " + errorMessage);
                        promise.reject("SpeechError", errorMessage);
                    }

                    @Override
                    public void onResults(Bundle results) {
                        ArrayList<String> matches = results.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION);
                        if (matches != null && !matches.isEmpty()) {
                            Log.d("SpeechRecognizer", "Results: " + matches.toString());
                            promise.resolve(matches.get(0)); // Return the first match
                        } else {
                            Log.e("SpeechRecognizer", "No speech recognized");
                            promise.reject("NoResult", "No speech recognized");
                        }
                    }

                    @Override
                    public void onPartialResults(Bundle partialResults) {
                        ArrayList<String> partial = partialResults.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION);
                        if (partial != null) {
                            Log.d("SpeechRecognizer", "Partial results: " + partial.toString());
                        }
                    }

                    @Override
                    public void onEvent(int eventType, Bundle params) {
                        Log.d("SpeechRecognizer", "Event: " + eventType);
                    }
                });

                speechRecognizer.startListening(intent);
            });
        } catch (Exception e) {
            promise.reject("StartListeningError", e);
        }
    }

    @ReactMethod
    public void stopListening(Promise promise) {
        try {
            if (speechRecognizer != null) {
                // Stop the listening process if it's currently active
                speechRecognizer.stopListening();
                promise.resolve("Listening stopped");
            } else {
                promise.reject("Error", "SpeechRecognizer not initialized or already stopped");
            }
        } catch (Exception e) {
            promise.reject("StopListeningError", e);
        }
    }
    

    @Override
    public void onCatalystInstanceDestroy() {
        super.onCatalystInstanceDestroy();
        if (speechRecognizer != null) {
            speechRecognizer.destroy();
            speechRecognizer = null;
        }
    }

    private String getErrorText(int errorCode) {
        switch (errorCode) {
            case SpeechRecognizer.ERROR_AUDIO:
                return "Audio recording error";
            case SpeechRecognizer.ERROR_CLIENT:
                return "Client-side error";
            case SpeechRecognizer.ERROR_INSUFFICIENT_PERMISSIONS:
                return "Insufficient permissions";
            case SpeechRecognizer.ERROR_NETWORK:
                return "Network error";
            case SpeechRecognizer.ERROR_NETWORK_TIMEOUT:
                return "Network timeout";
            case SpeechRecognizer.ERROR_NO_MATCH:
                return "No match found"; // No match found can happen if speech is unclear or not recognized
            case SpeechRecognizer.ERROR_RECOGNIZER_BUSY:
                return "Recognizer busy";
            case SpeechRecognizer.ERROR_SERVER:
                return "Server error";
            case SpeechRecognizer.ERROR_SPEECH_TIMEOUT:
                return "No speech input";
            default:
                return "Unknown error";
        }
    }
}
