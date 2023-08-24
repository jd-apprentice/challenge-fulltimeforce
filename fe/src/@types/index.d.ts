interface CommitHistory {
    hash: string;
    commit: {
        author: Author;
        message: string;
    };
    commitUrl: string;
    avatarUrl: string;
}
interface Author {
    name: string;
    email: string;
    date: string;
}

interface Commit {
    commits: CommitHistory[];
}