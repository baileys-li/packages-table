import Logo from "./components/Logo/Logo";
import SearchInput from "./components/SearchInput/SearchInput";
import AppTableContainer from "./components/AppTableContainer/AppTableContainer";

import "./sass/app.scss";

function App() {
	return (
		<>
			<header className="app__header">
				<Logo />
			</header>

			<main className="app__main">
				<SearchInput />
				<AppTableContainer />
			</main>
		</>
	);
}

export default App;
