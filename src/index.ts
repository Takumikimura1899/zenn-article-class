class Foods {
  private foodList: string[] = [];
  constructor(
    private readonly likeAndDislike: "好きな食べ物" | "嫌いな食べ物",
    public genle: string
  ) {}

  callName(this: Foods) {
    console.log(`(好きor嫌い)${this.likeAndDislike} : (ジャンル)${this.genle}`);
  }

  addFoodList(food: string) {
    this.foodList.push(food);
  }

  printFoodListInfo() {
    console.log(`リスト数:${this.foodList.length},${this.foodList}`);
  }
}

const favoriteFruits = new Foods("好きな食べ物", "果物");
const dislikedVegetables = new Foods("嫌いな食べ物", "野菜");

favoriteFruits.addFoodList("りんご");
favoriteFruits.addFoodList("メロン");
dislikedVegetables.addFoodList("きゅうり");

//書き換え可能
// favoriteFruits.genle = "麺類";

favoriteFruits.callName();
favoriteFruits.printFoodListInfo();
dislikedVegetables.printFoodListInfo();
