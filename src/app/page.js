import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {

  const response = await fetch('https://dummyjson.com/products');

  return (
   <p>test</p>
  );
}
