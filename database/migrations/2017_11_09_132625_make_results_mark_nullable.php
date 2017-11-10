<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class MakeResultsMarkNullable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('results', function (Blueprint $table) {
            //
            $table->unsignedInteger('mark')->nullable(true)->change()->default(null);
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('results', function (Blueprint $table) {
            $table->unsignedInteger('mark')->nullable(false)->change()->default(0);
        });
    }
}
