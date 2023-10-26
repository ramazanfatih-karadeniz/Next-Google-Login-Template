"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/DropdownMenu';
import { User } from 'next-auth';
import { FC } from 'react';
import UserAvatar from './UserAvatar';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

interface UserAccountNavProps {
    user: Pick<User, 'name' | 'image' | 'email'>;
}

const UserAccountNav: FC<UserAccountNavProps> = ({ user }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar className='h-8 w-8' user={
                    {
                        name: user.name,
                        image: user.image
                    }} />

            </DropdownMenuTrigger>

            <DropdownMenuContent className='bg-white' align='end'>
                <div className='flex items-center justify-start gap-2 p-2'>
                    <div className='flex flex-col space-y-1 leading-none'>
                        {user.name && <span className='text-sm font-medium text-zinc-700'>{user.name}</span>}
                        {user.email && <span className='text-xs text-zinc-500'>{user.email}</span>}
                    </div>
                </div>
                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <Link href="/">Feed</Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                    <Link href="/r/create">Create Community</Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem onSelect={(event) => {
                    event.preventDefault();
                    signOut({
                        callbackUrl: '/'
                    });
                }} className='cursor-pointer'>
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    );
};

export default UserAccountNav;
