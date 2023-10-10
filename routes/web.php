<?php

use App\Http\Controllers\ClaimController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

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

Route::middleware(['auth'])->group(function () {
    Route::get('/', [ClaimController::class, 'show'])->name('claim.show');
    Route::post('/', [ClaimController::class, 'store'])->name('claim.add');
//    Route::post('/', [ClaimController::class, 'filterCategory'])->name('claim.filterClaims');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'role:manager'])->group(function () {
    Route::get('/manager/{id}', [ClaimController::class, 'responseToClaimView'])->name('claim.responseView');
    Route::post('/manager', [ClaimController::class, 'responseToClaim'])->name('claim.response');
});

require __DIR__.'/auth.php';
