<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productos extends Model
{
    use HasFactory;

    protected $table = 'productos';

    protected $fillable = [
        'id_categoria',
        'nombre',
        'descripcion',
        'precio_original',
        'precio_actual',
        'imagen',
        'activo'
    ];

    protected $casts = [
        'activo' => 'boolean',
        'precio_original' => 'decimal:2',
        'precio_actual' => 'decimal:2',
    ];

    public function categoria()
    {
        return $this->belongsTo(Categorias::class, 'id_categoria');
    }
}
