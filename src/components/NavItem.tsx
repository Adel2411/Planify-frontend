import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  icon: keyof typeof Icons;
  children: React.ReactNode;
}

export function NavItem({ href, icon, children }: NavItemProps) {
  const pathname = usePathname();
  const Icon = Icons[icon] as LucideIcon;

  return (
    <>
      {pathname === href ? (
        <Button variant="secondary" asChild>
          <span
            className={`flex items-center bg-primary/20 hover:bg-primary/20 px-4 py-6 border-l-4 border-l-primary`}
          >
            <Icon className="mr-3 h-5 w-5" />
            <span className="text-sm font-medium">{children}</span>
          </span>
        </Button>
      ) : (
        <Button variant="link" asChild>
          <Link href={href} className={`flex items-center px-4 py-6`}>
            <Icon className="mr-3 h-5 w-5" />
            <span className="text-sm font-medium">{children}</span>
          </Link>
        </Button>
      )}
    </>
  );
}
