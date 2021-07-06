/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  let dishes = [];
  const tables = {};
  orders.forEach((order) => {
    const [_, table, dish] = order;
    if (!dishes.includes(dish)) {
      dishes.push(dish);
    }
    tables[table] = tables[table] || {};
    tables[table][dish] = tables[table][dish] || 0;
    tables[table][dish] += 1;
  });
  dishes = dishes.sort();
  const result = [];
  result[0] = ["Table"].concat(dishes);
  Object.keys(tables)
    .sort((a, b) => a - b)
    .forEach((table) => {
      const len = result.length;
      result[len] = [table].concat(
        dishes.map((dish) =>
          tables[table][dish] ? String(tables[table][dish]) : "0"
        )
      );
    });
  return result;
};

// 输入：orders = [["Laura","2","Bean Burrito"],["Jhon","2","Beef Burrito"],["Melissa","2","Soda"]]
// 输出：[["Table","Bean Burrito","Beef Burrito","Soda"],["2","1","1","1"]]

const orders = [
  ["David", "3", "Ceviche"],
  ["Corina", "10", "Beef Burrito"],
  ["David", "3", "Fried Chicken"],
  ["Carla", "5", "Water"],
  ["Carla", "5", "Ceviche"],
  ["Rous", "3", "Ceviche"],
];

console.log(displayTable(orders));
