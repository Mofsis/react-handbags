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
                text="loremLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem facere id impedit iusto, molestias nihil nulla numquam, qui quidem, sint"
                image=""
            />
            <Tiles
                title=""
                image={brand}
            >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, sequi!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, sequi!
            </p>
            </Tiles>
            <Tiles
                title=""
                text=""
                image={story}
            />
            <Tiles
                title="OUR STORY"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem facere id impedit iusto, molestias nihil nulla numquam, qui quidem, sint suscipit tenetur! Adipisci aspernatur earum laudantium omnis pariatur quidem. Dolor!"
                image=""
            />
        </footer>
      </>
  );
}

export default App;



