import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";

const HomePage = () => {
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const [copyButtonIndex, setCopyButtonIndex] = useState(null);

  const api = "http://localhost:5001";

  useEffect(() => {
    const getUrls = async () => {
      try {
        const res = await axios.get(`${api}/geturls`);
        setUrls(res.data);
      } catch (error) {
        toast.error("An error occured while loading data!");
        console.log("An error occured!", error);
      }
    };
    getUrls();
  }, [urls]);

  const handleShortenUrl = async () => {
    if (!url.trim()) {
      toast.error("Please provide a url");
      return;
    }
    const res = await axios.post(api, {
      url,
    });
    toast.success(res.data.message);
    setUrl("");
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${api}/${id}`);
      toast.success(res.data.message);
    } catch (error) {
      console.log("An error occured", error);
    }
  };

  const handleCopy = (urlText, index) => {
    const fullURL = `${api}/${urlText}`;
    navigator.clipboard.writeText(fullURL);
    setCopyButtonIndex(index);
    setTimeout(() => {
      setCopyButtonIndex(null);
    }, 2000);
  };

  return (
    <div className="container min-h-screen mx-auto p-16">
      <h1 className="font-bold text-2xl text-center mt-10">URL SHORTNER</h1>
      <div className="card">
        <div className="card-body">
          <div className="form-control mx-auto w-full">
            <label className="label mb-5">
              <span className="label-text">Paste a really long url below </span>
            </label>
            <input
              type="url"
              className="input input-bordered max-w-md"
              placeholder="E.g. https://github-readme-stats.shion.dev/api/top-langs/?username=mwanzia-simon&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary mt-5 mx-auto"
            onClick={handleShortenUrl}
          >
            shorten url
          </button>
        </div>
      </div>

      {/* table */}
      <table className="table">
        <thead>
          <tr>
            <th>Long url</th>
            <th>Short url</th>
            <th>Clicks</th>
            <th>Copy short link</th>
            <th>Delete link</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url, index) => (
            <tr key={url._id}>
              <td>
                <a
                  href={url.longUrl}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {url.longUrl}
                </a>
              </td>
              <td>
                <a
                  href={`${api}/${url.shortID}`}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >{`${api}/${url.shortID}`}</a>
              </td>
              <td>{url.clicks}</td>
              <td>
                <button
                  onClick={() => handleCopy(url.shortID, index)}
                  className={`btn ${copyButtonIndex == index ? "btn-success" : "btn-primary"}`}
                >
                  {copyButtonIndex == index ? "Copied" : "copy"}
                </button>
              </td>
              <td>
                <button
                  className="btn btn-error"
                  onClick={() => handleDelete(url._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
