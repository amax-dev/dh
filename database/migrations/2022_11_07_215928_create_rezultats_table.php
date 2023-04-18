<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rezultats', function (Blueprint $table) {
            $table->id();
            $table->foreignId('izbor_id')->constrained()->cascadeOnDelete();
            $table->string('lista');
            $table->string('skraceno');
            $table->integer('glasova');
            $table->string('boja');
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
        Schema::dropIfExists('rezultats');
    }
};
