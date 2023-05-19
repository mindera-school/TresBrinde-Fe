export const ProductsModal = ({ numberOfFoundProducts }: { numberOfFoundProducts: number }) => {
  return (
    <div className="searchedProductsContainer">
      <p>Resultados Encontrados {numberOfFoundProducts}</p>

      <button className="button load-more-button">Ver todos os resultados</button>
    </div>
  );
};
