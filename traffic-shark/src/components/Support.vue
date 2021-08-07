<template>
  <section class="support">
      <div class="support__title">Нам доверяют</div>
      <div class="support-logo">
          <img src="../img/l1.png" alt="Supporter" class="support-logo__item">
          <img src="../img/l2.png" alt="Supporter" class="support-logo__item">
          <img src="../img/l3.png" alt="Supporter" class="support-logo__item">
          <img src="../img/l4.png" alt="Supporter" class="support-logo__item">
          <img src="../img/l7.png" alt="Supporter" class="support-logo__item">
          <img src="../img/l8.png" alt="Supporter" class="support-logo__item">
          <img src="../img/l9.png" alt="Supporter" class="support-logo__item">
          <img src="../img/l10.png" alt="Supporter" class="support-logo__item">
          <img src="../img/l11.png" alt="Supporter" class="support-logo__item">
          <img src="../img/l12.png" alt="Supporter" class="support-logo__item">
          <img src="../img/l13.png" alt="Supporter" class="support-logo__item">
          <img src="../img/l14.png" alt="Supporter" class="support-logo__item">
      </div>
      <p class="support__text">и десятки других популярных компаний</p>
  </section>
</template>

<script>
export default {
    name: 'Support'
}
</script>

<style lang="scss">
    .support{
        margin-top: 84px;
        &__title{
            font-weight: 900;
            font-size: 30px;
            line-height: 37px;
            text-align: center;
            text-transform: uppercase;
            color: #000000;
        }
        &-logo{
            margin-top: 80px;
            display: flex;
            gap: 50px;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            &__item{
                object-fit: contain;
            }
        }
        &__text{
            margin-top: 80px;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            color: #939393;
        }
    }
    @media (max-width: 425px) {
        .support{
            &__title{
                font-size: 20px;
                line-height: 25px;
                margin-top: 32px;
            }
            &-logo{
                gap: 16px;
                margin-top: 32px;
                &__item{

                }
            }
            &__text{
                font-size: 13px;
                line-height: 15px;
                margin-top: 32px;
            }
        }
    }
</style>