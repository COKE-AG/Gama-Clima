'use client';

import React, { useState } from 'react';

export default function ClientesPage() {
  const [busqueda, setBusqueda] = useState('');

  // Datos basados en tu captura
  const clientes = [
    { id: 'CL0001', nombre: 'AFARQ SPA', rut: '52003934-1', email: '', comuna: 'VITACURA', region: 'RM', telefono: '' },
    { id: 'CL0002', nombre: 'LTDC SPA', rut: '52004432-9', email: '', comuna: 'VITACURA', region: 'RM', telefono: '' },
    { id: 'CL0003', nombre: 'COMUNIDAD EDIFICIO MATTA', rut: '53307190-2', email: 'contacto@matta.cl', comuna: 'LAS CONDES', region: 'RM', telefono: '56,233,401,866' },
    { id: 'CL0004', nombre: 'EDIFICIO ISIDORA MAGDALENA', rut: '53307401-4', email: 'wsepulveda@res-chile.cl', comuna: 'LAS CONDES', region: 'RM', telefono: '' },
    { id: 'CL0005', nombre: 'COMUNIDAD EDIFICIO DIECISEIS', rut: '53310162-3', email: '', comuna: 'HUECHURABA', region: 'RM', telefono: '' },
    { id: 'CL0006', nombre: 'COMUNIDAD MONSEÑOR SOTERO', rut: '53311486-5', email: 'miguel.salinas@cbre.com', comuna: 'PROVIDENCIA', region: 'RM', telefono: '56,983,041,878' },
  ];

  const filtrados = clientes.filter(c => 
    c.nombre.toLowerCase().includes(busqueda.toLowerCase()) || 
    c.rut.includes(busqueda)
  );

  return (
    <div className="max-w-[1200px] mx-auto space-y-6 text-slate-700">
      
      {/* HEADER ESTRATÉGICO */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Cartera de Clientes</h1>
          <p className="text-slate-500 text-sm">Base de datos centralizada de empresas y comunidades.</p>
        </div>
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md flex items-center gap-2">
          <span className="text-lg">+</span> Agregar Cliente
        </button>
      </div>

      {/* KPI CARDS (INTUICIÓN RÁPIDA) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Total Clientes</p>
          <p className="text-3xl font-black text-slate-800 mt-1">{clientes.length}</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm border-l-4 border-l-blue-500">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Comuna Principal</p>
          <p className="text-xl font-bold text-slate-800 mt-1">Las Condes</p>
          <p className="text-[10px] text-blue-600 font-bold">45% de la cartera</p>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Contratos Activos</p>
          <p className="text-3xl font-black text-emerald-600 mt-1">100%</p>
        </div>
      </div>

      {/* FILTROS Y TABLA */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 bg-slate-50/50 border-b border-slate-200 flex justify-between items-center">
          <div className="relative w-72">
            <input 
              type="text" 
              placeholder="Buscar por nombre o RUT..." 
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
            <span className="absolute left-3 top-2.5 text-slate-400 text-xs">🔍</span>
          </div>
          <div className="flex gap-2">
             <button className="p-2 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition-colors">
               <span className="text-xs italic">Filtrar por Región</span>
             </button>
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-slate-400 text-[10px] uppercase tracking-[0.15em] font-black border-b border-slate-100">
              <th className="px-6 py-4">Cliente / ID</th>
              <th className="px-6 py-4">Identificación (RUT)</th>
              <th className="px-6 py-4">Contacto Directo</th>
              <th className="px-6 py-4">Ubicación</th>
              <th className="px-6 py-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filtrados.map((c) => (
              <tr key={c.id} className="hover:bg-blue-50/30 transition-all group">
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{c.nombre}</span>
                    <span className="text-[10px] font-mono text-slate-400 tracking-tighter">{c.id}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded">
                    {c.rut}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-col gap-1">
                    {c.email ? (
                      <span className="text-[11px] text-blue-600 underline truncate w-40">{c.email}</span>
                    ) : (
                      <span className="text-[11px] text-slate-300 italic">Sin correo registrado</span>
                    )}
                    <span className="text-[11px] text-slate-500 font-bold">{c.telefono}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-700">{c.comuna}</span>
                    <span className="text-[10px] text-slate-400 uppercase tracking-tighter font-black">{c.region}</span>
                  </div>
                </td>
                <td className="px-6 py-5 text-right">
                  <button className="bg-slate-100 text-slate-500 px-3 py-1.5 rounded-lg text-[10px] font-black hover:bg-slate-900 hover:text-white transition-all uppercase">
                    Ver Perfil
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