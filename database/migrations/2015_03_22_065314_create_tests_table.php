<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTestsTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tests', function (Blueprint $table) {
            $table->increments('id');
            $table->string('slug', 100)->unique();
            $table->string('title', 255)->unique();
            $table->text('content');
            $table->text('wysiwyg');
            $table->tinyInteger('selection');
            $table->string('image', 255);
            $table->string('email', 255);
            $table->string('url', 255);
            $table->tinyInteger('ordr');
            $table->boolean('is_active');
            $table->date('datefield');
            $table->dateTime('datetimefield');
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
        Schema::drop('users');
    }

}
