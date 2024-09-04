<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::disableForeignKeyConstraints();

        Schema::create('alumnis', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->date('birthdate');  // Changed to 'date' for proper date handling
            $table->foreignId('gender_id')->constrained('genders')->onDelete('cascade');
            $table->string('address');
            $table->string('phone'); // Phone numbers should be strings
            $table->string('email')->unique();
            $table->string('vocation_id');
            $table->foreignId('graduation_year_id')->constrained('graduation_years')->onDelete('cascade');
            $table->foreignId('status_id')->constrained('statuses')->onDelete('cascade');
            $table->timestamps(); // Adds created_at and updated_at columns
            $table->index('graduation_year_id');
            $table->index('vocation_id');

        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alumni');
    }
};
