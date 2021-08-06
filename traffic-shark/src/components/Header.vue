<template>
  <header class="header">
      <div class="container header-container">
          <img src="../img/logo.png" alt="Logo" class="header__logo">
          <div class="header-details">
              <nav class="nav">
                  <a href="#" class="nav__item">ВЕБМАСТЕРАМ</a>
                  <a href="#" class="nav__item">РЕКРОМАДАТЕЛЯМ</a>
              </nav>
              <div class="header-log">
                  <a href="#"><h5 class="header__login">ВХОД</h5></a>
                  <span class="haeder__span"></span>
                  <a href="#"><h5 class="header__singup">РЕГИСТРАЦИЯ</h5></a>
              </div>
              <div class="header-lang">
                <label for="ru" class="header-switch">
                    <input class="header__switcher" type="radio" name="lang" checked id="ru">RU
                </label>
                <label for="en" class="header-switch">
                    <input class="header__switcher" type="radio" name="lang" id="en">EN
                </label>
              </div>
          </div>
      </div>
  </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss">
    .header{
        &-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 15px 0 15px 0;
        }
        &-details{
            display: flex;
            gap: 50px;
            align-items: center;
        }
        &-log{
            display: flex;
            gap: 0;
        }
        &-lang{
            gap: 0;
            font-weight: bold;
            font-size: 11px;
            line-height: 13px;
            display: flex;
            gap: 20px;
            align-items: center;
            text-align: center;
            color: #919191;
            background: #F9F9F9;
            border: 1px solid #EBEBEB;
            box-sizing: border-box;
            border-radius: 25px;
            padding: 14px 12px;
        }
        &__login{
            font-weight: 800;
            font-size: 13px;
            line-height: 16px;
            text-align: center;
            text-transform: uppercase;
            color: #55B570;
            padding-right: 8px;
        }
        &__singup{
            font-weight: 800;
            font-size: 13px;
            line-height: 16px;
            text-align: center;
            text-transform: uppercase;
            color: #55B570;
            border-left: 2px solid #55B570;
            padding-left: 8px;
        }

        &__switcher[type="radio"]{
            display: none;
        }
        &__switcher[type ="radio"]:checked + &-switch{
            background: #4EAAE0;
            border-radius: 25px;
            padding: 10px;
        }
    }
    .nav{
        display: flex;
        gap: 50px;
        &__item{
            font-weight: bold;
            font-size: 13px;
            line-height: 16px;
            text-align: right;
            text-transform: uppercase;
            color: #565656;
            &:hover{
                color: #55B570;
                transition: .5s;
            }
        }
    }

    @media (max-width: 992px) {
        .nav{
            display: none;
        }
    }
    @media (max-width: 475px) {
        .header{
            &__singup{
                display: none;
            }
            &-details{
                gap: 20px;
            }
        }
    }
</style>