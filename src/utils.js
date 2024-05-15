const data = `为了工作我早出晚归，早上起床我常常感到疲惫不堪：	是	否
在某种心境下，我会因为困惑陷入空想，将工作搁置下来：	是	否
我的神经脆弱，稍有刺激就会使我战栗：	是	否
睡梦中，我常常被噩梦惊醒：	是	否`;

export function getSource() {
  const aa = data.split(/\t|\n/);
  let list = [];
  aa.forEach((item, index) => {
    if (index % 3 === 0) {
      list.push({
        question: item.replace('\n', ''),
        answer: [],
      });
    }
    if (index % 3 === 1) {
      list[list.length - 1].answer.push({
        text: item,
        score: index < 36 ? 6 : 5,
      });
    }
    if (index % 3 === 2) {
      list[list.length - 1].answer.push({
        text: item,
        score: index < 36 ? 3 : 2,
      });
    }
    if (index % 4 === 3) {
      list[list.length - 1].answer.push({
        text: item,
        score: 0,
      });
    }
  });
  console.log(JSON.stringify(list));
}
