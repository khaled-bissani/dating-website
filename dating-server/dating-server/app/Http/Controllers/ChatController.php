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
    function receiveChat(Request $request){
        $sender = $request->sender;
        $receiver = $request->receiver;

        $chat=Chat::
        select('message')
        ->where('users_id',$sender)
        ->where('users1_id',$receiver)
        ->get();
        return response()->json([
            "status" => "Success",
            "data" => $chat
        ]);
    }
}
