<?php

use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\FavoritosController;
use App\Http\Controllers\ProductController;
// use Illuminate\Http\Request;
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

// RUTAS PARA CATEGORIAS
Route::get('/categorias', [CategoriaController::class, 'verCategorias']);
Route::get('/categorias/{id}', [CategoriaController::class, 'verCategoria']);
Route::post('/categorias', [CategoriaController::class, 'crearCategorias']);
Route::put('/categorias/{id}', [CategoriaController::class, 'editarCategorias']);
Route::delete('/categorias/{id}', [CategoriaController::class, 'eliminarCategorias']);

// RUTAS PARA FAVORITOS
Route::get('/favoritos', [FavoritosController::class, 'verFavoritos']);
Route::post('/favoritos', [FavoritosController::class, 'agregarFavoritos']);
Route::delete('/favoritos/{id}',[FavoritosController::class, 'eliminarFavoritos']);