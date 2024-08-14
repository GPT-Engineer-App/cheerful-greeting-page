import React from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  // Throw an error immediately when the component is rendered
  throw new Error("This is a test error thrown on purpose!");

  // The code below will never be reached due to the error above
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-6xl font-bold text-white mb-4">Hello, World!</h1>
      <p className="text-xl text-white mb-8">Welcome to our awesome React app!</p>
      <Button variant="secondary" size="lg">
        Get Started
      </Button>
    </div>
  );
};

export default Index;