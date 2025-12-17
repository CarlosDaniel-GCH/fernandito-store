<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// RUTAS PARA PRODUCTOS
Route::get('/productos', [ProductController::class, 'obtenerProductos']);
Route::get('/productos/{id}', [ProductController::class, 'obtenerProducto']);
Route::post('/productos', [ProductController::class, 'crearProducto']);
Route::put('/productos/{id}', [ProductController::class, 'editarProducto']);
Route::delete('/productos/{id}', [ProductController::class, 'eliminarProducto']);