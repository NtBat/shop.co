import { Button } from "@components";
import { MailIcon } from "lucide-react";

export function Newsletter() {
  return (
    <div className="container-custom">
      <div className="flex flex-col items-center justify-between rounded-2xl bg-black px-5 py-5 lg:flex-row lg:px-16 lg:py-9">
        <p className="max-w-full text-xl font-bold uppercase text-white lg:max-w-2xl lg:text-5xl">
          Stay upto date about our latest offers
        </p>
        <form className="w-full space-y-2 lg:w-auto">
          <div className="mt-3 flex h-12 w-full items-center gap-2 rounded-full bg-white px-2 lg:mt-0 lg:w-80">
            <MailIcon size={20} />
            <input
              type="email"
              data-testid="email-input"
              placeholder="Enter your email address"
              className="w-full text-sm font-light text-gray-500 placeholder-gray-500 focus:outline-none"
            />
          </div>
          <Button color="secondary" type="submit" data-testid="submit-button">
            Subscribe to Newsletter
          </Button>
        </form>
      </div>
    </div>
  );
}
