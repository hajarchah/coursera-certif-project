import "./testimonials.css";
import { useState, useEffect } from "react";

function Testimonials() {
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    fetch("/testimonies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((testimonies) => {
        setTestimonies(testimonies);
      })
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  }, []);

  return (
    <section id="testimonials">
      <div className="testimonials-container">
        <div className="heading">
          <h3 className="title">Testimonials</h3>
          <div>
            {testimonies.map((testimony) => (
              <table key={testimony.id}>
                <tbody>
                  <tr>
                    <td>
                      <img src={testimony.pic}></img>
                    </td>
                    <td>
                      <h3 className="testimonial-name">{testimony.name}</h3>
                      <h6 className="testimonial-title">{testimony.title}</h6>
                      <div className="testimonial-body">{testimony.body}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
