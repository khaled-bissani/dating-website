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

        $message_sent=Chat::join('users','chats.users_id','=','users.id')
        ->select('name','message', 'chats.created_at')
        ->where('users_id',$sender)
        ->where('users1_id',$receiver)
        ->get();
        return response()->json([
            "status" => "Success",
            "data" => $message_sent
        ]);
    }
    function receiveChat(Request $request){
        $sender = $request->sender;
        $receiver = $request->receiver;

        $chat=Chat::join('users','chats.users_id','=','users.id')
        ->select('name','message','chats.created_at')
        ->where('users_id',$sender)
        ->where('users1_id',$receiver)
        ->get();
        return response()->json([
            "status" => "Success",
            "data" => $chat
        ]);
    }
}
