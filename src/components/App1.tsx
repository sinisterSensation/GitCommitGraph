import React, { useState } from "react";
import GitHubCommits from "./GitHubCommits";

const App1 = () => {
    const [selectedBranch, setSelectedBranch] = useState("main");

    const handleBranchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedBranch(event.target.value);
    };

    return (
        <div style={{ position: "fixed", top: 0, width: "100%", background: "white", padding: "10px", zIndex: 100 }}>
            <input type="text" value={selectedBranch} onChange={handleBranchChange} />
            <GitHubCommits owner="DanilKazanov" repo="test-file-gx" branch={selectedBranch} />
        </div>
    );
};

export default App1;