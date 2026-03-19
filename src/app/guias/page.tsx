'use client';

import React, { useState } from 'react';

export default function OTPageOptimized() {
  const [filtro, setFiltro] = useState('Todos');

  const ots = [
    { id: '92a8698f', cliente: 'COMUNIDAD EDIFICIO DIECISEIS', tipo: 'Preventivo', estado: 'Pendiente', fecha: '30/12/2025', prioridad: 'Alta' },
    { id: 'fe1edda3', cliente: 'BESTIAS SPA', tipo: 'Correctivo', estado: 'Programada', fecha: '30/12/2025', prioridad: 'Media' },
    { id: '106f00b6', cliente: 'AFARQ SPA', tipo: 'Correctivo', estado: 'En pausa', fecha: '30/12/2025', prioridad: 'Baja' },
  ];

  return (
    <div className="max-w-[1200px] mx-auto space-y-8">
      
      {/* 1. HEADER ESTRATÉGICO */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Órdenes de Trabajo</h1>
          <p className="text-slate-500 mt-1">Gestiona el flujo de mantenimiento de Gama Clima.</p>
        </div>
        <button className="bg-slate-900 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-900/10 flex items-center gap-2">
          <span>+</span> Crear Nueva Orden
        </button>
      </div>

      {/* 2. TARJETAS DE RESUMEN (ESTO DA INTUICIÓN) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Pendientes</p>
          <p className="text-3xl font-black text-slate-800 mt-1">12</p>
          <div className="mt-2 text-[10px] text-amber-600 font-bold bg-amber-50 px-2 py-1 rounded-md inline-block">Requiere atención</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">En Ruta / Programadas</p>
          <p className="text-3xl font-black text-slate-800 mt-1">05</p>
          <div className="mt-2 text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded-md inline-block">Sincronizado</div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm border-l-4 border-l-blue-500">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Completadas Mes</p>
          <p className="text-3xl font-black text-slate-800 mt-1">48</p>
          <div className="mt-2 text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-md inline-block">+12% vs mes pasado</div>
        </div>
      </div>

      {/* 3. FILTROS Y TABLA LIMPIA */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <div className="flex gap-2">
            {['Todos', 'Pendiente', 'Programada'].map(f => (
              <button 
                key={f}
                onClick={() => setFiltro(f)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${filtro === f ? 'bg-white shadow-sm text-blue-600 ring-1 ring-slate-200' : 'text-slate-400 hover:text-slate-600'}`}
              >
                {f}
              </button>
            ))}
          </div>
          <input type="text" placeholder="Buscar cliente o ID..." className="text-xs border border-slate-200 rounded-lg px-3 py-2 w-64 outline-none focus:ring-2 focus:ring-blue-500/20" />
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-400 text-[10px] uppercase tracking-[0.1em] font-black border-b border-slate-100">
              <th className="px-6 py-4">Información OT</th>
              <th className="px-6 py-4">Cliente</th>
              <th className="px-6 py-4">Estado</th>
              <th className="px-6 py-4">Prioridad</th>
              <th className="px-6 py-4 text-right">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {ots.map((ot) => (
              <tr key={ot.id} className="hover:bg-slate-50/80 transition-all cursor-pointer group">
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">#{ot.id}</span>
                    <span className="text-[11px] text-slate-400">{ot.fecha}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-slate-700">{ot.cliente}</span>
                    <span className="text-[11px] text-slate-400">{ot.tipo}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-black border ${
                    ot.estado === 'Pendiente' ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'
                  }`}>
                    {ot.estado.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className={`text-xs font-bold ${ot.prioridad === 'Alta' ? 'text-red-500' : 'text-slate-400'}`}>
                    {ot.prioridad}
                  </span>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="bg-slate-100 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all text-slate-400">
                    <span className="text-xs font-bold px-2">Gestionar</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}