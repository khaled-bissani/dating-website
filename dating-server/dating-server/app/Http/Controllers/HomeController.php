<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

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
    function addFavorite(){

    }
    function deleteFavorite(){

    }
    function viewFavorite(){

    }
    function addBlock(){

    }
    function deleteBlock(){

    }
}
