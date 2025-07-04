'use client'
import { SignIn } from "@clerk/nextjs"
import { neobrutalism } from "@clerk/themes"
import Image from "next/image"

 // Marks this file as a Client Component

export default function LandingPage() {
    return (
        <main className="flex items-center p-10 gap-24 animate-fade-in max-md:flex-col">
        {/* Section with branding, heading, subheading, and illustration */}
        <section className="flex flex-col items-center">
            {/* App Logo */}
            <Image
            src='/assets/logo.svg'
            width={300}
            height={300}
            alt="Logo"
            />

             {/* Main Heading */}
            <h1 className="text-2xl font-black lg:text-3xl">
            Your time, perfectly planned
            </h1>

            {/* Subheading */}
            <p className="font-extralight">
            Join millions of professionals who easily book meetings with the #1 scheduling tool<br />
<br />
 <strong>Privacy Policy</strong><br />
  1. <strong>Data Collection:</strong> We collect your name, email, and calendar data with your permission.<br />
  2. <strong>Usage:</strong> Data is used only to manage your calendar events within Calendify.<br />
  3. <strong>Sharing:</strong> We never sell or share your data with third parties.<br />
  4. <strong>Security:</strong> Your information is protected using standard encryption and OAuth.<br />
  5. <strong>Control:</strong> You can revoke access anytime from your Google Account settings.<br /><br />

  <strong>Terms of Service</strong><br />
  1. <strong>Acceptance:</strong> By using Calendify, you agree to these terms.<br />
  2. <strong>Service:</strong> We offer calendar event scheduling using Google Calendar integration.<br />
  3. <strong>Usage:</strong> Do not misuse or disrupt the platform.<br />
  4. <strong>Access:</strong> You must log in via Google to use the service.<br />
  5. <strong>Liability:</strong> We are not responsible for any losses from using the app.<br /><br />

  📧 <strong>Contact:</strong> wasilkhan914@gmail.com
            </p>

             {/* Illustration below the text */}
            <Image
            src='/assets/planning.svg'
            width={500}
            height={500}
            alt="Logo"
            />
        </section>

         {/* Clerk Sign-In Component with custom theme */}
        <div className="mt-3">
            <SignIn
            routing="hash" // Keeps sign-in UI on the same page using hash-based routing
            appearance={{
                baseTheme: neobrutalism, // Applies the neobrutalism theme style to the sign-in UI
            }}
            />
        </div>

        </main>

    )
}