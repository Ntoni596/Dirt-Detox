import { useState } from "react";
import gymOne from "../assets/gym-one.jpg";
import gymTwo from "../assets/gym-two.jpg";
import houseOne from "../assets/house-one.jpg"
import houseTwo from "../assets/house-two.jpg"
import retailOne from "../assets/retail-one.jpg"
import retailTwo from "../assets/retail-two.jpg"
import officeOne from "../assets/office-one.jpg"
import officeTwo from "../assets/office-two.jpg"

function Services() {
  const [officeVisible, setOfficeVisible] = useState(false);
  const [retailVisible, setRetailVisible] = useState(false);
  const [gymVisible, setGymVisible] = useState(false);
  const [homeVisible, setHomeVisible] = useState(false);

  const toggleService = (service) => {
    switch (service) {
      case "office":
        setOfficeVisible(!officeVisible);
        break;
      case "retail":
        setRetailVisible(!retailVisible);
        break;
      case "gym":
        setGymVisible(!gymVisible);
        break;
      case "home":
        setHomeVisible(!homeVisible);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="heading">Our Services</div>
      <div className="text-content-service">
        <div className="service">
          <div
            className="service-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => toggleService("office")}
          >
            <h3 className="service-heading">Office Cleaning</h3>
            <div className={`service-chevron ${officeVisible ? "active" : ""}`}>
              {officeVisible ? "▼" : "▶"}
            </div>
          </div>
          <div className={`service-content ${officeVisible ? "active" : ""}`}>
            <br></br>
            <p>
              At Dirt Detox, we understand that every office space is unique.
              That's why we offer flexible cleaning solutions that can be
              tailored to your specific needs, desired frequency, and budget
              constraints.
              <br></br>
              <br></br>
              Our meticulous approach to cleaning sets us apart, ensuring your
              workspace is not only clean but also safe.
              <br></br>
              <br></br>
              Here are some of the services we offer to transform your office
              environment:
              <br></br>
              <br></br>
              <strong>High-Touch Point Sanitization:</strong> We target
              frequently touched surfaces like doorknobs, printers, and coffee
              machines, making sure they are germ-free.
              <br></br>
              <br></br>
              <strong>Floor Care:</strong> Our expertise extends to hard floors,
              including stripping and polishing, ensuring they shine and make a
              lasting impression.
              <br></br>
              <br></br>
              <strong>Bathroom Brilliance:</strong> We provide comprehensive
              bathroom cleaning services and supply essential consumables such
              as hygiene products, tissues, and toilet paper.
              <br></br>
              <br></br>
              <strong>Office Spaces:</strong> From cubicles to corner offices,
              we leave no space untouched, ensuring your entire office space is
              pristine.
              <br></br>
              <br></br>
              <strong>Crystal Clear Windows:</strong> Let the outside world
              shine through with our expert window cleaning services, both
              internal and external.
              <br></br>
              <br></br>
              <strong>Inviting Reception and Common Areas:</strong> We create an
              inviting atmosphere for your guests by maintaining a spotless
              reception and common areas. Carpet and Upholstery Care: Revive and
              rejuvenate your office space with our carpet and upholstery
              cleaning services.
              <br></br>
              <br></br>
              <strong>External Building Wash:</strong> Our expertise extends
              beyond interiors to keep your office building's exterior looking
              immaculate.
              <br></br>
              <br></br>
              <strong>Rubbish and Recycling:</strong> We take care of waste
              management, ensuring a clean and eco-friendly workspace.
              <br></br>
              <br></br>
              <strong>Dusting Mastery:</strong> From furniture to multi-level
              dusting, we ensure your workspace remains dust-free and inviting.
              <br></br>
              <br></br>
              <strong>Staffroom and Kitchen Hygiene:</strong> We go the extra
              mile by cleaning staffrooms and kitchens, including ovens and
              fridges, ensuring a hygienic environment for your team.
              <br></br>
              <br></br>
              Enquire today and ask us about our one week free trial. - Terms and Conditions Apply
            </p>
            <img id="imageOne" src={officeOne} alt="Image of clean office space"></img>
            <img id="imageTwo" src={officeTwo} alt="Image of office desk being cleaned"></img>
          </div>
        </div>
        <div className="service">
          <div
            className="service-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => toggleService("retail")}
          >
            <h3 className="service-heading">Retail Cleaning</h3>
            <div className={`service-chevron ${retailVisible ? "active" : ""}`}>
              {retailVisible ? "▼" : "▶"}
            </div>
          </div>

          <div className={`service-content ${retailVisible ? "active" : ""}`}>
            <br></br>
            <p>
              At Dirt Detox, our team of cleaning experts is dedicated to
              elevating your business's image by providing a pristine, healthy,
              and inviting environment.
              <br></br>
              <br></br>
              We understand the unique cleaning needs of your site, and we're
              here to craft a customized cleaning plan just for you.
              <br></br>
              <br></br>
              When it comes to making your retail space shine, trust Dirt Detox
              – we guarantee results.
              <br></br>
              <br></br>
              <strong>Floorcare Excellence:</strong> We believe that the first
              impression of your business often begins with the floor. It's not
              merely about appearances; it's about genuine cleanliness. At Dirt
              Detox, we pride ourselves on maintaining the highest levels of
              cleanliness, meeting the exacting standards expected by both
              customers and staff. Our professional floorcare services ensure
              that your floors are not just clean but also in impeccable
              condition, ready to make a statement.
              <br></br>
              <br></br>
              <strong>Staffroom Hygiene:</strong> Your staff's well-being is
              paramount, and the state of their workspace directly influences
              your customers' experience. Dirt Detox goes the extra mile to
              ensure every corner of your staffroom is not only clean but also
              hygienic. Our meticulous approach fosters a healthy work
              environment, contributing significantly to the overall success of
              your business.
              <br></br>
              <br></br>
              <strong>Bathroom Sanitization:</strong> The cleanliness of your
              business's bathrooms is of utmost importance. Given their frequent
              use, any contamination in the restroom can quickly spread
              throughout the workplace, posing health risks. Dirt Detox places
              bathroom hygiene at the forefront of our cleaning services. We
              leave no stone unturned in ensuring that your bathrooms are not
              just clean but also meticulously sanitized, offering you and your
              employees peace of mind.
              <br></br>
              <br></br>
              At Dirt Detox, your satisfaction is not just a priority; it's our
              unwavering commitment. We pledge to provide you with nothing but
              the best. Allow us to transform your retail space into a shining
              showcase that captivates your customers, fosters a healthier work
              environment, and ultimately enhances the overall success of your
              business. Trust Dirt Detox to bring out the best in your business
              through our unparalleled cleaning service.
              <br></br>
              <br></br>
              Enquire today and ask us about our one week free trial. - Terms and Conditions Apply
            </p>
            <img id="imageOne" src={retailOne} alt="Image of supermarket fridges"></img>
            <img id="imageTwo" src={retailTwo} alt="Image of had holding cleaning supplies"></img>
          </div>
        </div>
        <div className="service">
          <div
            className="service-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => toggleService("gym")}
          >
            <h3 className="service-heading">Gym Cleaning</h3>
            <div className={`service-chevron ${gymVisible ? "active" : ""}`}>
              {gymVisible ? "▼" : "▶"}
            </div>
          </div>
          <div className={`service-content ${gymVisible ? "active" : ""}`}>
            <br></br>
            <p>
              Managing a fitness center comes with its challenges, and one
              aspect you might not have considered is the importance of
              professional fitness center cleaning services.
              <br></br>
              <br></br>
              At Dirt Detox, we simplify this for you, offering top-notch
              cleaning services that will leave your gym members thoroughly
              impressed.
              <br></br>
              <br></br>
              Dirt Detox offers a comprehensive range of fitness center cleaning
              services tailored to the unique needs of your gym.
              <br></br>
              <br></br>
              Here's a glimpse of the cleaning services we offer:
              <br></br>
              <br></br>
              <strong>Gym Floors:</strong> We keep your gym floors in pristine
              condition, ensuring they are clean and safe for workouts.
              <br></br>
              <br></br>
              <strong>Gym Equipment (Machines and Weights):</strong> Our
              meticulous cleaning extends to gym equipment, ensuring that every
              machine and weight is spotless and ready for use.
              <br></br>
              <br></br>
              <strong>Changing Rooms:</strong> Clean and hygienic changing rooms
              are essential for your members' comfort and satisfaction, and we
              guarantee a thorough cleaning.
              <br></br>
              <br></br>
              <strong>Showers and Bathrooms:</strong> We maintain the highest
              standards of cleanliness in showers and bathrooms, ensuring they
              are germ-free and welcoming.
              <br></br>
              <br></br>
              <strong>Reception Areas:</strong> The first impression of your gym
              starts at the reception area. We keep it impeccably clean and
              inviting.
              <br></br>
              <br></br>
              <strong>Staff Rooms:</strong> Employee well-being is crucial, and
              we ensure staff rooms are clean, contributing to a healthy work
              environment.
              <br></br>
              <br></br>
              Dirt Detox is committed to helping your gym achieve
              championship-level cleanliness. We understand the importance of
              maintaining a clean and healthy gym environment, and our
              eco-friendly approach ensures that your gym not only meets but
              exceeds the expectations of your members. Trust Dirt Detox to
              elevate your gym to a higher standard of cleanliness and
              excellence.
              <br></br>
              <br></br>
              Enquire today and ask us about our one week free trial. - Terms and Conditions Apply
            </p>
            <img id="imageOne" src={gymOne} alt="Gym cleaning equipment"></img>
            <img
              id="imageTwo"
              src={gymTwo}
              alt="Gym Cleaning Solution on equipment"
            ></img>
          </div>
        </div>
        <div className="service">
          <div
            className="service-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onClick={() => toggleService("home")}
          >
            <h3 className="service-heading">Home Cleaning</h3>
            <div className={`service-chevron ${homeVisible ? "active" : ""}`}>
              {homeVisible ? "▼" : "▶"}
            </div>
          </div>

          <div className={`service-content ${homeVisible ? "active" : ""}`}>
            <br></br>
            <p>
              In today's fast-paced world, where time is a precious commodity,
              having a clean and organized home is essential for your well-being
              and peace of mind. We understand the significance of a pristine
              living space, and that's why we're dedicated to providing you with
              the highest standard of house cleaning services.
              <br></br>
              <br></br>
              Our approach to house cleaning is rooted in the belief that a
              clean home is a healthier and more enjoyable one. We're committed
              to delivering cleaning solutions that surpass your expectations,
              leaving you with a home you'll be proud to call your own.
              <br></br>
              <br></br>
              Here's a overview of the comprehensive house cleaning services we
              offer:
              <br></br>
              <br></br>
              <strong>Kitchen Brilliance:</strong>The heart of your home
              deserves special attention. We meticulously clean and sanitize
              countertops, appliances, and surfaces, leaving your kitchen ready
              for your culinary creations.
              <br></br>
              <br></br>
              <strong>Bathroom Sanctuary:</strong> Bathrooms are personal
              sanctuaries. We ensure they are impeccably clean, free from germs,
              and a haven of hygiene and relaxation.
              <br></br>
              <br></br>
              <strong>Dazzling Living Spaces:</strong> Your living areas should
              be inviting and comfortable. Our cleaning experts pay close
              attention to your floors, furniture, and decor to ensure they
              shine with cleanliness.
              <br></br>
              <br></br>
              <strong>Restful Bedrooms:</strong> A clean bedroom promotes
              restful sleep. We take care of every detail, including changing
              linens, to create a peaceful and rejuvenating sleeping
              environment.
              <br></br>
              <br></br>
              <strong>Squeaky-Clean Floors:</strong> We vacuum, mop, and polish
              your floors with precision, leaving no trace of dirt or dust
              behind.
              <br></br>
              <br></br>
              <strong>Dusting Mastery:</strong> We leave no surface untouched,
              ensuring your home is completely free of dust and allergens,
              promoting a healthier living environment.
              <br></br>
              <br></br>
              <strong>Customized Cleaning:</strong> Our services are tailored to
              your unique needs, ensuring that you receive the exact level of
              cleaning your home deserves.
            </p>
            <img id="imageOne" src={houseOne} alt="Cleaning Supplies on table"></img>
            <img id="imageTwo" src={houseTwo} alt="Image of clean kitchen and dining area"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
