'use client'; // Esto permite que los botones funcionen

import React, { useState } from 'react';

export default function OTPage() {
  // Datos base
  const allOts = [
    { id: '92a8698f', cliente: 'COMUNIDAD EDIFICIO DIECISEIS', tipo: 'Mantenimiento', estado: 'Pendiente', fecha: '30/12/2025 20:45:59' },
    { id: 'COR27030', cliente: 'COMUNIDAD EDIFICIO ROSARIO N', tipo: 'Reparación', estado: 'Pendiente', fecha: '06/01/2026 11:43:06' },
    { id: 'fe1edda3', cliente: 'BESTIAS SPA', tipo: 'Correctivo', estado: 'Programada', fecha: '30/12/2025 22:00:21' },
    { id: 'b7be7b20', cliente: 'BESTIAS SPA', tipo: 'Correctivo', estado: 'Programada', fecha: '31/12/2025 18:05:12' },
    { id: '106f00b6', cliente: 'AFARQ SPA', tipo: 'Correctivo', estado: 'En pausa', fecha: '30/12/2025 20:45:22' },
    { id: 'CORPRUEBA', cliente: 'AFARQ SPA', tipo: 'Preventivo', estado: 'En pausa', fecha: '10/03/2026 16:52:37' },
  ];

  // Estado para el filtro
  const [filtro, setFiltro] = useState('Todos');

  // Lógica de filtrado
  const otsFiltradas = filtro === 'Todos' 
    ? allOts 
    : allOts.filter(ot => ot.estado === filtro);

  // Colores según estado
  const getBadgeColor = (estado: string) => {
    switch (estado) {
      case 'Pendiente': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Programada': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'En pausa': return 'bg-slate-100 text-slate-600 border-slate-200';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Encabezado */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Órdenes de Trabajo</h1>
          <p className="text-slate-500 text-sm">Vista general de servicios</p>
        </div>
        
        {/* Botones de Filtro */}
        <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
          {['Todos', 'Pendiente', 'Programada', 'En pausa'].map((opcion) => (
            <button
              key={opcion}
              onClick={() => setFiltro(opcion)}
              className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                filtro === opcion 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {opcion}
            </button>
          ))}
        </div>
      </div>

      {/* Tabla Unificada */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-[11px] uppercase tracking-widest font-bold">
              <th className="px-6 py-4">ID OT</th>
              <th className="px-6 py-4">Cliente</th>
              <th className="px-6 py-4">Tipo</th>
              <th className="px-6 py-4">Estado</th>
              <th className="px-6 py-4 text-right">Fecha Creación</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {otsFiltradas.map((ot) => (
              <tr key={ot.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-4 text-sm font-semibold text-blue-600">{ot.id}</td>
                <td className="px-6 py-4 text-sm text-slate-700 font-medium">{ot.cliente}</td>
                <td className="px-6 py-4 text-sm text-slate-500">{ot.tipo}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-md border text-[11px] font-bold ${getBadgeColor(ot.estado)}`}>
                    {ot.estado}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-400 text-right font-mono">{ot.fecha}</td>
              </tr>
            ))}
            {otsFiltradas.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-slate-400 text-sm">
                  No se encontraron órdenes con el estado: <span className="font-bold">{filtro}</span>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="text-[11px] text-slate-400 font-medium px-2">
        Mostrando {otsFiltradas.length} resultados
      </div>
    </div>
  );
}