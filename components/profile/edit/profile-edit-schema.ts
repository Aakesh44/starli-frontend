import { min } from 'date-fns';
import { z } from 'zod';

export const profileEditSchema = z.object({
    name: z.string().min(3, 'Full name is too short').max(50, 'Full name is too long'),
    username: z.string().min(3, 'Username is too short').max(50, 'Username is too long'),
    bio: z.string().min(3, 'Bio is too short').max(120, 'Bio is too long'),
    website: z.url('Invalid URL').optional().or(z.literal('')),
    location: z.string().optional().or(z.literal('')),
    tags: z.array(z.string()).max(10, 'Up to 10 tags'),
    socialLinks: z.object({
        github: z.string().min(3, 'Enter valid url').optional().or(z.literal('')),
        figma: z.string().min(3, 'Enter valid url').optional().or(z.literal('')),
        peerlist: z.string().min(3, 'Enter valid url').optional().or(z.literal('')),
        linkedin: z.string().min(3, 'Enter valid url').optional().or(z.literal('')),
        twitter: z.string().min(3, 'Enter valid url').optional().or(z.literal('')),
        instagram: z.string().min(3, 'Enter valid url').optional().or(z.literal('')),
        dribbble: z.string().min(3, 'Enter valid url').optional().or(z.literal('')),
    })
});

export type ProfileEditFormValues = z.infer<typeof profileEditSchema>;