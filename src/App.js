import GlobalStyle from "./assets/styles/globalStyles";
import Layout from "./components/Layout";
import Router from "./routes";

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Router />
    </Layout>
  );
}

export default App;
