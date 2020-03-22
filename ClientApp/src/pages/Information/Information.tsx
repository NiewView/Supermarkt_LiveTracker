import * as React from "react";
import "./Information.styles.css";

export const Information = () => {
  return (
    <div className='information_page'>
      <article className='article'>
        <h1 className='article__heading'>Überschrift</h1>
        <p className='article__text'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <img className='article__image' src='/assets/article_image.png'></img>
      </article>
    </div>
  );
};

export default Information;
