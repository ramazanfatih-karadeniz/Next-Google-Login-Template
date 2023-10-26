import { User } from 'next-auth'
import { FC } from 'react'
import { Avatar, AvatarFallback } from './ui/Avatar'
import Image from 'next/image'
import { Icons } from './icons'
import { AvatarProps } from '@radix-ui/react-avatar'

interface UserAvatarProps extends AvatarProps {
    user: Pick<User, 'name' | 'image'>
}

const UserAvatar: FC<UserAvatarProps> = ({ user, ...props }) => {
    return <Avatar {...props}>
        {user.image ? (<div className='relative aspect-square h-full w-full'>
            <Image
                fill
                src={user.image}
                alt='Profile picture'
                referrerPolicy='no-referrer'
            />
        </div>) :
            (<AvatarFallback>
                <span className='sq-only'>{user?.name}</span>
                <Icons.user className='w-4 h-4' />
            </AvatarFallback>)
        }

    </Avatar>
}

export default UserAvatar