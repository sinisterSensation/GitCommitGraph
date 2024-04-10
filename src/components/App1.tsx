import GitCommitGraph from "./GitCommitGraph";
import { GitCommit } from "../models/models";

const commits: GitCommit[] = [
	{
		refs: ["feature1"],
		sha: "002",
		author: "Author 2",
		date: 12346,
		message: "Add feature 1",
		parents: [],
	},
	{
		refs: ["master"],
		sha: "001",
		author: "Author 1",
		date: 12345,
		message: "Initial commit",
		parents: [
			{
				refs: ["feature1"],
				sha: "002",
				author: "Author 2",
				date: 12346,
				message: "Add feature 1",
				parents: [],
			},
		],
	},
	{
		refs: ["feature2"],
		sha: "003",
		author: "Author 3",
		date: 12347,
		message: "Add feature 2",
		parents: [],
	},
	{
		refs: ["master"],
		sha: "004",
		author: "Author 4",
		date: 12348,
		message: "Merge feature2 to master",
		parents: [
			{
				refs: ["feature2"],
				sha: "003",
				author: "Author 3",
				date: 12347,
				message: "Add feature 2",
				parents: [],
			},
			{
				refs: ["feature1"],
				sha: "002",
				author: "Author 2",
				date: 12346,
				message: "Add feature 1",
				parents: [],
			},
		],
	},
	{
		refs: ["hotfix"],
		sha: "005",
		author: "Author 5",
		date: 12349,
		message: "Hotfix for critical issue",
		parents: [],
	},
];

const App1 = () => {
	return (
		<div>
			<GitCommitGraph commits={commits} />
		</div>
	);
};

export default App1;


