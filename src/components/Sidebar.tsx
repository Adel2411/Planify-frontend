import { AlignJustify, LogOut, X } from "lucide-react";
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
      <Button
        className="md:hidden fixed right-4 top-4 z-30"
        size="icon"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <AlignJustify />}
      </Button>

      {open && (
        <div
          className="fixed inset-0 bg-secondary/30 md:hidden z-20"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`z-30 fixed inset-y-0 left-0 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div className="flex h-full w-64 flex-col justify-between overflow-y-auto border-r border-border bg-card py-8 px-3">
          <nav className="flex flex-col items-s gap-12 pt-12">
            <div className="flex flex-col">
              <NavItem href="/dashboard/businesses" icon="Building2">
                Businesses
              </NavItem>
              <NavItem href="/dashboard/add-business" icon="Plus">
                Add Business
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
