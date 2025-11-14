
import React from "react";
import { SignIn } from "@clerk/clerk-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SignInPage = () => {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>
            Welcome back to ArogyaMind
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignIn 
            path="/sign-in" 
            signUpUrl="/sign-up"
            redirectUrl="/"
            appearance={{
              elements: {
                formButtonPrimary: "bg-arogya-primary hover:bg-arogya-secondary text-white",
                card: "shadow-none",
              }
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
