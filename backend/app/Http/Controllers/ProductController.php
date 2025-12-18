<?php

namespace App\Http\Controllers;

use App\Models\Productos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function obtenerProductos()
    {
        $productos = Productos::all();

        if(!$productos){
            $data = [
                'message' => 'Error al obtener productos'
            ];

            return response()->json($data, 400);
        }

        $data = [
            'message' => 'Lista de productos',
            'productos' => $productos
        ];

        return response()->json($data, 200);
    }

    public function obtenerProducto($id)
    {
        $producto = Productos::find($id);

        if(!$producto){
            $data = [
                'message' => 'El producto no ha sido encontrado.'
            ];

            return response()->json($data, 404);
        }
        
        $data = [
            'message' => 'Producto econtrado',
            'producto' => $producto
        ];

        return response()->json($data, 200);
    }

    public function crearProducto(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id_categoria' => 'exists:categorias,id|required',
            'nombre' => 'string|required',
            'descripcion' => 'string|required',
            'precio_original' => 'numeric|min:0|max:999999.99|required',
            'precio_actual' => 'numeric|min:0|max:999999.99|required',
            'imagen' => 'string|max:300'
        ]);

        if($validator->failed()){
            $data = [
                'message' =>  'Los tipos de datos son incorrectos',
                'errors' =>  $validator->errors()
            ];

            return response()->json($data, 400);
        }

        $producto = Productos::create([
            'id_categoria' => $request->id_categoria,
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'precio_original' => $request->precio_original,
            'precio_actual' => $request->precio_actual,
            'imagen' => $request->imagen,
            'activo' => true
        ]);

        if(!$producto){
            $data = [
                'message' => 'Error al crear el producto'
            ];

            return response()->json($data, 500);
        }

        $data = [
            'message' => 'Producto creado exitosamente',
            'producto' => $producto
        ];

        return response()->json($data, 201);
    }
    
    public function editarProducto(Request $request, $id)
    {
        $producto = Productos::find($id);

        if(!$producto){
            $data = [
                'message' => 'El producto no existe'
            ];

            return response()->json($data, 404);
        }

        $validator = Validator::make($request->all(), [
            'id_categoria' => 'exists:categorias,id|required',
            'nombre' => 'string|required',
            'descripcion' => 'string|required',
            'precio_original' => 'numeric|min:0|max:999999.99|required',
            'precio_actual' => 'numeric|min:0|max:999999.99|required',
            'imagen' => 'string|max:300',
            'activo' => 'boolean|required'
        ]);

        if($validator->fails()){
            $data = [
                'message' => 'Error en los tipos de datos',
                'errors' => $validator->errors()
            ];

            return response()->json($data);
        }

        $producto->update([
            'id_categoria' => $request->id_categoria,
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'precio_original' => $request->precio_original,
            'precio_actual' => $request->precio_actual,
            'imagen' => $request->imagen,
            'activo' => $request->activo
        ]);

        if(!$producto){
            $data = [
                'message' => 'Error al editar el producto',
            ];

            return response()->json($data, 400);
        }

        $data = [
            'message' => 'Producto editado exitosamente',
            'producto' => $producto
        ];

        return response()->json($data, 200);
    }

    public function eliminarProducto($id)
    {
        $producto = Productos::find($id);

        if(!$producto){
            $data = [
                'message' => 'No se ha encontrado el producto'
            ];

            return response()->json($data, 404);
        }

        $producto->delete();

        $data = [
            'message' => 'Producto eliminado exitosamente'
        ];

        return response()->json($data, 200);
    }
}
