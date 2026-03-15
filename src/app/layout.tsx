import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gama Clima - Gestión",
  description: "Sistema de mantenimiento y servicios",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // Lista de tus módulos para la barra lateral
  const menuItems = [
    { name: "OT", href: "/ot" },
    { name: "Equipos", href: "/equipos" },
    { name: "Guías de Servicio", href: "/guias" },
    { name: "AST", href: "/ast" },
    { name: "Cliente", href: "/cliente" },
    { name: "Empresa", href: "/empresa" },
    { name: "Estado de Equipo", href: "/estado-equipo" },
    { name: "Tipos de Equipo", href: "/tipos-equipo" },
    { name: "Detalles OT", href: "/detalles-ot" },
    { name: "Pautas", href: "/pautas" },
    { name: "Usuarios", href: "/usuarios" },
  ];

  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-gray-100">
          
          {/* BARRA LATERAL (SIDEBAR) */}
          <aside className="w-64 bg-slate-900 text-white flex flex-col">
            <div className="p-6 text-xl font-bold border-b border-slate-800">
              Gama Clima 
            </div>
            
            <nav className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-1 px-3">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className="block px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="p-4 border-t border-slate-800 text-xs text-slate-400">
              v1.0 - Panel de Control
            </div>
          </aside>

          {/* CONTENIDO PRINCIPAL */}
          <main className="flex-1 p-8">
            <div className="bg-white rounded-xl shadow-sm p-6 min-h-[calc(100vh-4rem)]">
              {children}
            </div>
          </main>

        </div>
      </body>
    </html>
  );
}