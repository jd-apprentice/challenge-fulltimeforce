import { render } from '@testing-library/react';
import { CommitHistory } from '@/components/commits/CommitHistory';

const sampleCommits = [
    {
        hash: 'abc123',
        commit: {
            message: 'Sample commit message 1',
            author: {
                name: 'John Doe',
                email: 'johndoe@example.com',
                date: '2021-01-01T00:00:00Z'
            },
        },
        commitUrl: 'https://github.com/user/repo/commit/abc123',
        avatarUrl: 'https://avatars.githubusercontent.com/u/1234567?v=4'
    },
];

test('renders commit history correctly', () => {
    const { getByText } = render(<CommitHistory commits={sampleCommits} />);

    const titleElement = getByText(/Commit History/i);
    expect(titleElement).toBeInTheDocument();

    const commitMessageElement = getByText(/Sample commit message 1/i);
    expect(commitMessageElement).toBeInTheDocument();

    const commitHashElement = getByText(/abc123 -/i);
    expect(commitHashElement).toBeInTheDocument();

    const authorNameElement = getByText(/John Doe/i);
    expect(authorNameElement).toBeInTheDocument();
    const authorEmailElement = getByText(/johndoe@example.com/i);
    expect(authorEmailElement).toBeInTheDocument();
});
