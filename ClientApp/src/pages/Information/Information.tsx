import * as React from "react";
import "./Information.styles.css";

export const Information = () => {
  return (
    <div className="information_page">
      <article className="article">
        <h1 className="article__heading">Wie funktioniert Sicher-Einkaufen?</h1>
        <p className="article__text">
          Mit unserer Anwendung Sicher-Einkaufen kannst du von allen
          teilnehmenden Märkten die Auslastung einsehen, das bedeutet im Detail,
          ob ein Einkaufsladen gerade stark oder nicht so stark frequentiert
          ist.
          <br></br>
          <br></br>
          Diese Informationen können die Marktleiter in unserer Anwendung über
          ein Ampelsystem eintragen. Die Märkte werden dann auf einer Karte mit
          ihrem aktuellen Live-Status gefärbt.
          <br></br>
          <br></br>
          So kannst du schnell erkennen, in welchem Markt es zur Zeit von Corona
          am sichersten für dich ist einzukaufen.
        </p>
        <h2 className="article__heading">Hintergrund</h2>
        <p className="article__text">
          Knapp 83 Millionen Einwohner müssen in Deutschland durch über 51.000
          Supermärkte (Statista, 2019) mit Lebensmitteln versorgt werden. Diese
          Märkte sind aktuell die Brennpunkte, an denen das Ansteckungsrisiko am
          größten ist.
          <br></br>
          <br></br>
          Aufgrund dieser Entwicklung haben wir uns folgende Frage gestellt: Wie
          können wir trotz der Probleme in den Märkten das Ansteckungsrisiko so
          gering wie möglich halten?
          <br></br>
          <br></br>
          Unsere Lösung greift mehrere Probleme auf:
        </p>
        <table className="article__table">
          <tr>
            <td>
              <img
                className="article__image"
                src="/assets/AuslastungsSpitzen.svg"
              ></img>
            </td>
            <td>
              <img className="article__image" src="/assets/StopWatch.svg"></img>
            </td>
          </tr>
          <tr>
            <td className="article_table_text">
              <b>Auslastungsspitzen</b> in den Märkten <b>reduzieren</b>
            </td>
            <td className="article_table_text">
              <b>Warteschlangen </b> und <b>Wartezeit optimieren</b>
            </td>
          </tr>
          <tr>
            <td>
              <img className="article__image" src="/assets/Mask.svg"></img>
            </td>
            <td>
              <img className="article__image" src="/assets/Crowd.svg"></img>
            </td>
          </tr>
          <tr>
            <td className="article_table_text">
              <b>Mitarbeiter</b> der Märkte entlasten und <b>schützen</b>
            </td>
            <td className="article_table_text">
              Soziale Interaktion auf ein Minimum beschränken
              <b> (Social Distancing)</b>
            </td>
          </tr>
        </table>

        <p className="article__text">
          Mit unserer Anwendung tragen wir dazu bei, die Ausbreitung der
          Krankheit einzuschränken - #flattenthecurve. Wir helfen durch unsere
          Lösung den Menschen beim sicheren Einkaufen.
          <br></br>
          Unsere Marktumfrage spiegelt den erhöhten Besucherandrang in
          Supermärkten seit Beginn der Corona-Krise wider. Das bedeutet mehrere
          tausend Menschen setzen sich täglich einem erhöhten Infektionsrisiko
          aus.
          <br></br>
          <br></br>
          <img className="article__image__full" src="/assets/Andrang.png"></img>
          <br></br>
          <br></br>
          Für viele Supermärkte stellt dies eine Überlastung dar. Aufgrund derer
          sich mehr Personen in den Märkten befinden und die Warteschlangen
          länger sind, wodurch es schwieriger ist im Kassenbereich die
          empfohlenen 1,5 Meter Distanz zu wahren.
          <br></br>
          <br></br>
          In der unten zu sehenden Grafik “Wartezeit an der Kasse an einem
          Samstag im Supermarkt” wird deutlich, dass es an einem Corona-Samstag
          mit Sicher-Einkaufen eine deutliche Verbesserung der Wartezeit
          verglichen zu einem Tag ohne unsere Anwendung gibt. Wir erreichen
          sogar fast die Wartezeiten eines normalen Samstags.
          <br></br>
          <br></br>
          <img
            className="article__image__full"
            src="/assets/Auswertungen_Penny_wartezeiten.png"
          ></img>
          <br></br>
          <br></br>
          Dieses Projekt haben wir im Rahmen des Hackathons der Bundesregierung
          #WirvsVirus zur Bewältigung der Corona-Pandemie entwickelt.
        </p>
      </article>
    </div>
  );
};

export default Information;
