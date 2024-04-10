import React from "react";
import { GitCommit, Node } from "../models/models";

interface Props {
    commits: GitCommit[];
}

const GitCommitGraph: React.FC<Props> = ({ commits }) => {
    const edges: { from: string; to: string }[] = [];
    const nodes: Node[] = [];
    let y = 50;

    const renderBranch = (branchCommits: GitCommit[], startY: number) => {
        return branchCommits.map((commit, index) => {
            const y = startY + index * 70;
            return { id: commit.sha, label: `${commit.message} - ${commit.author}`, y };
        });
    };

    const renderCommits = (commits: GitCommit[], startY: number, isMainBranch: boolean = false) => {
        return commits.map((commit, index) => {
            let y = startY + index * 70;
            nodes.push({ id: commit.sha, label: commit.message, y });
            if (commit.parents && commit.parents.length > 0) {
                const parent = nodes.find(node => node.id === commit.parents[0].sha);
                if (parent) {
                    edges.push({ from: parent.id, to: commit.sha });
                }
            }
            return null;
        });
    }
    
    
	

    commits.forEach((commit) => {
        if (!commit.parents || commit.parents.length === 0) {
            renderCommits([commit], y);
            y += 70;
        } else {
            renderCommits([commit, ...(commit.parents[0]?.parents || [])].reverse(), y, true);
            y += 70;
        }
    });

    return (
        <svg width={800} height={y}>
            {edges.map((edge, index) => {
                const fromNode = nodes.find((node) => node.id === edge.from);
                const toNode = nodes.find((node) => node.id === edge.to);
                if (fromNode && toNode) {
                    return (
                        <line 
                            key={index} 
                            x1={100} y1={fromNode.y}
                            x2={100} y2={toNode.y}
                            stroke="rgb(16, 163, 127)"
                        />
                    );
                }
                return null;
            })}
            {nodes.map((node, index) => (
                <g key={index}>
                    <circle cx={100} cy={node.y} r={7} fill="green" />
                    <text x={120} y={node.y + 5}>
                        {node.label}
                    </text>
                </g>
            ))}
        </svg>
    );
};

export default GitCommitGraph;


