interface Todo {
    title: string;
    description: string;
}

const updateTodo = (todo: Partial<Todo>) => { // Partial makes all Property optional
    
}

interface Blog {
    title: string;
}

const myBlog: Readonly<Blog> = { title: 'I can only read' }; // By using this Readonly I can read something
console.log(myBlog.title);

interface PageInfo {
    title: string;
}

const pages: Record<string, PageInfo> = {
    home: { title: 'It\'s Home' },
    Book: { title: 'It\'s Book' },
    Desktop: { title: 'It\'s Desktop' }
}

const pagesNum: Record<number, PageInfo> = {
    0: { title: 'It\'s Zero' },
    1: { title: 'It\'s One' },
    2: { title: 'It\'s Two' }
}

interface YouTube {
    title: string;
    views: number,
    isGood: Boolean
}

type Video = Pick<YouTube, 'title' | 'isGood'>;
type videoViews = Omit<YouTube, 'views' | 'title'>;

const YouTubeVideo: Video = {
    title: 'TypeScript Full Course - From Beginner to Advanced',
    isGood: true
};

const YouTubeVideoViews: videoViews = {
    // title: 'TypeScript Full Course - From Beginner to Advanced',
    isGood: true
};