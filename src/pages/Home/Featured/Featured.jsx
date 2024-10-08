import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredimg from "../../../assets/home/featured.jpg";
import "./Featured.css";


const Featured = () => {
    return (
        <div className="featured-item my-20 pt-8 bg-fixed">
            <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} ></SectionTitle>

            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 text-white bg-slate-500 bg-opacity-40">
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Read More</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featured;