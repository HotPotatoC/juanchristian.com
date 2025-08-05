import Button from "./button";
import Icon from "./icons";

export default function Header() {
  return (
    <header className='@container/header mx-auto w-full max-w-7xl px-4 py-8'>
      <nav className='flex justify-end items-center select-none'>
        {/* <Button className='flex items-center space-x-4 p-2 group focus:ring-2 ring-red hover:bg-red transition-colors duration-500 ease-in-expo'>
          <Icon
            name='sun'
            className='text-red group-hover:text-white dark:group-hover:text-black'
          />
        </Button> */}
        <Button className='flex items-center space-x-4 px-4 py-2 group focus:ring-2 ring-red hover:bg-red transition-colors duration-500 ease-in-expo'>
          <Icon
            name='menu'
            className='text-red group-hover:text-white dark:group-hover:text-black'
          />
          <span className='text-2xl text-red group-hover:text-white dark:group-hover:text-black font-geometric'>
            menu
          </span>
        </Button>
      </nav>
    </header>
  );
}
