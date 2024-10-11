import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course.js";
import Angular from "./images/angular.jpg";
import Bootsrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import kompleweb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Courses</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
        <div className="columns">
          <div className="column ">
            <Course
              image={Angular}
              title="Angular"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque accusantium ad, tenetur laborum omnis praesentium error odio earum molestiae! Tempore quam a voluptates, nisi dolor ipsam qui unde."
            />
          </div>
          <div className="column ">
            <Course
              image={Bootsrap}
              title="Bootsrap5"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque accusantium ad, tenetur laborum omnis praesentium error odio earum molestiae! Tempore quam a voluptates, nisi dolor ipsam qui unde."
            />
          </div>
          <div className="column ">
            <Course
              image={Csharp}
              title="Complete Web"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque accusantium ad, tenetur laborum omnis praesentium error odio earum molestiae! Tempore quam a voluptates, nisi dolor ipsam qui unde."
            />
          </div>
          <div className="column ">
            <Course
              image={kompleweb}
              title="Frontend"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, tempore cumque accusantium ad, tenetur laborum omnis praesentium error odio earum molestiae! Tempore quam a voluptates, nisi dolor ipsam qui unde."
            />
          </div>
        </div> </section>
       
      </div>
    </div>
  );
}

export default App;
