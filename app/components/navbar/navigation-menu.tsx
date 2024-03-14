import { Link, Path } from "@remix-run/react"
import {  ComponentPropsWithRef, ComponentPropsWithoutRef, ElementRef, forwardRef} from "react"
// import PropTypes from 'prop-types';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu"

import { cn } from "~/lib/utils"
import { Logo } from "."

const components: { title: string, description: string,route: string}[] = [
    {
        title: "Frozen",
    
        description:
          "Recommended template for most use cases. Includes all the components you need to get started.",
          route: '/'
      },
      {
        title: "Swift",
    
        description:
          "A template with a minimal set of components. Use this template if you want to build your own components.",
          route: '/'
      },
      {
        title: "Tuscany",
    
        description:
          "Advanced template with more components and features. Use this template if you want to build a complex UI.",
          route: '/'
      },
      {
        title: "Amber",
    
        description: "Great for building a marketing or landing page.",
          route: '/'
      },
      {
        title: "Tide",
    
        description:
          "Layered template with a sidebar navigation. Great for building a dashboard or admin panel.",
          route: '/'
      },
      {
        title: "Mint",
     
        description:
          "Nice template for building a blog or a content-heavy website.",
        route: '/'
      },
  ]

export const NavigationMenuBar =()=> {
  // const divRef = useRef<HTMLDivElement>(null)
  return (
      <NavigationMenu>
        <NavigationMenuList
        className="hidden md:flex md:space-x-4"
        >
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link to="/"
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    >
                      <Logo  />
                      <div className="mb-2 mt-4 text-lg font-medium">
                       Bird Software
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                      eCommerce platform for selling digital products.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem  title="Introduction" to="/">
                    Learn about the basics of Bird.
                </ListItem>
                <ListItem  title="Demo" to="/">
                  How to build a store in 60 seconds with Bird
                </ListItem>
                <ListItem  title="Community" to="/">
                    Join the community and get help or support.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Templates</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    to={component.route}
                  
                
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink
              className="font-medium"
              >
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className="
              font-medium">
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
         */}
        </NavigationMenuList>
      </NavigationMenu>

     




 )
}

const Menu = forwardRef<
   ElementRef<"div">,
   ComponentPropsWithRef<"div"> 
   >(
    ({children, ...props }, ref) => (
      <div
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-center space-x-1",
        )}
        {...props}
      >
        {children}
      </div>
    )
  )
 
Menu.displayName = "Menu"

//  const ListItem = forwardRef<
//     ElementRef<"li">,
//     ComponentPropsWithoutRef<"li">
//   >(({ className, title, to, children,  ...props }, ref) => {
//     return (
//       <li
//           ref={ref}
//             className={cn(
//               "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//               className
//             )}
//             {...props}
      
//       >
//         <NavigationMenuLink asChild>
//           <Link to={to}
        
//           >
//             <div className="text-sm font-medium leading-none">{title}</div>
//             <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//               {children}
//             </p>
//           </Link>
//         </NavigationMenuLink>
//       </li>
//     )
//   })


//   ListItem.propTypes = {
//   className: PropTypes.string,
//   title: PropTypes.string,
//   to: PropTypes.string,
// };

// ListItem.displayName = "ListItem"o



interface ListItemProps extends ComponentPropsWithoutRef<"li"> {
  to: string | Partial<Path>;   
  title: string;
}


const ListItem = forwardRef<
  ElementRef<"li">,
  ListItemProps
>(({ className, to, title, children, ...props }, ref) => {
  return (
    <li
      ref={ref}
      className={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
      {...props}
    >
      <NavigationMenuLink asChild>

        <Link to={to}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>

      </NavigationMenuLink>
    </li>
  );
});

// ListItem.propTypes = {
//   className: PropTypes.string,
//   title: PropTypes.string.isRequired, // Make title required
//   to: PropTypes.string,
// };

ListItem.displayName = "ListItem";