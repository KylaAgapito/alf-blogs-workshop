import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditorProvider from "../contexts/EditorProvider";
import Article, { articleLoader } from "../routes/Article";
import Home from "../routes/Home";
import Root from "../routes/Root";
import { articleCreateAction, articlesLoader } from "./ArticleSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    action: articleCreateAction,
    children: [
      {
        index: true,
        element: <Home />,
        loader: articlesLoader,
      },
      {
        path: "/article/:articleId",
        element: <Article />,
        loader: articleLoader,
      },
    ],
  },
]);

const App = () => {
  return (
    <EditorProvider>
      <RouterProvider router={router} />
    </EditorProvider>
  );
};

export default App;