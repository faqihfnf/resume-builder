import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import prisma from "@/lib/prisma";
import { resumeDataInclude } from "@/lib/type";
import { auth } from "@clerk/nextjs/server";
import { FileText, Info, PlusCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import ResumeItem from "./ResumeItem";

export const metadata: Metadata = {
  title: "Resumefly | Your Resumes",
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
  const remainingResumes = 3 - totalCount;

  return (
    <main className="mx-auto w-full max-w-7xl space-y-8 px-3 py-6">
      {/* Header Section dengan Stats dan Actions */}
      <div className="space-y-6">
        {/* Title dan Description */}
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Create Your Resume Now
          </h1>
          <p className="text-lg text-muted-foreground">
            Manage and create your professional resumes with ease and
            efficiency.
          </p>
          <p className="text-lg text-foreground">
            Before applying for a job, analyze your resume{" "}
            <Link
              href="https://www.resumeaizer.my.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              Here!
            </Link>
          </p>
        </div>

        {/* Stats Card */}
        <Card className="mx-auto max-w-md shadow-md shadow-indigo-400 transition-all duration-300 hover:bg-gradient-to-l">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <FileText className="size-5 text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row items-center gap-2">
                    <p className="text-sm font-semibold">Total Resumes :</p>
                    <p className="text-xl font-semibold">{totalCount}</p>
                  </div>
                  {canCreateNewResume && (
                    <p className="-mt-2 text-xs text-muted-foreground">
                      {remainingResumes} Slot{remainingResumes !== 1 ? "s" : ""}{" "}
                      Remaining
                    </p>
                  )}
                </div>
              </div>
              <div className="text-right">
                <Badge variant={canCreateNewResume ? "default" : "secondary"}>
                  {totalCount}/3
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-4">
          {canCreateNewResume ? (
            <Button
              asChild
              size="lg"
              className="text-md bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 font-semibold text-white shadow-lg shadow-fuchsia-200 transition-all duration-300 hover:bg-gradient-to-l hover:shadow-fuchsia-300 sm:w-auto"
            >
              <Link href="/editor">
                <PlusCircle className="size-5" />
                Create Resume
              </Link>
            </Button>
          ) : (
            <div className="space-y-2 text-center">
              <Button
                disabled
                size="lg"
                className="text-md bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 font-semibold text-white shadow-lg shadow-fuchsia-200 transition-all duration-300 hover:bg-gradient-to-l hover:shadow-fuchsia-300 sm:w-auto"
              >
                <PlusCircle className="size-5" />
                Create Resume
              </Button>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground text-red-500">
                <Info className="mt-2 size-4" />
                <span className="mt-2">
                  You have reached the maximum of 3 resumes !!!
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Resume Grid */}
      {totalCount > 0 ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Recent Resumes</h2>
            <Badge variant="outline" className="gap-1 p-2">
              <FileText className="size-3" />
              {totalCount} resume{totalCount !== 1 ? "s" : ""}
            </Badge>
          </div>
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 md:grid-cols-3">
            {resumes.map((resume) => (
              <ResumeItem key={resume.id} resume={resume} />
            ))}
          </div>
        </div>
      ) : (
        <Card className="mx-auto max-w-md">
          <CardContent className="space-y-4 p-8 text-center">
            <div className="mx-auto w-fit rounded-full bg-muted p-4">
              <FileText className="size-8 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">No resumes yet</h3>
              <p className="text-sm text-muted-foreground">
                Create your first professional resume to get started
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
