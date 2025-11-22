export interface Post {
  id: number;
  imageUrl: string;
  likeCount: string; // '39K', '48K' 등 표기용
}

export interface UserProfile {
  name: string;
  handle: string; // @username
  avatarUrl: string;
  stats: {
    posts: number;
    followers: string;
    following: number;
  };
  bio: {
    title: string;
    location: string;
    email: string;
  };
  posts: Post[];
}

export const MOCK_USER: UserProfile = {
  name: '제인 스타일',
  handle: 'jane_style',
  avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop', // 남성 아바타 예시
  stats: {
    posts: 152,
    followers: '24.5K',
    following: 892,
  },
  bio: {
    title: '✨ 뷰티 & 라이프스타일 크리에이터',
    location: 'Seoul, Korea',
    email: 'jane@email.com',
  },
  posts: [
    {
      id: 1,
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop', // 인물
      likeCount: '39K',
    },
    {
      id: 2,
      imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&h=600&fit=crop', // 춤/밤거리
      likeCount: '48K',
    },
    {
      id: 3,
      imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=600&fit=crop', // 음식(마늘/요리)
      likeCount: '26K',
    },
    {
      id: 4,
      imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=600&fit=crop', // 산/풍경
      likeCount: '24K',
    },
    {
      id: 5,
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop', // 인물2
      likeCount: '13K',
    },
    {
      id: 6,
      imageUrl: 'https://images.unsplash.com/photo-1504609773096-104ff10cf639?w=600&h=600&fit=crop', // 춤2
      likeCount: '5K',
    },
  ],
};
