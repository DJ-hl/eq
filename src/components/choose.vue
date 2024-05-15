<template>
  <div class="page">
    <Alert type="success"
      >第 {{ current + 1 }} 题，共 {{ questions.length }} 题</Alert
    >
    <div class="line">
      <p>进度：</p>
      <Progress
        :percent="percent"
        :stroke-width="20"
        :stroke-color="['#108ee9', '#87d068']"
        status="active"
        text-inside
      />
    </div>
    <div v-for="(item, index) in questions" :key="index" class="list-tab">
      <div v-if="current === index">
        <Alert
          ><div style="line-height: 1.5">
            题目 {{ index + 1 }} ：{{ item.question }}
          </div></Alert
        >
        <List border style="margin: 20px 0 40px 0">
          <ListItem
            v-for="(answerItem, i) in item.answer"
            :key="i"
            :class="[chooseScore == answerItem.score && 'active']"
          >
            <div style="width: 100%" @click="chooseAnswer(answerItem.score)">
              {{ answerMap[i] }}：{{ answerItem.text }}
            </div>
          </ListItem>
        </List>
      </div>
    </div>
    <Button
      size="large"
      type="primary"
      long
      :disabled="chooseScore == -1"
      @click="goNext"
      >{{ chooseScore != -1 ? "下一题" : "选择答案" }}</Button
    >
    <!-- <div class="bottom-tip">
      <Alert type="warning"
        ><div class="bottom-desc">
          这是一组欧洲流行的测试题，可口可乐公司、麦当劳公司、诺基亚公司等众多世界500强企业曾以此为员工EQ测试的模板，帮助员工了解自己的EQ状况。共33题，最高EQ为174分。
        </div></Alert
      >
    </div> -->
  </div>
</template>

<script>
import { questions } from "../question";
export default {
  data() {
    return {
      questions,
      current: 0,
      answerMap: {
        0: "A",
        1: "B",
        2: "C",
        3: "D",
        4: "E",
        5: "F",
      },
      chooseScore: -1,
      scoreSum: 0,
    };
  },
  computed: {
    percent() {
      return parseInt((this.current / questions.length) * 100);
    },
  },
  methods: {
    chooseAnswer(score) {
      this.chooseScore = score;
    },
    goNext() {
      this.scoreSum = this.scoreSum + this.chooseScore;
      this.chooseScore = -1;
      this.current = this.current + 1;
      if(this.current === questions.length) {
        this.$emit('over', this.scoreSum)
      }
    },
  },
};
</script>

<style scoped>
.page {
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ivu-card {
  width: 100% !important;
}
.line {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 0 40px 0;
}
.line p {
  width: 50px;
}
.count {
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  font-family: "PingFang SC";
}
.ivu-card-head p {
  font-size: 16px !important;
}
.list-tab {
  width: 100%;
}
.active {
  background: #abdcff;
}
.bottom-tip {
  position: fixed;
  left: 0;
  bottom: 40px;
  padding: 0 12px;
}
.bottom-desc {
  line-height: 1.5;
  font-size: 14px;
}
.ivu-alert {
  padding: 8px 16px !important;
}

</style>