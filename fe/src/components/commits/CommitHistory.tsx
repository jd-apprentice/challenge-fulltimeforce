export function CommitHistory(props: Commit) {

    console.log("props", props.commits)

    return (
        <>
            <h1 className="text-2xl font-semibold mb-4">Commit History</h1>
            <ul className="space-y-4">
                {props.commits.map((commit, index) => (
                    <li
                        key={index}
                        className="flex items-center space-x-4 border p-2 rounded-lg"
                    >
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0">
                            <img src="https://avatars.githubusercontent.com/u/68082746?v=4" />
                        </div>
                        <div className="flex-grow">
                            <p className="font-semibold">{commit.commit.message}</p>
                            <p className="text-gray-500">{ } - {commit.commitUrl}</p>
                            <p className="text-gray-500">
                                {commit.commit.author.name} - {commit.commit.author.email}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}