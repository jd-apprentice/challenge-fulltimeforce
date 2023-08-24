import { useEffect, useState } from "react";
import { CommitHistory } from "@/components/commits/CommitHistory";
import { GithubService } from "@/services/github"

export function Home() {
    const [commits, setCommits] = useState<CommitHistory[]>([]);

    const repository = "jd-apprentice/challenge-fulltimeforce"

    useEffect(() => {
        GithubService.getCommits(repository)
            .then((commits) => setCommits(commits))
            .catch((err: any) => console.error(err));
    }, []);

    return (
        <>
            <div className="container mx-auto p-4">
                <CommitHistory commits={commits} />
            </div>
        </>
    )
}