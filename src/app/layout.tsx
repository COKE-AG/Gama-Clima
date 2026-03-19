'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Search, ClipboardList, Wind, FileText, ShieldCheck, 
  Building2, Settings, Box, ListChecks, UserCircle, Bell
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const getPlaceholder = () => {
    const route = pathname.split('/').pop();
    return route ? `Buscar en ${route.toUpperCase()}...` : "Buscar en Gama Clima...";
  };

  const menuItems = [
    { name: "OT", href: "/ot", icon: ClipboardList },
    { name: "Equipos", href: "/equipos", icon: Wind },
    { name: "Guías de Servicio", href: "/guias", icon: FileText },
    { name: "AST", href: "/ast", icon: ShieldCheck },
    { name: "Cliente", href: "/cliente", icon: Building2 },
    { name: "Empresa", href: "/empresa", icon: Settings },
    { name: "Estado de Equipo", href: "/estado-equipo", icon: Box },
    { name: "Tipos de Equipo", href: "/tipos-equipo", icon: ListChecks },
    { name: "Usuarios", href: "/usuarios", icon: UserCircle },
  ];

  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex h-screen bg-slate-50 overflow-hidden text-slate-900">
          
          {/* SIDEBAR */}
          <aside className="w-64 bg-[#0a0b14] text-slate-400 flex flex-col border-r border-slate-800 shrink-0">
            <div className="p-6 mb-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black shadow-lg shadow-blue-500/20">
                  GC
                </div>
                <div>
                  <h1 className="text-white font-bold text-sm tracking-tight leading-none">Gama Clima</h1>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Management</p>
                </div>
              </div>
            </div>
            
            <nav className="flex-1 px-3 space-y-1">
              <p className="px-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-4">Menú Principal</p>
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      isActive 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'hover:bg-slate-900 hover:text-slate-200'
                    }`}
                  >
                    <item.icon size={16} />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="p-6 border-t border-slate-900">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Sistema Operativo</span>
              </div>
            </div>
          </aside>

          {/* CONTENEDOR DERECHO */}
          <div className="flex-1 flex flex-col min-w-0 bg-white">
            
            {/* TOPBAR CORREGIDA */}
            <header className="h-16 border-b border-slate-100 flex items-center justify-between px-8 bg-white shrink-0">
              
              {/* Buscador: Ahora centrado y con ancho balanceado */}
              <div className="flex-1 flex justify-start">
                <div className="relative w-full max-w-xl group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors" size={16} />
                  <input 
                    type="text" 
                    placeholder={getPlaceholder()}
                    className="w-full pl-11 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs font-medium focus:bg-white focus:ring-4 focus:ring-blue-500/5 focus:border-blue-500/20 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>
              
              {/* Acciones Derecha */}
              <div className="flex items-center gap-4">
                <button className="p-2 text-slate-400 hover:bg-slate-50 rounded-lg transition-all relative">
                  <Bell size={18} />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                
                <div className="h-6 w-[1px] bg-slate-100 mx-2"></div>
                
                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <p className="text-xs font-bold text-slate-900 leading-none">Jorge Mardones</p>
                    <p className="text-[10px] text-blue-600 font-black uppercase mt-1">ADMINISTRADOR</p>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden shadow-sm">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jorge" 
                      alt="avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </header>

            {/* ÁREA DE CONTENIDO */}
            <main className="flex-1 overflow-y-auto bg-[#f8fafc] p-8">
              <div className="max-w-[1400px] mx-auto">
                {children}
              </div>
            </main>

          </div>
        </div>
      </body>
    </html>
  );
}