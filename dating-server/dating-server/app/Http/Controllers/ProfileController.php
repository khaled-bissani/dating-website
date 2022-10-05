<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Controllers\Controller;

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
    function editProfile(Request $request){
        $user= User::all();
        $id = $request->id;
        $user = User::find($id);
        $user->name = empty($request->name) ? $user->name : $request->name;
        $user->email = empty($request->email) ? $user->email : $request->email;
        $user->phone_number = empty($request->number) ? $user->phone_number : $request->number;
        $user->age = empty($request->age) ? $user->age : $request->age;
        $user->gender_interested = empty($request->gender_interested) ? $user->gender_interested : $request->gender_interested;
        $user->interest = empty($request->interest) ? $user->interest : $request->interest;
        $user->location = empty($request->location) ? $user->location : $request->location;
        $user->bio = empty($request->bio) ? $user->bio : $request->bio;

        User::where('id',$id)->update([
            'name' => $user->name,
            'email' => $user->email,
            'phone_number' => $user->phone_number,
            'age' => $user->age,
            'gender_interested' => $user->gender_interested,
            'interest' => $user->interest,
            'location' => $user->location,
            // 'picture' => $photo_path,
            'bio' => $user->bio
        ]);
        return response()->json([
            "status" => "Success",
        ]);
    }
    function visibile(Request $request){
        $visible= User::select('visible')->get();
        $id = $request->id;
        $visible = User::find($id);
        if($visible->visible==0){
            User::where('id',$id)->update([
                'visible' => 1
            ]);
        }else{
            User::where('id',$id)->update([
                'visible' => 0
            ]);
        }
        
        return response()->json([
            "status" => "Success",
        ]);
    }
}
