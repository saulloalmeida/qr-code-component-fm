import qrcodeImage from "../images/image-qr-code.png";
export default function App() {
  return (
    <div
      className={`
      bg-blue-200 min-h-screen flex flex-col justify-center items-center
    `}
    >
      <div
        className={`
          flex flex-col justify-center items-center
          bg-white p-5 m-7 rounded-xl shadow-md
          sm:w-96
          xl:w-96
        `}
      >
        <img
          src={qrcodeImage}
          alt="qr code image"
          className={`
          rounded-xl w-90 h-90
          `}
        />
        <p className={`text-xl font-bold pt-4 font-outfit text-center`}>
          Improve your front-end skills by building projects
        </p>
        <span
          className={`text-md font-outfit flex-wrap text-center text-gray-500`}
        >
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </span>
        <div className="text-xs pt-3 text-gray-500 text-center">
          Challenge by Frontend Mentor . Coded by{" "}
          <a href="#" className="text-blue-500 text-center">
            {"Saullo Almeida"}
          </a>
          .
        </div>
      </div>
    </div>
  );
}
