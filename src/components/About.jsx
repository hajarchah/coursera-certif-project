import "./about.css";

function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="title">
          <h3>About Us</h3>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <div className="desc">
                  <img src="https://i.ibb.co/3mm2WRb/pngwing-com.png"></img>
                </div>
              </td>
              <td>
                <div className="desc">
                  <p>
                    Welcome to LuxeRevive Furniture! We believe in transforming
                    the ordinary into the extraordinary. At LuxeRevive, we take
                    your tired, old furniture and breathe new life into it,
                    crafting each piece into luxurious, bespoke items that
                    elevate your living space. Our skilled artisans meticulously
                    refurbish and reimagine every detail, from vintage chairs to
                    outdated dressers, infusing them with sophistication and
                    style. Say goodbye to dull furnishings and hello to the
                    epitome of elegance with LuxeRevive Furniture.
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default About;
