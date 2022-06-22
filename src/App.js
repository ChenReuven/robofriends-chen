import CardList from "./components/CardList";
import { robots } from "./robots";
import 'tachyons';

const App = () => (
    <>
        <CardList robots={robots} />
    </>
)

export default App;