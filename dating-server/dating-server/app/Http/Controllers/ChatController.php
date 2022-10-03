<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chat;

class ChatController extends Controller
{
    function sendChat(Request $request){
        $message = $request->message;
        $sender = $request->sender;
        $receiver = $request->receiver;

        Chat::insert([
            'message' => $message,
            'users_id' => $sender,
            'users1_id' => $receiver
        ]);
        return response()->json([
            "status" => "Success",
        ]);
    }
    function receiveChat(){
        
    }
}
