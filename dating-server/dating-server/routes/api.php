<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ProfileController;


Route::group(["prefix","v0.1"], function(){
    Route::group(["prefix","landing"], function(){
        Route::post("/signup", [LandingController::class, "signUp"])->name("landing-signup");
        Route::post("/login", [LandingController::class, "logIn"])->name("landing-login"); 
    });
    
    
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
