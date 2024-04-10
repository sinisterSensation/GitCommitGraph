export interface GitCommit {
	refs: string[]; // какие есть ветки на коммите (обычно одна)
	sha: string; // хэш коммита
	author?: string; // автор коммита
	date?: number; // время коммита
	message?: string; // сообщение коммита
	parents: GitCommit[]; // обычно один родительский коммит, но если мерж-коммит, то родителей 2
}

export interface Node {
	id: string;
	label?: string;
	y: number;
  }
  
