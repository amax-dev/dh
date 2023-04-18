<?php

use App\Http\Controllers\DhontController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Dhont/Grafik');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::get('/dhont',[DhontController::class,'index'])->name('dhont');
Route::get('/dhont/grafik',[DhontController::class,'index1'])->name('dhont.grafik');
Route::post('/dhont',[DhontController::class,'index'])->name('dhont.post');
Route::put('/dhont',[DhontController::class,'store'])->name('dhont.store');
Route::get('/dhont/{slug}',[DhontController::class,'show'])->name('dhont.show');

Route::get('/cg',[\App\Http\Controllers\CgIzboriController::class,'show'])->name('cg');
Route::get('/cg/{godina}',[\App\Http\Controllers\CgIzboriController::class,'show'])->name('cg.godina');

require __DIR__.'/auth.php';
