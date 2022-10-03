<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class LandingController extends Controller
{
    function signUp(Request $request){
        $name = $request->name;
        $email = $request->email;
        $number = $request->phone_number;
        $age = $request->age;
        $gender_interested= $request->gender_interested;
        $gender = $request->gender;

        User::insert([
            'name' => $name,
            'email' => $email,
            'phone_number' => $number,
            'age' => $age,
            'gender_interested' => $gender_interested,
            'genders_id' => $gender
        ]);
        return response()->json([
            "status" => "Success",
        ]);
    }
    function continueSignup(Request $request){
        $id = $request->id;
        $interest = $request->interest;
        $location = $request->location;
        $password = $request->password;

        User::where('id',$id)->update([
            'interest' => $interest,
            'location' => $location,
            'password' => $password
        ]);
        return response()->json([
            "status" => "Success",
        ]);
    }
    function logIn(){

    }
}
