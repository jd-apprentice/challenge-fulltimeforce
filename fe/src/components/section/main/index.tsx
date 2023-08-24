import { useEffect, useState } from "react";
import { CommitHistory } from "@/components/commits/CommitHistory";
import { GithubService } from "@/services/github"
import { config } from "@/config/config";

export function Home() {
    const [commits, setCommits] = useState<CommitHistory[]>([]);
    useEffect(() => {
        GithubService.getCommits(config.repository)
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