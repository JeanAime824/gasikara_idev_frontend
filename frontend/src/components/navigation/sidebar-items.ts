import {
  LayoutDashboard,
  Calendar as CalendarIcon,
  Fingerprint,
  UsersRound,
  UserRound,
  type LucideIcon,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Dashboards",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    id: 2,
    label: "Pages",
    items: [
      {
        title: "Calendar",
        url: "/calendar",
        icon: CalendarIcon,
      },
      {
        title: "Auth",
        url: "/auth",
        icon: Fingerprint,
        subItems: [
          { title: "Login", url: "/login" },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Lists",
    items: [
      {
        title: "Etudiants ",
        url: "/list_student",
        icon: UsersRound,
      },
      {
        title: "Responsables",
        url: "/dashboard",
        icon: UsersRound,
      }
    ],
  },

];


