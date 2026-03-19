'use client';

import React, { useState } from 'react';

export default function EquiposPorEmpresaPage() {
  // Datos de ejemplo
  const inventario = [
    { id: 'EQ-001', nombre: 'Chiller Principal', empresa: 'BESTIAS SPA', tipo: 'EQUIPO CHILLER', ubicación: 'Azotea Sector A', estado: 'Operativo' },
    { id: 'EQ-002', nombre: 'Bomba de Retorno', empresa: 'BESTIAS SPA', tipo: 'BOMBA CENTRÍFUGA', ubicación: 'Subterráneo -1', estado: 'Operativo' },
    { id: 'EQ-003', nombre: 'Caldera Mural', empresa: 'COMUNIDAD EDIFICIO DIECISEIS', tipo: 'CALDERA A GAS', ubicación: 'Sala Térmica', estado: 'Mantenimiento' },
    { id: 'EQ-004', nombre: 'Fan Coil Piso 4', empresa: 'COMUNIDAD EDIFICIO DIECISEIS', tipo: 'EQUIPO FAN-COIL', ubicación: 'Oficina 402', estado: 'Operativo' },
  ];

  const [filtroEmpresa, setFiltroEmpresa] = useState('Todas');
  const empresas = ['Todas', ...Array.from(new Set(inventario.map(e => e.empresa)))];
  const equiposFiltrados = filtroEmpresa === 'Todas' ? inventario : inventario.filter(e => e.empresa === filtroEmpresa);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Inventario por Empresa</h1>
          <p className="text-slate-500 text-sm font-medium">Equipos mantenidos por Gama Clima</p>
        </div>
        <select 
          onChange={(e) => setFiltroEmpresa(e.target.value)}
          className="bg-white border border-slate-200 text-slate-700 text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        >
          {empresas.map(emp => <option key={emp} value={emp}>{emp}</option>)}
        </select>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden text-slate-700">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-[11px] uppercase tracking-widest font-bold font-sans">
              <th className="px-6 py-4">ID</th>
              <th className="px-6 py-4">Empresa</th>
              <th className="px-6 py-4">Nombre / Ubicación</th>
              <th className="px-6 py-4">Tipo</th>
              <th className="px-6 py-4">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-sans">
            {equiposFiltrados.map((equipo) => (
              <tr key={equipo.id} className="hover:bg-blue-50/20 transition-colors">
                <td className="px-6 py-4 text-xs font-mono text-slate-400">{equipo.id}</td>
                <td className="px-6 py-4 text-sm font-bold text-slate-800">{equipo.empresa}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-700">{equipo.nombre}</span>
                    <span className="text-[11px] text-slate-400">{equipo.ubicación}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[10px] font-bold border border-slate-200 uppercase">
                    {equipo.tipo}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-[11px] font-bold ${equipo.estado === 'Operativo' ? 'text-emerald-600' : 'text-amber-600'}`}>
                    ● {equipo.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}