import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [apiRes, setApiRes] = useState("");

  const handleClick = () => {
    setApiRes("");
    fetch(`/api/convert?input=${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        setApiRes(data);
        console.log(data);
      })
      .catch((err) => {
        setApiRes(err);
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setInputValue(event.target.value);
  };

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
      <hr />
      <section>
        <h3>Example usage</h3>
        <code className={styles.code}>/api/convert?input=4gal</code>
        <code className={styles.code}>/api/convert?input=1/2km</code>
        <code className={styles.code}>/api/convert?input=5.4/3lbs</code>
        <code className={styles.code}>/api/convert?input=kg</code>
        <h3>Example return</h3>
        <code className={`${styles.code} ${styles.noIndent}`}>{`{`}</code>
        <code className={styles.code}>{`initNum: 3.1,`}</code>
        <code className={styles.code}>{`initUnit: 'mi',`}</code>
        <code className={styles.code}>{`returnNum: 4.98895,`}</code>
        <code className={styles.code}>{`returnUnit: 'km',`}</code>
        <code
          className={styles.code}
        >{`string: '3.1 miles converts to 4.98895 kilometers'`}</code>
        <code className={`${styles.code} ${styles.noIndent}`}>{`}`}</code>
      </section>
      <hr />
      <section>
        <h3 style={{ textAlign: `left` }}>Try it out</h3>
        <input
          type="text"
          name="input"
          placeholder="3.1mi"
          style={{ width: "200px" }}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Convert!</button>
        <br />
        <br />
        {apiRes && (
          <code
            className={`${styles.code} ${styles.response} ${styles.noIndent}`}
          >
            {JSON.stringify(apiRes)}
          </code>
        )}
      </section>
    </div>
  );
}
