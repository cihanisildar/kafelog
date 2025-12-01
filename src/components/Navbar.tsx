'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { IconCoffee } from "@tabler/icons-react";
import { Menu, X, User, LogOut, Settings } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar = ({ transparent = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll to change navbar background
  useEffect(() => {
    if (!transparent) return; // Only run on transparent mode (homepage)

    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.6; // 60vh - hero section height
      setIsScrolled(window.scrollY > heroHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [transparent]);

  const navLinks = [
    { name: 'Kafeler', href: '/cafes' },
    { name: 'Harita', href: '/map' },
    { name: 'Kampanyalar', href: '/campaigns' },
    { name: 'Etkinlikler', href: '/events' },
  ];

  const handleSignOut = async () => {
    await signOut();
    setShowUserMenu(false);
    router.push('/');
    router.refresh();
  };

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    };

    if (showUserMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserMenu]);

  // Determine if we should show solid navbar (either not transparent, or transparent but scrolled)
  const showSolid = !transparent || isScrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
      showSolid
        ? "bg-white border-b border-gray-200 shadow-sm"
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          showSolid
            ? ""
            : "bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20 shadow-lg"
        }`}>
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className={`${
                showSolid
                  ? "bg-orange-500 group-hover:bg-orange-600"
                  : "bg-white/20 group-hover:bg-white/30"
              } p-1.5 rounded-lg transition-colors`}>
                <IconCoffee className="h-5 w-5 text-white transition-transform group-hover:rotate-12" />
              </div>
              <span className={`${
                showSolid ? "text-gray-900" : "text-white"
              } font-semibold text-lg hidden sm:block`}>Kafelog</span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  showSolid
                    ? "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                } text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-200`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Right Aligned */}
          <div className="hidden md:flex items-center gap-2">
            {loading ? (
              <div className={`px-4 py-1.5 text-sm ${
                showSolid ? "text-gray-500" : "text-white/70"
              }`}>Yükleniyor...</div>
            ) : user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 ${
                    showSolid
                      ? "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  <User className="h-5 w-5" />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-1 border border-gray-200 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user.user_metadata?.full_name || 'Kullanıcı'}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <Link href="/profile" onClick={() => setShowUserMenu(false)}>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Profil
                      </button>
                    </Link>
                    <Link href="/settings" onClick={() => setShowUserMenu(false)}>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Ayarlar
                      </button>
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                    >
                      <LogOut className="h-4 w-4" />
                      Çıkış Yap
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login">
                  <button className={`px-4 py-1.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                    showSolid
                      ? "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}>
                    Giriş Yap
                  </button>
                </Link>
                <Link href="/register">
                  <button className={`px-4 py-1.5 rounded-lg font-medium text-sm transition-all duration-200 shadow-lg ${
                    showSolid
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600"
                      : "bg-white text-gray-900 hover:bg-white/90"
                  }`}>
                    Kayıt Ol
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none p-2 rounded-lg transition-colors ${
                showSolid
                  ? "text-gray-900 hover:text-orange-600 hover:bg-orange-50"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden mt-2 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
            showSolid
              ? "bg-white border border-gray-200"
              : "bg-white/10 backdrop-blur-md border border-white/20"
          }`}>
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-2 rounded-xl transition-all duration-200 font-medium text-sm ${
                    showSolid
                      ? "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className={`pt-2 mt-2 space-y-2 ${
                showSolid ? "border-t border-gray-200" : "border-t border-white/20"
              }`}>
                {loading ? (
                  <div className={`px-4 py-2 text-sm text-center ${
                    showSolid ? "text-gray-500" : "text-white/70"
                  }`}>Yükleniyor...</div>
                ) : user ? (
                  <>
                    <div className={`px-4 py-3 rounded-xl ${
                      showSolid ? "bg-gray-50" : "bg-white/5"
                    }`}>
                      <p className={`text-sm font-medium ${
                        showSolid ? "text-gray-900" : "text-white"
                      }`}>{user.user_metadata?.full_name || 'Kullanıcı'}</p>
                      <p className={`text-xs truncate ${
                        showSolid ? "text-gray-500" : "text-white/70"
                      }`}>{user.email}</p>
                    </div>
                    <Link href="/profile" onClick={() => setIsOpen(false)}>
                      <button className={`w-full px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 flex items-center gap-2 ${
                        showSolid
                          ? "bg-gray-50 text-gray-900 hover:bg-gray-100"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}>
                        <User className="h-4 w-4" />
                        Profil
                      </button>
                    </Link>
                    <Link href="/settings" onClick={() => setIsOpen(false)}>
                      <button className={`w-full px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 flex items-center gap-2 ${
                        showSolid
                          ? "bg-gray-50 text-gray-900 hover:bg-gray-100"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}>
                        <Settings className="h-4 w-4" />
                        Ayarlar
                      </button>
                    </Link>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsOpen(false);
                      }}
                      className={`w-full px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                        showSolid
                          ? "bg-gray-100 text-red-600 hover:bg-red-50 border border-gray-300"
                          : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                      }`}
                    >
                      <LogOut className="h-4 w-4" />
                      Çıkış Yap
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <button className={`w-full px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 ${
                        showSolid
                          ? "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300"
                          : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                      }`}>
                        Giriş Yap
                      </button>
                    </Link>
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      <button className={`w-full px-4 py-2 rounded-xl font-medium text-sm transition-all duration-200 ${
                        showSolid
                          ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600"
                          : "bg-white text-gray-900 hover:bg-white/90"
                      }`}>
                        Kayıt Ol
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 