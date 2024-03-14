import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "~/components/ui/sheet"

import { Button } from "~/components/ui/button"
import { AlignJustify } from "lucide-react"
import { Link } from "@remix-run/react"

export const ActionButton = () => {
  return (
    <div>
        <div className="md:hidden">
           <Sheet>
             <SheetTrigger>
                <AlignJustify/>
             </SheetTrigger>
             <SheetContent>
                <SheetHeader>
                    <SheetDescription>
                        <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                          <Link to="/">
                            Sign In
                          </Link>
                          <Link to="/">
                            Get Started 
                          </Link>
                          <Link to="/">
                            Pricing
                          </Link>
                          <Link to="/">
                            Contact
                          </Link>
                          <Link to="/">
                            About
                          </Link>
                        </div>
                    </SheetDescription>
                </SheetHeader>
             </SheetContent>
           </Sheet>
        </div>

        <div>
           <div className="hidden md:flex md:space-x-4">
             <Button className="text-md"
              variant="ghost"
             >
               Sign In
             </Button>

             <Button className="text-md bg-blue-500">
               Get Stared
             </Button>
           </div>
        </div>
    </div>
  )
}


