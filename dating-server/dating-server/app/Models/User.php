<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    public function Favorite(){
        return $this->belongsToMany(Favorite::class, 'favorites','users_id','users_id1');
    }
    public function Block(){
        return $this->belongsToMany(Block::class, 'blocks','users_id','users_id1');
    }
    public function Chat(){
        return $this->belongsToMany(Favorite::class, 'chats','users_id','users_id1');
    }
    public function Interest(){
        return $this->belongsToMany(Favorite::class, 'interests','users_id','users_id1');
    }
}
