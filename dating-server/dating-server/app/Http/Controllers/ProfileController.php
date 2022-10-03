<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ProfileController extends Controller
{
    function viewProfile(Request $request){
        $id = $request->id;

        $view_profile = User::
        select('name','email','phone_number','age','picture','bio','interest','location','gender_interested')
        ->where('id',$id)
        ->get();

        return response()->json([
            "status" => "Success",
            "data" => $view_profile
        ]);
    }
    function editProfile(){
        
    }
    function visibile(){
        
    }
}
