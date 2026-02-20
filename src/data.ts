export interface Book {
    id: string;
    title: string;
    year: number;
    month?: string;
    image: string;
    size: 'normal' | 'wide' | 'tall' | 'large';
    link?: string;
    isWIP?: boolean;
    tags?: string[];
    isMilestone?: boolean;
    milestoneIcon?: string;
}

export const books: Book[] = [
    // 2026
    { id: '26-1', title: '작업 중...', year: 2026, month: 'MAR', image: '', size: 'normal', isWIP: true },

    // 2025
    { id: '25-1', title: '수노로 시작하는 AI 작곡', year: 2025, month: 'DEC', image: '/edit-space/book1.png', size: 'normal', tags: ['제작'] },
    { id: '25-2', title: '처음부터 끝까지 피그마로 팀플하기', year: 2025, month: 'NOV', image: '/edit-space/book2.png', size: 'normal', tags: ['기획', '제작'] },
    { id: '25-sejong', title: "'챗GPT 글쓰기 코치가 되어 줘' 2025년 세종도서 선정", year: 2025, month: 'OCT', image: '', size: 'normal', isMilestone: true },
    { id: '25-3', title: '일잘러의 챗GPT 프롬프트 74가지', year: 2025, month: 'OCT', image: '/edit-space/book3.png', size: 'normal', tags: ['기획', '제작'] },
    { id: '25-4', title: '디자인 트렌드 아카이브 포토샵 & 일러스트레이터', year: 2025, month: 'JUL', image: '/edit-space/book4.png', size: 'normal', tags: ['기획', '제작'] },
    { id: '25-5', title: '한 번에 완성하는 AI 영상 제작 챗GPT+소라+브루', year: 2025, month: 'JUN', image: '/edit-space/book5.png', size: 'normal', tags: ['기획', '제작'] },
    { id: '25-6', title: '챗GPT 글쓰기 코치가 되어 줘', year: 2025, month: 'APR', image: '/edit-space/book6.png', size: 'normal', tags: ['기획', '제작'] },

    // 2024
    { id: '24-1', title: '계절 한 그릇', year: 2024, month: 'NOV', image: '/edit-space/book7.png', size: 'normal', tags: ['기획', '제작'] },
    { id: '24-2', title: '일잘러의 제안서 작성법', year: 2024, month: 'NOV', image: '/edit-space/book8.png', size: 'normal', tags: ['기획', '제작'] },
    { id: '24-3', title: '세계 무기 도감', year: 2024, month: 'OCT', image: '/edit-space/book_weapon.png', size: 'normal', tags: ['제작'] },
    { id: '24-4', title: '일잘러의 UIPath 업무 자동화', year: 2024, month: 'MAY', image: '/edit-space/new_uipath.png', size: 'normal', tags: ['제작'] },

    // 2023
    { id: '23-1', title: '일잘러의 마이크로카피 작성법', year: 2023, month: 'OCT', image: '/edit-space/new_microcopy.png', size: 'normal', tags: ['제작'] },
];

export interface Note {
    id: string;
    title: string;
    year: number;
    month: string;
    link: string;
    tags?: string[];
}

export const notes: Note[] = [
    { id: 'n1', title: '안티그래비티로 웹사이트 생성하기', year: 2026, month: 'FEB', link: '#', tags: ['Thinking'] },
];

export const info = {
    name: '책 먹는 편집자',
    englishName: 'Antigravity',
    bio: '아름다운 표지의 책을 사랑하는 사람. 포토샵, 인디자인 자격증을 보유한 덕에 얼떨결에 IT/실용 편집자가 됐다. 현재는 직장인들에게 필요한 IT 및 실용 콘텐츠(오피스, 디자인 등)를 기획하고 있다.',
    email: 'jsna@jpub.kr',
    twitter: '@gjgygrbb',
    company: '제이펍',
};
