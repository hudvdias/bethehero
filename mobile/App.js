import React from 'react'
import Routes from "./src/routes"
import { StatusBar } from "react-native"
import "intl"
import "intl/locale-data/jsonp/pt-BR"

function App() {
	return (
		<>
			<StatusBar />
			<Routes />
		</>
	)
}

export default App