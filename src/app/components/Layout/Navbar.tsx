// import { IFormData } from "@/app/types/FormData";
import { Button } from '@/app/ui/molecules/Button/Button';
import { Separator } from '@/app/ui/molecules/Separator/Separator';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/app/ui/organisms/Sheet/Sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface NavbarProps {
  // handleSubmit: (data: IFormData) => void;
  showIdForm?: boolean;
}

const Navbar: React.FC<NavbarProps> = (
  {
    // handleSubmit, showIdForm = true
  }
) => {
  const navigation = [
    {
      name: 'Dashboard',
      href: '/dashboard',
      current: location.pathname === '/dashboard',
    },
    {
      name: 'History',
      href: '/managerHistory',
      current: location.pathname === '/managerHistory',
    },
    {
      name: 'Compare',
      href: '/managerCompare',
      current: location.pathname === '/managerCompare',
    },
    {
      name: 'About',
      href: '/about',
      current: location.pathname === '/about',
    },
  ];
  const isLandingPage = location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div data-cy="navbar" className="flex w-full flex-col justify-between">
        <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
          <div className="flex items-center">
            {!isLandingPage && (
              <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    className={
                      item.current
                        ? 'rounded-md px-3 py-2 text-sm font-medium text-foreground'
                        : 'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground'
                    }
                    aria-current={item.current ? 'page' : undefined}
                    data-cy={`navbar-link-${item.name.toLowerCase()}`}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            )}
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>

                <SheetContent side="left">
                  <nav className="grid gap-6 text-lg font-medium">
                    {navigation.map((item) => (
                      <div className="grid gap-2" key={item.name}>
                        <Link
                          href={item.href}
                          className={
                            item.current
                              ? 'rounded-md px-3 py-2 text-sm font-medium text-foreground'
                              : 'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground'
                          }
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                        <Separator />
                      </div>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          {/* <div className="flex items-center justify-end">
              {showIdForm && <IdForm onSubmit={handleSubmit} />}
            </div> */}
        </header>
      </div>
    </>
  );
};
export default Navbar;
