import React from "react";

const Testimonial = React.forwardRef((props, ref) => {
  return (
    <section id="testimonial" className="section max-container" ref={ref}>
      <div>
        <h2 className="title">Testimonial</h2>
        <p className="description">See what they sat about me</p>
        <section>
          Java Script
          <ul className="testimonials">
            <li className="testimonial">
              <img
                className="testimonial-img"
                src="./images/favicon.png"
                alt=""
              />
              <div className="testimonial-bubble">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate atque possimus adipisci quia maiores deserunt
                  placeat, eius ullam officia corrupti quibusdam natus incidunt
                  amet laborum nulla provident quidem perferendis fuga.
                </p>
                <p>
                  <a href="#" className="testimonial-bubble-name">
                    Kim
                  </a>
                  /Google
                </p>
              </div>
            </li>
            <li className="testimonial">
              <img
                className="testimonial-img"
                src="./images/favicon.png"
                alt=""
              />
              <div className="testimonial-bubble">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate atque possimus adipisci quia maiores deserunt
                  placeat, eius ullam officia corrupti quibusdam natus incidunt
                  amet laborum nulla provident quidem perferendis fuga.
                </p>
                <p>
                  <a href="#" className="testimonial-bubble-name">
                    Kim
                  </a>
                  /Google
                </p>
              </div>
            </li>
            <li className="testimonial">
              <img
                className="testimonial-img"
                src="./images/favicon.png"
                alt=""
              />
              <div className="testimonial-bubble">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate atque possimus adipisci quia maiores deserunt
                  placeat, eius ullam officia corrupti quibusdam natus incidunt
                  amet laborum nulla provident quidem perferendis fuga.
                </p>
                <p>
                  <a href="#" className="testimonial-bubble-name">
                    Kim
                  </a>
                  /Google
                </p>
              </div>
            </li>
            <li className="testimonial">
              <img
                className="testimonial-img"
                src="./images/favicon.png"
                alt=""
              />
              <div className="testimonial-bubble">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate atque possimus adipisci quia maiores deserunt
                  placeat, eius ullam officia corrupti quibusdam natus incidunt
                  amet laborum nulla provident quidem perferendis fuga.
                </p>
                <p>
                  <a href="#" className="testimonial-bubble-name">
                    Kim
                  </a>
                  /Google
                </p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
});

export default Testimonial;
