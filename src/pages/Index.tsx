import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function PerplexityClone() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-3xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-5xl font-normal text-white">
              perplexity
            </h1>
          </div>
          
          <div className="relative w-full">
            <Input 
              className="w-full py-6 px-4 bg-[#1A1A1A] border-[#333333] rounded-xl text-white placeholder:text-gray-400 focus-visible:ring-[#444444] focus-visible:ring-offset-0 focus-visible:border-[#444444] perplexity-search-input"
              placeholder="Ask anything..."
            />
            <Button 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#444444] hover:bg-[#555555] rounded-lg h-10 w-10 p-0"
            >
              <Search size={18} />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-4 hover:bg-[#222222] transition-colors cursor-pointer">
              <h3 className="font-medium mb-2">Instant Answers</h3>
              <p className="text-sm text-gray-400">Get accurate answers with sources from across the web</p>
            </div>
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-4 hover:bg-[#222222] transition-colors cursor-pointer">
              <h3 className="font-medium mb-2">AI Search</h3>
              <p className="text-sm text-gray-400">Search the web with AI-powered results</p>
            </div>
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-4 hover:bg-[#222222] transition-colors cursor-pointer">
              <h3 className="font-medium mb-2">Deep Research</h3>
              <p className="text-sm text-gray-400">Explore topics in depth with comprehensive analysis</p>
            </div>
            <div className="bg-[#1A1A1A] border border-[#333333] rounded-xl p-4 hover:bg-[#222222] transition-colors cursor-pointer">
              <h3 className="font-medium mb-2">Chat History</h3>
              <p className="text-sm text-gray-400">Save and continue your conversations</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
