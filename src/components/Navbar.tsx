'use client';

import { cn } from '@/lib/utils';
import { IconCoffee, IconMenu2, IconX } from "@tabler/icons-react";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { WaitlistForm } from './WaitlistForm';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    // { name: 'Menü', href: '/menu' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'İletişim', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-xl bg-white/80 backdrop-blur-sm shadow-md border border-gray-100/50 group-hover:border-amber-600/30 group-hover:bg-amber-600/5 transition-all duration-500">
                <IconCoffee className="h-6 w-6 text-amber-600 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-600/90 to-amber-600/70">
                KafeLog
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-amber-600 transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Waitlist Button - Right Aligned */}
          <div className="hidden md:flex">
            <WaitlistForm />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-amber-600/10 text-amber-600"
                >
                  <IconMenu2 className="h-6 w-6" />
                  <span className="sr-only">Menüyü aç</span>
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full max-w-[400px] p-0 bg-white/95 backdrop-blur-xl border-l border-gray-100"
                showCloseButton={false}
              >
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <SheetTitle className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-white shadow-md border border-gray-100">
                          <IconCoffee className="h-6 w-6 text-amber-600" />
                        </div>
                        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
                          KafeLog
                        </span>
                      </SheetTitle>
                      <SheetClose className="rounded-full p-2.5 hover:bg-gray-100 transition-colors">
                        <IconX className="h-5 w-5 text-gray-500" />
                      </SheetClose>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto">
                    <div className="p-6">
                      <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                          <SheetClose asChild key={link.name}>
                            <Link
                              href={link.href}
                              className="px-4 py-3 text-lg font-medium text-gray-700 hover:text-amber-600 rounded-lg hover:bg-amber-50/50 transition-all duration-200"
                            >
                              {link.name}
                            </Link>
                          </SheetClose>
                        ))}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <SheetClose asChild>
                            <WaitlistForm className="w-full" />
                          </SheetClose>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 