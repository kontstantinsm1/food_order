import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark text-white px-4 text-center">
      <h1 className="text-5xl font-bold mb-6">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-lightGray max-w-md mb-8">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link href="/" passHref>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          Return to Home
        </Button>
      </Link>
    </div>
  );
}
