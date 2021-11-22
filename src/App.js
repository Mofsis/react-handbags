import React from "react";
import "./App.css";
import Bag from "./Bag"
import Tiles from "./Tiles"

import Button from "./Button";
import bag1 from "./assets/bag_1.png"
import bag2 from "./assets/bag_2.png"
import bag3 from "./assets/bag_3.png"
import bag4 from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import story from "./assets/our_story.png"

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button
              disable={false}
              buttonName="to the collection"
              log="clicked on the to the collection button"
          />
          <Button
              disable={false}
              buttonName="shop all bags"
              log="clicked on the shop all bags button"
          />
          <Button
               disable={true}
               buttonName="pre-order"
          />
        </nav>
        <main>
            <Bag
                sale="Bestseller"
                image={bag1}
                bagName="The Handy bag"
                price="€400,-"
            />
            <Bag
                sale="Bestseller"
                image={bag2}
                bagName="The stylish bag"
                price="€250,-"
            />
            <Bag
                sale="New collection"
                image={bag3}
                bagName="The simple bag"
                price="€300,-"
            />
            <Bag
                sale="New collection"
                image={bag4}
                bagName="The trendy bag"
                price="€150,-"
            />
        </main>
        <footer>
            <Tiles
                title="THE BRAND"
                image=""
            >
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur cum exercitationem facere nam necessitatibus non repellat saepe ullam voluptatum!
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur cum exercitationem facere nam necessitatibus non repellat saepe ullam voluptatum!
                </p>
            </Tiles>
            <Tiles
                title=""
                image={brand}
            />

            <Tiles
                title=""
                image={story}
            />
            <Tiles
                title="OUR STORY"
                image=""
            >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum esse est eveniet explicabo sunt? Commodi eveniet laborum nihil officia veniam. In incidunt inventore iure perspiciatis repellendus, sapiente sequi vero vitae.</p>
            </Tiles>
        </footer>
      </>
  );
}

export default App;



