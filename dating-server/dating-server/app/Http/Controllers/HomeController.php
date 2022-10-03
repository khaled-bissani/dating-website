<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Favorite;
use App\Models\Block;

class HomeController extends Controller
{
    function viewPeople(Request $request){
        $id = $request->id;
        $gender_interested= $request->gender_interested;

        $people=User::
        select('name','age','picture','interest','location')
        ->where('id','!=',$id)
        ->where('genders_id',$gender_interested)
        ->get();

        return response()->json([
            "status" => "Success",
            "data" => $people
        ]);
    }
    function addFavorite(Request $request){
        $id = $request->id;
        $id1 = $request->id1;

        Favorite::insert([
            'users_id' => $id,
            'users1_id' => $id1
        ]);
        return response()->json([
            "status" => "Success",
        ]);
    }
    function deleteFavorite(Request $request){
        $id = $request->id;
        $id1 = $request->id1;

        Favorite::where('users_id',$id)
        ->where('users1_id',$id1)
        ->delete();

        return response()->json([
            "status" => "Success",
        ]);
    }
    function viewFavorite(Request $request){
        $id = $request->id;

        $favorite=Favorite::where('users_id',$id)
        ->get();

        return response()->json([
            "status" => "Success",
            "data" => $favorite
        ]);
    }
    function addBlock(Request $request){
        $id = $request->id;
        $id1 = $request->id1;

        Block::insert([
            'users_id' => $id,
            'users1_id' => $id1
        ]);
        return response()->json([
            "status" => "Success",
        ]);
    }
    function deleteBlock(){

    }
}
