import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface NavItemProps {
  href: string;
  icon: keyof typeof Icons;
  children: React.ReactNode;
}

export function NavItem({ href, icon, children }: NavItemProps) {
  const Icon = Icons[icon] as LucideIcon;

  return (
    <Link
      href={href}
      className="flex items-center px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
    >
      <Icon className="mr-3 h-5 w-5" />
      <span className="text-sm font-medium">{children}</span>
    </Link>
  );
}
