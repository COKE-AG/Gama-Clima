'use client';

import React from 'react';

export default function TiposEquipoPage() {
  // Datos basados en tu imagen
  const tipos = [
    { nombre: 'TABLERO ELÉCTRICO CLIMATIZACIÓN', id: 'ad1a87ea', equipos: 2, detalles: 3, pautas: 2 },
    { nombre: 'UNIDAD CONDENSADORA VRF', id: '1ac16dfb', equipos: 2, detalles: 4, pautas: 3 },
    { nombre: 'EQUIPO VENTILADOR DE INYECCIÓN', id: '8738d7a5', equipos: 1, detalles: 2, pautas: 2 },
    { nombre: 'EQUIPO VENTILADOR DE EXTRACCIÓN', id: '7848bd75', equipos: 1, detalles: 2, pautas: 2 },
    { nombre: 'TORRE DE ENFRIAMIENTO', id: '7d4e0a68', equipos: 1, detalles: 1, pautas: 3 },
    { nombre: 'CALDERA A GAS', id: 'cb8f3ffc', equipos: 2, detalles: 2, pautas: 2 },
    { nombre: 'EVAPORADORES VRV', id: '48654960', equipos: 1, detalles: 1, pautas: 2 },
    { nombre: 'BOMBA CENTRÍFUGA', id: '8d30833a', equipos: 1, detalles: 1, pautas: 2 },
    { nombre: 'UNIDAD REFRIGERACIÓN', id: '0a49021c', equipos: 1, detalles: 1, pautas: 2 },
    { nombre: 'EQUIPO CHILLER', id: '9c7d4fb2', equipos: 1, detalles: 1, pautas: 1 },
    { nombre: 'EQUIPO CONFORT', id: '65b6e071', equipos: 1, detalles: 2, pautas: 2 },
    { nombre: 'EQUIPO FAN-COIL', id: 'b921c96b', equipos: 2, detalles: 3, pautas: 4 },
    { nombre: 'UNIDAD MANEJADORA DE AIRE', id: '0d819bcb', equipos: 1, detalles: 2, pautas: 2 },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Encabezado con el botón "+" como en tu imagen */}
      <div className="flex justify-between items-center border-b border-slate-200 pb-4">
        <h1 className="text-xl font-bold text-slate-700 uppercase tracking-tight">Equipos Tipo</h1>
        <button className="bg-slate-800 hover:bg-slate-700 text-white w-10 h-10 rounded shadow-sm flex items-center justify-center transition-all">
          <span className="text-2xl font-light">+</span>
        </button>
      </div>

      {/* Tabla Estilo Clean */}
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-[12px] font-bold">
              <th className="px-6 py-4">EquipoTipo_Nombre</th>
              <th className="px-6 py-4">EquipoTipo_ID</th>
              <th className="px-6 py-4">Related EQUIPOSSs</th>
              <th className="px-6 py-4">Related OT_DETALLEs</th>
              <th className="px-6 py-4">Related PAUTAS_MANTENIMIENTOs</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {tipos.map((tipo) => (
              <tr key={tipo.id} className="hover:bg-slate-50/80 transition-colors group">
                <td className="px-6 py-4 text-sm font-medium text-slate-700">{tipo.nombre}</td>
                <td className="px-6 py-4 text-sm text-slate-500 font-mono">{tipo.id}</td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                    Related EQUIPOSSs ({tipo.equipos})
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                    Related OT_DETALLEs ({tipo.detalles})
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                    Related PAUTAS_MANTENIMIENTOs ({tipo.pautas})
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="text-[11px] text-slate-400 font-medium px-2 italic">
        * Se muestran {tipos.length} categorías de equipos registradas.
      </div>
    </div>
  );
}