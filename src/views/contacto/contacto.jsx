import ContactForm from "../../components/contactform/contactForm"
import chefalfonso2 from "../../img/chefalfonso2.png"

const Contacto = () => {
    return (
        <>
            {/* main container */}
            <div className="md:h-screen md:grid md:grid-cols-2 
                        sm:flex sm:flex-col                   
                        border-b-2 border-yellow-400">

                <div className="md:my-12 md:ml-10 flex justify-center"> {/* contactForm */}
                    <ContactForm />
                </div> {/* contactForm ends*/}


                <div className="md:m-20 md:block sm:m-10 sm:flex sm:justify-center">{/* img */}

                    <img src={chefalfonso2} alt="chef alfonso wedding service at los cabos" />

                </div>{/* img ends */}

            </div>{/* main container ends*/}
        </>
    )
}

export default Contacto;