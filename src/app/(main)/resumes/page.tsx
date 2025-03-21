import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import { resumeDataInclude } from "@/lib/type";
import { auth } from "@clerk/nextjs/server";
import { PlusSquare } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import ResumeItem from "./ResumeItem";

export const metadata: Metadata = {
  title: "Your Resumes",
};

export default async function Page() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const [resumes, totalCount] = await Promise.all([
    prisma.resume.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
      include: resumeDataInclude,
    }),
    prisma.resume.count({
      where: {
        userId,
      },
    }),
  ]);

  const canCreateNewResume = totalCount < 3;

  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 px-3 py-6">
      {canCreateNewResume && (
        <Button asChild className="mx-auto flex w-fit gap-2">
          <Link href="/editor">
            <PlusSquare className="size-5" />
            New Resume
          </Link>
        </Button>
      )}
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">Your Resume</h1>
        <p className="font-semibold">Total Resume : {totalCount}</p>
      </div>
      <div className="flex w-full grid-cols-2 flex-col gap-3 sm:grid md:grid-cols-3 lg:grid-cols-4">
        {resumes.map((resume) => (
          <ResumeItem key={resume.id} resume={resume} />
        ))}
      </div>
    </main>
  );
}
