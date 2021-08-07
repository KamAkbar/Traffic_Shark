<template>
  <section class="sponsor">
      <h1 class="sponsor__title">Еженедельные выплаты от <span class="sponsor__span">$100</span></h1>
      <p class="sponsor__text">На удобную для вас платежную систему из перечисленных ниже</p>
      <div class="sponsor-list">
          <img src="../img/s1.png" alt="Sponsor" class="sponsor__item">
          <img src="../img/s2.png" alt="Sponsor" class="sponsor__item">
          <img src="../img/s3.png" alt="Sponsor" class="sponsor__item">
          <img src="../img/s4.png" alt="Sponsor" class="sponsor__item">
          <img src="../img/s5.png" alt="Sponsor" class="sponsor__item">
          <img src="../img/s6.png" alt="Sponsor" class="sponsor__item">
      </div>
  </section>
</template>

<script>
export default {
    name: 'Sponsor'
}
</script>

<style lang="scss">
    .sponsor{
        &__title{
            text-align: center;
            font-weight: 900;
            font-size: 30px;
            line-height: 37px;
            text-align: center;
            text-transform: uppercase;
            color: #000000;
        }
        &__span{
            color: #2E9ADB;
        }
        &__text{
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            color: #939393;
            margin-top: 20px;
            text-align: center;
        }
        &-list{
            margin-top: 80px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
        }
        &__item{
            object-fit: contain;
        }
    }
    @media (max-width: 448px) { 
        .sponsor{
            &__title{
                font-size: 20px;
                line-height: 25px;
            }
            &__text{
                margin-top: 10px;
                font-size: 15px;
                line-height: 15px;
            }
        }
    }
</style>