import { instance } from './instance';
import type {
  UserInfoResponse,
  CompanyInfoResponse,
  UpdateUserInfoRequest,
  UpdateUserInfoResponse,
  UserPostsResponse,
} from '@/types/mypage';
import type { Applicant } from '@/types/company';

export const mypageApi = {
  getUserInfo: async (): Promise<UserInfoResponse | CompanyInfoResponse> => {
    const response = await instance.get('/mypage/info');
    return response.data;
  },

  updateUserInfo: async (data: UpdateUserInfoRequest): Promise<UpdateUserInfoResponse> => {
    const response = await instance.patch('/mypage/update', data);
    return response.data;
  },

  getUserPosts: async (userId?: string): Promise<UserPostsResponse> => {
    const endpoint = userId ? `/mypage/posts/${userId}` : '/mypage/posts';
    const response = await instance.get(endpoint);
    return response.data;
  },

  getCompanyProfile: async (companyId?: string): Promise<CompanyInfoResponse> => {
    const endpoint = companyId ? `/companies/${companyId}` : '/mypage/company';
    const response = await instance.get(endpoint);
    return response.data;
  },

  getBookmarkedApplicants: async (companyId?: string): Promise<Applicant[]> => {
    const endpoint = companyId 
      ? `/companies/${companyId}/bookmarked` 
      : '/mypage/bookmarked';
    const response = await instance.get(endpoint);
    return response.data;
  },

  toggleBookmarkApplicant: async (applicantId: string): Promise<{ isBookmarked: boolean }> => {
    const response = await instance.post(`/mypage/bookmark/${applicantId}`);
    return response.data;
  },
};
