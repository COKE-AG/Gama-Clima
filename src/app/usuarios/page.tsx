'use client';

import React, { useState } from 'react';

export default function UsuariosPage() {
  const [filtro, setFiltro] = useState('Todos');

  const todosLosUsuarios = [
    { id: 1, nombre: 'Jorge Mardones', email: 'jorge@gamaclima.cl', rol: 'Administrador', estado: 'Activo' },
    { id: 2, nombre: 'Juan Pérez', email: 'juan.p@gamaclima.cl', rol: 'Técnico', estado: 'Activo' },
    { id: 3, nombre: 'Ricardo Soto', email: 'r.soto@gamaclima.cl', rol: 'Técnico', estado: 'Inactivo' },
    { id: 4, nombre: 'Andrés Silva', email: 'a.silva@gamaclima.cl', rol: 'Técnico', estado: 'Activo' },
  ];

  const usuariosFiltrados = filtro === 'Todos' 
    ? todosLosUsuarios 
    : todosLosUsuarios.filter(u => u.rol === filtro);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Gestión de Usuarios</h1>
          <p className="text-slate-500 text-sm">Control de acceso y roles del personal</p>
        </div>

        {/* Filtros por Rol */}
        <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
          {['Todos', 'Administrador', 'Técnico'].map((rol) => (
            <button
              key={rol}
              onClick={() => setFiltro(rol)}
              className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                filtro === rol 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {rol}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden text-slate-700">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-[11px] uppercase tracking-widest font-bold">
              <th className="px-6 py-4">Nombre</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Rol</th>
              <th className="px-6 py-4">Estado</th>
              <th className="px-6 py-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {usuariosFiltrados.map((u) => (
              <tr key={u.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 text-sm font-semibold">{u.nombre}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{u.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                    u.rol === 'Administrador' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {u.rol}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${u.estado === 'Activo' ? 'bg-emerald-500' : 'bg-red-400'}`}></div>
                    <span className="text-sm">{u.estado}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-blue-600 text-xs font-bold transition-colors">Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}