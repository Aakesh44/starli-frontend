import { User } from '@/types/user';
import { format } from 'date-fns';
import { Link2, MapPin, Sparkles } from 'lucide-react';
import React, { JSX } from 'react';

type Props = {
    userData: User
};

const ProfileDashboardMetadata = ({
    userData
}: Props) => {

    if (!userData) return null;

    return (
        <div className='w-full h-fit text-xs flex items-center justify-start md:justify-center flex-wrap gap-4 bg-yellow-3000'>

            <ProfileMetaDataItem
                icon={<Sparkles className="size-4 stroke-[2.5]" />}
                title={`Joined ${format(userData?.createdAt, 'dd MMM yyyy')}`}
            />


            {userData?.location && (

                <ProfileMetaDataItem
                    icon={<MapPin className="size-4 stroke-[2.5]" />}
                    title={userData?.location}
                />

            )}

            {userData?.personal_website && (

                <ProfileMetaDataItem
                    icon={<Link2 className="size-4 stroke-[2.5] -rotate-45" />}
                    title={<a
                        href='https://aakesh.vercel.app'
                        target='_blank'
                        rel="noopener noreferrer"
                        className='hover:underline'

                    >
                        {userData?.personal_website?.split('/')[2]}
                    </a>}
                />

            )}


        </div>
    );
};
type ProfileMetaDataItemProps = {
    icon: JSX.Element,
    title: string | React.ReactNode
}
const ProfileMetaDataItem = ({ icon: Icon, title }: ProfileMetaDataItemProps) => {
    return (
        <div className='w-fit flex items-center justify-start gap-1'>

            {Icon}

            <p>{title}</p>

        </div>
    );
};

export default ProfileDashboardMetadata;