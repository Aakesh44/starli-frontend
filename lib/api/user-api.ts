import { ProfileEditFormValues } from "@/components/profile/edit/profile-edit-schema";
import api from "../api";
import { log } from "../utils";

const getUserProfile = async () => {
    const response = await api.get('/api/user/profile');
    log('getUserProfile response', response);
    return response;
};

const getUserProfileByUsername = async (username: string) => {
    const response = await api.get(`/api/user/u/${username}`);
    log('getUserProfileByUsername response', response);
    return response;
}

const getUserProfileById = async (id: string) => {
    const response = await api.get(`/api/user/profile/${id}`);
    log('getUserProfileById response', response);
    return response;
};

type UpdateProfileValues = {
    name: string;
    username: string;
    bio: string;
    profile_tags: string[];
    social_links: {
        github?: string | undefined;
        figma?: string | undefined;
        peerlist?: string | undefined;
        linkedin?: string | undefined;
        twitter?: string | undefined;
        instagram?: string | undefined;
        dribbble?: string | undefined;
    };
    personal_website?: string | undefined;
    location?: string | undefined;
};

const updateProfile = async (values: UpdateProfileValues) => {
    const response = await api.patch('/api/user/profile', values);
    log('updateProfile response', response);
    return response;
}

const updateProfilePicture = async (formData: FormData) => {
    const response = await api.patchForm(
        '/api/user/profile_picture',
        formData
    );
    log('updateProfilePicture response', response);
    return response;
};

const removeProfilePicture = async () => {
    const response = await api.patch('/api/user/remove_profile_picture');
    log('removeProfilePicture response', response);
    return response;
}

const updateProfileCoverPicture = async (formData: FormData) => {
    const response = await api.patchForm(
        '/api/user/profile_cover_picture',
        formData,
    );
    log('updateProfileCoverPicture response', response);
    return response;
};

const checkUsernameAvailability = async (username: string) => {
    const response = await api.get('/api/user/check_username_availability/' + username);
    log('checkUsernameAvailability response', response);
    return response;
};

const userApi = {
    getUserProfile,
    getUserProfileByUsername,
    getUserProfileById,
    updateProfile,
    updateProfilePicture,
    removeProfilePicture,
    updateProfileCoverPicture,
    checkUsernameAvailability
};
export default userApi;