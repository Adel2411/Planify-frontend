import { LogOut } from "lucide-react";
import { NavItem } from "./NavItem";
import { ProfileButton } from "./ProfileButton";
import { Button } from "./ui/button";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Sidebar({ open, setOpen }: SidebarProps) {
  return (
    <>
      <button
        className="md:hidden fixed left-32 top-4 z-40 p-2 bg-background rounded-md shadow-md" // Moved from left-4 to left-20
        onClick={() => setOpen(!open)}
      >
        <svg
          className="w-6 h-6 text-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        className={`fixed inset-y-0 left-0 transform ${open ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div className="flex h-full w-64 flex-col justify-between overflow-y-auto border-r border-border bg-card py-8 px-3">
          <nav className="flex flex-col items-s gap-12 pt-12">
            <div className="flex flex-col gap-4">
              <NavItem href="/dashboard/businesses" icon="Building2">
                Businesses
              </NavItem>
              <NavItem href="/dashboard/settings" icon="Settings">
                Settings
              </NavItem>
            </div>
            <Button variant="destructive" className="flex items-center mx-4">
              <LogOut className="mr-3 h-5 w-5" />
              <span className="text-sm font-medium">Logout</span>
            </Button>
          </nav>
          <div>
            <ProfileButton />
          </div>
        </div>
      </div>
    </>
  );
}
