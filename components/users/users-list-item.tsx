import React from 'react';
import { Button } from '../ui/button';
import { ProfileImageAvatar } from '../ui/avatar';
import { User } from '@/types/user';
import followApi from '@/lib/api/follow-api';

interface Props {
    user: User;
};

const UsersListItem = ({ user: user }: Props) => {
    return (
        <div className='w-full h-20 px-5 flex items-center justify-start gap-3 border-b border-b-border/60 hover:bg-slate-50'>

            <div className='grow min-w-0 h-full flex items-center justify-start gap-2 bg-pink-2000'>
                <ProfileImageAvatar
                    src={user.picture?.url}
                    alt='user profile'
                    className='size-10'
                />
                <div className='h-full. grow min-w-0 flex flex-col'>
                    <p className='font-semibold w-full truncate'>{user.name}</p>
                    <p className='w-full truncate'>{user.bio}</p>
                </div>
            </div>

            {user.following === true ? (
                <Button onClick={() => followApi.unfollow(user.id)} className='px-6 h-8 border-border/60' variant={'outline'}>
                    Following
                </Button>
            ) :
                user?.following === false && (

                    <Button className='px-6 h-8 border-border/60'>
                        Follow
                    </Button>
                )}

        </div>
    );
};

export default UsersListItem;