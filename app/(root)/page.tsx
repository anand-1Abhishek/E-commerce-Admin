import {Button} from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs';

export default function SetupPage() {
  return (
    <>
    <div >
    <p className='p-4'>home page</p>
        <UserButton afterSignOutUrl='/'/>
    </div>
    
    </>
  );
}
