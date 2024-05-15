<template>
  <div class="intro">
    <div class="eq-text">测试完成，你的 EQ 值为</div>
    <i-circle :percent="100" stroke-color="#ff9900">
      <span class="circle-inner">
        <animate-number
          from="0"
          :to="$attrs.number"
          duration="1500"
          easing="easeOutQuad"
          from-color="#44CC00"
          to-color="#ec4949"
          style="font-size: 30px; text-align: center; display: block"
        ></animate-number
      ></span>
    </i-circle>
    <Button
      type="info"
      shape="circle"
      icon="ios-ionic"
      class="retry"
      @click="$emit('goHome')"
      >重新测试</Button
    >

    <!-- <Alert>
      专家点评:
      <template slot="desc"
        >近年来，EQ--情绪智商--逐渐受到了重视，世界500强企业还将EO测试作为员工招聘、培训、任命的重要参考标准。看看我们身边，有些人绝顶聪明，IO很高，却一事无成，甚至有人可以说是某。一方面的能手，却仍被拒于企业大门之外;相反，许多IQ平庸者，却反而常有令人羡慕的良机、杰出的表现。为什么呢?最大的原因在于EQ的不同!一个人若没有情绪智商，不懂得提高情绪自制力、自我驱使力，也没有同情心和热忱的毅力，就可能是个“EQ低能儿”。通过以上测试，你就能对自己的EQ有所了解。但切记这不是一个求职询问表，用不着有意识地尽量展示你的优点和掩饰你的缺点。如果你真心想对自己有一个判断，那你就不应施加任何粉饰。否则，你应重测一次。测试后如果你的得分在9o分以下，说明你的EQ较低，你常常不能控制自己，极易被自己的情绪所影响。很多时候，你容易被激怒、动火、发脾气，这是非常危险的信号--你的事业可能会毁于你的急躁。对于此，最好的解决办法是能够给不好的东西一个好的解释，保持头脑冷静，使自己心情开朗。正如富兰克林所说:“任何人生气都是有理由的，但很少有令人信服的理由。”如果你的得分在90~129分，说明你的EO一般，对于一件事，你不同时候的表现可能不一，这与你的意识有关，你比前者更具有EO意识，但这种意识不是常常都有，因此需要你多加注意、时时提醒。如果你的得分在130~149分，说明你的EO较高，你是一个快乐的人，不易恐惧和担忧，对于工作你热情投入、敢于负责，你为人更是正义正直、同情关怀，这是你的优点，应该努力保持。如果你的EO在150分以上，那你就是个EQ高手，你的情绪智商不但是你事业的助手，更是你事业有成的一个重要前提条件。</template
      >
    </Alert> -->
  </div>
</template>

<style>
.intro {
  height: 100vh;
  background: #e9eaec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 12px;
  padding-top: 60px;
}

.eq-text {
  font-size: 16px;
  color: #464c5b;
  font-weight: bold;
  margin-bottom: 50px;
}

.ivu-alert-with-desc {
  max-height: 400px !important;
  overflow: scroll !important;
}

.ivu-alert-icon {
  top: auto !important;
}

.circle-inner {
  font-size: 30px;
  color: #19be6b;
  font-weight: bold;
}

.retry {
  margin: 24px 0;
  margin-top: 50px;
}
</style>
