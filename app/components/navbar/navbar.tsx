import { ActionButton, Logo, NavigationMenuBar  } from ".";

export function NavBar() {
  return (
    <div className="flex justify-between items-center py-2 px-10 border-b">
        <Logo/>
        <NavigationMenuBar/>
        <ActionButton/>
    </div>
  )
}

