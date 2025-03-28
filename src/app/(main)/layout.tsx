"use client";

import FooterNav from "@/components/footer-nav";
import { Suspense } from "react";

export default function MainLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen w-full relative mb-12">
            <div className={'p-4 '}>
              <Suspense>
                {children}
              </Suspense>
            </div>
            <FooterNav/>
        </div>
    );
}
