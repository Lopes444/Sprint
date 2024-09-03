import { createRoot } from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from "styled-components";

const root = createRoot(document.querySelector("#root"))

root.render(<App />);

