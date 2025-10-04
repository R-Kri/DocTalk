"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { motion } from "motion/react";
import Link from "next/link";
import { Stethoscope, MessageSquare, Brain, Shield, Clock, Users } from "lucide-react";

export default function HeroSectionOne() {

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative px-4 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                <Stethoscope className="h-4 w-4" />
                AI-Powered Healthcare
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl"
            >
              Voice-First{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Medical AI
              </span>{" "}
              Assistant
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
            >
              Transform healthcare interactions with AI that understands medical context,
              provides instant consultations, and delivers personalized care recommendations
              through natural voice conversations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex items-center justify-center gap-4"
            >
              <SignedOut>
                <Button
                  asChild
                  className="group relative inline-flex items-center gap-2 rounded-lg bg-blue-600 px-10 py-5 text-lg font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Link href="/sign-in">
                    <MessageSquare className="h-5 w-5" />
                    Start Consultation
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </Link>
                </Button>
              </SignedOut>

              <SignedIn>
                <Button
                  asChild
                  className="group relative inline-flex items-center gap-2 rounded-lg bg-blue-600 px-10 py-5 text-lg font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Link href="/dashboard">
                    <MessageSquare className="h-5 w-5" />
                    Start Consultation
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </Link>
                </Button>
              </SignedIn>

            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            <div className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Intelligent Diagnosis
              </h3>
              <p className="text-gray-600">
                Advanced AI analyzes symptoms and medical history to provide accurate preliminary assessments.
              </p>
            </div>

            <div className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                24/7 Availability
              </h3>
              <p className="text-gray-600">
                Get instant medical consultations anytime, anywhere with our always-available AI doctors.
              </p>
            </div>

            <div className="group rounded-2xl bg-white p-8 shadow-sm transition-all duration-200 hover:shadow-lg">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                HIPAA Compliant
              </h3>
              <p className="text-gray-600">
                Your medical data is protected with enterprise-grade security and privacy standards.
              </p>
            </div>
          </motion.div>

          {/* Demo Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20"
          >
            <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-1">
              <div className="rounded-3xl bg-white p-8">
                <div className="text-center">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">
                    Experience the Future of Healthcare
                  </h2>
                  <p className="mb-8 text-gray-600">
                    See how our AI medical assistant provides personalized consultations
                  </p>
                </div>

                <div className="aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                        <MessageSquare className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-lg font-medium text-gray-700">
                        Interactive Demo Coming Soon
                      </p>
                      <p className="mt-2 text-sm text-gray-500">
                        Voice-powered medical consultations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="relative z-50 flex w-full items-center justify-between bg-white/80 backdrop-blur-md px-6 py-4">
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
          <Stethoscope className="h-5 w-5 text-white" />
        </div>
        <h1 className="text-xl font-bold text-gray-900">
          DocTalk AI
        </h1>
      </Link>

      <div className="flex items-center gap-4">
        <SignedOut>
          <div className="flex items-center gap-3">
            <Link href="/sign-in">
              <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
                Sign In
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                Get Started
              </button>
            </Link>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                Dashboard
              </Button>
            </Link>
            <Link href="/history">
              <Button variant="ghost" size="sm">
                History
              </Button>
            </Link>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8"
                }
              }}
            />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};
