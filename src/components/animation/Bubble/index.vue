<template>
  <div id="bubble">
    <ul class="square">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <ul class="circle">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#bubble {
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  ul {
    margin: 0;
    li {
      opacity: 0;
      width: 15px;
      height: 15px;
      border: 1px solid white;
      position: absolute;
      list-style: none;
    }
  }

  .square {
    li {
      animation: square 10s linear infinite;
    }
    li:nth-child(1) {
      top: 10vh;
      left: 15vw;
      animation-delay: 4s;
      background-color: white;
      display: none;
    }
    li:nth-child(2) {
      top: 80vh;
      left: 15vw;
      animation-delay: 0.5s;
    }
    li:nth-child(3) {
      top: 50vh;
      left: 80vw;
      animation-delay: 2s;
      background-color: white;
    }
    li:nth-child(4) {
      top: 80vh;
      left: 70vw;
      animation-delay: 1s;
    }
    li:nth-child(5) {
      top: 10vh;
      left: 80vw;
      animation-delay: 2.5s;
    }
    @keyframes square {
      from {
        opacity: 1;
        transform: scale(0) rotate(0);
      }
      to {
        opacity: 0;
        transform: scale(5) rotate(1000deg);
      }
    }
  }
  .circle {
    li {
      bottom: 0;
      animation: circle 10s linear infinite;
    }
    li:nth-child(1) {
      left: 5vw;
      animation-delay: 3s;
      background-color: white;
    }
    li:nth-child(2) {
      left: 55vw;
      animation-delay: 1.5s;
      background-color: white;
    }
    li:nth-child(3) {
      left: 45vw;
      animation-delay: 5s;
    }
    li:nth-child(4) {
      left: 35vw;
      animation-delay: 0.5s;
    }
    li:nth-child(5) {
      left: 70vw;
      animation-delay: 4s;
      background-color: white;
    }
    @keyframes circle {
      from {
        opacity: 1;
        transform: translateY(0) scale(0) rotate(0);
      }
      to {
        opacity: 0;
        transform: translateY(-90vh) scale(5) rotate(1000deg);
        border-radius: 50%;
      }
    }
  }
}
</style>
