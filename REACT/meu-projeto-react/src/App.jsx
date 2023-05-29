import TesteComponente from "./components/TesteComponente";
import TesteBotao from "./components/TesteBotao";

function App() {

	return (
	<div>
		<h1>Olá Mundo!</h1>
			<TesteComponente />
			<TesteBotao conteudo="me clique" />
			<TesteBotao conteudo="depois aqui" />
			<TesteBotao conteudo="e por fim aqui" />
	</div>
  )
}

export default App