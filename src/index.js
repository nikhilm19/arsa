import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
	createBrowserRouter,
	BrowserRouter,
	Router,
	RouterProvider,
	Route,
	Routes,
} from "react-router-dom";
import Project from "./components/Project";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Contact from "./components/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
	{
		path: "/projects/:projectName",
		element: <Project />,
	},
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "Work",
				element: <Work />,
			},
		],
	},
	// {
	// 	path: "/Work",
	// 	element: <Work />,
	// },
]);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<div className="app">
				<Header />
				<div className="main">
					<Routes>
						<Route path="/" element={<App />} />
						<Route index element={<App />} />
						<Route path="Work" element={<Work />} />
						<Route
							path="projects/:projectName"
							element={<Project />}
						/>
						<Route path="/Contact" element={<Contact />} />
						{/* <Route path="*" element={<NoPage />} /> */}
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
