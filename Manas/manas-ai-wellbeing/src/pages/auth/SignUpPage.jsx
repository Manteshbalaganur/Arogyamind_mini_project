
import React from "react";
import { SignUp } from "@clerk/clerk-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SignUpPage = () => {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create an Account</CardTitle>
          <CardDescription>
            Join ArogyaMind today
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignUp 
            path="/sign-up" 
            signInUrl="/sign-in"
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

export default SignUpPage;
