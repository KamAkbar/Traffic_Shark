<template>
  <section class="intro">
        <Particles
        id="tsparticles"
        :particlesInit="particlesInit"
        :particlesLoaded="particlesLoaded"
        :options="option"
      />
      <div class="container">
        <div class="intro-info">
            <h1 class="intro__title">Мобильная партнерская сеть</h1>
            <p class="intro__text">Только рабочие офферы от прямых рекламодателей</p>
        </div>
        <div class="intro-details">
            <div class="intro-card">
                <h3 class="intro__number">300+</h3>
                <p class="intro__subtitle">офферов по всему миру</p>
            </div>
            <div class="intro-card">
                <h3 class="intro__number">70+</h3>
                <p class="intro__subtitle">активных рекламодателей</p>
            </div>
            <div class="intro-card">
                <h3 class="intro__number">6 лет</h3>
                <p class="intro__subtitle">в аффилейт маркетинге</p>
            </div>
            <div class="intro-card">
                <h3 class="intro__number">10.000+</h3>
                <p class="intro__subtitle">конверсий в день</p>
            </div>
        </div>
        <div class="intro-cart">
            <div class="intro-column">
                <p class="intro-column__text">Я пользователь соцсетей, блогер, владелец сайта или арбитражник и хочу сотрудничать с топовыми мировыми брендами.</p>
                <button class="intro__btn v-btn">веб-мастерам <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.55301 19.7709C5.55324 19.7706 5.55352 19.7704 5.55375 19.7702L9.61625 15.688C9.92059 15.3821 9.91946 14.8875 9.6136 14.5831C9.30778 14.2787 8.81313 14.2799 8.50875 14.5857L5.78125 17.3265L5.78125 0.78125C5.78125 0.349765 5.43149 -1.92866e-07 5 -2.11727e-07C4.56852 -2.30588e-07 4.21875 0.349765 4.21875 0.78125L4.21875 17.3264L1.49125 14.5857C1.18688 14.2799 0.692228 14.2788 0.386407 14.5831C0.0805095 14.8875 0.0794547 15.3822 0.383751 15.688L4.44625 19.7702C4.44649 19.7704 4.44676 19.7706 4.44699 19.7709C4.75238 20.0769 5.24863 20.0759 5.55301 19.7709Z" fill="white"/>
                    </svg>  </button>
            </div>
            <svg class="intro__line" width="2" height="300" viewBox="0 0 2 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="2" height="300" fill="#F3F3F3"/>
                </svg>
            <div class="intro-column">
                <p class="intro-column__text">Я владелец компании или маркетолог и хочу привлечь новых клиентов и увеличить продажи с помощью онлайн-рекламы и другие варианты, бренд</p>
                <button class="intro__btn intro__btn_s v-btn">рекламодателю<svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7709 4.44699C19.7706 4.44676 19.7704 4.44648 19.7702 4.44625L15.688 0.383747C15.3821 0.0794115 14.8875 0.0805441 14.5831 0.386403C14.2787 0.692224 14.2799 1.18687 14.5857 1.49125L17.3265 4.21875H0.78125C0.349766 4.21875 0 4.56851 0 5C0 5.43148 0.349766 5.78125 0.78125 5.78125H17.3264L14.5857 8.50875C14.2799 8.81312 14.2788 9.30777 14.5831 9.61359C14.8875 9.91949 15.3822 9.92054 15.688 9.61625L19.7702 5.55375C19.7704 5.55351 19.7706 5.55324 19.7709 5.55301C20.0769 5.24762 20.0759 4.75137 19.7709 4.44699Z" fill="white"/>
                    </svg></button>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
    name: 'Intro',
    data (){
    return{
      option : {
        background: {
          color: {
            value: 'transparent'
          }
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40
            },
            push: {
              quantity: 4
            },
            repulse: {
              distance: 200,
              duration: 0.4
            }
          }
        },
        particles: {
          color: {
            value: '#ffffff'
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false
          },
          number: {
            density: {
              enable: true,
              value_area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            type: 'circle'
          },
          size: {
            random: true,
            value: 1
          }
        },
        detectRetina: true
      }
    }
  }
}
</script>

<style lang="scss">
    #tsparticles{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 2;
    }
    .intro{
        background: url("../img/introbg.png");
        position: relative;
        &-info{
            padding-top: 171px;
            text-align: center;
        }
        &__title{
            font-weight: 900;
            font-size: 60px;
            line-height: 75px;
            text-align: center;
            text-transform: uppercase;
            color: #FFFFFF;
        }
        &__text{
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            color: #FFFFFF;
        }
        &-details{
            margin-top: 100px;
            display: flex;
            justify-content: space-around;
            padding-top: 30px;
            padding-bottom: 50px;
        }
        &__number{
            font-weight: 800;
            font-size: 40px;
            line-height: 49px;
            text-align: center;
            color: #FFFFFF;
        }
        &__subtitle{
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            text-align: center;
            color: #FFFFFF;
        }
        &-cart{
            background: #FFFFFF;
            box-shadow: 0px 20px 80px rgba(0, 0, 0, 0.08);
            border-radius: 8px;
            padding: 28px 30px;
            display: flex;
            justify-content: space-between;
        }
        &__btn{
            display: flex;
            align-items: center;
            gap: 20px;
            background: #2E9ADB;
            box-shadow: 0px 10px 20px rgba(78, 170, 224, 0.35);
            border-radius: 40px;
            font-weight: 900;
            font-size: 15px;
            line-height: 24px;
            padding: 28px 40px 28px 40px;
            border: none;
            text-align: center;
            text-transform: uppercase;
            color: #FFFFFF;
            &_s{
                background: #55B570;
            }
        }
        &-column{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &__text{
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            text-align: center;
            color: #000000;
            margin-bottom: 32px;
            max-width: 454px;
            }
        }
    }
    @media (max-width: 992px) {
        .intro{
            &-cart{
                gap: 20px;
            }
        }
    }
    @media (max-width: 768px) {
        .intro{
            &-details{
                gap: 20px;
                align-items: center;
                margin-top: 40px;
            }
            &__title{
                font-size: 42px;
                padding-top: 20px;
                line-height: 40px;
            }
            &__text{
                font-size: 16px;
                line-height: 19px;
                margin-top: 10px;
            }
            &__number{
                font-size: 30px;
                line-height: 37px;
            }
            &__subtitle{
                font-size: 13px;
                line-height: 15px;
            }
            &-cart{
                flex-direction: column;
                justify-content: center;
                gap: 40px;
            }
            &__line{
                display: none;
            }
            &-column{
                &__text{
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 19px
                }
            }
        }
    }
    @media (max-width: 448px) {
        .intro{
            &-details{
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
        }
    }
</style>