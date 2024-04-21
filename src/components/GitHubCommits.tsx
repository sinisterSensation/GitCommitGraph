import React, { useState, useEffect } from "react";
import { GitCommit } from "../models/models";
import GitCommitGraph from "./GitCommitGraph";

interface Props {
	owner: string;
	repo: string;
	branch: string;
}

const GitHubCommits: React.FC<Props> = ({ owner, repo, branch }) => {
	const [commits, setCommits] = useState<GitCommit[]>([]);

	useEffect(() => {
		const fetchCommits = async () => {
			const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?sha=${branch}`);
			const data = await response.json();
			setCommits(data);
		};
		fetchCommits();
	}, [owner, repo, branch]);

	return <GitCommitGraph commits={commits} />;
};

export default GitHubCommits;
