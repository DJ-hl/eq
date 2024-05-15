<template>
  <div class="home">
    <img src="../assets/bg.png" alt="" />
    <div
      class="animate__animated animate__bounceIn animate__infinite animate__slow start"
      @click="$emit('goTest')"
    >
      <img src="../assets/start1.png" alt="">
    </div>
  </div>
</template>


<style>
img {
  width: 100%;
}
.start {
  width: 70px;
  height: 70px;
  position: fixed;
  bottom: 100px;
}

.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  background: red;
}
</style>