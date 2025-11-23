import { Routes, Route } from "react-router";
import { RootLayout } from "./layouts";
import {
  GettingStartedPage,
  ApiReferencePage,
  ExamplesPage,
  StylingGuidePage,
  HomePage,
} from "./pages";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/getting-started" element={<GettingStartedPage />} />
        <Route path="/api" element={<ApiReferencePage />} />
        <Route path="/examples" element={<ExamplesPage />} />
        <Route path="/styling" element={<StylingGuidePage />} />
      </Routes>
    </RootLayout>
  );
};

export default App;
