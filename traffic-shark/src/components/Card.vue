<template>
  <section class="card">
      <h1 class="card__title">Топовые вертикали</h1>
      <div class="card-board board">
          <!-- <img src="../img/card.png" alt="" class="board__img">
          <div class="board-details">
              <h3 class="board__title">Installs</h3>
              <p class="board__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div> -->
          <div class="board__item">
            <img src="../img/board1.png" alt="" class="board__card">
          </div>
          <div class="board__item">
            <img src="../img/board2.png" alt="" class="board__card">
          </div>
          <div class="board__item">
            <img src="../img/board3.png" alt="" class="board__card">
          </div>
          <div class="board__item">
            <img src="../img/board4.png" alt="" class="board__card">
          </div> 
          <div class="board__item">
            <img src="../img/board5.png" alt="" class="board__card">
          </div>
          <div class="board__item">
            <img src="../img/board6.png" alt="" class="board__card">
          </div>         
      </div>
  </section>
</template>

<script>
export default {
    name: 'Card'
}
</script>

<style lang="scss">
    .card{
        margin-top: 80px;
        &__title{
            font-weight: 900;
            font-size: 30px;
            line-height: 37px;
            text-align: center;
            text-transform: uppercase;
            color: #000000;
        }
    }
    .board{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        &__item{
            max-width: 350px;
        }
        &__card{
            width: 100%;
        }
        // display: grid;
        // grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 768px) {
        .board{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 425px) {
        .board{
            grid-template-columns: 1fr;
        }
    }
</style>