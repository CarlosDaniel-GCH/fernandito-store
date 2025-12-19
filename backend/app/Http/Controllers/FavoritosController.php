<?php

namespace App\Http\Controllers;

use App\Models\Favoritos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FavoritosController extends Controller
{
    public function verFavoritos()
    {
        $favoritos = Favoritos::all();

        if(!$favoritos){
            $data = [
                'message' => 'Error al cargar favoritos'
            ];

            return response()->json($data, 400);
        }

        $data = [
            'message' => 'Mis favoritos',
            'favoritos' => $favoritos
        ];

        return response()->json($data, 200);
    }

    public function agregarFavoritos(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_producto' => 'exists:productos,id|required'
        ]);

        if($validator->failed()){
            $data = [
                'message' => 'Los tipos de datos son incorrectos',
                'errors' => $validator->errors()
            ];

            return response()->json($data, 400);
        }

        $favoritos = Favoritos::create([
            'id_producto' => $request->id_producto
        ]);

        if(!$favoritos){
            $data = [
                'message' => 'Error al agregar favoritos'
            ];

            return response()->json($data, 400);
        }

        $data = [
            'message' => 'Producto agregado a favoritos',
            'id_producto' => $request->id_producto
        ];

        return response()->json($data, 201);
    }

    public function eliminarFavoritos($id)
    {
        $favorito = Favoritos::find($id);

        if(!$favorito){
            $data = [
                'message' => 'El registro no se ha encontrado'
            ];

            return response()->json($data, 400);
        }

        $favorito->delete();

        $data = [
            'message' => 'Registro eliminado exitosamente'
        ];

        return response()->json($data, 200);
    }
}
