import React from "react";
import LessonPage from "../../components/LessonPage";
import Chart from "../../components/Chart04";
import instruction from "./instruction.md";

const convertData = (input) => {
  const species = Array.from(new Set(input.map(({ species }) => species))); //名前をかぶらないように格納。それを配列に戻す。
  return species.map((species) => {
    return {
      id: species, //品種名
      data: input
        .filter((item) => item.species === species) //品種名が一致するもののデータを取り出す
        .map(({ sepalLength: x, petalWidth: y }) => ({ x, y })), //それぞれのデータをx, yに変換
    };
  });
};

const Lesson = () => {
  return (
    <LessonPage
      answerUrl="/answer04"
      dataUrl="data/iris.json"
      convertData={convertData}
      instruction={instruction}
      title="Lesson 04"
      Chart={Chart}
    />
  );
};

export default Lesson;
