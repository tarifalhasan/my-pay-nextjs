const SidebarData = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: "/assets/images/grid-alt.svg",
  },
  {
    label: "Operaciones",
    href: "/operaciones",
    icon: "/assets/images/grid-alt2.svg",
    children: [
      {
        label: "En proceso",
        href: "/operaciones/in-progress",
      },
      {
        label: "En proceso",
        href: "/operaciones/processed",
      },
    ],
  },
  {
    label: "Usuarios",
    href: "/users",
    icon: "/assets/images/user.svg",
    children: [
      {
        label: "Agregar",
        href: "/users/add",
      },
      {
        label: "Búsqueda ",
        href: "/users/search",
      },
      {
        label: "Avanzada ",
        href: "/users/advanced",
      },
    ],
  },
  {
    label: "Pares",
    href: "/pares",
    icon: "/assets/images/inbox.svg",
  },
  {
    label: "PLI’s",
    href: "/plis",
    icon: "/assets/images/invoice-1.svg",
  },
  {
    label: "Reportes",
    href: "/reportes",
    icon: "/assets/images/reports.svg",
  },
];
