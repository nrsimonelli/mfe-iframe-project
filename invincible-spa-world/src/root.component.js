import { RiSailboatFill } from "react-icons/ri";
import { FaKiwiBird } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";

export default function Root(props) {
  return (
    <main>
      <section>
        <h1>Hello spicy nuggets</h1>
        <div>This is a single page application</div>
        <div>
          Otherwise known as <span className="gradient-text"><a href="/">spa.</a></span>
        </div>
      </section>
      <section className="buffer">
        <div className="card-title">Advantages include...</div>
        <div className="card-section">
          <div className="card-container">
            <FaKiwiBird className="card-image" />
            <div className="card-text">Agnostic</div>
          </div>
          <div className="card-container">
            <RiSailboatFill className="card-image" />
            <div className="card-text">Nimble</div>
          </div>
          <div className="card-container">
            <BsGearFill className="card-image" />
            <div className="card-text">Autonomus</div>
          </div>
        </div>
      </section>
      <section>
      <a href="/alazar">
        <div className="button">
          more
        </div>
        </a>
      </section>
    </main>
  );
}
