<?php

namespace App\Http\Controllers;

use App\Persona;
use Illuminate\Http\Request;

class PersonaController extends Controller
{
    public function index()
    {
        $personas = Persona::orderBy('id','DESC')->paginate(10);
        $data = $personas->getCollection();
        $pagination = array(
            "total" => $personas->total(),
            "current_page" => $personas->currentPage(),
            "per_page" => $personas->perPage(),
            "last_page" => $personas->lastPage(),
            "first_item" => $personas->firstItem(),
            "last_item" => $personas->lastItem(),
            "count" => $personas->count(),
        );
        return response()->json([
            "data" => $data,
            "pagination" => $pagination
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $persona = new Persona();
        $persona->nombre = $request->nombre;
        $persona->apellidos = $request->apellidos;
        $persona->telefono = $request->telefono;
        $persona->direccion = $request->direccion;
        $persona->save();
    }

    public function show($id)
    {
        $persona = new Persona();
        $mostrarPersona = $persona->find($id);
        return response()->json([
            "data" => $mostrarPersona
        ]);
    }

    public function edit($id)
    {
        $persona = new Persona();
        $editarPersona = $persona->find($id);
        return response()->json([
            "data" => $editarPersona
        ]);
    }

    public function update(Request $request, $id)
    {
        $persona = new Persona();
        $personaActualizar = $persona->find($id);
        $personaActualizar->nombre = $request->nombre;
        $personaActualizar->apellidos = $request->apellidos;
        $personaActualizar->telefono = $request->telefono;
        $personaActualizar->direccion = $request->direccion;
        $personaActualizar->update();
    }

    public function destroy($id)
    {
        $persona = new Persona();
        $personaEliminar = $persona->find($id);
        $personaEliminar->delete();
    }

    public function search(Request $request, $buscar){
        $persona = new Persona();
        $buscarPersona = $persona->where('id', 'ilike', '%'.$buscar.'%')
            ->onwhere('nombre', 'ilike', '%'.$buscar.'%')
            ->onwhere('apellidos', 'ilike', '%'.$buscar.'%')
            ->onwhere('telefono', 'ilike', '%'.$buscar.'%')
            ->onwhere('direccion', 'ilike', '%'.$buscar.'%');
        $data = $buscarPersona->getCollection();
        $pagination = array(
            "total" => $buscarPersona->total(),
            "current_page" => $buscarPersona->currentPage(),
            "per_page" => $buscarPersona->perPage(),
            "last_page" => $buscarPersona->lastPage(),
            "first_item" => $buscarPersona->firstItem(),
            "last_item" => $buscarPersona->lastItem(),
            "count" => $buscarPersona->count(),
        );
        return response()->json([
            "data" => $data,
            "pagination" => $pagination,
        ]);
    }
}
