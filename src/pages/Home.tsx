import { faUser, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { set_name } from "../redux/Action";

const Home = () => {
  const isDark = useSelector((state: any) => state.isDark);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenGift = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      // 1. Save name to Redux
      dispatch(set_name(userName));
      // 2. Navigate to Gift page
      navigate("/gift");
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between text-sm ${
        isDark
          ? "bg-background_dark text-white"
          : "bg-background_light text-black"
      }`}
    >
      <Nav />

      <main className=" flex flex-col gap-2 items-center w-full m-auto">
        <div className="bg-[url(https://lh3.googleusercontent.com/aida-public/AB6AXuBSgQ4AffZHnaT8RkTIj_tTO6f4jcnzr_o3tIUfYdQ_7AWOOc5fhUr2fpMNK8rhxKbCeiROVpaCOEUPGmusu5Y-56irtfoYXOUJWs3TZbkoa_co8qH7K5_br8dfvb8gkCKeSSu_8uaYLxkyteGkUfJS2AyldgHST6QA-iO0Ns_qjryZaK_xyMuHFLQSaAMaK8rcEdUU4o985iaKQPT8wy3_3EkGJeu4vmPs0r9we6WTMvGdQgNhT50OnSj7z0oQboUmZCe47Rh8Aee1)] h-[200px] w-[35%] lg:w-[60%] sm:w-[90%] rounded-lg bg-cover bg-center shadow-md relative flex items-center justify-center">
          <div className=" absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg text-white">
            <div>
              <p className=" flex items-center justify-center gap-2 bg-white bg-opacity-30 w-fit m-auto rounded-full p-1 px-2 text-xs">
                {" "}
                <div className=" h-[5px] w-[5px] rounded-full bg-green-500"></div>{" "}
                Seasons Greeting
              </p>
              <p className=" text-center text-3xl font-bold">
                Happy New Year
              </p>
              <p className=" text-center text-xs">
                A personalized wish has been customised just for you <br />{" "}
                Enter your name to unwrap
              </p>
            </div>
          </div>
        </div>

        <form
          className={`${
            isDark ? "bg-surface_dark" : "bg-surface_light"
          } rounded-lg p-2 px-4 shadow-lg flex items-center justify-between gap-1 text-xs w-[30%] lg:w-[60%] sm:w-[90%]`}
          onSubmit={handleOpenGift}
        >
          <label htmlFor="wish">
            <FontAwesomeIcon icon={faUser} />
          </label>
          <input
            type="text"
            id="wish"
            placeholder="Enter your name..."
            className=" outline-none border-none bg-transparent w-[60%]"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button type="submit" className=" bg-primary rounded-md p-2">
            Open gift <FontAwesomeIcon icon={faGift} />
          </button>
        </form>

        <p className=" text-text_muted text-xs">
          Be ready for a heartwarming surprise.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
