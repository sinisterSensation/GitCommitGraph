export interface GitCommit { sha: string; 
	url: string; 
	html_url: string; 
	comments_url: string; 
	commit: { author: { name: string }; message: string; date: string; }; 
	name: string;
	parents: GitCommit[]; 
}

export interface Node {
    id: string;
    label?: string;
    y: number;
}

export interface Props {
    commits?: GitCommit[],
    owner: string, 
    repo: string
}
  
