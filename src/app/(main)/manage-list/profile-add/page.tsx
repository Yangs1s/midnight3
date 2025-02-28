"use client";

import ProfileBiz from "@/app/(main)/manage-list/_components/profile-biz";
import { useSearchParams } from "next/navigation";
import ProfileAdd from "@/app/(main)/manage-list/_components/profile-add";
import { Suspense } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");

  if (Number(step) === 1) {

    return<Suspense>
    <ProfileBiz />;
    </Suspense>
  } else if (Number(step) === 2) {
    return <Suspense>
    <ProfileAdd />;
    </Suspense>
  }
}
