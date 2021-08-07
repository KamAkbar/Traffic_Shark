<template>
  <section class="offer">
      <h2 class="offer__title">мы всегда в топе!</h2>
      <p class="offer__text">Мы прямой рекламодатель с собственными офферами, которые входят в топ-чарты AppStore и Google Play. </p>
      <div class="offer-details container">
        <div class="offer-info">
            <h1 class="offer__subtitle">ТОП</h1>
            <p class="offer__subtext">Наши офферы входят в ТОПы в AppStore и Google Play</p>
        </div>
        <div class="offer-info">
            <h1 class="offer__subtitle">ОФФЕРЫ</h1>
            <p class="offer__subtext">Мы делаем собственные белые мобильные офферы, которые вы не найдете ни в одной другой партнерке</p>
        </div>
        <div class="offer-info">
            <h1 class="offer__subtitle">2.5$</h1>
            <p class="offer__subtext">Мы платим до $2.5 за инсталл и принимаем трафик со всего мира</p>
        </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'Offer'
}
</script>

<style lang="scss">
    .offer{
        background: url('../img/offerbg.png');
        padding: 185px 0 200px;
        background-size: cover;
        &__title{
            font-weight: 900;
            font-size: 30px;
            line-height: 37px;
            text-align: center;
            text-transform: uppercase;
            color: #FFFFFF;
        }
        &__text{
            padding-top: 20px;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            color: #FFFFFF;
            max-width: 730px;
            margin: 0 auto
        }
        &-details{
            margin-top: 80px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        &__subtitle{
            color: #FFFFFF;
            font-weight: 800;
            font-size: 76px;

        }
        &__subtext{
            margin-top: 30px;
            font-weight: bold;
            font-size: 16px;
            line-height: 19px;
            text-align: center;
            color: #FFFFFF;
        }
    }
    @media (max-width: 992px) {
        .offer{
            &-details{
                margin-top: 60px;
            }
            &__subtitle{
                font-weight: 600;
                font-size: 64px
            }
            &__subtext{
                font-weight: normal;
                font-size: 14px;
                line-height: 17px;
            }
        }
    }
    @media (max-width: 768px) {
        .offer{
            padding: 150px 0 150px;
            &-details{
                flex-direction: column;
                margin-top: 0;
            }
            &__subtext{
                margin-top: 20px;
                font-weight: normal;
                font-size: 14px;
                line-height: 16px;
            }
            &__subtitle{
                margin-top: 25px;
                font-weight: 400;
                font-size: 46px;
            }
            &__title{
                font-weight: 700;
                font-size: 20px;
                line-height: 25px;
            }
            &__text{
                font-size: 16px;
                line-height: 19px;
            }
        }
    }
</style>