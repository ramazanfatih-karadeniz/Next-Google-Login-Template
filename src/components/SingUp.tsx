import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Icons } from '@/components/icons'
import UserAuthForm from './UserAuthForm';

const SignUp = () => {
    return (
        <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
            <div className='flex flex-col space-y-2 text-center'>
                <Icons.logo className='w-6 h-6 mx-auto' />
                <h1 className='text-2xl font-semibold traciking-tight'>Sign Up!</h1>
                <p className='text-sm max-w-xs mx-auto'>
                    By continuing, you are setting up a Bredit account and agree to our User Agreement and Privacy Policy.
                </p>

                <UserAuthForm />

                {/* sign in with google */}

                <p className='px-8 text-center text-sm text-zinc-700'>
                    Aldready a Breadittor?{' '}
                    <Link href='/sign-in' className='hover:text-zinc-800 text-sm underline underline-offset-4'>
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SignUp;
