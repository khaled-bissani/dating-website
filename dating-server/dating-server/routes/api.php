<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AuthController;



Route::group(["prefix"=>"v0.1"], function(){
    // Route::group(["middleware" => "auth:api"], function(){
        Route::group(["prefix"=>"landing"], function(){
            Route::post("/signup", [LandingController::class, "signUp"])->name("landing-signup");
            Route::post("/continue_signup", [LandingController::class, "continueSignup"])->name("landing-continue-signup");
            Route::post("/login", [LandingController::class, "logIn"])->name("landing-login"); 
        });
    // });
    Route::group(["prefix"=>"home"], function(){
        Route::post("/view_people", [HomeController::class, "viewPeople"])->name("home-view-people");
        Route::group(["prefix"=>"favorite"], function(){
            Route::post("/add_favorite", [HomeController::class, "addFavorite"])->name("home-add-favorite");
            Route::post("/delete_favorite", [HomeController::class, "deleteFavorite"])->name("home-delete-favorite"); 
            Route::get("/view_favorite", [HomeController::class, "viewFavorite"])->name("home-view-favorite");
        });
        Route::group(["prefix"=>"block"], function(){
            Route::post("/add_block", [HomeController::class, "addBlock"])->name("home-add-block");
            Route::post("/delete_block", [HomeController::class, "deleteBlock"])->name("home-delete-block"); 
        });
    });
    Route::group(["prefix"=>"chat"], function(){
        Route::post("/send_chat", [ChatController::class, "sendChat"])->name("send-chat");
        Route::post("/receive_chat", [ChatController::class, "receiveChat"])->name("receive-chat");
    });
    Route::group(["prefix"=>"profile"], function(){
        Route::post("/view_profile", [ProfileController::class, "viewProfile"])->name("view-profile");
        Route::post("/edit_profile", [ProfileController::class, "editProfile"])->name("edit-profile");
        Route::post("/visible", [ProfileController::class, "visibile"])->name("visible-profile");
    });
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
