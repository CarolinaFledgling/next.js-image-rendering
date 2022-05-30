import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import bikeImg from "../images/bike.jpg";
// static  img import

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <p>Very basic image source tag, inspect it in network </p>
        <img
          height="500"
          src="https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg"
        />
      </div>
      <div>
        <p>Using Image component from next.js with a static img import</p>
        <p>
          When we have a local img when it optimizes and builds, its essentially
          going to know what the height and width is because we have access to
          the file
        </p>
        <Image src={bikeImg} alt="bike" />
      </div>
      <div>
        <p>Using Image component from next.js with a remote img from url</p>
        <p>
          we need to provide url and we need to tell next.js the height and
          width of img{" "}
        </p>
        <p>
          we need to provide url and we need to tell next.js the height and
          width of img, next.js doesnt know height and width, it doesnt know how
          to handle that file from url
        </p>
        <Image
          src="https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg"
          alt="bike"
          height={1080}
          width={1920}
        />
      </div>
      <div>
        <p>Using Image component from next.js with a remote img from url</p>
        <p>
          but if we dont know what the height and width is, and we want to have
          more responsive dynamic approach to styling, instead of height and
          with in Image component we can set layout="fill"
        </p>
        <p>
          what this will do is it will essentially become the size of the parent
          component
        </p>
        <div className="imgBox">
          <Image
            src="https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_1280.jpg"
            alt="bike"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
