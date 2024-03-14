import { Separator } from '@/components/ui/separator';
import brand from '@/love/dFunction/gBrand';
import FinalRouteName from '@/love/gRoute/FinalRouteName';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from '@/components/ui/button';
import { LogIn, Signpost } from 'lucide-react';
import { ModeToggle } from '@/components/mode-toggle';


function getInitials(firstName, lastName) {
  // Extract the first character of the first name and last name
  const firstInitial = firstName?.charAt(0).toUpperCase();
  const lastInitial = lastName?.charAt(0).toUpperCase();
  
  // Return the initials
  return `${firstInitial}${lastInitial}`;
}

function HeaderComponent({ Redux }) {
  return (
    Redux.state.RequiredObject?.Loading ? null :
    <React.Fragment>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <Link to={FinalRouteName.GlobalRoute.HomeRoute} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img className="w-10 h-10 object-cover object-center rounded" alt="hero" src={brand().logo} />
            <span className="ml-3 text-xl">{brand().name}</span>
          </Link>
          {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-white">First Link</Link>
            <Link className="mr-5 hover:text-white">Second Link</Link>
            <Link className="mr-5 hover:text-white">Third Link</Link>
            <Link className="mr-5 hover:text-white">Fourth Link</Link>
          </nav> */}

          {Redux.state.RequiredObject?.Loading ? null :
            Redux.state.ReceivedObject?.ProfileRetrieve ? (
              <div className="flex items-center space-x-2 mr-2">
                <Avatar>
                  <AvatarImage src={Redux.state.ReceivedObject?.ProfileRetrieve?.eImage?.url} />
                  <AvatarFallback>{getInitials(
                    Redux.state.ReceivedObject?.ProfileRetrieve?.eFirstName, 
                    Redux.state.ReceivedObject?.ProfileRetrieve?.eLastName
                  )}</AvatarFallback>
                </Avatar>
                <div className='hidden sm:block' >
                  <p className="text-sm font-medium leading-none">{`${Redux.state.ReceivedObject?.ProfileRetrieve?.eFirstName} ${Redux.state.ReceivedObject?.ProfileRetrieve?.eLastName}`}</p>
                  <p className="text-sm text-muted-foreground">{Redux.state.ReceivedObject?.ProfileRetrieve?.cRole?.aTitle}</p>
                </div>
              </div>
            ) : (
              <div>
                <Button variant="outline" asChild className="mr-2 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                  <Link to={FinalRouteName.AuthRoute.LoginRoute} >
                    <LogIn className="mr-2 h-4 w-4" /> Sign In
                  </Link>
                </Button>

                <Button variant="outline" asChild className="inline-flex items-center text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                  <Link to={FinalRouteName.AuthRoute.RegisterRoute} >
                    <Signpost className="mr-2 h-4 w-4" /> Sign Up
                  </Link>
                </Button>
              </div>
            )
          }
          <ModeToggle />

        </div>
      </header>
      <Separator/>
    </React.Fragment>
  );
}

export default HeaderComponent;
