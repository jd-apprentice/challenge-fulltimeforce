interface GithubResponse {
    sha: string;
    node_id: string;
    commit: Commit;
    url: string;
    html_url: string;
    comments_url: string;
}
interface Commit {
    author: Author;
    committer: Commiter;
    message: string;
    tree: Tree;
    url: string;
    comment_count: number;
    verification: Verification;
}
interface Author {
    name: string;
    email: string;
    date: string;
}
interface Tree {
    sha: string;
    url: string;
}
interface Verification {
    verified: boolean;
    reason: string;
    signature: string;
    payload: string;
}
interface Commiter extends Author {
}
