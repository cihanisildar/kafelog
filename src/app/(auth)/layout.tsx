import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Authentication - Kafelog",
    description: "Login or register to access your Kafelog account",
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
