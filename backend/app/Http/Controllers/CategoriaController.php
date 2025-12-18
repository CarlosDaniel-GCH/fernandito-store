<?php

namespace App\Http\Controllers;

use App\Models\Categorias;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoriaController extends Controller
{
    public function verCategorias()
    {
        $categorias = Categorias::all();

        if(!$categorias){
            $data = [
                'message' => 'Error al buscar las categorias'
            ];

            return response()->json($data, 400);
        }

        $data = [
            'message' => 'Lista de categorias',
            'categorias' => $categorias
        ];

        return response()->json($data, 200);
    }

    public function verCategoria($id)
    {
        $categoria = Categorias::find($id);

        if(!$categoria){
            $data = [
                'message' => 'No se encontro la categoria'
            ];

            return response()->json($data, 400);
        }

        $data = [
            'message' => 'Categoria encontrada',
            'categoria' => $categoria
        ];

        return response()->json($data, 200);
    }

    public function crearCategorias(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'string|required',
            'descripcion' => 'string|required',
            'imagen' => 'string|max:300'
        ]);

        if($validator->failed()){
            $data = [
                'message' => 'Los tipos de datos son incorrectos',
                'errors' => $validator->errors()
            ];

            return response()->json($data, 400);
        }

        $categorias = Categorias::create([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'imagen' => $request->imagen,
            'activo' => true
        ]);

        if(!$categorias){
            $data = [
                'message' => 'Error al crear la categoria'
            ];

            return response()->json($data, 400);
        }

        $data = [
            'message' => 'Producto creado exitosamente',
            'categoria' => $categorias
        ];

        return response()->json($data, 201);
    }

    public function editarCategorias(Request $request, $id)
    {
        $categorias = Categorias::find($id);
        
        if(!$categorias){
            $data = [
                'message' => 'No se encontró la categoria'
            ];

            return response()->json($data, 400);
        }

        $validator = Validator::make($request->all(), [
            'nombre' => 'string|required',
            'descripcion' => 'string|required',
            'imagen' => 'string|max:300',
            'activo' => 'boolean|required'
        ]);

        if(!$validator->failed()){
            $data = [
                'message' => 'Los tipos de datos son incorrectos',
                'errors' => $validator->errors()
            ];
        }

        $categorias->update([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'imagen' => $request->imagen,
            'activo' => $request->activo
        ]);

        $data = [
            'message' => 'Categoria actualizada!',
            'categoria' => $categorias
        ];

        return response()->json($data, 200);
    }

    public function eliminarCategorias($id)
    {
        $categoria = Categorias::find($id);

        if(!$categoria){
            $data = [
                'message' => 'Categoria no encontrada'
            ];

            return response()->json($data, 400);
        }

        $categoria->delete();

        $data = [
            'message' => 'Producto eliminado exitosamente'
        ];

        return response()->json($data, 200);
    }
}
