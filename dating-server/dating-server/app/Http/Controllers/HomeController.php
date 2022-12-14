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
        select('id','name','age','picture','interest','location','bio')
        ->where('id','!=',$id)
        ->where('genders_id',$gender_interested)
        ->get();

        return response()->json([
            "status" => "Success",
            "data" => $people
        ]);
    }
    function checkFavorite(Request $request){
        $id = $request->id;
        $id1 = $request->id1;

        $checkIfFavorite = Favorite::
        where('users_id',$id)
        ->where('users1_id',$id1)
        ->get();

        if($checkIfFavorite->isEmpty()){
            Favorite::insert([
                'users_id' => $id,
                'users1_id' => $id1
            ]);
        }
        else{
            Favorite::where('users_id',$id)
            ->where('users1_id',$id1)
            ->delete();
        }
        return response()->json([
            "status" => "Success",
        ]);
    }
    function viewFavorite(Request $request){
        $id = $request->id;
        $gender_interested= $request->gender_interested;

        $favorite=User::
        join('favorites','users.id','=','favorites.users1_id')
        ->where('favorites.users_id','=',$id)
        ->where('users.genders_id','=',$gender_interested)
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
    function deleteBlock(Request $request){
        $id = $request->id;
        $id1 = $request->id1;

        Block::where('users_id',$id)
        ->where('users1_id',$id1)
        ->delete();

        return response()->json([
            "status" => "Success",
        ]);
    }
}
