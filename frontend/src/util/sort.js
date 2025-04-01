export const sort = (a, b, sortitem) => {
    switch(sortitem)
    {
      case 0:
        return a.name < b.name ? 1 : -1;
      case 1:
        return a.current_price > b.current_price ? 1 : -1;
      case 2:
        return a.market_cap > b.market_cap ? 1 : -1;
      case 3:
        return a.total_volume > b.total_volume ? 1 : -1;
      default:
        return 1;
    }
  }