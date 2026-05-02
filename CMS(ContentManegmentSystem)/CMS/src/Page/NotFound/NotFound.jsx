function NotFound({error}) {
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">{!error&&"Page Not Found"}</p>
      <p className="text-gray-500 mt-2">
        {error?error:"The page you are looking for doesn’t exist."}
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Home
      </a>
    </div>
  );
}

export default NotFound;