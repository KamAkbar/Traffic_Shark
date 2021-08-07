<template>
  <section class="contact">
      <h1 class="contact__title">Остались вопросы? Готовы ответить!</h1>
      <input type="text" class="contact__input" placeholder="Ваше имя">
      <input type="text" class="contact__input" placeholder="Ваши контакты">
      <input type="text" class="contact__input" placeholder="Ваше предложение">
      <button class="v-btn contact__btn">написать нам</button>
  </section>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style lang="scss">
    .contact{
        background: url('../img/contactbg.png');
        padding: 330px 0 200px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        align-items: center;
        &__title{
            margin-top: 40px;
            font-weight: 900;
            font-size: 30px;
            line-height: 37px;
            text-align: center;
            color: #FFFFFF;
        }
        &__input{
            padding: 28px 600px 28px 30px;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            color: rgba(126, 126, 126, 0.5);
            background: #FFFFFF;
            border-radius: 40px;
            border: 1px solid #fff;
            outline: none;
        }
        &__btn{
            font-weight: 900;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            text-transform: uppercase;
            color: #FFFFFF;
            border: 1px solid #FFFFFF;
            box-sizing: border-box;
            border-radius: 40px;
            padding: 28px 100px;
            background: initial;
        }
    }
    @media (max-width: 934px) {
        .contact{
            &__input{
               padding: 28px 400px 28px 30px;
            }
        }
    }
    @media (max-width: 748px) {
        .contact{
            &__input{
               padding: 28px 200px 28px 30px;
            }
        }
    }
    @media (max-width: 560px) {
        .contact{
            &__input{
               padding: 20px 120px 20px 24px;
            }
        }
    }
    @media (max-width: 478px) {
        .contact{
            &__btn{
                padding: 15px 50px;
                font-size: 16px;
                line-height: 24px;
            }
            &__input{
               padding: 16px 60px 16px 18px;
               font-size: 16px;
               line-height: 19px;
            }
            &__title{
                font-size: 20px;
                line-height: 25px;
            }
        }
    }
</style>