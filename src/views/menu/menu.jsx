import { Carousel } from "flowbite-react";
import { FormattedMessage } from "react-intl";
import "./menu.css";

const Menu = () => {
    return (
        <>
            <div className="md:h-screen md:grid md:grid-cols-2 
                                         
                        border-b-2 border-yellow-400">{/* aqui se contiene todo */}

                <div className="font-txt text-slate-200 sm:py-4 sm:px-6 md:pr-4 md:pl-6 md:overflow-auto custom-scrollbar">{/* los textos */}

                <h1 className="font-signature text-yellow-400 text-5xl md:mt-1"><FormattedMessage id="menu.title1" defaultMessage="The experience" /></h1>
                <p className="mb-2"><FormattedMessage id="menu.p1" defaultMessage="When we indulge in Chef Alfonso's culinary experience, we not only taste the masterful blend of ingredients but also immerse ourselves in a feast of experiences, memories, and narratives that transport us to unforgettable moments and places." /></p>
                <p className="mb-2"><FormattedMessage id="menu.p2" defaultMessage="Every bite is an exhilarating journey that embeds itself in our memory and comfortably settles in the most special corner of our hearts. Delighting in his creations is not just about nourishing the body; " /></p>
                <p className="mb-2"><FormattedMessage id="menu.p3" defaultMessage=" it is about feeding the soul with a symphony of emotions that resonate long after the last delicious note has been savored." /></p>
                <div className="w-3/4 border-b-2 border-yellow-400"></div>
                
                <h1 className="font-signature text-yellow-400 sm:text-4xl sm:mt-4 md:text-5xl md:mt-8">
                    <FormattedMessage id="menu.title2" defaultMessage="Complete Menu Options" /></h1>
                <p><FormattedMessage id="menu.p21" defaultMessage="The menu options presented below are not exhaustive. Contact us to create an exclusive, tailored, and personalized menu for your event or occasion." /></p>

               
               {/* welcome menu */}
                <h2 className="text-yellow-400 font-title tracking-widest sm:mt-8 sm:mb-2 md:mt-12 border-b-2 border-yellow-400 w-1/3 md:mb-2">
                    <FormattedMessage id="menu.app" defaultMessage="WELCOME MENU"/>
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.app1" defaultMessage="Guacamole | Chips | mexican sauces" /></li>
                    <li><FormattedMessage id="menu.app2" defaultMessage="Mini Shrimp | seafood Coktail" /></li>
                    <li><FormattedMessage id="menu.app3" defaultMessage="Tuna sashimi" /></li>
                    <li><FormattedMessage id="menu.app4" defaultMessage="Seasoned Corn kernels" /></li>
                    <li><FormattedMessage id="menu.app5" defaultMessage="Quesadillas: chicken | beef | seafood | vegetables" /></li>
                    <li><FormattedMessage id="menu.app6" defaultMessage="Skew: fruit | chicken | beef | seafood | vegetables" /></li>
                    <li><FormattedMessage id="menu.app7" defaultMessage="Mexican street food: sopes | memelas | tostadas | chalupas | and more" /></li>
                    <li><FormattedMessage id="menu.app8" defaultMessage="Crispy taquitos" /></li>
                    <li><FormattedMessage id="menu.app9" defaultMessage="Crudites: humus | homemade dressing" /></li>
                    <h1 className="mt-4"><FormattedMessage id="menu.dr" defaultMessage="BEVERAGES" /></h1>
                    <li><FormattedMessage id="menu.dr1" defaultMessage="Mezcalitas cocktail" /></li>
                    <li><FormattedMessage id="menu.dr2" defaultMessage="Fresh fruit mexican drinks (Non-Alcoholic)" /></li>
                </ul>



                <h2 className="text-yellow-400 font-title tracking-widest sm:mt-12 sm:mb-2 md:mt-12 border-b-2 border-yellow-400 w-1/3 md:mb-2">
                    <FormattedMessage id="menu.br" defaultMessage="BREAKFAST MENU" />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.br1" defaultMessage="Ranchero Eggs | Divorced Eggs | Mexican Style Eggs" /></li>
                    <li><FormattedMessage id="menu.br2" defaultMessage="Chilaquiles with Eggs" /></li>
                    <li><FormattedMessage id="menu.br3" defaultMessage="Machaca Burrito with Egg" /></li>
                    <li><FormattedMessage id="menu.br4" defaultMessage="Oatmeal with Fruits | Nuts" /></li>
                    <li><FormattedMessage id="menu.app5" defaultMessage="Vegetable Omelette | Chorizo | Cheese" /></li>
                    <li><FormattedMessage id="menu.br6" defaultMessage="Toasted Bread with Avocado and Fresh Leaves" /></li>
                    <li><FormattedMessage id="menu.br7" defaultMessage="Enfrijoladas with Chicken | Cheese" /></li>
                    <li><FormattedMessage id="menu.br8" defaultMessage="Additionally: Cereals | Yogurt | Fruit | Hot Cakes or Waffles | Potatoes with Sausage | Coffee | Tea | Orange Juice" /></li>
                </ul>



                <h2 className="text-yellow-400 font-title tracking-widest md:mt-12 border-b-2 border-yellow-400 w-1/4 md:mb-2">
                    <FormattedMessage id="menu.br" defaultMessage="LUNCH MENU" />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.br1" defaultMessage="Ranchero Eggs | Divorced Eggs | Mexican Style Eggs" /></li>
                    <li><FormattedMessage id="menu.br2" defaultMessage="Chilaquiles with Eggs" /></li>
                    <li><FormattedMessage id="menu.br3" defaultMessage="Machaca Burrito with Egg" /></li>
                    <li><FormattedMessage id="menu.br4" defaultMessage="Oatmeal with Fruits | Nuts" /></li>
                    <li><FormattedMessage id="menu.app5" defaultMessage="Vegetable Omelette | Chorizo | Cheese" /></li>
                    <li><FormattedMessage id="menu.br6" defaultMessage="Toasted Bread with Avocado and Fresh Leaves" /></li>
                    <li><FormattedMessage id="menu.br7" defaultMessage="Enfrijoladas with Chicken | Cheese" /></li>
                    <li><FormattedMessage id="menu.br8" defaultMessage="Additionally: Cereals | Yogurt | Fruit | Hot Cakes or Waffles | Potatoes with Sausage | Coffee | Tea | Orange Juice" /></li>
                </ul>



                <h2 className="text-yellow-400 font-title tracking-widest md:mt-12 border-b-2 border-yellow-400 w-1/4 md:mb-2">
                    <FormattedMessage id="menu.br" defaultMessage="DINNER ON THE BEACH MENU" />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.br1" defaultMessage="Ranchero Eggs | Divorced Eggs | Mexican Style Eggs" /></li>
                    <li><FormattedMessage id="menu.br2" defaultMessage="Chilaquiles with Eggs" /></li>
                    <li><FormattedMessage id="menu.br3" defaultMessage="Machaca Burrito with Egg" /></li>
                    <li><FormattedMessage id="menu.br4" defaultMessage="Oatmeal with Fruits | Nuts" /></li>
                    <li><FormattedMessage id="menu.app5" defaultMessage="Vegetable Omelette | Chorizo | Cheese" /></li>
                    <li><FormattedMessage id="menu.br6" defaultMessage="Toasted Bread with Avocado and Fresh Leaves" /></li>
                    <li><FormattedMessage id="menu.br7" defaultMessage="Enfrijoladas with Chicken | Cheese" /></li>
                    <li><FormattedMessage id="menu.br8" defaultMessage="Additionally: Cereals | Yogurt | Fruit | Hot Cakes or Waffles | Potatoes with Sausage | Coffee | Tea | Orange Juice" /></li>
                </ul>



                <h2 className="text-yellow-400 font-title tracking-widest md:mt-12 border-b-2 border-yellow-400 w-1/4 md:mb-2">
                    <FormattedMessage id="menu.br" defaultMessage="MEXICANO MENU" />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.br1" defaultMessage="Ranchero Eggs | Divorced Eggs | Mexican Style Eggs" /></li>
                    <li><FormattedMessage id="menu.br2" defaultMessage="Chilaquiles with Eggs" /></li>
                    <li><FormattedMessage id="menu.br3" defaultMessage="Machaca Burrito with Egg" /></li>
                    <li><FormattedMessage id="menu.br4" defaultMessage="Oatmeal with Fruits | Nuts" /></li>
                    <li><FormattedMessage id="menu.app5" defaultMessage="Vegetable Omelette | Chorizo | Cheese" /></li>
                    <li><FormattedMessage id="menu.br6" defaultMessage="Toasted Bread with Avocado and Fresh Leaves" /></li>
                    <li><FormattedMessage id="menu.br7" defaultMessage="Enfrijoladas with Chicken | Cheese" /></li>
                    <li><FormattedMessage id="menu.br8" defaultMessage="Additionally: Cereals | Yogurt | Fruit | Hot Cakes or Waffles | Potatoes with Sausage | Coffee | Tea | Orange Juice" /></li>
                </ul>



                <h2 className="text-yellow-400 font-title tracking-widest md:mt-12 border-b-2 border-yellow-400 w-1/4 md:mb-2">
                    <FormattedMessage id="menu.br" defaultMessage="MEXICAN NIGHT MENU" />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.br1" defaultMessage="Ranchero Eggs | Divorced Eggs | Mexican Style Eggs" /></li>
                    <li><FormattedMessage id="menu.br2" defaultMessage="Chilaquiles with Eggs" /></li>
                    <li><FormattedMessage id="menu.br3" defaultMessage="Machaca Burrito with Egg" /></li>
                    <li><FormattedMessage id="menu.br4" defaultMessage="Oatmeal with Fruits | Nuts" /></li>
                    <li><FormattedMessage id="menu.app5" defaultMessage="Vegetable Omelette | Chorizo | Cheese" /></li>
                    <li><FormattedMessage id="menu.br6" defaultMessage="Toasted Bread with Avocado and Fresh Leaves" /></li>
                    <li><FormattedMessage id="menu.br7" defaultMessage="Enfrijoladas with Chicken | Cheese" /></li>
                    <li><FormattedMessage id="menu.br8" defaultMessage="Additionally: Cereals | Yogurt | Fruit | Hot Cakes or Waffles | Potatoes with Sausage | Coffee | Tea | Orange Juice" /></li>
                </ul>



                <h2 className="text-yellow-400 font-title tracking-widest md:mt-12 border-b-2 border-yellow-400 w-1/4 md:mb-2">
                    <FormattedMessage id="menu.br" defaultMessage="ITALIAN MENU" />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.br1" defaultMessage="Ranchero Eggs | Divorced Eggs | Mexican Style Eggs" /></li>
                    <li><FormattedMessage id="menu.br2" defaultMessage="Chilaquiles with Eggs" /></li>
                    <li><FormattedMessage id="menu.br3" defaultMessage="Machaca Burrito with Egg" /></li>
                    <li><FormattedMessage id="menu.br4" defaultMessage="Oatmeal with Fruits | Nuts" /></li>
                    <li><FormattedMessage id="menu.app5" defaultMessage="Vegetable Omelette | Chorizo | Cheese" /></li>
                    <li><FormattedMessage id="menu.br6" defaultMessage="Toasted Bread with Avocado and Fresh Leaves" /></li>
                    <li><FormattedMessage id="menu.br7" defaultMessage="Enfrijoladas with Chicken | Cheese" /></li>
                    <li><FormattedMessage id="menu.br8" defaultMessage="Additionally: Cereals | Yogurt | Fruit | Hot Cakes or Waffles | Potatoes with Sausage | Coffee | Tea | Orange Juice" /></li>
                </ul>




                <h2 className="text-yellow-400 font-title tracking-widest md:mt-12 border-b-2 border-yellow-400 w-1/4 md:mb-2">
                    <FormattedMessage id="menu.br" defaultMessage="SUSHI AND SAKE MENU" />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.br1" defaultMessage="Ranchero Eggs | Divorced Eggs | Mexican Style Eggs" /></li>
                    <li><FormattedMessage id="menu.br2" defaultMessage="Chilaquiles with Eggs" /></li>
                    <li><FormattedMessage id="menu.br3" defaultMessage="Machaca Burrito with Egg" /></li>
                    <li><FormattedMessage id="menu.br4" defaultMessage="Oatmeal with Fruits | Nuts" /></li>
                    <li><FormattedMessage id="menu.app5" defaultMessage="Vegetable Omelette | Chorizo | Cheese" /></li>
                    <li><FormattedMessage id="menu.br6" defaultMessage="Toasted Bread with Avocado and Fresh Leaves" /></li>
                    <li><FormattedMessage id="menu.br7" defaultMessage="Enfrijoladas with Chicken | Cheese" /></li>
                    <li><FormattedMessage id="menu.br8" defaultMessage="Additionally: Cereals | Yogurt | Fruit | Hot Cakes or Waffles | Potatoes with Sausage | Coffee | Tea | Orange Juice" /></li>
                </ul>



                <h2 className="text-yellow-400 font-title tracking-widest md:mt-12 border-b-2 border-yellow-400 w-1/4 md:mb-2">
                    <FormattedMessage id="menu.br" defaultMessage="SURF AND TURF MENU" />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.br1" defaultMessage="Ranchero Eggs | Divorced Eggs | Mexican Style Eggs" /></li>
                    <li><FormattedMessage id="menu.br2" defaultMessage="Chilaquiles with Eggs" /></li>
                    <li><FormattedMessage id="menu.br3" defaultMessage="Machaca Burrito with Egg" /></li>
                    <li><FormattedMessage id="menu.br4" defaultMessage="Oatmeal with Fruits | Nuts" /></li>
                    <li><FormattedMessage id="menu.app5" defaultMessage="Vegetable Omelette | Chorizo | Cheese" /></li>
                    <li><FormattedMessage id="menu.br6" defaultMessage="Toasted Bread with Avocado and Fresh Leaves" /></li>
                    <li><FormattedMessage id="menu.br7" defaultMessage="Enfrijoladas with Chicken | Cheese" /></li>
                    <li><FormattedMessage id="menu.br8" defaultMessage="Additionally: Cereals | Yogurt | Fruit | Hot Cakes or Waffles | Potatoes with Sausage | Coffee | Tea | Orange Juice" /></li>
                </ul>


                <h2 className="text-yellow-400 font-title tracking-widest md:mt-12 border-b-2 border-yellow-400 w-1/4 md:mb-2">
                    <FormattedMessage id="menu.br" defaultMessage="TEQUILA TASTING MENU" />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.br1" defaultMessage="Ranchero Eggs | Divorced Eggs | Mexican Style Eggs" /></li>
                    <li><FormattedMessage id="menu.br2" defaultMessage="Chilaquiles with Eggs" /></li>
                    <li><FormattedMessage id="menu.br3" defaultMessage="Machaca Burrito with Egg" /></li>
                    <li><FormattedMessage id="menu.br4" defaultMessage="Oatmeal with Fruits | Nuts" /></li>
                    <li><FormattedMessage id="menu.app5" defaultMessage="Vegetable Omelette | Chorizo | Cheese" /></li>
                    <li><FormattedMessage id="menu.br6" defaultMessage="Toasted Bread with Avocado and Fresh Leaves" /></li>
                    <li><FormattedMessage id="menu.br7" defaultMessage="Enfrijoladas with Chicken | Cheese" /></li>
                    <li><FormattedMessage id="menu.br8" defaultMessage="Additionally: Cereals | Yogurt | Fruit | Hot Cakes or Waffles | Potatoes with Sausage | Coffee | Tea | Orange Juice" /></li>
                </ul>



                <h2 className="text-yellow-400 font-title tracking-widest md:md:mt-12 border-b-2 border-yellow-400 w-1/4 md:mb-2">
                    <FormattedMessage id="menu.br" defaultMessage="VEGETARIAN MENU" />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.br1" defaultMessage="Ranchero Eggs | Divorced Eggs | Mexican Style Eggs" /></li>
                    <li><FormattedMessage id="menu.br2" defaultMessage="Chilaquiles with Eggs" /></li>
                    <li><FormattedMessage id="menu.br3" defaultMessage="Machaca Burrito with Egg" /></li>
                    <li><FormattedMessage id="menu.br4" defaultMessage="Oatmeal with Fruits | Nuts" /></li>
                    <li><FormattedMessage id="menu.app5" defaultMessage="Vegetable Omelette | Chorizo | Cheese" /></li>
                    <li><FormattedMessage id="menu.br6" defaultMessage="Toasted Bread with Avocado and Fresh Leaves" /></li>
                    <li><FormattedMessage id="menu.br7" defaultMessage="Enfrijoladas with Chicken | Cheese" /></li>
                    <li><FormattedMessage id="menu.br8" defaultMessage="Additionally: Cereals | Yogurt | Fruit | Hot Cakes or Waffles | Potatoes with Sausage | Coffee | Tea | Orange Juice" /></li>
                </ul>



                <h2 className="text-yellow-400 font-title tracking-widest md:mt-12 border-b-2 border-yellow-400 w-1/4 md:mb-2">
                    <FormattedMessage id="menu.br" defaultMessage="SWEETS AND COFFEE MENU" />
                </h2>
                <ul className="list-disc pl-4">
                    <li><FormattedMessage id="menu.br1" defaultMessage="Ranchero Eggs | Divorced Eggs | Mexican Style Eggs" /></li>
                    <li><FormattedMessage id="menu.br2" defaultMessage="Chilaquiles with Eggs" /></li>
                    <li><FormattedMessage id="menu.br3" defaultMessage="Machaca Burrito with Egg" /></li>
                    <li><FormattedMessage id="menu.br4" defaultMessage="Oatmeal with Fruits | Nuts" /></li>
                    <li><FormattedMessage id="menu.app5" defaultMessage="Vegetable Omelette | Chorizo | Cheese" /></li>
                    <li><FormattedMessage id="menu.br6" defaultMessage="Toasted Bread with Avocado and Fresh Leaves" /></li>
                    <li><FormattedMessage id="menu.br7" defaultMessage="Enfrijoladas with Chicken | Cheese" /></li>
                    <li><FormattedMessage id="menu.br8" defaultMessage="Additionally: Cereals | Yogurt | Fruit | Hot Cakes or Waffles | Potatoes with Sausage | Coffee | Tea | Orange Juice" /></li>
                </ul>


                </div>


                <div>{/* las imagenes */}

                    <div className="md:h-full sm:h-screen mx-4">
                        <Carousel>
                            <img src="https://i.ibb.co/LrmKzds/18.png" alt="..." />
                            <img src="https://i.ibb.co/23DDjTr/19.png" alt="..." />
                            <img src="https://i.ibb.co/Qd8tLP1/d1.png" alt="..." />
                            <img src="https://i.ibb.co/gz1mQPS/d2.png" alt="..." />
                            <img src="https://i.ibb.co/Cw6wzZz/d3.png" alt="..." />
                            <img src="https://i.ibb.co/WKZXys9/d4.png" alt="..." />
                            <img src="https://i.ibb.co/M8sMYSW/d5.png" alt="..." />
                            <img src="https://i.ibb.co/hB9nPkp/1.png" alt="..." />
                            <img src="https://i.ibb.co/TM3c8KB/2.png" alt="..." />
                            <img src="https://i.ibb.co/RpCr9TF/3.png" alt="..." />
                            <img src="https://i.ibb.co/9Yg2KtP/4.png" alt="..." />
                            <img src="https://i.ibb.co/BHJRWXF/5.png" alt="..." />
                            <img src="https://i.ibb.co/9ZFRLkm/6.png" alt="..." />
                            <img src="https://i.ibb.co/GWRSmH3/7.png" alt="..." />
                            <img src="https://i.ibb.co/7j7F0mS/8.png" alt="..." />
                            <img src="https://i.ibb.co/f4KkDGC/9.png" alt="..." />
                            <img src="https://i.ibb.co/3Ybjz4j/10.png" alt="..." />
                            <img src="https://i.ibb.co/NCxqVR0/Whats-App-Image-2023-12-14-at-9-38-10-AM-1.jpg" alt="..." />
                            <img src="https://i.ibb.co/jvpcJhS/Whats-App-Image-2023-12-14-at-9-38-10-AM-2.jpg" alt="..." />
                            <img src="https://i.ibb.co/WVB8hPM/Whats-App-Image-2023-12-14-at-9-38-10-AM.jpg" alt="..." />
                            <img src="https://i.ibb.co/tb9ZvHv/El-Equipo.png" alt="..." />
                            <img src="https://i.ibb.co/4VHH7W1/El-Equipo-1.png" alt="..." />
                            <img src="https://i.ibb.co/hd7Qkjk/17.png" alt="..." />
                        </Carousel>
                    </div>

                </div>

            </div>
        </>
    )
};

export default Menu;





