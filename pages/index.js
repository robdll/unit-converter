import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Metric/Imperial Converter</title>
        <meta name="description" content="Metric/Imperial Converter Project" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Metric/Imperial Converter</h1>
      <hr style={{ margin: `50px` }} />
      <section>
        <h3>Example usage</h3>
        <code>/api/convert?input=4gal</code>
        <br />
        <code>/api/convert?input=1/2km</code>
        <br />
        <code>/api/convert?input=5.4/3lbs</code>
        <br />
        <code>/api/convert?input=kg</code>
        <br />
        <h3>Example return</h3>
        <code>{`initNum: 3.1, initUnit: 'mi', returnNum: 4.98895, returnUnit: 'km', string: '3.1 miles converts to 4.98895 kilometers'`}</code>
      </section>
      <hr style={{ margin: `50px` }} />
      <section>
        <h3 style={{ textAlign: `left` }}>Try it out</h3>
        <form id="convertForm">
          <input
            type="text"
            id="convertField"
            name="input"
            placeholder="3.1mi"
            style={{ width: "200px" }}
          />
          <input id="convert" type="submit" value="Convert!" />
        </form>
      </section>
    </div>
  );
}
