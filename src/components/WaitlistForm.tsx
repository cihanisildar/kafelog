"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconCheck, IconLoader2, IconX } from "@tabler/icons-react";

export const WaitlistForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Failed to submit');

      setStatus("success");
      setEmail("");
      setTimeout(() => {
        setIsOpen(false);
        setStatus("idle");
      }, 1500);
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus("error");
    }
  };

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Sıraya Katıl
      </Button>

      {/* Dialog Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
            {/* Close Button */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <IconX size={20} />
            </button>

            {/* Dialog Content */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Bekleme Listesine Katılın
              </h3>
              <p className="text-gray-600">
                KafeLog&apos;un lansmanından ilk siz haberdar olun.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="E-posta adresiniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "submitting" || status === "success"}
                className="w-full"
              />
              <Button 
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {status === "submitting" && (
                  <IconLoader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {status === "success" ? (
                  <>
                    <IconCheck className="mr-2 h-4 w-4" />
                    Kaydolundu!
                  </>
                ) : (
                  "Kaydol"
                )}
              </Button>
              {status === "error" && (
                <p className="text-sm text-red-500 text-center">
                  Bir hata oluştu. Lütfen tekrar deneyin.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}; 