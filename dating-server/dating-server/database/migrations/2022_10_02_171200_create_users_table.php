<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('genders', function (Blueprint $table) {
            $table->id();
            $table->string('gender');
            $table->timestamps();
        });
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->integer('phone_number');
            $table->integer('age');
            $table->string('password');
            $table->string('picture');
            $table->string('bio');
            $table->string("interest");
            $table->string('location');
            $table->boolean('visible')->default(1);
            $table->string('gender_interested');
            $table->foreignId('genders_id')->constrained('genders');
            $table->timestamps();
        });
        Schema::create('favorites', function (Blueprint $table) {
            $table->id();
            $table->foreignId('users_id')->constrained('users');
            $table->foreignId('users1_id')->constrained('users');
            $table->timestamps();
        });
        Schema::create('chats', function (Blueprint $table) {
            $table->id();
            $table->string("message");
            $table->foreignId('users_id')->constrained('users');
            $table->foreignId('users1_id')->constrained('users');
            $table->timestamps();
        });
        Schema::create('blocks', function (Blueprint $table) {
            $table->id();
            $table->foreignId('users_id')->constrained('users');
            $table->foreignId('users1_id')->constrained('users');
            $table->timestamps();
        });
        Schema::create('interests', function (Blueprint $table) {
            $table->id();
            $table->string("interest");
            $table->foreignId('users_id')->constrained('users');
            $table->foreignId('users1_id')->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
