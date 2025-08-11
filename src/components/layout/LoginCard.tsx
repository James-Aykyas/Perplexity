import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PerplexityLogo } from "@/components/ui/icons";

interface LoginCardProps {
  onClose: () => void;
}

export default function LoginCard({ onClose }: LoginCardProps) {
  return (
    <Card className="w-[280px] bg-[#1A1A1A] border-[#333333] text-white shadow-xl absolute top-12 right-4 login-card-animation">
      <CardHeader className="flex flex-row items-center justify-between pb-3 space-y-0">
        <PerplexityLogo />
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 rounded-full hover:bg-[#333333] text-gray-400"
          onClick={onClose}
        >
          <X size={16} />
        </Button>
      </CardHeader>
      <CardContent className="pb-2">
        <h3 className="text-lg font-medium mb-2">Join Perplexity</h3>
        <p className="text-sm text-gray-400 mb-4">
          Save your chat history and more by creating a free account.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 pt-0">
        <Button className="w-full bg-[#444444] hover:bg-[#555555] text-white">
          Continue with Google
        </Button>
        <Button className="w-full bg-[#444444] hover:bg-[#555555] text-white">
          Continue with Email
        </Button>
      </CardFooter>
    </Card>
  );
}