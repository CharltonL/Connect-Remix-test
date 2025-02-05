import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { useEffect, useRef } from "react";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

const Sidebar = () => {
  const location = useLocation();

  const buttonRefs: {
    [key: string]: React.RefObject<HTMLButtonElement>;
  } = {
    "/": useRef(null),
    "/calendarResource/calendar": useRef(null),
    "/nine-things": useRef(null),
    "/page3": useRef(null),
    "/page4": useRef(null),
  };

  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    const openSidebarButton = document.getElementById("open-sidebar");

    const toggleSidebar = (e: any) => {
      e.stopPropagation();
      sidebar?.classList.toggle("-translate-x-full");

      if (!sidebar?.classList.contains("-translate-x-full")) {
        buttonRefs[location.pathname]?.current?.focus();
      }
    };

    const closeSidebar = (e: any) => {
      if (
        !sidebar?.contains(e.target) &&
        !openSidebarButton?.contains(e.target)
      ) {
        sidebar?.classList.add("-translate-x-full");
      }
    };

    openSidebarButton?.addEventListener("click", toggleSidebar);
    document.addEventListener("click", closeSidebar);

    return () => {
      openSidebarButton?.removeEventListener("click", toggleSidebar);
      document.removeEventListener("click", closeSidebar);
    };
  }, []);

  return (
    <div
      className="absolute z-50 min-h-screen w-9/12 -translate-x-full transform overflow-y-auto bg-white text-black transition-transform duration-300 ease-in-out"
      id="sidebar"
    >
      <div className="flex flex-col space-y-3 p-4">
        <Link to="/" className="block hover:text-indigo-400">
          <button ref={buttonRefs["/"]}>Home</button>
        </Link>

        <Link
          to="/calendarResource/calendar"
          className="block hover:text-indigo-400"
        >
          <button ref={buttonRefs["/calendarResource/calendar"]}>
            Calendar of Events
          </button>
        </Link>
        <Link to="/nine-things" className="block hover:text-indigo-400">
          <button ref={buttonRefs["/nine-things"]}>Nine Things</button>
        </Link>
      </div>
    </div>
  );
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const navigate = useNavigate();
  return (
    <>
      <Sidebar />
      <div className="h-16"></div>
      <header className="fixed top-0 z-50 h-16 w-full bg-orange-600 p-6">
        <nav className=" flex w-full flex-wrap items-center justify-between gap-4 sm:flex-nowrap md:gap-8">
          <button id="open-sidebar" className="text-white">
            Menu
          </button>
          <button onClick={() => navigate("/")} className="text-white">
            JSL Connect
          </button>
          <button onClick={() => navigate("/")} className="text-white">
            Sign In
          </button>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
