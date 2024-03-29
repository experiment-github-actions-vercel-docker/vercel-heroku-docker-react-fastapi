import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count} previewのURLってデプロイごとに変更されちゃうのかな？
				</button>
				<button>githubのpull requestでpreviewができるか確認</button>
				<button>vercelのデプロイってチームで見えるの？</button>
				<button>githubの単語を教えようのコーナー</button>
				<button>add:一時的な保存</button>
				<button>commit:ローカル側のリポジトリに登録</button>
				<button>push:ローカル側のリポジトリをリモート側に登録</button>
				<button>kosugekaito</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
