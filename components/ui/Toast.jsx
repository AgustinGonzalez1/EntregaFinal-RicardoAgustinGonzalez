import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
	const notify = (text) =>
		Toast.success(text, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});

	return (
		<ToastContainer
			position="top-center"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="light"
		/>
	);
};
export default Toast;
