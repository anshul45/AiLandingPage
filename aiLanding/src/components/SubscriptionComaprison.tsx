import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const SubscriptionComparison = () => {
  return (
    <section className="container mx-auto flex min-h-[80vh] flex-col items-center justify-center py-16 px-4 md:px-6 lg:py-24">
      <div className="mb-8 max-w-2xl text-center md:mb-12">
        <h2 className="text-4xl font-medium md:text-5xl">
          One Subscription for it all
        </h2>
        <p className="mt-4 text-muted-foreground md:text-lg">
          Why pay for multiple expensive subscriptions when one subscription can do it all?
          Access multiple AI models and save 1000's of dollar per year.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-5xl">
      
            <Image
              src="/assets/images/home/multi-sub.png" // Update path
              alt="Multiple Subscriptions Comparison"
              width={650}
              height={400}
              className="h-auto w-full rounded-md object-cover border-[1px] border-gray-700 p-2"
            />
       
     
            <Image
              src="/assets/images/home/single-sub.jpg" 
              alt="Single Pixa Subscription Comparison"
              width={650}
              height={400}
              className="h-auto w-full rounded-md object-cover border-[1px] border-gray-700 p-2"
            />
   
      </div>

      <Button size="lg"  asChild className="group bg-white text-black mt-10 shadow-xl md:mt-12">
        <Link href="#">
          Start Chat
          <ArrowRight className=" h-4 w-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>
    </section>
  );
}

export default SubscriptionComparison