import SingleItem from "./SingleItem";
import i from "../styles/itemList.module.scss";

const ItemList = ({ title, items, idPath, itemsArray }) => {
  return (
    <section className={i.itemList}>
      <header className={i.mainHeader}>
        <h2>{title}</h2>
        <a href="/">Mostrar tudo</a>
      </header>
      <main className={i.mainContainer}>
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currObj, index) => (
            <SingleItem 
              key={`${title}-${index}`} 
              idPath={idPath}
              {...currObj}
            />
          ))}
      </main>
    </section>
  );
};

export default ItemList;
